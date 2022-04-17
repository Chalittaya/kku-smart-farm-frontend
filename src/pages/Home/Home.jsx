import "./home.scss";
import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:9000/dashboard`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((dashboard) => setItems(dashboard));
  });
  return (
    <div className="home">
      <div className="home__grid-container">
        {items.map((item) => {
          return (
            <>
              <div className="home__box">
                <div className="home__item__value">{item.temperature} °C</div>
                <div className="home__item__name">อุณหภูมิ</div>
              </div>
              <div className="home__box">
                <div className="home__item__value">{item.humidity} %</div>
                <div className="home__item__name">ความชื้น</div>
              </div>
              <div className="home__box">
                <div className="home__item__value">{item.soil_moisture} %</div>
                <div className="home__item__name">ความชื้นดิน</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
