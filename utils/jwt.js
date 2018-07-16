import jwt from 'jsonwebtoken'

const secretKey = 'YHWDtdghjwTWFDgwtyhndwd2345678432g6fytvgh34gh23j32h4vgh2j3k1123434dcdcsfrfe'

export const makeToken = payloads => (
  jwt.sign( payloads, secretKey, {
    expiresIn: '7d'
  } )
)

export const decodeToken = token => (
  jwt.verify( token, secretKey )
)