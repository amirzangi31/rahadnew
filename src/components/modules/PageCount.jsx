"use client";

import React from "react";

const PageCount = ({ count, pageCount }) => {
  

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        type="button"
        className={`${pageCount === count ? "btn-next" : "btn-next active"}`}
        
      >
        بعدی
      </button>
      <button type="button" className="btn-count">
        {count}
      </button>
      <button
        type="button"
        className={`${count === 1 ? "btn-prev " : "btn-prev active"}`}
        
      >
        قبلی
      </button>
    </div>
  );
};

export default PageCount;
