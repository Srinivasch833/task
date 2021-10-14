import { useCallback, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { bindInitialData } from "./Store/actions";
import Search from "./Components/Search";
import Users from "./Components/Users";

function App() {
  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch(bindInitialData(res.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="container my-4">
      <Search />
      <Users />
    </div>
  );
}

export default App;
