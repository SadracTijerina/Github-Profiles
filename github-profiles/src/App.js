import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserSearch from "./user/components/pages/UserSearch";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<UserSearch />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
