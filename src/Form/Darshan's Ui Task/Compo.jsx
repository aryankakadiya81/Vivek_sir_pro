import React from "react";
import { useState } from "react";

const Compo = () => {
  let array = [
    {
      id: 1,
      Name: "Aryan Kakadiya",
      Email: "Example@gmail.com",
      Location: "Boston,USA",
      Phone: 9934567788,
    },
    {
      id: 2,
      Name: "Camreen Green",
      Email: "Example@gmail.com",
      Location: "Boston,USA",
      Phone: 9934567788,
    },
    {
      id: 3,
      Name: "Alan Green",
      Email: "Example@gmail.com",
      Location: "Boston,USA",
      Phone: 9934567788,
    },
    {
      id: 4,
      Name: "Red Bull",
      Email: "Example@gmail.com",
      Location: "Boston,USA",
      Phone: 9934567788,
    },
    {
      id: 5,
      Name: "Green Bull",
      Email: "Example@gmail.com",
      Location: "Boston,USA",
      Phone: 9934567788,
    },
    {
      id: 6,
      Name: "Yellow Bull",
      Email: "Example@gmail.com",
      Location: "Boston,USA",
      Phone: 9934567788,
    },
  ];

  const [count, Usecount] = useState(array);

  let remov = (itemId) => {
    Usecount(
      count.filter((elem) => {
        return elem.id !== itemId;
      })
    );
  };

  let [Name, setName] = useState("");
  function Fname(e) {
    setName(e.target.value);
  }

  let [Email, setEmail] = useState("");
  function Femail(e) {
    setEmail(e.target.value);
  }

  let [Location, setLocation] = useState("");
  function FLocation(e) {
    setLocation(e.target.value);
  }

  let [Phone, setPhone] = useState("");
  function Fphone(e) {
    setPhone(e.target.value);
  }

  // let [sName, setsName] = useState(Name);
  // let [sEmail, setsEmail] = useState(Email);
  // let [sLocation, setsLocation] = useState(Location);
  // let [sPhone, setsPhone] = useState(Phone);

  function editdata(id1) {
    Usecount(
      count.filter((ele) => {
        if (ele.id === id1) {
          ele.Name = Name;
          ele.Email = Email;
          ele.Location = Location;
          ele.Phone = Phone;
        }
        return true;
      })
    );
  }

  // function Fsubmit() {
  //         setsName(sName)
  //         setsEmail(sEmail)
  //         setsLocation(sLocation)
  //         setsPhone(sPhone)
  //     }


  let [creat, setCreat] = useState(array);

  function create(){
      Usecount(array)

      setCreat([{
        "id": 7,
        "Name": `${Name}`,
        "Email": `${Email}`,
        "Location": `${Location}`,
        "Phone": `${Phone}`
      },...count])
      Usecount(creat);
  }

  return (
    <>
      <div className="min-h-screen flex-col justify-center inline-block">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-black shadow-lg sm:rounded-3xl sm:p-20">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                id="Name"
                type="text"
                placeholder="Name"
                value={Name}
                onChange={Fname}
              />
            </div>

            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                id="Email"
                type="email"
                placeholder="Email"
                value={Email}
                onChange={Femail}
              />
            </div>

            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                id="Location"
                type="text"
                placeholder="Location"
                value={Location}
                onChange={FLocation}
              />
            </div>

            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                id="Phone"
                type="tel"
                placeholder="Phone"
                value={Phone}
                onChange={Fphone}
              />
            </div>

            <button className="bg-blue-500 text-white rounded-md px-5 py-2 ml-44">
              Submit
            </button>
          </div>
        </div>

        <div className="w-9/12 h-auto p-5 shadow-2xl mx-auto mt-5">
          <div className="flex justify-between">
            <h1>Products</h1>
            <button className="bg-blue-500 px-4 text-white" onClick={create}>Create</button>
          </div>
          <input
            type="search"
            className="w-8/12 border h-10 bg-blue-100 px-3 mt-5 focus:outline-none"
            placeholder="Search"
          />

          <table className="mt-12 table-fixed w-full border-collapse border">
            <thead>
              <tr className="h-16 bg-black text-white">
                <th className="pl-5">Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {count.map((el) => {
                return (
                  <tr className="h-16 border border-collapse">
                    <td className="pl-5">{el.Name}</td>
                    <td>{el.Email}</td>
                    <td>{el.Location}</td>
                    <td>{el.Phone}</td>
                    <td>
                      <button
                        className="border-2 text-blue-600 border-blue-700 px-3 rounded-md hover:bg-blue-600 hover:text-white"
                        onClick={() => editdata(el.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="border-2 text-red-600 border-red-600 px-3 rounded-md ml-5 hover:bg-red-600 hover:text-white"
                        onClick={() => remov(el.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Compo;
