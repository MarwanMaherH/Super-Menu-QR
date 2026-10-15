/* ==========================================================
   SUPER MENU — script.js (app logic)
   البيانات بتتحمّل فوراً من البيانات المدمجة (Default Data)
   مع مزامنة Firebase في الخلفية لو متاح
   ========================================================== */

import { db } from "./firebase-config.js";
import { CLOUDINARY } from "./cloudinary-config.js";
import { collection, getDocs, doc, getDoc }
  from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

function cldFetch(url, width) {
  if (!url) return url;
  if (url.includes("res.cloudinary.com")) return url;
  if (!CLOUDINARY.cloudName || CLOUDINARY.cloudName.startsWith("PASTE")) return url;
  return `https://res.cloudinary.com/${CLOUDINARY.cloudName}/image/fetch/f_auto,q_auto,w_${width}/${encodeURIComponent(url)}`;
}

/* ---------------------------------------------------------
   DEFAULT DATA — نسخة احتياطية حقيقية من للمنيو، بتظهر فوراً
   من غير ما ننتظر Firebase. فاضية دلوقتي، وبتتملى لما تدوس
   "تصدير نسخة فورية" من تاب الإعدادات في لوحة الأدمن.
   مهم: دي لازم تكون داتا حقيقية من مطعمك، مش أمثلة.
   طول ما هي فاضية، الموقع بيعرض هيكل تحميل بسيط وبعدين
   المنيو الحقيقي من Firebase (فرق أقل من ثانية عادةً)
   بدل ما يعرض أكل مش بتاعك.
--------------------------------------------------------- */
const DEFAULT_CATEGORIES = [
  {
    "en": "Salads",
    "order": 0,
    "color": "#4C7A3F",
    "thumb": "https://i.pinimg.com/1200x/f0/ed/1c/f0ed1c0148d42cadae9e7b0d2f0e69eb.jpg",
    "number": 1,
    "ar": "السلطات",
    "id": "salads",
    "banner": "https://i.pinimg.com/1200x/f0/ed/1c/f0ed1c0148d42cadae9e7b0d2f0e69eb.jpg",
    "icon": "freshsalad,salad"
  },
  {
    "number": 2,
    "icon": "breakfast,brunch",
    "ar": "الفطار",
    "id": "breakfast",
    "thumb": "https://res.cloudinary.com/jma6zkkh/image/upload/f_auto,q_auto,w_240/v1790081971/ecdo9loori7j5plfzame.jpg",
    "color": "#b9812e",
    "order": 1,
    "banner": "https://res.cloudinary.com/jma6zkkh/image/upload/f_auto,q_auto,w_1000/v1790081971/ecdo9loori7j5plfzame.jpg",
    "en": "Breakfast"
  },
  {
    "order": 2,
    "number": 3,
    "banner": "https://i.pinimg.com/1200x/35/7d/6d/357d6dbb6eb472d2f0d56acacb796100.jpg",
    "thumb": "https://i.pinimg.com/1200x/35/7d/6d/357d6dbb6eb472d2f0d56acacb796100.jpg",
    "id": "appetizers",
    "ar": "المقبلات",
    "color": "#C9582F",
    "icon": "friedfood,appetizer",
    "en": "Appetizers",
    "hello": ""
  },
  {
    "en": "Sandwiches",
    "banner": "https://i.pinimg.com/1200x/47/45/14/47451472391070aff9cb3046098120b5.jpg",
    "number": 4,
    "order": 3,
    "ar": "الساندوتشات",
    "id": "sandwiches",
    "color": "#A9701F",
    "thumb": "https://i.pinimg.com/1200x/47/45/14/47451472391070aff9cb3046098120b5.jpg",
    "icon": "sandwich,deli"
  },
  {
    "order": 4,
    "en": "Burger",
    "color": "#7A3B24",
    "thumb": "https://i.pinimg.com/736x/e9/38/bd/e938bd74c64239e7affd237afc173ae5.jpg",
    "number": 5,
    "banner": "https://i.pinimg.com/736x/e9/38/bd/e938bd74c64239e7affd237afc173ae5.jpg",
    "icon": "smashburger,burger",
    "ar": "برجر",
    "id": "burgers"
  },
  {
    "en": "Soup",
    "order": 5,
    "color": "#8A5A32",
    "thumb": "https://i.pinimg.com/1200x/10/ed/a9/10eda934d9be5b17a0e31400db134ab4.jpg",
    "number": 6,
    "id": "soup",
    "ar": "الشوربة",
    "banner": "https://i.pinimg.com/1200x/10/ed/a9/10eda934d9be5b17a0e31400db134ab4.jpg",
    "icon": "soup,bowlfood"
  },
  {
    "banner": "https://i.pinimg.com/736x/a2/e1/1d/a2e11d22b223371bd5f999f5aaa6e9af.jpg",
    "number": 7,
    "icon": "waffle,belgianwaffle",
    "id": "waffles",
    "ar": "وافل",
    "color": "#B5732E",
    "thumb": "https://i.pinimg.com/736x/a2/e1/1d/a2e11d22b223371bd5f999f5aaa6e9af.jpg",
    "en": "Waffles",
    "order": 6
  },
  {
    "number": 8,
    "icon": "pancakes,stackofpancakes",
    "thumb": "https://i.pinimg.com/736x/a2/c4/8b/a2c48b432e93c8b44cdbe2e448aee2b2.jpg",
    "color": "#C9A24B",
    "banner": "https://i.pinimg.com/736x/a2/c4/8b/a2c48b432e93c8b44cdbe2e448aee2b2.jpg",
    "order": 7,
    "ar": "بان كيك",
    "id": "pancakes",
    "en": "Pancakes"
  },
  {
    "en": "Crepes",
    "icon": "crepe,nutellacrepe",
    "thumb": "https://i.pinimg.com/1200x/e4/6f/b0/e46fb0cd654a3b87bb2d9c4844d4283d.jpg",
    "banner": "https://i.pinimg.com/1200x/e4/6f/b0/e46fb0cd654a3b87bb2d9c4844d4283d.jpg",
    "color": "#9C5A3C",
    "number": 9,
    "ar": "كريب",
    "id": "crepes",
    "order": 8
  },
  {
    "banner": "https://i.pinimg.com/736x/1e/6a/6e/1e6a6eb99d1fa00b687e21569e4f0c1d.jpg",
    "icon": "pizza,pizzaslice",
    "number": 10,
    "en": "Pizza",
    "thumb": "https://i.pinimg.com/736x/1e/6a/6e/1e6a6eb99d1fa00b687e21569e4f0c1d.jpg",
    "id": "pizza",
    "ar": "بيتزا",
    "color": "#B23A2A",
    "order": 9
  },
  {
    "ar": "باستا",
    "id": "pasta",
    "order": 10,
    "thumb": "https://i.pinimg.com/1200x/46/ce/c2/46cec29837abe9a5bf8c3680cf6c5d09.jpg",
    "color": "#A6432B",
    "icon": "pasta,italianfood",
    "number": 11,
    "banner": "https://i.pinimg.com/1200x/46/ce/c2/46cec29837abe9a5bf8c3680cf6c5d09.jpg",
    "en": "Pasta"
  },
  {
    "ar": "الوجبات",
    "id": "meals",
    "order": 11,
    "thumb": "https://i.pinimg.com/1200x/b9/77/b2/b977b26d57aeb67ce38e2acac8599209.jpg",
    "color": "#8A3A28",
    "icon": "grilledchicken,platedmeal",
    "number": 12,
    "banner": "https://i.pinimg.com/1200x/b9/77/b2/b977b26d57aeb67ce38e2acac8599209.jpg",
    "en": "Meals"
  },
  {
    "ar": "وجبات الأطفال",
    "id": "kids",
    "order": 12,
    "thumb": "https://i.pinimg.com/1200x/a2/50/ea/a250eaf28cb372c2d4f54ee8a2614b75.jpg",
    "color": "#3F7FA6",
    "icon": "kidsmeal,chickennuggets",
    "number": 13,
    "banner": "https://i.pinimg.com/1200x/a2/50/ea/a250eaf28cb372c2d4f54ee8a2614b75.jpg",
    "en": "Kids Meals"
  },
  {
    "banner": "https://i.pinimg.com/1200x/2a/9d/01/2a9d019aafa1323dde4c4313bf73606b.jpg",
    "en": "Hot Drinks",
    "number": 14,
    "icon": "espresso,latteart",
    "order": 13,
    "thumb": "https://i.pinimg.com/1200x/2a/9d/01/2a9d019aafa1323dde4c4313bf73606b.jpg",
    "id": "hotdrinks",
    "ar": "مشروبات ساخنة",
    "color": "#5A3A24"
  },
  {
    "banner": "https://i.pinimg.com/736x/9a/8b/aa/9a8baaddfdc33c548926d3e741f63ceb.jpg",
    "number": 15,
    "en": "Cold Coffees",
    "icon": "icedcoffee,coldbrew",
    "id": "coldcoffee",
    "ar": "قهوة باردة",
    "order": 14,
    "thumb": "https://i.pinimg.com/736x/9a/8b/aa/9a8baaddfdc33c548926d3e741f63ceb.jpg",
    "color": "#3A5578"
  },
  {
    "order": 15,
    "en": "Milkshakes",
    "color": "#B5518A",
    "thumb": "https://i.pinimg.com/1200x/7a/56/07/7a5607f9777847682fdf1673037c23bd.jpg",
    "number": 16,
    "banner": "https://i.pinimg.com/1200x/7a/56/07/7a5607f9777847682fdf1673037c23bd.jpg",
    "ar": "ميلك شيك",
    "id": "milkshakes",
    "icon": "milkshake"
  },
  {
    "en": "Frappes",
    "banner": "https://i.pinimg.com/736x/01/06/46/010646301747e2a765574b2415049621.jpg",
    "number": 17,
    "order": 16,
    "ar": "فرابيه",
    "id": "frappes",
    "color": "#6B4A2F",
    "thumb": "https://i.pinimg.com/736x/01/06/46/010646301747e2a765574b2415049621.jpg",
    "icon": "frappe,icedcoffeedrink"
  },
  {
    "color": "#D98A1F",
    "number": 18,
    "ar": "عصائر طازة",
    "id": "juices",
    "thumb": "https://i.pinimg.com/736x/2e/8c/23/2e8c2342f2c28d6ff61e02e97f7d4997.jpg",
    "icon": "freshjuice,orangejuice",
    "order": 17,
    "banner": "https://i.pinimg.com/736x/2e/8c/23/2e8c2342f2c28d6ff61e02e97f7d4997.jpg",
    "en": "Fresh Juices"
  },
  {
    "en": "Mocktails",
    "icon": "mocktail,cocktaildrink",
    "color": "#2E8C82",
    "ar": "موكتيلات",
    "id": "cocktails",
    "thumb": "https://i.pinimg.com/1200x/cd/4f/07/cd4f07c3cca88beb236d5785ac475d4b.jpg",
    "banner": "https://i.pinimg.com/1200x/cd/4f/07/cd4f07c3cca88beb236d5785ac475d4b.jpg",
    "number": 19,
    "order": 18
  },
  {
    "ar": "موهيتو",
    "id": "mojitos",
    "banner": "https://i.pinimg.com/736x/fb/af/af/fbafaf46af19eed68157960e32604628.jpg",
    "icon": "mojito,mintdrink",
    "order": 19,
    "thumb": "https://i.pinimg.com/736x/fb/af/af/fbafaf46af19eed68157960e32604628.jpg",
    "number": 20,
    "color": "#2F8F5B",
    "en": "Signature Mojitos"
  },
  {
    "en": "Soft Drinks",
    "order": 20,
    "number": 21,
    "color": "#2E5FA3",
    "banner": "https://i.pinimg.com/736x/76/9f/8b/769f8baa785689025317a8bd00830eef.jpg",
    "thumb": "https://i.pinimg.com/736x/76/9f/8b/769f8baa785689025317a8bd00830eef.jpg",
    "id": "softdrinks",
    "ar": "مشروبات غازية",
    "icon": "softdrink,sodaglass"
  },
  {
    "color": "#7A3350",
    "number": 22,
    "ar": "حلويات",
    "id": "desserts",
    "thumb": "https://i.pinimg.com/1200x/33/24/ea/3324ea27478420f7a7431489424c8f9a.jpg",
    "order": 21,
    "icon": "dessert,chocolatecake",
    "banner": "https://i.pinimg.com/1200x/33/24/ea/3324ea27478420f7a7431489424c8f9a.jpg",
    "en": "Desserts"
  },
  {
    "banner": "https://i.pinimg.com/736x/ed/77/ed/ed77ed595ab0d5a32b8e89784a31c1b6.jpg",
    "id": "boba",
    "ar": "بوبا",
    "number": 23,
    "icon": "bubbletea,boba",
    "color": "#5C3A78",
    "en": "Boba",
    "thumb": "https://i.pinimg.com/736x/ed/77/ed/ed77ed595ab0d5a32b8e89784a31c1b6.jpg",
    "order": 22
  }
];

