const Banner = () => {
  return (
    <div className="bg-base-300">
      <div className=" py-10 md:py-40 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="text-center mt-8">
          <div className="join">
            <input
              className="input input-bordered join-item focus:outline-0 lg:w-96"
              placeholder="Search"
            />
            <button className="btn join-item bg-red-500 rounded-r-full text-white font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
