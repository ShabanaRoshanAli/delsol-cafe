interface ExtraProps {
    title?: string;
    subHead?: string;
    list: string[];
}

export interface ItemProps {
    src?: string;
    title: string;
    para?: string;
    extra?: ExtraProps[];
}

export interface MenuItem {
    img: string;
    title: string;
    id: number;
    para?: string;
    items: ItemProps[];
}

export const menuArr: MenuItem[] = [
    {
        img: '/appetizer-menu.jpg',
        title: 'Appetizers menu',
        id:1,
        items: [
            {
                title: 'CRAB NACHOS',
                para: 'homemade potato chips | seasoned lump crab | monterey cheddar | pico de gallo | chipotle aioli'
            },
            {
                src: '/Panko-Fried-Avocados.jpg',
                title: 'PANKO FRIED AVOCADOS',
                para: 'fresh avocado wedges | spiced panko | chimichurri aioli'
            },
            {
                src: '/Ahi-Tuna-Tostadas.jpg',
                title: 'AHI TUNA TOSTADAS',
                para: 'rare seared yellowfin tuna | asian slaw | yuzu mango salsa | sriracha aioli | fried wonton'
            },
            {
                src: '/Bao-Sliders.jpg',
                title: 'BAO SLIDERS',
                para: 'korean bbq pork | cucumber | asian slaw | scallion | gochujang mayo | sesame | cilantro | steamed bao buns'
            },
            {
                src: '/Mozza-Luna.jpg',
                title: 'MOZZA LUNA',
                para: 'panko fried mozzarella | kale & arugula | marinara'
            },
        ]
    },
    {
        img: '/soups-menu.jpg',
        title: 'Soups menu',
        id: 2,
        items: [
            {
                title: 'CHICKEN BASIL CHILI',
                para: 'seasoned chicken | basil | kidney beans | herbs & spices | mild'
            },
            {
                title: 'TOMATO GOUDA BISQUE',
                para: 'roasted red peppers & tomato | gouda | spices | cream'
            },
            {
                title: 'RED ROCK BISQUE',
                para: 'red rock crab | sweet baby shrimp | baby scallops | cream | spices'
            },
            {
                title: 'SOUP DU JOUR',
                para: 'seasonal favorites'
            },
        ]
    },
    {
        img: '/salads-menu.jpg',
        title: 'Salads menu',
        id: 3,
        items: [
            {
                src: '/Ahi-Tuna-Salad.jpg',
                title: 'AHI TUNA',
                para: 'field greens | watermelon radish | cucumber | avocado | edamame | five spiced almonds | rare seared yellowfin tuna | sesame mango salsa | carrot miso ginger vinaigrette'
            },
            {
                src: '/Strawberry-Spinach.jpg',
                title: 'STRAWBERRY SPINACH',
                para: 'field greens | spinach | strawberries | mandarin oranges | red onion | feta | five spiced almonds | dark cherry balsamic vinaigrette'
            },
            {
                src: '/Tuscan-Shrimp.jpg',
                title: 'TUSCAN SHRIMP',
                para: 'field greens | baby kale & arugula | heirloom tomato | corn | asiago | basil pesto shrimp | polenta croutons | creamy caesar dressing'
            },
            {
                src: '/Fuji-Apple.jpg',
                title: 'FUJI APPLE',
                para: 'romaine | field greens | black grapes | fuji apple | grilled chicken | gorgonzola | candied walnuts | blueberry pomegranate vinaigrette'
            },
            {
                src: '/Crabcake-salad.jpg',
                title: 'CRABCAKE',
                para: 'romaine | baby kale & arugula | heirloom tomato | corn | black beans | bell peppers | avocado | asiago | cilantro pepita dressing'
            },
            {
                src: '/Black-&-Bleu-Steak.jpg',
                title: 'BLACK & BLEU STEAK',
                para: 'romaine | baby kale & arugula | heirloom tomatoes | red onion | organic egg | blackened tenderloin tips | gorgonzola | applewood bacon | bleu cheese dressing'
            },
            {
                src: '/Adobo-BBQ-Chicken.jpg',
                title: 'ADOBO BBQ CHICKEN',
                para: 'romaine | field greens | black beans | corn | mango salsa | avocado | adobo bbq chicken | crispy onions | ranch'
            },
            {
                src: '/Mediterranean.jpg',
                title: 'MEDITERRANEAN',
                para: 'romaine | field greens | heirloom tomatoes | feta | fire roasted artichokes | kalamata olives | cucumber | red onion | pepperoncini | balsamic vinaigrette'
            },
            {
                src: '/California.jpg',
                title: 'CALIFORNIA',
                para: 'romaine | field greens | heirloom tomato | avocado | roasted corn | black beans | grilled chicken | tortilla strips | jalapeno ranch'
            },
        ]
    },
    {
        img: '/panini-menu.jpg',
        title: 'panini menu',
        id: 4,
        para: 'hot pressed sandwiches on locally baked artisan bread. served with choice of fresh cut fries, homemade chips, or field greens.',
        items: [
            {
                src: '/Avocado-Club.jpg',
                title: 'AVOCADO CLUB',
                para: 'grilled chicken | swiss | applewood bacon | Avocado | tomato | herb mayo | ciabatta'
            },
            {
                src: '/Cuban.jpg',
                title: 'CUBAN',
                para: 'ham | pulled pork | swiss | pickle | dijon mustard aioli | ciabattaa'
            },
            {
                src: '/Pesto.jpg',
                title: 'PESTO',
                para: 'grilled chicken | basil pesto mayo | provolone | tomato | fresh basil | herb focaccia'
            },
            {
                src: '/Ham-Turkey-Club.jpg',
                title: 'HAM & TURKEY CLUB',
                para: 'honey cured ham | smoked turkey | applewood bacon | lettuce | tomato | bacon aioli | ciabatta'
            },
            {
                src: '/Prime-Rib.jpg',
                title: 'PRIME RIB',
                para: 'shaved prime rib | balsamic onions | smoked gouda | kale & arugula | dijon brie spread | rosemary ciabatta'
            },
            {
                src: '/Crabcake.jpg',
                title: 'CRABCAKE',
                para: 'signature crabcake | provolone | tomato | old bay mayo | ciabatta'
            },
        ]
    },
    {
        img: '/pizzas-menu.jpg',
        title: 'Pizza menu',
        id:5,
        para: 'dough handmade in-house with olive oil & sea salt, then proofed to perfection.',
        items: [
            {
                src: '/Margherita.jpg',
                title: 'MARGHERITA',
                para: 'fresh mozzarella | roasted tomatoes | garlic | fresh basil'
            },
            {
                src: '/Chipotle.jpg',
                title: 'CHIPOTLE',
                para: 'chipotle pesto | mozzarella | monterey cheddar | chicken | bell peppers | avocado | sour cream | pico de gallo'
            },
            {
                src: '/Five-Cheese.jpg',
                title: 'FIVE CHEESE',
                para: 'ricotta | fresh garlic | mozzarella | gorgonzola | provolone | romano'
            },
            {
                src: '/Adobo-BBQ.jpg',
                title: 'ADOBO BBQ',
                para: 'chicken or carnitas | mozzarella | sweet & spicy adobo bbq sauce | smoked gouda | red onions | cilantro'
            },
            {
                src: '/Shrimp-Tostada.jpg',
                title: 'SHRIMP TOSTADA',
                para: 'mozzarella | black beans | monterey cheddar | shrimp | chorizo | pico de gallo | shredded lettuce | jalapeno ranch'
            },
            {
                src: '/Prosciutto.jpg',
                title: 'PROSCIUTTO',
                para: 'fresh mozzarella | garlic | prosciutto | balsamic onions | pepperoncini | kale & arugula'
            },
            {
                src: '/Cheesesteak.jpg',
                title: 'CHEESESTEAK',
                para: 'chopped sirloin | mozzarella | smoked gouda | bell peppers | onions | portabellos'
            },
            {
                src: '/Greek.jpg',
                title: 'GREEK',
                para: 'basil pesto | beef & lamb | mozzarella | feta | chilled greek salad | tzatziki sauce'
            },
            {
                src: '/Meat-Lovers.jpg',
                title: 'MEAT LOVERS',
                para: 'marinara | mozzarella | sausage | bacon | ham | pepperoni'
            },
            {
                src: '/Tuscan-Hummus.jpg',
                title: 'TUSCAN HUMMUS',
                para: 'roasted red pepper hummus | mozzarella | kalamata olives | spinach | artichokes | portabellos'
            },
            {
                src: '/Build-Your-Own-pizza.jpg',
                title: 'CREATE YOUR OWN 10"',
                para: 'hand tossed with zesty tomato sauce & mozzarella',
                extra:[ {
                    title: 'PICK 3 TOPPINGS 10" | 14"',
                    subHead: 'Toppings 10" | 14"',
                    list: ['chicken', 'ham', 'bbq pork', 'bacon', 'salami', 'ricotta', 'balsamic onion', 'pineapple', 'olives', 'basil', 'roasted tomato', 'spinach', 'pepperoni', 'mushroom', 'bell peppers', 'onion', 'tequila jalapeño']
                }]
            },
             {
                title:'CALZONE',
                para:'housemade pizza turnovers | choose from any pizza combination at corresponding price'
            }
        ]
    },
    {
        img: '/pasta-menu-2.jpg',
        title: 'Pasta menu',
        id: 6,
        para:'made to order. served with ciabatta garlic bread.',
        items: [
            {
                src: '/Five-Cheese-Lasagna.jpg',
                title: 'FIVE CHEESE LASAGNA',
                para: 'ground beef, pork & veal blend | mozzarella | provolone | gouda | ricotta | asiago | marinara'
            },
            {
                title: 'PASTA DEL SOL',
                para: 'penne | grilled chicken | portabellos | applewood bacon | spinach | roasted red pepper & tomato cream sauce'
            },
            {
                title: 'CRAB MAC & CHEESE',
                para: 'red rock bisque | cheddar | asiago | swiss | lump crab | panko | kale & arugula'
            },
            {
                title: 'CHICKEN PARMESAN',
                para: 'capellini | house marinara | breaded chicken | fresh mozzarella | basil'
            },
            {
                title: 'SHRIMP PESTO',
                para: 'tagliatelle | basil pesto | heirloom tomato | kalamata olive | artichokes | jumbo shrimp | asiago'
            }
        ]
    },
    {
        img: '/sandwiches-menu.jpg',
        title: 'Sandwiches menu',
        id: 7,
        para:'served with choice of fresh cut fries, homemade chips, or field greens.',
        items: [
            {
                title: 'GYRO',
                para: 'beef & lamb blend | lettuce | tomato | onion | feta | tzatziki sauce | naan bread'
            },
            {
                title: 'SHORT RIB BURGER',
                para: 'angus chuck & short rib blend | provolone | grilled onions | lettuce | tomato | dijon horseradish | brioche'
            },
            {
                title: 'CABO',
                para: 'blackened tilapia | avocado | mango salsa | asian slaw | chipotle aioli | sour cream | naan bread'
            },
            {
                title: 'CHEESESTEAK',
                para: 'grilled steak | onions | mushrooms | bell peppers | provolone | mayo | ciabatta'
            },
        ]
    },
    {
        img: '/wraps-menu.jpg',
        title: 'Wraps menu',
        id: 8,
        para:'served with choice of fresh cut fries, homemade chips, or field greens.',
        items: [
            {
                title: 'CAESAR WRAP',
                para: 'garlic herb tortilla | grilled chicken | caesar dressing | chopped romaine | asiago'
            },
            {
                title: 'TURKEY WRAP',
                para: 'honey wheat tortilla | smoked turkey | cranberry mayo | chopped romaine'
            },
            {
                title: 'MARKET WRAP',
                para: 'garlic herb tortilla | avocado | cucumber | red pepper hummus | lettuce | tomato | onion | feta'
            },
        ]
    },
    {
        img: '/quesadillas-menu.jpg',
        title: 'Quesadillas menu',
        id: 9,
        para:'served with side of house-made salsa & lime crema. add guacamole',
        items: [
            {
                title: 'PORTABELLO',
                para: 'spinach | onion | tomato | chedda'
            },
            {
                title: 'STEAK or CHICKEN',
                para: 'bell peppers | onion | tomato | cheddar'
            },
            {
                title: 'SHRIMP & CHORIZO',
                para: 'bell peppers | onion | tomato | cheddar'
            },
        ]
    },
    {
        img: '/tacos-menu.jpg',
        title: 'Tacos menu',
        id: 10,
        para:'each on choice of flour or corn tortillas* with side of black bean basmati rice',
        items: [
            {
                src: '/Adobo-Carnitas.jpg',
                title: 'ADOBO CARNITAS',
                para: 'adobo bbq | slow roasted pulled pork | fuji apple slaw'
            },
            {
                src: '/Chimichurri-Steak.jpg',
                title: 'CHIMICHURRI STEAK',
                para: 'beer & spice marinated tenderloin | pico de gallo | kale & arugula | panko fried avocado | chimichurri aioli'
            },
            {
                src: '/Baja-Fish.jpg',
                title: 'BAJA FISH',
                para: 'battered or grilled fish | asian slaw | grilled pineapple | pico de gallo | avocado | sriracha aioli'
            },
        ]
    },
    {
        img: '/rice-bowls-menu.jpg',
        title: 'Rice menu',
        id: 11,
        para:'basmati rice with black beans, olive oil, fresh garlic & cumin. served with naan bread and choice of:',
        items: [
            {
                src: '/Chipotle-Pesto-Steak.jpg',
                title: 'CHIPOTLE PESTO STEAK',
                para: 'beef tenderloin tips | avocado | bell peppers | onions | sour cream | pico de gallo | tequila pickled jalapeno'
            },
            {
                src: '/Shrimp-Chorizo.jpg',
                title: 'SHRIMP & CHORIZO',
                para: 'avocado | bell peppers | onions | mango salsa | sour cream | tequila pickled jalapeno'
            },
            {
                src: '/Adobo-Chicken.jpg',
                title: 'ADOBO CHICKEN',
                para: 'avocado | bell peppers | onions | pico de gallo | sour cream | tequila pickled jalapeno'
            },
            {
                src: '/Korean-BBQ-Pork.jpg',
                title: 'KOREAN BBQ PORK',
                para: 'asian slaw | avocado | mango salsa | yuzu aioli | tequila pickled jalapeno'
            },
        ]
    },
    {
        img: '/sides-menu.jpg',
        title: 'Sides menu',
        id: 12,
        items: [
            {
                src: '/Fresh-Cut-Fries.jpg',
                title: 'FRESH CUT FRIES',
                para: 'cut fresh in-house daily. choose from 4 signature flavors:',
            },
            {
                title:'SWEET POTATO WAFFLE FRIES',
                para:'with dijon horseradish sauce'
            },
            {
                title:'HOMEMADE CHIPS',
                para:'all natural-preservative free | seasoned with spiced sea salt | ranch'
            },
            {
                title:'BLACK BEAN BASMATI RICE',
                para:'long grain basmati rice | olive oil | sea salt | cumin | black beans'
            },
            {
                title:'GARDEN SALAD',
                para:'romaine | field greens | heirloom tomato | red onion | cucumber | ciabatta croutons'
            },
            {
                title:'CAESAR SALAD',
                para:'romaine | shaved asiago | ciabatta croutons | creamy caesar'
            },
            {
                title:'FIELD GREENS',
                para:'5 leaf blend | heirloom tomato | balsamic vinaigrette'
            },
        ]
    },
    {
        img: '/desserts-menu.jpg',
        title: 'Desserts menu',
        id: 13,
        items: [
            {
                src: '/Strawberry-Tres-Leches.jpg',
                title: 'STRAWBERRY TRES LECHES',
                para: 'Sponge cake soaked in cream, layered with all natural strawberry puree, whipped cream & fresh strawberries.'
            },
            {
                src: '/Canoli.jpg',
                title: 'CANNOLI',
                para: 'Two crunchy pastry shells dipped in chocolate and filled with chocolate chips & cream.'
            },
            {
                src: '/Tiramisu.jpg',
                title: 'TIRAMISU',
                para: 'Ladyfingers drenched in espresso liqueur topped with rich mascarpone & cocoa powder.'
            },
            {
                src: '/Ultimate-chocolate-cake.jpg',
                title: 'ULTIMATE CHOCOLATE CAKE',
                para: 'Rich chocolate butter cake layered with chocolate decadence, chocolate mousse & ganache.'
            },
            {
                src: '/Turtle-Cheesecake.jpg',
                title: 'TURTLE CHEESECAKE',
                para: 'Graham cracker crust layered with smooth cheesecake, fudge & caramel sauce, topped with chopped pecans.'
            },
            {
                src: '/Dessert-shooters.jpg',
                title: 'MINI DESSERT SHOOTERS',
                para: 'Prepared daily including seasonal flavors. Your server will bring our tray of shooters to show you todays selection.'
            }
        ]
    },
    {
        img: '/beer-menu.jpg',
        title: 'Beer menu',
        id: 14,
        items: [
            {
                title: 'Hagerstown Selection Draft Beer',
            },
            {
                title: 'Winchester Selection Draft Beer',
            },
            {
                title: 'Martinsburg Selection',
            },
            {
                title: 'Draft Beer',
                para: '6 seasonal selections including local brews'
            },
            {
                title: 'Draft Beer',
                para: 'Seasonal Selections'
            },
            {
                title: 'Beer (bottles)',
                extra:[{
                    list:['Miller Lite','Corona','Stella Artois','Michelob Ultra','Bud Light','Yuengling Lager',' Negra Modelo']
                }]
            },
            {
                title:'Bottled Beer',
                extra:[{
                    list:['Corona','Stella Artois','Yeungling Lager','Bud Ligh','Miller Light','Coors Light','Michelob Ultra']
                }]
            },
            {
                title:'Bottled Beer',
                extra:[{
                    list:['Duclaw Sweet Baby Jesus Porter','Rogue Hazlenut Brown Nectar','Lagunitas Little Sumpin Ale','Firestone Walker UJ IPA','Dogfish Head 60 Min IPA','Sierra Nevada Pale Ale','Red Nectar Ale','Duclaw Bare Ass Blonde Ale','Stella Artois','Yuengling Lager','Corona','Bud Light','Michelob Ultra','Miller Light' ,'Coors Light']
            }]
            },
            {
                title:"Draft Beer",
                extra:[{
                    list:['6 Seasonal Selections','Blue Moon','Missile IPA, Champion Brewing Co.']
                }]
            }
        ]
    },
    {
        img: '/wine-menu.jpg',
        title: 'Wine menu',
        id: 15,
        items: [
            {
                title: 'CEMBRA PINOT GRIGIO',
                para: 'italy ripe citrus | honey | strong minerality | silky tanins'
            },
            {
                title: 'LOBSTER REEF SAUVIGNON BLANC',
                para: 'new zealand bright fresh tropical fruit | papaya | guava | pineapple | luscious peach aroma'
            },
            {
                title: 'MOSELLAND ARS VITIS RIESLING',
                para: 'germany sweet peach | lemon'
            },
            {
                title: 'KENDALL JACKSON CHARDONNAY',
                para: 'california pineapple | mango | papaya | green apple | oak spice'
            },
            {
                title: 'LAPIS LUNA PINOT NOIR',
                para: 'california red cherries | boysenberries | purple flowers | juicy & smooth palate'
            },
            {
                title: 'SOTTANO CABERNET SAUVIGNON',
                para: 'argentina ruby hues | coffee | cassis | french oak | soft ripe tannins'
            },
        ]
    },
    {
        img: '/cocktails-menu.jpg',
        title: 'Cocktails menu',
        id: 16,
        items: [
            {
                title: 'RED SANGRIA',
                para: 'tempranillo | brandy | citrus | strawberry'
            },
            {
                title: 'Red Sangria',
                para: 'tempranillo | brandy | citrus | strawberry'
            },
            {
                title: 'MARGARITA',
                para: 'tequila | lime | house-made sour mix'
            },
            {
                title: 'White Sangria',
                para: 'chardonnay | apple | citrus | spices'
            },
            {
                title: 'SPICY ORANGE MARGARITA',
                para: 'tequila | serrano infused sour mix | orange'
            },
            {
                title: 'Margarita',
                para: 'tequila | lime | house-made sour mix'
            },
        ]
    },
    {
        img: '/kids-menu.jpg',
        title: 'Kids menu',
        id: 17,
        items: [
            {
                title: 'FRUIT CUP',
                para: 'Strawberries, mandarin oranges & grapes'
            },
            {
                title: 'QUESADILLA',
                para: 'Melted monterrey & cheddar in a flour tortilla served with shredded lettuce and side of sour cream'
            },
            {
                title: 'SPAGHETTI',
                para: 'Tossed with parmesan & marinara, served with garlic bread'
            },
            {
                title: 'CHICKEN TENDERS',
                para: '3 tenders with a side of fries and bbq sauce'
            },
        ]
    },
]
