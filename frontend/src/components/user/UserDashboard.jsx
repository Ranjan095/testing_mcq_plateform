import React, { useEffect } from "react";

import SubjectCard from "../../components/SubjectCard";
import image from "../../assets/image1.png";
import { useDispatch, useSelector } from "react-redux";
import { userGetAllTest } from "../../redux/test/testAction";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { userTest, isSuccess } = useSelector((store) => store?.testReducer);

  useEffect(() => {
    // Only fetch the tests if they haven't been fetched already
    if (!isSuccess) {
      dispatch(userGetAllTest());
    }
  }, [dispatch, isSuccess]);

  return (
    <div className="mx-2">
      <h1 className=" text-tab text-2xl font-medium text-center  py-5  ">
        Test
      </h1>
      <div className="grid grid-cols-4 gap-2 lg:gap-4">
        {userTest.map((ele) => (
          <SubjectCard {...ele} key={ele._id} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