const DEFAULT_ITEMS = [
  {
    "price": 150,
    "id": 2,
    "order": 0,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "available": true,
    "category": "breakfast",
    "name": {
      "en": "English Breakfast",
      "ar": "English Breakfast"
    },
    "tag": "CHEF'S PICK",
    "image": ""
  },
  {
    "tag": "BEST SELLER",
    "category": "breakfast",
    "order": 1,
    "name": {
      "en": "Classic Breakfast",
      "ar": "Classic Breakfast"
    },
    "available": true,
    "price": 105,
    "image": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "id": 1
  },
  {
    "tag": "",
    "image": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "category": "breakfast",
    "price": 110,
    "name": {
      "en": "Omelette",
      "ar": "Omelette"
    },
    "id": 3,
    "available": true,
    "order": 2
  },
  {
    "name": {
      "en": "Cheese Omelette",
      "ar": "Cheese Omelette"
    },
    "id": 4,
    "order": 3,
    "tag": "BEST SELLER",
    "price": 175,
    "image": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "available": true,
    "category": "breakfast"
  },
  {
    "order": 4,
    "price": 155,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "name": {
      "en": "Mushroom Omelette",
      "ar": "Mushroom Omelette"
    },
    "id": 5,
    "image": "",
    "category": "breakfast",
    "tag": "BEST SELLER",
    "available": true
  },
  {
    "price": 100,
    "available": true,
    "order": 5,
    "id": 6,
    "tag": "CHEF'S PICK",
    "name": {
      "en": "Scrambled Eggs",
      "ar": "Scrambled Eggs"
    },
    "category": "breakfast",
    "image": "",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    }
  },
  {
    "id": 7,
    "price": 170,
    "available": true,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "order": 6,
    "category": "breakfast",
    "name": {
      "en": "Eggs Benedict",
      "ar": "Eggs Benedict"
    },
    "tag": "",
    "image": ""
  },
  {
    "price": 175,
    "tag": "SIGNATURE",
    "order": 7,
    "available": true,
    "id": 8,
    "name": {
      "en": "Turkish Eggs",
      "ar": "Turkish Eggs"
    },
    "category": "breakfast",
    "image": "",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    }
  },
  {
    "order": 8,
    "price": 175,
    "name": {
      "en": "Shakshuka",
      "ar": "Shakshuka"
    },
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "category": "breakfast",
    "available": true,
    "id": 9,
    "image": "",
    "tag": ""
  },
  {
    "category": "breakfast",
    "price": 160,
    "tag": "",
    "order": 9,
    "available": true,
    "id": 10,
    "name": {
      "en": "Croque Madame",
      "ar": "Croque Madame"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "image": ""
  },
  {
    "id": 11,
    "name": {
      "en": "French Toast",
      "ar": "French Toast"
    },
    "image": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "tag": "",
    "available": true,
    "order": 10,
    "category": "breakfast",
    "price": 90
  },
  {
    "tag": "",
    "category": "breakfast",
    "order": 11,
    "name": {
      "en": "Avocado Toast",
      "ar": "Avocado Toast"
    },
    "available": true,
    "price": 115,
    "image": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "id": 12
  },
  {
    "tag": "",
    "available": true,
    "price": 140,
    "category": "breakfast",
    "order": 12,
    "name": {
      "en": "Egg & Cheese Toast",
      "ar": "Egg & Cheese Toast"
    },
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "image": "",
    "id": 13
  },
  {
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "category": "breakfast",
    "image": "",
    "available": true,
    "id": 14,
    "name": {
      "en": "Breakfast Croissant",
      "ar": "Breakfast Croissant"
    },
    "order": 13,
    "price": 120,
    "tag": ""
  },
  {
    "available": true,
    "tag": "NEW",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "image": "",
    "price": 140,
    "id": 15,
    "name": {
      "en": "Granola Bowl",
      "ar": "Granola Bowl"
    },
    "category": "breakfast",
    "order": 14
  },
  {
    "id": 16,
    "price": 150,
    "order": 15,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "category": "breakfast",
    "name": {
      "en": "Yogurt & Fruits",
      "ar": "Yogurt & Fruits"
    },
    "available": true,
    "image": "",
    "tag": "BEST SELLER"
  },
  {
    "name": {
      "en": "Acai Bowl",
      "ar": "Acai Bowl"
    },
    "image": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "id": 17,
    "tag": "",
    "available": true,
    "order": 16,
    "category": "breakfast",
    "price": 145
  },
  {
    "category": "breakfast",
    "id": 18,
    "price": 95,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "order": 17,
    "tag": "",
    "name": {
      "en": "Breakfast Platter",
      "ar": "Breakfast Platter"
    },
    "available": true,
    "image": ""
  },
  {
    "order": 18,
    "price": 145,
    "category": "appetizers",
    "name": {
      "en": "French Fries",
      "ar": "French Fries"
    },
    "image": "",
    "tag": "NEW",
    "id": 19,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "available": true
  },
  {
    "id": 20,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "category": "appetizers",
    "available": true,
    "image": "",
    "price": 120,
    "name": {
      "en": "Curly Fries",
      "ar": "Curly Fries"
    },
    "order": 19,
    "tag": "BEST SELLER"
  },
  {
    "name": {
      "en": "Sweet Potato Fries",
      "ar": "Sweet Potato Fries"
    },
    "image": "",
    "id": 21,
    "category": "appetizers",
    "tag": "",
    "available": true,
    "order": 20,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "price": 105
  },
  {
    "tag": "",
    "image": "",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "available": true,
    "price": 115,
    "name": {
      "en": "Potato Wedges",
      "ar": "Potato Wedges"
    },
    "category": "appetizers",
    "id": 22,
    "order": 21
  },
  {
    "name": {
      "en": "Mozzarella Sticks",
      "ar": "Mozzarella Sticks"
    },
    "category": "appetizers",
    "order": 22,
    "id": 23,
    "available": true,
    "tag": "BEST SELLER",
    "price": 70,
    "image": "",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    }
  },
  {
    "name": {
      "en": "Chicken Strips",
      "ar": "Chicken Strips"
    },
    "image": "",
    "available": true,
    "id": 24,
    "category": "appetizers",
    "tag": "",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "order": 23,
    "price": 95
  },
  {
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "image": "",
    "price": 70,
    "tag": "",
    "category": "appetizers",
    "order": 24,
    "available": true,
    "id": 25,
    "name": {
      "en": "Chicken Wings",
      "ar": "Chicken Wings"
    }
  },
  {
    "price": 75,
    "order": 25,
    "tag": "",
    "available": true,
    "id": 26,
    "category": "appetizers",
    "image": "",
    "name": {
      "en": "Buffalo Wings",
      "ar": "Buffalo Wings"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "category": "appetizers",
    "price": 130,
    "order": 26,
    "id": 27,
    "available": true,
    "name": {
      "en": "Onion Rings",
      "ar": "Onion Rings"
    },
    "tag": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "image": ""
  },
  {
    "category": "appetizers",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "image": "",
    "available": true,
    "price": 115,
    "tag": "SIGNATURE",
    "id": 28,
    "order": 27,
    "name": {
      "en": "Nachos",
      "ar": "Nachos"
    }
  },
  {
    "id": 29,
    "available": true,
    "image": "",
    "tag": "SIGNATURE",
    "name": {
      "en": "Cheese Nachos",
      "ar": "Cheese Nachos"
    },
    "category": "appetizers",
    "price": 115,
    "order": 28,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    }
  },
  {
    "price": 100,
    "id": 30,
    "order": 29,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "category": "appetizers",
    "name": {
      "en": "Garlic Bread",
      "ar": "Garlic Bread"
    },
    "available": true,
    "tag": "",
    "image": ""
  },
  {
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "tag": "",
    "image": "",
    "price": 70,
    "available": true,
    "name": {
      "en": "Cheesy Garlic Bread",
      "ar": "Cheesy Garlic Bread"
    },
    "id": 31,
    "category": "appetizers",
    "order": 30
  },
  {
    "name": {
      "en": "Bruschetta",
      "ar": "Bruschetta"
    },
    "order": 31,
    "category": "appetizers",
    "tag": "",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "id": 32,
    "available": true,
    "price": 85,
    "image": ""
  },
  {
    "image": "",
    "category": "appetizers",
    "name": {
      "en": "Dynamite Shrimp",
      "ar": "Dynamite Shrimp"
    },
    "tag": "SIGNATURE",
    "available": true,
    "id": 33,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "order": 32,
    "price": 95
  },
  {
    "available": true,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "image": "",
    "id": 34,
    "name": {
      "en": "Jalapeño Poppers",
      "ar": "Jalapeño Poppers"
    },
    "order": 33,
    "category": "appetizers",
    "price": 120,
    "tag": ""
  },
  {
    "order": 34,
    "id": 35,
    "name": {
      "en": "Fried Calamari",
      "ar": "Fried Calamari"
    },
    "price": 145,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "available": true,
    "image": "",
    "category": "appetizers",
    "tag": "CHEF'S PICK"
  },
  {
    "image": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "name": {
      "en": "Loaded Fries",
      "ar": "Loaded Fries"
    },
    "tag": "",
    "available": true,
    "id": 36,
    "order": 35,
    "price": 110,
    "category": "appetizers"
  },
  {
    "order": 36,
    "id": 37,
    "price": 95,
    "name": {
      "en": "Caesar Salad",
      "ar": "Caesar Salad"
    },
    "category": "salads",
    "available": true,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "image": "",
    "tag": "CHEF'S PICK"
  },
  {
    "price": 95,
    "category": "salads",
    "order": 37,
    "available": true,
    "tag": "",
    "id": 38,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "image": "",
    "name": {
      "en": "Chicken Caesar Salad",
      "ar": "Chicken Caesar Salad"
    }
  },
  {
    "image": "",
    "name": {
      "en": "Greek Salad",
      "ar": "Greek Salad"
    },
    "category": "salads",
    "order": 38,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "id": 39,
    "tag": "",
    "available": true,
    "price": 150
  },
  {
    "name": {
      "en": "Garden Salad",
      "ar": "Garden Salad"
    },
    "id": 40,
    "order": 39,
    "tag": "",
    "price": 120,
    "image": "",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "available": true,
    "category": "salads"
  },
  {
    "name": {
      "en": "Chicken Avocado Salad",
      "ar": "Chicken Avocado Salad"
    },
    "id": 41,
    "image": "",
    "available": true,
    "category": "salads",
    "tag": "CHEF'S PICK",
    "order": 40,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "price": 140
  },
  {
    "tag": "",
    "order": 41,
    "name": {
      "en": "Tuna Salad",
      "ar": "Tuna Salad"
    },
    "price": 165,
    "image": "",
    "available": true,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "category": "salads",
    "id": 42
  },
  {
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "available": true,
    "image": "",
    "tag": "NEW",
    "price": 160,
    "order": 42,
    "name": {
      "en": "Cobb Salad",
      "ar": "Cobb Salad"
    },
    "category": "salads",
    "id": 43
  },
  {
    "tag": "CHEF'S PICK",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "order": 43,
    "name": {
      "en": "Fattoush",
      "ar": "Fattoush"
    },
    "price": 110,
    "image": "",
    "category": "salads",
    "available": true,
    "id": 44
  },
  {
    "tag": "",
    "name": {
      "en": "Caprese Salad",
      "ar": "Caprese Salad"
    },
    "order": 44,
    "price": 130,
    "image": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "id": 45,
    "available": true,
    "category": "salads"
  },
  {
    "image": "",
    "tag": "",
    "name": {
      "en": "Pasta Salad",
      "ar": "Pasta Salad"
    },
    "category": "salads",
    "available": true,
    "order": 45,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "id": 46,
    "price": 155
  },
  {
    "name": {
      "en": "Quinoa Salad",
      "ar": "Quinoa Salad"
    },
    "image": "",
    "available": true,
    "id": 47,
    "category": "salads",
    "tag": "",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "order": 46,
    "price": 150
  },
  {
    "price": 110,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "order": 47,
    "id": 48,
    "category": "salads",
    "tag": "",
    "available": true,
    "name": {
      "en": "Mediterranean Salad",
      "ar": "Mediterranean Salad"
    },
    "image": ""
  },
  {
    "id": 49,
    "category": "salads",
    "image": "",
    "tag": "",
    "name": {
      "en": "Shrimp Salad",
      "ar": "Shrimp Salad"
    },
    "price": 100,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "available": true,
    "order": 48
  },
  {
    "id": 50,
    "available": true,
    "image": "",
    "price": 105,
    "category": "salads",
    "order": 49,
    "name": {
      "en": "Crispy Chicken Salad",
      "ar": "Crispy Chicken Salad"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "tag": "NEW"
  },
  {
    "name": {
      "en": "Avocado Salad",
      "ar": "Avocado Salad"
    },
    "available": true,
    "image": "",
    "id": 51,
    "tag": "",
    "order": 50,
    "category": "salads",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "price": 115
  },
  {
    "available": true,
    "id": 52,
    "order": 51,
    "name": {
      "en": "Super Green Salad",
      "ar": "Super Green Salad"
    },
    "price": 155,
    "category": "salads",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "image": "",
    "tag": ""
  },
  {
    "id": 53,
    "name": {
      "en": "Cream of Chicken",
      "ar": "Cream of Chicken"
    },
    "image": "",
    "category": "soup",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "tag": "",
    "order": 52,
    "price": 85
  },
  {
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "image": "",
    "category": "soup",
    "price": 90,
    "tag": "",
    "id": 54,
    "order": 53,
    "name": {
      "en": "Mushroom Soup",
      "ar": "Mushroom Soup"
    },
    "available": true
  },
  {
    "order": 54,
    "available": true,
    "name": {
      "en": "Tomato Soup",
      "ar": "Tomato Soup"
    },
    "price": 95,
    "id": 55,
    "image": "",
    "tag": "",
    "category": "soup",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    }
  },
  {
    "id": 56,
    "available": true,
    "order": 55,
    "name": {
      "en": "Lentil Soup",
      "ar": "Lentil Soup"
    },
    "price": 55,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "category": "soup",
    "image": "",
    "tag": ""
  },
  {
    "category": "soup",
    "tag": "",
    "image": "",
    "available": true,
    "price": 60,
    "name": {
      "en": "Chicken Noodle Soup",
      "ar": "Chicken Noodle Soup"
    },
    "id": 57,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "order": 56
  },
  {
    "order": 57,
    "category": "soup",
    "price": 95,
    "name": {
      "en": "Vegetable Soup",
      "ar": "Vegetable Soup"
    },
    "tag": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "image": "",
    "available": true,
    "id": 58
  },
  {
    "image": "",
    "name": {
      "en": "French Onion Soup",
      "ar": "French Onion Soup"
    },
    "tag": "",
    "category": "soup",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "id": 59,
    "order": 58,
    "available": true,
    "price": 105
  },
  {
    "name": {
      "en": "Seafood Soup",
      "ar": "Seafood Soup"
    },
    "category": "soup",
    "tag": "",
    "order": 59,
    "available": true,
    "price": 75,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "image": "",
    "id": 60
  },
  {
    "order": 60,
    "available": true,
    "price": 90,
    "name": {
      "en": "Creamy Corn Soup",
      "ar": "Creamy Corn Soup"
    },
    "id": 61,
    "image": "",
    "tag": "BEST SELLER",
    "category": "soup",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    }
  },
  {
    "tag": "",
    "image": "",
    "available": true,
    "id": 62,
    "name": {
      "en": "Broccoli Soup",
      "ar": "Broccoli Soup"
    },
    "price": 75,
    "category": "soup",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "order": 61
  },
  {
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "image": "",
    "name": {
      "en": "Pumpkin Soup",
      "ar": "Pumpkin Soup"
    },
    "id": 63,
    "order": 62,
    "available": true,
    "tag": "",
    "price": 65,
    "category": "soup"
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "image": "",
    "category": "soup",
    "price": 60,
    "tag": "",
    "id": 64,
    "order": 63,
    "name": {
      "en": "Minestrone",
      "ar": "Minestrone"
    },
    "available": true
  },
  {
    "tag": "",
    "name": {
      "en": "Spicy Chicken Soup",
      "ar": "Spicy Chicken Soup"
    },
    "order": 64,
    "category": "soup",
    "price": 75,
    "image": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "id": 65,
    "available": true
  },
  {
    "id": 66,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "image": "",
    "category": "soup",
    "name": {
      "en": "Creamy Spinach Soup",
      "ar": "Creamy Spinach Soup"
    },
    "order": 65,
    "available": true,
    "price": 95,
    "tag": ""
  },
  {
    "available": true,
    "id": 67,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "image": "",
    "price": 115,
    "order": 66,
    "name": {
      "en": "Chicken Crispy Sandwich",
      "ar": "Chicken Crispy Sandwich"
    },
    "category": "sandwiches",
    "tag": ""
  },
  {
    "price": 120,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "order": 67,
    "available": true,
    "category": "sandwiches",
    "tag": "",
    "id": 68,
    "image": "",
    "name": {
      "en": "Classic Chicken Sandwich",
      "ar": "Classic Chicken Sandwich"
    }
  },
  {
    "category": "sandwiches",
    "price": 175,
    "tag": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "order": 68,
    "id": 69,
    "name": {
      "en": "Grilled Chicken Sandwich",
      "ar": "Grilled Chicken Sandwich"
    },
    "image": "",
    "available": true
  },
  {
    "id": 70,
    "image": "",
    "category": "sandwiches",
    "tag": "",
    "name": {
      "en": "Chicken BBQ Sandwich",
      "ar": "Chicken BBQ Sandwich"
    },
    "available": true,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "price": 145,
    "order": 69
  },
  {
    "order": 70,
    "category": "sandwiches",
    "price": 110,
    "name": {
      "en": "Philly Cheesesteak",
      "ar": "Philly Cheesesteak"
    },
    "tag": "",
    "image": "",
    "available": true,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "id": 71
  },
  {
    "id": 72,
    "tag": "CHEF'S PICK",
    "image": "",
    "category": "sandwiches",
    "available": true,
    "name": {
      "en": "Beef Steak Sandwich",
      "ar": "Beef Steak Sandwich"
    },
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "price": 140,
    "order": 71
  },
  {
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "id": 73,
    "price": 130,
    "available": true,
    "order": 72,
    "tag": "",
    "name": {
      "en": "Roast Beef Sandwich",
      "ar": "Roast Beef Sandwich"
    },
    "category": "sandwiches",
    "image": ""
  },
  {
    "available": true,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "category": "sandwiches",
    "image": "",
    "name": {
      "en": "Club Sandwich",
      "ar": "Club Sandwich"
    },
    "order": 73,
    "tag": "BEST SELLER",
    "id": 74,
    "price": 105
  },
  {
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "image": "",
    "name": {
      "en": "Tuna Sandwich",
      "ar": "Tuna Sandwich"
    },
    "order": 74,
    "id": 75,
    "tag": "",
    "available": true,
    "price": 170,
    "category": "sandwiches"
  },
  {
    "order": 75,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "name": {
      "en": "Grilled Cheese",
      "ar": "Grilled Cheese"
    },
    "price": 180,
    "id": 76,
    "available": true,
    "category": "sandwiches",
    "image": "",
    "tag": ""
  },
  {
    "name": {
      "en": "Halloumi Sandwich",
      "ar": "Halloumi Sandwich"
    },
    "available": true,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "order": 76,
    "tag": "",
    "price": 115,
    "image": "",
    "id": 77,
    "category": "sandwiches"
  },
  {
    "price": 180,
    "category": "sandwiches",
    "order": 77,
    "tag": "SIGNATURE",
    "available": true,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "image": "",
    "name": {
      "en": "Smoked Turkey Sandwich",
      "ar": "Smoked Turkey Sandwich"
    },
    "id": 78
  },
  {
    "id": 79,
    "name": {
      "en": "Chicken Avocado Sandwich",
      "ar": "Chicken Avocado Sandwich"
    },
    "image": "",
    "category": "sandwiches",
    "available": true,
    "tag": "",
    "order": 78,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "price": 175
  },
  {
    "order": 79,
    "name": {
      "en": "Italian Sandwich",
      "ar": "Italian Sandwich"
    },
    "price": 160,
    "id": 80,
    "category": "sandwiches",
    "available": true,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "image": "",
    "tag": ""
  },
  {
    "order": 80,
    "available": true,
    "name": {
      "en": "Classic Smash",
      "ar": "Classic Smash"
    },
    "price": 225,
    "id": 81,
    "category": "burgers",
    "image": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "tag": ""
  },
  {
    "tag": "SIGNATURE",
    "available": true,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "price": 250,
    "order": 81,
    "category": "burgers",
    "name": {
      "en": "Double Smash",
      "ar": "Double Smash"
    },
    "image": "",
    "id": 82
  },
  {
    "order": 82,
    "id": 83,
    "name": {
      "en": "Triple Smash",
      "ar": "Triple Smash"
    },
    "price": 185,
    "category": "burgers",
    "available": true,
    "image": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "tag": ""
  },
  {
    "image": "",
    "available": true,
    "name": {
      "en": "Cheese Smash",
      "ar": "Cheese Smash"
    },
    "id": 84,
    "order": 83,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "category": "burgers",
    "tag": "",
    "price": 245
  },
  {
    "id": 85,
    "image": "",
    "name": {
      "en": "Bacon Cheese Smash",
      "ar": "Bacon Cheese Smash"
    },
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "category": "burgers",
    "order": 84,
    "price": 210,
    "tag": ""
  },
  {
    "category": "burgers",
    "tag": "NEW",
    "image": "",
    "id": 86,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "available": true,
    "name": {
      "en": "Mushroom Swiss Smash",
      "ar": "Mushroom Swiss Smash"
    },
    "price": 210,
    "order": 85
  },
  {
    "image": "",
    "category": "burgers",
    "name": {
      "en": "BBQ Smash",
      "ar": "BBQ Smash"
    },
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "id": 87,
    "order": 86,
    "tag": "BEST SELLER",
    "price": 175,
    "available": true
  },
  {
    "category": "burgers",
    "tag": "",
    "image": "",
    "id": 88,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "available": true,
    "name": {
      "en": "Jalapeño Smash",
      "ar": "Jalapeño Smash"
    },
    "price": 140,
    "order": 87
  },
  {
    "tag": "",
    "order": 88,
    "name": {
      "en": "Truffle Smash",
      "ar": "Truffle Smash"
    },
    "price": 175,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "image": "",
    "available": true,
    "category": "burgers",
    "id": 89
  },
  {
    "name": {
      "en": "Avocado Smash",
      "ar": "Avocado Smash"
    },
    "available": true,
    "image": "",
    "id": 90,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "tag": "BEST SELLER",
    "order": 89,
    "category": "burgers",
    "price": 140
  },
  {
    "price": 240,
    "id": 91,
    "tag": "BEST SELLER",
    "order": 90,
    "available": true,
    "name": {
      "en": "Mexican Smash",
      "ar": "Mexican Smash"
    },
    "category": "burgers",
    "image": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    }
  },
  {
    "tag": "",
    "available": true,
    "image": "",
    "category": "burgers",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "price": 150,
    "name": {
      "en": "Chicken Smash",
      "ar": "Chicken Smash"
    },
    "id": 92,
    "order": 91
  },
  {
    "price": 190,
    "id": 93,
    "order": 92,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "name": {
      "en": "Crispy Chicken Burger",
      "ar": "Crispy Chicken Burger"
    },
    "category": "burgers",
    "tag": "BEST SELLER",
    "image": ""
  },
  {
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "id": 94,
    "image": "",
    "name": {
      "en": "Signature Smash",
      "ar": "Signature Smash"
    },
    "category": "burgers",
    "order": 93,
    "price": 175,
    "tag": "",
    "available": true
  },
  {
    "name": {
      "en": "Classic Pancakes",
      "ar": "Classic Pancakes"
    },
    "order": 94,
    "id": 95,
    "tag": "CHEF'S PICK",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "price": 145,
    "image": "",
    "category": "pancakes",
    "available": true
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "image": "",
    "id": 96,
    "name": {
      "en": "Nutella Pancakes",
      "ar": "Nutella Pancakes"
    },
    "category": "pancakes",
    "order": 95,
    "price": 120,
    "tag": "",
    "available": true
  },
  {
    "tag": "",
    "category": "pancakes",
    "name": {
      "en": "Chocolate Pancakes",
      "ar": "Chocolate Pancakes"
    },
    "order": 96,
    "available": true,
    "price": 155,
    "image": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "id": 97
  },
  {
    "order": 97,
    "id": 98,
    "name": {
      "en": "Strawberry Pancakes",
      "ar": "Strawberry Pancakes"
    },
    "available": true,
    "price": 125,
    "category": "pancakes",
    "image": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "tag": ""
  },
  {
    "image": "",
    "name": {
      "en": "Blueberry Pancakes",
      "ar": "Blueberry Pancakes"
    },
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "order": 98,
    "available": true,
    "tag": "",
    "id": 99,
    "category": "pancakes",
    "price": 170
  },
  {
    "name": {
      "en": "Banana Pancakes",
      "ar": "Banana Pancakes"
    },
    "image": "",
    "id": 100,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "tag": "BEST SELLER",
    "order": 99,
    "category": "pancakes",
    "available": true,
    "price": 115
  },
  {
    "tag": "",
    "category": "pancakes",
    "order": 100,
    "name": {
      "en": "Lotus Pancakes",
      "ar": "Lotus Pancakes"
    },
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "price": 140,
    "image": "",
    "available": true,
    "id": 101
  },
  {
    "order": 101,
    "category": "pancakes",
    "name": {
      "en": "Kinder Pancakes",
      "ar": "Kinder Pancakes"
    },
    "available": true,
    "price": 140,
    "id": 102,
    "image": "",
    "tag": "",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    }
  },
  {
    "tag": "BEST SELLER",
    "name": {
      "en": "Oreo Pancakes",
      "ar": "Oreo Pancakes"
    },
    "order": 102,
    "available": true,
    "price": 165,
    "category": "pancakes",
    "image": "",
    "id": 103,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    }
  },
  {
    "name": {
      "en": "Pistachio Pancakes",
      "ar": "Pistachio Pancakes"
    },
    "tag": "",
    "order": 103,
    "available": true,
    "category": "pancakes",
    "price": 160,
    "image": "",
    "id": 104,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    }
  },
  {
    "order": 104,
    "available": true,
    "name": {
      "en": "Caramel Pancakes",
      "ar": "Caramel Pancakes"
    },
    "price": 115,
    "id": 105,
    "image": "",
    "category": "pancakes",
    "tag": "BEST SELLER",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    }
  },
  {
    "name": {
      "en": "Biscoff Pancakes",
      "ar": "Biscoff Pancakes"
    },
    "order": 105,
    "id": 106,
    "category": "pancakes",
    "tag": "",
    "price": 165,
    "image": "",
    "available": true,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "name": {
      "en": "Red Velvet Pancakes",
      "ar": "Red Velvet Pancakes"
    },
    "order": 106,
    "category": "pancakes",
    "tag": "NEW",
    "id": 107,
    "price": 175,
    "available": true,
    "image": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    }
  },
  {
    "price": 125,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "id": 108,
    "category": "pancakes",
    "order": 107,
    "available": true,
    "name": {
      "en": "Signature Pancakes",
      "ar": "Signature Pancakes"
    },
    "tag": "SIGNATURE",
    "image": ""
  },
  {
    "tag": "NEW",
    "category": "waffles",
    "price": 155,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "order": 108,
    "id": 109,
    "name": {
      "en": "Classic Waffle",
      "ar": "Classic Waffle"
    },
    "image": ""
  },
  {
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "id": 110,
    "image": "",
    "price": 130,
    "available": true,
    "category": "waffles",
    "order": 109,
    "name": {
      "en": "Belgian Waffle",
      "ar": "Belgian Waffle"
    },
    "tag": ""
  },
  {
    "order": 110,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "price": 135,
    "category": "waffles",
    "name": {
      "en": "Nutella Waffle",
      "ar": "Nutella Waffle"
    },
    "id": 111,
    "image": "",
    "tag": "",
    "available": true
  },
  {
    "order": 111,
    "category": "waffles",
    "id": 112,
    "name": {
      "en": "Chocolate Waffle",
      "ar": "Chocolate Waffle"
    },
    "price": 125,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "image": "",
    "available": true,
    "tag": ""
  },
  {
    "image": "",
    "name": {
      "en": "Strawberry Waffle",
      "ar": "Strawberry Waffle"
    },
    "tag": "",
    "id": 113,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "category": "waffles",
    "available": true,
    "order": 112,
    "price": 185
  },
  {
    "tag": "BEST SELLER",
    "price": 125,
    "available": true,
    "category": "waffles",
    "order": 113,
    "name": {
      "en": "Banana Waffle",
      "ar": "Banana Waffle"
    },
    "id": 114,
    "image": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "name": {
      "en": "Lotus Waffle",
      "ar": "Lotus Waffle"
    },
    "id": 115,
    "image": "",
    "available": true,
    "category": "waffles",
    "tag": "",
    "order": 114,
    "price": 160,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    }
  },
  {
    "order": 115,
    "price": 125,
    "category": "waffles",
    "name": {
      "en": "Kinder Waffle",
      "ar": "Kinder Waffle"
    },
    "available": true,
    "image": "",
    "tag": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "id": 116
  },
  {
    "id": 117,
    "image": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "price": 185,
    "tag": "CHEF'S PICK",
    "order": 116,
    "name": {
      "en": "Oreo Waffle",
      "ar": "Oreo Waffle"
    },
    "category": "waffles"
  },
  {
    "order": 117,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "id": 118,
    "name": {
      "en": "Pistachio Waffle",
      "ar": "Pistachio Waffle"
    },
    "price": 150,
    "image": "",
    "available": true,
    "tag": "",
    "category": "waffles"
  },
  {
    "price": 135,
    "id": 119,
    "tag": "",
    "order": 118,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "name": {
      "en": "Biscoff Waffle",
      "ar": "Biscoff Waffle"
    },
    "category": "waffles",
    "available": true,
    "image": ""
  },
  {
    "price": 120,
    "tag": "SIGNATURE",
    "id": 120,
    "order": 119,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "name": {
      "en": "Brownie Waffle",
      "ar": "Brownie Waffle"
    },
    "category": "waffles",
    "available": true,
    "image": ""
  },
  {
    "tag": "",
    "available": true,
    "price": 120,
    "category": "waffles",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "order": 120,
    "name": {
      "en": "Red Velvet Waffle",
      "ar": "Red Velvet Waffle"
    },
    "image": "",
    "id": 121
  },
  {
    "tag": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "order": 121,
    "name": {
      "en": "Signature Waffle",
      "ar": "Signature Waffle"
    },
    "price": 140,
    "image": "",
    "category": "waffles",
    "available": true,
    "id": 122
  },
  {
    "price": 160,
    "category": "crepes",
    "order": 122,
    "available": true,
    "id": 123,
    "tag": "",
    "name": {
      "en": "Classic Nutella Crepe",
      "ar": "Classic Nutella Crepe"
    },
    "image": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    }
  },
  {
    "order": 123,
    "category": "crepes",
    "price": 130,
    "name": {
      "en": "Strawberry Nutella",
      "ar": "Strawberry Nutella"
    },
    "image": "",
    "available": true,
    "tag": "",
    "id": 124,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    }
  },
  {
    "category": "crepes",
    "id": 125,
    "image": "",
    "price": 155,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "order": 124,
    "name": {
      "en": "Banana Nutella",
      "ar": "Banana Nutella"
    },
    "tag": ""
  },
  {
    "name": {
      "en": "Kinder Crepe",
      "ar": "Kinder Crepe"
    },
    "image": "",
    "id": 126,
    "available": true,
    "tag": "",
    "category": "crepes",
    "order": 125,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "price": 140
  },
  {
    "available": true,
    "order": 126,
    "price": 135,
    "name": {
      "en": "Oreo Crepe",
      "ar": "Oreo Crepe"
    },
    "category": "crepes",
    "id": 127,
    "image": "",
    "tag": "NEW",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    }
  },
  {
    "name": {
      "en": "Lotus Crepe",
      "ar": "Lotus Crepe"
    },
    "id": 128,
    "image": "",
    "category": "crepes",
    "available": true,
    "tag": "CHEF'S PICK",
    "order": 127,
    "price": 120,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    }
  },
  {
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "available": true,
    "tag": "",
    "image": "",
    "id": 129,
    "price": 100,
    "name": {
      "en": "Pistachio Crepe",
      "ar": "Pistachio Crepe"
    },
    "category": "crepes",
    "order": 128
  },
  {
    "id": 130,
    "price": 140,
    "available": true,
    "order": 129,
    "category": "crepes",
    "name": {
      "en": "Brownie Crepe",
      "ar": "Brownie Crepe"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "tag": "BEST SELLER",
    "image": ""
  },
  {
    "price": 125,
    "category": "crepes",
    "order": 130,
    "available": true,
    "id": 131,
    "tag": "BEST SELLER",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "name": {
      "en": "Strawberry & Cream",
      "ar": "Strawberry & Cream"
    },
    "image": ""
  },
  {
    "image": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "name": {
      "en": "Lotus Cheesecake Crepe",
      "ar": "Lotus Cheesecake Crepe"
    },
    "tag": "",
    "id": 132,
    "available": true,
    "order": 131,
    "price": 145,
    "category": "crepes"
  },
  {
    "name": {
      "en": "Kinder Bueno Crepe",
      "ar": "Kinder Bueno Crepe"
    },
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "order": 132,
    "tag": "",
    "price": 165,
    "category": "crepes",
    "id": 133,
    "image": "",
    "available": true
  },
  {
    "tag": "",
    "available": true,
    "image": "",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "price": 100,
    "name": {
      "en": "Signature Crepe",
      "ar": "Signature Crepe"
    },
    "id": 134,
    "order": 133,
    "category": "crepes"
  },
  {
    "image": "",
    "available": true,
    "name": {
      "en": "Margherita",
      "ar": "Margherita"
    },
    "tag": "",
    "order": 134,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "price": 160,
    "id": 135,
    "category": "pizza"
  },
  {
    "available": true,
    "tag": "",
    "price": 160,
    "category": "pizza",
    "order": 135,
    "name": {
      "en": "Four Cheese",
      "ar": "Four Cheese"
    },
    "image": "",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "id": 136
  },
  {
    "tag": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "price": 255,
    "category": "pizza",
    "order": 136,
    "name": {
      "en": "Pepperoni",
      "ar": "Pepperoni"
    },
    "image": "",
    "id": 137,
    "available": true
  },
  {
    "available": true,
    "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=138",
    "name": {
      "en": "Chicken BBQ",
      "ar": "Chicken BBQ"
    },
    "id": 138,
    "order": 137,
    "category": "pizza",
    "tag": "NEW",
    "price": 210,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "available": true,
    "tag": "CHEF'S PICK",
    "image": "",
    "category": "pizza",
    "id": 139,
    "name": {
      "en": "Chicken Ranch",
      "ar": "Chicken Ranch"
    },
    "price": 240,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "order": 138
  },
  {
    "order": 139,
    "category": "pizza",
    "price": 245,
    "available": true,
    "name": {
      "en": "Chicken Alfredo",
      "ar": "Chicken Alfredo"
    },
    "id": 140,
    "image": "",
    "tag": "BEST SELLER",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    }
  },
  {
    "id": 141,
    "image": "",
    "tag": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "name": {
      "en": "Meat Lovers",
      "ar": "Meat Lovers"
    },
    "category": "pizza",
    "price": 160,
    "available": true,
    "order": 140
  },
  {
    "available": true,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "category": "pizza",
    "image": "",
    "price": 240,
    "id": 142,
    "tag": "",
    "order": 141,
    "name": {
      "en": "Beef Pepperoni",
      "ar": "Beef Pepperoni"
    }
  },
  {
    "order": 142,
    "available": true,
    "name": {
      "en": "Hawaiian",
      "ar": "Hawaiian"
    },
    "price": 200,
    "id": 143,
    "image": "",
    "category": "pizza",
    "tag": "",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    }
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "tag": "",
    "price": 180,
    "category": "pizza",
    "order": 143,
    "name": {
      "en": "Vegetarian",
      "ar": "Vegetarian"
    },
    "image": "",
    "id": 144,
    "available": true
  },
  {
    "available": true,
    "category": "pizza",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "image": "",
    "price": 200,
    "tag": "CHEF'S PICK",
    "id": 145,
    "order": 144,
    "name": {
      "en": "Spicy Chicken",
      "ar": "Spicy Chicken"
    }
  },
  {
    "id": 146,
    "available": true,
    "image": "",
    "category": "pizza",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "tag": "NEW",
    "name": {
      "en": "Buffalo Chicken",
      "ar": "Buffalo Chicken"
    },
    "price": 210,
    "order": 145
  },
  {
    "image": "",
    "name": {
      "en": "Seafood",
      "ar": "Seafood"
    },
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "id": 147,
    "category": "pizza",
    "order": 146,
    "tag": "",
    "price": 250,
    "available": true
  },
  {
    "image": "",
    "name": {
      "en": "Truffle Mushroom",
      "ar": "Truffle Mushroom"
    },
    "id": 148,
    "tag": "",
    "available": true,
    "order": 147,
    "category": "pizza",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "price": 200
  },
  {
    "tag": "BEST SELLER",
    "image": "",
    "category": "pizza",
    "id": 149,
    "name": {
      "en": "Signature Pizza",
      "ar": "Signature Pizza"
    },
    "price": 160,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "order": 148
  },
  {
    "available": true,
    "price": 235,
    "id": 150,
    "order": 149,
    "category": "pasta",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "name": {
      "en": "Penne Arrabbiata",
      "ar": "Penne Arrabbiata"
    },
    "tag": "",
    "image": ""
  },
  {
    "available": true,
    "image": "",
    "name": {
      "en": "Penne Alfredo",
      "ar": "Penne Alfredo"
    },
    "tag": "BEST SELLER",
    "order": 150,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "price": 155,
    "category": "pasta",
    "id": 151
  },
  {
    "price": 170,
    "category": "pasta",
    "order": 151,
    "available": true,
    "id": 152,
    "tag": "",
    "name": {
      "en": "Chicken Alfredo",
      "ar": "Chicken Alfredo"
    },
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "image": ""
  },
  {
    "name": {
      "en": "Chicken Mushroom Pasta",
      "ar": "Chicken Mushroom Pasta"
    },
    "id": 153,
    "order": 152,
    "available": true,
    "tag": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "price": 160,
    "category": "pasta",
    "image": ""
  },
  {
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "image": "",
    "price": 150,
    "category": "pasta",
    "tag": "",
    "id": 154,
    "order": 153,
    "available": true,
    "name": {
      "en": "Chicken Pesto Pasta",
      "ar": "Chicken Pesto Pasta"
    }
  },
  {
    "category": "pasta",
    "name": {
      "en": "Beef Bolognese",
      "ar": "Beef Bolognese"
    },
    "order": 154,
    "tag": "",
    "id": 155,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "price": 195,
    "image": "",
    "available": true
  },
  {
    "id": 156,
    "price": 210,
    "order": 155,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "name": {
      "en": "Spaghetti Carbonara",
      "ar": "Spaghetti Carbonara"
    },
    "category": "pasta",
    "available": true,
    "image": "",
    "tag": ""
  },
  {
    "order": 156,
    "available": true,
    "name": {
      "en": "Lasagna",
      "ar": "Lasagna"
    },
    "price": 185,
    "id": 157,
    "image": "",
    "tag": "",
    "category": "pasta",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    }
  },
  {
    "image": "",
    "tag": "BEST SELLER",
    "name": {
      "en": "Four Cheese Pasta",
      "ar": "Four Cheese Pasta"
    },
    "category": "pasta",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "id": 158,
    "order": 157,
    "available": true,
    "price": 220
  },
  {
    "price": 225,
    "id": 159,
    "order": 158,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "name": {
      "en": "Shrimp Alfredo",
      "ar": "Shrimp Alfredo"
    },
    "category": "pasta",
    "available": true,
    "image": "",
    "tag": ""
  },
  {
    "image": "",
    "name": {
      "en": "Seafood Pasta",
      "ar": "Seafood Pasta"
    },
    "tag": "",
    "category": "pasta",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "id": 160,
    "order": 159,
    "available": true,
    "price": 155
  },
  {
    "category": "pasta",
    "image": "",
    "price": 160,
    "tag": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "order": 160,
    "available": true,
    "id": 161,
    "name": {
      "en": "Truffle Pasta",
      "ar": "Truffle Pasta"
    }
  },
  {
    "price": 155,
    "category": "pasta",
    "order": 161,
    "tag": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "available": true,
    "image": "",
    "name": {
      "en": "Signature Pasta",
      "ar": "Signature Pasta"
    },
    "id": 162
  },
  {
    "image": "",
    "available": true,
    "name": {
      "en": "Grilled Chicken Meal",
      "ar": "Grilled Chicken Meal"
    },
    "id": 163,
    "order": 162,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "tag": "",
    "price": 210,
    "category": "meals"
  },
  {
    "available": true,
    "id": 164,
    "image": "",
    "name": {
      "en": "Crispy Chicken Meal",
      "ar": "Crispy Chicken Meal"
    },
    "order": 163,
    "category": "meals",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "price": 285,
    "tag": "CHEF'S PICK"
  },
  {
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "image": "",
    "price": 240,
    "id": 165,
    "available": true,
    "tag": "SIGNATURE",
    "order": 164,
    "category": "meals",
    "name": {
      "en": "Chicken Wings Meal",
      "ar": "Chicken Wings Meal"
    }
  },
  {
    "order": 165,
    "available": true,
    "price": 290,
    "name": {
      "en": "Chicken Escalope",
      "ar": "Chicken Escalope"
    },
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "tag": "",
    "image": "",
    "id": 166,
    "category": "meals"
  },
  {
    "order": 166,
    "id": 167,
    "name": {
      "en": "Chicken BBQ Meal",
      "ar": "Chicken BBQ Meal"
    },
    "price": 270,
    "available": true,
    "category": "meals",
    "image": "",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "tag": ""
  },
  {
    "id": 168,
    "order": 167,
    "name": {
      "en": "Beef Steak Meal",
      "ar": "Beef Steak Meal"
    },
    "available": true,
    "price": 330,
    "category": "meals",
    "image": "",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "tag": ""
  },
  {
    "order": 168,
    "available": true,
    "price": 195,
    "name": {
      "en": "Beef BBQ Meal",
      "ar": "Beef BBQ Meal"
    },
    "id": 169,
    "image": "",
    "category": "meals",
    "tag": "BEST SELLER",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    }
  },
  {
    "price": 255,
    "category": "meals",
    "order": 169,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "id": 170,
    "available": true,
    "tag": "",
    "name": {
      "en": "Grilled Kofta Meal",
      "ar": "Grilled Kofta Meal"
    },
    "image": ""
  },
  {
    "price": 195,
    "category": "meals",
    "order": 170,
    "available": true,
    "tag": "BEST SELLER",
    "id": 171,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "image": "",
    "name": {
      "en": "Chicken Fajita Meal",
      "ar": "Chicken Fajita Meal"
    }
  },
  {
    "id": 172,
    "image": "",
    "category": "meals",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "name": {
      "en": "Chicken Cordon Bleu",
      "ar": "Chicken Cordon Bleu"
    },
    "order": 171,
    "price": 310,
    "available": true,
    "tag": "NEW"
  },
  {
    "order": 172,
    "price": 230,
    "name": {
      "en": "Chicken Parmesan",
      "ar": "Chicken Parmesan"
    },
    "image": "",
    "tag": "SIGNATURE",
    "id": 173,
    "category": "meals",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true
  },
  {
    "order": 173,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "price": 260,
    "category": "meals",
    "name": {
      "en": "Grilled Fish Meal",
      "ar": "Grilled Fish Meal"
    },
    "available": true,
    "tag": "",
    "image": "",
    "id": 174
  },
  {
    "category": "meals",
    "id": 175,
    "price": 255,
    "order": 174,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "tag": "",
    "name": {
      "en": "Shrimp Meal",
      "ar": "Shrimp Meal"
    },
    "available": true,
    "image": ""
  },
  {
    "order": 175,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "price": 205,
    "category": "meals",
    "available": true,
    "name": {
      "en": "Mixed Grill",
      "ar": "Mixed Grill"
    },
    "tag": "BEST SELLER",
    "image": "",
    "id": 176
  },
  {
    "tag": "",
    "name": {
      "en": "Kids Chicken Burger",
      "ar": "Kids Chicken Burger"
    },
    "order": 176,
    "price": 135,
    "image": "",
    "id": 177,
    "category": "kids",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "available": true
  },
  {
    "category": "kids",
    "price": 120,
    "tag": "BEST SELLER",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "id": 178,
    "order": 177,
    "name": {
      "en": "Kids Cheeseburger",
      "ar": "Kids Cheeseburger"
    },
    "image": "",
    "available": true
  },
  {
    "category": "kids",
    "image": "",
    "available": true,
    "name": {
      "en": "Kids Crispy Chicken",
      "ar": "Kids Crispy Chicken"
    },
    "order": 178,
    "id": 179,
    "tag": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "price": 105
  },
  {
    "order": 179,
    "available": true,
    "price": 90,
    "name": {
      "en": "Chicken Nuggets",
      "ar": "Chicken Nuggets"
    },
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "tag": "",
    "image": "",
    "id": 180,
    "category": "kids"
  },
  {
    "tag": "",
    "category": "kids",
    "order": 180,
    "name": {
      "en": "Mini Pizza",
      "ar": "Mini Pizza"
    },
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "price": 80,
    "image": "",
    "id": 181
  },
  {
    "available": true,
    "category": "kids",
    "id": 182,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "image": "",
    "price": 80,
    "name": {
      "en": "Mini Pasta",
      "ar": "Mini Pasta"
    },
    "order": 181,
    "tag": ""
  },
  {
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "name": {
      "en": "Mini Pancakes",
      "ar": "Mini Pancakes"
    },
    "order": 182,
    "id": 183,
    "tag": "",
    "price": 95,
    "category": "kids",
    "available": true,
    "image": ""
  },
  {
    "order": 183,
    "id": 184,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "name": {
      "en": "Mini Waffle",
      "ar": "Mini Waffle"
    },
    "price": 130,
    "available": true,
    "category": "kids",
    "image": "",
    "tag": "NEW"
  },
  {
    "id": 185,
    "price": 120,
    "order": 184,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "available": true,
    "name": {
      "en": "Mini Grilled Cheese",
      "ar": "Mini Grilled Cheese"
    },
    "category": "kids",
    "image": "",
    "tag": ""
  },
  {
    "id": 186,
    "available": true,
    "image": "",
    "tag": "",
    "name": {
      "en": "Kids Hot Dog",
      "ar": "Kids Hot Dog"
    },
    "category": "kids",
    "price": 110,
    "order": 185,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "available": true,
    "id": 187,
    "image": "",
    "price": 135,
    "category": "kids",
    "order": 186,
    "name": {
      "en": "Mac & Cheese",
      "ar": "Mac & Cheese"
    },
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "tag": "NEW"
  },
  {
    "id": 188,
    "available": true,
    "order": 187,
    "name": {
      "en": "Kids Combo",
      "ar": "Kids Combo"
    },
    "price": 95,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "category": "kids",
    "image": "",
    "tag": ""
  },
  {
    "tag": "",
    "image": "",
    "category": "hotdrinks",
    "id": 189,
    "name": {
      "en": "Espresso",
      "ar": "Espresso"
    },
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "price": 55,
    "order": 188,
    "available": true
  },
  {
    "id": 190,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "image": "",
    "price": 45,
    "category": "hotdrinks",
    "name": {
      "en": "Double Espresso",
      "ar": "Double Espresso"
    },
    "order": 189,
    "available": true,
    "tag": "SIGNATURE"
  },
  {
    "id": 191,
    "available": true,
    "image": "",
    "tag": "",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "name": {
      "en": "Americano",
      "ar": "Americano"
    },
    "price": 70,
    "order": 190,
    "category": "hotdrinks"
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "id": 192,
    "image": "",
    "price": 75,
    "category": "hotdrinks",
    "order": 191,
    "name": {
      "en": "Cappuccino",
      "ar": "Cappuccino"
    },
    "available": true,
    "tag": ""
  },
  {
    "order": 192,
    "price": 60,
    "category": "hotdrinks",
    "name": {
      "en": "Café Latte",
      "ar": "Café Latte"
    },
    "available": true,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "tag": "",
    "image": "",
    "id": 193
  },
  {
    "image": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "price": 50,
    "available": true,
    "id": 194,
    "tag": "",
    "category": "hotdrinks",
    "order": 193,
    "name": {
      "en": "Flat White",
      "ar": "Flat White"
    }
  },
  {
    "tag": "",
    "available": true,
    "image": "",
    "category": "hotdrinks",
    "name": {
      "en": "Mocha",
      "ar": "Mocha"
    },
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "order": 194,
    "price": 45,
    "id": 195
  },
  {
    "price": 60,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "order": 195,
    "tag": "SIGNATURE",
    "available": true,
    "id": 196,
    "category": "hotdrinks",
    "image": "",
    "name": {
      "en": "Spanish Latte",
      "ar": "Spanish Latte"
    }
  },
  {
    "price": 80,
    "category": "hotdrinks",
    "order": 196,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "id": 197,
    "available": true,
    "tag": "",
    "name": {
      "en": "Caramel Latte",
      "ar": "Caramel Latte"
    },
    "image": ""
  },
  {
    "image": "",
    "available": true,
    "name": {
      "en": "Vanilla Latte",
      "ar": "Vanilla Latte"
    },
    "tag": "CHEF'S PICK",
    "id": 198,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "order": 197,
    "category": "hotdrinks",
    "price": 60
  },
  {
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "tag": "",
    "image": "",
    "available": true,
    "id": 199,
    "category": "hotdrinks",
    "name": {
      "en": "Hazelnut Latte",
      "ar": "Hazelnut Latte"
    },
    "price": 60,
    "order": 198
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "tag": "",
    "available": true,
    "image": "",
    "id": 200,
    "category": "hotdrinks",
    "name": {
      "en": "Pistachio Latte",
      "ar": "Pistachio Latte"
    },
    "price": 65,
    "order": 199
  },
  {
    "order": 200,
    "price": 65,
    "name": {
      "en": "Hot Chocolate",
      "ar": "Hot Chocolate"
    },
    "tag": "",
    "image": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "category": "hotdrinks",
    "available": true,
    "id": 201
  },
  {
    "category": "hotdrinks",
    "id": 202,
    "image": "",
    "tag": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "name": {
      "en": "Matcha Latte",
      "ar": "Matcha Latte"
    },
    "price": 75,
    "available": true,
    "order": 201
  },
  {
    "image": "",
    "tag": "",
    "name": {
      "en": "Chai Latte",
      "ar": "Chai Latte"
    },
    "available": true,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "id": 203,
    "category": "hotdrinks",
    "order": 202,
    "price": 70
  },
  {
    "price": 50,
    "id": 204,
    "tag": "",
    "order": 203,
    "available": true,
    "category": "hotdrinks",
    "name": {
      "en": "Turkish Coffee",
      "ar": "Turkish Coffee"
    },
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "image": ""
  },
  {
    "order": 204,
    "id": 205,
    "available": true,
    "name": {
      "en": "Iced Americano",
      "ar": "Iced Americano"
    },
    "category": "coldcoffee",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "price": 75,
    "image": "",
    "tag": "SIGNATURE"
  },
  {
    "price": 75,
    "order": 205,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "tag": "BEST SELLER",
    "available": true,
    "category": "coldcoffee",
    "id": 206,
    "image": "",
    "name": {
      "en": "Iced Latte",
      "ar": "Iced Latte"
    }
  },
  {
    "name": {
      "en": "Iced Spanish Latte",
      "ar": "Iced Spanish Latte"
    },
    "category": "coldcoffee",
    "image": "",
    "id": 207,
    "available": true,
    "tag": "",
    "order": 206,
    "price": 85,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    }
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "tag": "",
    "available": true,
    "image": "",
    "id": 208,
    "category": "coldcoffee",
    "name": {
      "en": "Iced Mocha",
      "ar": "Iced Mocha"
    },
    "price": 80,
    "order": 207
  },
  {
    "order": 208,
    "category": "coldcoffee",
    "price": 60,
    "name": {
      "en": "Iced Caramel Latte",
      "ar": "Iced Caramel Latte"
    },
    "id": 209,
    "available": true,
    "image": "",
    "tag": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    }
  },
  {
    "available": true,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "tag": "",
    "image": "",
    "id": 210,
    "name": {
      "en": "Iced Vanilla Latte",
      "ar": "Iced Vanilla Latte"
    },
    "price": 70,
    "category": "coldcoffee",
    "order": 209
  },
  {
    "id": 211,
    "price": 85,
    "order": 210,
    "available": true,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "name": {
      "en": "Iced Pistachio Latte",
      "ar": "Iced Pistachio Latte"
    },
    "category": "coldcoffee",
    "image": "",
    "tag": "BEST SELLER"
  },
  {
    "name": {
      "en": "Iced Matcha",
      "ar": "Iced Matcha"
    },
    "image": "",
    "tag": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "category": "coldcoffee",
    "available": true,
    "id": 212,
    "order": 211,
    "price": 70
  },
  {
    "id": 213,
    "name": {
      "en": "Cold Brew",
      "ar": "Cold Brew"
    },
    "image": "",
    "tag": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "order": 212,
    "available": true,
    "category": "coldcoffee",
    "price": 60
  },
  {
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "image": "",
    "available": true,
    "category": "coldcoffee",
    "price": 80,
    "id": 214,
    "tag": "",
    "order": 213,
    "name": {
      "en": "Vanilla Cold Brew",
      "ar": "Vanilla Cold Brew"
    }
  },
  {
    "price": 60,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "category": "coldcoffee",
    "order": 214,
    "id": 215,
    "tag": "",
    "available": true,
    "image": "",
    "name": {
      "en": "Caramel Cold Brew",
      "ar": "Caramel Cold Brew"
    }
  },
  {
    "price": 75,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "category": "coldcoffee",
    "order": 215,
    "id": 216,
    "tag": "",
    "available": true,
    "name": {
      "en": "Iced Cappuccino",
      "ar": "Iced Cappuccino"
    },
    "image": ""
  },
  {
    "id": 217,
    "order": 216,
    "name": {
      "en": "Signature Iced Coffee",
      "ar": "Signature Iced Coffee"
    },
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "price": 85,
    "available": true,
    "image": "",
    "category": "coldcoffee",
    "tag": ""
  },
  {
    "image": "",
    "available": true,
    "name": {
      "en": "Vanilla",
      "ar": "Vanilla"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "id": 218,
    "order": 217,
    "tag": "",
    "price": 105,
    "category": "milkshakes"
  },
  {
    "id": 219,
    "category": "milkshakes",
    "image": "",
    "tag": "",
    "name": {
      "en": "Chocolate",
      "ar": "Chocolate"
    },
    "price": 100,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "available": true,
    "order": 218
  },
  {
    "available": true,
    "category": "milkshakes",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "image": "",
    "price": 115,
    "id": 220,
    "tag": "",
    "order": 219,
    "name": {
      "en": "Strawberry",
      "ar": "Strawberry"
    }
  },
  {
    "name": {
      "en": "Oreo",
      "ar": "Oreo"
    },
    "category": "milkshakes",
    "order": 220,
    "id": 221,
    "available": true,
    "tag": "",
    "price": 95,
    "image": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    }
  },
  {
    "available": true,
    "image": "",
    "id": 222,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "name": {
      "en": "Lotus",
      "ar": "Lotus"
    },
    "order": 221,
    "category": "milkshakes",
    "tag": "",
    "price": 105
  },
  {
    "name": {
      "en": "Kinder",
      "ar": "Kinder"
    },
    "available": true,
    "image": "",
    "id": 223,
    "tag": "",
    "order": 222,
    "category": "milkshakes",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "price": 85
  },
  {
    "available": true,
    "category": "milkshakes",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "image": "",
    "price": 100,
    "id": 224,
    "tag": "",
    "order": 223,
    "name": {
      "en": "Nutella",
      "ar": "Nutella"
    }
  },
  {
    "available": true,
    "name": {
      "en": "Pistachio",
      "ar": "Pistachio"
    },
    "tag": "",
    "order": 224,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "price": 110,
    "image": "",
    "id": 225,
    "category": "milkshakes"
  },
  {
    "category": "milkshakes",
    "id": 226,
    "image": "",
    "price": 120,
    "order": 225,
    "tag": "",
    "name": {
      "en": "Caramel",
      "ar": "Caramel"
    },
    "available": true,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "category": "milkshakes",
    "tag": "",
    "available": true,
    "name": {
      "en": "Cookies & Cream",
      "ar": "Cookies & Cream"
    },
    "order": 226,
    "price": 125,
    "image": "",
    "id": 227
  },
  {
    "image": "",
    "tag": "",
    "name": {
      "en": "Brownie",
      "ar": "Brownie"
    },
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "category": "milkshakes",
    "order": 227,
    "price": 95,
    "id": 228,
    "available": true
  },
  {
    "available": true,
    "name": {
      "en": "Ferrero",
      "ar": "Ferrero"
    },
    "image": "",
    "id": 229,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "tag": "",
    "category": "milkshakes",
    "order": 228,
    "price": 105
  },
  {
    "image": "",
    "tag": "BEST SELLER",
    "category": "milkshakes",
    "name": {
      "en": "Mango",
      "ar": "Mango"
    },
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "order": 229,
    "available": true,
    "id": 230,
    "price": 110
  },
  {
    "price": 100,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "order": 230,
    "tag": "",
    "category": "milkshakes",
    "available": true,
    "image": "",
    "id": 231,
    "name": {
      "en": "Signature Milkshake",
      "ar": "Signature Milkshake"
    }
  },
  {
    "name": {
      "en": "Coffee Frappe",
      "ar": "Coffee Frappe"
    },
    "available": true,
    "image": "",
    "id": 232,
    "tag": "",
    "order": 231,
    "category": "frappes",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "price": 95
  },
  {
    "id": 233,
    "available": true,
    "image": "",
    "price": 90,
    "order": 232,
    "name": {
      "en": "Caramel Frappe",
      "ar": "Caramel Frappe"
    },
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "category": "frappes",
    "tag": "BEST SELLER"
  },
  {
    "id": 234,
    "image": "",
    "available": true,
    "tag": "",
    "name": {
      "en": "Mocha Frappe",
      "ar": "Mocha Frappe"
    },
    "price": 95,
    "category": "frappes",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "order": 233
  },
  {
    "price": 85,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "tag": "",
    "id": 235,
    "order": 234,
    "available": true,
    "category": "frappes",
    "name": {
      "en": "Vanilla Frappe",
      "ar": "Vanilla Frappe"
    },
    "image": ""
  },
  {
    "available": true,
    "id": 236,
    "price": 95,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "order": 235,
    "category": "frappes",
    "name": {
      "en": "Hazelnut Frappe",
      "ar": "Hazelnut Frappe"
    },
    "image": "",
    "tag": ""
  },
  {
    "image": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "name": {
      "en": "Spanish Frappe",
      "ar": "Spanish Frappe"
    },
    "order": 236,
    "available": true,
    "tag": "",
    "category": "frappes",
    "price": 110,
    "id": 237
  },
  {
    "name": {
      "en": "Oreo Frappe",
      "ar": "Oreo Frappe"
    },
    "image": "",
    "id": 238,
    "available": true,
    "category": "frappes",
    "tag": "NEW",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "order": 237,
    "price": 95
  },
  {
    "price": 80,
    "category": "frappes",
    "order": 238,
    "id": 239,
    "tag": "",
    "name": {
      "en": "Lotus Frappe",
      "ar": "Lotus Frappe"
    },
    "available": true,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "image": ""
  },
  {
    "image": "",
    "tag": "",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "name": {
      "en": "Kinder Frappe",
      "ar": "Kinder Frappe"
    },
    "category": "frappes",
    "order": 239,
    "price": 85,
    "id": 240,
    "available": true
  },
  {
    "id": 241,
    "price": 95,
    "available": true,
    "order": 240,
    "tag": "SIGNATURE",
    "name": {
      "en": "Pistachio Frappe",
      "ar": "Pistachio Frappe"
    },
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "category": "frappes",
    "image": ""
  },
  {
    "available": true,
    "price": 115,
    "id": 242,
    "order": 241,
    "category": "frappes",
    "name": {
      "en": "Coconut Frappe",
      "ar": "Coconut Frappe"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "tag": "BEST SELLER",
    "image": ""
  },
  {
    "order": 242,
    "category": "frappes",
    "price": 95,
    "name": {
      "en": "Signature Frappe",
      "ar": "Signature Frappe"
    },
    "available": true,
    "id": 243,
    "image": "",
    "tag": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    }
  },
  {
    "name": {
      "en": "Strawberry Smoothie",
      "ar": "Strawberry Smoothie"
    },
    "order": 243,
    "tag": "",
    "category": "smoothies",
    "id": 244,
    "price": 80,
    "available": true,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "image": ""
  },
  {
    "category": "smoothies",
    "image": "",
    "id": 245,
    "price": 110,
    "tag": "",
    "order": 244,
    "name": {
      "en": "Mango Smoothie",
      "ar": "Mango Smoothie"
    },
    "available": true,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    }
  },
  {
    "price": 100,
    "order": 245,
    "id": 246,
    "category": "smoothies",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "available": true,
    "tag": "",
    "name": {
      "en": "Banana Smoothie",
      "ar": "Banana Smoothie"
    },
    "image": ""
  },
  {
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "image": "",
    "name": {
      "en": "Blueberry Smoothie",
      "ar": "Blueberry Smoothie"
    },
    "id": 247,
    "order": 246,
    "price": 110,
    "tag": "",
    "available": true,
    "category": "smoothies"
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "image": "",
    "name": {
      "en": "Mixed Berry Smoothie",
      "ar": "Mixed Berry Smoothie"
    },
    "id": 248,
    "order": 247,
    "tag": "",
    "price": 105,
    "available": true,
    "category": "smoothies"
  },
  {
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "tag": "",
    "available": true,
    "image": "",
    "price": 110,
    "name": {
      "en": "Peach Smoothie",
      "ar": "Peach Smoothie"
    },
    "id": 249,
    "category": "smoothies",
    "order": 248
  },
  {
    "available": true,
    "tag": "",
    "category": "smoothies",
    "order": 249,
    "name": {
      "en": "Pineapple Smoothie",
      "ar": "Pineapple Smoothie"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "price": 110,
    "image": "",
    "id": 250
  },
  {
    "id": 251,
    "price": 90,
    "order": 250,
    "tag": "",
    "name": {
      "en": "Avocado Smoothie",
      "ar": "Avocado Smoothie"
    },
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "image": "",
    "category": "smoothies",
    "available": true
  },
  {
    "tag": "",
    "price": 95,
    "category": "smoothies",
    "order": 251,
    "available": true,
    "name": {
      "en": "Tropical Smoothie",
      "ar": "Tropical Smoothie"
    },
    "image": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "id": 252
  },
  {
    "tag": "",
    "price": 110,
    "available": true,
    "order": 252,
    "name": {
      "en": "Green Smoothie",
      "ar": "Green Smoothie"
    },
    "image": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "category": "smoothies",
    "id": 253
  },
  {
    "id": 254,
    "price": 95,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "category": "smoothies",
    "order": 253,
    "tag": "",
    "name": {
      "en": "Signature Smoothie",
      "ar": "Signature Smoothie"
    },
    "available": true,
    "image": ""
  },
  {
    "tag": "",
    "order": 254,
    "name": {
      "en": "Orange Juice",
      "ar": "Orange Juice"
    },
    "price": 70,
    "image": "",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "id": 255,
    "category": "juices",
    "available": true
  },
  {
    "price": 55,
    "id": 256,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "category": "juices",
    "tag": "",
    "order": 255,
    "name": {
      "en": "Lemon Mint",
      "ar": "Lemon Mint"
    },
    "available": true,
    "image": ""
  },
  {
    "category": "juices",
    "image": "",
    "tag": "BEST SELLER",
    "price": 65,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "order": 256,
    "available": true,
    "name": {
      "en": "Mango Juice",
      "ar": "Mango Juice"
    },
    "id": 257
  },
  {
    "image": "",
    "category": "juices",
    "tag": "CHEF'S PICK",
    "name": {
      "en": "Strawberry Juice",
      "ar": "Strawberry Juice"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "order": 257,
    "id": 258,
    "available": true,
    "price": 50
  },
  {
    "category": "juices",
    "name": {
      "en": "Watermelon Juice",
      "ar": "Watermelon Juice"
    },
    "id": 259,
    "order": 258,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "price": 70,
    "tag": "NEW",
    "available": true,
    "image": ""
  },
  {
    "tag": "BEST SELLER",
    "image": "",
    "id": 260,
    "name": {
      "en": "Pineapple Juice",
      "ar": "Pineapple Juice"
    },
    "price": 50,
    "available": true,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "order": 259,
    "category": "juices"
  },
  {
    "available": true,
    "image": "",
    "id": 261,
    "name": {
      "en": "Guava Juice",
      "ar": "Guava Juice"
    },
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "order": 260,
    "price": 60,
    "category": "juices",
    "tag": ""
  },
  {
    "tag": "",
    "image": "",
    "id": 262,
    "available": true,
    "name": {
      "en": "Passion Fruit",
      "ar": "Passion Fruit"
    },
    "price": 60,
    "category": "juices",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "order": 261
  },
  {
    "available": true,
    "tag": "",
    "price": 50,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "order": 262,
    "name": {
      "en": "Pomegranate Juice",
      "ar": "Pomegranate Juice"
    },
    "id": 263,
    "image": "",
    "category": "juices"
  },
  {
    "tag": "",
    "available": true,
    "price": 60,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "order": 263,
    "name": {
      "en": "Carrot Juice",
      "ar": "Carrot Juice"
    },
    "image": "",
    "id": 264,
    "category": "juices"
  },
  {
    "image": "",
    "name": {
      "en": "Avocado Milk",
      "ar": "Avocado Milk"
    },
    "tag": "",
    "order": 264,
    "category": "juices",
    "price": 65,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "available": true,
    "id": 265
  },
  {
    "id": 266,
    "price": 45,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "available": true,
    "order": 265,
    "name": {
      "en": "Signature Fresh Juice",
      "ar": "Signature Fresh Juice"
    },
    "category": "juices",
    "image": "",
    "tag": ""
  },
  {
    "category": "cocktails",
    "id": 267,
    "available": true,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "image": "",
    "price": 100,
    "order": 266,
    "name": {
      "en": "Blue Lagoon",
      "ar": "Blue Lagoon"
    },
    "tag": ""
  },
  {
    "category": "cocktails",
    "order": 267,
    "available": true,
    "price": 95,
    "name": {
      "en": "Shirley Temple",
      "ar": "Shirley Temple"
    },
    "id": 268,
    "image": "",
    "tag": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    }
  },
  {
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "image": "",
    "price": 100,
    "tag": "",
    "category": "cocktails",
    "id": 269,
    "order": 268,
    "available": true,
    "name": {
      "en": "Virgin Mojito",
      "ar": "Virgin Mojito"
    }
  },
  {
    "category": "cocktails",
    "tag": "",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "available": true,
    "order": 269,
    "name": {
      "en": "Strawberry Mojito",
      "ar": "Strawberry Mojito"
    },
    "price": 100,
    "image": "",
    "id": 270
  },
  {
    "order": 270,
    "id": 271,
    "name": {
      "en": "Mango Mojito",
      "ar": "Mango Mojito"
    },
    "price": 85,
    "category": "cocktails",
    "image": "",
    "available": true,
    "tag": "",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    }
  },
  {
    "order": 271,
    "id": 272,
    "name": {
      "en": "Passion Fruit Mojito",
      "ar": "Passion Fruit Mojito"
    },
    "price": 90,
    "category": "cocktails",
    "image": "",
    "available": true,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "tag": ""
  },
  {
    "tag": "",
    "category": "cocktails",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "name": {
      "en": "Blueberry Mojito",
      "ar": "Blueberry Mojito"
    },
    "order": 272,
    "price": 70,
    "image": "",
    "available": true,
    "id": 273
  },
  {
    "name": {
      "en": "Strawberry Lemonade",
      "ar": "Strawberry Lemonade"
    },
    "image": "",
    "id": 274,
    "tag": "",
    "available": true,
    "order": 273,
    "category": "cocktails",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "price": 100
  },
  {
    "id": 275,
    "category": "cocktails",
    "available": true,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "image": "",
    "price": 105,
    "name": {
      "en": "Raspberry Lemonade",
      "ar": "Raspberry Lemonade"
    },
    "order": 274,
    "tag": ""
  },
  {
    "available": true,
    "id": 276,
    "image": "",
    "name": {
      "en": "Tropical Mix",
      "ar": "Tropical Mix"
    },
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "order": 275,
    "category": "cocktails",
    "price": 70,
    "tag": ""
  },
  {
    "name": {
      "en": "Berry Blast",
      "ar": "Berry Blast"
    },
    "image": "",
    "id": 277,
    "tag": "BEST SELLER",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "order": 276,
    "category": "cocktails",
    "available": true,
    "price": 70
  },
  {
    "image": "",
    "available": true,
    "name": {
      "en": "Signature Mocktail",
      "ar": "Signature Mocktail"
    },
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "tag": "NEW",
    "order": 277,
    "price": 100,
    "id": 278,
    "category": "cocktails"
  },
  {
    "available": true,
    "id": 279,
    "image": "",
    "name": {
      "en": "Classic Mojito",
      "ar": "Classic Mojito"
    },
    "order": 278,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "price": 110,
    "category": "mojitos",
    "tag": "SIGNATURE"
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "category": "mojitos",
    "available": true,
    "image": "",
    "price": 95,
    "tag": "",
    "order": 279,
    "id": 280,
    "name": {
      "en": "Mint Mojito",
      "ar": "Mint Mojito"
    }
  },
  {
    "price": 90,
    "tag": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "id": 281,
    "order": 280,
    "available": true,
    "category": "mojitos",
    "name": {
      "en": "Strawberry Mojito",
      "ar": "Strawberry Mojito"
    },
    "image": ""
  },
  {
    "order": 281,
    "category": "mojitos",
    "price": 100,
    "name": {
      "en": "Mango Mojito",
      "ar": "Mango Mojito"
    },
    "available": true,
    "id": 282,
    "image": "",
    "tag": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "id": 283,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "category": "mojitos",
    "image": "",
    "name": {
      "en": "Passion Fruit Mojito",
      "ar": "Passion Fruit Mojito"
    },
    "order": 282,
    "price": 105,
    "available": true,
    "tag": ""
  },
  {
    "price": 105,
    "order": 283,
    "available": true,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "id": 284,
    "tag": "",
    "image": "",
    "category": "mojitos",
    "name": {
      "en": "Blueberry Mojito",
      "ar": "Blueberry Mojito"
    }
  },
  {
    "id": 285,
    "available": true,
    "image": "",
    "category": "mojitos",
    "price": 80,
    "name": {
      "en": "Peach Mojito",
      "ar": "Peach Mojito"
    },
    "order": 284,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "tag": ""
  },
  {
    "category": "mojitos",
    "image": "",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "name": {
      "en": "Watermelon Mojito",
      "ar": "Watermelon Mojito"
    },
    "id": 286,
    "order": 285,
    "tag": "",
    "price": 75,
    "available": true
  },
  {
    "id": 287,
    "price": 100,
    "order": 286,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "available": true,
    "name": {
      "en": "Pineapple Mojito",
      "ar": "Pineapple Mojito"
    },
    "category": "mojitos",
    "tag": "CHEF'S PICK",
    "image": ""
  },
  {
    "price": 80,
    "id": 288,
    "order": 287,
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "available": true,
    "name": {
      "en": "Green Apple Mojito",
      "ar": "Green Apple Mojito"
    },
    "category": "mojitos",
    "tag": "",
    "image": ""
  },
  {
    "image": "",
    "name": {
      "en": "Berry Mojito",
      "ar": "Berry Mojito"
    },
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "order": 288,
    "id": 289,
    "tag": "",
    "category": "mojitos",
    "price": 75,
    "available": true
  },
  {
    "image": "",
    "category": "mojitos",
    "name": {
      "en": "Signature Mojito",
      "ar": "Signature Mojito"
    },
    "order": 289,
    "id": 290,
    "tag": "SIGNATURE",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "price": 90,
    "available": true
  },
  {
    "category": "softdrinks",
    "available": true,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "price": 30,
    "id": 291,
    "tag": "",
    "order": 290,
    "name": {
      "en": "Coca-Cola",
      "ar": "Coca-Cola"
    },
    "image": ""
  },
  {
    "price": 35,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "order": 291,
    "available": true,
    "tag": "NEW",
    "id": 292,
    "name": {
      "en": "Coca-Cola Zero",
      "ar": "Coca-Cola Zero"
    },
    "image": "",
    "category": "softdrinks"
  },
  {
    "tag": "NEW",
    "available": true,
    "image": "",
    "category": "softdrinks",
    "name": {
      "en": "Pepsi",
      "ar": "Pepsi"
    },
    "price": 55,
    "id": 293,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "order": 292
  },
  {
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "image": "",
    "name": {
      "en": "7UP",
      "ar": "7UP"
    },
    "tag": "",
    "category": "softdrinks",
    "id": 294,
    "available": true,
    "order": 293,
    "price": 35
  },
  {
    "tag": "",
    "available": true,
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "image": "",
    "name": {
      "en": "Sprite",
      "ar": "Sprite"
    },
    "id": 295,
    "price": 40,
    "category": "softdrinks",
    "order": 294
  },
  {
    "available": true,
    "category": "softdrinks",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "price": 35,
    "id": 296,
    "tag": "",
    "order": 295,
    "name": {
      "en": "Fanta Orange",
      "ar": "Fanta Orange"
    },
    "image": ""
  },
  {
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "price": 55,
    "available": true,
    "order": 296,
    "id": 297,
    "category": "softdrinks",
    "tag": "",
    "image": "",
    "name": {
      "en": "Schweppes",
      "ar": "Schweppes"
    }
  },
  {
    "image": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "name": {
      "en": "Tonic Water",
      "ar": "Tonic Water"
    },
    "id": 298,
    "category": "softdrinks",
    "order": 297,
    "tag": "",
    "price": 35,
    "available": true
  },
  {
    "id": 299,
    "image": "",
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "tag": "",
    "name": {
      "en": "Sparkling Water",
      "ar": "Sparkling Water"
    },
    "category": "softdrinks",
    "price": 30,
    "available": true,
    "order": 298
  },
  {
    "available": true,
    "tag": "",
    "price": 40,
    "category": "softdrinks",
    "order": 299,
    "name": {
      "en": "Red Bull",
      "ar": "Red Bull"
    },
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "image": "",
    "id": 300
  },
  {
    "price": 45,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "tag": "",
    "category": "softdrinks",
    "order": 300,
    "id": 301,
    "name": {
      "en": "Iced Tea",
      "ar": "Iced Tea"
    },
    "image": ""
  },
  {
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "tag": "SIGNATURE",
    "image": "",
    "available": true,
    "price": 55,
    "name": {
      "en": "Peach Iced Tea",
      "ar": "Peach Iced Tea"
    },
    "id": 302,
    "category": "softdrinks",
    "order": 301
  },
  {
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "image": "",
    "price": 130,
    "id": 303,
    "available": true,
    "tag": "",
    "category": "desserts",
    "order": 302,
    "name": {
      "en": "Chocolate Cake",
      "ar": "Chocolate Cake"
    }
  },
  {
    "order": 303,
    "category": "desserts",
    "price": 135,
    "name": {
      "en": "Red Velvet Cake",
      "ar": "Red Velvet Cake"
    },
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "id": 304,
    "image": "",
    "tag": "CHEF'S PICK",
    "available": true
  },
  {
    "name": {
      "en": "Cheesecake",
      "ar": "Cheesecake"
    },
    "image": "",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "tag": "",
    "category": "desserts",
    "available": true,
    "id": 305,
    "order": 304,
    "price": 140
  },
  {
    "image": "",
    "name": {
      "en": "Lotus Cheesecake",
      "ar": "Lotus Cheesecake"
    },
    "tag": "",
    "available": true,
    "id": 306,
    "category": "desserts",
    "order": 305,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "price": 135
  },
  {
    "id": 307,
    "category": "desserts",
    "image": "",
    "price": 90,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "order": 306,
    "available": true,
    "tag": "",
    "name": {
      "en": "Brownie",
      "ar": "Brownie"
    }
  },
  {
    "id": 308,
    "price": 130,
    "order": 307,
    "tag": "",
    "name": {
      "en": "Molten Lava Cake",
      "ar": "Molten Lava Cake"
    },
    "category": "desserts",
    "image": "",
    "available": true,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    }
  },
  {
    "name": {
      "en": "Tiramisu",
      "ar": "Tiramisu"
    },
    "image": "",
    "id": 309,
    "tag": "",
    "category": "desserts",
    "order": 308,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "price": 110,
    "available": true
  },
  {
    "order": 309,
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "name": {
      "en": "Crème Brûlée",
      "ar": "Crème Brûlée"
    },
    "price": 135,
    "id": 310,
    "image": "",
    "available": true,
    "tag": "",
    "category": "desserts"
  },
  {
    "name": {
      "en": "Apple Pie",
      "ar": "Apple Pie"
    },
    "image": "",
    "id": 311,
    "tag": "",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "available": true,
    "order": 310,
    "category": "desserts",
    "price": 125
  },
  {
    "tag": "",
    "price": 85,
    "order": 311,
    "name": {
      "en": "Chocolate Tart",
      "ar": "Chocolate Tart"
    },
    "category": "desserts",
    "image": "",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "available": true,
    "id": 312
  },
  {
    "id": 313,
    "price": 120,
    "order": 312,
    "tag": "NEW",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "name": {
      "en": "Lotus Cake",
      "ar": "Lotus Cake"
    },
    "category": "desserts",
    "image": "",
    "available": true
  },
  {
    "order": 313,
    "category": "desserts",
    "name": {
      "en": "Chocolate Mousse",
      "ar": "Chocolate Mousse"
    },
    "price": 110,
    "available": true,
    "id": 314,
    "image": "",
    "tag": "",
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "name": {
      "en": "Panna Cotta",
      "ar": "Panna Cotta"
    },
    "category": "desserts",
    "order": 314,
    "id": 315,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "tag": "",
    "price": 120,
    "image": "",
    "available": true
  },
  {
    "order": 315,
    "category": "desserts",
    "id": 316,
    "name": {
      "en": "Signature Dessert",
      "ar": "Signature Dessert"
    },
    "price": 115,
    "available": true,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "image": "",
    "tag": "SIGNATURE"
  },
  {
    "name": {
      "en": "Vanilla",
      "ar": "Vanilla"
    },
    "order": 316,
    "tag": "",
    "category": "icecream",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "available": true,
    "id": 317,
    "price": 75,
    "image": ""
  },
  {
    "tag": "",
    "image": "",
    "name": {
      "en": "Chocolate",
      "ar": "Chocolate"
    },
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "available": true,
    "category": "icecream",
    "order": 317,
    "price": 90,
    "id": 318
  },
  {
    "name": {
      "en": "Strawberry",
      "ar": "Strawberry"
    },
    "id": 319,
    "available": true,
    "order": 318,
    "category": "icecream",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "tag": "",
    "price": 75,
    "image": ""
  },
  {
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "category": "icecream",
    "image": "",
    "id": 320,
    "available": true,
    "name": {
      "en": "Mango",
      "ar": "Mango"
    },
    "order": 319,
    "price": 70,
    "tag": ""
  },
  {
    "tag": "",
    "available": true,
    "image": "",
    "category": "icecream",
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "price": 60,
    "name": {
      "en": "Pistachio",
      "ar": "Pistachio"
    },
    "id": 321,
    "order": 320
  },
  {
    "id": 322,
    "available": true,
    "image": "",
    "tag": "CHEF'S PICK",
    "name": {
      "en": "Caramel",
      "ar": "Caramel"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "price": 90,
    "order": 321,
    "category": "icecream"
  },
  {
    "category": "icecream",
    "price": 90,
    "order": 322,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "tag": "",
    "id": 323,
    "available": true,
    "image": "",
    "name": {
      "en": "Cookies & Cream",
      "ar": "Cookies & Cream"
    }
  },
  {
    "order": 323,
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "category": "icecream",
    "price": 85,
    "name": {
      "en": "Oreo",
      "ar": "Oreo"
    },
    "tag": "",
    "image": "",
    "id": 324,
    "available": true
  },
  {
    "image": "",
    "name": {
      "en": "Lotus",
      "ar": "Lotus"
    },
    "available": true,
    "category": "icecream",
    "order": 324,
    "tag": "",
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    },
    "id": 325,
    "price": 90
  },
  {
    "id": 326,
    "price": 65,
    "order": 325,
    "available": true,
    "name": {
      "en": "Kinder",
      "ar": "Kinder"
    },
    "category": "icecream",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "image": "",
    "tag": ""
  },
  {
    "category": "icecream",
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "tag": "",
    "image": "",
    "id": 327,
    "available": true,
    "name": {
      "en": "Salted Caramel",
      "ar": "Salted Caramel"
    },
    "price": 80,
    "order": 326
  },
  {
    "category": "icecream",
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "image": "",
    "tag": "",
    "id": 328,
    "available": true,
    "name": {
      "en": "Mixed Flavors",
      "ar": "Mixed Flavors"
    },
    "price": 80,
    "order": 327
  },
  {
    "id": 329,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "available": true,
    "image": "",
    "price": 90,
    "category": "boba",
    "order": 328,
    "name": {
      "en": "Classic Milk Tea",
      "ar": "Classic Milk Tea"
    },
    "tag": ""
  },
  {
    "category": "boba",
    "name": {
      "en": "Brown Sugar Milk Tea",
      "ar": "Brown Sugar Milk Tea"
    },
    "order": 329,
    "id": 330,
    "tag": "",
    "price": 80,
    "image": "",
    "available": true,
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    }
  },
  {
    "order": 330,
    "price": 90,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "id": 331,
    "name": {
      "en": "Taro Milk Tea",
      "ar": "Taro Milk Tea"
    },
    "category": "boba",
    "image": "",
    "tag": "",
    "available": true
  },
  {
    "price": 70,
    "tag": "CHEF'S PICK",
    "available": true,
    "category": "boba",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    },
    "order": 331,
    "id": 332,
    "name": {
      "en": "Matcha Milk Tea",
      "ar": "Matcha Milk Tea"
    },
    "image": ""
  },
  {
    "category": "boba",
    "image": "",
    "available": true,
    "name": {
      "en": "Thai Milk Tea",
      "ar": "Thai Milk Tea"
    },
    "order": 332,
    "tag": "",
    "id": 333,
    "price": 85,
    "description": {
      "en": "Our take on a classic, elevated with premium ingredients.",
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة."
    }
  },
  {
    "available": true,
    "price": 100,
    "id": 334,
    "order": 333,
    "category": "boba",
    "description": {
      "en": "Hand-prepared, plated fresh, and full of flavor.",
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة."
    },
    "name": {
      "en": "Chocolate Milk Tea",
      "ar": "Chocolate Milk Tea"
    },
    "tag": "CHEF'S PICK",
    "image": ""
  },
  {
    "description": {
      "en": "A comforting classic done the Super Menu way.",
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو."
    },
    "price": 85,
    "order": 334,
    "id": 335,
    "category": "boba",
    "tag": "",
    "available": true,
    "name": {
      "en": "Strawberry Milk Tea",
      "ar": "Strawberry Milk Tea"
    },
    "image": ""
  },
  {
    "available": true,
    "price": 85,
    "id": 336,
    "order": 335,
    "category": "boba",
    "name": {
      "en": "Mango Milk Tea",
      "ar": "Mango Milk Tea"
    },
    "description": {
      "en": "Made fresh to order with our house recipe — a guest favorite.",
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا."
    },
    "tag": "",
    "image": ""
  },
  {
    "price": 70,
    "description": {
      "en": "A signature dish, plated the way our chefs love to serve it.",
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص."
    },
    "order": 336,
    "id": 337,
    "category": "boba",
    "tag": "BEST SELLER",
    "name": {
      "en": "Passion Fruit Tea",
      "ar": "Passion Fruit Tea"
    },
    "available": true,
    "image": ""
  },
  {
    "tag": "",
    "category": "boba",
    "image": "",
    "available": true,
    "price": 75,
    "name": {
      "en": "Peach Tea",
      "ar": "Peach Tea"
    },
    "description": {
      "en": "Rich in flavor, generous in portion, finished with a house touch.",
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم."
    },
    "id": 338,
    "order": 337
  },
  {
    "name": {
      "en": "Lychee Tea",
      "ar": "Lychee Tea"
    },
    "image": "",
    "id": 339,
    "category": "boba",
    "tag": "",
    "order": 338,
    "description": {
      "en": "Crafted daily from carefully sourced ingredients.",
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية."
    },
    "available": true,
    "price": 75
  },
  {
    "name": {
      "en": "Signature Boba",
      "ar": "Signature Boba"
    },
    "order": 339,
    "category": "boba",
    "id": 340,
    "tag": "",
    "available": true,
    "price": 90,
    "image": "",
    "description": {
      "en": "A crowd favorite — balanced, bold, and satisfying.",
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي."
    }
  }
];

