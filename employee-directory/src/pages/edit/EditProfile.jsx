import React from "react";
import "./editPage.css";
import Heading from "../../components/editPageComponents/Heading";
import Input from "../../components/editPageComponents/Input";
import Button from "../../components/editPageComponents/Button";
import Navbar from "../../components/editPageComponents/Navbar";
import { useLocation } from "react-router-dom";

const EditProfile = () => {
  const location = useLocation();

  let data = "";

  if (location.state) {
    data = location.state;
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
              defaultValue={data.firstName}
              placeholder="FirstName"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="lname"
              label="Last Name"
              defaultValue={data.lastName}
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
              defaultValue={data.email}
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
              defaultValue={data.contact}
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
              defaultValue={data.address}
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
              defaultValue={data.dept}
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="Role"
              label="Role"
              placeholder="Role"
              defaultValue={data.role}
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
            <Input
              type="text"
              name="city"
              label="City"
              defaultValue={data.city}
              placeholder="City"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="state"
              label="State"
              defaultValue={data.state}
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
              defaultValue={data.zip}
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
              defaultValue={data.country}
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div className="w-100"></div>
            <Input
              type="text"
              name="password"
              label="Password"
              placeholder="Password"
              defaultValue={data.pass}
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
          </form>
        </div>
        <div className="row justify-content-center mt-3 mb-5">
          <Button className="px-3" name="Save" />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
