import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import StarRatings from "react-star-ratings";
import { Tooltip } from "react-tooltip";

const Testimonials = ({
  email,
  imgPath,
  name,
  starRating,
  testimonial,
  createdAt,
  theme,
  tip,
  title,
}) => {
  console.log(tip);
  console.log(starRating);
  const dateObj = new Date(createdAt);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObj
  );
  return (
    <div
      style={{
        border: theme == "true" ? "none" : "",
      }}
      className={`relative flex flex-col gap-2 border ${
        theme == "true" || theme == true ? "bg-[#25282c]" : "bg-white"
      } rounded-lg  px-5 py-4 pb-12 w-[354px]  md:h-fit ${
        theme == "true" || theme == true
          ? "hover:bg-[#34383b]"
          : "hover:bg-gray-100"
      }`}
    >
      <div className=" flex justify-between items-center">
        <div className=" flex gap-2  items-center">
          <img className=" h-12 rounded-full w-12" src={imgPath} alt="" />
          <div>
            <p
              style={{
                color: theme == "true" || theme == true ? "white" : "#0f172a",
              }}
              className=" first-letter:uppercase font-semibold text-slate-900"
            >
              {name}
            </p>
            {title && (
              <p
                className={` text-sm ${
                  theme == "true" || theme == true
                    ? "text-white"
                    : " text-gray-800"
                }`}
              >
                {title}
              </p>
            )}
          </div>
        </div>
        {tip && (
          <>
            <RiMoneyRupeeCircleFill
              data-tooltip-id="tip-tooltip"
              data-tooltip-content={` 
                  This is a tipped review, ${name} tipped us INR ${tip / 100} 
                  while writing this review.
                `}
              className=" bg-slate-800 rounded-full text-yellow-500 text-xl z-1"
            />
            <Tooltip
              style={{
                width: "230px",
                zIndex: "1",
                backgroundColor:
                  theme == "true" || theme == true ? "#e6e6e6" : "#0f172a",
                color: theme == "true" || (theme == true && "#0f172a"),
              }}
              id="tip-tooltip"
            />
          </>
        )}
      </div>
      <StarRatings
        starRatedColor="#ffa534"
        rating={starRating}
        starSpacing="2px"
        starDimension="20px"
      />
      <div
        style={{
          color: theme == "true" || theme == true ? "white" : "#0f172a",
        }}
        className=" first-letter:uppercase"
      >
        {testimonial}
      </div>
      <p
        style={{
          color: theme == "true" || theme == true ? "#b1afafda" : "#434d5acc",
        }}
        className=" text-sm text-slate-700 absolute bottom-3 left-4"
      >
        {formattedDate}
      </p>
    </div>
  );
};

export default Testimonials;
