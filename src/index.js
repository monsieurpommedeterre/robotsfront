// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Robots from "./pages/Robots";
import Robot from "./pages/Robot";
import NoPage from "./pages/NoPage";
import './global.css';
import store from './store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="robots" element={<Robots />} />
        <Route path="robot/:robotid" element={<Robot />} />
        <Route path="/nopage" element={<NoPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