const DEFAULT_SETTINGS = {
  "name": {
    "ar": "سوبر منيو",
    "en": "Super Menu"
  },
  "instagram": "https://www.instagram.com/MarwanMaherH",
  "heroVideoEnabled": true,
  "whatsapp": "01282288766",
  "heroVideo": "",
  "location": "",
  "phone": "01282288766",
  "logo": "",
  "tagline": {
    "ar": "أكل شهي، تجربة مختلفة",
    "en": "Great food, a different experience"
  }
};

/* ---------------------------------------------------------
   DATA STATE
--------------------------------------------------------- */
let categories = [...DEFAULT_CATEGORIES];
let menuItems = [...DEFAULT_ITEMS];
let settings = { ...DEFAULT_SETTINGS };

const CACHE_KEY = "superMenuCache";
const CACHE_MINUTES = 5;

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (Date.now() - cached.ts > CACHE_MINUTES * 60 * 1000) return null;
    return cached;
  } catch { return null; }
}

function writeCache() {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), categories, menuItems, settings })); }
  catch { /* ignore */ }
}

async function loadMenuData() {
  const cached = readCache();
  if (cached) {
    categories = cached.categories;
    menuItems = cached.menuItems;
    settings = cached.settings;
    return;
  }

  try {
    const [catSnap, itemSnap, settingsSnap] = await Promise.all([
      getDocs(collection(db, "categories")),
      getDocs(collection(db, "items")),
      getDoc(doc(db, "settings", "main"))
    ]);

    const cats = catSnap.docs.map(d => d.data()).sort((a, b) => a.order - b.order);
    const items = itemSnap.docs.map(d => d.data()).filter(item => item.available !== false).sort((a, b) => a.order - b.order);
    const sets = settingsSnap.exists() ? settingsSnap.data() : {};

    if (cats.length) categories = cats;
    if (items.length) menuItems = items;
    if (Object.keys(sets).length) settings = sets;

    writeCache();
  } catch (err) {
    console.error("Firebase sync failed (using defaults):", err);
  }
}

