# Getting Started with Create React App

`📦By default   jest is install inside  `

    node_modules/react-scripts/package.json 

`📦 Project setup`

    node --version
    git --version
    npx create-react-app . --template typescript
    npm start
`To Test the File run the command in the terminal`

    npm test


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

`📁-02. working on component/greet/greet.test.tsx`

### 🗒️ *greet.tsx*

```ts
import { GreetProps } from "./greet.type"
export const Greet = (props:GreetProps) => {
  return (
    <div>
        Hello {props.name}
    </div>
  )
}

```
### ☑️ greet.test.tsx
```ts
import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

test('Greet Component renders correctly',()=>{
    render(<Greet/>)
    //  const textElement = screen.getByText('hello');
     const textElement = screen.getByText(/hello/i);
     expect(textElement).toBeInTheDocument()
})

test('Greet render with name props',()=>{
    render(<Greet name='bappa'/>)
   const textElement= screen.getByText('Hello bappa')
    expect(textElement).toBeInTheDocument()
})

```