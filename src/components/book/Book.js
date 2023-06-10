import 'css/Book.css';
import BookCover from './BookCover';

/**
 * @description Represents a book
 */
const Book = (props) => {
	return (
		<div className='book'>
			<div className='book-top'>
				{props?.cover && <BookCover cover={props.cover} />}
				<div className='book-shelf-changer'>
					<select>
						<option
							value='none'
							disabled>
							Move to...
						</option>
						<option value='currentlyReading'>Currently Reading</option>
						<option value='wantToRead'>Want to Read</option>
						<option value='read'>Read</option>
						<option value='none'>None</option>
					</select>
				</div>
			</div>
			{props?.title && <div className='book-title'>{props.title}</div>}
			{props?.author && <div className='book-authors'>{props.author}</div>}
		</div>
	);
};

export default Book;
