import { Link } from "react-router-dom";

const RatingCard = () => {
  return (
    <Link
      to="/"
      className="w-[27%] h-30 dark:bg-ftvwine-50 hover:dark:bg-ftvwine-25 dark:ring-ftvblue-500 dark:ring-1 rounded-lg flex flex-col gap-3 justify-evenly items-between px-5 category-card">
      <div className="flex justify-between items-center">
        <h1 className="text-ftvblack-400 text-lg">Software & Coding</h1>
        <span className="text-ftvblack-400 space-x-2">
          <i className="fa fa-user-plus"></i>
          <span className="text-ftvblack-400 text-sm font-semibold">50</span>
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-ftvwine-500">
          <i className="fa fa-star "></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>

          <i className="fa fa-star-half"></i>
        </span>
        <span className="text-ftvblack-400 font-semibold">3.5</span>
      </div>
    </Link>
  );
};

export default RatingCard;