function applySettings() {
  if (settings.name?.ar) translations.ar.restaurant_name = settings.name.ar;
  if (settings.name?.en) translations.en.restaurant_name = settings.name.en;
  if (settings.tagline?.ar) translations.ar.restaurant_tagline = settings.tagline.ar;
  if (settings.tagline?.en) translations.en.restaurant_tagline = settings.tagline.en;

  const callLink = document.getElementById("call-link");
  if (callLink) {
    if (settings.phone) callLink.href = "tel:" + settings.phone;
    else callLink.style.display = "none";
  }

  const waLink = document.getElementById("whatsapp-link");
  if (waLink) {
    if (settings.whatsapp) waLink.href = "https://wa.me/" + settings.whatsapp;
    else waLink.style.display = "none";
  }

  const igLink = document.getElementById("instagram-link");
  if (igLink) {
    if (settings.instagram) igLink.href = settings.instagram;
    else igLink.style.display = "none";
  }

  const locLink = document.getElementById("location-link");
  if (locLink) {
    if (settings.location) locLink.href = settings.location;
    else locLink.style.display = "none";
  }

  const video = document.getElementById("header-video");
  if (video) {
    if (settings.heroVideoEnabled === false) {
      video.style.display = "none";
    } else if (settings.heroVideo) {
      const source = document.getElementById("header-video-src");
      source.src = settings.heroVideo;
      video.load();
      video.play().catch(() => {});
    }
  }
}

