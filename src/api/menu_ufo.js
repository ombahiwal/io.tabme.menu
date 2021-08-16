const menu =  {
    "categories": [
        "Bestsellers",
        "Combos",
        "Fries",
        "Corn",
        "Nachos",
        "Burgers",
        "Wraps",
        "Twisters",
        "Waffles",
        "Desserts",
        "Beverages",
        "Nuggets",
        "Pizza",
        "Cheddar Cheese Max Fries",
    ],
    "subcategories": [
        "Regular Fries",
        "Special Fries",
        "Supreme Fries",
        "Exotic Fries",
        "Spicy Fries",
        "Indian Fries",
        "Veg Burgers",
        "Spicy Paneer Burgers",
        "Spicy Paneer Wraps",
        "Veggie Wraps",
        "Combo 1",
        "Combo 2",
        "Combo 3",
        "Twister Combo",
        "Wrap Combo",
        "Iced Tea",
        "Milkshakes",
        "Mocktails",
        "Crushers",
        "Coffee",
        "Non-Alcoholic Beer"
    ],
    "allChoices": [
        {
            "title": "Base",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Belgian Dark Chocolate",
                    "addPrice": "0"
                },
                {
                    "value": "Red Velvet",
                    "addPrice": "0"
                },
                {
                    "value": "Vanilla",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Spread",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Nutella",
                    "addPrice": "0"
                },
                {
                    "value": "Bubble Gum",
                    "addPrice": "0"
                },
                {
                    "value": "Candy Floss",
                    "addPrice": "0"
                },
                {
                    "value": "Dark Chocolate",
                    "addPrice": "0"
                },
                {
                    "value": "Strawberry",
                    "addPrice": "0"
                },
                {
                    "value": "Blueberry",
                    "addPrice": "0"
                },
                {
                    "value": "Coffee",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Topping / Garnish",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Chocolate Sprinklers",
                    "addPrice": "0"
                },
                {
                    "value": "Rainbow Sprinklers",
                    "addPrice": "0"
                },
                {
                    "value": "Pearl Balls",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Choice_iced_tea",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Peach",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Choice_icedtea",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Peach",
                    "addPrice": "0"
                },
                {
                    "value": "Lemon",
                    "addPrice": "0"
                },
                {
                    "value": "Passion",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Choice_mocktail",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Pacific Blue",
                    "addPrice": "0"
                },
                {
                    "value": "Mint Cooler",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Choice_crusher",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Kala Khatta",
                    "addPrice": "0"
                },
                {
                    "value": "Masala Lemonade",
                    "addPrice": "0"
                },
                {
                    "value": "Spicy Peru",
                    "addPrice": "0"
                },
                {
                    "value": "Green Mango",
                    "addPrice": "0"
                },
                {
                    "value": "Citrus Blast",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Choice_coldcoffee",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Cold Coffee Frappe",
                    "addPrice": "0"
                },
                {
                    "value": "Mocha Coffee Frappe",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Choice_milkshakes",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Oreo",
                    "addPrice": "0"
                },
                {
                    "value": "Kit-kat",
                    "addPrice": "0"
                },
                {
                    "value": "Strawberry Swirl",
                    "addPrice": "0"
                },
                {
                    "value": "Cookie Berry Shake",
                    "addPrice": "0"
                },
                {
                    "value": "English Toffee Shake",
                    "addPrice": "0"
                },
                {
                    "value": "Blue Sky",
                    "addPrice": "0"
                },
                {
                    "value": "Irish Choc Shake",
                    "addPrice": "0"
                },
                {
                    "value": "Brownie Cake Shake",
                    "addPrice": "0"
                },
                {
                    "value": "Tiramisu",
                    "addPrice": "0"
                }
            ]
        },
        {
            "title": "Add On_pizza",
            "type": "multiple",
            "required": "false",
            "values": [
                {
                    "value": "Jalapenos",
                    "addPrice": "10"
                },
                {
                    "value": "Black Olives",
                    "addPrice": "10"
                },
                {
                    "value": "Corn",
                    "addPrice": "20"
                },
                {
                    "value": "Extra Cheese",
                    "addPrice": "30"
                }
            ]
        }
    ],
    "owner_id": "5fb5428b8e072d468ec56655",
    "name": "The UFO Menu 2",
    "dishes": [
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1de",
            "name": "Classic Salty Fries",
            "category": "Fries",
            "subcategory": "Regular Fries",
            "description": "Fries tossed with salt.",
            "allergen": "false",
            "price": 90,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1df",
            "name": "Peri Peri Fries",
            "category": "Fries",
            "subcategory": "Regular Fries",
            "description": "Fries tossed with salt and spice mix.",
            "allergen": "false",
            "price": 110,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1e0",
            "name": "Say Cheese Fries",
            "category": "Fries",
            "subcategory": "Regular Fries",
            "description": "Fries loaded with orange chese",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1e1",
            "name": "Smokey Fries",
            "category": "Fries",
            "subcategory": "Supreme Fries",
            "description": "Peri Peri tossed fries with barbeque & orange cheese",
            "allergen": "true",
            "price": 160,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1e2",
            "name": "Mexicano Fries",
            "category": "Fries",
            "subcategory": "Supreme Fries",
            "description": "Mexican Salsa sauce with crushed nachos & orange cheese",
            "allergen": "true",
            "price": 170,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1e3",
            "name": "English Fries",
            "category": "Fries",
            "subcategory": "Supreme Fries",
            "description": "Chipotle gravy with crushed nachos, orange cheese & baked beans",
            "allergen": "true",
            "price": 170,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1e4",
            "name": "Veggie Decker Fries",
            "category": "Fries",
            "subcategory": "Supreme Fries",
            "description": "Jalapeno Cheese + White Cheese + Salsa + Sweet chilly tossed with crispy fries to indulge",
            "allergen": "true",
            "price": 170,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1e5",
            "name": "Kadhai Paneer Fries",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Fries topped with smoked gravy garnished with Tandoori Malai Paneer & spring onions",
            "allergen": "true",
            "price": 170,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb573d9e7165709f792d1e6",
            "name": "3 Cheese Fries",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Italian Oregano Cheese & Orange Cheese on fries sprinkled with yummilicious grated cheese",
            "allergen": "true",
            "price": 170,
            "veg": "Veg",
            "createdAt": "2020-11-20T11:59:08.112Z",
            "updatedAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64094e7165709f792d1fb",
            "name": "Nutella Fries",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Hot Chocolate & Nutella spreaded over cripsy fries and granished with chocolate vermicelli",
            "allergen": "true",
            "price": 160,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64884e7165709f792d22a",
            "name": "Spicy Nachos Fries",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Mexican Cheesy gravy & white cheese topped with cheesy tortillas & baked beans",
            "allergen": "true",
            "price": 170,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64884e7165709f792d22b",
            "name": "Spl. Nachos Fries",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Mexican Salsa gravy & white cheese topped with cheesy tortillas & baked beans",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64884e7165709f792d22c",
            "name": "UFO Spl.Fries ",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Perfect ingredients of Mexican Chipotle Sauce, BBQ sauce & white cheese",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64884e7165709f792d22d",
            "name": "Cheesy Popper Fries",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Tangy Italian gravy with spicy garlic chilli & white cheese topped with 3 cheese nuggets",
            "allergen": "true",
            "price": 160,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64884e7165709f792d22e",
            "name": "Spicy Cheese Burst Fries ",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Our best-selling spicy mozzarella liquid cheese, Mexican gravy & white cheese",
            "allergen": "true",
            "price": 160,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64884e7165709f792d22f",
            "name": " Maggi Fries",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Maggi flavoured creamy sauce garnished with fried maggi noodles & magic masala",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64884e7165709f792d230",
            "name": "Alien Fries ",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "A unique combination of peri-peri spicy mix, sweet chilli, Jalapeno sauce & white cheese garnished with Jalapeno slices",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb64884e7165709f792d231",
            "name": "7 Dip Fries ",
            "category": "Fries",
            "subcategory": "Exotic Fries",
            "description": "Option of selecting only 7 sauce dips with salted fries in a platter",
            "allergen": "true",
            "price": 170,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2d6",
            "name": "Cheesy Mayo Fries ",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Fries topped with Mayo & Orange Cheese",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2d7",
            "name": "Barbeque Fries ",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "A smoky flavor of BBQ sauce & white Cheese",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2d8",
            "name": "Jalapeno Cheese Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Jalapeno sauce, white cheese on fries garnished with Jalapeno Slices",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2d9",
            "name": "Pizza Cheese Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "A perfect blend of pizza gravy & white cheese garnished with black olives",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2da",
            "name": "Barbecue Pizza Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Pizza Gravy, smoky BBQ sauce & white cheese garnished with black olives",
            "allergen": "true",
            "price": 140,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2db",
            "name": "Italian Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Tangy Arrabbiata Pasta gravy & white cheese garnished with black olives",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2dc",
            "name": "Mexican Salsa Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Sweet & Tangy Salsa Sauce & white creamy cheese",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2dd",
            "name": "Chipotle Cheese Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Mexican Cheesy Chipotle sauce & white creamy cheese",
            "allergen": "true",
            "price": 140,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2de",
            "name": "Sweet Chilli Cheese Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Sweet & spicy Taste of Red Chilli, Sweet Chilli & white cheese",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2df",
            "name": "Thousand Island Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Oregano Cheesy Sauce with white cheese",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2e0",
            "name": "Chilli Sweet Onion Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "Sweet Onion sauce, Red Chilli & White Cheese",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2e1",
            "name": "Honey Mustard Fries",
            "category": "Fries",
            "subcategory": "Special Fries",
            "description": "English Sweet Honey Mustard sauce & White Cheese",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2e2",
            "name": "Peri-Peri Cheese Fries",
            "category": "Fries",
            "subcategory": "Spicy Fries",
            "description": "African Peri-Peri spicy mix with white cheese on top",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2e3",
            "name": "Szechwan Cheese Fries",
            "category": "Fries",
            "subcategory": "Spicy Fries",
            "description": "A Medium spicy Szechuan sauce with white cheese",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2e4",
            "name": "Garlic Chilli Cheese Fries",
            "category": "Fries",
            "subcategory": "Spicy Fries",
            "description": "Spicy Garlic Chilli gravy with white cheese for brave hearts",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2e5",
            "name": "Chilli Cheese Fries",
            "category": "Fries",
            "subcategory": "Spicy Fries",
            "description": "Soothing taste of red Chilli sauce & white cheese",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2e6",
            "name": "Tandoori Mayo Fries",
            "category": "Fries",
            "subcategory": "Indian Fries",
            "description": "Spicy Tandoori gravy balanced with creamy mayo",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb65063e7165709f792d2e7",
            "name": "Makhani Cheese Fries",
            "category": "Fries",
            "subcategory": "Indian Fries",
            "description": "North Indian gravy with white cheese",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f0",
            "name": "Butter Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 70,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f1",
            "name": "Pizza Cheese Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f2",
            "name": "Italian Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f3",
            "name": "Makhani Cheese Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f4",
            "name": "Chilli Sweet Onion Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f5",
            "name": "Sweet chilli Cheese Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f6",
            "name": "Jalapeno Cheese Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f7",
            "name": "Barbeque Pizza Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb679abe7165709f792d4f8",
            "name": "Chipotle Cheese Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "false",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb6e868e7165709f792d924",
                            "value": "Nutella",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d925",
                            "value": "Bubble Gum",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d926",
                            "value": "Candy Floss",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d927",
                            "value": "Dark Chocolate",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d928",
                            "value": "Strawberry",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d929",
                            "value": "Blueberry",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d92a",
                            "value": "Coffee",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb6e868e7165709f792d923",
                    "title": "Spread",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                },
                {
                    "values": [
                        {
                            "_id": "5fb6e868e7165709f792d92c",
                            "value": "Belgian Dark Chocolate",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d92d",
                            "value": "Red Velvet",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d92e",
                            "value": "Vanilla",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb6e868e7165709f792d92b",
                    "title": "Base",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                },
                {
                    "values": [
                        {
                            "_id": "5fb6e868e7165709f792d930",
                            "value": "Chocolate Sprinklers",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d931",
                            "value": "Rainbow Sprinklers",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d932",
                            "value": "Pearl Balls",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb6e868e7165709f792d92f",
                    "title": "Topping / Garnish",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb6e868e7165709f792d922",
            "name": "UFO Waffles",
            "category": "Waffles",
            "subcategory": "none",
            "description": "Make your own custom waffles.",
            "allergen": "true",
            "price": 140,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d933",
            "name": "Nutella Chocolate Mug Cake",
            "category": "Desserts",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d934",
            "name": "Garlic Chilli Cheese Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d935",
            "name": "Tandoori Mayo Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d936",
            "name": "Schezwan Cheese Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d937",
            "name": "Mexican Salsa Cheese Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d938",
            "name": "Thousand Island Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d939",
            "name": "Make your Own Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d93a",
            "name": "UFO Spl. Corn",
            "category": "Corn",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d93b",
            "name": "Cheesy Mayo Burger",
            "category": "Burgers",
            "subcategory": "Veg Burgers",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d93c",
            "name": "Chipotle Cheesy Burger",
            "category": "Burgers",
            "subcategory": "Veg Burgers",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d93d",
            "name": "Thousand Island Burger",
            "category": "Burgers",
            "subcategory": "Veg Burgers",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d93e",
            "name": "Cheesy Jalapeno Burger",
            "category": "Burgers",
            "subcategory": "Veg Burgers",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d93f",
            "name": "Schezwan Cheesy Burger",
            "category": "Burgers",
            "subcategory": "Veg Burgers",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d940",
            "name": "Chilli Cheese Burger",
            "category": "Burgers",
            "subcategory": "Veg Burgers",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d941",
            "name": "Tandoori Mayo Burger",
            "category": "Burgers",
            "subcategory": "Veg Burgers",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d942",
            "name": "Garlic Chilli Burger",
            "category": "Burgers",
            "subcategory": "Veg Burgers",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d943",
            "name": "Kadhai Paneer Burger",
            "category": "Burgers",
            "subcategory": "Spicy Paneer Burgers",
            "description": "",
            "allergen": "true",
            "price": 140,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d944",
            "name": "Chipotle Paneer Burger",
            "category": "Burgers",
            "subcategory": "Spicy Paneer Burgers",
            "description": "",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d945",
            "name": "Tandoori Paneer Burger",
            "category": "Burgers",
            "subcategory": "Spicy Paneer Burgers",
            "description": "",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d946",
            "name": "Schezwan Paneer Burger",
            "category": "Burgers",
            "subcategory": "Spicy Paneer Burgers",
            "description": "",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d947",
            "name": "Mexican Paneer Wrap",
            "category": "Wraps",
            "subcategory": "Spicy Paneer Wraps",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d948",
            "name": "Kadhai Paneer Wrap",
            "category": "Wraps",
            "subcategory": "Spicy Paneer Wraps",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d949",
            "name": "Smoked Paneer Wrap",
            "category": "Wraps",
            "subcategory": "Spicy Paneer Wraps",
            "description": "",
            "allergen": "true",
            "price": 160,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d94a",
            "name": "Mexican Veggie Wrap",
            "category": "Wraps",
            "subcategory": "Veggie Wraps",
            "description": "",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d94b",
            "name": "Makhani Veggie Wrap",
            "category": "Wraps",
            "subcategory": "Veggie Wraps",
            "description": "",
            "allergen": "true",
            "price": 130,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d94c",
            "name": "Smoked Veggie Wrap",
            "category": "Wraps",
            "subcategory": "Veggie Wraps",
            "description": "",
            "allergen": "true",
            "price": 140,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d94d",
            "name": "Classic Cheesy Nachos",
            "category": "Nachos",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 160,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d94e",
            "name": "Spicy Cheese Nachos",
            "category": "Nachos",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 180,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d94f",
            "name": "Nachos Bhel",
            "category": "Nachos",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 170,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb6e868e7165709f792d952",
                            "value": "Peach",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d953",
                            "value": "Lemon",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d954",
                            "value": "Passion",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb6e868e7165709f792d951",
                    "title": "Choice_icedtea",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb6e868e7165709f792d950",
            "name": "Iced Tea",
            "category": "Beverages",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb6e868e7165709f792d957",
                            "value": "Pacific Blue",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d958",
                            "value": "Mint Cooler",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb6e868e7165709f792d956",
                    "title": "Choice_mocktail",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb6e868e7165709f792d955",
            "name": "Mocktail",
            "category": "Beverages",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb6e868e7165709f792d95b",
                            "value": "Oreo",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d95c",
                            "value": "Kit-kat",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d95d",
                            "value": "Strawberry Swirl",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d95e",
                            "value": "Cookie Berry Shake",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d95f",
                            "value": "English Toffee Shake",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d960",
                            "value": "Blue Sky",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d961",
                            "value": "Irish Choc Shake",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d962",
                            "value": "Brownie Cake Shake",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d963",
                            "value": "Tiramisu",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb6e868e7165709f792d95a",
                    "title": "Choice_milkshakes",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb6e868e7165709f792d959",
            "name": "Milkshake",
            "category": "Beverages",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb6e868e7165709f792d966",
                            "value": "Kala Khatta",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d967",
                            "value": "Masala Lemonade",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d968",
                            "value": "Spicy Peru",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d969",
                            "value": "Green Mango",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d96a",
                            "value": "Citrus Blast",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb6e868e7165709f792d965",
                    "title": "Choice_crusher",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb6e868e7165709f792d964",
            "name": "Crusher",
            "category": "Beverages",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb6e868e7165709f792d96d",
                            "value": "Cold Coffee Frappe",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb6e868e7165709f792d96e",
                            "value": "Mocha Coffee Frappe",
                            "addPrice": 0,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb6e868e7165709f792d96c",
                    "title": "Choice_coldcoffee",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb6e868e7165709f792d96b",
            "name": "Cold Coffee",
            "category": "Beverages",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d96f",
            "name": "Malt Beer",
            "category": "Beverages",
            "subcategory": "none",
            "description": "Non-Alcoholic Beer",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d970",
            "name": "Peri Peri Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d971",
            "name": "Mayo Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d972",
            "name": "Honey Mustard Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d973",
            "name": "Cheese Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d974",
            "name": "Mint Mayo Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d975",
            "name": "Nachos Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d976",
            "name": "Tandoori Tadka Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d977",
            "name": "Garlic Mayo Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d978",
            "name": "Schezwan Mayo Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d979",
            "name": "Mexican Salsa Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d97a",
            "name": "Barbeque Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d97b",
            "name": "Cheese Chilly Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d97c",
            "name": "Jalapeno Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 90,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d97d",
            "name": "Pizza Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d97e",
            "name": "Barbeque Pizza Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d97f",
            "name": "Thousand Island Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d980",
            "name": "UFO Spl. Twister",
            "category": "Twisters",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 120,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb6e868e7165709f792d981",
            "name": "Cheese Nuggets ",
            "category": "Nuggets",
            "subcategory": "none",
            "description": "8 pieces.",
            "allergen": "true",
            "price": 140,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792da9f",
            "name": "Nutella Chocolate Mug Cake.",
            "category": "Bestsellers",
            "subcategory": "",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792daa0",
            "name": "Alien Fries.",
            "category": "Bestsellers",
            "subcategory": "",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792daa1",
            "name": "Chipotle Cheesy Burger.",
            "category": "Bestsellers",
            "subcategory": "",
            "description": "",
            "allergen": "true",
            "price": 110,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792daa2",
            "name": "Mexican Paneer Wrap.",
            "category": "Bestsellers",
            "subcategory": "",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792daa3",
            "name": "Pacific Blue - Mocktail.",
            "category": "Bestsellers",
            "subcategory": "",
            "description": "",
            "allergen": "true",
            "price": 100,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792daa4",
            "name": "Veggie Delight Pizza.",
            "category": "Bestsellers",
            "subcategory": "",
            "description": "",
            "allergen": "true",
            "price": 240,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb7af8ce7165709f792daa7",
                            "value": "Jalapenos",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792daa8",
                            "value": "Black Olives",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792daa9",
                            "value": "Corn",
                            "addPrice": 20,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792daaa",
                            "value": "Extra Cheese",
                            "addPrice": 30,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb7af8ce7165709f792daa6",
                    "title": "Add On_pizza",
                    "type": "multiple",
                    "required": false,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb7af8ce7165709f792daa5",
            "name": "Margherita",
            "category": "Pizza",
            "subcategory": "none",
            "description": "Pizza Gravy & Lots of Mozzarella Cheese",
            "allergen": "true",
            "price": 210,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb7af8ce7165709f792daad",
                            "value": "Jalapenos",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792daae",
                            "value": "Black Olives",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792daaf",
                            "value": "Corn",
                            "addPrice": 20,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dab0",
                            "value": "Extra Cheese",
                            "addPrice": 30,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb7af8ce7165709f792daac",
                    "title": "Add On_pizza",
                    "type": "multiple",
                    "required": false,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb7af8ce7165709f792daab",
            "name": "Veg. Delight",
            "category": "Pizza",
            "subcategory": "none",
            "description": "Pizza Gravy Topped with Capsicum, Onions Sweet Corn & Cheese",
            "allergen": "true",
            "price": 240,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb7af8ce7165709f792dab3",
                            "value": "Jalapenos",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dab4",
                            "value": "Black Olives",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dab5",
                            "value": "Corn",
                            "addPrice": 20,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dab6",
                            "value": "Extra Cheese",
                            "addPrice": 30,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb7af8ce7165709f792dab2",
                    "title": "Add On_pizza",
                    "type": "multiple",
                    "required": false,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb7af8ce7165709f792dab1",
            "name": "Fries Pizza",
            "category": "Pizza",
            "subcategory": "none",
            "description": "Saucy Pizza gravy topped with veggies, UFO's trademark fries & loads of cheese",
            "allergen": "true",
            "price": 280,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb7af8ce7165709f792dab9",
                            "value": "Jalapenos",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792daba",
                            "value": "Black Olives",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dabb",
                            "value": "Corn",
                            "addPrice": 20,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dabc",
                            "value": "Extra Cheese",
                            "addPrice": 30,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb7af8ce7165709f792dab8",
                    "title": "Add On_pizza",
                    "type": "multiple",
                    "required": false,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb7af8ce7165709f792dab7",
            "name": "Paneer Makhani Pizza",
            "category": "Pizza",
            "subcategory": "none",
            "description": "Tandoori Paneer, Capsicum, Onions & Tomatoes in Makhani Gravy",
            "allergen": "true",
            "price": 250,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [
                {
                    "values": [
                        {
                            "_id": "5fb7af8ce7165709f792dabf",
                            "value": "Jalapenos",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dac0",
                            "value": "Black Olives",
                            "addPrice": 10,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dac1",
                            "value": "Corn",
                            "addPrice": 20,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        },
                        {
                            "_id": "5fb7af8ce7165709f792dac2",
                            "value": "Extra Cheese",
                            "addPrice": 30,
                            "updatedAt": "2020-11-20T11:59:08.112Z",
                            "createdAt": "2020-11-20T11:59:08.112Z"
                        }
                    ],
                    "_id": "5fb7af8ce7165709f792dabe",
                    "title": "Add On_pizza",
                    "type": "multiple",
                    "required": false,
                    "updatedAt": "2020-11-20T11:59:08.112Z",
                    "createdAt": "2020-11-20T11:59:08.112Z"
                }
            ],
            "_id": "5fb7af8ce7165709f792dabd",
            "name": "Exotic Chipotle Pizza ",
            "category": "Pizza",
            "subcategory": "none",
            "description": "Chipotle Gravy, Capsicum, Onions, Olives, Jalapeños, Red & Yellow Capsicum",
            "allergen": "true",
            "price": 250,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792dac3",
            "name": "Classic Cheese Max Fries",
            "category": "Cheddar Cheese Max Fries",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792dac4",
            "name": "Peri-Peri Cheese Max Fries",
            "category": "Cheddar Cheese Max Fries",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792dac5",
            "name": "Jalapeno Cheese Max Fries",
            "category": "Cheddar Cheese Max Fries",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792dac6",
            "name": "Chilli Cheese Max Fries",
            "category": "Cheddar Cheese Max Fries",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792dac7",
            "name": "Chipotle Cheese Max Fries",
            "category": "Cheddar Cheese Max Fries",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        },
        {
            "discount": 0,
            "options": [],
            "_id": "5fb7af8ce7165709f792dac8",
            "name": "Barbeque Cheese Max Fries",
            "category": "Cheddar Cheese Max Fries",
            "subcategory": "none",
            "description": "",
            "allergen": "true",
            "price": 150,
            "veg": "Veg",
            "updatedAt": "2020-11-20T11:59:08.112Z",
            "createdAt": "2020-11-20T11:59:08.112Z"
        }
    ],
   
}