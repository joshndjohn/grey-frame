import { useState } from "react";
import { contactData } from "../../utils/constants";
import { Wrap, Title } from "../../Wrapper.styles"
import { 
    ContactStyle, 
    ContactBox, 
    ContactForm, 
    ContactAddress, 
    AddressBox, 
    ContactIcon, 
    AddressText, 
    FormRow, 
    SubmitRow,
    Toast, 
    Spinner, 
    ErrorText, 
    SubmitButton, 
 } from "./Contact.styles";


const Contact = () => {
      // Form state
  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    package: "",
    projectLink: "",
    email: "",
    sampleLink: "",
    instructions: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType]   = useState("success");

  // Error state for validations
  const [errors, setErrors] = useState({
    email: "",
  });
  
  // Handle changes and validate important fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate email
    if (name === "email") {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for errors
    if (errors.email) {
      setToastType("error");
      setToastMessage("Email provided is invalid");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    const endpoint = "https://682b1c016a0884192b4ca494--lucky-syrniki-ebadcb.netlify.app/.netlify/functions/proxy";

    setLoading(true);

    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(formData),
      });
  
      setToastType("success");
      setToastMessage("Message sent. We will contact you shortly");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
  
      setFormData({
        name: "",
        projectName: "",
        package: "",
        projectLink: "",
        email: "",
        sampleLink: "",
        instructions: "",
      });
    } catch (err) {
      console.error('Error:', err);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <ContactStyle id="contact">
        <Wrap>
            <Title>
                <h1>contact us</h1>
                <h3>book now</h3>
            </Title>

            <ContactBox>
                <ContactForm onSubmit={handleSubmit}>
                    <span>
                        <FormRow>
                            <div>
                                <label htmlFor="name">Your Name / Studio</label>
                                <input
                                id="name" 
                                name="name"
                                type="text" 
                                placeholder="eg. John Chris Enterprise"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="projectName">Project Name</label>
                                <input 
                                id="projectName"
                                name="projectName"
                                type="text" 
                                placeholder="eg. John & Doe"
                                value={formData.projectName}
                                onChange={handleChange}
                                required
                                />
                            </div>
                        </FormRow>
                        <FormRow>
                            <div>
                                <label htmlFor="package">Package</label>
                                <select 
                                name="package" 
                                id="package"
                                value={formData.package}
                                onChange={handleChange}
                                required
                                >
                                    <option value="" disabled>Select a package</option>
                                    <option value="trailer">Trailer ($100)</option>
                                    <option value="highlight-film-$200">Highlight Film ($200)</option>
                                    <option value="feature-film-$250">Feature Film ($250)</option>
                                    <option value="documentary-film-$250">Documentary Film ($250)</option>
                                    <option value="multicam-ceremony-speech-$400">Multicam (Ceremony and Speech): $100 Each</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="projectLink">Project Link</label>
                                <input 
                                id="projectLink"
                                name="projectLink"
                                type="text" 
                                placeholder="Link to your footages on Dropbox or Google drive"
                                value={formData.projectLink}
                                onChange={handleChange}
                                required
                                />
                                {errors.projectLink && <ErrorText>{errors.projectLink}</ErrorText>}
                            </div>
                        </FormRow>
                        <FormRow>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input
                                id="email"
                                name="email" 
                                type="text"
                                 placeholder="@abcd.com"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required
                                 />
                                 {errors.email && <ErrorText>{errors.email}</ErrorText>}
                            </div>
                            <div>
                                <label htmlFor="sampleLink">Sample Link</label>
                                <input 
                                id="sampleLink"
                                name="sampleLink"
                                type="text" 
                                placeholder="Link to samples of highlight / documentary film"
                                value={formData.sampleLink}
                                onChange={handleChange}
                                required
                                />
                            </div>
                        </FormRow>
                        <SubmitRow>
                            <div>
                                <label htmlFor="instructions">Special Instructions</label>
                                <textarea 
                                id="instructions"
                                name="instructions" 
                                placeholder="Share necessary instructions for the project eg. soundtrack, previous samples, preferred software etc."
                                value={formData.instructions}
                                onChange={handleChange}
                                required
                                ></textarea>
                            </div>
                            <SubmitButton type="submit" $loading={loading}>
                              {loading ? <Spinner /> : 'Submit'}
                            </SubmitButton>
                        </SubmitRow>
                        {(showToast !== null) && (
                        <Toast $visible={showToast} $type={toastType}>
                        {toastMessage}
                        </Toast>
                )}
                    </span>
                </ContactForm>
                <ContactAddress>
                {
                        contactData.map(({ icon,contact, desc })=>{
                            return(
                                <AddressBox key={contact}>
                                    <span>
                                    <ContactIcon icon={icon}></ContactIcon>
                                    </span>
                                    <AddressText>
                                        <h3>{contact}</h3>
                                        <small>{desc}</small>
                                    </AddressText>
                                </AddressBox>
                            );
                        })
                } 
                </ContactAddress>    
            </ContactBox>
        </Wrap>
    </ContactStyle>

  )
}

export default Contact