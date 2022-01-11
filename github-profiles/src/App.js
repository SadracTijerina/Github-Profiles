import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import HomePage from "./Homepage/HomePage";
import UsersHistory from "./user/components/pages/UsersHistory";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<UsersHistory />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
