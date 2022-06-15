import { createRoot } from 'react-dom/client'
import App from './routes/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers'
import { logActions } from './middlewares/logActions'
import { applyMiddleware } from 'redux'

const AppStore = createStore(rootReducer, applyMiddleware(logActions))

createRoot(document.getElementById('root')!).render(
  <Provider store={AppStore}>
    <App />
  </Provider>
)
