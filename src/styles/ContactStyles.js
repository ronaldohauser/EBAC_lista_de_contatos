// src/styles/ContactStyles.js
import styled from 'styled-components';

export const ContactContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

export const ContactItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

export const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

export const FormLabel = styled.label`
  /* Mantenha os estilos anteriores... */
  display: block;
  margin-bottom: 10px;
  text-align: left;
`;

export const FormInput = styled.input`
  /* Mantenha os estilos anteriores... */
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const FormButton = styled.button`
  background-color: #008CBA;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export const FormInputTel = styled.input`
  /* Adicione este novo estilo para o campo de telefone */
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
