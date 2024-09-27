# Testing with - Jest

## Source 

https://jestjs.io/docs/getting-started

## Prerequisites

- Node.js.
- npm (Node Package Manager): Comes with Node.js installation.

## Installation

1. Clone this repository to your local machine.

2. Install dependencies:

```bash
  npm install
```
3. In order to have test `coverage` report, in `package.json` change:

  ```bash
        "scripts": {
          "test": "jest --coverage"
      },
  ```

 This adds new `coverage` directory for detail overview of tests: `coverage/Icov-report/index.html`.

## Run tests

  ```bash
      npm test
  ```

## Additional Configurations (verbosity)

 1. After instaling the latest version of Jest - `npm init jest@latest` - appears "jest.config.js" configuration file.

 2. In the end of `jest.config.js` changed:

  ```bash
    verbose: true,
  ```

The `verbose` option increases the level of detail in the test output.