import { Router,Route,Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Counter from "./components/counterPage";
import Posts from "./components/postsPage";
import Users from "./components/usersPage";
import Home from "./components/homePage";
import { Navigate } from "react-router-dom";

function App ()  {
  return(
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="counter" element={<Counter/> }/>
          <Route path="posts" element={<Posts/> }/>
          <Route path="users" element={<Users/> }/>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
}

export default App;