import { HeroStyle } from "./Hero.styles"
import { Wrap } from "../../Wrapper.styles"
import Btn from "../../components/btn/Btn"
import { btnBorder } from "../../utils/constants"

const Hero = () => {
  return (
    
      <HeroStyle id="home">
        <Wrap>
          <div>
            <span>
              <h1>
                Bringing your wedding story to life.
                Frame by Frame.
              </h1>
              <p>At our wedding post-production company, we know how important it is to get the perfect edit – for you and your clients.</p>
            </span>
            <Btn href={'#contact'} text={'book now'} background={btnBorder}/>
          </div>
        </Wrap>   
      </HeroStyle>
  )
}

export default Hero