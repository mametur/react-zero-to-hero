import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({ restoData }) => {
  const { name: nme, avgRating, cuisines, cloudinaryImageId } = restoData;
  return (
    <div className="res-card">
      <div className="card-image">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div className="card-info">
        <h3>{nme}</h3>
        <p>{avgRating}</p>
        <p>{cuisines}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
