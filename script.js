const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        // Switch Tab content
        const filter = e.target.dataset.filter;
        // console.log(filter);
        storeProducts.forEach((product) => {
            if (filter === "all") {
                product.style.display = "block";
            } else if (product.classList.contains(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");
const noResult = document.querySelector(".no-result");

search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
    const text = e.target.value.toLowerCase();

    productName.forEach((product) => {
        const item = product.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block";
            noResult.style.display = "none";
        } else {
            product.parentElement.parentElement.style.display = "none";
            noResult.style.display = "block";
        }
    });
}

// Get the navigation drawer and trigger button elements
var navDrawer = document.getElementById("nav-drawer");
var navDrawerTrigger = document.getElementById("nav-drawer-trigger");

// When the trigger button is clicked, toggle the navigation drawer
navDrawerTrigger.addEventListener("click", function() {
  navDrawer.style.display = (navDrawer.style.display === "block") ? "none" : "block";
});

  // stick search filter on scroll
window.addEventListener('scroll', function() {
    // Get the current scroll position
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
 
    // Toggle the "fixed" class on the search filter element based on the scroll position
    var searchFilter = document.getElementById('search-filter');
    if (scrollPos > 0) {
       searchFilter.classList.add('fixed');
    } else {
       searchFilter.classList.remove('fixed');
    }
 });

   // stick search box on scroll

 window.addEventListener('scroll', function() {
    // Get the current scroll position
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
 
    // Toggle the "fixed" class on the search box element based on the scroll position
    var searchBox = document.querySelector('.search-box');
    if (scrollPos > 0) {
       searchBox.classList.add('fixed');
    } else {
       searchBox.classList.remove('fixed');
    }
 });
 
 window.addEventListener('scroll', function() {
    // Get the current scroll position
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
 
    // Toggle the "fixed" class on the header element based on the scroll position
    var header = document.querySelector('header');
    if (scrollPos > 0) {
       header.classList.add('fixed');
    } else {
       header.classList.remove('fixed');
    }
 });
 
 window.addEventListener('scroll', function() {
    // Get the current scroll position
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
 
    // Adjust the top margin of the navigation drawer element based on the header element's height
    var header = document.querySelector('header');
    var navDrawer = document.getElementById('nav-drawer');
    if (scrollPos > 0) {
       navDrawer.style.marginTop = header.offsetHeight + 'px';
    } else {
       navDrawer.style.marginTop = 0;
    }
 });
 
 // Get the navigation drawer element
var navDrawer = document.getElementById("nav-drawer");

// Create a new Hammer instance for the navigation drawer element
var hammer = new Hammer(navDrawer);

// Add a swipe event listener to the Hammer instance
hammer.on('swipe', function(event) {
  // Toggle the display of the navigation drawer based on its current display value
  navDrawer.style.display = (navDrawer.style.display === "block") ? "none" : "block";
});

// Get the navigation drawer element
var navDrawer = document.getElementById("nav-drawer");

// Initialize variables to track the start and end positions of the swipe
var startX = 0;
var endX = 0;

// Add a touchstart event listener to the navigation drawer element
navDrawer.addEventListener("touchstart", function(event) {
  // Get the starting position of the touch
  startX = event.touches[0].clientX;
});

// Add a touchend event listener to the navigation drawer element
navDrawer.addEventListener("touchend", function(event) {
  // Get the ending position of the touch
  endX = event.changedTouches[0].clientX;

  // Calculate the distance swiped
  var distance = startX - endX;

  // If the distance swiped is greater than 50 pixels, close the navigation drawer
  if (Math.abs(distance) > 50) {
    navDrawer.style.display = "none";
  }
});
