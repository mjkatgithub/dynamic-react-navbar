import React from 'react'

import Navbar from 'dynamic-react-navbar';
import 'dynamic-react-navbar/dist/index.css'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Imprint from './pages/Imprint'

const links = [
  { caption: 'Home', path: '/', key: '1' },
  { caption: 'About', path: '/about', key: '2' },
  { caption: 'Contact', path: '/contact', key: '3' },
  { caption: 'Privacy Policy', path: '/privacy', key: '4' },
  { caption: 'Imprint', path: '/imprint', key: '5' }
]

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar links={links} />
        <Route exact path='/' component={Home} />
        <Route exact path='/dynamic-react-navbar' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/privacy' component={PrivacyPolicy} />
        <Route path='/imprint' component={Imprint} />
      </div>
    </BrowserRouter>
  )
}

export default App
