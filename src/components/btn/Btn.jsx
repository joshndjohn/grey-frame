import { Button } from "./Btn.styles"

const Btn = ({ href, text }) => {
  return (
    <Button href={href}>
      {text}
    </Button>)
}

export default Btn