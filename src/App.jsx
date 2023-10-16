import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './pages/Redux/store'
import Header from './components/Header'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import Error from './pages/Error'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App