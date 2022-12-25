import {render, screen} from '@testing-library/react';
import { Greet } from './greet';


describe('Greet',()=>{
    test('Greet Component renders correctly',()=>{
        render(<Greet/>)
        //  const textElement = screen.getByText('hello');
         const textElement = screen.getByText(/hello/i);
         expect(textElement).toBeInTheDocument()
    })

})

describe('Nested',()=>{
    test('Greet render with name',()=>{
        render(<Greet name='bappa'/>)
       const textElement= screen.getByText('Hello bappa')
        expect(textElement).toBeInTheDocument()
    })
})

