import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../utils/baseURL";
import { ArrowRight } from "lucide-react";

let obj = {
  fullName: "",
  email: "",
  profession: "",
  mobile: "",
};

const UpdateUser = () => {
  let [isLoading, setIsLoading] = useState(false);
  let [input, setInput] = useState(obj);
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseURL}/user/get-user?id=${id}`, { withCredentials: true })
      .then((res) => {
        // console.log(res?.data);
        setIsLoading(false);
        setInput(res?.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        alert(err?.response?.data?.error);
      });
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`${baseURL}/user/update-user?id=${id}`, input, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        alert("your account has been updated!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.error);
      });
  };

  return isLoading ? (
    <h1 className="text-3xl font-semibold">Loding...</h1>
  ) : (
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <form onSubmit={handleSubmit} action="#" method="POST" className="mt-8">
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Name{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  required
                  onChange={handleChange}
                  name="fullName"
                  value={input.fullName}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Name"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Mobile{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  required
                  onChange={handleChange}
                  name="mobile"
                  value={input.mobile}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="number"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                required
                  onChange={handleChange}
                  value={input.email}
                  name="email"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Profession{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  required
                  onChange={handleChange}
                  name="profession"
                  value={input.profession}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Profession"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Update <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
