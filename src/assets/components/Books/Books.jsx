import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books , setBooks] = useState([])
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='mt-10 mb-10'>
            <h2 className='mb-10 text-center text-3xl font-bold'>Books</h2>
            <div className='grid gap-6 lg:grid-cols-3'>
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;