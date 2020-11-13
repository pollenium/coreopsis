import { computePrivateKey } from './computePrivateKey'
import prompt from 'prompt-promise'
import { Bytes32 } from 'pollenium-buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'

export async function promptComputePrivateKey(presalt: Uish): Promise<Bytes32> {
  const knowUtf8 = await prompt.password('Something you know: ')
  const haveUtf8 = await prompt.password('Something you have: ')
  const know = Uu.fromUtf8(knowUtf8.trim())
  const have = Uu.fromUtf8(haveUtf8.trim())
  return computePrivateKey({ know, have, presalt })
}
