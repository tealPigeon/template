import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
function App() {

	return (
		<HashRouter>
			{/* <BrowserRouter> */}
				<Routes>
					<Route path='*' element={<Main />} />
				</Routes>
			{/* </BrowserRouter> */}
		</HashRouter>

	);
}

export default App;
