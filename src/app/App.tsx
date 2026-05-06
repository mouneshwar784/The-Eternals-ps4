import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Toaster } from 'sonner';
import { LandingPage } from './components/LandingPage';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Scheduler } from './components/Scheduler';
import { Analytics } from './components/Analytics';
import { AIInsights } from './components/AIInsights';
import { History } from './components/History';
import { Settings } from './components/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/scheduler" element={<Layout><Scheduler /></Layout>} />
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          <Route path="/insights" element={<Layout><AIInsights /></Layout>} />
          <Route path="/history" element={<Layout><History /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />

          {/* Redirect unknown routes to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(17, 17, 27, 0.95)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: '#e4e4e7',
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}