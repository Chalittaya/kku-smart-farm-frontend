import "./relay.scss";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import TimePicker from "react-time-picker/dist/entry.nostyle";

const RelaySetting = () => {
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/relay");
  };

  const dayPicker = [
    { label: "อาทิตย์", value: 1 },
    { label: "จันทร์", value: 2 },
    { label: "อังคาร", value: 3 },
    { label: "พุธ", value: 4 },
    { label: "พฤหัสบดี", value: 5 },
    { label: "ศุกร์", value: 6 },
    { label: "เสาร์", value: 7 },
  ];

  // const minutePicker = [
  //   { label: "5 นาที", value: 5 },
  //   { label: "10 นาที", value: 10 },
  //   { label: "15 นาที", value: 15 },
  //   { label: "20 นาที", value: 20 },
  //   { label: "25 นาที", value: 25 },
  //   { label: "30 นาที", value: 30 },
  //   { label: "35 นาที", value: 35 },
  //   { label: "40 นาที", value: 40 },
  //   { label: "45 นาที", value: 45 },
  //   { label: "60 นาที", value: 50 },
  //   { label: "55 นาที", value: 55 },
  // ];

  return (
    <div className="relay__setting">
      <div className="relay__setting__grid">
        <div className="relay__item__header">ตั้งค่ารีเลย์</div>
        <div className="relay__setting__box">
          <div className="relay__item__body">วัน</div>
          <div className="select">
            <Select options={dayPicker} />
          </div>
          <div className="relay__item__body">เริ่มทำงาน</div>
          <input type="time" step="1"></input>
          <div className="relay__item__body">ทำงาน (นาที)</div>
          <input type="text" id="minute" name="name"></input>
          <div className="relay__setting__grid">
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
          บันทึกการตั้งค่า
        </button>
      </div>
    </div>
  );
};

export default RelaySetting;
