import Filter from '../components/Filter.jsx';
import Todo from '../components/Todo.jsx';

function Home() {

    return (
    <>
        <div className="container">
            <Filter />
        
            <Todo />
        </div>
    </>
    )
  }
  
  export default Home
