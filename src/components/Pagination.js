import "./Pagination.css";

const Pagination = ({ nextPage, prevPage, pages, currPage, currentPage }) => {
  console.log(currentPage);
  const noOfPages = [];
  for (let i = 1; i <= pages; i++) {
    noOfPages.push(i);
  }
  console.log(noOfPages);
  return (
    <>
      <div>
        <button onClick={() => prevPage()} disabled={currentPage === 1}>
          Prev
        </button>
        {noOfPages.map((page) => (
          <button
            onClick={() => currPage(page)}
            key={page}
            style={
              currentPage === page
                ? {
                    backgroundColor: "hsl(60, 100%, 50%)",
                    color: "#fff",
                    border: "1px solid #007bff",
                  }
                : {}
            }
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => nextPage(noOfPages.length)}
          disabled={currentPage === noOfPages.length}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
