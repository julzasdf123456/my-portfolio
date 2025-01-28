import "./App.css";
import Landing from "./components/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SoftwareDevelopment from "./components/SoftwareDevelopment";

function App() {
  return (
    <>
      <div
        className={`w-full flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900`}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/software-development"
              element={<SoftwareDevelopment />}
            />
            {/* Redirect example */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            {/* Catch-all route for 404 */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
