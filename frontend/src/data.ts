import {Food} from './app/shared/models/Food';
import {Drinks} from './app/shared/models/Drinks';

export const sample_foods: Food[] = [
    {
        id:'1',
        name: '4 Cheese',
        ingredients : '100% Mozzarella, tomato sauce, cheddar, Parmesan Reggiano  & Grana Padano mix and Vonitsa cream cheese',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/4_cheese.jpg',
        meat: false,
    },  
    {   
        id:'2',
        name: 'American Classic',
        ingredients : '100% Mozzarella, tomato sauce, pepperoni, spicy beef, fresh mushrooms',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/american_classic.jpg',
        meat: true,
    },  
    {   
        id:'3',
        name: 'Barbecue Chicken',
        ingredients : '100% Mozzarella, barbecue sauce, tender chicken breast, bacon',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/barbecue_chicken.jpg',
        meat: true,
    },  
    {   
        id:'4',
        name: 'Bourbon',
        ingredients : '100% Mozzarella, tomato sauce, tender chicken breast, bacon, onions, alcohol free Bourbon sauce drizzle',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/bourbon.jpg',
        meat: true,
    },  
    {   
        id:'5',
        name: 'Cheddar Melt',
        ingredients : '100% Mozzarella, tomato sauce, extra cheddar, extra bacon, extra fresh mushrooms',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/cheddar_melt.jpg',
        meat: true,
    },  
    {   
        id:'6',
        name: 'Chili Sin Carne',
        ingredients : 'Vegetable cheese, tomato sauce, corn, onion, chili sin carne',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/chili_sin_carne.jpg',
        meat: false,
    },
    {   
        id:'7',
        name: 'Diavola',
        ingredients : '100% Mozzarella, tomato sauce, pepperoni, onions, jalapenos peppers',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/diavola.jpg',
        meat: true,
    },
    {   
        id:'8',
        name: 'Fiorentina',
        ingredients : '100% Mozzarella, tomato sauce, pepperoni, rocket, Vonitsa cream cheese, olive oil',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/fiorentina.jpg',
        meat: true,
    },
    {   
        id:'9',
        name: 'Flambee',
        ingredients : '100% Mozzarella, cream sauce, bacon, onions, extra bacon',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/flambee.jpg',
        meat: true,
    },
    {   
        id:'10',
        name: 'Garder Classic',
        ingredients : '100% Mozzarella, tomato sauce, olives, fresh green peppers, onions, mushrooms, fresh tomatoes',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/garden_classic.jpg',
        meat: false,
    },
    {   
        id:'11',
        name: "Mama's Pizza",
        ingredients : '100% Mozzarella, tomato sauce, cheddar cheese, bacon, Greek sausage, fresh green peppers',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/mamas_pizza.jpg',
        meat: true,
    },
    {   
        id:'12',
        name: 'Margarita',
        ingredients : '100% Mozzarella, tomato sauce, extra mozzarella',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/margarita.jpg',
        meat: false,
    },
    {   
        id:'13',
        name: 'Parmesana',
        ingredients : '100% Mozzarella, cream sauce, real Parmesan Reggiano, fresh tomato, basil',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/parmesana.jpg',
        meat: false,
    },
    {   
        id:'14',
        name: 'Peperoni',
        ingredients : '100% Mozzarella, tomato sauce, extra mozzarella, extra pepperoni',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/peperoni.jpg',
        meat: true,
    },
    {   
        id:'15',
        name: 'Pesto',
        ingredients : '100% Mozzarella, tomato sauce, pesto sauce, Parmesan, fresh tomatoes, basil',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/pesto.jpg',
        meat: false,
    },
    {   
        id:'16',
        name: 'Tropicana',
        ingredients : '100% Mozzarella, tomato sauce, smoked ham, pineapple',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/tropicana.jpg',
        meat: true,
    },
    {   
        id:'17',
        name: 'Veggeroni',
        ingredients : 'Vegetable cheese, tomato sauce, plant based vegeroni',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/veggeroni.jpg',
        meat: false,
    },
    {   
        id:'18',
        name: 'Veggie',
        ingredients : 'Vegetable cheese, tomato sauce, olives, fresh green peppers, onions, fresh mushrooms, fresh tomatoes',
        price: 9.45,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/pizza/veggie.jpg',
        meat: false,
    }
]




export const sample_drinks: Drinks[] = [
    {   
        id:'19',
        name: 'Coca-Cola 1,5lt',
        price: 2.4,
        favorite: false,
        imageUrl: 'assets/drinks/coke_15lt.jpg',
    },
    {   
        id:'20',
        name: 'Coca-Cola 330ml',
        price: 1.45,
        favorite: false,
        imageUrl: 'assets/drinks/coke_330.jpg',
    },
    {   
        id:'21',
        name: 'Coca-Cola Light 1,5lt',
        price: 2.40,
        favorite: false,
        imageUrl: 'assets/drinks/coke_light_15lt.jpg',
    },
    {   
        id:'22',
        name: 'Coca-Cola Light 330ml',
        price: 1.45,
        favorite: false,
        imageUrl: 'assets/drinks/coke_light_330.jpg',
    },
    {   
        id:'23',
        name: 'Coca-Cola Zero 1,5lt',
        price: 2.40,
        favorite: false,
        imageUrl: 'assets/drinks/coke_zero_15lt.jpg',
    },
    {   
        id:'24',
        name: 'Coca-Cola Zero 330ml',
        price: 1.45,
        favorite: false,
        imageUrl: 'assets/drinks/coke_zero_330.jpg',
    },
    {   
        id:'25',
        name: 'Fanta 330ml',
        price: 1.45,
        favorite: false,
        imageUrl: 'assets/drinks/fanta_330.jpg',
    },
    {   
        id:'26',
        name: 'Sprite 330ml',
        price: 1.45,
        favorite: false,
        imageUrl: 'assets/drinks/sprite_330.jpg',
    },
    {   
        id:'27',
        name: 'Water 500ml',
        price: 0.50,
        favorite: false,
        imageUrl: 'assets/drinks/water_500.jpg',
    }

]