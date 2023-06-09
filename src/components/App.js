import "css/App.css";
import { useContext, useEffect, useState } from "react";
import { getBooks } from "BooksAPI";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Book from "./book/Book";
import BookShelf from "./book/BookShelf";
import ShelvesContext from "context/ShelvesContext";
import { NONE_SHELF } from "constants/constants";
import { Route, Routes } from "react-router-dom";

const App = () => {
	const shelves = useContext(ShelvesContext);
	const [showSearchPage, setShowSearchpage] = useState(false);
	const [books, setBooks] = useState([]);
	const [searchKeyWord, setSearchKeyWord] = useState("");

	useEffect(() => {
		if (!showSearchPage) {
			getBooks().then((booksData) => {
				setBooks(booksData);
				localStorage.setItem("books", JSON.stringify(booksData));
			});
		}
	}, []);

	/**
	 * @description Displays search page or main page
	 */
	const handleShowSearchPage = () => setShowSearchpage(!showSearchPage);

	/**
	 * @description Renders books based on category's id
	 * @param {string} categoryId
	 * @returns {Array|null} UI components for books
	 */
	const renderBooks = (shelfId) => {
		if (shelfId) {
			return books?.length
				? books
						.filter((book) => book.shelf === shelfId)
						.map((book) => (
							<li key={book.id}>
								<Book
									showSearchPage={showSearchPage}
									id={book.id}
									shelf={book.shelf}
									cover={book?.imageLinks?.thumbnail}
									title={book.title}
									subtitle={book?.subtitle}
									authors={book.authors}
									setBooks={setBooks}
								/>
							</li>
						))
				: null;
		} else {
			if (searchKeyWord) {
				const tempBooks = JSON.parse(localStorage.getItem("books"));

				return books?.map((book) => {
					const currentBook = tempBooks?.find(
						(tempBook) => tempBook.id === book.id,
					);

					return (
						<li key={book.id}>
							<Book
								showSearchPage={showSearchPage}
								id={book.id}
								shelf={book?.shelf || currentBook?.shelf || NONE_SHELF}
								cover={book?.imageLinks?.thumbnail}
								title={book.title}
								subtitle={book?.subtitle}
								authors={book?.authors}
								setBooks={setBooks}
							/>
						</li>
					);
				});
			}

			return null;
		}
	};

	/**
	 * @description Renders shelf and books belongs to that shelf
	 * @param {object} shelf
	 * @returns {object} UI components for shelf and books
	 */
	const renderShelf = (shelf) => {
		return (
			<BookShelf
				key={shelf.id}
				name={shelf.name}>
				{renderBooks(shelf.id)}
			</BookShelf>
		);
	};

	/**
	 * @description Renders all available shelves
	 * @returns {Array} UI components for shelves
	 */
	const renderShelves = () => {
		return shelves
			.filter((shelf) => shelf.id !== NONE_SHELF)
			.map((shelf) => renderShelf(shelf));
	};

	return (
		<div className="app">
			<ShelvesContext.Provider value={shelves}>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<HomePage
								handleShowSearchPage={handleShowSearchPage}
								renderShelves={renderShelves}
							/>
						}
					/>
					<Route
						path="/search"
						element={
							<SearchPage
								books={books}
								setBooks={setBooks}
								searchKeyWord={searchKeyWord}
								setSearchKeyWord={setSearchKeyWord}
								handleShowSearchPage={handleShowSearchPage}
								renderBooks={renderBooks}
							/>
						}
					/>
				</Routes>
			</ShelvesContext.Provider>
		</div>
	);
};

export default App;
