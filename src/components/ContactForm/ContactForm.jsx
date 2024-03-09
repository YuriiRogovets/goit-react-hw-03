import css from "./ContactForm.module.css";

const ContactForm = ({ handleSubmit }) => {
  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="userName" />
      <label>Number</label>
      <input type="number" name="Number" />

      <button className={css.contactFormBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
