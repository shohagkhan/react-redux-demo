import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
