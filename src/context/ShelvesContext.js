import { createContext } from "react";

const ShelvesContext = createContext([
	{ id: "currentlyReading", name: "Currently Reading" },
	{ id: "wantToRead", name: "Want to Read" },
	{ id: "read", name: "Read" },
	{ id: "none", name: "None" },
]);

export default ShelvesContext;
