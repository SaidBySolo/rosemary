import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'modern-normalize/modern-normalize.css';
import "@yaireo/tagify/dist/tagify.css"
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