/* ---------------------------------------------------------
   1) TRANSLATIONS
--------------------------------------------------------- */
const translations = {
  ar: {
    restaurant_name: "سوبر منيو",
    restaurant_tagline: "أكل شهي، تجربة مختلفة",
    eyebrow: "منيو رقمي تفاعلي",
    search_placeholder: "ابحث عن صنف...",
    no_results: "مفيش نتائج مطابقة لبحثك",
    footer_made: "قم بإنشاء قائمة طعام مثل هذه لمطعمك",
    cat_all: "الكل",
    currency: "ج.م",
    items_count_suffix: "صنف",
    tap_to_browse: "اضغط للتصفح",
    back_to_categories: "الأقسام",
    search_results: "نتائج البحث",
    favorites_title: "المفضلة",
    added_fav: "تمت الإضافة للمفضلة",
    removed_fav: "تمت الإزالة من المفضلة",
    order_hint: "اطلب من فريق الخدمة",
    view_categories: "تصفح كل الأقسام",
  },
  en: {
    restaurant_name: "Super Menu",
    restaurant_tagline: "Great food, a different experience",
    eyebrow: "Interactive Digital Menu",
    search_placeholder: "Search for a dish...",
    no_results: "No items match your search",
    footer_made: "Create a menu like this for your restaurant",
    cat_all: "All",
    currency: "EGP",
    items_count_suffix: "items",
    tap_to_browse: "Tap to browse",
    back_to_categories: "Categories",
    search_results: "Search results",
    favorites_title: "Favorites",
    added_fav: "Added to favorites",
    removed_fav: "Removed from favorites",
    order_hint: "Ask your server to order",
    view_categories: "Browse all categories",
    maroo: "Developed by Marwan Maher"
  }
};

