import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import RouterComponent from "./router";
import { useEffect } from "react";
import { loadUser } from "./redux/reducers/user";
import { Box } from "@mui/material";

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
        {user !== null && <Sidebar />}
        <Box
          className="pages-container"
          sx={{ width: user !== null ? "calc(100vw - 200px)" : "100vw" }}
        >
          <RouterComponent />
        </Box>
      </div>
    </div>
  );
};

export default App;
