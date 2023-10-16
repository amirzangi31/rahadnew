import React from "react";

const FeatureResidency = ({ id, name }) => {
  return (
    <label htmlFor={id} className="add-feature-check">
      <p className="text-primary-main leading-6">{name}</p>
      <input type="checkbox"  name={id}  id={id} hidden />
      <span className="w-5 h-5 rounded-[2px] border-[2px] border-primary-main flex justify-center items-center">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0848 0.258252C10.7548 -0.0861925 10.2189 -0.0859754 9.88842 0.258252L4.50374 5.87088L2.11048 3.37643C1.78002 3.03198 1.24433 3.03198 0.913867 3.37643C0.583399 3.72087 0.583399 4.27921 0.913867 4.62365L3.90531 7.74161C4.07044 7.91373 4.28697 8 4.50351 8C4.72006 8 4.9368 7.91394 5.10193 7.74161L11.0848 1.50546C11.4153 1.16125 11.4153 0.602675 11.0848 0.258252Z"
            fill="#2393B0"
          />
        </svg>
      </span>
    </label>
  );
};

export default FeatureResidency;