/* ---------------------------------------------------------
   2) STATE
--------------------------------------------------------- */
let state = {
  lang: localStorage.getItem("sm_lang") || "ar",
  theme: localStorage.getItem("sm_theme") || "light",
  view: "home",
  activeCategory: "all",
  searchQuery: "",
  favorites: JSON.parse(localStorage.getItem("sm_favorites") || "[]"),
  showFavoritesOnly: false
};

/* ---------------------------------------------------------
   3) HELPERS
--------------------------------------------------------- */
function categoryMeta(catId) {
  return categories.find(c => c.id === catId) || {};
}
function tagClassOf(tag) {
  if (!tag) return "";
  const t = tag.toUpperCase();
  if (t.includes("NEW")) return "tag-new";
  if (t.includes("SIGNATURE")) return "tag-signature";
  if (t.includes("CHEF")) return "tag-chefs-pick";
  return "";
}

/* ---------------------------------------------------------
   4) DOM REFS
--------------------------------------------------------- */
const $ = (sel) => document.querySelector(sel);
const menuContainer = $("#menu-container");
const emptyState = $("#empty-state");
const categoriesNav = $("#categories");
const searchInput = $("#search-input");
const clearSearchBtn = $("#clear-search");
const favFilterBtn = $("#fav-filter-btn");
const langToggle = $("#lang-toggle");
const themeToggle = $("#theme-toggle");
const modal = $("#product-modal");
const scrollTopBtn = $("#scroll-top-btn");
const toastEl = $("#toast");

