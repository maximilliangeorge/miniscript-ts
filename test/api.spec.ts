import { Policy } from '../src/index'

describe('first test', () => {

  test('should compile', async () => {

    const policy = new Policy()

    await policy.init()

    const compiled = policy.compile('and(pk(A),or(pk(B),or(9@pk(C),older(1000))))')
    //const analyzed = policy.analyze('and_v(v:pk(K),pk(A))')

    expect(compiled.ms).toBe('and_v(or_c(pk(B),or_c(pk(C),v:older(1000))),pk(A))')

  })

})
