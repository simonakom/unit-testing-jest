# Testing with - Jest

## Source 

https://jestjs.io/docs/getting-started


## Installation

1. Clone this repository to your local machine

2. Install dependencies

```bash
  npm install
```
3. In order to have test `coverage` report, in `package.json` change:

  ```bash
        "scripts": {
          "test": "jest --coverage"
      },
  ```

 This adds new `coverage` directory --> with `Icov-report` folder --> `index.html` = for detail overview of tests

## Run tests

  ```bash
      npm test
  ```

## Additional Configurations (verbosity)

 1. Install the latest version of "Jest" after which appear `jest.config.js` configuration file:

   ```bash
       npm init jest@latest
   ```

 2. In the end of `jest.config.js` file change:

   ```bash
    verbose: true,
    ```
    The `verbose` option increases the level of detail in the test output.