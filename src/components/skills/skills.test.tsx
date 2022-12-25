import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";


describe('Skills Component', () => { 
    const skills =["HTML", "CSS", "JavaScript"];

    test('Render correctly',()=>{

        render(<Skills skills={skills} />)
        const listElement =screen.getByRole('list')
        expect(listElement).toBeInTheDocument();
    });

    test('render a list of skills',()=>{
        render(<Skills skills={skills} />)
        const listItemElements =screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
        // expect(listItemElements).toHaveLength(3);
    })

    test('Render Login Button',()=>{
        render(<Skills skills={skills} />)
        const logingButton =screen.getByRole('button',{
            name:'Login'
        })
        expect(logingButton).toBeInTheDocument()
    })

    test('Start learning button is not rendered',()=>{
        render(<Skills skills={skills} />)
        const startLearingButton =screen.queryByRole('button',{
            name:'Start learning'
        })
        // const startLearingButton =screen.getByRole('button',{
        //     name:'Start learning'
        // })
        expect(startLearingButton).not.toBeInTheDocument()
    });

    test('Start learning button is eventually displayed',async()=>{
        render(<Skills skills={skills}  />)
        const startLearingButton= await screen.findByRole('button',{
            name:'Start learning'
        },
        {
            timeout:2000,
        }
        );
        expect(startLearingButton).toBeInTheDocument();
    })
 })