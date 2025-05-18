import { ServiceBoxStyle, StyledIcon } from './ServiceBox.styles';


export const ServiceBox = ({ icon, title, desc }) => {
  return (
    <ServiceBoxStyle>
        <StyledIcon icon={icon}/>
        <h4>{title}</h4>
        <p>{desc}</p>
    </ServiceBoxStyle>
  )
}

export default ServiceBox