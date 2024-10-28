import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import HomeSVG from "../assets/home.svg";
import AboutSVG from "../assets/about.svg"
import ContactSVG from "../assets/contact.svg"
 
const NewCars = () => {
  const options = [
    { label: "Homeeee", value: "1", icon: HomeSVG,  },
    { label: "About Usssss", value: "2",  icon: AboutSVG },
    { label: "Contact Usssss", value: "3",  icon: ContactSVG },
  ];

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default NewCars;
