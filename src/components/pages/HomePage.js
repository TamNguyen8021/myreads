import "css/HomePage.css";

/**
 * @description Represents the main page of the application
 */
const HomePage = (props) => {
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>{props.renderShelves()}</div>
			</div>
			<div className="open-search">
				<a onClick={() => props.handleShowSearchPage()}>Add a book</a>
			</div>
		</div>
	);
};

export default HomePage;
