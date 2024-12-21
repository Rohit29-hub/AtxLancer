import './App.css'
import { Button } from '@/components/ui/button'


function App() {
  return (
    <>
      <h1 className='text-3xl font-bold '># Welcome to <a target='_blank' href="http://atxlancer.com">Atxlancer.com</a></h1>
      <p className="mt-2 ">This is our new freelancing website</p>
      <Button className='mt-4'>Login</Button>
    </>
  )
}

export default App
