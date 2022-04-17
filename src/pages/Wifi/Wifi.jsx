import "./wifi.scss";
import { useEffect, useState } from "react";

const Wifi = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:9000/wifi`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((wifi) => setItems(wifi));
  });

  return (
    <div className="wifi">
      <div className="wifi__grid">
        <div className="wifi__header">ตั้งค่า Wifi</div>
        <div className="wifi__box">
          {items.map((item) => {
            return (
              <>
                <div className="wifi__item">ชื่อ wifi</div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={item.name_wifi}
                ></input>
                <div className="wifi__item">รหัสผ่าน</div>
                <input
                  type="text"
                  id="password"
                  name="password"
                  defaultValue={item.password_wifi}
                ></input>
                <div className="wifi__item">หมายเลขบอร์ด</div>
                <input
                  type="text"
                  id="boardNo"
                  name="boardNo"
                  defaultValue={item.num_board}
                ></input>
              </>
            );
          })}
        </div>
        <button className="wifi__button">บันทึก</button>
      </div>
    </div>
  );
};

export default Wifi;
