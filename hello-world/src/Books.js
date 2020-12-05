import React from 'react';
import Book from './Book';

const bookList = [
    {title: 'The Power of Now'}, {title: 'The 4 Hour Workweek'}
]

export default function Books() {
    return (
        <ul>
            {bookList.map(book => <Book title={book.title}/>)}
        </ul>
    )
}

// <Book title={'The Power of Now'} />
