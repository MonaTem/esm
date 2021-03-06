import builtinLookup from "../builtin-lookup.js"
import dirname from "../path/dirname.js"
import isObject from "./is-object.js"

function getModuleDirname(request) {
  if (typeof request === "string") {
    const result = dirname(request)

    if (result === "." &&
        Reflect.has(builtinLookup, request)) {
      return ""
    }

    return result
  }

  if (isObject(request)) {
    if (Reflect.has(builtinLookup, request.id)) {
      return ""
    }

    const { filename } = request

    if (typeof filename === "string") {
      return dirname(filename)
    }
  }

  return "."
}

export default getModuleDirname
