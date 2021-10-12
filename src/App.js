import { useEffect, useState } from "react";
import axios from "axios";

let allUsers = [];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (e) => {
    setUsers(
      e?.target?.value
        ? allUsers.filter((user) =>
            user.name.toLowerCase().includes(e?.target?.value)
          )
        : allUsers
    );
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      allUsers = res.data;
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-4">
      <div class="col-sm-3 col-md-12">
        <input
          type="text"
          class="form-control"
          onChange={handleSearch}
          placeholder="Search"
          name="q"
        />
      </div>
      <div className="row mt-4">
        {users.map((user) => (
          <div key={user.id} className="col-md-4 mb-2 p-2">
            <div className="shadow p-3">
              <p>
                <b>Name:</b> {user.name}
              </p>
              <p>
                <b>Email Address:</b> {user.email}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
