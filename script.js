/*
required abilities of a calculator:
accept user inputs of number, operator, and number
accept decimal numbers
store inputs
recognize inputs and preform calculations
return a result

optional features:
should accept longer artithmetic operations.
clear when operand is pressed and display all inputs in the upper right in small font
store previous total as start of next operation
all clear button should clear all entries
should prevent invalid inputs (operators next to each other, two decimal points, etc.)
*/

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', e => {
	const { target } = e;
	const { value } = target;
	if (!target.matches('button')) return;
	else {
		// pass value to parse method
		console.log(value);
	}
});
