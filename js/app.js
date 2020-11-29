let vowelsBtn = document.querySelector("#vowelsBtn");
vowelsBtn.addEventListener("click", showVowels);

function showVowels(){
	let userEnteredInput = document.querySelector("#userEnteredInput").value;
	if(userEnteredInput==""){
		let error = document.querySelector("#error");
		error.innerHTML = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>ERROR!</strong>     Text Field cannot be empty. Please enter something and try again.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
		`;
		return false;
	}
	let searchedWords = /a|e|i|o|u/ig;
	let resultDiv = document.querySelector("#resultDiv");
	let result = userEnteredInput.match(searchedWords);
	if (result==null){
		resultDiv.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4">
  <div class="container">
    <h1 class="display-4">Vowel Letters: </h1>
    <p class="lead">There is no Vowel Letter in your Text</p>
  </div>
</div>
	`;
	}
	else if(result.length==1){
		resultDiv.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4">
  <div class="container">
    <h1 class="display-4">Vowel Letters: </h1>
    <p class="lead">There is only ${result.length} Vowel Letter in your Text</p>
  </div>
</div>
	`;
	}
	else if(result.length>1){
			resultDiv.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4">
  <div class="container">
    <h1 class="display-4">Vowel Letters: </h1>
    <p class="lead">There are ${result.length} Vowel Letters in your Text</p>
  </div>
</div>
	`;
	}
	
	
}
