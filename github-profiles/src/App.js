import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
// import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
    </Router>
  );
}

export default App;
