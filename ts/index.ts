import * as _utils from './utils'
import { Uish } from 'pollenium-uvaursi'
import { Keypair } from 'pollenium-ilex'
import { Bytes32 } from 'pollenium-buttercup'

export const utils = _utils

export class Coreopsis {
  constructor(private readonly presalt: Uish) {}

  computePrivateKey(arg: { know: Uish, have: Uish }): Promise<Bytes32> {
    return utils.computePrivateKey({ ...arg, presalt: this.presalt })
  }

  promptComputePrivateKey(): Promise<Bytes32> {
    return utils.promptComputePrivateKey(this.presalt)
  }

  promptComputeKeypair(): Promise<Keypair> {
    return utils.promptComputeKeypair(this.presalt)
  }
}
