import React, { Component } from 'react';

import CapitalDataProvider from './capitail_data_provider'

class App extends Component {

  render() {
    return (
      <div>
          <CapitalDataProvider></CapitalDataProvider>
      </div>
    );
  }
}

export default App;
