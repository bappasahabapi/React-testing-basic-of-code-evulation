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