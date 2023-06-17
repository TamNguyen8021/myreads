import "css/App.css";
import { useEffect, useState } from "react";
import { getBooks } from "BooksAPI";
import HomePage from "./pages/HomePage";

const App = () => {
	const [showSearchPage, setShowSearchpage] = useState(false);

	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks().then((booksData) => setBooks(booksData));
	}, []);

	return (
		<div className="app">
			{showSearchPage ? (
				<div className="search-books">
					<div className="search-books-bar">
						<a
							className="close-search"
							onClick={() => setShowSearchpage(!showSearchPage)}>
							Close
						</a>
						<div className="search-books-input-wrapper">
							<input
								type="text"
								placeholder="Search by title, author, or ISBN"
							/>
						</div>
					</div>
					<div className="search-books-results">
						<ol className="books-grid"></ol>
					</div>
				</div>
			) : (
				<HomePage
					books={books}
					setBooks={setBooks}
					showSearchPage={showSearchPage}
					setShowSearchpage={setShowSearchpage}
				/>
			)}
		</div>
	);
};

export default App;
