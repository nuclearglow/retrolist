import { Router } from 'preact-router'
// Code-splitting is automated for `routes` directory
import Home from '../routes/home/home'
import Profile from '../routes/profile/profile'
import Header from './header/header'

const App = () => (
    <div id="app">
        <Header />
        <Router>
            <Home path="/" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
        </Router>
    </div>
)

export default App
