import { Wrap, Title } from "../../Wrapper.styles"
import { AboutStyle,BoxContainer, Box, Div } from "./About.styles"

const About = () => {
  return (
    <AboutStyle id="about">
        <Wrap>
            <Title>
                <h1>about us</h1>
                <h3>who we are</h3>
            </Title>
            <article>
                <h3>We are a team of professional editors with over six years experience in editing cinematic elopement, destination, catholic weddings etc. We
                just don’t cut and join, we tell stories using detailed editing to capture every moments of your
                wedding.<br/> You are assured of memorable visuals and seamless sound design.
                </h3>

                <BoxContainer>
                    <Box>
                        <Div>
                        <span></span>
                        6-12 work days for delivery
                        </Div>
                        <Div>
                        <span></span>
                        Discount on multiple project at once
                        </Div>
                        <Div>
                        <span></span>
                        24/7 Support
                        </Div>
                    </Box>
                    <Box>
                        <Div>
                        <span></span>
                        Two drafts of project review
                        </Div>
                        <Div>
                        <span></span>
                        Clean Editing
                        </Div>
                    </Box>
                    <Box>
                        <Div>
                        <span></span>
                        Certified Experts
                        </Div>
                        <Div>
                        <span></span>
                        Affordable Prices
                        </Div>
                    </Box>
                </BoxContainer>
            </article>
        </Wrap>
    </AboutStyle>
  )
}

export default About