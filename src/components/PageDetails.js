import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const PageDetails = ({ match, location }) => {
  const [pageContent, setPageContent] = React.useState();
  const [error, setError] = React.useState(false);
  const history = useHistory();
  React.useEffect(() => {
    console.log(match, location);
    const id = match.params.id;
    const page = match.params.page;
    const getPage = async (id = 1, page = 1) => {
      try {
        const resp = await Axios.get(
          `http://localhost:3001/books/${id}/page/${page}`
        );
        console.log(resp.data);
        setPageContent(resp.data.page);
      } catch (e) {
        console.log("Error fetching page details", e);
        setError(true);
      }
    };
    getPage(id, page);
    // eslint-disable-next-line
  }, [match.params.page]);
  if (!pageContent && !error) {
    return <div> Loading Page Details ... </div>;
  }
  return (
    <div id="page-details" className="container">
      <div className="page-details">
        <p>{pageContent.content}</p>
      </div>
      <div className="controls">
        <h1> Page {match.params.page}</h1>
        <div>
          <button
            onClick={() => {
              history.push(
                `${location.pathname.substr(
                  0,
                  location.pathname.lastIndexOf("/")
                )}/${
                  Number(match.params.page) > 1
                    ? Number(match.params.page) - 1
                    : 1
                }`
              );
            }}
          >
            Previous Page
          </button>
          <button
            onClick={() => {
              history.push(
                `${location.pathname.substr(
                  0,
                  location.pathname.lastIndexOf("/")
                )}/${Number(match.params.page) + 1}`
              );
            }}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
