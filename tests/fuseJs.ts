import Fuse from 'fuse.js';
import Test from './_baseTest';

class FuseJsTest extends Test {
  public testName = 'arrayFilter';

  private fuse = new Fuse(this.items, {
    keys: ['namePrepared'],
    shouldSort: true,
    isCaseSensitive: false,
  });

  constructor(public times: number, public getInput: () => string) { super(); }

  async testFunc(input: string) {
    return this.fuse.search(input).map(({ item }) => item);
  }
}

export default function fuseJsTest(times: number, getInput: () => string) {
  return new FuseJsTest(times, getInput).exec();
}
