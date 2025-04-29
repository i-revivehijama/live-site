// MobileStickyBar.tsx
import React from "react";
import { MdPhone } from "react-icons/md";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const MobileStickyBar: React.FC = () => {
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary text-white py-3 shadow-lg z-50"
      role="navigation"
      aria-label="Mobile Contact Bar"
    >
      <div className="flex justify-around items-center">
        {/* Phone */}
        <a
          href="tel:800-9944-335"
          className="flex flex-col items-center"
          aria-label="Call us at 800-9944-335"
          title="Call us"
        >
          <MdPhone  className="text-3xl mb-1" aria-hidden="true" />
          <span className="text-xs">Call</span>
        </a>

        {/* Email */}
        <a
          href="mailto:info@irevive.com"
          className="flex flex-col items-center"
          aria-label="Send email to info@irevive.com"
          title="Email us"
        >
          <FaEnvelope className="text-3xl mb-1" aria-hidden="true" />
          <span className="text-xs">Email</span>
        </a>

        {/* Location */}
        <a
          href="https://www.google.com/maps/dir//6th+floor,+Mawin,+Zamzam+plaza,+opposite+prince+hotel,+Royal+Colony,+Mehdipatnam,+Hyderabad,+Telangana+500028"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
          aria-label="Open our location in Google Maps (opens in new tab)"
          title="View Location on Google Maps"
        >
          <FaMapMarkerAlt className="text-3xl mb-1" aria-hidden="true" />
          <span className="text-xs">Location</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileStickyBar;
