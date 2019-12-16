import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routerObject from './main/constant.js';

const router = (
	<HashRouter>
		<Switch>
			{routerObject.map((route, index) => {
				console.log('route:', route);
				return <Route key={index} path={route.path} exact={route.exact} component={route.component} />;
			})}
		</Switch>
	</HashRouter>
);

/**
 * 利用router 包围着跟component组件
 */

ReactDOM.render(router, document.getElementById('root')); // 原来好使的
// ReactDOM.render(
// 	<Router>
// 		<App />
// 	</Router>,
// 	document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
