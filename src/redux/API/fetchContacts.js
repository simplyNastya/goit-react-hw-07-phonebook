import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://64103e91864814e5b64b9feb.mockapi.io/contacts',
});

export const getAllContacts = () => contactInstance('');

export const addContact = data => {
  return contactInstance.post('', data);
};

export const deleteContact = id => {
  return contactInstance.delete(`${id}`);
};