import 'styles/styles.css';
import Index from 'pages/index';
import RhodesianInfoPages from 'pages/rhodesian';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/rhodesian" element={<RhodesianInfoPages />} />
                <Route path="/" element={<Index />} />
            </Routes>
        </Router>
    </div>
  );
}
    

export default App;
