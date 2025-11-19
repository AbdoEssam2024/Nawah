export const navItems = [
    {
        id: 1,
        text: "نظرة عامة على المكان",
        path: "/overview"
    },
    {
        id: 2,
        text: "الأخبار",
        path: "/news"
    },
    {
        id: 3,
        text: "تخصصات",
        path: "/specialities"
    },
    {
        id: 4,
        text: "اعثر على تخصصك",
        path: "/find-speciality"
    },
    {
        id: 5,
        text: "الدعم",
        path: "/support"
    }
]

export const languageData = [
    { text: "العربية", click: () => console.log("arabic") },
    { text: "الإنجليزية", click: () => console.log("english") }
]

export const accountData = [
    { text: "تسجيل الدخول", click: () => console.log("login") },
    { text: "انشاء حساب", click: () => console.log("register") }
]

export const socialData = [
    { text: "فيسبوك", click: () => console.log("facebook") },
    { text: "تيليجرام", click: () => console.log("telegram") }
]
