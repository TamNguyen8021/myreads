const { createContext } = require('react');

const CategoriesContext = createContext([
	{ id: 1, name: 'Currently Reading' },
	{ id: 2, name: 'Want to Read' },
	{ id: 3, name: 'Read' },
]);

export default CategoriesContext;
