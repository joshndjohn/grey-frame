import { Wrap, Title } from "../../Wrapper.styles"
import { ServicesStyle } from "./Services.styles";
import { serviceBoxData } from "../../utils/constants";
import ServiceBox from "../../components/serviceBox/ServiceBox";
const Services = () => {
  return (
    <ServicesStyle id="services">
            <Wrap>
                <Title>
                    <h1> our services</h1>
                    <h3>what we offer</h3>
                </Title>

                <p>Weddings video production that’s creative and affordable.</p>
                <article>
                    {serviceBoxData.map(box=><ServiceBox key={box.title} {...box}/>)}   
                </article>
            </Wrap>
    </ServicesStyle>
    
  )
}

export default Services