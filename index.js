import {
	listContacts,
	getContactById,
	addContact,
	removeContact,
} from './contacts.js';

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case 'list':
			const allContacts = await listContacts();
			return console.log('all contacts:', allContacts);

		case 'get':
			const oneContact = await getContactById(id);
			return console.log('contact found:', oneContact);

		case 'add':
			const newContact = await addContact({ name, email, phone });
			return console.log('successfully added:', newContact);

		case 'remove':
			const deleteContact = await removeContact(id);
			return console.log('successfully delete:', deleteContact);

		default:
			console.log('\x1B[31m Unknown action type!');
	}
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: 'Z5sbDlS7pCzNsnAHLtDJd' });
// invokeAction({
// 	action: 'add',
// 	name: 'Igor',
// 	email: 'qwe@qwe.mail',
// 	phone: '55555555',
// });
invokeAction({ action: 'remove', id: '25NV-k86N-BZcI6JwCW88' });
