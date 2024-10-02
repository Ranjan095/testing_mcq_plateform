import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../utils/baseURL";
import UserCart from "../UserCart";
import { useSelector } from "react-redux";

const AllUser = () => {
  let [users, setUsers] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [isSuccess, setIsSuccess] = useState(false);
  const { accessToken } = useSelector((store) => store.authReducer);

  let handleDelete = (id) => {
    axios
      .delete(`${baseURL}/user/delete-user?id=${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        // console.log(res);
        alert("User deleted successfully");
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseURL}/user/getAllUsers`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        // console.log(res?.data);
        setUsers(res?.data);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err?.response?.data?.error);
        console.log(err);
      });
  }, []);

  return isLoading ? (
    <h1 className="text-3xl font-bold">Loading...</h1>
  ) : (
    <>
      <h1 className="text-3xl">List of Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users?.map((res) => (
          <UserCart key={res._id} handleDelete={handleDelete} {...res} />
        ))}
      </div>
    </>
  );
};

export default AllUser;
