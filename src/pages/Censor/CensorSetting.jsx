import "./censor.scss";
import { useNavigate } from "react-router-dom";

const censorSettingItems = [
  {
    index: 1,
    name: "อุณหภูมิ (เซสเซียส)",
  },
  {
    index: 2,
    name: "ความชื้น (เปอร์เซ็นต์)",
  },
  {
    index: 3,
    name: "ความชื้นดิน (เปอร์เซ็นต์)",
  },
];

const CensorSetting = () => {
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/censor");
  };
  return (
    <div className="censor__setting">
      <div className="censor__setting__grid">
        <div className="censor__item__header">เพิ่มการตั้งค่าอุณหภูมิ</div>
        <div className="censor__setting__box">
          <div className="censor__item__body">อุณหภูมิ (เซสเซียส)</div>
          <input type="text" id="name" name="name"></input>
          <div className="censor__item__body">ทำงาน (นาที)</div>
          <input type="text" id="password" name="password"></input>
          <div className="censor__setting__grid">
            <label className="container">
              รีเลย์ 1<input type="checkbox"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              รีเลย์ 2<input type="checkbox"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              รีเลย์ 3<input type="checkbox"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              รีเลย์ 4<input type="checkbox"></input>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <button className="censor__button" onClick={goBack}>
          บันทึก
        </button>
      </div>
    </div>
  );
};

export default CensorSetting;
