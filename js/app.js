function createNav() {
    /*
    I created an HTML navbar like a plan and converted it into JS

    <li class="navbarli"><a class="navbara" href="#section1">Section 1</a></li>
    <li class="navbarli"><a class="navbara" href="#section2">Section 2</a></li>
    <li class="navbarli"><a class="navbara" href="#section3">Section 3</a></li>
    <li class="navbarli" style="cover"><a class="navbara" href="#section4">Section 4</a></li>
    <li class="navbarli" style="float:right"><a class="navbara" href="#mainheader">About</a></li>
   
    For loop is 
    */
    const navItems = ['News', 'Life', 'Comments', 'Information', 'Home'];

    const ul = document.querySelector('ul')

    for (let navItem of navItems) {
        let li = document.createElement("li");
        if (navItem == 'Information') {
            li.innerHTML += `<a class="navbara" href="#information">${navItem}</a>`;
            li.id = navItem;
            li.className = "navbarli";
            li.style = "cover"
            ul.appendChild(li);
        } else if (navItem == 'Home') {
            li.innerHTML += `<a class="navbara" href="#home">${navItem}</a>`;
            li.id = navItem;
            li.className = "navbarli";
            li.style = "float:right"
            ul.appendChild(li);
        } else {
            li.innerHTML += `<a class="navbara" href="#${navItem.toLowerCase()}">${navItem}</a>`;
            li.id = navItem;
            li.className = "navbarli";
            ul.appendChild(li);
        }

    }

}

createNav();

/*
Adding an EventListener to an Element getting it by ID and adding an active class to HTML .
Making a function - reset() removing active class from all the elements leaving active class to 
the element which is being clicked. 
*/

function reset() {
    document.getElementById("news").classList.remove("your-active-class");
    document.getElementById("life").classList.remove("your-active-class");
    document.getElementById("comments").classList.remove("your-active-class");
    document.getElementById("information").classList.remove("your-active-class");
}
document.getElementById("News").addEventListener("click", newsActive);

function newsActive() {
    reset();
    document.getElementById("news").className += "your-active-class";

}

document.getElementById("Life").addEventListener("click", lifeActive);

function lifeActive() {
    reset();
    document.getElementById("life").className += "your-active-class";

}

document.getElementById("Comments").addEventListener("click", commentsActive);

function commentsActive() {
    reset();
    document.getElementById("comments").className += "your-active-class";

}

/* Used this code for making sections active with click.
Added Navbar active on scroll to the following code where I make sections
active in scroll.

*/

// document.getElementById("Information").addEventListener("click", informationActive);

// function informationActive() {
//     reset();
//     document.getElementById("information").className += "your-active-class";

// }

// document.getElementById("home").addEventListener("click", homeDate);

// function homeDate() {
//     reset();
//     document.getElementById("data").innerHTML = Date();

// }

// document.getElementById("Life").addEventListener("scroll", lifeScroll);

// function lifeScroll() {

//     document.getElementById("life").className += "your-active-class";

// }

/* 
Got inspired by  Youtube video - Introduction to the Intersection Observer JavaScript API - 
to make section active on scroll. Added Navbar active on scroll to same code. 
*/
// const sectionNews = document.querySelector('#news');
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshhold: 0,
    rootMargin: "-250px"
};
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id); //life, news
            entry.target.classList.add('your-active-class');
            let navid = entry.target.id //life
                // make navid first char capital
            navid = navid.charAt(0).toUpperCase() + navid.substring(1);
            document.getElementById(navid).classList.add('navactive');
        } else {
            console.log(entry.target.id);
            entry.target.classList.remove('your-active-class');
            let navid = entry.target.id
            navid = navid.charAt(0).toUpperCase() + navid.substring(1);
            document.getElementById(navid).classList.remove('navactive');
        }

    });
}, options);


sections.forEach(section => {
    observer.observe(section);
});