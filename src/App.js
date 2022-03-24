import CardList from "./components/molecule/CardList";
import Header from "./components/organism/Header";

function App() {
  return (
    <div className='container'>
      <Header classname='header' title='Title Task'/>
      <CardList photos={['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']} />
    </div>
  );
}

export default App;
