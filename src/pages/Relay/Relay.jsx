import "./relay.scss";

const relayItems = [
  {
    index: 1,
  },
  {
    index: 2,
  },
  {
    index: 3,
  },
  {
    index: 4,
  },
];

const Relay = () => {
  return (
    <div className="relay">
      <div className="relay__grid">
        <div className="relay__header">ควบคุมรีเลย์</div>
        <div className="relay__box">
          <div className="relay__flex__margin">
            <div>Auto </div>
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
            </label>
            <div> Manual</div>
          </div>
          {relayItems.map((item, index) => (
            <div className="relay__box">
              <div className="relay__flex">
                <div className="relay__body">รีเลย์ {item.index}</div>
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round">
                    <span className="on">ON</span>
                    <span className="off">OFF</span>
                  </span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relay;
