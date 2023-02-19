import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogPage from "./components/BlogPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
      </Route>
    )
  );
  return (
    <div className=" text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div>
        <Outlet />
      </div>
    </>
  );
};
