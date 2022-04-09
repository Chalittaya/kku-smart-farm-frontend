import "./censor.scss";
import { useNavigate } from "react-router-dom";

const censorItems = [
  {
    index: 1,
    name: "อุณหภูมิ",
  },
  {
    index: 2,
    name: "ความชื้น",
  },
  {
    index: 3,
    name: "ความชื้นดิน",
  },
];

const Censor = () => {
  const navigate = useNavigate();
  const goToSetting = () => {
    navigate("/censor-setting");
  };

  return (
    <div className="censor">
      <div className="censor__item__header">ตั้งค่าเซ็นเซอร์</div>
      <div className="censor__item__sub-header">แสดงรายการเซ็นเซอร์ของระบบ</div>
      {censorItems.map((item, index) => (
        <div to={item.to} key={index}>
          <div className="censor__flex">
            <div className="censor__box">
              <div className="censor__item__body">เซ็นเซอร์ {item.index} :</div>
              <div className="censor__item__body">{item.name}</div>
            </div>
            <button className="censor__button" onClick={goToSetting}>
              ตั้งค่า
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Censor;
