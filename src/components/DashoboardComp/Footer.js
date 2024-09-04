import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <div className="md:flex space-x-10 md:ml-10 text-white pt-3 bg-black px-2 text-sm">
        <div className="flex md:w-1/6">
          <div className="">
            <p className="font-bold">Company</p>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Record</p>
          </div>
          <div className="">
            <p className="font-bold">Communities</p>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Advertising</p>
            <p>investors</p>
            <p>Vendors</p>
          </div>
          <div className="">
            <p className="font-bold">Useful links</p>
            <p>Support</p>
            <p>Free Mobile App</p>
          </div>
          <div className="">
            <p className="font-bold">Spotify Plans</p>
            <p>Premium Individual</p>
            <p>Premium Duo</p>
            <p>Premium Family</p>
            <p>Premium Student</p>
            <p>Spotify Free</p>
          </div>
        </div>
        <div className="flex w-1/6">
          <div>
            <Icon name="instagram" size="large" />
          </div>
          <div>
            <Icon name="twitter" size="large" />
          </div>
          <div>
            <Icon name="facebook" size="large" />
          </div>
        </div>
      </div>
      <div className="border-t-1 text-white m-6">
        <p>2024 Spotify AB</p>
      </div>
    </>
  );
};

export default Footer;
