import * as React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './store';
import { AddAPIKeys } from './components/AddAPIKeys';
import { SendSms } from './components/SendSms';
import { SmsReport } from './components/SmsReport';

const store = configureStore();
export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Provider store={store}>
                    <header className="header"></header>
                    <Router >
                        <aside className="sidebar">
                            <h1>Welcome</h1>
                            <ul className="links">
                                <li>
                                    <Link replace to={`/`} className="link">Api Settings</Link>
                                </li>
                                <li>
                                    <Link replace to={`/sendSms`} className="link">Send Sms</Link>
                                </li>
                                <li>
                                    <Link replace to={`/smsReport`} className="link">Sms Report</Link>
                                </li>
                            </ul>
                        </aside>
                        <main className="main">
                            <Switch>
                                <Route exact path="/">
                                    <AddAPIKeys />
                                </Route>
                                <Route path="/sendSms">
                                    <SendSms />
                                </Route>
                                <Route path="/smsReport">
                                    <SmsReport />
                                </Route>
                            </Switch>

                        </main>
                    </Router>

                </Provider >
            </div>

        );
    }
}

export default App;
