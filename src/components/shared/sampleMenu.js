var sampleMenu = JSON.parse('{"msg":"Menu Found!","success":true,"menu":{"categories":["Starters","Mains","Desserts","Drinks","à la carte"],"subcategories":["Pastas","Pizzas","Indian","Alcoholic","Non-Alcoholic","Snacks"],"_id":"5f4908c3e25e870846903598","owner_id":"5f4298d1a1f2d03aedeb6cb3","name":"Everyday Specials 2.0","dishes":[{"discount":0,"options":[{"values":[{"_id":"5f4908c3e25e87084690359b","value":"Capsicum","addPrice":0.1,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"_id":"5f4908c3e25e87084690359c","value":"Corn","addPrice":0.1,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"_id":"5f4908c3e25e87084690359d","value":"Sausage","addPrice":0.5,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"_id":"5f4908c3e25e87084690359e","value":"Onion","addPrice":0.2,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"}],"_id":"5f4908c3e25e87084690359a","title":"Toppings","type":"multiple","required":false,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"values":[{"_id":"5f4908c3e25e8708469035a0","value":"Small","addPrice":0,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"_id":"5f4908c3e25e8708469035a1","value":"Medium","addPrice":1,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"_id":"5f4908c3e25e8708469035a2","value":"Large","addPrice":1.5,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"}],"_id":"5f4908c3e25e87084690359f","title":"Size","type":"single","required":true,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"}],"_id":"5f4908c3e25e870846903599","name":"Margarita","category":"Mains","subcategory":"Pizzas","description":"Simple Plain Pizza from Italy","allergen":"true","price":4,"veg":"Veg","createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"discount":0,"options":[{"values":[{"_id":"5f4908c3e25e8708469035a5","value":"Red","addPrice":0.2,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"_id":"5f4908c3e25e8708469035a6","value":"White","addPrice":1,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"},{"_id":"5f4908c3e25e8708469035a7","value":"Green","addPrice":1,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"}],"_id":"5f4908c3e25e8708469035a4","title":"Sauce","type":"single","required":true,"createdAt":"2020-08-28T13:38:11.048Z","updatedAt":"2020-08-28T13:38:11.048Z"}],"_id":"5f4908c3e25e8708469035a3","name":"Arrabbiata","category":"Mains","subcategory":"Pastas","description":"Cooking it Arrabbiata Style","allergen":"true","price":2,"veg":"Egg","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035a8","name":"Pepperoni","category":"Mains","subcategory":"Pizzas","description":"Pizza from Italy which is famous for it\'s pepperoni","allergen":"true","price":3.5,"veg":"Meat","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[{"values":[{"_id":"5f4908c3e25e8708469035ab","value":"Yes","addPrice":0.1,"createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"_id":"5f4908c3e25e8708469035ac","value":"No","addPrice":0,"createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"}],"_id":"5f4908c3e25e8708469035aa","title":"Garlic AddOn","type":"single","required":false,"createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"}],"_id":"5f4908c3e25e8708469035a9","name":"Naan Bread","category":"Mains","subcategory":"Indian","description":"Authentic Naan from India","allergen":"true","price":2.5,"veg":"Vegan","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035ad","name":"Chicken Tikka Masala","category":"Mains","subcategory":"Indian","description":"Our favourite Chicken Dish ever!","allergen":"true","price":9,"veg":"Meat","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035ae","name":"Martini","category":"Drinks","subcategory":"Alcoholic","description":"The best cocktail you could ever have.","allergen":"true","price":4,"veg":"none","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035af","name":"Heineken","category":"Drinks","subcategory":"Alcoholic","description":"The beer from the Dutch","allergen":"true","price":4,"veg":"none","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035b0","name":"Wasser","category":"Drinks","subcategory":"Non-Alcoholic","description":"The source of life.","allergen":"true","price":4,"veg":"none","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035b1","name":"Gulab Jamun","category":"Desserts","subcategory":"none","description":"a Indian sweet soaked in sugar syrup","allergen":"true","price":1.22,"veg":"none","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035b2","name":"Red Velvet Cake","category":"Desserts","subcategory":"none","description":"Red velvet cake is traditionally a red, red-brown, crimson or scarlet-colored chocolate layer cake, layered with ermine icing. Traditional recipes do not use food coloring, with the red color due to non-Dutched, anthocyanin-rich cocoa. Common ingredients include buttermilk, butter, cocoa, vinegar, and flour.","allergen":"true","price":1.22,"veg":"Vegan","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035b3","name":"Rassogulla","category":"Desserts","subcategory":"none","description":"The famous Bengali sweet.","allergen":"false","price":1.11,"veg":"Vegan","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035b4","name":"French Fries","category":"Starters","subcategory":"Snacks","description":"the chips we need all the time.","allergen":"false","price":3.11,"veg":"Veg","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035b5","name":"Caviar","category":"Starters","subcategory":"none","description":"Empty your pockets","allergen":"false","price":100,"veg":"Meat","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[{"values":[{"_id":"5f4908c3e25e8708469035b8","value":"Yes","addPrice":0.1,"createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"_id":"5f4908c3e25e8708469035b9","value":"No","addPrice":0,"createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"}],"_id":"5f4908c3e25e8708469035b7","title":"Garlic AddOn","type":"single","required":false,"createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"}],"_id":"5f4908c3e25e8708469035b6","name":"Manchurian Balls","category":"Starters","subcategory":"none","description":"Authentic Balls from the Chinese Manchu","allergen":"true","price":4,"veg":"Meat","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035ba","name":"Mojito","category":"Drinks","subcategory":"Non-Alcoholic","description":"this is just lemon water","allergen":"true","price":1.9,"veg":"none","createdAt":"2020-08-28T13:38:11.049Z","updatedAt":"2020-08-28T13:38:11.049Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035bb","name":"Pan Cakes","category":"à la carte","subcategory":"none","description":"What do we need in our breakfast?","allergen":"true","price":1.9,"veg":"Egg","createdAt":"2020-08-28T13:38:11.050Z","updatedAt":"2020-08-28T13:38:11.050Z"},{"discount":0,"options":[],"_id":"5f4908c3e25e8708469035bc","name":"Omelette","category":"à la carte","subcategory":"none","description":"Duh.","allergen":"true","price":1.9,"veg":"Egg","createdAt":"2020-08-28T13:38:11.050Z","updatedAt":"2020-08-28T13:38:11.050Z"}],"createdAt":"2020-08-28T13:38:11.050Z","updatedAt":"2020-08-28T13:38:11.050Z","__v":0}}'
);
sampleMenu = sampleMenu.menu;
sampleMenu = 
{
    "categories": [
        "Starters",
        "Mains",
        "Desserts",
        "Drinks",
        "à la carte"
    ],
    "subcategories": [
        "Pastas",
        "Pizzas",
        "Indian",
        "Alcoholic",
        "Non-Alcoholic",
        "Snacks",
        "Deutsch "
    ],
    "allChoices": [
        {
            "title": "Test Cust",
            "type": "multiple",
            "required": "false",
            "values": [
                {
                    "value": "one",
                    "addPrice": 1
                },
                {
                    "value": "two",
                    "addPrice": 2
                }
            ]
        },
        {
            "title": "Cust2",
            "type": "single",
            "required": "true",
            "values": [
                {
                    "value": "Test",
                    "addPrice": 12
                }
            ]
        }
    ],
    "_id": "5f4908c3e25e870846903598",
    "owner_id": "5f4298d1a1f2d03aedeb6cb3",
    "name": "Everyday Specials 2.0",
    "dishes": [
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "60ddca257457d81b71ca5928",
            "name": "Sauerbraten",
            "category": "Mains",
            "subcategory": "Deutsch ",
            "description": "The German National Pride",
            "allergen": "true",
            "price": 35,
            "veg": "Meat",
            "updatedAt": "2021-07-09T09:08:49.332Z",
            "createdAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "5f4908c3e25e870846903599",
            "name": "Margarita",
            "category": "Mains",
            "subcategory": "Pizzas",
            "description": "Simple Plain Pizza from Italy",
            "allergen": "true",
            "price": 4,
            "veg": "Veg",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "5f4908c3e25e8708469035a3",
            "name": "Arrabbiata",
            "category": "Mains",
            "subcategory": "Pastas",
            "description": "Cooking it Arrabbiata Style",
            "allergen": "true",
            "price": 2,
            "veg": "Egg",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "5f4908c3e25e8708469035a8",
            "name": "Pepperoni",
            "category": "Mains",
            "subcategory": "Pizzas",
            "description": "Pizza from Italy which is famous for it's pepperoni",
            "allergen": "true",
            "price": 3.5,
            "veg": "Meat",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "5f4908c3e25e8708469035a9",
            "name": "Naan Bread",
            "category": "Mains",
            "subcategory": "Indian",
            "description": "Authentic Naan from India",
            "allergen": "true",
            "price": 2.5,
            "veg": "Vegan",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "5f4908c3e25e8708469035ad",
            "name": "Chicken Tikka Masala",
            "category": "Mains",
            "subcategory": "Indian",
            "description": "Our favourite Chicken Dish ever!",
            "allergen": "true",
            "price": 9,
            "veg": "Meat",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [],
            "_id": "5f4908c3e25e8708469035ae",
            "name": "Martini",
            "category": "Drinks",
            "subcategory": "Alcoholic",
            "description": "The best cocktail you could ever have.",
            "allergen": "true",
            "price": 4,
            "veg": "none",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [],
            "_id": "5f4908c3e25e8708469035af",
            "name": "Heineken",
            "category": "Drinks",
            "subcategory": "Alcoholic",
            "description": "The beer from the Dutch",
            "allergen": "true",
            "price": 4,
            "veg": "none",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [],
            "_id": "5f4908c3e25e8708469035b0",
            "name": "Wasser",
            "category": "Drinks",
            "subcategory": "Non-Alcoholic",
            "description": "The source of life.",
            "allergen": "true",
            "price": 4,
            "veg": "none",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [],
            "_id": "5f4908c3e25e8708469035b1",
            "name": "Gulab Jamun",
            "category": "Desserts",
            "subcategory": "none",
            "description": "a Indian sweet soaked in sugar syrup",
            "allergen": "true",
            "price": 1.22,
            "veg": "none",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [],
            "_id": "5f4908c3e25e8708469035b2",
            "name": "Red Velvet Cake",
            "category": "Desserts",
            "subcategory": "none",
            "description": "Red velvet cake is traditionally a red, red-brown, crimson or scarlet-colored chocolate layer cake, layered with ermine icing. Traditional recipes do not use food coloring, with the red color due to non-Dutched, anthocyanin-rich cocoa. Common ingredients include buttermilk, butter, cocoa, vinegar, and flour.",
            "allergen": "true",
            "price": 1.22,
            "veg": "Vegan",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [],
            "_id": "5f4908c3e25e8708469035b3",
            "name": "Rassogulla",
            "category": "Desserts",
            "subcategory": "none",
            "description": "The famous Bengali sweet.",
            "allergen": "false",
            "price": 1.11,
            "veg": "Vegan",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "5f4908c3e25e8708469035b5",
            "name": "Caviar",
            "category": "Starters",
            "subcategory": "none",
            "description": "Empty your pockets",
            "allergen": "true",
            "price": 100,
            "veg": "Meat",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "5f4908c3e25e8708469035b6",
            "name": "Manchurian Balls",
            "category": "Starters",
            "subcategory": "none",
            "description": "Authentic Balls from the Chinese Manchu",
            "allergen": "true",
            "price": 4,
            "veg": "Veg",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [],
            "_id": "5f4908c3e25e8708469035b4",
            "name": "French Fries",
            "category": "Starters",
            "subcategory": "none",
            "description": "the chips we need all the time.",
            "allergen": "true",
            "price": 3.11,
            "veg": "Veg",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [],
            "_id": "5f4908c3e25e8708469035ba",
            "name": "Mojito",
            "category": "Drinks",
            "subcategory": "Non-Alcoholic",
            "description": "this is just lemon water",
            "allergen": "true",
            "price": 1.9,
            "veg": "none",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [],
            "_id": "5f4908c3e25e8708469035bb",
            "name": "Pan Cakes",
            "category": "à la carte",
            "subcategory": "none",
            "description": "What do we need in our breakfast?",
            "allergen": "true",
            "price": 1.9,
            "veg": "Egg",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": false,
            "options": [
                {
                    "values": [
                        {
                            "_id": "60d2057ecd316b09345b7eca",
                            "value": "one",
                            "addPrice": 1,
                            "updatedAt": "2021-07-09T09:08:49.332Z",
                            "createdAt": "2021-07-09T09:08:49.332Z"
                        },
                        {
                            "_id": "60d2057ecd316b09345b7ecb",
                            "value": "two",
                            "addPrice": 2,
                            "updatedAt": "2021-07-09T09:08:49.332Z",
                            "createdAt": "2021-07-09T09:08:49.332Z"
                        }
                    ],
                    "_id": "60d2057ecd316b09345b7ec9",
                    "title": "Test Cust",
                    "type": "multiple",
                    "required": false,
                    "updatedAt": "2021-07-09T09:08:49.332Z",
                    "createdAt": "2021-07-09T09:08:49.332Z"
                }
            ],
            "_id": "5f4908c3e25e8708469035bc",
            "name": "Omelette",
            "category": "à la carte",
            "subcategory": "none",
            "description": "Duh.",
            "allergen": "true",
            "price": 1.9,
            "veg": "Egg",
            "createdAt": "2021-07-09T09:08:49.332Z",
            "updatedAt": "2021-07-09T09:08:49.332Z"
        },
        {
            "discount": 0,
            "active": true,
            "image": true,
            "options": [
                {
                    "values": [
                        {
                            "_id": "60e8122102b3d9611e574e83",
                            "value": "one",
                            "addPrice": 1,
                            "updatedAt": "2021-07-09T09:08:49.332Z",
                            "createdAt": "2021-07-09T09:08:49.332Z"
                        },
                        {
                            "_id": "60e8122102b3d9611e574e84",
                            "value": "two",
                            "addPrice": 2,
                            "updatedAt": "2021-07-09T09:08:49.332Z",
                            "createdAt": "2021-07-09T09:08:49.332Z"
                        }
                    ],
                    "_id": "60e8122102b3d9611e574e82",
                    "title": "Test Cust",
                    "type": "multiple",
                    "required": false,
                    "updatedAt": "2021-07-09T09:08:49.332Z",
                    "createdAt": "2021-07-09T09:08:49.332Z"
                },
                {
                    "values": [
                        {
                            "_id": "60e8122102b3d9611e574e86",
                            "value": "Test",
                            "addPrice": 12,
                            "updatedAt": "2021-07-09T09:08:49.332Z",
                            "createdAt": "2021-07-09T09:08:49.332Z"
                        }
                    ],
                    "_id": "60e8122102b3d9611e574e85",
                    "title": "Cust2",
                    "type": "single",
                    "required": true,
                    "updatedAt": "2021-07-09T09:08:49.332Z",
                    "createdAt": "2021-07-09T09:08:49.332Z"
                }
            ],
            "_id": "60ddaa04d639731a00fa77e5",
            "name": "Daal Batti",
            "category": "Mains",
            "subcategory": "Indian",
            "description": "a traditional delicacy from the state of Rajasthan",
            "allergen": "true",
            "price": 12,
            "veg": "Veg",
            "updatedAt": "2021-07-09T09:08:49.332Z",
            "createdAt": "2021-07-09T09:08:49.332Z"
        }
    ],
    "createdAt": "2020-08-28T13:38:11.050Z",
    "updatedAt": "2021-07-09T09:08:49.332Z",
    "__v": 0
}

export default sampleMenu;