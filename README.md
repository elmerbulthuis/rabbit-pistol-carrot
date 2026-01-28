# 🐰 Rabbit - 🔫 Pistol - 🥕 Carrot

A popular game for two players, also known as Rock-Paper-Scissors. Used to demonstrate the beauty of Specification by Example (SbE) in a workshop.

[![.github/workflows/test.yaml](https://github.com/The-Computerclub/rabbit-pistol-carrot/actions/workflows/test.yaml/badge.svg)](https://github.com/The-Computerclub/rabbit-pistol-carrot/actions/workflows/test.yaml) [![.github/workflows/static-analysis.yaml](https://github.com/The-Computerclub/rabbit-pistol-carrot/actions/workflows/static-analysis.yaml/badge.svg)](https://github.com/The-Computerclub/rabbit-pistol-carrot/actions/workflows/static-analysis.yaml) [![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

## Prerequisites

For an optimal experience you need the following software

- [Git](https://git-scm.com/) (of course)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)

## Installation

After checking out this repository install everything via:

```sh
npm install
```

## Building

Build everything in the repo with the following command:

```sh
npm run tsc
```

The build will compile TypeScript file, this is necessary for everything to work properly. If you are using Visual Studio Code then this is done automagically most of the time!

## Running tests

This repo has two kinds of test, tests written in TypeScript and tests in Gherkin. The TypeScript tests are run with the Node.js test runner and can be run via:

```sh
npm test
```

The Gherkin tests are run via Cucumber and can be executed via:

```sh
npm run test-sbe
```

This project is mostly there because it it used in a Specification by Example workshop, so the tests in Gherkin are most interesting.

## Visual Studio Code

The repository comes with a configuration for Visual Studio Code. After installing, open the directory in Visual Studio Code and install the recommended extentions. Then you can run any of the `.feature` files via the `Feature file` launch configuration, or any of the TypeScript tests via the `TypeScript file` launch configuration.

When using one of these configurations an incremental build is triggered automagically.

## Notes

This project is for educational purpose only. Feel free to contact me if you have any questions or need help.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
