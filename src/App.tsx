import { BrowserRouter as Router, Routes, Route } from 'react-router';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
export default function App() {
  return (
    <>
      <Router>
        {/* Entertainment layout */}
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
          </Route>
          {/* fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
