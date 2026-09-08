const people = [

    {
        name: "Bartholomew",
        x: 0.015,
        y: 0.425,
        width: 0.105,
        height: 0.285,
        info: "Bartholomew is one of the twelve apostles."
    },

    {
        name: "James the Less",
        x: 0.095,
        y: 0.430,
        width: 0.085,
        height: 0.265,
        info: "James the Less is one of the twelve apostles."
    },

    {
        name: "Andrew",
        x: 0.145,
        y: 0.430,
        width: 0.095,
        height: 0.270,
        info: "Andrew is shown reacting with both hands raised."
    },

    {
        name: "Judas Iscariot",
        x: 0.225,
        y: 0.465,
        width: 0.100,
        height: 0.235,
        info: "Judas Iscariot is positioned among the group to Jesus' left."
    },

    {
        name: "Peter",
        x: 0.275,
        y: 0.435,
        width: 0.105,
        height: 0.265,
        info: "Peter leans forward toward John and Jesus."
    },

    {
        name: "John",
        x: 0.325,
        y: 0.445,
        width: 0.105,
        height: 0.250,
        info: "John is traditionally shown beside Jesus."
    },

    {
        name: "Jesus",
        x: 0.425,
        y: 0.405,
        width: 0.145,
        height: 0.315,
        info: "Jesus is positioned at the center of the composition."
    },

    {
        name: "Thomas",
        x: 0.575,
        y: 0.420,
        width: 0.080,
        height: 0.270,
        info: "Thomas is shown raising one finger."
    },

    {
        name: "James the Greater",
        x: 0.625,
        y: 0.435,
        width: 0.100,
        height: 0.260,
        info: "James the Greater appears immediately to the right of Jesus."
    },

    {
        name: "Philip",
        x: 0.680,
        y: 0.405,
        width: 0.100,
        height: 0.290,
        info: "Philip gestures toward himself while reacting to Jesus."
    },

    {
        name: "Matthew",
        x: 0.755,
        y: 0.425,
        width: 0.100,
        height: 0.285,
        info: "Matthew turns toward the figures beside him."
    },

    {
        name: "Jude Thaddeus",
        x: 0.845,
        y: 0.420,
        width: 0.085,
        height: 0.290,
        info: "Jude Thaddeus is part of the group on the far right."
    },

    {
        name: "Simon the Zealot",
        x: 0.915,
        y: 0.420,
        width: 0.080,
        height: 0.300,
        info: "Simon the Zealot appears at the far right of the composition."
    }

];

const markerContainer = document.getElementById("markers");

const personName = document.getElementById("person-name");
const personInfo = document.getElementById("person-info");

let dwellTimer = null;
let currentMarker = null;

const DWELL_TIME = 1000;


// Create bounding boxes
people.forEach((person, index) => {

    const marker = document.createElement("div");

    marker.classList.add("marker");

    marker.style.left = `${person.x * 100}%`;
    marker.style.top = `${person.y * 100}%`;

    marker.style.width = `${person.width * 100}%`;
    marker.style.height = `${person.height * 100}%`;

    marker.dataset.index = index;


    const label = document.createElement("div");

    label.classList.add("marker-label");

    label.textContent = person.name;


    marker.appendChild(label);

    markerContainer.appendChild(marker);


    marker.addEventListener("mouseenter", () => {

        currentMarker = marker;

        marker.classList.add("hovering");

        dwellTimer = setTimeout(() => {

            selectPerson(index, marker);

        }, DWELL_TIME);

    });


    marker.addEventListener("mouseleave", () => {

        marker.classList.remove("hovering");

        clearTimeout(dwellTimer);

        dwellTimer = null;

        currentMarker = null;

    });

});


function selectPerson(index, marker) {

    document
        .querySelectorAll(".marker")
        .forEach(m => m.classList.remove("selected"));


    marker.classList.add("selected");


    const person = people[index];


    personName.textContent = person.name;

    personInfo.textContent = person.info;


    console.log("Selected:", person.name);

}