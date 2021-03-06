import { platform } from "../safe/process.js"
import shared from "../shared.js"

function isWin32() {
  const { env } = shared

  return Reflect.has(env, "electron")
    ? env.win32
    : env.win32 = platform === "win32"
}

export default isWin32
