// styles 
import './assets/styles/reset.css'
import './assets/styles/normalize.css'
import './assets/styles/font-declaration.css'
import './assets/styles/color-variables.css'
import './assets/styles/common-styles.css'

// other
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { getToken } from './services/token'
import store from './redux-store/store'
import { setAuthorizationStatus } from './redux-store/reducers/common-reducer'
import { AuthorizationStatus } from './utils/objects'

const token = getToken()

if (token) {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.Auth))
}

export default function App() {

  return (
    <RouterProvider router={router} />
  );
}
