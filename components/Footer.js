import React from "react";

import { GlobeAltIcon } from "@heroicons/react/solid";

function Footer(props) {
  return (
    <div className="px-8 md:px-32 pt-14 bg-gray-100 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABAOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Inverstors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessbility</p>
          <p>Support Afghan refugees</p>
          <p>Celebrating diversity & belonging</p>
          <p>Combating discrimination</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOSTING</h5>
          <p>Try hosting</p>
          <p>AirCover: protection for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Safety information</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 Response</p>
          <p>Supporting people with disabilities</p>
          <p>Report a neighborhood concern</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-3 flex flex-col md:flex-row  md:justify-between py-5  space-y-4 md:space-y-0">
        <div className="flex space-x-2 flex-col md:flex-row  md:justify-between">
          <p>© 2021 Airbnb, Inc</p>
          <p>.Privacy</p>
          <p>.Terms</p>
          <p>.Sitemap</p>
        </div>
        <div className="flex space-x-4 flex-col md:flex-row">
          <div className="flex space-x-2">
            <p className="flex space-x-2 items-center">
              <GlobeAltIcon className="h-5" /> English (US)
            </p>
            <p>$ USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
