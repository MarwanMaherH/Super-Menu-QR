/* ==========================================================
   SUPER MENU — Menu Data
   عدّل الأصناف أو الأسعار أو الصور من هنا فقط
   ========================================================== */

const categories = [
  {
    "id": "breakfast",
    "en": "Breakfast",
    "ar": "الفطار",
    "icon": "breakfast,brunch",
    "color": "#B9812E",
    "number": 1,
    "banner": "https://i.pinimg.com/736x/cc/8a/29/cc8a295fd540eecb5c873cce260d86e1.jpg",
    "thumb": "https://i.pinimg.com/736x/cc/8a/29/cc8a295fd540eecb5c873cce260d86e1.jpg"
  },
  {
    "id": "appetizers",
    "en": "Appetizers",
    "ar": "المقبلات",
    "icon": "friedfood,appetizer",
    "color": "#C9582F",
    "number": 2,
    "banner": "https://i.pinimg.com/1200x/35/7d/6d/357d6dbb6eb472d2f0d56acacb796100.jpg",
    "thumb": "https://i.pinimg.com/1200x/35/7d/6d/357d6dbb6eb472d2f0d56acacb796100.jpg"
  },
  {
    "id": "salads",
    "en": "Salads",
    "ar": "السلطات",
    "icon": "freshsalad,salad",
    "color": "#4C7A3F",
    "number": 3,
    "banner": "https://i.pinimg.com/1200x/f0/ed/1c/f0ed1c0148d42cadae9e7b0d2f0e69eb.jpg",
    "thumb": "https://i.pinimg.com/1200x/f0/ed/1c/f0ed1c0148d42cadae9e7b0d2f0e69eb.jpg"
  },
  {
    "id": "soup",
    "en": "Soup",
    "ar": "الشوربة",
    "icon": "soup,bowlfood",
    "color": "#8A5A32",
    "number": 4,
    "banner": "https://loremflickr.com/1200/720/soup,bowlfood/all?lock=9003",
    "thumb":  "https://loremflickr.com/160/160/soup,bowlfood/all?lock=9003"
  },
  {
    "id": "sandwiches",
    "en": "Sandwiches",
    "ar": "الساندوتشات",
    "icon": "sandwich,deli",
    "color": "#A9701F",
    "number": 5,
    "banner": "https://i.pinimg.com/1200x/47/45/14/47451472391070aff9cb3046098120b5.jpg",
    "thumb": "https://i.pinimg.com/1200x/47/45/14/47451472391070aff9cb3046098120b5.jpg"
  },
  {
    "id": "burgers",
    "en": "Burger",
    "ar": "برجر",
    "icon": "smashburger,burger",
    "color": "#7A3B24",
    "number": 6,
    "banner": "https://i.pinimg.com/736x/e9/38/bd/e938bd74c64239e7affd237afc173ae5.jpg",
    "thumb": "https://i.pinimg.com/736x/e9/38/bd/e938bd74c64239e7affd237afc173ae5.jpg"
  },
  {
    "id": "pancakes",
    "en": "Pancakes",
    "ar": "بان كيك",
    "icon": "pancakes,stackofpancakes",
    "color": "#C9A24B",
    "number": 7,
    "banner": "https://i.pinimg.com/736x/a2/c4/8b/a2c48b432e93c8b44cdbe2e448aee2b2.jpg",
    "thumb": "https://i.pinimg.com/736x/a2/c4/8b/a2c48b432e93c8b44cdbe2e448aee2b2.jpg"
  },
  {
    "id": "waffles",
    "en": "Waffles",
    "ar": "وافل",
    "icon": "waffle,belgianwaffle",
    "color": "#B5732E",
    "number": 8,
    "banner": "https://i.pinimg.com/736x/a2/e1/1d/a2e11d22b223371bd5f999f5aaa6e9af.jpg",
    "thumb": "https://i.pinimg.com/736x/a2/e1/1d/a2e11d22b223371bd5f999f5aaa6e9af.jpg"
  },
  {
    "id": "crepes",
    "en": "Crepes",
    "ar": "كريب",
    "icon": "crepe,nutellacrepe",
    "color": "#9C5A3C",
    "number": 9,
    "banner": "https://i.pinimg.com/1200x/e4/6f/b0/e46fb0cd654a3b87bb2d9c4844d4283d.jpg",
    "thumb": "https://i.pinimg.com/1200x/e4/6f/b0/e46fb0cd654a3b87bb2d9c4844d4283d.jpg"
  },
  {
    "id": "pizza",
    "en": "Pizza",
    "ar": "بيتزا",
    "icon": "pizza,pizzaslice",
    "color": "#B23A2A",
    "number": 10,
    "banner": "https://i.pinimg.com/736x/1e/6a/6e/1e6a6eb99d1fa00b687e21569e4f0c1d.jpg",
    "thumb": "https://i.pinimg.com/736x/1e/6a/6e/1e6a6eb99d1fa00b687e21569e4f0c1d.jpg"
  },
  {
    "id": "pasta",
    "en": "Pasta",
    "ar": "باستا",
    "icon": "pasta,italianfood",
    "color": "#A6432B",
    "number": 11,
    "banner": "https://i.pinimg.com/1200x/46/ce/c2/46cec29837abe9a5bf8c3680cf6c5d09.jpg",
    "thumb": "https://i.pinimg.com/1200x/46/ce/c2/46cec29837abe9a5bf8c3680cf6c5d09.jpg"
  },
  {
    "id": "meals",
    "en": "Meals",
    "ar": "الوجبات",
    "icon": "grilledchicken,platedmeal",
    "color": "#8A3A28",
    "number": 12,
    "banner": "https://i.pinimg.com/1200x/b9/77/b2/b977b26d57aeb67ce38e2acac8599209.jpg",
    "thumb": "https://i.pinimg.com/1200x/b9/77/b2/b977b26d57aeb67ce38e2acac8599209.jpg"
  },
  {
    "id": "kids",
    "en": "Kids Meals",
    "ar": "وجبات الأطفال",
    "icon": "kidsmeal,chickennuggets",
    "color": "#3F7FA6",
    "number": 13,
    "banner": "https://i.pinimg.com/1200x/a2/50/ea/a250eaf28cb372c2d4f54ee8a2614b75.jpg",
    "thumb": "https://i.pinimg.com/1200x/a2/50/ea/a250eaf28cb372c2d4f54ee8a2614b75.jpg"
  },
  {
    "id": "hotdrinks",
    "en": "Hot Drinks",
    "ar": "مشروبات ساخنة",
    "icon": "espresso,latteart",
    "color": "#5A3A24",
    "number": 14,
    "banner": "https://i.pinimg.com/1200x/2a/9d/01/2a9d019aafa1323dde4c4313bf73606b.jpg",
    "thumb": "https://i.pinimg.com/1200x/2a/9d/01/2a9d019aafa1323dde4c4313bf73606b.jpg"
  },
  {
    "id": "coldcoffee",
    "en": "Cold Coffees",
    "ar": "قهوة باردة",
    "icon": "icedcoffee,coldbrew",
    "color": "#3A5578",
    "number": 15,
    "banner": "https://i.pinimg.com/736x/9a/8b/aa/9a8baaddfdc33c548926d3e741f63ceb.jpg",
    "thumb": "https://i.pinimg.com/736x/9a/8b/aa/9a8baaddfdc33c548926d3e741f63ceb.jpg"
  },
  {
    "id": "milkshakes",
    "en": "Milkshakes",
    "ar": "ميلك شيك",
    "icon": "milkshake",
    "color": "#B5518A",
    "number": 16,
    "banner": "https://i.pinimg.com/1200x/7a/56/07/7a5607f9777847682fdf1673037c23bd.jpg",
    "thumb": "https://i.pinimg.com/1200x/7a/56/07/7a5607f9777847682fdf1673037c23bd.jpg"
  },
  {
    "id": "frappes",
    "en": "Frappes",
    "ar": "فرابيه",
    "icon": "frappe,icedcoffeedrink",
    "color": "#6B4A2F",
    "number": 17,
    "banner": "https://i.pinimg.com/736x/01/06/46/010646301747e2a765574b2415049621.jpg",
    "thumb": "https://i.pinimg.com/736x/01/06/46/010646301747e2a765574b2415049621.jpg"
  },
  {
    "id": "smoothies",
    "en": "Smoothies",
    "ar": "سموذي",
    "icon": "smoothie,fruitsmoothie",
    "color": "#C9414D",
    "number": 18,
    "banner": "https://i.pinimg.com/736x/48/5c/9a/485c9a4597e6dbbadcdceddb04d090bf.jpg",
    "thumb": "https://i.pinimg.com/736x/48/5c/9a/485c9a4597e6dbbadcdceddb04d090bf.jpg"
  },
  {
    "id": "juices",
    "en": "Fresh Juices",
    "ar": "عصائر طازة",
    "icon": "freshjuice,orangejuice",
    "color": "#D98A1F",
    "number": 19,
    "banner": "https://i.pinimg.com/736x/2e/8c/23/2e8c2342f2c28d6ff61e02e97f7d4997.jpg",
    "thumb": "https://i.pinimg.com/736x/2e/8c/23/2e8c2342f2c28d6ff61e02e97f7d4997.jpg"
  },
  {
    "id": "cocktails",
    "en": "Mocktails",
    "ar": "موكتيلات",
    "icon": "mocktail,cocktaildrink",
    "color": "#2E8C82",
    "number": 20,
    "banner": "https://i.pinimg.com/1200x/cd/4f/07/cd4f07c3cca88beb236d5785ac475d4b.jpg",
    "thumb": "https://i.pinimg.com/1200x/cd/4f/07/cd4f07c3cca88beb236d5785ac475d4b.jpg"
  },
  {
    "id": "mojitos",
    "en": "Signature Mojitos",
    "ar": "موهيتو",
    "icon": "mojito,mintdrink",
    "color": "#2F8F5B",
    "number": 21,
    "banner": "https://i.pinimg.com/736x/fb/af/af/fbafaf46af19eed68157960e32604628.jpg",
    "thumb": "https://i.pinimg.com/736x/fb/af/af/fbafaf46af19eed68157960e32604628.jpg"
  },
  {
    "id": "softdrinks",
    "en": "Soft Drinks",
    "ar": "مشروبات غازية",
    "icon": "softdrink,sodaglass",
    "color": "#2E5FA3",
    "number": 22,
    "banner": "https://i.pinimg.com/736x/76/9f/8b/769f8baa785689025317a8bd00830eef.jpg",
    "thumb": "https://i.pinimg.com/736x/76/9f/8b/769f8baa785689025317a8bd00830eef.jpg"
  },
  {
    "id": "desserts",
    "en": "Desserts",
    "ar": "حلويات",
    "icon": "dessert,chocolatecake",
    "color": "#7A3350",
    "number": 23,
    "banner": "https://i.pinimg.com/1200x/33/24/ea/3324ea27478420f7a7431489424c8f9a.jpg",
    "thumb": "https://i.pinimg.com/1200x/33/24/ea/3324ea27478420f7a7431489424c8f9a.jpg"
  },
  {
    "id": "icecream",
    "en": "Ice Cream",
    "ar": "آيس كريم",
    "icon": "icecream,gelato",
    "color": "#3F8AA3",
    "number": 24,
    "banner": "https://i.pinimg.com/736x/cc/98/a7/cc98a7c413be1f59bf2d7fc7e320293b.jpg",
    "thumb": "https://i.pinimg.com/736x/cc/98/a7/cc98a7c413be1f59bf2d7fc7e320293b.jpg"
  },
  {
    "id": "boba",
    "en": "Boba",
    "ar": "بوبا",
    "icon": "bubbletea,boba",
    "color": "#5C3A78",
    "number": 25,
    "banner": "https://i.pinimg.com/736x/ed/77/ed/ed77ed595ab0d5a32b8e89784a31c1b6.jpg",
    "thumb": "https://i.pinimg.com/736x/ed/77/ed/ed77ed595ab0d5a32b8e89784a31c1b6.jpg"
  }
];

