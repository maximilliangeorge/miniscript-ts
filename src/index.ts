import Module from './miniscript.js'

type Policy = string
type Miniscript = string

export async function compilePolicy (policy: Policy) {

  const instance = await Module()

  const { cwrap, _malloc, _free, UTF8ToString } = instance

  const compile = cwrap('miniscript_compile', 'none', ['string', 'number', 'number', 'number', 'number', 'number', 'number'])
  const msOut = _malloc(10000)
  const costOut = _malloc(500)
  const asmOut = _malloc(100000)

  compile(
    policy,
    msOut,
    10000,
    costOut,
    500,
    asmOut,
    100000
  )

  const compiled = {
    ms: UTF8ToString(msOut),
    cost: UTF8ToString(costOut),
    asm: UTF8ToString(asmOut)
  }

  _free(msOut)
  _free(costOut)
  _free(asmOut)

  return compiled

}



export async function analyzeMiniscript (miniscript: Miniscript) {

  const instance = await Module()

  const { _malloc, _free, UTF8ToString, cwrap } = instance

  const _analyze = cwrap('miniscript_analyze', 'none', ['string', 'number', 'number', 'number', 'number'])

  const analyzeOut = _malloc(50000)
  const asmOut = _malloc(100000)

  _analyze(
    miniscript,
    analyzeOut,
    50000,
    asmOut,
    100000
  )

  const analyzed = {
    analyzeOut: UTF8ToString(analyzeOut),
    asmOut: UTF8ToString(asmOut)
  }

  _free(analyzeOut)
  _free(asmOut)

  return analyzed

}
