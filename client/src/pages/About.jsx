import Card from '../shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About this App</h1>
        <p>React app for loggig all freelanced graphics work</p>
        <p>
          <Link to='/'>Back Home</Link>
        </p>
      </div>
    </Card>
  );
}
export default About;
