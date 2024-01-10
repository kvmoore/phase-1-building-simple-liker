// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


//Set up an event listener to respond to a user action
//Submit a request to a mocked-up server
//Update the DOM based on the mock server's response


/*Add the .hidden class to the error modal in the HTML so it does not appear 
when the page first loads*/

function closeErrorModal() {
	const errorModal = document.getElementById("modal");
  console.log(errorModal);
  errorModal.classList.add("hidden");
}	

closeErrorModal();

// Get all elements with the class name "like-glyphs"
//loop through .like-glyph
//for each heart .like-glyph add an event listener with function
//When a user clicks on an empty heart:
//Invoke mimicServerCall to simulate making a server request/

const likeGlyphsElements = document.querySelectorAll('.like-glyph');
console.log(likeGlyphsElements);

likeGlyphsElements.forEach(function (heart) {

  heart.addEventListener('click', function (event) {
    

    mimicServerCall()
      .then(() => {
        
        console.log('Server request successful');

        const clickedHeart = event.target;
    console.log(clickedHeart)
    
    const isActivated = clickedHeart.classList.contains('activated-heart');
    console.log(isActivated)
    
    clickedHeart.innerHTML = isActivated ? EMPTY_HEART : FULL_HEART;

    
    clickedHeart.classList.toggle('activated-heart');

      })
      .catch((error) => {
        
        console.log('Server request failed', error);
        
        handleModalMessage(error);

        //clickedHeart.innerHTML = isActivated ? FULL_HEART : EMPTY_HEART;
        //clickedHeart.classList.toggle('activated-heart');
      }

      )}
  );
})

  //Display the error modal by removing the .hidden class
  //Display the server error message in the modal
      function handleModalMessage(errorMessage) {
          //<p id="modal-message"></p>
         const errorModal = document.getElementById("modal");
         const messageElement = document.getElementById('modal-message');
       
         errorModal.classList.remove("hidden");
         
         messageElement.textContent = errorMessage; 

         
        var modal = document.getElementById('modal');

        function hideModal() {
        modal.classList.add('hidden');
      }

        setTimeout(hideModal, 3000);
       
      }
         

// // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)









/*Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
Only manipulate the DOM once the server request responds. Do not make the heart full until you're 
inside a successful .then block.

//**Will not need to call .json on the response so you only need a single then() call

*/
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
