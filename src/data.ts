
export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: 'home.svg',
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: 'user.svg',
      },
    ]
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg"
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg"
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg"
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg"
      }
    ]
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg"
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg"
      }
    ]
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg"
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg"
      }
    ]
  }
];



export const topDealUsers = [
  {
    id: 1,
    // img: DealImg,
    username: "user One",
    email: "userOne@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    // img: DealImg,
    username: "user Two",
    email: "userTwo@gmail.com",
    amount: "3.268",
  },
  {
    id: 3,
    // img: DealImg,
    username: "user Three",
    email: "userThree@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    // img: DealImg,
    username: "user Four",
    email: "userFour@gmail.com",
    amount: "2.507"
  },
  {
    id: 5,
    // img: DealImg,
    username: "user Five",
    email: "userFive@gmail.com",
    amount: "2.168",
  },
  {
    id: 6,
    // img: DealImg,
    username: "user Six",
    email: "userSix@gmail.com",
    amount: "1.968",
  },
  {
    id: 7,
    // img: DealImg,
    username: "user Seven",
    email: "userSeven@gmail.com",
    amount: "1.498",
  },
]


export const chartBoxUser = {
  color: "#8884d8",
  icon: "userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 35,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "productIcon.svg",
  title: "Total Products",
  number: "138",
  dataKey: "products",
  percentage: 39,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "revenueIcon.svg",
  title: "Total Revenue",
  number: "$84.237",
  dataKey: "revenue",
  percentage: -11,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "conversionIcon.svg",
  title: "Total Ratio",
  number: "3.6",
  dataKey: "ratio",
  percentage: 10,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
  ]
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
  ]
};