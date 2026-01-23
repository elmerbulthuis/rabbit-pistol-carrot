import * as cucumber from "@cucumber/cucumber";
import { second } from "msecs";
import assert from "node:assert";

type Cleanup = () => unknown | Promise<unknown>;

interface WorldParameters {}

export class World extends cucumber.World<WorldParameters> {
  //#region cleanup

  private readonly cleanups = new Array<Cleanup>();

  public registerCleanup(disposer: Cleanup) {
    this.cleanups.push(disposer);
  }

  public countCleanups() {
    return this.cleanups.length;
  }

  public async cleanupAll() {
    let cleanup: Cleanup | undefined;
    while ((cleanup = this.cleanups.pop()) != null) {
      await cleanup();
    }
  }

  //#endregion
}
cucumber.setWorldConstructor(World);
cucumber.setDefaultTimeout(5 * second);

cucumber.Before<World>(function () {
  assert.equal(this.countCleanups(), 0);
});

cucumber.After<World>(async function () {
  await this.cleanupAll();
});

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
