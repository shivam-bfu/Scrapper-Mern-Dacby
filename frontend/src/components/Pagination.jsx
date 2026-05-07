// src/components/Pagination.jsx

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      
      {/* Previous */}
      <button
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        disabled={currentPage === 1}
        className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white transition hover:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`h-10 w-10 rounded-lg text-sm font-medium transition
              ${
                currentPage === index + 1
                  ? "bg-orange-500 text-white"
                  : "border border-zinc-700 text-zinc-300 hover:border-orange-500"
              }`}
          >
            {index + 1}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white transition hover:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;