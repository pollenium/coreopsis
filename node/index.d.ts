import * as _utils from './utils';
import { Uish } from 'pollenium-uvaursi';
import { Keypair } from 'pollenium-ilex';
import { Bytes32 } from 'pollenium-buttercup';
export declare const utils: typeof _utils;
export declare class Coreopsis {
    private readonly presalt;
    constructor(presalt: Uish);
    computePrivateKey(arg: {
        know: Uish;
        have: Uish;
    }): Promise<Bytes32>;
    promptComputePrivateKey(): Promise<Bytes32>;
    promptComputeKeypair(): Promise<Keypair>;
}
