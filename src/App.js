import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';
import Dashboard from './pages/Dashboard.js';
import KanbanBoard from './pages/KanbanBoard'; // Adjust path as needed
import Calendar from './pages/Calendar.js'; // Adjust path as needed
import Chart from './components/Chart.js'; // Example component
import Table from './components/Table'; // Example component
import ToastContainer from './components/ToastContainer';
import Loader from './components/Loader';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ToastContainer />
        <Loader />
        <div className="flex">
          <aside className="bg-gray-800 text-white w-64 min-h-screen">
            <nav className="p-4">
              <ul>
                <li><a href="/" className="block py-2 text-gray-200 hover:bg-gray-700">Dashboard</a></li>
                <li><a href="/kanban" className="block py-2 text-gray-200 hover:bg-gray-700">Kanban Board</a></li>
                <li><a href="/calendar" className="block py-2 text-gray-200 hover:bg-gray-700">Calendar</a></li>
                <li><a href="/charts" className="block py-2 text-gray-200 hover:bg-gray-700">Charts</a></li>
                <li><a href="/tables" className="block py-2 text-gray-200 hover:bg-gray-700">Tables</a></li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/kanban" element={<KanbanBoard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/charts" element={<Chart />} />
              <Route path="/tables" element={<Table />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
