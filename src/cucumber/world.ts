import * as cucumber from "@cucumber/cucumber";
import { second } from "msecs";
import { AsyncLocalStorage } from "node:async_hooks";

const worldStorage = new AsyncLocalStorage<World>();

export interface WorldParameters {}

export class World extends cucumber.World<WorldParameters> {
  public static get current(): World {
    const world = worldStorage.getStore();
    if (world == null) {
      throw new TypeError("no current world");
    }
    return world;
  }
}

cucumber.setWorldConstructor(World);
cucumber.setDefaultTimeout(5 * second);

cucumber.setDefinitionFunctionWrapper(function <T extends any[]>(
  fn: (this: World, ...args: T) => void | Promise<void>,
) {
  return async function (this: World, ...args: T) {
    return await worldStorage.run(this, () => fn.apply(this, args));
  };
});
