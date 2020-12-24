import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Menu from './components/Menu'
import Footer from './components/Footer'


// pages
import HomePage from './pages/HomePage'
import Services from './pages/Services'

// styles
import './App.css'

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
      <Route path='/' component={HomePage} exact />
      <Route path='/services' component={Services} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
