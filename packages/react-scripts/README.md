# blockstack-react-scripts [![npm version](https://img.shields.io/npm/v/blockstack-react-scripts.svg?style=flat)](https://www.npmjs.com/package/blockstack-react-scripts)

> initialize your [`create-react-app`](https://github.com/facebookincubator/create-react-app)-based project with support for [`blockstack.js`](https://github.com/blockstack/blockstack.js), along with some pre-configured goodies (like authentication boilerplate, scss modules, and decorator support).

## Features

CRA + Blockstack fixes:

* the dev server is configured to work with CORS (to & from) so that you won't experience any [authentication errors](https://forum.blockstack.org/t/dealing-with-cors-errors-in-blockstack-auth-and-react/2592) in development
* the build script works properly (whitelists uncompiled Blockstack dependencies to prevent [minification failure](https://github.com/facebook/create-react-app/issues/3734))

Extras:

* works, out of the box, with SASS/SCSS and CSS (modules of course!)
* [tc39 stage-2 decorators](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
* never import "React" (it will be loaded into JSX files without the explicit import)
* [module resolving](https://github.com/tleunen/babel-plugin-module-resolver): '~' resolves to the root directory's 'src' folder
* [SVG inlining](https://github.com/airbnb/babel-plugin-inline-react-svg)
* [idx](https://github.com/facebookincubator/idx#readme) calls are compiled in production
* console logs, warns and errors are removed in production

## Initializing your dapp

Initiaize your CRA projects the way you usually do with the exception of one change: Use the `--scripts-version` argument as `blockstack-react-scripts`:

```diff
-   create-react-app my-app
+   create-react-app my-dapp --scripts-version blockstack-react-scripts
```

## Exploring the folder structure

```
my-app
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── index.js
    └── components
    └── utilities
    └── assets
    └── _variables.scss
    └── global-styles.scss
    └── styles.scss
```

## This template is relatively unopinionated

The features I've included in this config are pretty standard for any react project. [Dan Abromov](https://github.com/gaearon), the creator and primary maintainer of CRA, wanted CRA to be a collection of "sensible defaults." He and the community most certainly achieved this, but they did so at the price of simple plugin usage. I added in a few of those must-have plugins, and left the CRA "ejection" process (so feel free to eject if you need more functionality). There's another option available to you if you want to use CRA to bootstrap your project, but want additional configuration: try out [react-app-rewire-blockstack](https://github.com/harrysolovay/react-app-rewire-blockstack). It's easy to get goin', and paves the way for simpler configuration down the line (without ejecting). Beyond the config being relatively unopinionated, the template generated should be good for most use cases. It shows how to impliment Blockstack's authentication, and includes some helpful resources for exploring the Blockstack ecosystem (real-life Pied Piper). So yea... I hope this suits your needs. You're gonna kill it 👍

## Contributing

Please feel free to message me with any questions, feature requests, or even pull requests!

###### This library has been released under the [MIT license](https://mit-license.org/)