import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY

      )
      .then(
        () => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        },
        () => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        }
      );

    e.target.reset();
  };

  return (
    <div className="form-container">

      <form onSubmit={sendEmail}>
        <legend>Contact Us</legend>
        <label htmlFor="name">Full Name:</label>
        <input id="name" name="name" type="text" required />
        <br></br>

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <br></br>

        <label htmlFor="message">Write a message:</label>
        <textarea id="message" name="message" required />
        <br></br>

        <input type="submit" value="Send" disabled={isSubmitting} />

        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;