import "css/SearchPage.css";

/**
 * @description Represents the search page of the application
 */
const SearchPage = (props) => {
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<a
					className="close-search"
					onClick={() => props.handleShowSearchPage()}>
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
	);
};

export default SearchPage;
