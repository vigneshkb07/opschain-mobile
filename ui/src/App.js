import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { history } from "./store/enhancers/middlewares/router";
import Layout from "./containers/Layout";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
        <Layout/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;