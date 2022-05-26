import React, { useState } from 'react';
import './public/styles.css';

function App() {
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShownHoverContent(true)}
        onMouseLeave={() => setIsShownHoverContent(false)}>
        Hover!
      </button>
      {isShownHoverContent && (
        <div>
          It works..!
        </div>
      )}
    </div>
  );
}

export default App;