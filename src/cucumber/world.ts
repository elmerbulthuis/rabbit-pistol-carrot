import * as cucumber from "@cucumber/cucumber";
import { second } from "msecs";
import { AsyncLocalStorage } from "node:async_hooks";

const worldLocalStorage = new AsyncLocalStorage<World>();

export interface WorldParameters {}

export class World extends cucumber.World<WorldParameters> {
  public static get current(): World {
    const world = worldLocalStorage.getStore();
    if (world == null) {
      throw new TypeError("no current world");
    }
    return world;
  }
}

cucumber.setWorldConstructor(World);
cucumber.setDefaultTimeout(5 * second);

export const Given = <T extends any[]>(
  pattern: string,
  code: (this: World, ...args: T) => void | Promise<void>,
) => {
  cucumber.Given<World>(pattern, code);
};

export const When = <T extends any[]>(
  pattern: string,
  code: (this: World, ...args: T) => void | Promise<void>,
) => {
  cucumber.When<World>(pattern, code);
};

export const Then = <T extends any[]>(
  pattern: string,
  code: (this: World, ...args: T) => void | Promise<void>,
) => {
  cucumber.Then<World>(pattern, code);
};

cucumber.setDefinitionFunctionWrapper(function <T extends any[]>(
  fn: (this: World, ...args: T) => void | Promise<void>,
) {
  return async function (this: World, ...args: T) {
    return await worldLocalStorage.run(this, () => fn.apply(this, args));
  };
});
