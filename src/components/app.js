import { Router } from 'preact-router'
import { Provider } from 'unistore/preact'
// Code-splitting is automated for `routes` directory
import List from '../routes/list/list'
import Profile from '../routes/profile/profile'
import Settings from '../routes/settings/settings'
import { store } from '../store/store'
import Footer from './footer/footer'
import Header from './header/header'

const App = () => (
    <Provider store={store}>
        <div id="app">
            <Header />
            <main>
                <Router>
                    <List path="/list" />
                    <Profile path="/profile" user="me" />
                    <Settings path="/settings" />
                </Router>
            </main>
            <Footer />
        </div>
    </Provider>
)

export default App
