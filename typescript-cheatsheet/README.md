yarn tsc --init

### tsconfig.json

module property is commonjs for require, esnext for imports/exports
esModuleInterop property makes sure we can import files without defaul export (React for example)
jsx property preserve means keep the jsx, react means compile the jsx to react.createElement
"include": ["src/**/*"] instructs typescript to include every folder and every file

### package.json

"build": "tsc -w" builds the project with local ts compiler and uses outdir as target

yarn add nodemon
nodemon -q dist -w -> watches only the dist folder quietly

yarn add concurrently

```bash
# -k to kill if one of the processes fails, -n to name processes, -c to color them:
yarn concurrently -k -n COMPILER,NODEMON -c yellow,blue "tsc -w" "nodemon -q dist -w"
```
