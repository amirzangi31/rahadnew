import Back from "@/icons/iconsSidebar/Back"
import Esterdad from "@/icons/iconsSidebar/Esterdad"
import Front from "@/icons/iconsSidebar/Front"
import Kahdamat from "@/icons/iconsSidebar/Kahdamat"
import Online from "@/icons/iconsSidebar/Online"
import Poshtiban from "@/icons/iconsSidebar/Poshtiban"
import Search from "@/icons/iconsSidebar/Search"
import Settings from "@/icons/iconsSidebar/Settings"

const sidebarData = [
    {
        name : "فرانت آفیس",
        link : "/",
        drop : true,
        children : [
            {
                name : "فرانت آفیس",
                link : "/",
                drop : false
            }
        ],
        icon : <Front /> ,
        active : false
    },
    {
        name : "بک آفیس",
        link : "/",
        drop : true,
        children : [
            {
                name : "",
                link : "",
                drop : false
            }
        ],
        icon : <Back />,
        active : false
    },
    {
        name : "خدمات جانبی",
        link : "/",
        drop : true,
        children : [
            {
                name : "",
                link : "",
                drop : false
            }
        ],
        icon : <Kahdamat />,
        active : false
    },
    {
        name : "تنظیمات",
        link : "/",
        drop : true,
        children : [
            {
                name : "اقامتگاه",
                link : "",
                drop : true,
                children : [
                    {
                        name : "تعریف اقامتگاه",
                        link : "/admin/settings/createresidency",
                        drop : false
                    },
                    {
                        name : "امکانات اقامتگاه",
                        link : "/admin/settings/createresidency",
                        drop : false
                    },
                ]
            },
            {
                name : "اتاق",
                link : "",
                drop : true,
                children : [
                    {
                        name : "تعریف اتاق",
                        link : "/settings/createresidency",
                        drop : false
                    },
                    {
                        name : "امکانات اتاق",
                        link : "/settings/createresidency",
                        drop : false
                    },
                ]
            },
            {
                name : "قیمت گذاری",
                link : "",
                drop : true,
                children : [
                    {
                        name : "تعریف قیمت",
                        link : "/settings/createresidency",
                        drop : false
                    },
                    {
                        name : "تعریف قیمت مهمان خارجی ",
                        link : "/settings/createresidency",
                        drop : false
                    },
                    {
                        name : "تعریف قیمت  خدمات و خدمات ",
                        link : "/settings/createresidency",
                        drop : false
                    },
                ]
            },
            {
                name : "کاربر",
                link : "",
                drop : true,
                children : [
                    {
                        name : "تعریف کاربر",
                        link : "/settings/createresidency",
                        drop : false
                    },
                    {
                        name : "سطح دسترسی",
                        link : "/settings/createresidency",
                        drop : false
                    },
                    {
                        name : "آژانس ها و سازمان های قراردادی",
                        link : "/settings/createresidency",
                        drop : false
                    },
                ]
            },
           
            {
                name : "گارانتی",
                link : "/settings/garanti",
                drop : false
            },
            {
                name : "تعریف واچر",
                link : "/settings/garanti",
                drop : false
            },
            {
                name : "تعریف پیامک",
                link : "/settings/garanti",
                drop : false
            },
            {
                name : "لوکیشن هتل ",
                link : "/settings/garanti",
                drop : false
            },
            {
                name : "قوانین و مقررات",
                link : "/settings/garanti",
                drop : false
            },
            {
                name : "هتل های زنجیره ای",
                link : "/settings/garanti",
                drop : false
            },
            {
                name : "تغییر زبان",
                link : "",
                drop : true,
                children : [
                    {
                        name : "تعریف اقامتگاه",
                        link : "/",
                        drop : false
                    },
                    {
                        name : "امکانات اقامتگاه",
                        link : "/settings/createresidency",
                        drop : false
                    },
                ]
            },
        ],
        icon : <Settings />,
        active : false
    },
    {
        name : "پشتیبان گیری",
        link : "/",
        drop : true,
        children : [
            {
                name : "",
                link : "",
                drop : false
            }
        ],
        icon : <Poshtiban />,
        active : false
    },
    {
        name : "پشتیبانی آنلاین",
        link : "/",
        drop : true,
        children : [
            {
                name : "",
                link : "",
                drop : false
            }
        ],
        icon : <Online />,
        active : false
    },
    
    {
        name : "جستجوی پیشرفته ",
        link : "/",
        icon : <Search /> ,
        drop : false,
        active : false
    },
    {
        name : "استرداد",
        link : "/",
        icon : <Esterdad /> ,
        drop : false,
        active : false
    }
]


export default sidebarData



 



