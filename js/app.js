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
    const navItems = ['Section1', 'Section2', 'Section3', 'Section4', 'Home'];

    const ul = document.querySelector('ul')

    for (let navItem of navItems) {
        let li = document.createElement("li");
        if (navItem == 'Section4') {
            li.innerHTML += `<a class="navbara" href="#section4">${navItem}</a>`;
            li.id = navItem;
            li.className = "navbarli";
            li.style = "cover"
            ul.appendChild(li);
        } else if (navItem == 'Home') {
            li.innerHTML += `<a class="navbara" href="#mainheader">${navItem}</a>`;
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