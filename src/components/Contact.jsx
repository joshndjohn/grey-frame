import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react'
// import axios from 'axios';


const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [project, setProject] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [Package, setPackage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !email  || !message || !project  || !link  || !type || !Package){
        alert('Please fill all required fields.');
        return;
    }

    setStatus("Sending...");
    let details = {
      name: name,
      email: email,
      body: 
            `   <br>
                Project: ${project}<br>
                Project Type: ${type}<br>
                Project Link: ${link}<br>
                Package: ${Package}<br>
                Message: ${message}
            `
    }

    let response = await fetch("http://localhost:10000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);

    setName('');
    setEmail('');
    setType('');
    setPackage('');
    setProject('');
    setMessage('');
    setLink('');
  };
  return (
    <section className="contact" id="contact">
    <div className="contact-text">
        <h2>contact us</h2>
        <h5>book now</h5>
    </div>
    <div className="overlay2"></div>
    <div className="form-container">
        <form action="" name="form" className="form" id="form"  onSubmit={handleSubmit} method="post">
            <div className="form-controls">
                <div className="form-input">
                    <div className="form-control-box">
                        <div className="input-holder">
                            <label htmlFor="name">Your Name / Studio</label>
                            <input type="text" value={name} name="name" placeholder="eg. John Chris Enterprise" className="name"
                                id="studio-name" onChange={(e) => setName(e.target.value)}/>
                            <small>Error message</small>
                        </div>
                        <div className="input-holder">
                            <label htmlFor="project">Project Name</label>
                            <input type="text" value={project} name="project" placeholder="eg. John & Doe" className="project move"
                                id="project-name" onChange={(e) => setProject(e.target.value)}/>
                            <small>Error message</small>
                        </div>
                    </div>
                    <div className="form-control-box">
                        <div className="input-holder">
                            <label htmlFor="Package">Package</label>
                            <select name="Package" value={Package} className="Packages" id="packages" onChange={(e) => setPackage(e.target.value)}>
                                <option>Select a Package</option>
                                <option value="teaser-$100">Teaser:$100</option>
                                <option value="highlight-film-$200">Highlight Film:$200</option>
                                <option value="feature-film-$250">Feature Film:$250</option>
                                <option value="highlight-and-feature-film-$400">Highlight and Feature Film:$400
                                </option>
                            </select>
                            <small>Error message</small>
                        </div>
                        <div className="input-holder">
                            <label htmlFor="link">Project Link</label>
                            <input type="text" value={link} name="link" placeholder="Upload your footages on dropbox or google drive" className="link move"
                                id="project-link" onChange={(e) => setLink(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-control-box">
                        <div className="input-holder">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" value={email} name="email" placeholder="@gmail.com" className="email2" id="email" onChange={(e) => setEmail(e.target.value)}/>
                            <small>Error message</small>
                        </div>
                        <div className="input-holder">
                           <label htmlFor="type">Project Type</label>
                            <input type="text" value={type} name="type" placeholder="Wedding Films" className="type move" id="project-type" onChange={(e) => setType(e.target.value)}/>
                            <small>Error message</small>
                            <small>Error message</small>
                        </div>
                    </div>

                </div>
                <div className="input-holder">
                    <label htmlFor="message">Special Instruction</label>
                    <textarea name="message" value={message} id="text-area" className="Message" cols="10" rows="10"
                        placeholder="Share necessary instructions for the project eg. soundtrack, previous samples, preferred software etc. " onChange={(e) => setMessage(e.target.value)}></textarea>
                    <small>Error message</small>
                </div>
            </div>
            <div className="button-area">
                <button type="submit" name="submit" className="btn" >{status}</button>
            </div>
        </form>
        <div className="call-address">
            <div className="call">
                <i className="fa-solid fa-envelope icon">
                    <Icon icon="ph:envelope-simple" />
                </i>
                <div className="write-up">
                    <h5>Email Us:</h5>
                    <p>info@greyframestudios.com</p>
                </div>
            </div>
            <div className="call">
                <i className="fa-solid fa-house icon">
                    <Icon icon="ant-design:home-outlined" />
                </i>
                <div className="write-up">
                    <h5>Address:</h5>
                    <p>10404, Polo Trail Avenue,<br /> Bakersfield, California.</p>
                </div>
            </div>
        </div>
        <hr className="underline"/>
    </div>
</section>
  )
}

export default Contact