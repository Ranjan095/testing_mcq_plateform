import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CreateTest from "./CreateTest";
import AllTest from "./AllTest";
import AllUser from "./AllUser";

const AdminDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "Add_Test"; // Get the tab from URL or default to "Add Test"
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  useEffect(() => {
    // Update searchParams in the URL when selectedTab changes
    setSearchParams({ tab: selectedTab });
  }, [selectedTab, setSearchParams]);

  const renderContent = () => {
    switch (selectedTab) {
      case "Add_Test":
        return <CreateTest />;
      case "All_Test":
        return <AllTest />;
      case "All_Users":
        return <AllUser />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-around min:h-screen">
      <div className="bg-red-300 w-[20%] h-full">
        <ul className="text-center">
          <li
            className={`bg-tab my-2 p-2 rounded-md font-bold text-white cursor-pointer ${
              selectedTab === "Add_Test" ? "bg-blue-500" : ""
            }`}
            onClick={() => setSelectedTab("Add_Test")}
          >
            Add Test
          </li>
          <li
            className={`bg-tab my-2 p-2 rounded-md font-bold text-white cursor-pointer ${
              selectedTab === "All_Test" ? "bg-blue-500" : ""
            }`}
            onClick={() => setSelectedTab("All_Test")}
          >
            All Test
          </li>
          <li
            className={`bg-tab my-2 p-2 rounded-md font-bold text-white cursor-pointer ${
              selectedTab === "All_Users" ? "bg-blue-500" : ""
            }`}
            onClick={() => setSelectedTab("All_Users")}
          >
            All Users
          </li>
        </ul>
      </div>
      <div className="bg-green-300 w-[75%] h-full p-4">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
