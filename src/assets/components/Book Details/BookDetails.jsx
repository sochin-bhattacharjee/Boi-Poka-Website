import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams();
    const Id = bookId.split(":")[1];
    // console.log(typeof Id[1])
    const id = parseInt(Id);
    // console.log(bookId)
    // console.log(id)
    const data = useLoaderData();
    // console.log(data)
    const book  = data.find(book => book.bookId === id);
    console.log(book)
    const {image , bookName} = book;
    return (
        <div>
            <h1>Book Name : {bookName}</h1>
            <img className='h-48 w-36' src={image} alt="" />
        </div>
    );
};

export default BookDetails;