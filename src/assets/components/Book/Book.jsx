import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId , bookName, author, image, review, tags, category } = book;
  return (
    <Link to={`/books/:${bookId}`} className="mx-auto">
      <div className="py-6 card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="w-80 h-52 rounded-xl" src={image} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p className="text-lg font-medium">By : {author}</p>
          <hr className="border-dashed border-t-2" />
          <div className="card-actions flex justify-between items-center">
            <button className="btn btn-primary">{category}</button>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
