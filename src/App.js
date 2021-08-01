import React from 'react'
import { Provider } from "react-redux";
import Sagaredux from "./component/sagaredux";
import Store from "./store/sagastore";


function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Sagaredux/>
    </div>
    </Provider>
  );
}

export default App;
