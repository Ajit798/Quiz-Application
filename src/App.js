import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthGuard from "./components/Guard/authguard";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import ReportPage from "./components/ReportPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/quiz",
    element: (
      <AuthGuard>
        <QuizPage />
      </AuthGuard>
    ),
  },
  {
    path: "/report",
    element: <ReportPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
