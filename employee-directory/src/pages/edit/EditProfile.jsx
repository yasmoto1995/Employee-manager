import React from "react";
import "./editPage.css";
import Heading from "../../components/editPageComponents/Heading";
import Input from "../../components/editPageComponents/Input";
import Button from "../../components/editPageComponents/Button";
import Navbar from "../../components/editPageComponents/Navbar";

const EditProfile = () => {
  return (
    <>
      <Navbar></Navbar>
      <div class="container">
        <Heading title="Edit Profile" className="text-start mx-5 mt-5" />
        <div class="text-center m-3 profile">
          <img
            class="profile-img"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div
            type="button"
            class="edit-profile-img align-middle text-center my-auto"
          >
            ✒️
          </div>
        </div>
        <div class="mx-5">
          <form class="row" action="POST">
            <Input
              type="text"
              name="fname"
              label="First Name"
              placeholder="First Name"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="lname"
              label="Last Name"
              placeholder="Last Name"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div class="w-100"></div>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Email Address"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="number"
              label="Contact Number"
              placeholder="Contact Number"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="address"
              label="Address"
              placeholder="Address"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="Department"
              label="Department"
              placeholder="Department"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="Role"
              label="Role"
              placeholder="Role"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="city"
              label="City"
              placeholder="City"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <Input
              type="text"
              name="state"
              label="State"
              placeholder="State"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="pin"
              label="Zip code"
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
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
            <div class="w-100"></div>
            <Input
              type="text"
              name="password"
              label="Password"
              placeholder="Password"
              groupClassName="col mt-3"
              labelClassName="ms-3 mb-3"
              inputClassName="rounded border-0 shadow-sm"
            />
          </form>
        </div>
        <div class="row justify-content-center mt-3 mb-5">
          <Button className="px-3" name="Save" />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
