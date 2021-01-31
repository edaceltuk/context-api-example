import Home from "./screens/Home";

import { ThemeProvider } from "./provider/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
