# Testing with - Jest

## Source 

https://jestjs.io/docs/getting-started


## Installation

1. Install `package.json` via npm:


    ```bash
    npm init
    ```

2. Install `node modules` and `package-lock.json` via npm:


   ```bash
    npm install --save-dev jest 
    ```


3. Create a js file named `sum.js` with the following sample data:

 ```javascript
    function sum(a, b) {
      return a + b;
    }

    module.exports = sum;
  ```

  3. Create a js "test" file named `sum.test.js` with the following sample data:

 ```javascript
const sum = require("./sum");

describe("sum tests", () => {
  test("adds 1 + 1 to equal 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
  ```

  4. In `package.json` change:

  ```bash
      "scripts": {
        "test": "jest"
      },
  ```

  or to have test `coverage` report change:

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

  1. Add configuration after which appear `jest.config.js` directory:

  ```bash
      npm init jest@latest
  ```

  - Would you like to use Typescript for the configuration file? --> No
  - Choose the test environment that will be used for testing --> node
  - Do you want Jest to add coverage reports? --> No
  - Which provider should be used to instrument code for coverage? --> v8
  - Automatically clear mock calls, instances, contexts and results before every test? --> No

2. The `verbose` option increases the level of detail in the test output:

- In `jest.config.js` add:

  `// Indicates whether each individual test should be reported during the run`

   ` verbose: true,`