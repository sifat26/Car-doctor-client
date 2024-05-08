import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl "
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <div className=" flex font-bold text-[#FF3811]">
          <p>Price: ${price}</p>
        <Link to={`/checkout/${_id}`}></Link>
            <button ><FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
