import { Uu, Uish } from 'pollenium-uvaursi'
import crypto from 'crypto'
import prompt from 'prompt-promise'
import { Bytes32 } from 'pollenium-buttercup'
import { genSha256 } from 'pollenium-shasta'

const iterations = Math.pow(2, 32) - 1
const keyLength = 32
const digest = 'sha256'

export async function computePrivateKey(struct: {
  presalt: Uish,
  know: Uish,
  have: Uish
}): Promise<Bytes32> {
  const salt = genSha256(struct.presalt)
  const know = Uu.wrap(struct.know)
  const have = Uu.wrap(struct.have)

  const knowAndhave = Uu.genConcat([know, have])

  return new Promise<Bytes32>((resolve, reject) => {
    crypto.pbkdf2(knowAndhave.u, salt.u, iterations, keyLength, digest, (error, derivedKey) => {
      if (error) {
        reject(error)
        return
      }
      resolve(new Bytes32(derivedKey))
    })

  })
}
