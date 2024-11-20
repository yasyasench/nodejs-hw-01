import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  const contacts = await readContacts();
  return contacts;
};

console.log(await getAllContacts());
