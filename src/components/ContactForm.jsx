import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();

    const contact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    const isUniqueContact = contactsList.find(
      ({ name, number }) => name === contact.name || number === contact.number
    );

    !isUniqueContact
      ? dispatch(addContact(contact))
      : alert('This contact already exist');

    e.target.reset();
  };

  return (
    <form className="contact-form" onSubmit={onFormSubmit}>
      <label className="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
