import { Keypair } from 'pollenium-ilex'
import { promptComputePrivateKey } from './promptComputePrivateKey'
import { Uish } from 'pollenium-uvaursi'

export async function promptComputeKeypair(presalt: Uish): Promise<Keypair> {
  const privateKey = await promptComputePrivateKey(presalt)
  return new Keypair(privateKey)
}
