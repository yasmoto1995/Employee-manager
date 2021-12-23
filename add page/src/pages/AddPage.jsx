import React from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";

const AddPage = () => {
    return (
        <>
            <div class="container">
                <Heading title="Add Employee" className="text-start mx-5 mt-5"/>
                <div class="text-left m-3 profile">
                    <img class="profile-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div type="button" class="addpage-img align-middle text-center">✒️</div>
                </div>
                <div class="mx-5">
                    <form class="row" action="POST">
                        <Input type="text" name="fname" label="First Name" placeholder="First Name" groupClassName="col mt-3"  />
                        <Input type="text" name="lname" label="Last Name" placeholder="Last Name" groupClassName="col mt-3"  />
                        <div class="w-100"></div>
                        <Input type="email" name="email" label="Email" placeholder="Email Address" groupClassName="col mt-3"  />
                        <div class="w-100"></div>
                        <Input type="text" name="number" label="Contact Number" placeholder="Contact Number" groupClassName="col mt-3"  />
                        <div class="w-100"></div>
                        <Input type="text" name="address" label="Address" placeholder="Address" groupClassName="col mt-3"   />
                        <div class="w-100"></div>
                        <Input type="text" name="Department" label="Department" placeholder="Department" groupClassName="col mt-3"  />
                        <Input type="text" name="Role" label="Role" placeholder="Role" groupClassName="col mt-3"   />
                        <div class="w-100"></div>
                        <Input type="text" name="city" label="City" placeholder="City" groupClassName="col mt-3"  />
                        <Input type="text" name="state" label="State" placeholder="State" groupClassName="col mt-3"   />
                        <div class="w-100"></div>
                        <Input type="text" name="pin" label="Zip code" placeholder="Zip code" groupClassName="col mt-3"   />
                        <Input type="text" name="country" label="Country" placeholder="Country" groupClassName="col mt-3"   />
                        <div class="w-100"></div>
                        <Input type="text" name="password" label="Password" placeholder="Password" groupClassName="col mt-3"  />
                    </form>
                </div>
                
                <div class="row justify-content-center mt-3 mb-3 ">
                    <Button className="px-3" name="Save" />   
                </div>
                <div class="row justify-content-center mt-3 mb-3">
                <Button className="px-3" name="Exit" />
                </div>
            </div>
        </>
    )
}

export default AddPage;
