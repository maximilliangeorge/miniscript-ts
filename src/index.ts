import Module from './miniscript.js'

export class Policy {
  instance: any

  constructor () {
  }

  public async init () {
    this.instance = await Module()
  }

  public compile (src: string) {

    const { cwrap, _malloc, _free, UTF8ToString } = this.instance

    const _compile = cwrap('miniscript_compile', 'none', ['string', 'number', 'number', 'number', 'number', 'number', 'number'])
    const msOut = _malloc(10000)
    const costOut = _malloc(500)
    const asmOut = _malloc(100000)

    _compile(
      src,
      msOut,
      10000,
      costOut,
      500,
      asmOut,
      100000
    )

    const out = {
      ms: UTF8ToString(msOut),
      cost: UTF8ToString(costOut),
      asm: UTF8ToString(asmOut)
    }

    _free(msOut)
    _free(costOut)
    _free(asmOut)

    return out

  }

  public analyze (src: string) {

    const { _malloc, _free, UTF8ToString, cwrap } = this.instance

    const _analyze = cwrap('miniscript_analyze', 'none', ['string', 'number', 'number', 'number', 'number'])

    const msOut = _malloc(10000)
    const costOut = _malloc(500)
    const asmOut = _malloc(100000)

    _analyze(
      src,
      msOut,
      10000,
      costOut,
      500,
      asmOut,
      100000
    )

    const out = {
      ms: UTF8ToString(msOut),
      cost: UTF8ToString(costOut),
      asm: UTF8ToString(asmOut)
    }

    _free(msOut)
    _free(costOut)
    _free(asmOut)

    return out

  }

}
