/*
*build a form with 2 inputs for title and rating along with button to submit  -- done
*when form is submitted, capture values
*append values to DOM
*append button for each movie and rating
*button should remove it's associated movie and rating
*
*used the solution for guidance
*/

let currentId = 0; 

$('body').on('submit', function(e){
    e.preventDefault(); 

    let $title = $('#movie-title').val(); 
    let $rating = $('#movie-rating').val(); 

    const htmlAppend = createResults($title, $rating)
    $('#results').append(htmlAppend); 
    currentId++; 
})

$('#results').on('click', 'button', function(e){
    $(e.target).closest('tr').remove();
})



function createResults(name, rating) {
    return `
        <tr>
            <td>${name}</td>
            <td>${rating}</td>
            <td><button id=${currentId}>Delete</button></td>
        </tr>
    `
}