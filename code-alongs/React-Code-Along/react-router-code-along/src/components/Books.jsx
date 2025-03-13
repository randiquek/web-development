import React, { useContext, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";

export default function Books() {
    const books = useContext(BooksContext);
    const query = new URLSearchParams(useLocation().search);
    const searchTitle = query.get("title") || "";
    const searchAuthor = query.get("author") || "";

    let filteredBooks = books.filter((b) => 
        b.title.toLowerCase().includes(searchTitle.toLowerCase()));
        filteredBooks = filteredBooks.filter((b) => b.author.toLowerCase().includes(searchAuthor.toLowerCase()));


    useEffect(() => {
        console.log(query);
    })

    return (

        <div>
            <h3>Books</h3>
            <ul>
                {filteredBooks.map((book) => <li key={book.id}>
                    <Link to={"books/" + book.id}>
                    {book.title} by {book.author}
                    </Link>
                    </li>)}
            </ul>
        </div>
    )
}