const products = [
    { 
        id: 'product1',
        //link of image
        url: 'https://m.media-amazon.com/images/I/41s78m7dzVL._SY300_SX300_QL70_FMwebp_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61dobZ9Br+L._AC_UL600_FMwebp_QL65_.jpg',
        title: {
            //name of images
            shortTitle: 'Fresh Harvest: Potatoes',
            longTitle: 'JVN Clean and Fresh Vegetable Potatoes -1kg'
        }, 
        price: {
            mrp: 290,
            cost: 189,
            discount: '35%'
        },
        description: 'High source of fibre. Good source of Vitamin B6, C, Potassium, and Magnesium. Can be used in multiple dishes and snacks. Store at room temperature, away from direct sunlight',
        discount: 'Extra 5% Off', 
        tagline: 'Deal of the day'  
    },
    { 
        id: 'product2',
        url: 'https://m.media-amazon.com/images/I/41zC1OHiFhL._AC_UL600_FMwebp_QL65_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/41zC1OHiFhL.jpg',
        title: {
            shortTitle: 'Fresh Red Onions',
            longTitle: 'Fresh Red Onion -10Kg'
        },
        price: {
            mrp: 999,
            cost: 500,
            discount: '50%'
        },
        description: 'Rich flavour and tasty to your foods. Onion is rich in phytochemicals, Vitamin C and anti-oxidants. It improves body immunity and helps reduce cholesterol. Onions are an essential part of everyday cooking in India. Can be used in curries, snacks and salads and with other foods',
        discount: 'From 99+5% Off', 
        tagline: 'Various Sizes and Types' 
    },
    { 
        id: 'product3',
        url: 'https://m.media-amazon.com/images/I/61c5jr5SZ-L._AC_UL600_FMwebp_QL65_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61c5jr5SZ-L._SX679_.jpg', 
        title: {
            shortTitle: 'Mix Vegies',
            longTitle: 'Mix Vegetable Cabbage/Cauliflower/Peas/Carrot each 500gm (2kg)'
        }, 
        price: {
            mrp: 849,
            cost: 819,
            discount: '4%'
        },
        description: 'The vegetarian products.Mixed vegetables contain several carotenoids: alpha-carotene, beta-carotene, lutein and zeaxanthin. Alpha- and beta-carotene are converted into the form of vitamin A that is essential for vision. Lutein and zeaxanthin function as antioxidants. Vegetables are full of essential vitamins, minerals, and antioxidants that provide many important health benefits to your body.',
        discount: 'Upto 4% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://m.media-amazon.com/images/I/71WRkjNV+NL._AC_UL600_FMwebp_QL65_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71WRkjNV+NL._SX679_.jpg',
        title: {
            shortTitle: 'Grains & Pulses',
            longTitle: 'More Loose Dhuli Moong Dal (500 g)',
        }, 
        price: {
            mrp: 160,
            cost: 300,
            discount: '34%'
        },
        description: 'Contain the natural vegetable protein. 100% natural and hygienically processes. This dal is low in fat, zero cholesterol. Excellent source of protein and fiber',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJSAjNtCrpHz6HaaGKIVZ5tosV1R-tqBQ60q26SQd6eo-5V_9ZN9XxkKXIgISzIRIDUnHYpwXV3Eb_WPiPM0HEsOz6v6bghIj8PxYcvDqTOEHdWHIIDQ_1ckQ&usqp=CAE',
        detailUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJSAjNtCrpHz6HaaGKIVZ5tosV1R-tqBQ60q26SQd6eo-5V_9ZN9XxkKXIgISzIRIDUnHYpwXV3Eb_WPiPM0HEsOz6v6bghIj8PxYcvDqTOEHdWHIIDQ_1ckQ&usqp=CAE', 
        title: {
            shortTitle: 'Fresh Fruits',
            longTitle: 'Fresho Banana - Robusta/Paka Kela, 1 kg'
        }, 
        price: {
            mrp: 49,
            cost: 81.58,
            discount: '40%'
        },
        description: 'Relish the soft, buttery texture of Robusta bananas that are light green and have a great fragrance and taste. The stalks of Robustas are thick and rigid. Fresh fruits are green, which revolve to a bright yellow on ripening and the flesh contains a white - ceramic colour. Fresho Robusta is fine quality, sweet flavoured, mushy and soft bananas.',
        discount: 'From 20%', 
        tagline: 'Red banana & more' 
    }
]


module.exports = products ;