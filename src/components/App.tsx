import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ color: 'gray' }}>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
