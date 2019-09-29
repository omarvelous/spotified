import React from 'react';

import Player from './components/Player';

function App() {
  return (
    <div class="container">
      <header>
        <nav class="navbar">
          <span class="navbar-brand mb-0 h1">Spotified</span>
        </nav>
      </header>
      <Player/>
    </div>
  );
}

export default App;
