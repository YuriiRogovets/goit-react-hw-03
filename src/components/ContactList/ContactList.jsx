import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactListWrap}>
      {contacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact userName={item.name} phoneNumber={item.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
