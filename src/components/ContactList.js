import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, editContact } from '../redux/actions';
import { ContactContainer, ContactItem, Button } from '../styles/ContactStyles';

const ContactList = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editedContact, setEditedContact] = useState({ id: null, name: '', email: '', phone: '' });

  const handleEdit = (id, name, email, phone) => {
    setEditedContact({ id, name, email, phone });
  };

  const handleSaveEdit = () => {
    dispatch(editContact(editedContact.id, editedContact));
    setEditedContact({ id: null, name: '', email: '', phone: '' });
  };

  return (
    <ContactContainer>
      <h2>Lista de Contatos</h2>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <Button onClick={() => dispatch(removeContact(contact.id))}>
              Remover
            </Button>
            <Button onClick={() => handleEdit(contact.id, contact.name, contact.email, contact.phone)}>
              Editar
            </Button>
          </ContactItem>
        ))}
      </ul>
      {editedContact.id !== null && (
        <div>
          <h3>Editando contato</h3>
          <input
            type="text"
            value={editedContact.name}
            onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
          />
          <input
            type="text"
            value={editedContact.email}
            onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
          />
          <input
            type="text"
            value={editedContact.phone}
            onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })}
          />
          <Button onClick={handleSaveEdit}>Salvar</Button>
        </div>
      )}
    </ContactContainer>
  );
};

export default ContactList;
