import './App.css';
import Board from './components/board'

const App = () => {

  return (
    <div className="App">
      <h1>Boston Brunch Favorites</h1>
      <h2>Here are my favorite brunch spots in Boston!</h2>
      <Board />
    </div>
  )
}

export default App