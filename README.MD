# Testing with - Jest

## Source 

https://jestjs.io/docs/getting-started


## Installation

1. Clone this repository to your local machine

2. Create `package.json` via npm:

  ```bash
  npm init
```

3. Install `jest` with "node modules" and "package-lock.json" via npm:

  ```bash
  npm install --save-dev jest 
  ```

4. In `package.json` change:

  ```bash
      "scripts": {
        "test": "jest"
      },
  ```

  In order to have test `coverage` report, change to:

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