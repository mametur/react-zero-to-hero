import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResto, setFilteredResto] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.5896808&lng=77.22556019999999&str=food&trackingId=5be36d5c-cbec-86c5-25d7-13d573abea87&submitAction=ENTER&queryUniqueId=67a1e022-60eb-3ccf-621c-22de45037232"
    );
    const jsonData = await data.json();
    const result =
      jsonData.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    setList(result);
    setFilteredResto(result);
  };

  const handleFilter = () => {
    const filteredList = list.filter((resto) =>
      resto?.card?.card?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    if (filteredList.length === 0) {
      setFilteredResto(list);
      return;
    }
    setFilteredResto(filteredList);
  };

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleFilter}>Search</button>
        </div>
      </div>
      <div className="res-container">
        {filteredResto.map((resto) => (
          <RestaurantCard
            key={resto?.card?.card?.info?.id}
            restoData={resto?.card?.card?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
