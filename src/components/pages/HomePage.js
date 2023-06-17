import Book from "components/book/Book";
import BookShelf from "components/book/BookShelf";
import CategoriesContext from "context/CategoriesContext";
import { useContext } from "react";
import "css/HomePage.css";

/**
 * @description Represents the main page of the application
 */
const HomePage = (props) => {
	const categories = useContext(CategoriesContext);

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
	 * @returns {Array} UI components for books
	 */
	const renderBooks = (categoryId) => {
		return props.books
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
						setBooks={props.setBooks}
					/>
				</li>
			));
	};

	return (
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
				<a onClick={() => props.setShowSearchpage(!props.showSearchPage)}>
					Add a book
				</a>
			</div>
		</div>
	);
};

export default HomePage;
