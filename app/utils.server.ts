import * as jwt from "jsonwebtoken";

export function signJWT(
  payload: { [key: string]: any },
  expiresIn: string | number,
  secretKey: string
) {
  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
}
