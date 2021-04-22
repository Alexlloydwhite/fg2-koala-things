const { response } = require("express");

console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new objecct
    saveKoala( koalaToSend );
  }); 
  
  // mark koala as ready for transfer
  $('#viewKoalas').on('click', '.mark-ready', markReadyHandler);
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
  })
  .then( function(response) {
    console.log(response);
    renderKoalas(response);
  })
  .catch( function(error) {
    console.log(`Error in GET, ${error}`);
  })
} // end getKoalas

function renderKoalas(koalas){
  // empty element on the DOM
  $('#viewKoalas').empty();

  for(let i = 0; i < koalas.length; i++) {
    let newRow = $(`
    <tr>
      <td>${koalas[i].name}</td>
      <td>${koalas[i].age}</td>
      <td>${koalas[i].gender}</td>
      <td>${koalas[i].ready_to_transfer}</td>
      <td>${koalas[i].notes}</td>
      <td>
        <button type="button" class="markReady" data-id="${koalas[i].id}">
          Ready For Transfer
        </button>
      </td>
      <td>
        <button type="button" class="delete-koala" data-id="${koalas[i].id}">
          Delete
        </button>
      </td>
    `)
    $('#viewKoalas').append(newRow);
  }
}

function markReadyHandler() {
  markAsReady( $(this).data("id"), "true" )
}

function markAsReady(koalaId, isReady) {
  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaId}`,
    data: {
      isReady: isReady
    }
  })
  .then(response => {
    getKoalas();
  })
  .catch(error => {
    console.log(`error on koala mark as ready. ${error}`);
  })
}

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to post koalas
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: newKoala,
  })
  .then( response => {
    console.log('Response from server.', response);
    getKoalas();
  })
  .catch(error => {
    console.log('Error in POST', error)
    alert('Unable to add koala at this time.');
  });
}//end saveKoala
