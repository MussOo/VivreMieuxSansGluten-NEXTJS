export default function Pagination({
  page,
  setPage,
  totalPage,
}: {
  page: number;
  setPage: Function;
  totalPage: number;
}) {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
      >
        Previous
      </button>
      <span className="flex items-center px-3 mx-1 font-medium text-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700">
        {page} of {totalPage}
      </span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
        className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
      >
        Next
      </button>
    </div>
  );
}
