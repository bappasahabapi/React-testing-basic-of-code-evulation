`📦 Test Structure`

    test(name,function,timeout)
    
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

`🧿 JEST WATCH MODE`



