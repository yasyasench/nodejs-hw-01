import { readContacts } from "../utils/readContacts.js";


export const countContacts = async () => {
    const existingContacts = await readContacts();
    const length = existingContacts.length;
    return length;
};

console.log(await countContacts());
