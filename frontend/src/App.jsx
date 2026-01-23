import { useAuth } from '@clerk/clerk-react';
import { Route, Routes, Navigate } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import CallPage from './pages/CallPage.jsx';
import * as Sentry from "@sentry/react";
import { use } from 'react';

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);
const App = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // or a loading spinner
  }
  return (
    <>

      <SentryRoutes>
        <Route path="/" element={isSignedIn ? <HomePage /> : <Navigate to="/auth" replace />} />
        <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to="/" replace />} />
        <Route path="/call/:id" element={isSignedIn ? <CallPage /> : <Navigate to="/auth" replace />} />

        <Route path="*" element={isSignedIn ? <Navigate to="/" replace /> : <Navigate to="/auth" replace />} />
      </SentryRoutes>
    </>
  );
};

export default App; 