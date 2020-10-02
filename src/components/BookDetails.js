import React from "react";
import Axios from "axios";
import BookImg from "../images/book.jpg";
import { useHistory } from "react-router-dom";
const BookDetails = ({ match }) => {
  const [book, setBook] = React.useState([]);

  const history = useHistory();
  React.useEffect(() => {
    const id = match.params.id;
    const getBook = async (id = 1) => {
      try {
        const resp = await Axios.get(`http://localhost:3001/books/${id}`);
        setBook(resp.data.book);
      } catch (e) {
        console.log("Error fetching book", e);
      }
    };
    getBook(id);
    // eslint-disable-next-line
  }, []);
  if (!book) {
    return <div> Cargando Detalles del Libro ... </div>;
  }
  return (
    <React.Fragment>
      {book && book.pages && (
        <div id="book-resume" className="container">
          <img src={BookImg} alt="book" />
          <div className="book-resume">
            <h1>{book.name}</h1>
            <h1>Identifier : {book.id} </h1>
            <h1>Author : {book.author}</h1>
            <h1>Pages : {book.totalPages} </h1>
            <h1>Resume : </h1>
            <p>{book.pages[0].content.substr(0, 100) + "..."}</p>

            <button
              onClick={() => {
                history.push(`/book/${book.id}/page/1`);
              }}
            >
              {" "}
              Read Book
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default BookDetails;
