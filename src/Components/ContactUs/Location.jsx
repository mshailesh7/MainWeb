import React from "react";

function Location() {
  return (
    <div className="w-96 h-96 border-2 flex">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30145.586891423478!2d74.82904487003849!3d12.919820137892374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C Karnataka!5e0!3m2!1sen!2sin!4v1713510525807!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        className="mx-auto my-auto h-full w-full shadow-[25px_35px_0px_0px_rgba(0,0,0,0.1)]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
