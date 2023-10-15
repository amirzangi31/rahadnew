
import Link from "next/link";
import React from "react";

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex justify-start items-center gap-1 flex-wrap">
      {data.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={`text-primary-light ${index === 0 ? "text-2xl font-bold" : "text-lg"}
        flex justify-between items-center gap-3
          
          
          `}
        >
          {item.name}
          {index !== data.length-1 && (
            <div>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.67194 0.327574C6.3465 0.00213686 5.81886 0.00213686 5.49343 0.327574L0.910094 4.91091C0.584657 5.23634 0.584657 5.76398 0.910094 6.08942L5.49343 10.6728C5.81886 10.9982 6.3465 10.9982 6.67194 10.6728C6.99737 10.3473 6.99737 9.81968 6.67194 9.49424L2.67786 5.50016L6.67194 1.50609C6.99737 1.18065 6.99737 0.653011 6.67194 0.327574Z"
                  fill="#A6ACC4"
                />
              </svg>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default BreadCrumbs;
