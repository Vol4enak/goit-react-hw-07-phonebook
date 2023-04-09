const contactsFiltration = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(
    ({ name }) =>
      name.toLowerCase().includes(normalizedFilter) 
  );
};

export default contactsFiltration;
