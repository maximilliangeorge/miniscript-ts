import { compilePolicy, analyzeMiniscript } from '../src/index'

describe('basic api', () => {

  test('compiles policy to miniscript', async () => {

    const policy = 'and(pk(A),or(pk(B),or(9@pk(C),older(1000))))'
    const compiled = await compilePolicy(policy)

    expect(compiled.ms).toBe('and_v(or_c(pk(B),or_c(pk(C),v:older(1000))),pk(A))')

  })

  test('analyzes miniscript', async () => {

    const miniscript = 'and_v(or_c(pk(B),or_c(pk(C),v:older(1000))),pk(A))'
    const analyzed = await analyzeMiniscript(miniscript)

    expect(analyzed.asmOut).toEqual(
        '<B> OP_CHECKSIG OP_NOTIF\n' +
        '  <C> OP_CHECKSIG OP_NOTIF\n' +
        '    <e803> OP_CHECKSEQUENCEVERIFY OP_VERIFY\n' +
        '  OP_ENDIF\n' +
        'OP_ENDIF\n' +
        '<A> OP_CHECKSIG\n'
    )

  })

})
