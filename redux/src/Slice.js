import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    product: [
      {
        id: 19,
        name: "laptop",
        image: require("./images/laptop-2.jpg"),
        productDiscription:
        "Lenovo IdeaPad Slim 1 Intel Celeron N4020 4th Gen 11.6'' (29.46cm) HD Thin & Light Laptop (4GB/256GB SSD/Windows 11/Office 2021/3months Game Pass/Platinum Grey/1.2Kg)",
        sellingPrice: "19,999",
        offerPrice: "34,499",
        delivery: "FREE Delivery by Amazon",
      },
      
      {
        id: 1,
        name: "mobile",
        image: require("./images/mobile-1.jpg"),
        productDiscription:
        'Xiaomi Redmi A1 4G 32GB + 2GB Global Version Factory Unlocked 6.52" 8MP Dual Camera (Not USA Market) + (w/Fast Car Charger Bundle + 64GB SD) (Black)',
        sellingPrice: "9,499",
        offerPrice: "14,499",
        delivery: "FREE Delivery by Amazon"
      },
      {
        id: 28,
        name: "camera",
        image: require("./images/camera-5.jpg"),
        productDiscription:
        "Nikon D850 45.7MP Digital SLR Camera (Black) with AF-S Nikkor 24-120mm F/4G ED VR Lens and 64GB Memory Card",
        sellingPrice: "79,900",
        offerPrice: "99,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 2,
        name: "mobile",
        image: require("./images/mobile-2.jpg"),
        productDiscription:
          "Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        sellingPrice: "14,499",
        offerPrice: "20,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 15,
        name: "tv",
        image: require("./images/tv-5.jpg"),
        productDiscription:
        "OnePlus 126 cm (50 inches) Y Series 4K Ultra HD Smart Android LED TV 50Y1S Pro (Black)",
        sellingPrice: "29,999",
        offerPrice: "45,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 3,
        name: "mobile",
        image: require("./images/mobile-3.jpg"),
        productDiscription:
          "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        sellingPrice: "29,900",
        offerPrice: "74,999",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 10,
        name: "tv",
        image: require("./images/tv-1.jpg"),
        productDiscription:
        "Vu 139 cm (55 inches) The Masterpiece Glo Series 4K Ultra HD Smart Android QLED TV 55QMP (Armani Gold) (2022 Model) | Built in 4.1 Speaker",        
        sellingPrice: "68,499",
        offerPrice: "80,000",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 11,
        name: "tv",
        image: require("./images/tv-2.jpg"),
        productDiscription:
        "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)",
        sellingPrice: "13,499",
        offerPrice: "24,000",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 4,
        name: "mobile",
        image: require("./images/mobile-4.jpg"),
        productDiscription:
          "Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
        sellingPrice: "62,999",
        offerPrice: "85,999",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 5,
        name: "mobile",
        image: require("./images/mobile-5.jpg"),
        productDiscription:
        "Redmi Note 11 (Starburst White, 4GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | Alexa Built-in | 33W Charger Included | Get 2 Months of",
        sellingPrice: "12,999",
        offerPrice: "17,999",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 22,
        name: "laptop",
        image: require("./images/laptop-5.jpg"),
        productDiscription:
        "Lenovo IdeaPad Slim 3 Intel Celeron N4020 4th Gen 15.6 (39.62cm) HD Thin & Light Laptop (8GB/256GB SSD/Windows 11/Office 2021/2Yr Warranty/3months Game Pass/Platinum",
        sellingPrice: "24,900",
        offerPrice: "34,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 6,
        name: "mobile",
        image: require("./images/mobile-6.jpg"),
        productDiscription:
        "Redmi 10A (Sea Blue, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
        sellingPrice: "8,499",
        offerPrice: "11,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 7,
        name: "mobile",
        image: require("./images/mobile-7.jpg"),
        productDiscription:
        "OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
        sellingPrice: "24,998",
        offerPrice: "29,499",
        delivery: "FREE Delivery by Amazon",
      },
     
      {
        id: 12,
        name: "tv",
        image: require("./images/tv-3.jpg"),
        productDiscription:
          "OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 ",
        sellingPrice: "11,499",
        offerPrice: "29,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 21,
        name: "laptop",
        image: require("./images/laptop-4.jpg"),
        productDiscription:
        "ASUS Vivobook 15, 15.6-inch (39.62 cms) FHD, AMD Ryzen 3 3200U, Thin and Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Silver/1.68 kg), X512DA-",
        sellingPrice: "26,999",
        offerPrice: "50,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 13,
        name: "tv",
        image: require("./images/tv-4.jpg"),
        productDiscription:
        "OnePlus 126 cm (50 inches) Y Series 4K Ultra HD Smart Android LED TV 50Y1S Pro (Black)",
        sellingPrice: "29,999",
        offerPrice: "45,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 14,
        name: "tv",
        image: require("./images/tv-5.jpg"),
        productDiscription:
        'Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)',
        sellingPrice: "29,999",
        offerPrice: "45,499",
        delivery: "FREE Delivery by Amazon",
      },
      
      {
        id: 16,
        name: "tv",
        image: require("./images/tv-7.jpg"),
        productDiscription:
        "Mi 80 cm (32 inches) 5A Series HD Ready Smart Android LED TV L32M7-5AIN (Black)",
        sellingPrice: "19,999",
        offerPrice: "25,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 17,
        name: "tv",
        image: require("./images/tv-8.jpg"),
        productDiscription:
        "Redmi 108 cm (43 inches) Android 11 Series Full HD Smart LED TV L43M6-RA/L43M7-RA (Black)",
        sellingPrice: "19,999",
        offerPrice: "34,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 18,
        name: "laptop",
        image: require("./images/laptop-1.jpg"),
        productDiscription:
        "Honor MagicBook 15, AMD Ryzen 5 5500U 15.6-inch (39.62 cm) FHD IPS Anti-Glare Thin and Light Laptop (8GB/256GB PCIe SSD/Windows 11/ Metal Body/Fingerprint Login/1.54Kg), Gray,",
        sellingPrice: "36,999",
        offerPrice: "55,499",
        delivery: "FREE Delivery by Amazon",
      },
      
      {
        id: 20,
        name: "laptop",
        image: require("./images/laptop-3.jpg"),
        productDiscription:
        "Honor MagicBook 15, AMD Ryzen 5 5500U 15.6-inch (39.62 cm) FHD IPS Anti-Glare Thin and Light Laptop (8GB/256GB PCIe SSD/Windows 11/ Metal Body/Fingerprint Login/1.54Kg), Gray,",
        sellingPrice: "36,999",
        offerPrice: "44,499",
        delivery: "FREE Delivery by Amazon",
      },
     
      
      {
        id: 23,
        name: "laptop",
        image: require("./images/laptop-6.jpg"),
        productDiscription:
        "Dell New Windows 11 Inspiron 3525 Laptop, Intel Athlon Silver 3050U, Win11 + Office 21, 8GB GDDR4, 256GB SSD, Radeon Graphics, 15.6 (39.62Cms) HD AG - D560766WIN9BE1.68Kgs",
        sellingPrice: "29,900",
        offerPrice: "32,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 24,
        name: "camera",
        image: require("./images/camera-1.jpg"),
        productDiscription:
        "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
        sellingPrice: "36,900",
        offerPrice: "42,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 25,
        name: "camera",
        image: require("./images/camera-2.jpg"),
        productDiscription:
        "Sony HDRCX405 Optical 30X 9.2MP HD Handycam Camcorder with Free Carrying Case (Black)",
        sellingPrice: "18,900",
        offerPrice: "20,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 8,
        name: "mobile",
        image: require("./images/mobile-8.jpg"),
        productDiscription:
        "OnePlus 10T 5G (Jade Green, 12GB RAM, 256GB Storage)",
        sellingPrice: "54,499",
        offerPrice: "59,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 9,
        name: "mobile",
        image: require("./images/mobile-9.jpg"),
        productDiscription:
        "OnePlus 10T 5G (Moonstone Black, 16GB RAM, 256GB Storage)",
        sellingPrice: "44,499",
        offerPrice: "54,499",
        delivery: "FREE Delivery by Amazon",
      },
      
      {
        id: 26,
        name: "camera",
        image: require("./images/camera-3.jpg"),
        productDiscription:
        "Sony Alpha ILCE-7RM3A Full-Frame 42.4MP Mirrorless Camera Body (4K Full Frame, Real-Time Eye Auto Focus, Real time Animal Eye AF, Tiltable LCD) - Black",
        sellingPrice: "76,900",
        offerPrice: "88,499",
        delivery: "FREE Delivery by Amazon",
      },
      {
        id: 27,
        name: "camera",
        image: require("./images/camera-4.jpg"),
        productDiscription:
        "Nikon D850 45.7MP Digital SLR Camera (Black) with AF-S Nikkor 24-120mm F/4G ED VR Lens and 64GB Memory Card",
        sellingPrice: "29,900",
        offerPrice: "32,499",
        delivery: "FREE Delivery by Amazon",
      },
     
      {
        id: 29,
        name: "camera",
        image: require("./images/camera-6.jpg"),
        productDiscription:
        "Dell New Windows 11 Inspiron 3525 Laptop, Intel Athlon Silver 3050U, Win11 + Office 21, 8GB GDDR4, 256GB SSD, Radeon Graphics, 15.6 (39.62Cms) HD AG - D560766WIN9BE1.68Kgs",
        sellingPrice: "29,900",
        offerPrice: "32,499",
        delivery: "FREE Delivery by Amazon",
      },
      
    ],
    cartItem: [],
    favItem: [],
  },
  reducers: {
    listItem: (state, action) => {
      state.product = action.payload;
    },
    addToCart: (state, action) => {
      state.cartItem = action.payload;
    },
    addTofav: (state, action) => {
      state.favItem = action.payload;
    },
  },
});

export const { listItem, addToCart, addTofav } = slice.actions;
export default slice.reducer;
