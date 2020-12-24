import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Menu from './components/Menu'

// pages
import HomePage from './pages/HomePage'

// styles
import './App.css'

const App = () => {
  return (
    <Router>
      <Menu />
      <Route path='/' component={HomePage} exact />
    </Router>
  )
}

export default App
