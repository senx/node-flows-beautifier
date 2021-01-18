# node-flows-beautifier

FLoWS is one of the two analysis languages brought by [Warp 10 time series database](https://www.warp10.io/).

FLoWS beautifier was adapted from js-beautifier. It has no dependencies.


## Use the FLoWS beautifier

```
import { FlowsBeautifier, BeautifierOptions } from '../lib/flows-beautifier';
let beautifier: FlowsBeautifier = new FlowsBeautifier({});

const result:string = beautifier.flowsBeautify(input);

```

Default options : 2 spaces for indentation.
