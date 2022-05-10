'use strict';
////////////////////////////////////////////////////////////////////////////////
// Il Sogno di Volare - Exercise about Classes #2
// for The Bridge
// by  xavimat
// 2022-05-10
//
////////////////////////////////////////////////////////////////////////////////
// Constants
const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];


////////////////////////////////////////////////////////////////////////////////
// DOM


////////////////////////////////////////////////////////////////////////////////
// Globals


////////////////////////////////////////////////////////////////////////////////
// Classes
class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }

    getRandomCivil() {
        return getRandomItem(this.civilImages);
    }

    getRandomMilitary() {
        return getRandomItem(this.militaryImages);
    }

    getAll() {
        return [...this.civilImages, ...this.militaryImages];
    }
}

class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        this.gallery = document.createElement('section');
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        const newPict = document.createElement('picture');
        const newImg = document.createElement('img');
        newImg.src = imageUrl;
        newPict.appendChild(newImg);
        return newPict;
    }

    paintSingleImage(imageUrl) {
        this.gallery.appendChild(this.createImageTag(imageUrl));
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach((imageUrl) => {
            this.paintSingleImage(imageUrl);
        });
    }
}


////////////////////////////////////////////////////////////////////////////////
// Utils
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

////////////////////////////////////////////////////////////////////////////////
// Functions


////////////////////////////////////////////////////////////////////////////////
// Listeners


////////////////////////////////////////////////////////////////////////////////
// Init

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();