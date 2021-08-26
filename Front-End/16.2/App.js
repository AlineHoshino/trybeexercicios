import './App.css';
import { Provider } from 'react-redux'
import Title from './components/title';
import List from './components/list';
import Todo from './components/todo';
import store from './store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
     < Title />
    < Todo />
    < List />
    </Provider>
    </div>
  );
}

export default App;
