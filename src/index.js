import React from "react";
import ReactDOM from "react-dom/client";
import "css/index.css";
import App from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchPage from "components/pages/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{
		path: "/*",
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
