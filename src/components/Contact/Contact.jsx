import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ userName, phoneNumber, handleDelete }) => {
  return (
    <div className={css.contactWrap}>
      <div className={css.contactData}>
        <p className={css.contactName}>
          <IoPersonSharp className={css.contactIcon} />
          {userName}
        </p>
        <p className={css.contactPhone}>
          <FaPhoneAlt className={css.contactIcon} />
          {phoneNumber}
        </p>
      </div>
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
