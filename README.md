`📦 Test Structure`

    test(name,function,timeout)

   🧿 test.only() :- just run the test file

   🧿 test.skip() :- just skip the test file
    
` 📁-01. First test ` --> **App.test.tsx**
```ts
import {render, screen} from '@testing-library/react';
import App from './App'

test('render learn react link',()=>{
    render(<App/>);
    const linkElement =screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
})

```

`🐘 By default   jest is install inside  `

    node_modules/react-scripts/package.json 

`📦 Project setup`

    node --version
    git --version
    npx create-react-app . --template typescript
    npm start
`To Test the File run the command in the terminal`

    npm test

🧿 **JEST WATCH MODE**

        › Press a to run all tests.
        › Press f to run only failed tests.
        › Press o to only run tests related to changed files.
        › Press q to quit watch mode.
        › Press p to filter by a filename regex pattern.
        › Press t to filter by a test name regex pattern.
        › Press Enter to trigger a test run.

🧿 **14. Code Coverage** inside the package.json in "scripts"part 

`npm i --save-dev istanbul`

    "coverage": "npm test -- --coverage --watchAll"
    "jest": {
        "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}"
        ],
        "coverageThreshold": {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statement": -10
        }
        }
    },


