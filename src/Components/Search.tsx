import { useDispatch } from "react-redux";
import { searchUsers } from "../Store/actions";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="col-sm-3 col-md-12">
      <input
        type="text"
        className="form-control"
        onChange={(e) => dispatch(searchUsers(e?.target?.value))}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
