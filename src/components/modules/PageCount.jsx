"use client";

import Link from "next/link";
import React from "react";

const PageCount = ({ count, pageCount , prevLink , nextLink }) => {
  

  return (
    <div className="flex justify-center items-center gap-2">
      <Link
        href={nextLink}
        className={`${pageCount === count ? "btn-next" : "btn-next active"}`}
        
      >
        بعدی
      </Link>
      <button type="button" className="btn-count">
        {count}
      </button>
      <Link
      href={prevLink}
        className={`${count === 1 ? "btn-prev " : "btn-prev active"}`}
        
      >
        قبلی
      </Link>
    </div>
  );
};

export default PageCount;
