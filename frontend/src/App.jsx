import { useAuth } from '@clerk/clerk-react';
import { Route, Routes, Navigate } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import * as Sentry from "@sentry/react";
import { use } from 'react';

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);
const App = () => {
  const { isSignedIn } = useAuth();
  return (
    <>

      <SentryRoutes>
        <Route path="/" element={isSignedIn ? <HomePage /> : <Navigate to="/auth" replace />} />
        <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to="/" replace />} />

        <Route path="*" element={isSignedIn ? <Navigate to="/" replace /> : <Navigate to="/auth" replace />} />
      </SentryRoutes>
    </>
  );
};

export default App; 