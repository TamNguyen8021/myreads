import "css/Book.css";
import BookCover from "./BookCover";
import ChangeShelfButton from "components/ChangeShelfButton";
import { useEffect, useState } from "react";
import { editBook, getBooks } from "BooksAPI";

/**
 * @description Represents a book
 */
const Book = (props) => {
	const [shelf, setShelf] = useState(props.shelf);

	useEffect(() => {
		if (shelf !== props.shelf) {
			getBooks().then((booksData) => {
				if (!props.showSearchPage) {
					props.setBooks(booksData);
				}

				localStorage.setItem("books", JSON.stringify(booksData));
			});
		}
	}, [shelf]);

	/**
	 * @description Calls API to change book's shelf
	 * @param {string} shelf
	 */
	const changeBookShelf = (shelf) => {
		editBook({ id: props.id }, shelf).then(() => setShelf(shelf));
	};

	return (
		<div className="book">
			<div className="book-top">
				{props.cover && <BookCover cover={props.cover} />}
				<ChangeShelfButton
					shelf={shelf}
					changeBookShelf={changeBookShelf}
				/>
			</div>
			<div className="book-title">{props.title}</div>
			{props.subtitle && <div className="book-subtitle">{props.subtitle}</div>}
			{props.authors?.length
				? props.authors.map((author) => (
						<div
							key={props.id + "-" + author}
							className="book-authors">
							{author}
						</div>
				  ))
				: null}
		</div>
	);
};

export default Book;
