import { useState, useEffect } from "react";
import Shimmer from "../layout/Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restoMenu, setRestoMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5896808&lng=77.22556019999999&restaurantId=${resId}&catalog_qa=undefined`
    );
    const json = await data.json();
    const result = json?.data.cards[2]?.card?.card?.info;
    setRestoMenu(result);
  };
  return restoMenu === null ? (
    <Shimmer />
  ) : (
    <div className="restaurantmenu-container">
      <div className="restaurantmenu-card">
        <h1>{restoMenu?.name}</h1>
        <p>{restoMenu?.city}</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
