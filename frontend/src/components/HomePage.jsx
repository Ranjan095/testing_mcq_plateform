import React from "react";
import SubjectCard from "../components/SubjectCard";
import image from "../assets/image1.png";
const HomePage = () => {
  const subjects = [
    { id: 1, name: "Mathematics", image: image },
    { id: 2, name: "Science", image: image },
    { id: 3, name: "History", image: image },
    { id: 4, name: "English", image: image },
    { id: 5, name: "Art", image: image },
    { id: 6, name: "Geography", image: image },
    { id: 7, name: "Physics", image: image },
    { id: 8, name: "Chemistry", image: image },
    { id: 9, name: "Biology", image: image },
    { id: 10, name: "Computer Science", image: image },
  ];
  return (
    <>
      <div className=" myBackground">
        <div className="grid grid-cols-2 w-full px-4 md:w-[95%] lg:w-[85%] mx-auto h-auto md:h-[530px] py-8 ">
          <div className="h-full col-span-2 md:col-span-1 flex flex-col justify-center text-center md:text-left pt-24 md:py0">
            <h1 className="text-[50px] font-bold text-secondary capitalize">
              Welcome to my website!
            </h1>
            <p className="text-md text-secondary tracking-wide mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              sunt quos dolore dicta mollitia voluptatem veniam enim error ipsam
              officiis ipsa consequuntur deleniti perspiciatis explicabo
              suscipit natus, debitis reprehenderit numquam?
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:w-[95%] lg:w-[85%] mx-auto">
        <h1 className="text-primary text-3xl font-medium text-center uppercase py-5 underline ">
          Start Quiz
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects?.map((data) => (
            <SubjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
