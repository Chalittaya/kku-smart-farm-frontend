import "./censor.scss";

const CensorSetting = () => {
  return (
    <div className="censor">
      <div className="censor__grid">
        <div className="censor__header">ตั้งค่า Wifi</div>
        <div className="censor__setiing__box">
          <div className="censor__item">ชื่อ wifi</div>
          <input type="text" id="name" name="name"></input>
          <div className="censor__item">ทำงาน (นาที)</div>
          <input type="text" id="password" name="password"></input>
          <div className="censor__setiing__grid">
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
        <button className="wifi__button">บันทึก</button>
      </div>
    </div>
  );
};

export default CensorSetting;
