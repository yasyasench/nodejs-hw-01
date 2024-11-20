
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    existingContacts.push(newContact);
  }
  await writeContacts(existingContacts);
};

generateContacts(5);
