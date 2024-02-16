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

  const initialState = {
    fullName: '',
    email: '',
    phone: '',
  };

  const [contact, setContact] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    const { fullName, email, phone } = contact;
    return fullName.trim() !== '' && isValidEmail(email) && phone.trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(addContact(contact));
      setContact(initialState);
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
