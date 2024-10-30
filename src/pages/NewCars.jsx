import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";

const NewCars = () => {
  const options = [
    { label: "Homeeee", value: "1" },
    { label: "About Usssss", value: "2" },
    { label: "Contact Usssss", value: "3" },
  ];

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default NewCars;
