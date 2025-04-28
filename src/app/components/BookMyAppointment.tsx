import React from "react";

const BookMyAppointment = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden my-14">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gray-200 opacity-50" />

      {/* Content Layer */}
      <div className="relative z-10 flex justify-center items-center min-h-screen w-full">
        <div className="w-full max-w-screen-xl">
          <iframe
            title="Embedded Content"
            className="w-full min-h-screen border-none overflow-hidden"
            src="https://meet-my-doctor.firebaseapp.com/#/app?eid=42459"
            style={{
                overflow: "hidden",
                border: "none",
                height: "100vh",
                width: "100%",
              }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookMyAppointment;
