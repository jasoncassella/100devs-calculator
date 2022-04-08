/*
optional features:
- should prevent invalid inputs (operators next to each other, two decimal points, etc.)
*/

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', e => {
	const { target } = e;
	const { value } = target;
	if (!target.matches('button')) return;
	else caluclator.parseInput(value);
});

const caluclator = {
	displayText: '0',
	prevTotal: null,

	parseInput(value) {
		switch (value) {
			case '=':
				this.calcAnswer(this.displayText);
				break;
			case 'AC':
				this.clearAll();
				break;
			case '.':
				if (this.displayText === '0') {
					this.addText('0.');
				} else {
					this.addText(value);
				}
				break;
			default:
				this.addText(value);
		}
	},

	addText(value) {
		if (this.displayText === '0') this.displayText = '';
		else if (this.prevTotal !== null) {
			this.displayText = this.prevTotal;
			this.prevTotal = null;
		}
		if (isNaN(+value) && isNaN(+this.displayText)) {
			if (isNaN(this.displayText.slice(-1))) return;
		}
		this.displayText += value;
		this.outputText(this.displayText);
	},

	outputText(text) {
		document.querySelector('.calculator-screen').value = text;
	},

	calcAnswer(equation) {
		let result = Function('return ' + equation)();
		this.outputText(result);
	},

	clearAll() {
		this.displayText = '0';
		this.prevTotal = null;
		this.outputText(this.displayText);
	},
};
