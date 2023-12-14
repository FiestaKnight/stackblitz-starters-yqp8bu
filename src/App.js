import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./Layout";
import First from "./Info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Info" element={<First />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;