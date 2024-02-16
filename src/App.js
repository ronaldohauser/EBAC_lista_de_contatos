import React from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <ContactList />
        <AddContactForm />
      </div>
    </Provider>
  );
}

export default App;
