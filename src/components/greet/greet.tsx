
 import { GreetProps } from "./greet.type"
export const Greet = (props:GreetProps) => {
  return (
    <div>
        Hello {props.name}
    </div>
  )
}
