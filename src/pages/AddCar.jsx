import React from "react";
import AddUpdateComp from "../components/AddUpdateComp";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";

const AddCar = () => {
  const handleAddCar = (data) => {
    const newCarObj = { id: Date.now(), ...data };
    const existingData = loadFromLocalStorage("carData");
    console.log("Adding car:", newCarObj);
    const updatedData = [newCarObj, ...existingData];
    console.log(updatedData);
    saveToLocalStorage("carData", updatedData);
  };

  return (
    <div>
      <AddUpdateComp onSubmit={handleAddCar} />
    </div>
  );
};

export default AddCar;
