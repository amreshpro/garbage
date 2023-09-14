import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const CircularProgressBar = ({value}) => {
   
  return (
    <div>
        <CircularProgressbar value={value} maxValue={1} text={`${value*10}`} styles={buildStyles({
 pathColor: `#008000`,
 textColor: '#999',
 trailColor: '#d6d6d6',
 backgroundColor: '#3e98c7',

 textSize: '36px',
        })} />;
    </div>
  )
}
export default CircularProgressBar