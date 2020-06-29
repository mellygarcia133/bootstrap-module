
import getDateString from './date.js';
import '../styles/styles.scss';
import image from '../images/puppy.jpeg';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../index.html';

$(document).ready( () => {

    //Print the current time
    $('.js-content').html(`<i class="fas fa-clock"></i> ${ getDateString() }`);

    // Display image
    $('<img />')
        .attr('src', image)
        .attr('alt', 'Always provide a descriptive alt text.')
        .appendTo('body');

      // Display the Bootstrap modal window
      $('.js-modal').modal({
        show: true,
        keyboard: true
    });
});


// Print the current time
//document
   // .querySelector('.js-content')
   // .innerHTML = `It's ${ getDateString() }`;



// Display the image

//const imageElement = document.createElement('img');
//imageElement.src = image; 
//imageElement.alt = 'Cute little dumpling puppy.';

//document.body.append(imageElement);