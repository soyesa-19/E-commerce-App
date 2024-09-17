import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const Pagination = ({ nextPage, prevPage, pages, currPage, currentPage }) => {
  console.log(currentPage);
  console.log(pages);
  const noOfPages = [];
  for (let i = 1; i <= pages; i++) {
    noOfPages.push(i);
  }
  console.log(noOfPages);
  return (
    <>
      <div className="mx-auto p-4 flex flex-row gap-3">
        <button
          className="border border-brandStroke p-2 rounded-md w-12 text-brandTextPrimary"
          onClick={() => prevPage()}
          disabled={currentPage === 1}
        >
          <LeftOutlined />
        </button>
        {noOfPages.map((page) => (
          <button
            onClick={() => currPage(page)}
            key={page}
            className={`${
              currentPage === page
                ? "bg-brandPrimary border-brandPrimary text-brandWhite"
                : "bg-brandWhite border-brandStroke text-brandDark"
            } border  p-2 rounded-md w-10 `}
          >
            {page}
          </button>
        ))}
        <button
          className="border border-brandStroke p-2 rounded-md w-12 text-brandTextPrimary"
          onClick={() => nextPage(noOfPages.length)}
          disabled={currentPage === noOfPages.length}
        >
          <RightOutlined />
        </button>
      </div>
    </>
  );
};

export default Pagination;
