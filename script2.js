const ingredientsList = document.querySelector('.results_list');
const ingredientsDiv = document.querySelector(".Div_results");
const searchInput = document.querySelector("#new_single_ingredient");

let results = ['Almond','Amaretto','Anchovy','Anise','Apple','Apricot','Artichoke','Arugula','Asparagus','Aspen','Avocado','BBQ','Back','Bacon','Banana','Barley','Basil','Bass','Bastille','Bean','Beef','Beer','Beet','Berry','Biscuit','Bitters','Blackberry','Blueberry','Bok','Bon','Bourbon','Bourdain','Braise','Bran','Brandy','Bread','Breadcrumbs','Breakfast','Brie','Brine','Brisket','Broccoli','Broil','Brown','Brownie','Brunch','Brussel','Buffalo','Bulgur','Burrito','Butter','Buttermilk','Butternut','Butterscotch/Caramel','Cabbage','Cacao','Cake','Cal','Calvados','Campari','Candy','Cantaloupe','Capers','Caraway','Carb','Cardamom','Carrot','Cashew','Casserole/Gratin','Cauliflower','Caviar','Celery','Chambord','Champagne','Chard','Chartreuse','Cheddar','Cheese','Cherry','Chestnut','Chicken','Chickpea','Chile','Chili','Chill','Chive','Chocolate','Chop','Choy','Cilantro','Cinco','Cinnamon','Citrus','City','Clam','Clove','Cobbler/Crumble','Cocktail','Coconut','Cod','Coffee','Cognac/Armagnac','Collard','Colorado','Columbus','Condiment','Condiment/Spread','Conscious','Cookie','Cookies','Coriander','Corn','Cornmeal','Costa','Cottage','Couscous','Crab','Cranberry','Cream','Critic','Cream','Crêpe','Cucumber','Cumin','Cupcake','Currant','Curry','Custard','Dairy','Date','Digestif','Dill','Dip','Diwali','Dorie','Dough','Dried','Drink','Drinks','Duck','Edible','Egg','Eggplant','Emeril','Endive','Epi','Escarole','Fennel','Feta','Fiber','Fig','Fish','Freeze/Chill','Frittata','Fritter','Garlic','Gin','Ginger','Goat','Goin','Goose','Gouda','Gourmet','Grains','Grand','Granola','Grape','Grapefruit','Grappa','Gras','Green','Greens','Greenspan','Grill','Grill/Barbecue','Guam','Guava','Haiti','Halibut','Ham','Hamburger','Hanukkah','Hashanah/Yom','Hawaii','Hazelnut','Healdsburg','Herb',',Honey','Honeydew','Hors','Horseradish','Hummus','Ice','Idaho','Iowa','Jack','','Jelly','Juice','Kale','Kansas','Kentucky','','Kitchen','Kiwi','Kosher','Kumquat','Kwanzaa','Lagasse','Lamb','Lancaster','Las','Lasagna','Leafy','Leek','Lemon','Lemongrass','Lentil','Lettuce',' Lima','Lime','Lingonberry','Liqueur','Lobster','Long','Lychee','Macadamia','Macaroni','Maine','Maker','Mandoline','Mango','Maple','Margarita','Marinade','Marinate','Marnier','Marsala','Marscarpone','Marshmallow','Martini','Maryland','Mayonnaise','Meat','Meatball','Meatloaf','Melon','Mesa','Mezcal','Midori','Milk/Cream','Mint','Missouri','Mixer','Molasses','Monterey','Mortar','Mozzarella','Muffin','Mushroom','Mussel','Mustard','Nebraska','Nectarine','Noodle','Nut','Nutmeg','Oat','Oatmeal','Octopus','Oil','Okra','Olive','Omelet','Onion','Orange','Oregano','Orzo','Oyster','Paleo','Palisades','Pancake','Papaya','Paprika','Parmesan','Parsley','Parsnip','Pasadena','Passion fruit','Pasta','Pastry','Pea','Peach','Peanut','Pear','Pecan','Pepper','Pernod','Persian','Persimmon','Pescatarian','Pestle','Phyllo/Puff','Pickles','Pie','Pine','Pineapple','Pistachio','Pizza','Plantain','Plum','Poach','Poblano','Pomegranate','Poppy','Pork','Potato','','Potluck','Poultry','Prosciutto','Providence','Prune','Pumpkin','Purim','Quail','Quiche','Quick','Quince','Quinoa','Rabbit','Rabe','Rack','Radicchio','Radish','Raisin','Ramekin','Raspberry','Rib','Rice','Ricotta','Roast','Root','Rosemary','Rosh','Rosé','Rub','Rum','Rutabaga','Rye','Saffron','Sage','Salad','Salmon','Salsa','San','Sandwich','Sangria','Santa','Sardine','Sauce','Sausage','Sauté','Scallop','Seafood','Seed','Self','Semolina','Sesame','Shallot','Shank','Shavuot','Shellfish','Sherry','Shrimp','Side','Silverton','Simmer','Skewer','Slow','Smoker','Smoothie','Snap','Snapper','Sodium','Sorbet','Soufflé/Meringue','Soup/Stew','Sour','Sourdough ','Soy','Spice','Spinach','Spritzer','Sprout','Squash','Squid','St.','Steak','Steam','Stew','Stir-Fry','Stock','Strawberry','Stuffing/Dressing','Sugar','Sukkot','Super','Swordfish','Syrup','Taco','Tailgating','Tamarind','Tangerine','Tapioca','Tarragon','Tart','Tea','Tenderloin','Tequila','Thyme','Tilapia','Tofu','Tomatillo','Tomato','Tortillas','Tree','Triple','Tropical','Trout','Tuna','Turnip','Vanilla','Veal','Vinegar','Vodka','Waffle','Walnut','Wasabi','Watercress','Watermelon','Wheat','Wheat/Gluten-Free','Whiskey','White','Whole','Wild','Windsor','Wine','Wok','Yogurt','Yuca','Zucchini'];

