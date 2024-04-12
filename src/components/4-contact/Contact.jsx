import React from 'react';
import './contact.css';
const Contact = () => {
    return (
        <section className='contact' id='contact_section'>
            <div className='flex title'>
                <span className='icon-mail-envelope-open' />
                <h1>contact us</h1>
            </div>
            <p>contact us for more information and get notified when i publish something new.</p>
            <div className="flex main">
                <form className='flex'>
                    <div className='flex'>
                        <label htmlFor="email">email address:</label>
                        <input required type="email" name="email" id="email" placeholder='Email Address' />
                    </div>
                    <div className='flex'>
                        <label htmlFor="message">your message:</label>
                        <textarea required name="message" id="message" placeholder='Message'/>
                    </div>
                    <button>submit</button>
                </form>
                <article>animation</article>
            </div>
        </section>
    )
}


export default Contact;