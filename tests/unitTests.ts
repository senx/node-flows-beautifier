/*
 *  Copyright 2021 SenX S.A.S.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */



import { readFileSync } from 'fs';
import { FlowsBeautifier, BeautifierOptions } from '../lib/flows-beautifier';

console.log("FLoWS Beautifier test #1");
let beautifier: FlowsBeautifier = new FlowsBeautifier({});

const nbtest = 1;

for (let n = 1; n <= nbtest; n++) {
  const fileIn:string = readFileSync(`tests/test${n}_in.flows`, 'utf-8');
  const result:string = beautifier.flowsBeautify(fileIn);
  const fileOut:string = readFileSync(`tests/test${n}_out.flows`, 'utf-8');

  // compare line by line
  let outLines:string[] = fileOut.split('\n');
  let resultLines:string[] = result.split('\n');

  if (outLines.length!= resultLines.length) {
    throw (`test #${n} failed, not the expected number of lines (${outLines.length} vs ${resultLines.length})`);
  }

  for (let l=0; l<outLines.length;l++){
    if (outLines[l] !== resultLines[l]) {
      throw(`test #${n} failed at line ${l+1}, \n out   =${resultLines[l]}\n expect=${outLines[l]}`);
    }
  }

}