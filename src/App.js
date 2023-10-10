import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import RouterComponent from "./router";
import { useEffect } from "react";
import { loadUser } from "./redux/reducers/user";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="pages-container">
          <RouterComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
