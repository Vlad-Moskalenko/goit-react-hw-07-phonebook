import { ContactListItem } from './ContactsListItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ol className="contacts-list">
      {contacts.map(
        ({ name, number, id }) =>
          name.toLowerCase().includes(filter.toLowerCase()) && (
            <ContactListItem
              key={nanoid()}
              id={id}
              name={name}
              number={number}
            />
          )
      )}
    </ol>
  );
};
