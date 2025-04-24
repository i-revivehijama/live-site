// MobileStickyBar.tsx
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const MobileStickyBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary text-white py-3 shadow-lg z-50">
      <div className="flex justify-around items-center">
        {/* Phone Icon */}
        <a
          href="tel:800-9944-335"
          className="flex flex-col items-center"
          aria-label="Call 800-9944-335"
          title="Call 800-9944-335"
        >
          <FaPhone className="text-3xl mb-1" />
          <span className="text-xs">Call</span>
        </a>

        {/* Email Icon */}
        <a
          href="mailto:info@irevive.com"
          className="flex flex-col items-center"
          aria-label="Email info@irevive.com"
          title="Email info@irevive.com"
        >
          <FaEnvelope className="text-3xl mb-1" />
          <span className="text-xs">Email</span>
        </a>

        {/* Location Icon */}
        <a
          href="https://www.google.com/maps/dir//6th+floor,+Mawin,+Zamzam+plaza,+opposite+prince+hotel,+Royal+Colony,+Mehdipatnam,+Hyderabad,+Telangana+500028"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
          aria-label="View Location on Google Maps"
          title="View Location on Google Maps"
        >
          <FaMapMarkerAlt className="text-3xl mb-1" />
          <span className="text-xs">Location</span>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
