import './Statistics.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className="list_fidbeck">
        <li className="item">
          <p className="text">Good</p>:<span>{good}</span>
        </li>
        <li className="item">
          <p className="text">Neutral</p>:<span>{neutral}</span>
        </li>
        <li className="item">
          <p className="text">Bad</p>:<span>{bad}</span>
        </li>
        <li className="item">
          <p className="text">Total</p>:<span>{total()}</span>
        </li>
        <li className="item">
          <p className="text">Positive feedback</p>:
          <span>{positivePercentage()}%</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
