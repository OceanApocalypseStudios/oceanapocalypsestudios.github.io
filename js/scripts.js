/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// HELL NO!!! THEY'LL NEVER TAKE ME ALIVE!!!!!!!!
//
// ......
// ......
//
// ugh fine...

/**
 * Generates ze greeting based on ze current time and sets it as ze text
 * of the <h1> element with id "title-text", if it exists ofc.
 */
function setGreetingHeadingByTime()
{

    const heading = document.getElementById("title-text");
    if (!heading) return;

    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12)
    {
        greeting = "Starting the day with OceanApocalypse";
    }
    else if (hour < 18)
    {
        greeting = "Good afternoon from OceanApocalypse";
    }
    else
    {
        greeting = "Late-night coding or gaming? OceanApocalypse for both!";
    }

    heading.textContent = greeting; // this greets

}

/**
 * Generates ze greeting randomly.
 */
function setGreetingHeadingRandomly()
{

    const heading = document.getElementById("title-text");
    if (!heading) return;

    const greetings = [
        "Meet OceanApocalypse",
        "Welcome to OceanApocalypse",
        "Hello, world!",
        "Swimming through the apocalypse...",
        "This is OceanApocalypse",
        "The only apocalypse you want to see..."
    ];

    const greeting = greetings[Math.floor(Math.random() * greetings.length)]; // why is random part of Math?
                                                                                // good old JS never fails to disappoint :))
    heading.textContent = greeting; // this greets

}


/*
    On Startup
*/

// Uncomment for random greeting
document.addEventListener("DOMContentLoaded", setGreetingHeadingRandomly);

// Uncomment for time-based greeting
//document.addEventListener("DOMContentLoaded", setGreetingHeadingByTime);
