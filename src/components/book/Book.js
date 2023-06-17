import "css/Book.css";
import BookCover from "./BookCover";
import HoverButton from "components/HoverButton";
import { useEffect, useState } from "react";
import { editBook, getBooks } from "BooksAPI";

/**
 * @description Represents a book
 */
const Book = (props) => {
	const [shelf, setShelf] = useState(props?.shelf);

	useEffect(() => {
		if (shelf !== props?.shelf) {
			getBooks().then((booksData) => props.setBooks(booksData));
		}
	}, [shelf]);

	/**
	 * @description Calls API to change book's shelf
	 * @param {string} shelf
	 */
	const changeBookShelf = (shelf) => {
		editBook({ id: props?.id }, shelf).then(() => setShelf(shelf));
	};

	return (
		<div className="book">
			<div className="book-top">
				{props?.cover && <BookCover cover={props.cover} />}
				<HoverButton
					shelf={shelf}
					changeBookShelf={changeBookShelf}
				/>
			</div>
			{props?.title && <div className="book-title">{props.title}</div>}
			{props?.subtitle && <div className="book-subtitle">{props.subtitle}</div>}
			{props?.authors &&
				props.authors.map((author) => (
					<div
						key={props?.id + "-" + author}
						className="book-authors">
						{author}
					</div>
				))}
		</div>
	);
};

export default Book;
