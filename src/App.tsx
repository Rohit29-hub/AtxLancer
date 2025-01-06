import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loader from './components/layout/Loader';

const HomeScreen = React.lazy(() => import('@/screens/home/HomeScreen'));
const SignupScreen = React.lazy(() => import('./screens/signup/SignupScreen'));
const MainLayout = React.lazy(() => import('./layouts/MainLayout'));
const OnboardingLayout = React.lazy(() => import('./layouts/OnboardingLayout'));
const Authentication = React.lazy(() => import('./modules/onboarding/components/steps/authentication/Authentication'));
const LoginScreen = React.lazy(() => import('./screens/login/LoginScreen'));
const ChooseRole = React.lazy(() => import('./modules/onboarding/components/steps/choose-role/ChooseRole'));
const Profile = React.lazy(() => import('./modules/onboarding/components/steps/profile/Profile'));
const FreelancerPreference = React.lazy(() => import('./modules/onboarding/freelancer/steps/freelancer-preference/FreelancerPreference'));
const FreelancerSkillSelection = React.lazy(() => import( './modules/onboarding/freelancer/steps/freelancer-skills/FreelancerSkillSelection'));
const NotFound = React.lazy(() => import('./screens/not-found/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Onboarding routings */}
        <Route path="/onboarding" element={<OnboardingLayout />}>
          {/* Signup routes */}
          <Route path="signup" element={<SignupScreen />}>
            <Route index element={<Authentication />} />
            <Route path="choose-role" element={<ChooseRole />} />
            <Route path="client">
              <Route  path="profile" element={<Profile />} />
            </Route>
            <Route path="freelancer">
              <Route path="profile" element={<Profile />} />
              <Route path="preference" element={<FreelancerPreference />} />
              <Route path="skills" element={<FreelancerSkillSelection />} />
            </Route>
          </Route>
          {/* Login route */}
          <Route path="login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
