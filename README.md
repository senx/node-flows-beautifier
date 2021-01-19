# node-flows-beautifier

FLoWS is one of the two analysis languages brought by [Warp 10 time series database](https://www.warp10.io/).

FLoWS beautifier was adapted from js-beautifier. It has no dependencies.


## Use the FLoWS beautifier

```
npm install @senx/flows-beautifier
```


```
import { FLoWSBeautifier, BeautifierOptions } from '@senx/flows-beautifier';
let beautifier: FLoWSBeautifier = new FLoWSBeautifier();

const result:string = beautifier.flowsBeautify(input);

```

Default options : 2 spaces for indentation.

More options could be found in BeautifierOptions, and passed to the FLoWSBeautifier constructor.
