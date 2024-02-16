import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
  FormInputTel,
} from '../styles/ContactStyles';

const AddContactForm = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      contact.fullName &&
      emailRegex.test(contact.email) &&
      contact.phone
    ) {
      dispatch(addContact(contact));
      setContact({
        fullName: '',
        email: '',
        phone: '',
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <FormContainer>
      <h2>Preencha os campos abaixo</h2>
      <form onSubmit={handleSubmit}>
        <FormLabel>Nome completo:</FormLabel>
        <FormInput
          type="text"
          name="fullName"
          value={contact.fullName}
          onChange={handleInputChange}
          placeholder="Digite o nome completo"
        />

        <FormLabel>E-mail:</FormLabel>
        <FormInput
          type="email"
          name="email"
          value={contact.email}
          onChange={handleInputChange}
          placeholder="Digite o e-mail"
        />

        <FormLabel>Telefone:</FormLabel>
        <FormInputTel
          type="tel"
          name="phone"
          value={contact.phone}
          onChange={handleInputChange}
          placeholder="Digite o telefone"
        />

        <FormButton type="submit">Adicionar contato</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddContactForm;
