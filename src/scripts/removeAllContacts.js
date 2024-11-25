import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]); // Використовуємо writeContacts для запису порожнього масиву
        console.log("All contacts are removed");
    } catch (error) {
        console.error("Error! Impossible to remove contacts!", error);
        throw error;
    }
};

removeAllContacts();
