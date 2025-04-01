import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import TestimonialCard from "./components/testimonial-card";
import NotFound from "./components/not-found";
import BlogCard from "./components/blog-card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestimonialCard />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog-card",
    element: <BlogCard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
