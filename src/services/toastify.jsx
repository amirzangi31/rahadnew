import toast from "react-hot-toast";

const toastify = (type, text) => {
  toast.custom(
    (t) => (
      <div
        style={{
          background: type === "error" ? "#C50000" : "#00B977",
          padding: "4px 8px",
          borderRadius: "10px",
          boxShadow: "0px 0px 16px 0px #0000001A",
        }}
        className={`${t.visible ? "animate-enter" : "animate-leave"}  ${
          type === "error" ? "bg-error" : "bg-success"
        } shadow-[box-shadow: 0px 0px 16px 0px #0000001A
      ] rounded-[10px]  px-2 py-1 text-white-main  `}
      >
        <div
          className="text-[14px]"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          {text}{" "}
          {type === "error" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2486 9.75018V13.5002C11.2486 13.9144 11.5844 14.2502 11.9986 14.2502C12.4128 14.2502 12.7486 13.9144 12.7486 13.5002V9.75018C12.7486 9.33597 12.4128 9.00018 11.9986 9.00018C11.5844 9.00018 11.2486 9.33597 11.2486 9.75018Z"
                fill="#FF4747"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0558 3.37446C10.0558 3.37446 10.3549 2.85371 10.8746 2.55232C10.8746 2.55232 11.396 2.25 11.9986 2.25C11.9986 2.25 12.6013 2.25 13.1226 2.55232C13.1226 2.55232 13.644 2.85465 13.9433 3.37772L22.1914 17.6245C22.1914 17.6245 22.4928 18.1464 22.4933 18.7483C22.4933 18.7483 22.4939 19.3501 22.1939 19.8718C22.1939 19.8718 21.8939 20.3935 21.3735 20.6958C21.3735 20.6958 20.8531 20.9981 20.2513 21.0002L3.74862 21.0002C3.74862 21.0002 3.14416 20.9981 2.62376 20.6958C2.62376 20.6958 2.10336 20.3935 1.80337 19.8718C1.80337 19.8718 1.50337 19.3501 1.50391 18.7483C1.50391 18.7483 1.50444 18.1464 1.80536 17.6252L10.0539 3.37771L10.0558 3.37446ZM3.10439 18.3752L11.3538 4.12619L11.3558 4.12286L11.3562 4.12212C11.3562 4.12212 11.4551 3.94968 11.6271 3.84993C11.6271 3.84993 11.7994 3.75 11.9986 3.75C11.9986 3.75 12.1978 3.75 12.3702 3.84993C12.3702 3.84993 12.5425 3.94986 12.6414 4.12276L20.8933 18.376C20.8933 18.376 20.9932 18.549 20.9933 18.7496C20.9933 18.7496 20.9935 18.9502 20.8935 19.1241C20.8935 19.1241 20.7935 19.298 20.6201 19.3988C20.6201 19.3988 20.4466 19.4995 20.246 19.5002L3.74862 19.5002C3.74862 19.5002 3.55066 19.4995 3.37719 19.3988C3.37719 19.3988 3.20372 19.298 3.10373 19.1241C3.10373 19.1241 3.00373 18.9502 3.00391 18.7496C3.00391 18.7496 3.00408 18.549 3.10439 18.3752Z"
                fill="#FF4747"
              />
              <path
                d="M13.1236 16.8752C13.1236 17.4965 12.6199 18.0002 11.9986 18.0002C11.3773 18.0002 10.8736 17.4965 10.8736 16.8752C10.8736 16.2539 11.3773 15.7502 11.9986 15.7502C12.6199 15.7502 13.1236 16.2539 13.1236 16.8752Z"
                fill="#FF4747"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.03061 11.47L5.03033 11.4697C4.88968 11.329 4.69891 11.25 4.5 11.25C4.30109 11.25 4.11032 11.329 3.96967 11.4697C3.82902 11.6103 3.75 11.8011 3.75 12C3.75 12.012 3.75029 12.024 3.75087 12.036C3.75982 12.2223 3.83783 12.3985 3.96967 12.5303L3.96995 12.5306L9.21967 17.7803C9.51256 18.0732 9.98744 18.0732 10.2803 17.7803L20.7803 7.28033C20.921 7.13968 21 6.94891 21 6.75C21 6.55109 20.921 6.36032 20.7803 6.21967C20.6397 6.07902 20.4489 6 20.25 6C20.0511 6 19.8603 6.07902 19.7197 6.21967L9.75 16.1893L5.03061 11.47Z"
                fill="#DBFCF0"
              />
            </svg>
          )}
        </div>
      </div>
    ),
    { duration: 1000 }
  );
};

export { toastify };
