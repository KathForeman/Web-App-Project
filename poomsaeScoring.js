/*!
* poomsaeScoringApp.js
* 
* Copyright 2016, Kathleen Foreman
*     Javascript code to dynamically calculate 
*     the scoring of a Taekwondo poomsae competition
*
*/
	  //general housekeeping
	  var _$ = function (id) {

		  return document.getElementById(id);
	  }

	  window.onload = function () {

		  _$("rbPtOne").onclick = AccuracyDeductions;
		  _$("rbPtThree").onclick = AccuracyDeductions;
		  _$("masteryScore").onclick = MasteryScore;
		  _$("btnReset").onclick = ResetScore;
	  }

	  //Clear text boxes and reset buttons, checkboxes and dropdown lists

	  function ResetScore() {

		  scoreResult = 10.0;
		  accuracyDeduct = 0.0;
		  masteryScores = 0.0;
		  _$('rbPtOne').checked = false;
		  _$('rbPtThree').checked = false;
		  _$('rbMovementOne').checked = true;
		  _$('rbBalanceOne').checked = true;
		  _$('rbPowerOne').checked = true;
		  _$('rbRhythmOne').checked = true;
		  _$('rbEnergyOne').checked = true;
		  _$('score').innerHTML = scoreResult;

	  }

	  //Global variables for accumulators

	  scoreResult = 10.0;           //begin at 10.0
	  accuracyDeduct = 0.0;            //begin at 0

	  // Deduct points from the score based on the buttons clicked 
	  // in the Accuracy of Movement section

	  function AccuracyDeductions() {

		  //variables for calculations

		  var deductAmount = 0.0;   //The amount to deduct set to zero
	
		//detect which deduction about was pressed
		  if (_$("rbPtOne").checked) {
			  deductAmount = parseFloat(_$("rbPtOne").value);
		  }
		  if (_$("rbPtThree").checked) {
			  deductAmount = parseFloat(_$("rbPtThree").value);
		  }
		
		//subtract the amount from the active score display 
		//   and add to the accumulator
		  scoreResult -= deductAmount;
		  accuracyDeduct += deductAmount;
		  
		//Display the current score  
		  WriteScore(scoreResult);

	  }

	  function WriteScore(scoreResult) {
		  _$('score').innerHTML = scoreResult.toFixed(1);
	  }
	  
	//Global variable for the Poomsae Mastery categories
	  var masteryScores = 0.0;

	  // set each fieldset then call CalculateScores to determine to final score
	  function MasteryScore() {

		  CalculateScore("Movement");
		  CalculateScore("Balance");
		  CalculateScore("Power");
		  CalculateScore("Rhythm");
		  CalculateScore("Energy");
		  
		  //When all of the categories have been added
		  //calculate the final score;
		  scoreResult = (5 - accuracyDeduct) + masteryScores;

		//Display the final score
		  WriteScore(scoreResult);

		  
	  }

	  function CalculateScore(radioGroup) {
		//variable to store the scored value for the category
		  var categoryRate = 0.0;
		  
		//determine the score selected
		  if (_$("rb" + radioGroup + "One").checked) {
			  categoryRate = parseFloat( _$("rb" + radioGroup + "One").value);
		  }
		  if (_$("rb" + radioGroup + "PtNine").checked) {
			  categoryRate = parseFloat( _$("rb" + radioGroup + "PtNine").value);
		  }
		  if (_$("rb" + radioGroup + "PtEight").checked) {
			  categoryRate = parseFloat( _$("rb" + radioGroup + "PtEight").value);
		  }
		  if (_$("rb" + radioGroup + "PtSeven").checked) {
			  categoryRate = parseFloat( _$("rb" + radioGroup + "PtSeven").value);
		  }
		  if (_$("rb" + radioGroup + "PtSix").checked) {
			  categoryRate = parseFloat( _$("rb" + radioGroup + "PtSix").value);
		  }
		  if (_$("rb" + radioGroup + "PtFive").checked) {
			  categoryRate = parseFloat( _$("rb" + radioGroup + "PtFive").value);
		  }
		//Add the selected score to the combined Poomsae Mastery score
		  masteryScores += categoryRate;
		 
	  }

                

   