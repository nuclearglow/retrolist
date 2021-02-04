import { Router } from 'preact-router'
import Div100vh from 'react-div-100vh'
import { Provider } from 'unistore/preact'
// Code-splitting is automated for `routes` directory
import List from '../routes/list/list'
import Profile from '../routes/profile/profile'
import Settings from '../routes/settings/settings'
import { store } from '../store/store'
import Footer from './footer/footer'
import Title from './title/title'

const App = () => (
    <Provider store={store}>
        <Div100vh id="app">
            <Title />
            <main>
                <div class="scanline" />
                <Router>
                    <List path="/" />
                    <Profile path="/profile" user="me" />
                    <Settings path="/settings" />
                </Router>
            </main>
            <Footer />
        </Div100vh>
    </Provider>
)

export default App
