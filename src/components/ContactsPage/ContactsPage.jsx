import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Blocks } from 'react-loader-spinner';
import styles from './contactsPage.module.css';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <p className={styles.error}>Something went wrong. Try again later.</p>
      ) : (
        <div className={styles.wrapper}>
          <h1 style={{ padding: 20 }}>Phonebook</h1>
          <Form />

          <div className={styles.spiner_box}>
            <h2 style={{ padding: 20 }}>Contacts</h2>
            {isLoading && (
              <div className={styles.spiner}>
                <Blocks
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                />
              </div>
            )}
          </div>
          <Filter />
          {contacts.length !== 0 && <Contacts />}
        </div>
      )}
    </>
  );
};

export default ContactsPage;
