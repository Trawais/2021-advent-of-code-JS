# 2021-advent-of-code-JS

## Prerequisites
* node v18.4.0
* npm v8.12.1

I bet you you can definitely find also some other working versions,
but the original solution has been tested on these versions.

## How to run?
1. Build the project by `npm i`
2. Run all task solutions `npm test`
3. Run only one specific task solution (e.g.: 04) `npm test -- --grep '04'`

## How to debug in VSCode?
There is `./vscode/launch.json` file prepared for easy debuggin in VSCode editor.
Just click magic "Start Debugging" green triangle button in the section "Run and Debug".
Do not forget to place your breakpoint wisely.
Also you must launch your debuggin session from the related `*.spec.js` file,
because the current shown file is pasted into the debugging command and is passed as a argument to `mocha` framework.
