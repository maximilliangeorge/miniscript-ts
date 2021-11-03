# miniscript-ts

Typescript bindings for Peter Wuilles Bitcoin Miniscript compiler and analyzer.

## Usage

```
import { compilePolicy, analyzeMiniscript } from 'miniscript-ts'

const compiled = await compilePolicy('and(pk(A),or(pk(B),or(9@pk(C),older(1000))))')
const analyzed = await analyzeMiniscript('and_v(or_c(pk(B),or_c(pk(C),v:older(1000))),pk(A))')
```

## Licence

MIT
