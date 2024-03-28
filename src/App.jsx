import React from 'react';
import Layout from 'layouts/Layout';
import Index from 'pages/index';
import Bordercollie from 'pages/borderCollie';
import RhodesianInfoPages from 'pages/rhodesian';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'styles/styles.css';

function App() {
  return (
    <div className="App">
        <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bordercollie" element={<Bordercollie />} />
            <Route path="/rhodesian" element={<RhodesianInfoPages />} />
            {/* Otros elementos si es necesario */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
