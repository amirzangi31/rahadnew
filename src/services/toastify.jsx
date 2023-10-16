import toast from "react-hot-toast";

const toastify = (type, text) => {
  toast.custom(
    (t) => (
      <div
        style={{
          background: type === "error" ? "#FB2047" : "#23B05B",
          padding: "4px 8px",
          borderRadius: "10px",
          boxShadow: "0px 0px 16px 0px #0000001A",
        }}
        className={`${t.visible ? "animate-enter" : "animate-leave"}  ${
          type === "error" ? "bg-error" : "bg-success"
        } shadow-[box-shadow: 0px 0px 16px 0px #0000001A
      ] rounded-[10px]  px-2 py-1 text-white-main `}
      >
        <div className="text-[14px]">{text}</div>
      </div>
    ),
    { duration: 1000 }
  );
};

export { toastify };