const menuItems = [
  {
    "id": 1,
    "category": "breakfast",
    "name": {
      "ar": "Classic Breakfast",
      "en": "Classic Breakfast"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 105,
    "tag": "BEST SELLER",
    //"image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=1"
  },
  {
    "id": 2,
    "category": "breakfast",
    "name": {
      "ar": "English Breakfast",
      "en": "English Breakfast"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 130,
    "tag": "CHEF'S PICK",
    //"image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=2"
  },
  {
    "id": 3,
    "category": "breakfast",
    "name": {
      "ar": "Omelette",
      "en": "Omelette"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 110,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=3"
  },
  {
    "id": 4,
    "category": "breakfast",
    "name": {
      "ar": "Cheese Omelette",
      "en": "Cheese Omelette"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 175,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=4"
  },
  {
    "id": 5,
    "category": "breakfast",
    "name": {
      "ar": "Mushroom Omelette",
      "en": "Mushroom Omelette"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 155,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=5"
  },
  {
    "id": 6,
    "category": "breakfast",
    "name": {
      "ar": "Scrambled Eggs",
      "en": "Scrambled Eggs"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 100,
    "tag": "CHEF'S PICK",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=6"
  },
  {
    "id": 7,
    "category": "breakfast",
    "name": {
      "ar": "Eggs Benedict",
      "en": "Eggs Benedict"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 170,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=7"
  },
  {
    "id": 8,
    "category": "breakfast",
    "name": {
      "ar": "Turkish Eggs",
      "en": "Turkish Eggs"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 175,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=8"
  },
  {
    "id": 9,
    "category": "breakfast",
    "name": {
      "ar": "Shakshuka",
      "en": "Shakshuka"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 175,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=9"
  },
  {
    "id": 10,
    "category": "breakfast",
    "name": {
      "ar": "Croque Madame",
      "en": "Croque Madame"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=10"
  },
  {
    "id": 11,
    "category": "breakfast",
    "name": {
      "ar": "French Toast",
      "en": "French Toast"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 90,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=11"
  },
  {
    "id": 12,
    "category": "breakfast",
    "name": {
      "ar": "Avocado Toast",
      "en": "Avocado Toast"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 115,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=12"
  },
  {
    "id": 13,
    "category": "breakfast",
    "name": {
      "ar": "Egg & Cheese Toast",
      "en": "Egg & Cheese Toast"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 140,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=13"
  },
  {
    "id": 14,
    "category": "breakfast",
    "name": {
      "ar": "Breakfast Croissant",
      "en": "Breakfast Croissant"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 120,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=14"
  },
  {
    "id": 15,
    "category": "breakfast",
    "name": {
      "ar": "Granola Bowl",
      "en": "Granola Bowl"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 140,
    "tag": "NEW",
  //  "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=15"
  },
  {
    "id": 16,
    "category": "breakfast",
    "name": {
      "ar": "Yogurt & Fruits",
      "en": "Yogurt & Fruits"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 150,
    "tag": "BEST SELLER",
  //  "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=16"
  },
  {
    "id": 17,
    "category": "breakfast",
    "name": {
      "ar": "Acai Bowl",
      "en": "Acai Bowl"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 145,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=17"
  },
  {
    "id": 18,
    "category": "breakfast",
    "name": {
      "ar": "Breakfast Platter",
      "en": "Breakfast Platter"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 95,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/breakfast,brunch/all?lock=18"
  },
  {
    "id": 19,
    "category": "appetizers",
    "name": {
      "ar": "French Fries",
      "en": "French Fries"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 145,
    "tag": "NEW",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=19"
  },
  {
    "id": 20,
    "category": "appetizers",
    "name": {
      "ar": "Curly Fries",
      "en": "Curly Fries"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 120,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=20"
  },
  {
    "id": 21,
    "category": "appetizers",
    "name": {
      "ar": "Sweet Potato Fries",
      "en": "Sweet Potato Fries"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 105,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=21"
  },
  {
    "id": 22,
    "category": "appetizers",
    "name": {
      "ar": "Potato Wedges",
      "en": "Potato Wedges"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 115,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=22"
  },
  {
    "id": 23,
    "category": "appetizers",
    "name": {
      "ar": "Mozzarella Sticks",
      "en": "Mozzarella Sticks"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 70,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=23"
  },
  {
    "id": 24,
    "category": "appetizers",
    "name": {
      "ar": "Chicken Strips",
      "en": "Chicken Strips"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 95,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=24"
  },
  {
    "id": 25,
    "category": "appetizers",
    "name": {
      "ar": "Chicken Wings",
      "en": "Chicken Wings"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 70,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=25"
  },
  {
    "id": 26,
    "category": "appetizers",
    "name": {
      "ar": "Buffalo Wings",
      "en": "Buffalo Wings"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 75,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=26"
  },
  {
    "id": 27,
    "category": "appetizers",
    "name": {
      "ar": "Onion Rings",
      "en": "Onion Rings"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 130,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=27"
  },
  {
    "id": 28,
    "category": "appetizers",
    "name": {
      "ar": "Nachos",
      "en": "Nachos"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 115,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=28"
  },
  {
    "id": 29,
    "category": "appetizers",
    "name": {
      "ar": "Cheese Nachos",
      "en": "Cheese Nachos"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 115,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=29"
  },
  {
    "id": 30,
    "category": "appetizers",
    "name": {
      "ar": "Garlic Bread",
      "en": "Garlic Bread"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 100,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=30"
  },
  {
    "id": 31,
    "category": "appetizers",
    "name": {
      "ar": "Cheesy Garlic Bread",
      "en": "Cheesy Garlic Bread"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 70,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=31"
  },
  {
    "id": 32,
    "category": "appetizers",
    "name": {
      "ar": "Bruschetta",
      "en": "Bruschetta"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 85,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=32"
  },
  {
    "id": 33,
    "category": "appetizers",
    "name": {
      "ar": "Dynamite Shrimp",
      "en": "Dynamite Shrimp"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 95,
    "tag": "SIGNATURE",
  //  "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=33"
  },
  {
    "id": 34,
    "category": "appetizers",
    "name": {
      "ar": "Jalapeño Poppers",
      "en": "Jalapeño Poppers"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 120,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=34"
  },
  {
    "id": 35,
    "category": "appetizers",
    "name": {
      "ar": "Fried Calamari",
      "en": "Fried Calamari"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 145,
    "tag": "CHEF'S PICK",
  //  "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=35"
  },
  {
    "id": 36,
    "category": "appetizers",
    "name": {
      "ar": "Loaded Fries",
      "en": "Loaded Fries"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 110,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/friedfood,appetizer/all?lock=36"
  },
  {
    "id": 37,
    "category": "salads",
    "name": {
      "ar": "Caesar Salad",
      "en": "Caesar Salad"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 95,
    "tag": "CHEF'S PICK",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=37"
  },
  {
    "id": 38,
    "category": "salads",
    "name": {
      "ar": "Chicken Caesar Salad",
      "en": "Chicken Caesar Salad"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 95,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=38"
  },
  {
    "id": 39,
    "category": "salads",
    "name": {
      "ar": "Greek Salad",
      "en": "Greek Salad"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 150,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=39"
  },
  {
    "id": 40,
    "category": "salads",
    "name": {
      "ar": "Garden Salad",
      "en": "Garden Salad"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 120,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=40"
  },
  {
    "id": 41,
    "category": "salads",
    "name": {
      "ar": "Chicken Avocado Salad",
      "en": "Chicken Avocado Salad"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 140,
    "tag": "CHEF'S PICK",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=41"
  },
  {
    "id": 42,
    "category": "salads",
    "name": {
      "ar": "Tuna Salad",
      "en": "Tuna Salad"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 165,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=42"
  },
  {
    "id": 43,
    "category": "salads",
    "name": {
      "ar": "Cobb Salad",
      "en": "Cobb Salad"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 160,
    "tag": "NEW",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=43"
  },
  {
    "id": 44,
    "category": "salads",
    "name": {
      "ar": "Fattoush",
      "en": "Fattoush"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 110,
    "tag": "CHEF'S PICK",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=44"
  },
  {
    "id": 45,
    "category": "salads",
    "name": {
      "ar": "Caprese Salad",
      "en": "Caprese Salad"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 130,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=45"
  },
  {
    "id": 46,
    "category": "salads",
    "name": {
      "ar": "Pasta Salad",
      "en": "Pasta Salad"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 155,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=46"
  },
  {
    "id": 47,
    "category": "salads",
    "name": {
      "ar": "Quinoa Salad",
      "en": "Quinoa Salad"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 150,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=47"
  },
  {
    "id": 48,
    "category": "salads",
    "name": {
      "ar": "Mediterranean Salad",
      "en": "Mediterranean Salad"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 110,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=48"
  },
  {
    "id": 49,
    "category": "salads",
    "name": {
      "ar": "Shrimp Salad",
      "en": "Shrimp Salad"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 100,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=49"
  },
  {
    "id": 50,
    "category": "salads",
    "name": {
      "ar": "Crispy Chicken Salad",
      "en": "Crispy Chicken Salad"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 105,
    "tag": "NEW",
   // "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=50"
  },
  {
    "id": 51,
    "category": "salads",
    "name": {
      "ar": "Avocado Salad",
      "en": "Avocado Salad"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 115,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=51"
  },
  {
    "id": 52,
    "category": "salads",
    "name": {
      "ar": "Super Green Salad",
      "en": "Super Green Salad"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 155,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/freshsalad,salad/all?lock=52"
  },
  {
    "id": 53,
    "category": "soup",
    "name": {
      "ar": "Cream of Chicken",
      "en": "Cream of Chicken"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 85,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=53"
  },
  {
    "id": 54,
    "category": "soup",
    "name": {
      "ar": "Mushroom Soup",
      "en": "Mushroom Soup"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 90,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=54"
  },
  {
    "id": 55,
    "category": "soup",
    "name": {
      "ar": "Tomato Soup",
      "en": "Tomato Soup"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 95,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=55"
  },
  {
    "id": 56,
    "category": "soup",
    "name": {
      "ar": "Lentil Soup",
      "en": "Lentil Soup"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 55,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=56"
  },
  {
    "id": 57,
    "category": "soup",
    "name": {
      "ar": "Chicken Noodle Soup",
      "en": "Chicken Noodle Soup"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 60,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=57"
  },
  {
    "id": 58,
    "category": "soup",
    "name": {
      "ar": "Vegetable Soup",
      "en": "Vegetable Soup"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 95,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=58"
  },
  {
    "id": 59,
    "category": "soup",
    "name": {
      "ar": "French Onion Soup",
      "en": "French Onion Soup"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 105,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=59"
  },
  {
    "id": 60,
    "category": "soup",
    "name": {
      "ar": "Seafood Soup",
      "en": "Seafood Soup"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 75,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=60"
  },
  {
    "id": 61,
    "category": "soup",
    "name": {
      "ar": "Creamy Corn Soup",
      "en": "Creamy Corn Soup"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 90,
    "tag": "BEST SELLER",
  //  "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=61"
  },
  {
    "id": 62,
    "category": "soup",
    "name": {
      "ar": "Broccoli Soup",
      "en": "Broccoli Soup"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 75,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=62"
  },
  {
    "id": 63,
    "category": "soup",
    "name": {
      "ar": "Pumpkin Soup",
      "en": "Pumpkin Soup"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 65,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=63"
  },
  {
    "id": 64,
    "category": "soup",
    "name": {
      "ar": "Minestrone",
      "en": "Minestrone"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 60,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=64"
  },
  {
    "id": 65,
    "category": "soup",
    "name": {
      "ar": "Spicy Chicken Soup",
      "en": "Spicy Chicken Soup"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 75,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=65"
  },
  {
    "id": 66,
    "category": "soup",
    "name": {
      "ar": "Creamy Spinach Soup",
      "en": "Creamy Spinach Soup"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 95,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/soup,bowlfood/all?lock=66"
  },
  {
    "id": 67,
    "category": "sandwiches",
    "name": {
      "ar": "Chicken Crispy Sandwich",
      "en": "Chicken Crispy Sandwich"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 115,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=67"
  },
  {
    "id": 68,
    "category": "sandwiches",
    "name": {
      "ar": "Classic Chicken Sandwich",
      "en": "Classic Chicken Sandwich"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 120,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=68"
  },
  {
    "id": 69,
    "category": "sandwiches",
    "name": {
      "ar": "Grilled Chicken Sandwich",
      "en": "Grilled Chicken Sandwich"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 175,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=69"
  },
  {
    "id": 70,
    "category": "sandwiches",
    "name": {
      "ar": "Chicken BBQ Sandwich",
      "en": "Chicken BBQ Sandwich"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 145,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=70"
  },
  {
    "id": 71,
    "category": "sandwiches",
    "name": {
      "ar": "Philly Cheesesteak",
      "en": "Philly Cheesesteak"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 110,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=71"
  },
  {
    "id": 72,
    "category": "sandwiches",
    "name": {
      "ar": "Beef Steak Sandwich",
      "en": "Beef Steak Sandwich"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 140,
    "tag": "CHEF'S PICK",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=72"
  },
  {
    "id": 73,
    "category": "sandwiches",
    "name": {
      "ar": "Roast Beef Sandwich",
      "en": "Roast Beef Sandwich"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 130,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=73"
  },
  {
    "id": 74,
    "category": "sandwiches",
    "name": {
      "ar": "Club Sandwich",
      "en": "Club Sandwich"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 105,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=74"
  },
  {
    "id": 75,
    "category": "sandwiches",
    "name": {
      "ar": "Tuna Sandwich",
      "en": "Tuna Sandwich"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 170,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=75"
  },
  {
    "id": 76,
    "category": "sandwiches",
    "name": {
      "ar": "Grilled Cheese",
      "en": "Grilled Cheese"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 180,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=76"
  },
  {
    "id": 77,
    "category": "sandwiches",
    "name": {
      "ar": "Halloumi Sandwich",
      "en": "Halloumi Sandwich"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 115,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=77"
  },
  {
    "id": 78,
    "category": "sandwiches",
    "name": {
      "ar": "Smoked Turkey Sandwich",
      "en": "Smoked Turkey Sandwich"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 180,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=78"
  },
  {
    "id": 79,
    "category": "sandwiches",
    "name": {
      "ar": "Chicken Avocado Sandwich",
      "en": "Chicken Avocado Sandwich"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 175,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=79"
  },
  {
    "id": 80,
    "category": "sandwiches",
    "name": {
      "ar": "Italian Sandwich",
      "en": "Italian Sandwich"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/sandwich,deli/all?lock=80"
  },
  {
    "id": 81,
    "category": "burgers",
    "name": {
      "ar": "Classic Smash",
      "en": "Classic Smash"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 225,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=81"
  },
  {
    "id": 82,
    "category": "burgers",
    "name": {
      "ar": "Double Smash",
      "en": "Double Smash"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 250,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=82"
  },
  {
    "id": 83,
    "category": "burgers",
    "name": {
      "ar": "Triple Smash",
      "en": "Triple Smash"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 185,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=83"
  },
  {
    "id": 84,
    "category": "burgers",
    "name": {
      "ar": "Cheese Smash",
      "en": "Cheese Smash"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 245,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=84"
  },
  {
    "id": 85,
    "category": "burgers",
    "name": {
      "ar": "Bacon Cheese Smash",
      "en": "Bacon Cheese Smash"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 210,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=85"
  },
  {
    "id": 86,
    "category": "burgers",
    "name": {
      "ar": "Mushroom Swiss Smash",
      "en": "Mushroom Swiss Smash"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 210,
    "tag": "NEW",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=86"
  },
  {
    "id": 87,
    "category": "burgers",
    "name": {
      "ar": "BBQ Smash",
      "en": "BBQ Smash"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 175,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=87"
  },
  {
    "id": 88,
    "category": "burgers",
    "name": {
      "ar": "Jalapeño Smash",
      "en": "Jalapeño Smash"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 140,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=88"
  },
  {
    "id": 89,
    "category": "burgers",
    "name": {
      "ar": "Truffle Smash",
      "en": "Truffle Smash"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 175,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=89"
  },
  {
    "id": 90,
    "category": "burgers",
    "name": {
      "ar": "Avocado Smash",
      "en": "Avocado Smash"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 140,
    "tag": "BEST SELLER",
  //  "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=90"
  },
  {
    "id": 91,
    "category": "burgers",
    "name": {
      "ar": "Mexican Smash",
      "en": "Mexican Smash"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 240,
    "tag": "BEST SELLER",
  //  "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=91"
  },
  {
    "id": 92,
    "category": "burgers",
    "name": {
      "ar": "Chicken Smash",
      "en": "Chicken Smash"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 150,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=92"
  },
  {
    "id": 93,
    "category": "burgers",
    "name": {
      "ar": "Crispy Chicken Burger",
      "en": "Crispy Chicken Burger"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 190,
    "tag": "BEST SELLER",
  //  "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=93"
  },
  {
    "id": 94,
    "category": "burgers",
    "name": {
      "ar": "Signature Smash",
      "en": "Signature Smash"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 175,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/smashburger,burger/all?lock=94"
  },
  {
    "id": 95,
    "category": "pancakes",
    "name": {
      "ar": "Classic Pancakes",
      "en": "Classic Pancakes"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 145,
    "tag": "CHEF'S PICK",
  //  "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=95"
  },
  {
    "id": 96,
    "category": "pancakes",
    "name": {
      "ar": "Nutella Pancakes",
      "en": "Nutella Pancakes"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 120,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=96"
  },
  {
    "id": 97,
    "category": "pancakes",
    "name": {
      "ar": "Chocolate Pancakes",
      "en": "Chocolate Pancakes"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 155,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=97"
  },
  {
    "id": 98,
    "category": "pancakes",
    "name": {
      "ar": "Strawberry Pancakes",
      "en": "Strawberry Pancakes"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 125,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=98"
  },
  {
    "id": 99,
    "category": "pancakes",
    "name": {
      "ar": "Blueberry Pancakes",
      "en": "Blueberry Pancakes"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 170,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=99"
  },
  {
    "id": 100,
    "category": "pancakes",
    "name": {
      "ar": "Banana Pancakes",
      "en": "Banana Pancakes"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 115,
    "tag": "BEST SELLER",
  //  "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=100"
  },
  {
    "id": 101,
    "category": "pancakes",
    "name": {
      "ar": "Lotus Pancakes",
      "en": "Lotus Pancakes"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 140,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=101"
  },
  {
    "id": 102,
    "category": "pancakes",
    "name": {
      "ar": "Kinder Pancakes",
      "en": "Kinder Pancakes"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 140,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=102"
  },
  {
    "id": 103,
    "category": "pancakes",
    "name": {
      "ar": "Oreo Pancakes",
      "en": "Oreo Pancakes"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 165,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=103"
  },
  {
    "id": 104,
    "category": "pancakes",
    "name": {
      "ar": "Pistachio Pancakes",
      "en": "Pistachio Pancakes"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=104"
  },
  {
    "id": 105,
    "category": "pancakes",
    "name": {
      "ar": "Caramel Pancakes",
      "en": "Caramel Pancakes"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 115,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=105"
  },
  {
    "id": 106,
    "category": "pancakes",
    "name": {
      "ar": "Biscoff Pancakes",
      "en": "Biscoff Pancakes"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 165,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=106"
  },
  {
    "id": 107,
    "category": "pancakes",
    "name": {
      "ar": "Red Velvet Pancakes",
      "en": "Red Velvet Pancakes"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 175,
    "tag": "NEW",
   // "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=107"
  },
  {
    "id": 108,
    "category": "pancakes",
    "name": {
      "ar": "Signature Pancakes",
      "en": "Signature Pancakes"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 125,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/pancakes,stackofpancakes/all?lock=108"
  },
  {
    "id": 109,
    "category": "waffles",
    "name": {
      "ar": "Classic Waffle",
      "en": "Classic Waffle"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 155,
    "tag": "NEW",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=109"
  },
  {
    "id": 110,
    "category": "waffles",
    "name": {
      "ar": "Belgian Waffle",
      "en": "Belgian Waffle"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 130,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=110"
  },
  {
    "id": 111,
    "category": "waffles",
    "name": {
      "ar": "Nutella Waffle",
      "en": "Nutella Waffle"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 135,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=111"
  },
  {
    "id": 112,
    "category": "waffles",
    "name": {
      "ar": "Chocolate Waffle",
      "en": "Chocolate Waffle"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 125,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=112"
  },
  {
    "id": 113,
    "category": "waffles",
    "name": {
      "ar": "Strawberry Waffle",
      "en": "Strawberry Waffle"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 185,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=113"
  },
  {
    "id": 114,
    "category": "waffles",
    "name": {
      "ar": "Banana Waffle",
      "en": "Banana Waffle"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 125,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=114"
  },
  {
    "id": 115,
    "category": "waffles",
    "name": {
      "ar": "Lotus Waffle",
      "en": "Lotus Waffle"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=115"
  },
  {
    "id": 116,
    "category": "waffles",
    "name": {
      "ar": "Kinder Waffle",
      "en": "Kinder Waffle"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 125,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=116"
  },
  {
    "id": 117,
    "category": "waffles",
    "name": {
      "ar": "Oreo Waffle",
      "en": "Oreo Waffle"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 185,
    "tag": "CHEF'S PICK",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=117"
  },
  {
    "id": 118,
    "category": "waffles",
    "name": {
      "ar": "Pistachio Waffle",
      "en": "Pistachio Waffle"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 150,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=118"
  },
  {
    "id": 119,
    "category": "waffles",
    "name": {
      "ar": "Biscoff Waffle",
      "en": "Biscoff Waffle"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 135,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=119"
  },
  {
    "id": 120,
    "category": "waffles",
    "name": {
      "ar": "Brownie Waffle",
      "en": "Brownie Waffle"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 120,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=120"
  },
  {
    "id": 121,
    "category": "waffles",
    "name": {
      "ar": "Red Velvet Waffle",
      "en": "Red Velvet Waffle"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 120,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=121"
  },
  {
    "id": 122,
    "category": "waffles",
    "name": {
      "ar": "Signature Waffle",
      "en": "Signature Waffle"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 140,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/waffle,belgianwaffle/all?lock=122"
  },
  {
    "id": 123,
    "category": "crepes",
    "name": {
      "ar": "Classic Nutella Crepe",
      "en": "Classic Nutella Crepe"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=123"
  },
  {
    "id": 124,
    "category": "crepes",
    "name": {
      "ar": "Strawberry Nutella",
      "en": "Strawberry Nutella"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 130,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=124"
  },
  {
    "id": 125,
    "category": "crepes",
    "name": {
      "ar": "Banana Nutella",
      "en": "Banana Nutella"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 155,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=125"
  },
  {
    "id": 126,
    "category": "crepes",
    "name": {
      "ar": "Kinder Crepe",
      "en": "Kinder Crepe"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 140,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=126"
  },
  {
    "id": 127,
    "category": "crepes",
    "name": {
      "ar": "Oreo Crepe",
      "en": "Oreo Crepe"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 135,
    "tag": "NEW",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=127"
  },
  {
    "id": 128,
    "category": "crepes",
    "name": {
      "ar": "Lotus Crepe",
      "en": "Lotus Crepe"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 120,
    "tag": "CHEF'S PICK",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=128"
  },
  {
    "id": 129,
    "category": "crepes",
    "name": {
      "ar": "Pistachio Crepe",
      "en": "Pistachio Crepe"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 100,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=129"
  },
  {
    "id": 130,
    "category": "crepes",
    "name": {
      "ar": "Brownie Crepe",
      "en": "Brownie Crepe"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 140,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=130"
  },
  {
    "id": 131,
    "category": "crepes",
    "name": {
      "ar": "Strawberry & Cream",
      "en": "Strawberry & Cream"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 125,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=131"
  },
  {
    "id": 132,
    "category": "crepes",
    "name": {
      "ar": "Lotus Cheesecake Crepe",
      "en": "Lotus Cheesecake Crepe"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 145,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=132"
  },
  {
    "id": 133,
    "category": "crepes",
    "name": {
      "ar": "Kinder Bueno Crepe",
      "en": "Kinder Bueno Crepe"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 165,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=133"
  },
  {
    "id": 134,
    "category": "crepes",
    "name": {
      "ar": "Signature Crepe",
      "en": "Signature Crepe"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 100,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/crepe,nutellacrepe/all?lock=134"
  },
  {
    "id": 135,
    "category": "pizza",
    "name": {
      "ar": "Margherita",
      "en": "Margherita"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=135"
  },
  {
    "id": 136,
    "category": "pizza",
    "name": {
      "ar": "Four Cheese",
      "en": "Four Cheese"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=136"
  },
  {
    "id": 137,
    "category": "pizza",
    "name": {
      "ar": "Pepperoni",
      "en": "Pepperoni"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 255,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=137"
  },
  {
    "id": 138,
    "category": "pizza",
    "name": {
      "ar": "Chicken BBQ",
      "en": "Chicken BBQ"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 210,
    "tag": "NEW",
    "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=138"
  },
  {
    "id": 139,
    "category": "pizza",
    "name": {
      "ar": "Chicken Ranch",
      "en": "Chicken Ranch"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 240,
    "tag": "CHEF'S PICK",
   // "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=139"
  },
  {
    "id": 140,
    "category": "pizza",
    "name": {
      "ar": "Chicken Alfredo",
      "en": "Chicken Alfredo"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 245,
    "tag": "BEST SELLER",
    //"image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=140"
  },
  {
    "id": 141,
    "category": "pizza",
    "name": {
      "ar": "Meat Lovers",
      "en": "Meat Lovers"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=141"
  },
  {
    "id": 142,
    "category": "pizza",
    "name": {
      "ar": "Beef Pepperoni",
      "en": "Beef Pepperoni"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 240,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=142"
  },
  {
    "id": 143,
    "category": "pizza",
    "name": {
      "ar": "Hawaiian",
      "en": "Hawaiian"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 200,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=143"
  },
  {
    "id": 144,
    "category": "pizza",
    "name": {
      "ar": "Vegetarian",
      "en": "Vegetarian"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 180,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=144"
  },
  {
    "id": 145,
    "category": "pizza",
    "name": {
      "ar": "Spicy Chicken",
      "en": "Spicy Chicken"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 200,
    "tag": "CHEF'S PICK",
    //"image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=145"
  },
  {
    "id": 146,
    "category": "pizza",
    "name": {
      "ar": "Buffalo Chicken",
      "en": "Buffalo Chicken"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 210,
    "tag": "NEW",
    //"image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=146"
  },
  {
    "id": 147,
    "category": "pizza",
    "name": {
      "ar": "Seafood",
      "en": "Seafood"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 250,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=147"
  },
  {
    "id": 148,
    "category": "pizza",
    "name": {
      "ar": "Truffle Mushroom",
      "en": "Truffle Mushroom"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 200,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=148"
  },
  {
    "id": 149,
    "category": "pizza",
    "name": {
      "ar": "Signature Pizza",
      "en": "Signature Pizza"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 160,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/pizza,pizzaslice/all?lock=149"
  },
  {
    "id": 150,
    "category": "pasta",
    "name": {
      "ar": "Penne Arrabbiata",
      "en": "Penne Arrabbiata"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 235,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=150"
  },
  {
    "id": 151,
    "category": "pasta",
    "name": {
      "ar": "Penne Alfredo",
      "en": "Penne Alfredo"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 155,
    "tag": "BEST SELLER",
    //"image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=151"
  },
  {
    "id": 152,
    "category": "pasta",
    "name": {
      "ar": "Chicken Alfredo",
      "en": "Chicken Alfredo"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 170,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=152"
  },
  {
    "id": 153,
    "category": "pasta",
    "name": {
      "ar": "Chicken Mushroom Pasta",
      "en": "Chicken Mushroom Pasta"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 160,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=153"
  },
  {
    "id": 154,
    "category": "pasta",
    "name": {
      "ar": "Chicken Pesto Pasta",
      "en": "Chicken Pesto Pasta"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 150,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=154"
  },
  {
    "id": 155,
    "category": "pasta",
    "name": {
      "ar": "Beef Bolognese",
      "en": "Beef Bolognese"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 195,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=155"
  },
  {
    "id": 156,
    "category": "pasta",
    "name": {
      "ar": "Spaghetti Carbonara",
      "en": "Spaghetti Carbonara"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 210,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=156"
  },
  {
    "id": 157,
    "category": "pasta",
    "name": {
      "ar": "Lasagna",
      "en": "Lasagna"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 185,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=157"
  },
  {
    "id": 158,
    "category": "pasta",
    "name": {
      "ar": "Four Cheese Pasta",
      "en": "Four Cheese Pasta"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 220,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=158"
  },
  {
    "id": 159,
    "category": "pasta",
    "name": {
      "ar": "Shrimp Alfredo",
      "en": "Shrimp Alfredo"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 225,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=159"
  },
  {
    "id": 160,
    "category": "pasta",
    "name": {
      "ar": "Seafood Pasta",
      "en": "Seafood Pasta"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 155,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=160"
  },
  {
    "id": 161,
    "category": "pasta",
    "name": {
      "ar": "Truffle Pasta",
      "en": "Truffle Pasta"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 160,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=161"
  },
  {
    "id": 162,
    "category": "pasta",
    "name": {
      "ar": "Signature Pasta",
      "en": "Signature Pasta"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 155,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/pasta,italianfood/all?lock=162"
  },
  {
    "id": 163,
    "category": "meals",
    "name": {
      "ar": "Grilled Chicken Meal",
      "en": "Grilled Chicken Meal"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 210,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=163"
  },
  {
    "id": 164,
    "category": "meals",
    "name": {
      "ar": "Crispy Chicken Meal",
      "en": "Crispy Chicken Meal"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 285,
    "tag": "CHEF'S PICK",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=164"
  },
  {
    "id": 165,
    "category": "meals",
    "name": {
      "ar": "Chicken Wings Meal",
      "en": "Chicken Wings Meal"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 240,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=165"
  },
  {
    "id": 166,
    "category": "meals",
    "name": {
      "ar": "Chicken Escalope",
      "en": "Chicken Escalope"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 290,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=166"
  },
  {
    "id": 167,
    "category": "meals",
    "name": {
      "ar": "Chicken BBQ Meal",
      "en": "Chicken BBQ Meal"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 270,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=167"
  },
  {
    "id": 168,
    "category": "meals",
    "name": {
      "ar": "Beef Steak Meal",
      "en": "Beef Steak Meal"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 330,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=168"
  },
  {
    "id": 169,
    "category": "meals",
    "name": {
      "ar": "Beef BBQ Meal",
      "en": "Beef BBQ Meal"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 195,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=169"
  },
  {
    "id": 170,
    "category": "meals",
    "name": {
      "ar": "Grilled Kofta Meal",
      "en": "Grilled Kofta Meal"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 255,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=170"
  },
  {
    "id": 171,
    "category": "meals",
    "name": {
      "ar": "Chicken Fajita Meal",
      "en": "Chicken Fajita Meal"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 195,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=171"
  },
  {
    "id": 172,
    "category": "meals",
    "name": {
      "ar": "Chicken Cordon Bleu",
      "en": "Chicken Cordon Bleu"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 310,
    "tag": "NEW",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=172"
  },
  {
    "id": 173,
    "category": "meals",
    "name": {
      "ar": "Chicken Parmesan",
      "en": "Chicken Parmesan"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 230,
    "tag": "SIGNATURE",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=173"
  },
  {
    "id": 174,
    "category": "meals",
    "name": {
      "ar": "Grilled Fish Meal",
      "en": "Grilled Fish Meal"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 260,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=174"
  },
  {
    "id": 175,
    "category": "meals",
    "name": {
      "ar": "Shrimp Meal",
      "en": "Shrimp Meal"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 255,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=175"
  },
  {
    "id": 176,
    "category": "meals",
    "name": {
      "ar": "Mixed Grill",
      "en": "Mixed Grill"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 205,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/grilledchicken,platedmeal/all?lock=176"
  },
  {
    "id": 177,
    "category": "kids",
    "name": {
      "ar": "Kids Chicken Burger",
      "en": "Kids Chicken Burger"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 135,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=177"
  },
  {
    "id": 178,
    "category": "kids",
    "name": {
      "ar": "Kids Cheeseburger",
      "en": "Kids Cheeseburger"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 120,
    "tag": "BEST SELLER",
   // "image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=178"
  },
  {
    "id": 179,
    "category": "kids",
    "name": {
      "ar": "Kids Crispy Chicken",
      "en": "Kids Crispy Chicken"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 105,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=179"
  },
  {
    "id": 180,
    "category": "kids",
    "name": {
      "ar": "Chicken Nuggets",
      "en": "Chicken Nuggets"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 90,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=180"
  },
  {
    "id": 181,
    "category": "kids",
    "name": {
      "ar": "Mini Pizza",
      "en": "Mini Pizza"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 80,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=181"
  },
  {
    "id": 182,
    "category": "kids",
    "name": {
      "ar": "Mini Pasta",
      "en": "Mini Pasta"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 80,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=182"
  },
  {
    "id": 183,
    "category": "kids",
    "name": {
      "ar": "Mini Pancakes",
      "en": "Mini Pancakes"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 95,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=183"
  },
  {
    "id": 184,
    "category": "kids",
    "name": {
      "ar": "Mini Waffle",
      "en": "Mini Waffle"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 130,
    "tag": "NEW",
   // "image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=184"
  },
  {
    "id": 185,
    "category": "kids",
    "name": {
      "ar": "Mini Grilled Cheese",
      "en": "Mini Grilled Cheese"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 120,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=185"
  },
  {
    "id": 186,
    "category": "kids",
    "name": {
      "ar": "Kids Hot Dog",
      "en": "Kids Hot Dog"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 110,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=186"
  },
  {
    "id": 187,
    "category": "kids",
    "name": {
      "ar": "Mac & Cheese",
      "en": "Mac & Cheese"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 135,
    "tag": "NEW",
    //"image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=187"
  },
  {
    "id": 188,
    "category": "kids",
    "name": {
      "ar": "Kids Combo",
      "en": "Kids Combo"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 95,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/kidsmeal,chickennuggets/all?lock=188"
  },
  {
    "id": 189,
    "category": "hotdrinks",
    "name": {
      "ar": "Espresso",
      "en": "Espresso"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 55,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=189"
  },
  {
    "id": 190,
    "category": "hotdrinks",
    "name": {
      "ar": "Double Espresso",
      "en": "Double Espresso"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 45,
    "tag": "SIGNATURE",
    //"image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=190"
  },
  {
    "id": 191,
    "category": "hotdrinks",
    "name": {
      "ar": "Americano",
      "en": "Americano"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 70,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=191"
  },
  {
    "id": 192,
    "category": "hotdrinks",
    "name": {
      "ar": "Cappuccino",
      "en": "Cappuccino"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 75,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=192"
  },
  {
    "id": 193,
    "category": "hotdrinks",
    "name": {
      "ar": "Café Latte",
      "en": "Café Latte"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 60,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=193"
  },
  {
    "id": 194,
    "category": "hotdrinks",
    "name": {
      "ar": "Flat White",
      "en": "Flat White"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 50,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=194"
  },
  {
    "id": 195,
    "category": "hotdrinks",
    "name": {
      "ar": "Mocha",
      "en": "Mocha"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 45,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=195"
  },
  {
    "id": 196,
    "category": "hotdrinks",
    "name": {
      "ar": "Spanish Latte",
      "en": "Spanish Latte"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 60,
    "tag": "SIGNATURE",
    //"image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=196"
  },
  {
    "id": 197,
    "category": "hotdrinks",
    "name": {
      "ar": "Caramel Latte",
      "en": "Caramel Latte"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 80,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=197"
  },
  {
    "id": 198,
    "category": "hotdrinks",
    "name": {
      "ar": "Vanilla Latte",
      "en": "Vanilla Latte"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 60,
    "tag": "CHEF'S PICK",
    //"image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=198"
  },
  {
    "id": 199,
    "category": "hotdrinks",
    "name": {
      "ar": "Hazelnut Latte",
      "en": "Hazelnut Latte"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 60,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=199"
  },
  {
    "id": 200,
    "category": "hotdrinks",
    "name": {
      "ar": "Pistachio Latte",
      "en": "Pistachio Latte"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 65,
    "tag": "",
  //  "image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=200"
  },
  {
    "id": 201,
    "category": "hotdrinks",
    "name": {
      "ar": "Hot Chocolate",
      "en": "Hot Chocolate"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 65,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=201"
  },
  {
    "id": 202,
    "category": "hotdrinks",
    "name": {
      "ar": "Matcha Latte",
      "en": "Matcha Latte"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 75,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=202"
  },
  {
    "id": 203,
    "category": "hotdrinks",
    "name": {
      "ar": "Chai Latte",
      "en": "Chai Latte"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 70,
    "tag": "",
   // "image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=203"
  },
  {
    "id": 204,
    "category": "hotdrinks",
    "name": {
      "ar": "Turkish Coffee",
      "en": "Turkish Coffee"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 50,
    "tag": "",
    "image": "https://loremflickr.com/640/520/espresso,latteart/all?lock=204"
  },
  {
    "id": 205,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Americano",
      "en": "Iced Americano"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 75,
    "tag": "SIGNATURE",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=205"
  },
  {
    "id": 206,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Latte",
      "en": "Iced Latte"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 75,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=206"
  },
  {
    "id": 207,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Spanish Latte",
      "en": "Iced Spanish Latte"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=207"
  },
  {
    "id": 208,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Mocha",
      "en": "Iced Mocha"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=208"
  },
  {
    "id": 209,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Caramel Latte",
      "en": "Iced Caramel Latte"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 60,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=209"
  },
  {
    "id": 210,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Vanilla Latte",
      "en": "Iced Vanilla Latte"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 70,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=210"
  },
  {
    "id": 211,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Pistachio Latte",
      "en": "Iced Pistachio Latte"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 85,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=211"
  },
  {
    "id": 212,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Matcha",
      "en": "Iced Matcha"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 70,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=212"
  },
  {
    "id": 213,
    "category": "coldcoffee",
    "name": {
      "ar": "Cold Brew",
      "en": "Cold Brew"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 60,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=213"
  },
  {
    "id": 214,
    "category": "coldcoffee",
    "name": {
      "ar": "Vanilla Cold Brew",
      "en": "Vanilla Cold Brew"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=214"
  },
  {
    "id": 215,
    "category": "coldcoffee",
    "name": {
      "ar": "Caramel Cold Brew",
      "en": "Caramel Cold Brew"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 60,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=215"
  },
  {
    "id": 216,
    "category": "coldcoffee",
    "name": {
      "ar": "Iced Cappuccino",
      "en": "Iced Cappuccino"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 75,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=216"
  },
  {
    "id": 217,
    "category": "coldcoffee",
    "name": {
      "ar": "Signature Iced Coffee",
      "en": "Signature Iced Coffee"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icedcoffee,coldbrew/all?lock=217"
  },
  {
    "id": 218,
    "category": "milkshakes",
    "name": {
      "ar": "Vanilla",
      "en": "Vanilla"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 105,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=218"
  },
  {
    "id": 219,
    "category": "milkshakes",
    "name": {
      "ar": "Chocolate",
      "en": "Chocolate"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=219"
  },
  {
    "id": 220,
    "category": "milkshakes",
    "name": {
      "ar": "Strawberry",
      "en": "Strawberry"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 115,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=220"
  },
  {
    "id": 221,
    "category": "milkshakes",
    "name": {
      "ar": "Oreo",
      "en": "Oreo"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=221"
  },
  {
    "id": 222,
    "category": "milkshakes",
    "name": {
      "ar": "Lotus",
      "en": "Lotus"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 105,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=222"
  },
  {
    "id": 223,
    "category": "milkshakes",
    "name": {
      "ar": "Kinder",
      "en": "Kinder"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=223"
  },
  {
    "id": 224,
    "category": "milkshakes",
    "name": {
      "ar": "Nutella",
      "en": "Nutella"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=224"
  },
  {
    "id": 225,
    "category": "milkshakes",
    "name": {
      "ar": "Pistachio",
      "en": "Pistachio"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=225"
  },
  {
    "id": 226,
    "category": "milkshakes",
    "name": {
      "ar": "Caramel",
      "en": "Caramel"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 120,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=226"
  },
  {
    "id": 227,
    "category": "milkshakes",
    "name": {
      "ar": "Cookies & Cream",
      "en": "Cookies & Cream"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 125,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=227"
  },
  {
    "id": 228,
    "category": "milkshakes",
    "name": {
      "ar": "Brownie",
      "en": "Brownie"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=228"
  },
  {
    "id": 229,
    "category": "milkshakes",
    "name": {
      "ar": "Ferrero",
      "en": "Ferrero"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 105,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=229"
  },
  {
    "id": 230,
    "category": "milkshakes",
    "name": {
      "ar": "Mango",
      "en": "Mango"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 110,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=230"
  },
  {
    "id": 231,
    "category": "milkshakes",
    "name": {
      "ar": "Signature Milkshake",
      "en": "Signature Milkshake"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/milkshake/all?lock=231"
  },
  {
    "id": 232,
    "category": "frappes",
    "name": {
      "ar": "Coffee Frappe",
      "en": "Coffee Frappe"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=232"
  },
  {
    "id": 233,
    "category": "frappes",
    "name": {
      "ar": "Caramel Frappe",
      "en": "Caramel Frappe"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 90,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=233"
  },
  {
    "id": 234,
    "category": "frappes",
    "name": {
      "ar": "Mocha Frappe",
      "en": "Mocha Frappe"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=234"
  },
  {
    "id": 235,
    "category": "frappes",
    "name": {
      "ar": "Vanilla Frappe",
      "en": "Vanilla Frappe"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=235"
  },
  {
    "id": 236,
    "category": "frappes",
    "name": {
      "ar": "Hazelnut Frappe",
      "en": "Hazelnut Frappe"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=236"
  },
  {
    "id": 237,
    "category": "frappes",
    "name": {
      "ar": "Spanish Frappe",
      "en": "Spanish Frappe"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=237"
  },
  {
    "id": 238,
    "category": "frappes",
    "name": {
      "ar": "Oreo Frappe",
      "en": "Oreo Frappe"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 95,
    "tag": "NEW",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=238"
  },
  {
    "id": 239,
    "category": "frappes",
    "name": {
      "ar": "Lotus Frappe",
      "en": "Lotus Frappe"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=239"
  },
  {
    "id": 240,
    "category": "frappes",
    "name": {
      "ar": "Kinder Frappe",
      "en": "Kinder Frappe"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=240"
  },
  {
    "id": 241,
    "category": "frappes",
    "name": {
      "ar": "Pistachio Frappe",
      "en": "Pistachio Frappe"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 95,
    "tag": "SIGNATURE",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=241"
  },
  {
    "id": 242,
    "category": "frappes",
    "name": {
      "ar": "Coconut Frappe",
      "en": "Coconut Frappe"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 115,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=242"
  },
  {
    "id": 243,
    "category": "frappes",
    "name": {
      "ar": "Signature Frappe",
      "en": "Signature Frappe"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/frappe,icedcoffeedrink/all?lock=243"
  },
  {
    "id": 244,
    "category": "smoothies",
    "name": {
      "ar": "Strawberry Smoothie",
      "en": "Strawberry Smoothie"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=244"
  },
  {
    "id": 245,
    "category": "smoothies",
    "name": {
      "ar": "Mango Smoothie",
      "en": "Mango Smoothie"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=245"
  },
  {
    "id": 246,
    "category": "smoothies",
    "name": {
      "ar": "Banana Smoothie",
      "en": "Banana Smoothie"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=246"
  },
  {
    "id": 247,
    "category": "smoothies",
    "name": {
      "ar": "Blueberry Smoothie",
      "en": "Blueberry Smoothie"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=247"
  },
  {
    "id": 248,
    "category": "smoothies",
    "name": {
      "ar": "Mixed Berry Smoothie",
      "en": "Mixed Berry Smoothie"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 105,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=248"
  },
  {
    "id": 249,
    "category": "smoothies",
    "name": {
      "ar": "Peach Smoothie",
      "en": "Peach Smoothie"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=249"
  },
  {
    "id": 250,
    "category": "smoothies",
    "name": {
      "ar": "Pineapple Smoothie",
      "en": "Pineapple Smoothie"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=250"
  },
  {
    "id": 251,
    "category": "smoothies",
    "name": {
      "ar": "Avocado Smoothie",
      "en": "Avocado Smoothie"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=251"
  },
  {
    "id": 252,
    "category": "smoothies",
    "name": {
      "ar": "Tropical Smoothie",
      "en": "Tropical Smoothie"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=252"
  },
  {
    "id": 253,
    "category": "smoothies",
    "name": {
      "ar": "Green Smoothie",
      "en": "Green Smoothie"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=253"
  },
  {
    "id": 254,
    "category": "smoothies",
    "name": {
      "ar": "Signature Smoothie",
      "en": "Signature Smoothie"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/smoothie,fruitsmoothie/all?lock=254"
  },
  {
    "id": 255,
    "category": "juices",
    "name": {
      "ar": "Orange Juice",
      "en": "Orange Juice"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 70,
    "tag": "",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=255"
  },
  {
    "id": 256,
    "category": "juices",
    "name": {
      "ar": "Lemon Mint",
      "en": "Lemon Mint"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 55,
    "tag": "",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=256"
  },
  {
    "id": 257,
    "category": "juices",
    "name": {
      "ar": "Mango Juice",
      "en": "Mango Juice"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 65,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=257"
  },
  {
    "id": 258,
    "category": "juices",
    "name": {
      "ar": "Strawberry Juice",
      "en": "Strawberry Juice"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 50,
    "tag": "CHEF'S PICK",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=258"
  },
  {
    "id": 259,
    "category": "juices",
    "name": {
      "ar": "Watermelon Juice",
      "en": "Watermelon Juice"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 70,
    "tag": "NEW",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=259"
  },
  {
    "id": 260,
    "category": "juices",
    "name": {
      "ar": "Pineapple Juice",
      "en": "Pineapple Juice"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 50,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=260"
  },
  {
    "id": 261,
    "category": "juices",
    "name": {
      "ar": "Guava Juice",
      "en": "Guava Juice"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 60,
    "tag": "",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=261"
  },
  {
    "id": 262,
    "category": "juices",
    "name": {
      "ar": "Passion Fruit",
      "en": "Passion Fruit"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 60,
    "tag": "",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=262"
  },
  {
    "id": 263,
    "category": "juices",
    "name": {
      "ar": "Pomegranate Juice",
      "en": "Pomegranate Juice"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 50,
    "tag": "",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=263"
  },
  {
    "id": 264,
    "category": "juices",
    "name": {
      "ar": "Carrot Juice",
      "en": "Carrot Juice"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 60,
    "tag": "",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=264"
  },
  {
    "id": 265,
    "category": "juices",
    "name": {
      "ar": "Avocado Milk",
      "en": "Avocado Milk"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 65,
    "tag": "",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=265"
  },
  {
    "id": 266,
    "category": "juices",
    "name": {
      "ar": "Signature Fresh Juice",
      "en": "Signature Fresh Juice"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 45,
    "tag": "",
    "image": "https://loremflickr.com/640/520/freshjuice,orangejuice/all?lock=266"
  },
  {
    "id": 267,
    "category": "cocktails",
    "name": {
      "ar": "Blue Lagoon",
      "en": "Blue Lagoon"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=267"
  },
  {
    "id": 268,
    "category": "cocktails",
    "name": {
      "ar": "Shirley Temple",
      "en": "Shirley Temple"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=268"
  },
  {
    "id": 269,
    "category": "cocktails",
    "name": {
      "ar": "Virgin Mojito",
      "en": "Virgin Mojito"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=269"
  },
  {
    "id": 270,
    "category": "cocktails",
    "name": {
      "ar": "Strawberry Mojito",
      "en": "Strawberry Mojito"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=270"
  },
  {
    "id": 271,
    "category": "cocktails",
    "name": {
      "ar": "Mango Mojito",
      "en": "Mango Mojito"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=271"
  },
  {
    "id": 272,
    "category": "cocktails",
    "name": {
      "ar": "Passion Fruit Mojito",
      "en": "Passion Fruit Mojito"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=272"
  },
  {
    "id": 273,
    "category": "cocktails",
    "name": {
      "ar": "Blueberry Mojito",
      "en": "Blueberry Mojito"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 70,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=273"
  },
  {
    "id": 274,
    "category": "cocktails",
    "name": {
      "ar": "Strawberry Lemonade",
      "en": "Strawberry Lemonade"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=274"
  },
  {
    "id": 275,
    "category": "cocktails",
    "name": {
      "ar": "Raspberry Lemonade",
      "en": "Raspberry Lemonade"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 105,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=275"
  },
  {
    "id": 276,
    "category": "cocktails",
    "name": {
      "ar": "Tropical Mix",
      "en": "Tropical Mix"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 70,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=276"
  },
  {
    "id": 277,
    "category": "cocktails",
    "name": {
      "ar": "Berry Blast",
      "en": "Berry Blast"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 70,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=277"
  },
  {
    "id": 278,
    "category": "cocktails",
    "name": {
      "ar": "Signature Mocktail",
      "en": "Signature Mocktail"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 100,
    "tag": "NEW",
    "image": "https://loremflickr.com/640/520/mocktail,cocktaildrink/all?lock=278"
  },
  {
    "id": 279,
    "category": "mojitos",
    "name": {
      "ar": "Classic Mojito",
      "en": "Classic Mojito"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 110,
    "tag": "SIGNATURE",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=279"
  },
  {
    "id": 280,
    "category": "mojitos",
    "name": {
      "ar": "Mint Mojito",
      "en": "Mint Mojito"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 95,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=280"
  },
  {
    "id": 281,
    "category": "mojitos",
    "name": {
      "ar": "Strawberry Mojito",
      "en": "Strawberry Mojito"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=281"
  },
  {
    "id": 282,
    "category": "mojitos",
    "name": {
      "ar": "Mango Mojito",
      "en": "Mango Mojito"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 100,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=282"
  },
  {
    "id": 283,
    "category": "mojitos",
    "name": {
      "ar": "Passion Fruit Mojito",
      "en": "Passion Fruit Mojito"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 105,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=283"
  },
  {
    "id": 284,
    "category": "mojitos",
    "name": {
      "ar": "Blueberry Mojito",
      "en": "Blueberry Mojito"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 105,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=284"
  },
  {
    "id": 285,
    "category": "mojitos",
    "name": {
      "ar": "Peach Mojito",
      "en": "Peach Mojito"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=285"
  },
  {
    "id": 286,
    "category": "mojitos",
    "name": {
      "ar": "Watermelon Mojito",
      "en": "Watermelon Mojito"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 75,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=286"
  },
  {
    "id": 287,
    "category": "mojitos",
    "name": {
      "ar": "Pineapple Mojito",
      "en": "Pineapple Mojito"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 100,
    "tag": "CHEF'S PICK",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=287"
  },
  {
    "id": 288,
    "category": "mojitos",
    "name": {
      "ar": "Green Apple Mojito",
      "en": "Green Apple Mojito"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=288"
  },
  {
    "id": 289,
    "category": "mojitos",
    "name": {
      "ar": "Berry Mojito",
      "en": "Berry Mojito"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 75,
    "tag": "",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=289"
  },
  {
    "id": 290,
    "category": "mojitos",
    "name": {
      "ar": "Signature Mojito",
      "en": "Signature Mojito"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 90,
    "tag": "SIGNATURE",
    "image": "https://loremflickr.com/640/520/mojito,mintdrink/all?lock=290"
  },
  {
    "id": 291,
    "category": "softdrinks",
    "name": {
      "ar": "Coca-Cola",
      "en": "Coca-Cola"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 30,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=291"
  },
  {
    "id": 292,
    "category": "softdrinks",
    "name": {
      "ar": "Coca-Cola Zero",
      "en": "Coca-Cola Zero"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 35,
    "tag": "NEW",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=292"
  },
  {
    "id": 293,
    "category": "softdrinks",
    "name": {
      "ar": "Pepsi",
      "en": "Pepsi"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 55,
    "tag": "NEW",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=293"
  },
  {
    "id": 294,
    "category": "softdrinks",
    "name": {
      "ar": "7UP",
      "en": "7UP"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 35,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=294"
  },
  {
    "id": 295,
    "category": "softdrinks",
    "name": {
      "ar": "Sprite",
      "en": "Sprite"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 40,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=295"
  },
  {
    "id": 296,
    "category": "softdrinks",
    "name": {
      "ar": "Fanta Orange",
      "en": "Fanta Orange"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 35,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=296"
  },
  {
    "id": 297,
    "category": "softdrinks",
    "name": {
      "ar": "Schweppes",
      "en": "Schweppes"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 55,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=297"
  },
  {
    "id": 298,
    "category": "softdrinks",
    "name": {
      "ar": "Tonic Water",
      "en": "Tonic Water"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 35,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=298"
  },
  {
    "id": 299,
    "category": "softdrinks",
    "name": {
      "ar": "Sparkling Water",
      "en": "Sparkling Water"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 30,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=299"
  },
  {
    "id": 300,
    "category": "softdrinks",
    "name": {
      "ar": "Red Bull",
      "en": "Red Bull"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 40,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=300"
  },
  {
    "id": 301,
    "category": "softdrinks",
    "name": {
      "ar": "Iced Tea",
      "en": "Iced Tea"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 45,
    "tag": "",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=301"
  },
  {
    "id": 302,
    "category": "softdrinks",
    "name": {
      "ar": "Peach Iced Tea",
      "en": "Peach Iced Tea"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 55,
    "tag": "SIGNATURE",
    "image": "https://loremflickr.com/640/520/softdrink,sodaglass/all?lock=302"
  },
  {
    "id": 303,
    "category": "desserts",
    "name": {
      "ar": "Chocolate Cake",
      "en": "Chocolate Cake"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 130,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=303"
  },
  {
    "id": 304,
    "category": "desserts",
    "name": {
      "ar": "Red Velvet Cake",
      "en": "Red Velvet Cake"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 135,
    "tag": "CHEF'S PICK",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=304"
  },
  {
    "id": 305,
    "category": "desserts",
    "name": {
      "ar": "Cheesecake",
      "en": "Cheesecake"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 140,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=305"
  },
  {
    "id": 306,
    "category": "desserts",
    "name": {
      "ar": "Lotus Cheesecake",
      "en": "Lotus Cheesecake"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 135,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=306"
  },
  {
    "id": 307,
    "category": "desserts",
    "name": {
      "ar": "Brownie",
      "en": "Brownie"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=307"
  },
  {
    "id": 308,
    "category": "desserts",
    "name": {
      "ar": "Molten Lava Cake",
      "en": "Molten Lava Cake"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 130,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=308"
  },
  {
    "id": 309,
    "category": "desserts",
    "name": {
      "ar": "Tiramisu",
      "en": "Tiramisu"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=309"
  },
  {
    "id": 310,
    "category": "desserts",
    "name": {
      "ar": "Crème Brûlée",
      "en": "Crème Brûlée"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 135,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=310"
  },
  {
    "id": 311,
    "category": "desserts",
    "name": {
      "ar": "Apple Pie",
      "en": "Apple Pie"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 125,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=311"
  },
  {
    "id": 312,
    "category": "desserts",
    "name": {
      "ar": "Chocolate Tart",
      "en": "Chocolate Tart"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=312"
  },
  {
    "id": 313,
    "category": "desserts",
    "name": {
      "ar": "Lotus Cake",
      "en": "Lotus Cake"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 120,
    "tag": "NEW",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=313"
  },
  {
    "id": 314,
    "category": "desserts",
    "name": {
      "ar": "Chocolate Mousse",
      "en": "Chocolate Mousse"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 110,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=314"
  },
  {
    "id": 315,
    "category": "desserts",
    "name": {
      "ar": "Panna Cotta",
      "en": "Panna Cotta"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 120,
    "tag": "",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=315"
  },
  {
    "id": 316,
    "category": "desserts",
    "name": {
      "ar": "Signature Dessert",
      "en": "Signature Dessert"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 115,
    "tag": "SIGNATURE",
    "image": "https://loremflickr.com/640/520/dessert,chocolatecake/all?lock=316"
  },
  {
    "id": 317,
    "category": "icecream",
    "name": {
      "ar": "Vanilla",
      "en": "Vanilla"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 75,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=317"
  },
  {
    "id": 318,
    "category": "icecream",
    "name": {
      "ar": "Chocolate",
      "en": "Chocolate"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=318"
  },
  {
    "id": 319,
    "category": "icecream",
    "name": {
      "ar": "Strawberry",
      "en": "Strawberry"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 75,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=319"
  },
  {
    "id": 320,
    "category": "icecream",
    "name": {
      "ar": "Mango",
      "en": "Mango"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 70,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=320"
  },
  {
    "id": 321,
    "category": "icecream",
    "name": {
      "ar": "Pistachio",
      "en": "Pistachio"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 60,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=321"
  },
  {
    "id": 322,
    "category": "icecream",
    "name": {
      "ar": "Caramel",
      "en": "Caramel"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 90,
    "tag": "CHEF'S PICK",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=322"
  },
  {
    "id": 323,
    "category": "icecream",
    "name": {
      "ar": "Cookies & Cream",
      "en": "Cookies & Cream"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=323"
  },
  {
    "id": 324,
    "category": "icecream",
    "name": {
      "ar": "Oreo",
      "en": "Oreo"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=324"
  },
  {
    "id": 325,
    "category": "icecream",
    "name": {
      "ar": "Lotus",
      "en": "Lotus"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=325"
  },
  {
    "id": 326,
    "category": "icecream",
    "name": {
      "ar": "Kinder",
      "en": "Kinder"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 65,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=326"
  },
  {
    "id": 327,
    "category": "icecream",
    "name": {
      "ar": "Salted Caramel",
      "en": "Salted Caramel"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=327"
  },
  {
    "id": 328,
    "category": "icecream",
    "name": {
      "ar": "Mixed Flavors",
      "en": "Mixed Flavors"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/icecream,gelato/all?lock=328"
  },
  {
    "id": 329,
    "category": "boba",
    "name": {
      "ar": "Classic Milk Tea",
      "en": "Classic Milk Tea"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=329"
  },
  {
    "id": 330,
    "category": "boba",
    "name": {
      "ar": "Brown Sugar Milk Tea",
      "en": "Brown Sugar Milk Tea"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 80,
    "tag": "",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=330"
  },
  {
    "id": 331,
    "category": "boba",
    "name": {
      "ar": "Taro Milk Tea",
      "en": "Taro Milk Tea"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 90,
    "tag": "",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=331"
  },
  {
    "id": 332,
    "category": "boba",
    "name": {
      "ar": "Matcha Milk Tea",
      "en": "Matcha Milk Tea"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 70,
    "tag": "CHEF'S PICK",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=332"
  },
  {
    "id": 333,
    "category": "boba",
    "name": {
      "ar": "Thai Milk Tea",
      "en": "Thai Milk Tea"
    },
    "description": {
      "ar": "لمستنا الخاصة على طبق كلاسيكي بمكونات فاخرة.",
      "en": "Our take on a classic, elevated with premium ingredients."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=333"
  },
  {
    "id": 334,
    "category": "boba",
    "name": {
      "ar": "Chocolate Milk Tea",
      "en": "Chocolate Milk Tea"
    },
    "description": {
      "ar": "يُجهّز يدويًا ويُقدَّم طازة وممتلئ بالنكهة.",
      "en": "Hand-prepared, plated fresh, and full of flavor."
    },
    "price": 100,
    "tag": "CHEF'S PICK",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=334"
  },
  {
    "id": 335,
    "category": "boba",
    "name": {
      "ar": "Strawberry Milk Tea",
      "en": "Strawberry Milk Tea"
    },
    "description": {
      "ar": "طبق كلاسيكي مريح بأسلوب سوبر منيو.",
      "en": "A comforting classic done the Super Menu way."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=335"
  },
  {
    "id": 336,
    "category": "boba",
    "name": {
      "ar": "Mango Milk Tea",
      "en": "Mango Milk Tea"
    },
    "description": {
      "ar": "يُحضّر طازة عند الطلب بوصفتنا الخاصة — من الأطباق المفضلة لدى ضيوفنا.",
      "en": "Made fresh to order with our house recipe — a guest favorite."
    },
    "price": 85,
    "tag": "",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=336"
  },
  {
    "id": 337,
    "category": "boba",
    "name": {
      "ar": "Passion Fruit Tea",
      "en": "Passion Fruit Tea"
    },
    "description": {
      "ar": "طبق مميز يقدَّم بأسلوب شيفاتنا الخاص.",
      "en": "A signature dish, plated the way our chefs love to serve it."
    },
    "price": 70,
    "tag": "BEST SELLER",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=337"
  },
  {
    "id": 338,
    "category": "boba",
    "name": {
      "ar": "Peach Tea",
      "en": "Peach Tea"
    },
    "description": {
      "ar": "طعم غني وكمية سخية مع لمسة مميزة من المطعم.",
      "en": "Rich in flavor, generous in portion, finished with a house touch."
    },
    "price": 75,
    "tag": "",
    "image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=338"
  },
  {
    "id": 339,
    "category": "boba",
    "name": {
      "ar": "Lychee Tea",
      "en": "Lychee Tea"
    },
    "description": {
      "ar": "يُحضّر يوميًا من مكونات مختارة بعناية.",
      "en": "Crafted daily from carefully sourced ingredients."
    },
    "price": 75,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=339"
  },
  {
    "id": 340,
    "category": "boba",
    "name": {
      "ar": "Signature Boba",
      "en": "Signature Boba"
    },
    "description": {
      "ar": "من الأطباق المفضلة لدى الجميع — متوازن وشهي.",
      "en": "A crowd favorite — balanced, bold, and satisfying."
    },
    "price": 90,
    "tag": "",
    //"image": "https://loremflickr.com/640/520/bubbletea,boba/all?lock=340"
  }
];