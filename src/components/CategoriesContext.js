const { createContext } = require('react');

const CategoriesContext = createContext([
	{ id: 'currentlyReading', name: 'Currently Reading' },
	{ id: 'wantToRead', name: 'Want to Read' },
	{ id: 'read', name: 'Read' },
]);

export default CategoriesContext;
