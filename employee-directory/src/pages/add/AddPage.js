import React, { useState } from "react";
import Heading from "../../components/addPageComponents/Heading";
import Input from "../../components/addPageComponents/Input";
import Button from "../../components/addPageComponents/Button";
import Navbar from "../../components/addPageComponents/Navbar";
import {
  EmployeeSuccessful,
  EmployeeExists,
  EmployeeError,
} from "../../components/univComponents/Toast";
// import "./addPage.css";

const AddPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [dept, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [src, setSrc] = useState("https://i.postimg.cc/3RDbYzb5/avatar1.jpg")

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contact: contact,
      address: address,
      dept: dept,
      role: role,
      city: city,
      state: state,
      zip: zip,
      country: country,
      src: src
    };

    fetch("http://localhost:7000/addRecord", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((response) => {
        if (response.status === 200) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setContact("");
          setAddress("");
          setDepartment("");
          setRole("");
          setCity("");
          setState("");
          setZip("");
          setCountry("");
          setSrc("https://i.postimg.cc/3RDbYzb5/avatar1.jpg");

          EmployeeSuccessful();
        } else if (response.status === 401) EmployeeExists();
      })
      .catch((error) => {
        EmployeeError();
        console.error("There has been a problem with fetch operation:", error);
      });
  };

  return (
    <>
      <div class="container">
        <Navbar></Navbar>
        <Heading title="Add Employee" className="text-start mx-5 mt-5" />
        <div class="text-left m-3 profile">
          <img
            class="profile-img-add"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div type="button" class="addpage-img align-middle text-center">
            ✒️
          </div>
        </div>
        <div class="mx-5">
          <form className="row" onSubmit={handleSubmit} method="POST">
            <Input
              type="text"
              name="fname"
              label="First Name"
              placeholder="First Name"
              groupClassName="col mt-3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="off"
              autofocus
            />
            <Input
              type="text"
              name="lname"
              label="Last Name"
              placeholder="Last Name"
              groupClassName="col mt-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="off"
            />
            <div class="w-100"></div>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Email Address"
              groupClassName="col mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="number"
              label="Contact Number"
              placeholder="Contact Number"
              groupClassName="col mt-3"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              autoComplete="off"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="address"
              label="Address"
              placeholder="Address"
              groupClassName="col mt-3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="off"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="Department"
              label="Department"
              placeholder="Department"
              groupClassName="col mt-3"
              value={dept}
              onChange={(e) => setDepartment(e.target.value)}
              autoComplete="off"
            />
            <Input
              type="text"
              name="Role"
              label="Role"
              placeholder="Role"
              groupClassName="col mt-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              autoComplete="off"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="city"
              label="City"
              placeholder="City"
              groupClassName="col mt-3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="off"
            />
            <Input
              type="text"
              name="state"
              label="State"
              placeholder="State"
              groupClassName="col mt-3"
              value={state}
              onChange={(e) => setState(e.target.value)}
              autoComplete="off"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="pin"
              label="Zip code"
              placeholder="Zip code"
              groupClassName="col mt-3"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              autoComplete="off"
            />
            <Input
              type="text"
              name="country"
              label="Country"
              placeholder="Country"
              groupClassName="col mt-3"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              autoComplete="off"
            />
            <div class="w-100"></div>
          </form>
        </div>

        <div class="row justify-content-center mt-3 mb-3 ">
          <Button className="px-3" name="Save" onClick={handleSubmit} />
        </div>
        <div class="row justify-content-center mt-3 mb-3">
          <Button className="px-3" name="Exit" />
        </div>
      </div>
    </>
  );
};

export default AddPage;
