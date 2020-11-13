import { Uish } from 'pollenium-uvaursi';
import { Bytes32 } from 'pollenium-buttercup';
export declare function computePrivateKey(struct: {
    presalt: Uish;
    know: Uish;
    have: Uish;
}): Promise<Bytes32>;
