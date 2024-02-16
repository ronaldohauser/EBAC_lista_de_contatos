const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload];
    case 'REMOVE_CONTACT':
      return state.filter((contact) => contact.id !== action.payload);
    case 'EDIT_CONTACT':
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload.updatedContact : contact
      );
    default:
      return state;
  }
};

export default contactReducer;
