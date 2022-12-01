// alert("Can you see this?");

/*

      Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates
      unique colors and content for each weekday (Sunday to Saturday) into the page.
      The content must include:

      One unique image, with appropriate and matching content in the alt tag.  
      A paragraph or two of content that describes the daily item (paragraph must include 
      the name of the highlighted weekday)
      A unique color that supports the image and paragraph of content

      The unique color could affect the background HTML, or an element on the page for each day of the week. 
      All of the above must occur within one page.

      Image (of specific coffee)
      alt tag (identifies type of coffee)
      description  (of this type of coffee)
      weekday 
      color (supporting image)

*/

function coffeeTemplate(coffee){
  
  return `<p>  <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
  <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}</p>
  <p><strong>Info:</strong> ${coffee.info}</p>
  <p><strong>Song of the Day:</strong> ${coffee.song} </p>`;
  ;

   

  /*
  let myReturn = "";

    myReturn += coffee;
    
    return myReturn;
  */
}


let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}else{//today's day of week
     myDay = today;
}

//Change the string to an integer
// myDay = parseInt(myDay);

switch(parseInt(myDay)){
  case 1:
    today = "Monday";
    coffee = {
        color:"pink", 
        name: "Bubble Tea",
        pic: "bubble-tea.jpg",
        alt: "A picture of a bubble tea",
        day: "Monday",
        desc: `I like me some Bubble Tea!`,
        info: `The tea is mixed with milk or fruits and topped off with chewy tapioca pearls.`,
        song: `Hello by Adele`
    };
  break;

  case 2:
    today = "Tuesday";
    coffee = {
        color:"brown", 
        name: "Caramel Latte",
        pic: "caramel-latte.jpg",
        alt: "A picture of a caramel latte",
        day: "Tuesday",
        desc: `It's cold, so a caramel latte sounds good!`,
        info: `A Caramel Latte is made by mixing espresso with caramel syrup and pouring steamed milk on top. A Caramel Macchiato is made by mixing vanilla syrup and steamed milk together, and then pouring the espresso on top, leaving the black mark on the milk foam ("macchiato" means "marked" in Italian)`,
        song: `Dynamite by BTS`
    };
  break;

  case 3:
    today = "Wednesday";
    coffee = {
        color:"black", 
        name: "Cold Brew",
        pic: "cold-brew.jpg",
        alt: "A picture of a cold brew",
        day: "Wednesday",
        desc: `Cold brew for when we're serious!`,
        info:`Cold brew is not the same thing as iced coffee, which is hot-brewed and then chilled. Instead, it's made by steeping coarse-ground coffee beans in room-temperature water for 10 to 20 hours. Making cold brew coffee at home is easy, economical and healthy. Plus, it allows you to customize the beans used and the strength.`,
        song: `Feel Special by Twice`
    };
  break;

  case 4:
    today = "Thursday";
    coffee = {
        color:"white", 
        name: "Drip Coffee",
        pic: "drip.jpg",
        alt: "A picture of a drip coffee",
        day: "Thursday",
        desc: `Drip is regular coffee!`,
        info: `Drip’s dedication to bringing you high quality coffee is perhaps most evident in our pour-over coffees. We handcraft each and every cup as it’s ordered to bring you the highest-quality coffee possible. By controlling every aspect of your coffee’s creation from the time we grind the beans until the very last drip, we’re certain you’ll notice the difference.`,
        song: `Gee by Girls' Generation`
    };
  break;

  case 5:
    today = "Friday";
    coffee = {
        color:"green", 
        name: "Frappuccino",
        pic: "frappuccino.jpg",
        alt: "A picture of a frappuccino",
        day: "Friday",
        desc: `Frappuccino is delicious!`,
        info: `The most popular coffee-free Frappuccinos are the Vanilla Bean Frappuccino, the Strawberry Frappuccino, the Double Chocolate Chip Frappuccino and the Matcha Green Tea Frappuccino (though this one does contain caffeine).`,
        song: `Shake it Off by Taylor Swift`
    };
  break;

  case 6:
    today = "Saturday";
    coffee = {
        color:"brown", 
        name: "Mocha",
        pic: "mocha.jpg",
        alt: "A picture of a mocha",
        day: "Saturday",
        desc: `Mocha is good for the soul!`,
        info: `A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug. Other commonly used spellings are mochaccino and also mochachino`,
        song: `Thinking out Loud by Ed Sheeran`


    };
  break;

  case 0:
    today = "Sunday";
    coffee = {
        color:"orange", 
        name: "pumpkin spice latte",
        pic: "pumpkin-spice-latte.jpg",
        alt: "A picture of a pumpkin spice latte",
        day: "Sunday",
        desc: `Pumpkin spice latte is the perfect autumn drink!`,
        info:`Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices.`,
        song: `August by Taylor Swift`
    };
  break;

  default:
      alert("something went wrong!");
}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

// Change the background color of the HTML element 
document.querySelector("html").style.backgroundColor = coffee.color;



// console is good for trouble shoothing 
