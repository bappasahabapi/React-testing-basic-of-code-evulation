import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("ApplicationDa", () => {
  test("Render Application component correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox",{
      name:'Name'
    });
    expect(nameElement).toBeInTheDocument();
    // const nameElement = screen.getByRole("textbox");
    // expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const bioElement =screen.getByRole("textbox",{
      name:'Biography'
    });
    expect(bioElement).toBeInTheDocument();

    //--- GET BY ROLE 

    const pageHeadingh1 =screen.getByRole('heading',{
      level:1,
      // name:"Job application form"
    });
    expect(pageHeadingh1).toBeInTheDocument();

    const passCaseBappa =screen.getByRole("heading",{
      level:2,
      // name:"Pass case bappa"
    });
    expect(passCaseBappa).toBeInTheDocument();

   /*  const pageHeadingh1 =screen.getByRole('heading',{
      name:"Job application form"
    });
    expect(pageHeadingh1).toBeInTheDocument();

    const passCaseBappa =screen.getByRole("heading",{
      name:"Pass case bappa"
    });
    expect(passCaseBappa).toBeInTheDocument();
    
    */

     //--- GET BY LABEL TEXT
     const nameElement2 =screen.getByLabelText('Name');
     expect(nameElement2).toBeInTheDocument();

    //  const termsElement2 =screen.getByLabelText()

    const  nameElement3 =screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const paragraphElement =screen.getByText('All fields are madatory')
    expect(paragraphElement).toBeInTheDocument();

    const displayValueElemnt =screen.getByDisplayValue('bappasaha');
    expect(displayValueElemnt).toBeInTheDocument();

    const imageElement =screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument();

    // const customElement =screen.getByTestId('custom-element')
    // expect(customElement).toBeInTheDocument();






  });
});

// test('render component correctly',()=>{
//     render(<Application/>);
//   const nameElement =  screen.getByRole('textbox')
//   expect(nameElement).toBeInTheDocument();
// });
