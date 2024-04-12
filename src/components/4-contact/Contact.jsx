import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import mailAnimation from "../../animation/mail.json";

import './contact.css';
const Contact = () => {
    const [state, handleSubmit] = useForm("xayrlaoo");
    return (
        <section className='contact' id='contact_section'>
            <div className='flex title'>
                <span className='icon-mail-envelope-open' />
                <h1>contact us</h1>
            </div>
            <p>contact us for more information and get notified when i publish something new.</p>
            <div className="flex main">
                <form className='flex' onSubmit={handleSubmit}>
                    <div className='flex'>
                        <label htmlFor="email">email address:</label>
                        <input required autoComplete='off' type="email" name="email" id="email" placeholder='Email Address' />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex'>
                        <label htmlFor="message">your message:</label>
                        <textarea required name="message" id="message" placeholder='Message'/>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting}>submit</button>
                    {state.succeeded &&
                        <div className='success flex'>
                            <Lottie loop={false} className='lottie' animationData={doneAnimation} />
                            <p className='success-text'>your message has been sent successfuly</p>
                        </div>
                    }
                </form>
                <article>
                    <Lottie style={{ width: '400px', height: '400px' }} loop={true} className='mailAnimation' animationData={mailAnimation} />
                </article>
            </div>
        </section>
    )
}


export default Contact;