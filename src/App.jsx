import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './pages/Redux/store'
import Header from './components/Header'
import Home from './pages/Home'
import LogIn from './pages/loginPage/LogIn'
import Profile from './pages/userPage/Profile'
import Footer from './components/Footer'
import Error from './pages/Error'
import UserLogged from './components/UserLogged'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <section className="elementsToDisplay">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<UserLogged />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App