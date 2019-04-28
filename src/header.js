import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 className="p-3 mb-2 bg-dark text-white">
            {" "}
            <i class="far fa-clock" /> React Clock
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
