import './App.css'
import Header from '@/components/layout/Header'
import HomeScreen from '@/screens/home/HomeScreen'
import { Route,Routes } from 'react-router-dom'
import SignupScreen from './screens/signup/SignupScreen'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/onboarding' element={<SignupScreen/>}/>
      </Route>
</Routes>
    </>
  )
}

export default App
