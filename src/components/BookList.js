import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const BookList = () => {
  const [books, setBooks] = React.useState([]);
  const [totalBooks, setTotalBooks] = React.useState(0);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const getBooks = async () => {
      try {
        const resp = await Axios.get(
          `http://localhost:3001/books?page=${page}`
        );
        console.log(resp.data);
        setBooks(resp.data.books);
        setTotalBooks(resp.data.total);
      } catch (e) {
        console.log("Error fetching books");
      }
    };
    getBooks();
  }, [page]);
  if (!books) {
    return <div> Cargando Libros</div>;
  }
  return (
    <React.Fragment>
      <div className="container">
        <h1>Book's List</h1>
        <table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>
                  <Link to={`/book/${book.id}`}>{book.name}</Link>
                </td>
                <td>{book.author}</td>
                <td>{book.totalPages}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="controls">
          <span>GBH Digital Library / Page {page}</span>
          <div>
            {page > 1 && (
              <button onClick={() => setPage(page - 1)}>
                Anterior ({page - 1})
              </button>
            )}
            {totalBooks / 10 > page && (
              <button onClick={() => setPage(page + 1)}>
                Siguiente ({page + 1})
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookList;
