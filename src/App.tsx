import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from 'react-router-dom';
import Home from '../src/components/Home';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Me from './pages/Me';
import { Suspense } from 'react';
import Loading from './components/Loading';
import Create from './pages/Create';

function App() {
	// <BrowserRouter>
	// 	<Routes>
	// 		<Route path="/home" element={<Landing />} />
	// 		<Route path="/signup" element={<Signup />} />
	// 		{/* <Route path="/" Component={Home}> */}
	// 	</Routes>
	// </BrowserRouter>

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Signup />,
		},
		{
			path: '/landing',
			element: (
				<Suspense fallback={<Loading />}>
					<Landing />
				</Suspense>
			),
		},
		{
			path: '/signup',
			element: <Signup />,
		},
		{
			path: '/signin',
			element: <Signin />,
		},
		{
			path: '/me',
			element: (
				<Suspense fallback={<Loading />}>
					<Me />
				</Suspense>
			),
		},
		{
			path: '/*',
			element: <Navigate to="/signup" replace />,
		},
		{
			path: '/newcard',
			element: <Home />,
		},
		{
			path: '/create',
			element: <Create />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
