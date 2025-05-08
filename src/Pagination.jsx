export function Pagination({ currentPage, pageCount, onPageChanged }) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <button
          className="pagination-previous"
          onClick={() => onPageChanged(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="pagination-next"
          onClick={() => onPageChanged(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next page
        </button>
        <ul className="pagination-list">
          {pages.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={`pagination-link ${
                  pageNumber === currentPage ? `is-current` : ``
                }`}
                onClick={() => onPageChanged(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
