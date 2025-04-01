export default function BlogCard() {
  return (
    <div className="flex flex-row justify-center min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] pt-[200px] w-full">
      <div className="flex flex-col flex-start bg-white shadow-lg rounded-lg w-[340px] h-fit">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src="/img/blog-card.jpg"
          alt="Blog Post Image"
        />
        <div className="flex flex-col p-4 mt-3 ml-2">
          <span className="w-fit inline items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
            Interior
          </span>
          <h2 className="text-l mt-3 font-semibold">
            Top 5 Living Room Inspirations
          </h2>
          <p className="text-gray-400 mt-2">
            Curated vibrant colors for your living, make it pop & calm in the
            same time.
          </p>
          <a className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-500 hover:underline my-2">
            Read More
            <svg
              className="w-4 h-4 ms-2 hover:underline"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
                fill="#4338CA"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
