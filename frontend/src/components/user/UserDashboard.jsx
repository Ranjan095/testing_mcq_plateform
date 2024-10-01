import React, { useEffect, useState } from "react";

import SubjectCard from "../../components/SubjectCard";
import image from "../../assets/image1.png";
import { useDispatch, useSelector } from "react-redux";
import { userGetAllTest } from "../../redux/test/testAction";

const userData = ["COMMON_TEST", "ASSIGNED_TEST"];
const commonTest = "COMMON_TEST";
const assignTest = "ASSIGNED_TEST";

const UserDashboard = () => {
  const [testName, setTestName] = useState(userData[0]);
  const dispatch = useDispatch();
  const { userTest, isSuccess } = useSelector((store) => store?.testReducer);
  const { accessToken } = useSelector((store) => store?.authReducer);

  const { commonTest, assignedTest } = userTest;

  useEffect(() => {
    // Only fetch the tests if they haven't been fetched already
    if (!isSuccess) {
      dispatch(userGetAllTest(accessToken));
    }
  }, [dispatch, isSuccess]);

  return (
    <>
      <h1 className="text-primary text-3xl font-medium text-center uppercase py-5 underline ">
        User Dashboard
      </h1>
      <div className="p-4">
        <div className="w-full  mx-auto md:w-[90%] lg:w-[85%] grid lg:grid-cols-8 gap-4">
          {/* admin information */}
          <div className="myShadow col-span-4 lg:col-span-2 p-4 flex flex-col gap-3 h-auto md:min-h-[400px] ">
            {userData?.map((testname, i) => (
              <button
                key={i}
                onClick={() => {
                  setTestName(testname);
                }}
                className={`p-2.5 px-4 rounded-lg font-medium cursor-pointer ${
                  testName === testname
                    ? "bg-blue-800 text-white"
                    : "bg-secondary text-primary"
                }`}
              >
                {testname}
              </button>
            ))}
          </div>

          {/* admin dashboard */}
          <div className=" col-span-4  lg:col-span-6">
            <div className=" ">
              {testName === assignTest ? (
                <div className="grid grid-cols-2">
                  {assignedTest?.map((ele) => (
                    <SubjectCard {...ele} key={ele._id} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2">
                  {commonTest?.map((ele) => (
                    <SubjectCard {...ele} key={ele._id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
};

export default UserDashboard;
