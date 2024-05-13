import { Provider } from "jotai";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MessageBuilder from "./components/MessageBuilder";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MessageBuilder />
      </Layout>
    ),
  },
  {
    path: "/edit",
    element: (
      <Layout>
        <MessageBuilder />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
