import React, { useState, useEffect } from "react";
import Intro from "../Components/Intro";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import Cardlist from "../Components/Cardlist";
import ReviewCardList from "../Components/ReviewCardList";

const Home = () => {
  const [robotsData, setRobotsData] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobotsData(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robotsData.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div>
      <Intro />
      <div className="tc">
        <h1>Meet our Staff</h1>
        <SearchBox searchChange={onSearchChange} />
        {robotsData.length === 0 ? (
          <h1>Loading...</h1>
        ) : filteredRobots.length === 0 ? (
          <h2>No results found. Please try again.</h2>
        ) : (
          <Scroll>
            <Cardlist robots={filteredRobots} />
          </Scroll>
        )}
      </div>
      <ReviewCardList />
    </div>
  );
};

export default Home;
