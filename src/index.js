// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import rootReducer from './redux/reducer';

// Styles
import './css/app.css';

// Components
import App from './components/App';
import Main from './components/Main';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Detail from './components/Detail';
import AddListing from './components/AddListing';
import EditListing from './components/EditListing';
import NotFound from './components/NotFound';

// REDUX!
const store = createStore(rootReducer);

const Root = () => {
	return (
		<Provider store={store}>
	        <Router history={browserHistory}>
				<Route component={App}>
		            <Route path="/" component={Main} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/profile" component={Profile} />
					<Route path="/detail" component={Detail} />
					<Route path="/add-listing" component={AddListing} />
					<Route path="/edit-listing" component={EditListing} />
		            <Route path="*" component={NotFound} />
				</Route>
	        </Router>
		</Provider>
	);
}

ReactDOM.render(<Root/>, document.querySelector('#root'));
