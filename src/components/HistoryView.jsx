import "./HistoryView.css";
import PropTypes from 'prop-types';

function HistoryView() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="back-btn"
          onClick={() => {
            // MainView 화면으로 전환
          }}>
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      <div className="diary-item">
        <div className="diary-date">(날짜)</div>
        <div>(내용)</div>
      </div>
    </>
  );
}

HistoryView.propTypes = {
  firstname: PropTypes.func,
};

export default HistoryView;
