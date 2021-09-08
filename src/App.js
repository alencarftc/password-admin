import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@sass/main.scss';

import HomePage from '@pages/HomePage';
import style from './App.scss';

const App = () => (
	<div className={style.app}>
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</BrowserRouter>
	</div>
);

export default App;
