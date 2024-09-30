import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../utils/baseURL";

let obj = {
  fullName: "",
  email: "",
  password: "",
  profession: "",
  mobile: "",
};

const SignUp = () => {
  let [input, setInput] = useState(obj);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/user/create`, input,)
      .then((res) => {
        console.log(res);
        alert("your account has been created!");
        setInput(obj)
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.error);
      });
  };

  return (
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 ">
          already have account?{" "}
          <Link
            to="/login"
            title=""
            className="font-semibold text-black transition-all duration-200 hover:underline"
          >
            login your account
          </Link>
        </p>
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  required
                  onChange={handleChange}
                  name="password"
                  value={input.password}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                SignUp <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
