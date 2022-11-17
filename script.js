let searchable = ['Almond','Amaretto','Anchovy','Anise','Apple','Apricot','Artichoke','Arugula','Asian','Asparagus','Aspen','Avocado','BBQ','Back','Bacon','Banana','Barley','Basil','Bass','Bastille','Bean','Beef','Beer','Beet','Berry','Biscuit','Bitters','Blackberry','Blueberry','Bok','Bon','Bourbon','Bourdain','Braise','Bran','Brandy','Bread','Breadcrumbs','Breakfast','Brie','Brine','Brisket','Broccoli','Broil','Brown','Brownie','Brunch','Brussel','Buffalo','Buffet','Bulgur','Burrito','Butter','Buttermilk','Butternut','Butterscotch/Caramel','Cabbage','Cacao','Cake','Cal','Calvados','Campari','Candy','Cantaloupe','Capers','Caraway','Carb','Cardamom','Carolina','Carrot','Cashew','Casserole/Gratin','Cauliflower','Caviar','Celery','Chambord','Champagne','Chard','Chartreuse','Cheddar','Cheese','Cherry','Chestnut','Chicken','Chickpea','Chile','Chili','Chill','Chive','Chocolate','Chop','Choy','Cilantro','Cinco','Cinnamon','Citrus','City','Clam','Clove','Cobbler/Crumble','Cocktail','Coconut','Cod','Coffee','Cognac/Armagnac','Collard','Colorado','Columbus','Condiment','Condiment/Spread','Conscious','Cookie','Cookies','Coriander','Corn','Cornmeal','Costa','Cottage','Couscous','Crab','Cranberry','Cream','Critic','Cream','Crêpe','Cucumber','Cumin','Cupcake','Currant','Curry','Custard','Dairy','Date','Digestif','Dill','Dip','Diwali','Dorie','Dough','Dried','Drink','Drinks','Duck','Edible','Egg','Eggplant','Egypt','Emeril','Endive','Epi','Escarole','Fennel','Feta','Fiber','Fig','Fish','Freeze/Chill','Frittata','Fritter','Garlic','Gin','Ginger','Goat','Goin','Goose','Gouda','Gourmet','Grains','Grand','Granola','Grape','Grapefruit','Grappa','Gras','Green','Greens','Greenspan','Grill','Grill/Barbecue','Guam','Guava','Haiti','Halibut','Ham','Hamburger','Hanukkah','Hashanah/Yom','Hawaii','Hazelnut','Healdsburg','Herb',',Honey','Honeydew','Hors','Horseradish','Hummus','Ice','Idaho','Iowa','Jack','','Jelly','Juice','Kale','Kansas','Kentucky','','Kitchen','Kiwi','Kosher','Kumquat','Kwanzaa','Lagasse','Lamb','Lancaster','Las','Lasagna','Leafy','Leek','Lemon','Lemongrass','Lentil','Lettuce',' Lima','Lime','Lingonberry','Liqueur','Lobster','Long','Lychee','Macadamia','Macaroni','Maine','Maker','Mandoline','Mango','Maple','Margarita','Marinade','Marinate','Marnier','Marsala','Marscarpone','Marshmallow','Martini','Maryland','Mayonnaise','Meat','Meatball','Meatloaf','Melon','Mesa','Mezcal','Midori','Milk/Cream','Mint','Missouri','Mixer','Molasses','Monterey','Mortar','Mozzarella','Muffin','Mushroom','Mussel','Mustard','Nebraska','Nectarine','Noodle','Nut','Nutmeg','Oat','Oatmeal','Octopus','Oil','Okra','Olive','Omelet','Onion','Orange','Oregano','Orzo','Oyster','Paleo','Palisades','Pancake','Papaya','Paprika','Parmesan','Parsley','Parsnip','Pasadena','Passion fruit','Pasta','Pastry','Pea','Peach','Peanut','Pear','Pecan','Pepper','Pernod','Persian','Persimmon','Pescatarian','Pestle','Phyllo/Puff','Pickles','Pie','Pine','Pineapple','Pistachio','Pizza','Plantain','Plum','Poach','Poblano','Pomegranate','Poppy','Pork','Potato','','Potluck','Poultry','Prosciutto','Providence','Prune','Pumpkin','Purim','Quail','Quiche','Quick','Quince','Quinoa','Rabbit','Rabe','Rack','Radicchio','Radish','Raisin','Ramekin','Raspberry','Rib','Rice','Ricotta','Roast','Root','Rosemary','Rosh','Rosé','Rub','Rum','Rutabaga','Rye','Saffron','Sage','Salad','Salmon','Salsa','San','Sandwich','Sangria','Santa','Sardine','Sauce','Sausage','Sauté','Scallop','Seafood','Seed','Self','Semolina','Sesame','Shallot','Shank','Shavuot','Shellfish','Sherry','Shrimp','Side','Silverton','Simmer','Skewer','Slow','Smoker','Smoothie','Snap','Snapper','Sodium','Sorbet','Soufflé/Meringue','Soup/Stew','Sour','Sourdough ','Soy','Spice','Spinach','Spritzer','Sprout','Squash','Squid','St.','Steak','Steam','Stew','Stir-Fry','Stock','Strawberry','Stuffing/Dressing','Sugar','Sukkot','Super','Swordfish','Syrup','Taco','Tailgating','Tamarind','Tangerine','Tapioca','Tarragon','Tart','Tea','Tenderloin','Tequila','Thyme','Tilapia','Tofu','Tomatillo','Tomato','Tortillas','Tree','Triple','Tropical','Trout','Tuna','Turnip','Vanilla','Veal','Vinegar','Vodka','Waffle','Walnut','Wasabi','Watercress','Watermelon','Wheat','Wheat/Gluten-Free','Whiskey','White','Whole','Wild','Windsor','Wine','Wok','Yogurt','Yuca','Zucchini'];
//search bar 
const searchInput = document.getElementById('new_single_ingredient');
const searchForm = document.querySelector('.ingredients_form');
const Div_checkbox = document.querySelector('.Div_checkbox');
const searchDiv = document.querySelector('.Div_ingredients_form');
const resultsDiv = document.querySelector('.Div_results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  //console.log(input); 
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
    if (!results.length) {
      return searchDiv.classList.remove('show');
    }
  
    const content = results.map((item) => {
        return `<li class="listItem">
        <input type="checkbox" class="listItemCheckbox">
	      <label>${item}</label></li>`;
      }).join('');
  
    searchDiv.classList.add('show');
    resultsDiv.innerHTML = `<ul>${content}</ul>`;

  }



