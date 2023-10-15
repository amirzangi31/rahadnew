import CloseIcon from "@/icons/CloseIcon";
import SearchIcon from "@/icons/SearchIcon";

import React from "react";

const SearchBox = ({ close, search }) => {
  return (
    <div
      className="w-full border flex px-2 rounded-sm border-primary-light h-[48px] shadow-primary
    "
    >
      <input
        type="text"
        className="flex-1 h-full text-gray-light placeholder:text-gray-light outline-none"
        placeholder="جستجوی سریع"
      />
      {search ? (
        <button type="button " >
          <SearchIcon />
        </button>
      ) : (
        <button type="button " onClick={close}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
