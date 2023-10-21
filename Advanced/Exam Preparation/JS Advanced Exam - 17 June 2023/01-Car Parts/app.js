window.addEventListener('load', solve);

function solve() {

	const carModelRef = document.querySelector('#car-model');
	const carYearRef = document.querySelector('#car-year');
	const partNameRef = document.querySelector('#part-name');
	const partNumberRef = document.querySelector('#part-number');
	const conditionRef = document.querySelector('#condition');
	const nextBtn = document.querySelector('#next-btn');
	const partInfoListRef = document.querySelector('.info-list');
	const confirmOrderRef = document.querySelector('.confirm-list');
	const completeImgRef = document.querySelector('#complete-img');
	const completeTextRef = document.querySelector('#complete-text');

	nextBtn.addEventListener('click', validateInput);

	function validateInput(event) {
		event.preventDefault();

		isModelValid = carModelRef.value.trim() !== '';
		isYearValid = carYearRef.value.trim() !== '' && carYearRef.value > 1980 && carYearRef.value < 2023;
		isNameValid = partNameRef.value.trim() !== '';
		isNumberValid = partNumberRef.value.trim() !== '';
		isConditionValid = conditionRef.value.trim() !== '';

		if (!isModelValid ||
			!isYearValid ||
			!isNameValid ||
			!isNumberValid ||
			!isConditionValid) return;

		createPartInfoElement();
	}

	function createPartInfoElement() {
		completeImgRef.style.visibility = 'hidden';
		completeTextRef.textContent = '';

		const newLi = document.createElement('li');
		newLi.classList.add('part-content');
		const newArt = document.createElement('article');

		const newPar1 = document.createElement('p');
		newPar1.textContent = `Car Model: ${carModelRef.value}`;
		newArt.appendChild(newPar1);

		const newPar2 = document.createElement('p');
		newPar2.textContent = `Car Year: ${carYearRef.value}`;
		newArt.appendChild(newPar2);

		const newPar3 = document.createElement('p');
		newPar3.textContent = `Part Name: ${partNameRef.value}`;
		newArt.appendChild(newPar3);

		const newPar4 = document.createElement('p');
		newPar4.textContent = `Part Number: ${partNumberRef.value}`;
		newArt.appendChild(newPar4);

		const newPar5 = document.createElement('p');
		newPar5.textContent = `Condition: ${conditionRef.value}`;
		newArt.appendChild(newPar5);

		const newEditBtn = buttonCreator('edit-btn', 'Edit', editPartInfo);
		const newContinueBtn = buttonCreator('continue-btn', 'Continue', continueToConfirmOrder);

		newLi.appendChild(newArt);
		newLi.appendChild(newEditBtn);
		newLi.appendChild(newContinueBtn);

		partInfoListRef.appendChild(newLi);

		clearInput();
	}

	function buttonCreator(classToAdd, textToAdd, funcToAdd) {

		const newBtn = document.createElement('button');
		newBtn.classList.add(classToAdd);
		newBtn.textContent = textToAdd;
		newBtn.addEventListener('click', funcToAdd);

		return newBtn;
	}

	function clearInput() {
		carModelRef.value = '';
		carYearRef.value = '';
		partNameRef.value = '';
		partNumberRef.value = '';
		conditionRef.value = '';

		nextBtn.disabled = true;
	}

	function editPartInfo(event) {
		const currentTarget = event.target.parentNode;
		const [currModel, currYear, currName, currNum, currCond] = currentTarget.querySelectorAll('p');

		carModelRef.value = currModel.textContent.replace('Car Model: ', '');
		carYearRef.value = currYear.textContent.replace('Car Year: ', '');
		partNameRef.value = currName.textContent.replace('Part Name: ', '');
		partNumberRef.value = currNum.textContent.replace('Part Number: ', '');

		const selectedCond = currCond.textContent.replace('Condition: ', '');
		conditionRef.selectedIndex = selectedCond === 'New' ? 1 : 2;

		nextBtn.disabled = false;
		currentTarget.remove();
	}

	function continueToConfirmOrder(event) {
		const currentTarget = event.target.parentNode;

		currentTarget.removeChild(currentTarget.querySelector('button'));
		currentTarget.removeChild(currentTarget.querySelector('button'));

		const newConfirmBtn = buttonCreator('confirm-btn', 'Confirm', confirmOrder);
		currentTarget.appendChild(newConfirmBtn);

		const newCancelBtn = buttonCreator('cancel-btn', 'Cancel', cancelOrder);
		currentTarget.appendChild(newCancelBtn);

		confirmOrderRef.appendChild(currentTarget);
	}

	function confirmOrder(event) {
		const currentTarget = event.target.parentNode;

		currentTarget.remove();
		nextBtn.disabled = false;

		completeImgRef.style.visibility = 'visible';
		completeTextRef.textContent = 'Part is Ordered!';
	}

	function cancelOrder(event) {
		const currentTarget = event.target.parentNode;

		currentTarget.remove();
		nextBtn.disabled = false;
	}
};