import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store, persistor}from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>

);
  
