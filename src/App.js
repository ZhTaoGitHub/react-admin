import React, { Component } from "react";
import './styles/index.css'
import Root from './layout';
import { Provider } from 'react-redux';
import { store } from './redux/store';

class App extends Component {
  state = {
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }

}

export default App;


