import './App.css';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList';

function App() {
  console.log('app runs');
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList></SongList>
        </div>
        <div className="column eight wide">
          <SongDetail></SongDetail>
        </div>
      </div>
    </div>
  );
}

export default App;
