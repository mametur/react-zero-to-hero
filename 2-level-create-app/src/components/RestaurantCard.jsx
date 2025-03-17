import { useNavigate } from "react-router";

const RestaurantCard = ({ restoData }) => {
  const navigate = useNavigate();

  const { name: nme, avgRating, cuisines, cloudinaryImageId, id } = restoData;

  const navigateMenu = () => {
    navigate(`/restaurant/${id}`);
  };
  return (
    <div className="res-card" onClick={navigateMenu}>
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
