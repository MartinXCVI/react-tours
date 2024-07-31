import './ContactForm.css'


const ContactForm = () => {
  return (
    <section className="form-wrapper">
      <section className="form-section">
        <form action="" id="contact-form">
          <fieldset className="contact-field">
            <legend>Contact us</legend>
            <section className="form-sections">
              <label htmlFor="name-input">Full Name</label>
              <input type="text" name="full-name" id="name-input" placeholder='Your full name' />
            </section>
            <section className="form-sections">
              <label htmlFor="email-input">Email</label>
              <input type="email" name="email" id="email-input" placeholder='Your email address' />
            </section>
            <section className="form-sections">
              <label htmlFor="phone-input">Phone</label>
              <input type="tel" name="phone" id="phone-input" placeholder='Your phone number' />
            </section>
            <section className="form-sections">
              <label htmlFor="subject-input">Subject</label>
              <input type="text" name="subject" id="subject-input" placeholder='Your subject here' />
            </section>
            <section className="form-sections">
              <label htmlFor="message-textarea">Message</label>
              <textarea name="message" id="message-textarea" rows="5" placeholder='Your message here'></textarea>
            </section>
          </fieldset>
        </form>
      </section>
      
    </section>
  )
}

export default ContactForm