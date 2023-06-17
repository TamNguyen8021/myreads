import "css/App.css";
import { useEffect, useState } from "react";
import { getBooks } from "BooksAPI";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const App = () => {
	const [showSearchPage, setShowSearchpage] = useState(false);

	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks().then((booksData) => setBooks(booksData));
	}, []);

	const handleShowSearchPage = () => setShowSearchpage(!showSearchPage);

	return (
		<div className="app">
			{showSearchPage ? (
				<SearchPage handleShowSearchPage={handleShowSearchPage} />
			) : (
				<HomePage
					books={books}
					setBooks={setBooks}
					handleShowSearchPage={handleShowSearchPage}
				/>
			)}
		</div>
	);
};

export default App;
