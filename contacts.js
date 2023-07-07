import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const filePath = path.resolve('db', 'contacts.json');

export const listContacts = async () => {
	const contacts = await fs.readFile(filePath);
	return JSON.parse(contacts);
};

export const getContactById = async id => {
	const contacts = await listContacts();
	const result = contacts.find(contact => id === contact.id);
	return result || null;
};

export const addContact = async data => {
	const contacts = await listContacts();
	console.log(data);
	const newContact = {
		id: nanoid(),
		...data,
	};
	contacts.push(newContact);
	fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

	return newContact;
};

export const removeContact = async id => {
	const contacts = await listContacts();
	const index = contacts.findIndex(contact => contact.id === id);
	if (index === -1) {
		return null;
	}

	const [result] = contacts.splice(index, 1);
	fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
	return result;
};
