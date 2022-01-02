import React, { useState } from "react";
import "./editPage.css";
import Heading from "../../components/editPageComponents/Heading";
import Input from "../../components/editPageComponents/Input";
import Navbar from "../../components/editPageComponents/Navbar";
import Button from "../../components/editPageComponents/Button";
import { useLocation } from "react-router-dom";
import { EmployeeSuccessful, EmployeeError } from "../../components/univComponents/Toast";

let data = "";

const EditProfile = () => {
  const location = useLocation();

  if (location.state) {
    data = location.state;
  }

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const [contact, setContact] = useState(data.contact);
  const [address, setAddress] = useState(data.address);
  const [dept, setDepartment] = useState(data.dept);
  const [role, setRole] = useState(data.role);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [zip, setZip] = useState(data.zip);
  const [country, setCountry] = useState(data.country);

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = { 
        id: data._id,
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
        country: country
    }

    fetch('http://localhost:7000/editRecord', {
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(employee),
    })
    .then(response => {
      if (response.status === 200) {
        setFirstName('')
        setLastName('')
        setEmail('')
        setContact('')
        setAddress('')
        setDepartment('')
        setRole('')
        setCity('')
        setState('')
        setZip('')
        setCountry('')

        EmployeeSuccessful();
      }
    })
    .catch(error => {
        EmployeeError();
        console.error('There has been a problem with fetch operation:', error);
    });
}

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Heading title="Edit Profile" className="text-start mx-5 mt-5" />
        <div className="text-center m-3 profile">
          <img
            className="profile-img"
            src={data.src ?? "https://www.w3schools.com/howto/img_avatar.png"}
            alt=""
          />
          <div
            type="button"
            className="edit-profile-img align-middle text-center my-auto"
          >
            ✒️
          </div>
        </div>
        <div className="mx-5">
          <form className="row" action="POST">
            <Input
              type="text"
              name="fname"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="lname"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
            <Input
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email Address"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
            <Input
              type="text"
              name="number"
              label="Contact Number"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
            <Input
              type="text"
              name="address"
              label="Address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
            <Input
              type="text"
              name="Department"
              label="Department"
              placeholder="Department"
              value={dept}
              onChange={(e) => setDepartment(e.target.value)}
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="Role"
              label="Role"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
            <Input
              type="text"
              name="city"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="state"
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
            <Input
              type="text"
              name="pin"
              label="Zip code"
              value={zip}
              onChange={(e) => setZip(e.target.value)} 
              placeholder="Zip code"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="country"
              label="Country"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
          </form>
        </div>
        <div className="row justify-content-center mt-3 mb-5">
          <Button className="px-3" name="Save" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
