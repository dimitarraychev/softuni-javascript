window.addEventListener('load', solution);

function solution() {

	const employeeRef = document.querySelector('#employee');
	const categoryRef = document.querySelector('#category');
	const urgencyRef = document.querySelector('#urgency');
	const teamRef = document.querySelector('#team');
	const descriptionRef = document.querySelector('#description');
	const addBtn = document.querySelector('#add-btn');
	const previewRef = document.querySelector('.preview-list');
	const pendingRef = document.querySelector('.pending-list');
	const resolvedRef = document.querySelector('.resolved-list');

	addBtn.addEventListener('click', validateInput);

	function validateInput(event) {
		event.preventDefault();

		isEmployeeValid = employeeRef.value.trim() !== '';
		isCategoryValid = categoryRef.value.trim() !== '';
		isUrgencyValid = urgencyRef.value.trim() !== '';
		isTeamValid = teamRef.value.trim() !== '';
		isDesriptionValid = descriptionRef.value.trim() !== '';

		if (!isEmployeeValid ||
			!isCategoryValid ||
			!isUrgencyValid ||
			!isTeamValid ||
			!isDesriptionValid) return;

		createPreview();
	}

	function createPreview() {

		const newLi = document.createElement('li');
		newLi.classList.add('problem-content');

		const newArt = document.createElement('article');

		const newP1 = document.createElement('p');
		newP1.textContent = `From: ${employeeRef.value}`;
		newArt.appendChild(newP1);

		const newP2 = document.createElement('p');
		newP2.textContent = `Category: ${categoryRef.value}`;
		newArt.appendChild(newP2);

		const newP3 = document.createElement('p');
		newP3.textContent = `Urgency: ${urgencyRef.value}`;
		newArt.appendChild(newP3);

		const newP4 = document.createElement('p');
		newP4.textContent = `Assigned to: ${teamRef.value}`;
		newArt.appendChild(newP4);

		const newP5 = document.createElement('p');
		newP5.textContent = `Description: ${descriptionRef.value}`;
		newArt.appendChild(newP5);

		newLi.appendChild(newArt);

		const editBtn = buttonCreator('edit-btn', 'Edit', editPreview);
		newLi.appendChild(editBtn);

		const continueBtn = buttonCreator('continue-btn', 'Continue', continueToPending);
		newLi.appendChild(continueBtn);

		previewRef.appendChild(newLi);

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

		employeeRef.value = '';
		categoryRef.selectedIndex = 0;
		urgencyRef.selectedIndex = 0;
		teamRef.selectedIndex = 0;
		descriptionRef.value = '';

		addBtn.disabled = true;
	}

	function editPreview(event) {
		const currTarget = event.target.parentNode;
		const [p1, p2, p3, p4, p5] = currTarget.querySelectorAll('p');

		employeeRef.value = p1.textContent.replace('From: ', '');

		const selectedCategory = p2.textContent.replace('Category: ', '');
		if (selectedCategory === 'Software') {
			categoryRef.selectedIndex = 1;
		} else if (selectedCategory === 'Hardware') {
			categoryRef.selectedIndex = 2;
		} else if (selectedCategory === 'Network') {
			categoryRef.selectedIndex = 3;
		}

		const selectedUrgency = p3.textContent.replace('Urgency: ', '');
		if (selectedUrgency === 'Low') {
			urgencyRef.selectedIndex = 1;
		} else if (selectedUrgency === 'Medium') {
			urgencyRef.selectedIndex = 2;
		} else if (selectedUrgency === 'High') {
			urgencyRef.selectedIndex = 3;
		}

		const selectedTeam = p4.textContent.replace('Assigned to: ', '');
		if (selectedTeam === 'Software Solutions Team') {
			teamRef.selectedIndex = 1;
		} else if (selectedTeam === 'Hardware Support Division') {
			teamRef.selectedIndex = 2;
		} else if (selectedTeam === 'Network Operations Center') {
			teamRef.selectedIndex = 3;
		}

		descriptionRef.value = p5.textContent.replace('Description: ', '');

		currTarget.remove();
		addBtn.disabled = false;
	}

	function continueToPending(event) {
		const currTarget = event.target.parentNode;
		const [editBtn, continueBtn] = currTarget.querySelectorAll('button');

		editBtn.remove();
		continueBtn.remove();

		const resolvedBtn = buttonCreator('resolve-btn', 'Resolved', addToResolved);
		currTarget.appendChild(resolvedBtn);

		pendingRef.appendChild(currTarget);
	}

	function addToResolved(event) {
		const currTarget = event.target.parentNode;
		const resolvedBtn = currTarget.querySelector('button');

		resolvedBtn.remove();

		const clearBtn = buttonCreator('clear-btn', 'Clear', clearInformation);
		currTarget.appendChild(clearBtn);

		resolvedRef.appendChild(currTarget);
	}

	function clearInformation(event) {
		const currTarget = event.target.parentNode;
		currTarget.remove();
	}
}