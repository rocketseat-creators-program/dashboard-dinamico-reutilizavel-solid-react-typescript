import React from 'react';
import {Dashboard} from 'src/components/Dashboard-initial/Dashboard';

import './styles/main.scss';

const App = () => {
	return (
		<div className="App">
			<h1>My Awesome SOLID Dashboard</h1>
			<Dashboard />
		</div>
	);
};

export default App;
