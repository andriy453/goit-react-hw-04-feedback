import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Section = ({title}) => {
  
const [good , setGood] = useState(0);
const [ neutral, setNeutral] = useState(0);
const [ bad , setBad] = useState(0);

const  countTotalFeedback = () => {
  return bad + good + neutral;
};
const  countPositiveFeedbackPercentage = () => {
  return Math.round((good * 100) / countTotalFeedback());
};
function  onLeaveFeedback ( options)  {
  if(options === 'good'){
   setGood((prevState => prevState + 1))
  }
  if(options === 'neutral'){
     setNeutral((prevState => prevState + 1))
  }
  if(options === 'bad'){
      setBad((prevState => prevState + 1))
  }
 console.log(options);
};
return (
  <>
    <h1>Please leave feedback</h1>
    <FeedbackOptions
      options={['good', 'neutral', 'bad']}
      onLeaveFeedback = {onLeaveFeedback}
    />

    <h2>{title}</h2>
    {countTotalFeedback() === 0 ? (
      <Notification message="There is no feedback" />
    ) 
    : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    )
    }
  </>
)
}
// class Section extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return state.bad + this.state.good + this.state.neutral;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   onLeaveFeedback = options => {
//     this.setState({
//       [options]: this.state[options] + 1,
//     });

//     console.log('click');
//   };
//   render() {
//     return (
//       <>
//         <h1>Please leave feedback</h1>
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />

//         <h2>{this.props.title}</h2>
//         {this.countTotalFeedback() === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />
//         )}
//       </>
//     );
//   }
// }

export default Section;

Section.propTypes = {
  title: PropTypes.string
};