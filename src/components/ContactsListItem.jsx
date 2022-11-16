import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li>
      {name}: {number}
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};
