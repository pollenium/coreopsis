import { Coreopsis } from '../'
import { Uu } from 'pollenium-uvaursi'

async function run() {
  const coreopsis = new Coreopsis(Uu.fromUtf8('test'))
  const keypair = await coreopsis.promptComputeKeypair()
  console.log(keypair.getAddress().uu.toHex())
}

run()
