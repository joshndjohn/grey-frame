import { FooterStyle, FooterContent } from './Footer.styles';
import Logo from '../logo/Logo';
// import { Wrap } from '../../Wrapper.styles';

const Footer = () => {
  return (
    <FooterStyle>
      <span></span>
      <FooterContent>
          <Logo/>
          <small>Copyright © 2022 Grey Frame Studios, All rights reserved</small>
      </FooterContent>
        
    </FooterStyle>
  )
}

export default Footer