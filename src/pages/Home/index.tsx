import { Link } from 'react-router-dom';
import Quote from '../../components/shareds/Quote';

const Home = () => (
  <div className="Home container mx-auto px-4 bg-primary">
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Quote />
  </div>
);

export default Home;
