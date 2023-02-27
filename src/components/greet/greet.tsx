
import { GreetProps } from "./greet.type"
export const Greet = (props:GreetProps) => {

  const {name}=props
  return (
    <div>
        Hello {name} 
        <h1>{props.age}</h1>
    </div>
  )
}

