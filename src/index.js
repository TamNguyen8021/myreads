import React from 'react';
import ReactDOM from 'react-dom/client';
import 'css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchPage from "components/pages/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "search",
				element: <SearchPage />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
