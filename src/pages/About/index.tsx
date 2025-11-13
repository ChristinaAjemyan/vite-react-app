import { Link } from 'react-router-dom';
import Quote from '../../components/shareds/Quote';

const About = () => (
  <div className="About container mx-auto px-4">
     <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
     About works!
    <Quote />
  </div>
);

export default About;
