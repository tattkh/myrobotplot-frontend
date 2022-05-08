import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Create, Home, Movie } from './pages';
import { Navigation } from './components';

function App() {
	return (
		<div className="App">
			<Navigation />
			<br />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="create" element={<Create />} />
			</Routes>
		</div>
	);
}

export default App;
