import React from "react";

const CopyRight = () => {
  return (
    <div>
      <hr
        style={{
          border: "none",
          height: "1px",
          backgroundColor: "white",
          opacity: "0.1",
          margin: "20px 20px",
        }}
      />

      <div className="text-center text-mine-shaft-100 pb-6 pt-6">
        Designed & Developed By{" "}
        <a href="https://github.com/makwanaavi" className="text-bright-sun-400">
          Avi Makwana
        </a>
      </div>
    </div>
  );
};

export default CopyRight;
