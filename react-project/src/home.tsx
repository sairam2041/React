import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>Home</div>
        <nav>
            <Link to="/imageUpload">ImageUpload</Link> |{' '}
            <Link to="/canvas">Canvas</Link> |{' '}
            <Link to="/kanban">Kanban</Link>
      </nav>
    </div>
  )
}

export default Home;