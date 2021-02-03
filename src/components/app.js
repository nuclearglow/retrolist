import { Router } from 'preact-router'
import { Provider } from 'unistore/preact'
// Code-splitting is automated for `routes` directory
import Home from '../routes/home/home'
import Profile from '../routes/profile/profile'
import { store } from '../store/store'
import Header from './header/header'

const App = () => (
    <div id="app">
        <Header />
        <Provider store={store}>
            <Router>
                <Home path="/" />
                <Profile path="/profile/" user="me" />
                <Profile path="/profile/:user" />
            </Router>
        </Provider>
    </div>
)

export default App
