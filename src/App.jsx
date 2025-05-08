import "./App.css";

import { useState } from "react";
import { Pagination } from "./Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = 10;

  function handlePageChanged(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= pageCount) {
      setCurrentPage(pageNumber);
    }
  }

  return (
    <div style={{ margin: "2rem" }}>
      <div style={{ marginBottom: "2rem" }}>You are on page {currentPage}</div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChanged={handlePageChanged}
      />
    </div>
  );
}

export default App;
