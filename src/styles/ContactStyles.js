import styled from 'styled-components';

const themeColors = {
  primary: '#008CBA',
  secondary: '#4caf50',
  background: '#fff',
  border: '#ccc',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const ContactContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid ${themeColors.border};
  border-radius: 10px;
  box-shadow: 0 0 10px ${themeColors.shadow};
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  background-color: ${themeColors.background};
`;

export const ContactItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${themeColors.border};
  border-radius: 5px;
  background-color: ${themeColors.background};
  box-shadow: 0 0 5px ${themeColors.shadow};
  text-align: left;
`;

export const Button = styled.button`
  background-color: ${themeColors.secondary};
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
  border: 1px solid ${themeColors.border};
  border-radius: 10px;
  box-shadow: 0 0 10px ${themeColors.shadow};
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  background-color: ${themeColors.background};
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: left;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const FormButton = styled.button`
  background-color: ${themeColors.primary};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export const FormInputTel = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
