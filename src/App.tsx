import './App.css'
import HomeScreen from '@/screens/home/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import SignupScreen from './screens/signup/SignupScreen'
import MainLayout from './layouts/MainLayout'
import OnboardingLayout from './layouts/OnboardingLayout'
import Authentication from './modules/onboarding/components/steps/authentication/Authentication'
import LoginScreen from './screens/login/LoginScreen'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
        </Route>

        {/* onboarding routings */}
        <Route path='/onboarding' element={<OnboardingLayout />}>
          {/* signup routes */}
          <Route path='signup' element={<SignupScreen />}>
            <Route index element={<Authentication />} />
            <Route path='choose-role' element={<h1>choose role</h1>} />
            <Route path='client'>
              <Route path='profile' element={<h1>profile</h1>} />
            </Route>
            <Route path='freelancer'>
              <Route path='profile' element={<h1>profile</h1>} />
            </Route>
          </Route>
          {/* login route */}
          <Route path='login' element={<LoginScreen/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
