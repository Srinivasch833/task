import { useSelector } from "react-redux";
import { RootState } from "../Store/reducer";

const Users = () => {
  const users = useSelector((state: RootState) => state.filteredData);

  return (
    <div className="container my-4">
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

export default Users;
