import { Link } from "react-router-dom";

const UserCart = ({
  _id,
  fullName,
  email,
  mobile,
  profession,
  handleDelete,
}) => {
  return (
    <div className="bg-gray-300 m-2">
      <div>
        <h1>{fullName}</h1>
        <h1>{email}</h1>
        <h1>{mobile}</h1>
        <h1>{profession}</h1>
      </div>
      <div className="flex justify-center">
        <Link to={`/updateUser/${_id}`}>
          <button className="bg-green-500 text-white p-1 m-2 rounded-md">
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 text-white p-1 m-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCart;