let toastTimer = null;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

/* ---------------------------------------------------------
   5) INIT
--------------------------------------------------------- */
function init() {
  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.setAttribute("lang", state.lang);
  document.documentElement.setAttribute("dir", state.lang === "ar" ? "rtl" : "ltr");
  $(".lang-current").textContent = state.lang === "ar" ? "EN" : "AR";

  renderCategories();
  applyTranslations();
  renderMenu();

  searchInput.addEventListener("input", onSearchInput);
  clearSearchBtn.addEventListener("click", clearSearch);
  favFilterBtn.addEventListener("click", toggleFavFilter);
  langToggle.addEventListener("click", toggleLanguage);
  themeToggle.addEventListener("click", toggleTheme);
  $("#modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  $("#modal-fav").addEventListener("click", () => toggleFavorite(currentModalId, true));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  window.addEventListener("scroll", onWindowScroll, { passive: true });
}

function onWindowScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  scrollTopBtn.classList.toggle("show", y > 420);
  categoriesNav.classList.toggle("scrolled", y > 6);

  const heroImg = document.querySelector(".cat-hero-img");
  if (heroImg) {
    const hero = heroImg.closest(".cat-hero");
    const rect = hero.getBoundingClientRect();
    const offset = rect.top * -0.12;
    heroImg.style.transform = `translateY(${offset}px)`;
  }
}

