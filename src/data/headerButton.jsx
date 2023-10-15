import AllRooms from "@/icons/headerIcons/AllRooms";
import Down from "@/icons/headerIcons/Down";
import EmptyRoom from "@/icons/headerIcons/EmptyRoom";
import Eshghal from "@/icons/headerIcons/Eshghal";
import Fast from "@/icons/headerIcons/Fast";
import Garanti from "@/icons/headerIcons/Garanti";
import Guest from "@/icons/headerIcons/Guest";
import Message from "@/icons/headerIcons/Message";
import Repire from "@/icons/headerIcons/Repire";
import Trash from "@/icons/headerIcons/Trash";
import Up from "@/icons/headerIcons/Up";
import User from "@/icons/headerIcons/User";

const headerButtons = [
    {
        name : "پیامرسان",
        color : "#7AE03B",
        count : "06",
        icon : <Message /> 
    },
    {
        name : "گارانتی",
        color : "#FF76E1",
        count : "12",
        icon :  <Garanti />
    },
    {
        name : "خروجی امروز",
        color : "#C00527BF",
        count : "20",
        icon :  <Up />
    },
    {
        name : "ورودی امروز",
        color : "#8606948C",
        count : "45",
        icon :  <Down />
    },
    {
        name : "در دست تعمیر",
        color : "#9A9A9A",
        count : "01",
        icon :  <Repire />
    },
    {
        name : "نظافت نشده",
        color : "#FF9800CC",
        count : "03",
        icon :  <Trash />
    },
    {
        name : "اتاق اشغال ",
        color : "#FF4062CC",
        count : "10",
        icon :  <Eshghal />
    },
    {
        name : "اشغال موقت",
        color : "#0E3EE8CC",
        count : "00",
        icon :  <User />
    },
    {
        name : "اتاق خالی",
        color : "#24B54F",
        count : "40",
        icon :  <EmptyRoom />
    },
    {
        name : "مهمان حاضر",
        color : "#52C8FD",
        count : "12",
        icon :  <Guest />
    },
    {
        name : "کل اتاق ها",
        color : "#004765E5",
        count : "50",
        icon :  <AllRooms />
    },
    {
        name : "رزرو سریع",
        color : "#35C399",
        count : "01",
        icon :  <Fast />
    },
 
];

export default headerButtons;