for(let x=0; x<results.length; x=x+1){
    //console.log(x);
    let li = document.createElement('li');
    //let checkbox = document.createElement('');
    li.className= "listItem" ;
    li.textContent = results[x];
    ingredientsList.appendChild(li);
    li.appendChild(createCheckbox('liCheckbox'));
    //for  saving in local storage, i will then need to get the parent of the .liCheckbox
  }
 

searchInput.addEventListener("input", e => {

      const ingredientItems = document.querySelectorAll('.listItem'); 
      for(let y=0; y<ingredientItems.length; y=y+1){
        const value = e.target.value.toLowerCase();
        //console.log(value);
        const isVisible = results[y].toLowerCase().includes(value);
        //console.log(isVisible);
        ingredientItems[y].classList.toggle("hide", !isVisible);
      }
})

function createCheckbox(checkboxClass){
    let checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.className=checkboxClass;
    return checkbox;
}

//saving the user's input
const allCheckboxes = document.querySelectorAll(".liCheckbox");
let selectFilterOptions = document.querySelector('#select_options');


for(let x=0; x<allCheckboxes.length; x++){
  allCheckboxes[x].addEventListener('click', ()=>{
    const checkboxInnerText = allCheckboxes[x].parentElement.innerText;
    if(allCheckboxes[x].checked){
      //console.log(checkboxInnerText);
      if(!localStorage.getItem(checkboxInnerText)){
        localStorage.setItem(checkboxInnerText,checkboxInnerText);
      }
    }
    else{
      if(localStorage.getItem(checkboxInnerText)){
        localStorage.removeItem(checkboxInnerText);
      }
    }
  })
}

let filterOption = 'Calories';
localStorage.setItem('FilterOpt', filterOption);

selectFilterOptions.addEventListener('change',e =>{
  filterOption = e.target.value;
  localStorage.setItem('FilterOpt', filterOption);
    //console.log(filterOption);
    //it's in the same 'array' as the ingredients

})


 
