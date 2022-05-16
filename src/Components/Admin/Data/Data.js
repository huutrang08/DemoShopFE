import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilChart,
    UilPackage,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
} from "@iconscout/react-unicons"

export const SideBarData = [
    {
        icon:UilEstate,
        heading:"Dasboard"
    },{
        icon:UilClipboardAlt,
        heading:"Oders"
    },{
        icon:UilChart,
        heading:"Analytics"
    },{
        icon:UilUsersAlt,
        heading:"Customer"
    },{
        icon:UilPackage,
        heading:"Products"
    }
]

export const CardsData = [
    {
        title: "Sales",
        color:{
            backGround:"linear-gradient(180deg,#BB67FF 0%,#C484F3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barvalue:70,
        value:"25,970",
        png: UilUsdSquare,
        serie: [
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100]
            },
        ]
    },{
        title: "Revenue",
        color:{
            backGround:"linear-gradient(180deg,#FF919D 0%,#fca61f 100%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7",
        },
        barvalue:80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        serie: [
            {
                name:"Revenue",
                data:[10,100,50,70,80,30,40],
            },
        ]
    },{
        title: "Expenses",
        color:{
            backGround:"linear-gradient(180deg,#FF719D 0%,#FF282D 100%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7",
        },
        barvalue:60,
        value: "4,270",
        png: UilClipboardAlt,
        serie: [
            {
                name:"Expenses",
                data:[10,25,15,30,12,15,20],
            },
        ]
    }
]