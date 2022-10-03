import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <div>
        <Link to='/Ruta1'>Ruta 1</Link>
      </div>
      <div>
        <h1>Aca se Renderizan las rutas: </h1>
        <Routes>
          <Route path='/Ruta1' element={Ruta1} />
        </Routes>
      </div>
    </Router>
  );
}

