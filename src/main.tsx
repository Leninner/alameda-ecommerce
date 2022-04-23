import { createRoot } from 'react-dom/client'
import App from './routes/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers'

const AppStore = createStore(rootReducer)

createRoot(document.getElementById('root')!).render(
  <Provider store={AppStore}>
    <App />
  </Provider>
)