/* ---------------------------------------------------------
   6) SCROLL REVEAL
--------------------------------------------------------- */
let revealObserver = null;
function setupRevealObserver() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
}
function observeReveal(selector) {
  document.querySelectorAll(selector).forEach(el => revealObserver.observe(el));
}

function bindImageLoad(imgEl, wrapEl) {
  const done = () => {
    imgEl.classList.add("loaded");
    if (wrapEl) wrapEl.classList.add("loaded");
  };
  if (imgEl.complete && imgEl.naturalWidth > 0) {
    done();
  } else {
    imgEl.addEventListener("load", done, { once: true });
    imgEl.addEventListener("error", done, { once: true });
  }
}

/* ---------------------------------------------------------
   7) RENDER CATEGORIES
--------------------------------------------------------- */
function renderCategories() {
  const t = translations[state.lang];
  categoriesNav.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "cat-btn all-pill" + (state.activeCategory === "all" ? " active" : "");
  allBtn.textContent = t.cat_all;
  allBtn.dataset.category = "all";
  allBtn.addEventListener("click", () => goToCategory("all"));
  categoriesNav.appendChild(allBtn);

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (cat.id === state.activeCategory ? " active" : "");
    btn.dataset.category = cat.id;
    btn.innerHTML = `<img class="cat-avatar" src="${cldFetch(cat.thumb, 100)}" alt="" loading="lazy"><span>${state.lang === "ar" ? cat.ar : cat.en}</span>`;
    btn.addEventListener("click", () => goToCategory(cat.id));
    categoriesNav.appendChild(btn);
  });
}

function setActiveCatButton(catId) {
  categoriesNav.querySelectorAll(".cat-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.category === catId);
  });
}

function goToCategory(catId) {
  if (catId === "all") {
    state.view = "home";
    state.activeCategory = "all";
  } else {
    state.view = "category";
    state.activeCategory = catId;
  }
  setActiveCatButton(catId);
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderMenu();
}

/* ---------------------------------------------------------
   8) FILTER HELPERS + CARD BUILDER
--------------------------------------------------------- */
function matchesFilters(item) {
  const name = item.name[state.lang].toLowerCase();
  const desc = item.description[state.lang].toLowerCase();
  const query = state.searchQuery.toLowerCase();
  const matchesSearch = !query || name.includes(query) || desc.includes(query);
  const matchesFav = !state.showFavoritesOnly || state.favorites.includes(item.id);
  return matchesSearch && matchesFav;
}

function buildCard(item, index) {
  const t = translations[state.lang];
  const card = document.createElement("article");
  card.className = "menu-card";
  card.style.animationDelay = Math.min(index * 0.045, 0.5) + "s";

  const isFav = state.favorites.includes(item.id);
  const tagClass = tagClassOf(item.tag);

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${cldFetch(item.image, 500)}" alt="${item.name[state.lang]}" loading="lazy">
      ${item.tag ? `<span class="menu-tag ${tagClass}">${item.tag}</span>` : ""}
      <button class="card-fav ${isFav ? "is-fav" : ""}" data-id="${item.id}" aria-label="favorite">
        <svg class="icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
    <div class="card-content">
      <h3>${item.name[state.lang]}</h3>
      <p>${item.description[state.lang]}</p>
      <span class="card-price">${item.price} <small>${t.currency}</small></span>
    </div>
  `;

  const imgWrap = card.querySelector(".card-img-wrap");
  const imgEl = card.querySelector("img");
  bindImageLoad(imgEl, imgWrap);

  card.addEventListener("click", (e) => {
    if (e.target.closest(".card-fav")) return;
    openModal(item.id);
  });

  card.querySelector(".card-fav").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(item.id, false, e.currentTarget);
  });

  return card;
}

/* ---------------------------------------------------------
   9) MAIN RENDER
--------------------------------------------------------- */
function renderMenu() {
  setupRevealObserver();
  const query = state.searchQuery.trim();

  if (state.view === "home" && (query || state.showFavoritesOnly)) {
    renderFlatResults();
  } else if (state.view === "category") {
    renderCategoryPage(state.activeCategory);
  } else {
    renderHomeTheater();
  }
}

function renderHomeTheater() {
  const t = translations[state.lang];
  menuContainer.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "cat-theater-grid";

  categories.forEach((cat, idx) => {
    const count = menuItems.filter(item => item.category === cat.id).length;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "cat-theater";
    card.style.setProperty("--cat-color", cat.color);
    card.innerHTML = `
      <div class="cat-theater-img-wrap">
        <img class="cat-theater-img" src="${cldFetch(cat.banner, 700)}" alt="${state.lang === "ar" ? cat.ar : cat.en}" loading="lazy">
      </div>
      <div class="cat-theater-scrim"></div>
      <div class="cat-theater-scrim2"></div>
      <span class="cat-theater-number">${String(cat.number).padStart(2, "0")}</span>
      <div class="cat-theater-body">
        <h2 class="cat-theater-title">${state.lang === "ar" ? cat.ar : cat.en}</h2>
        <div class="cat-theater-meta">
          <span class="cat-theater-count">${count} ${t.items_count_suffix}</span>
          <span class="cat-theater-arrow">
            <svg class="icon" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    `;
    const img = card.querySelector(".cat-theater-img");
    bindImageLoad(img, null);
    card.addEventListener("click", () => goToCategory(cat.id));
    grid.appendChild(card);
  });

  menuContainer.appendChild(grid);
  emptyState.classList.add("hidden");
  observeReveal(".cat-theater");
}

function renderCategoryPage(catId) {
  const t = translations[state.lang];
  const cat = categoryMeta(catId);
  menuContainer.innerHTML = "";

  const items = menuItems.filter(item => item.category === catId && matchesFilters(item));

  const page = document.createElement("div");
  page.className = "cat-page";

  page.innerHTML = `
    <button type="button" class="back-btn">
      <svg class="icon" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      ${t.back_to_categories}
    </button>
    <div class="cat-hero">
      <div class="cat-hero-img-wrap">
        <img class="cat-hero-img" src="${cldFetch(cat.banner, 1000)}" alt="${state.lang === "ar" ? cat.ar : cat.en}" loading="lazy">
      </div>
      <div class="cat-hero-scrim"></div>
      <div class="cat-hero-content">
        <div class="cat-hero-number">${String(cat.number).padStart(2, "0")} / ${categories.length}</div>
        <h2 class="cat-hero-title">${state.lang === "ar" ? cat.ar : cat.en}</h2>
        <span class="cat-hero-count">${items.length} ${t.items_count_suffix}</span>
      </div>
    </div>
    <div class="cat-row"></div>
  `;

  page.querySelector(".back-btn").addEventListener("click", () => goToCategory("all"));

  const heroImg = page.querySelector(".cat-hero-img");
  bindImageLoad(heroImg, null);

  const row = page.querySelector(".cat-row");
  items.forEach((item, i) => row.appendChild(buildCard(item, i)));

  menuContainer.appendChild(page);
  emptyState.classList.toggle("hidden", items.length > 0);
}

function renderFlatResults() {
  const t = translations[state.lang];
  menuContainer.innerHTML = "";

  const items = menuItems.filter(matchesFilters);

  const title = document.createElement("h2");
  title.className = "flat-results-title";
  title.textContent = state.searchQuery.trim() ? t.search_results : t.favorites_title;
  menuContainer.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "menu-grid";
  items.forEach((item, i) => grid.appendChild(buildCard(item, i)));
  menuContainer.appendChild(grid);

  emptyState.classList.toggle("hidden", items.length > 0);
}

/* ---------------------------------------------------------
   10) SEARCH
--------------------------------------------------------- */
function onSearchInput(e) {
  state.searchQuery = e.target.value;
  clearSearchBtn.classList.toggle("show", state.searchQuery.length > 0);
  renderMenu();
}
function clearSearch() {
  searchInput.value = "";
  state.searchQuery = "";
  clearSearchBtn.classList.remove("show");
  renderMenu();
}

/* ---------------------------------------------------------
   11) FAVORITES
--------------------------------------------------------- */
function toggleFavorite(id, fromModal, btnEl) {
  const t = translations[state.lang];
  const idx = state.favorites.indexOf(id);
  const adding = idx === -1;
  if (adding) state.favorites.push(id); else state.favorites.splice(idx, 1);
  localStorage.setItem("sm_favorites", JSON.stringify(state.favorites));
  showToast(adding ? t.added_fav : t.removed_fav);

  if (btnEl) {
    btnEl.classList.toggle("is-fav", adding);
    btnEl.classList.add("pop");
    setTimeout(() => btnEl.classList.remove("pop"), 450);
  } else {
    renderMenu();
  }
  if (fromModal) updateModalFavIcon(id);
}

function toggleFavFilter() {
  state.showFavoritesOnly = !state.showFavoritesOnly;
  favFilterBtn.classList.toggle("active", state.showFavoritesOnly);
  renderMenu();
}

/* ---------------------------------------------------------
   12) PRODUCT MODAL
--------------------------------------------------------- */
let currentModalId = null;

function openModal(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return;
  currentModalId = id;
  const t = translations[state.lang];

  const imgEl = $("#modal-img");
  imgEl.classList.remove("loaded");
  imgEl.src = cldFetch(item.image, 900);
  bindImageLoad(imgEl, null);

  $("#modal-name").textContent = item.name[state.lang];
  $("#modal-desc").textContent = item.description[state.lang];
  $("#modal-price").textContent = `${item.price} ${t.currency}`;
  $("#modal-order-hint").textContent = t.order_hint;

  const tagEl = $("#modal-tag");
  if (item.tag) {
    tagEl.textContent = item.tag;
    tagEl.className = "menu-tag " + tagClassOf(item.tag);
    tagEl.classList.remove("hidden");
  } else {
    tagEl.classList.add("hidden");
  }

  updateModalFavIcon(id);

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function updateModalFavIcon(id) {
  $("#modal-fav").classList.toggle("is-fav", state.favorites.includes(id));
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

/* ---------------------------------------------------------
   13) LANGUAGE TOGGLE
--------------------------------------------------------- */
function toggleLanguage() {
  state.lang = state.lang === "ar" ? "en" : "ar";
  localStorage.setItem("sm_lang", state.lang);
  document.documentElement.setAttribute("lang", state.lang);
  document.documentElement.setAttribute("dir", state.lang === "ar" ? "rtl" : "ltr");
  $(".lang-current").textContent = state.lang === "ar" ? "EN" : "AR";
  applyTranslations();
  renderCategories();
  renderMenu();
}

function applyTranslations() {
  const t = translations[state.lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
}

/* ---------------------------------------------------------
   14) THEME TOGGLE
--------------------------------------------------------- */
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  localStorage.setItem("sm_theme", state.theme);
  document.documentElement.setAttribute("data-theme", state.theme);
}

// هيكل شبكة مؤقت (Skeleton) بيظهر فوراً لحد ما أول بيانات حقيقية توصل،
// بيستخدم فقط لما معندناش أي نسخة حقيقية جاهزة (لا كاش ولا نسخة مُصدَّرة)
function skeletonGrid() {
  return `<div class="cat-theater-grid">${
    Array.from({ length: 6 }).map(() => `<div class="skel-tile skel"></div>`).join("")
  }</div>`;
}

/* ---------------------------------------------------------
   15) BOOT
   -----------------------------------------------------------
   3 احتمالات بالترتيب:
   1) فيه كاش من آخر 5 دقايق (نفس الجهاز زار الموقع قبل كده)
      → يظهر فوراً صح 100%، ومفيش داعي نكلم Firebase تاني دلوقتي.
   2) مفيش كاش، لكن فيه نسخة حقيقية مُصدَّرة من المنيو (DEFAULT_ITEMS)
      → تظهر فوراً هي، وفي الخلفية بنتأكد من Firebase ونحدّث بصمت
      لو صاحب المطعم غيّر حاجة بعد ما اتصدرت النسخة دي.
   3) أول زيارة خالص على جهاز جديد ومفيش نسخة مُصدَّرة لسه
      → هيكل تحميل بسيط لحد ما المنيو الحقيقي يوصل من Firebase
      (أسرع بكتير من قبل، لكن مش مزيّف أبداً).
--------------------------------------------------------- */
function boot() {
  const cached = readCache();
  const hasInstantData = !!cached || DEFAULT_ITEMS.length > 0;

  if (hasInstantData) {
    if (cached) { categories = cached.categories; menuItems = cached.menuItems; settings = cached.settings; }
    applySettings();
    init();
  } else {
    menuContainer.innerHTML = skeletonGrid();
  }

  loadMenuData().then(() => {
    applySettings();
    if (hasInstantData) { renderCategories(); renderMenu(); }
    else { init(); }
  }).catch(err => {
    console.error("Background sync failed:", err);
  });
}

boot();