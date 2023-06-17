import "css/App.css";
import { useContext, useEffect, useState } from "react";
import Book from "./book/Book";
import BookShelf from "./book/BookShelf";
import CategoriesContext from "./CategoriesContext";
import { getBooks } from "BooksAPI";

const App = () => {
	const [showSearchPage, setShowSearchpage] = useState(false);
	const categories = useContext(CategoriesContext);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks().then((booksData) => setBooks(booksData));
	}, []);

	/**
	 * @description Renders category and books belongs to that category
	 * @param {object} category
	 * @returns {object} UI components for category and books
	 */
	const renderCategory = (category) => {
		return (
			<BookShelf
				key={category?.id}
				name={category?.name}>
				{renderBooks(category?.id)}
			</BookShelf>
		);
	};

	/**
	 * @description Renders books based on category's id
	 * @param {string} categoryId
	 * @returns {object} UI components for books
	 */
	const renderBooks = (categoryId) => {
		return books
			?.filter((book) => book?.shelf === categoryId)
			?.map((book) => (
				<li key={book?.id}>
					<Book
						id={book?.id}
						shelf={book?.shelf}
						cover={book?.imageLinks?.thumbnail}
						title={book?.title}
						subtitle={book?.subtitle}
						authors={book?.authors}
						setBooks={setBooks}
					/>
				</li>
			));
	};

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
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<CategoriesContext.Provider value={categories}>
						<div className="list-books-content">
							<div>
								{categories
									?.filter((category) => category?.id !== "none")
									?.map((category) => renderCategory(category))}
							</div>
						</div>
					</CategoriesContext.Provider>
					<div className="open-search">
						<a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
