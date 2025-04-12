// MobileStickyBar.tsx
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const MobileStickyBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary text-white py-3 shadow-lg z-50">
      <div className="flex justify-around items-center">
        {/* Phone Icon */}
        <a href="tel:800-9944-335" className="flex flex-col items-center">
          <FaPhone className="text-3xl mb-1" />
          <span className="text-xs">Call</span>
        </a>

        {/* Email Icon */}
        <a href="mailto:info@irevive.com" className="flex flex-col items-center">
          <FaEnvelope className="text-3xl mb-1" />
          <span className="text-xs">Email</span>
        </a>

        {/* Location Icon */}
        <a
          href="https://www.google.com/maps/dir//6th+floor,+Mawin,+Zamzam+plaza,+opposite+prince+hotel,+Royal+Colony,+Mehdipatnam,+Hyderabad,+Telangana+500028/@17.3945207,78.3601676,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb976d96d34fb7:0x394d9183d27de3a4!2m2!1d78.4425694!2d17.3945376?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <FaMapMarkerAlt className="text-3xl mb-1" />
          <span className="text-xs">Location</span>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
