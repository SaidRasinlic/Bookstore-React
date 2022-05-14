import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/Book';
import CategoriesPage from './pages/CategoriesPage';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </main>
    </Router>
  );
}
