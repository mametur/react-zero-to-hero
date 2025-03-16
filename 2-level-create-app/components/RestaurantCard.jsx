import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <FontAwesomeIcon
        className="logo"
        icon={faUtensils}
        size="2xl"
        style={{ color: "#74C0FC" }}
      />
      <h3>Restaurant Name</h3>
      <h4>Rating</h4>
      <h4>Delivery Time</h4>
      <h4>Cusines</h4>
    </div>
  );
};
export default RestaurantCard;
