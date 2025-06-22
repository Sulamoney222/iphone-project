import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Store", "Mac", "iPhone", "Support"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];


  export const cartItems = [
    {
      id:1,
      title: 'iPhone 16 pro max',
      price:342.66,
      img: yellowImg,
      amount:1
    },
    {
      id:2,
      title: 'iPhone 15 pro max',
      price:233.45,
      img: blueImg,
      amount:1,
    },
    {
      id:3,
      title: 'iPhone 11',
      price:133.76,
      img: whiteImg,
      amount:1
    },
    {
      id:4,
      title: 'iPhone 13 pro max',
      price:287.22,
      img: blackImg,
      amount:1
    },
    {
      id:5,
    title: 'iPhone 14 mini',
    price:322.45,
    img: 'https://tse3.mm.bing.net/th?id=OIP.e4uvP5s08vkU2unnp2DChAHaJz&pid=Api&P=0&h=180',
    amount:1
  },
  {
    id:6,
  title: 'iPhone 11 pro',
  price:245.22,
  img: 'https://tse2.mm.bing.net/th?id=OIP.HqB9mbNKQFtb0RFT6V9ofgHaJz&pid=Api&P=0&h=180',
  amount:1
},
{
  id:7,
title: 'iPhone 12 pro',
price:301.22,
img: 'https://tse3.mm.bing.net/th?id=OIP.atUbRIOIuXZ0h_oRDtPTSwHaHa&pid=Api&P=0&h=180',
amount:1
},

{
  id:8,
title: 'iPhone 15 mini',
price:301.22,
img: 'https://tse3.mm.bing.net/th?id=OIP.3UonIZqabW0Ea4EQyIodGAHaHa&pid=Api&P=0&h=180',
amount:1
},

  ]

  import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

  export const choose = [
    {
      // icon: icon1,
      head: 'Fast & Free Shipping',
      write: 'Enjoy lightning-fast delivery at no extra cost. We make sure your orders reach you quickly and reliably.'
    },
    {
      // icon: icon2,
      head: 'Easy to Shop',
      write: 'Our user-friendly platform makes shopping a breeze. Find what you need, when you need it—hassle-free.'
    },
    {
      // icon: icon3,
      head: '24/7 Support',
      write: 'We’re here for you anytime, day or night. Our support team is always ready to help with any questions or issues.'
    },
    {
      // icon: icon4,
      head: 'Hassle-Free Returns',
      write: 'Changed your mind? No worries! Our simple return policy makes it easy to send items back with confidence.'
    },
    {
      // icon: icon5,
      head: 'Top Sales',
      write: 'Don’t miss out on unbeatable deals and exclusive offers. Shop the best products at the best prices.'
    },
    {
      // icon: icon6,
      head: 'Great Shopping Experience',
      write: 'From selection to checkout, we provide a seamless and enjoyable shopping journey tailored to your needs.'
    }
  ];
  
  export const questions = [
    {
      id: 1,
      title: 'What is the best type of phone you need?',
      ans: 'The best phone for you depends on your needs. If you prefer photography, the iPhone Pro or Google Pixel series are excellent. For performance and gaming, the latest Samsung Galaxy S series or OnePlus models are top picks. Always consider battery life, camera quality, and your daily use habits.'
    },
    {
      id: 2,
      title: 'Should I buy an iPhone or an Android phone?',
      ans: 'Both have their strengths. iPhones offer seamless integration with Apple’s ecosystem, great build quality, and long software support. Android phones offer more variety, customization, and flexibility. If you value simplicity and updates, go iPhone. For choice and freedom, go Android.'
    },
    {
      id: 3,
      title: 'How do I choose the right phone for my budget?',
      ans: 'Start by listing your top priorities: camera, battery, gaming, or social media. For budget options, consider brands like Xiaomi, Motorola, or Samsung’s A-series. Mid-range users should explore Google Pixel 7a or OnePlus Nord. Always check for reviews and compare features within your price range.'
    },
    {
      id: 4,
      title: 'How often should I upgrade my phone?',
      ans: 'Most users upgrade every 2–3 years. However, if your phone still performs well, holds a charge, and runs updated apps, there’s no need to rush. Upgrading makes sense when performance drops significantly or you miss out on key new features and security updates.'
    }
  ];
  