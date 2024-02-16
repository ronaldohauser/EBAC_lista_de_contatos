const createAction = (type, payload) => ({ type, payload });

export const addContact = (contact) => createAction('ADD_CONTACT', contact);

export const removeContact = (id) => createAction('REMOVE_CONTACT', id);

export const editContact = (id, updatedContact) =>
  createAction('EDIT_CONTACT', { id, updatedContact });
