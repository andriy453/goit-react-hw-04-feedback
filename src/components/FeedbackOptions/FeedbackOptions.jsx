import './FeedbackOptions.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className="button-conteiner">
        {options.map((label) => {
          return (
            <button
              className="Feedback_button"
              key={shortid.generate()}
              onClick={() => onLeaveFeedback(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
