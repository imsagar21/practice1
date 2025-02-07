import React from "react";

const MapFilter = () => {
  const Array = [
    {
      person: "Sagar",
      id: "1",
      Age: "28",
      Country: "India",
    },
    {
      person: "Surendra",
      id: "3",
      Age: "30",
      Country: "Germany",
    },
    {
      person: "Madhu",
      id: "2",
      Age: "30",
      Country: "Ausrailia",
    },
    {
      person: "Surendra",
      id: "3",
      Age: "30",
      Country: "Germany",
    },
    {
      person: "Santosh",
      id: "1",
      Age: "35",
      Country: "USA",
    },
    {
      person: "Mahesh",
      id: "1",
      Age: "24",
      Country: "Canada",
    },
  ];
  const getAgeOf30 = Array.find((item, index) => {
    return item.Age === "30";
  });
  // console.log(getAgeOf30);
  const getAge = Array.filter((item, index) => {
    return item.Age === "30";
  });
  const someAge = Array.every((item)=>{
    return item.Age === "30"
  })

  const Fruits = ["apple", "banana","grapes"]
  console.log(Fruits.includes("apple"));
  console.log(Fruits.indexOf("apple"));

  const FindIndex  = Array.findIndex((item)=>{
    return item.Country === "Canada"
  })
  console.log(FindIndex);
  

  
  

  return (
    <>
      <div>
        {Array.map((item, index) => {
          return (
            <h1
              key={index}
            >{`${item.person} age is ${item.Age} years and belongs to ${item.Country} country`}</h1>
          );
        })}
      </div>
      <div>
        {getAge.map((item, index) => {
          return (
            <h1 key={index}>{`${item.person} age is equals to ${item.Age}`}</h1>
          );
        })}
      </div>
    </>
  );
};

export default MapFilter;
