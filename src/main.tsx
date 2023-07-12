import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from "react-redux";
import App from './app';
import store from './redux-store/store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);