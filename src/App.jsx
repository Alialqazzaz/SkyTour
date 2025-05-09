import './App.css'
import NavbarSection from './components/NavbarSection'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn';
import BookingPage from "./pages/BookingPage"
import FAQSection from './components/FAQSection'


function App() {
  return (
    <div className="App">
      <NavbarSection />

      <Routes>
      <Route path="/" element={<><Home /><FAQSection /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
