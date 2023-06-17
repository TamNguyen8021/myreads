import "css/HomePage.css";
import { Link } from "react-router-dom";

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
				<Link
					className="link"
					to={"search"}
					onClick={() => props.handleShowSearchPage()}>
					Add a book
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
