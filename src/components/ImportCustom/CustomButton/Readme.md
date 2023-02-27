
    
 📁 **CustomButton.tsx**
```ts
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CustomButton(props: { name: string; clickFunction: () => void }) {
  const { name, clickFunction } = props;

  return (
    <Stack spacing={2} direction="row" sx={{ my: 2 }}>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => {clickFunction();}}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
      </Button>
    </Stack>
  );
}

export default CustomButton;

```
📝 **CustomButton.test.tsx**

```ts
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton';


//TODO: CustomButton component renders correctly with props

test('CustomButton component renders correctly with props', () => {
  const mockClickFunction = jest.fn();
  const buttonName = "Approved";
  render(<CustomButton name={buttonName} clickFunction={mockClickFunction} />);
  
 
});


//TODO: Button with the provided name is rendered
test('Button with the provided name is rendered',()=>{
    const mockClickFunction = jest.fn();
    const buttonName = "Click Me";
    render(<CustomButton name={buttonName} clickFunction={mockClickFunction} />);   
    const buttonElement = screen.getByRole('button', { name: buttonName });
     expect(buttonElement).toBeInTheDocument();
});


//TODO:simulate a click event and check that the provided click function is called

test('simulate a click event and check that the provided click function is called', () => {

    // CustomButton component renders correctly with props
    const mockClickFunction = jest.fn();
    const buttonName = "Click Me";
    render(<CustomButton name={buttonName} clickFunction={mockClickFunction} />);
    
    // check that the button with the provided name is rendered
    const buttonElement = screen.getByRole('button', { name: buttonName });
    expect(buttonElement).toBeInTheDocument();
  
    // simulate a click event and check that the provided click function is called
    fireEvent.click(buttonElement);
    expect(mockClickFunction).toHaveBeenCalled();
  });
  

```