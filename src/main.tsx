import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.tsx'
import { Provider } from 'react-redux'
import { persistor, ReduxStore } from './redux/store/ReduxStore.ts'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={Routes} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
