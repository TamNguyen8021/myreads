import { searchBooks } from "BooksAPI";
import "css/SearchPage.css";
import { useEffect } from "react";

/**
 * @description Represents the search page of the application
 */
const SearchPage = (props) => {
	useEffect(() => {
		if (props.searchKeyWord) {
			searchBooks(props.searchKeyWord, Infinity).then((booksData) => {
				if (booksData.length) {
					props.setBooks(
						booksData.filter((book) => book?.imageLinks?.thumbnail),
					);
				}
			});
		}
	}, [props.searchKeyWord]);

	/**
	 * @description Handles event when user types in search text field
	 * @param {object} event
	 */
	const handleSearch = (event) => {
		props.setSearchKeyWord(event.target.value);

		if (props.books.length) {
			props.setBooks([]);
		}
	};

	/**
	 * @description Handles event when user clicks back button
	 */
	const handleClickBack = () => {
		props.handleShowSearchPage();
		props.setSearchKeyWord("");
		props.setBooks(JSON.parse(localStorage.getItem("books")));
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<a
					className="close-search"
					onClick={handleClickBack}>
					Close
				</a>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						placeholder="Search by title, author, or ISBN"
						onChange={handleSearch}
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">{props.renderBooks()}</ol>
			</div>
		</div>
	);
};

export default SearchPage;
