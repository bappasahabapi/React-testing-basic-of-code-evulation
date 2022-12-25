import { render, screen } from "@testing-library/react"
import { Counter } from "./counter"
import user from '@testing-library/user-event'

describe('Counter Component', () => {
    test('counter render correctly',()=>{

        // ------- test component render correctly
        render(<Counter/>)
        const counterElement =screen.getByRole('heading');
        expect(counterElement).toBeInTheDocument();

        // test increment decrement button

        const incrementButton =screen.getByRole('button',{
            name:'Increment',
        });
        expect(incrementButton).toBeInTheDocument();  

        const decrementButton =screen.getByRole('button',{
            name:'Decrement',
        });
        expect(decrementButton).toBeInTheDocument();  

    });
    
    // test initial state of the button click

    test('render a count of 0', ()=>{
        render(<Counter/>);
        const counterElement=screen.getByRole('heading');
        expect(counterElement).toHaveTextContent('0');
    });

    // --------------------> Starting user interaction part <-------------
    test('render a count of 1 after clicking the increment button',async ()=>{
        user.setup();
        render(<Counter/>)
        const incrementButton =screen.getByRole('button',{
            name:'Increment',
        });
        // await user.dblClick(incrementButton)
       await user.click(incrementButton)
        const counterElement =screen.getByRole('heading')
        expect(counterElement).toHaveTextContent('1')
        // expect(counterElement).toHaveTextContent('2')





    })














})