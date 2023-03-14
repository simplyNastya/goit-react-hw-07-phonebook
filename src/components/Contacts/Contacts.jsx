import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { selectFilter } from 'redux/filter/filter-selectors';
import styles from './contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filterSearch = () => {
    if (!filter) {
      return contacts;
    }
    const newContact = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return newContact;
  };

  const filtredContacts = filterSearch();

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <div>
      <ul className={styles.list}>
        {filtredContacts.map(contact => {
          return (
            <li className={styles.item} key={contact.id}>
              <p className={styles.itemName}>
                {contact.name}: <span>{contact.number}</span>
              </p>
              <button
                onClick={() => onDeleteContact(contact.id)}
                type="button"
                className={styles.btn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
