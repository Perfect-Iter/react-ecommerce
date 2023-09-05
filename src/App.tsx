import './App.css'
import HomePage from './pages/Home/HomePage'

import { Route, Routes  } from 'react-router-dom'
import Shop from './pages/Shop/Shop'




function App() {

  return (
    <>
      <div className="">
        <Routes >
          <Route  path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </>
  )
}

export default App
