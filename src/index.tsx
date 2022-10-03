import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
    />
    <ThemeProvider
      breakpoints={['sm', 'md', 'lg']}
      minBreakpoint='sm'
    >
      <Home />
    </ThemeProvider>;
  </React.StrictMode>
);
