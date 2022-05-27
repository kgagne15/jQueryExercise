/*
*build a form with 2 inputs for title and rating along with button to submit  -- done
*when form is submitted, capture values  -- done
*append values to DOM  -- done
*append button for each movie and rating  -- done
*button should remove it's associated movie and rating  -- done
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