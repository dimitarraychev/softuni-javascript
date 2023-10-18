
window.addEventListener("load", solve);

function solve() {

  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const age = document.querySelector('#age');
  const gender = document.querySelector('#genderSelect');
  const dishDesc = document.querySelector('#task');
  const submitBtn = document.querySelector('#form-btn');
  const inProgress = document.querySelector('#in-progress');
  const finished = document.querySelector('#finished');
  const clearBtn = document.querySelector('#clear-btn');
  const progressCounter = document.querySelector('#progress-count');

  submitBtn.addEventListener('click', submitForm);

  function submitForm(e) {
    e.preventDefault();

    isFirstNameValid = firstName.value.trim() !== '';
    isLastNameValid = lastName.value.trim() !== '';
    isAgeValid = age.value.trim() !== '';
    isDescValid = dishDesc.value.trim() !== '';

    if (!isFirstNameValid || !isLastNameValid || !isAgeValid || !isDescValid) return;

    let newLi = document.createElement('li');
    newLi.classList.add('each-line');
    let newArt = document.createElement('article');
    let newH4 = document.createElement('h4');
    newH4.textContent = `${firstName.value} ${lastName.value}`;
    let newPar = document.createElement('p');
    newPar.textContent = `${gender.value}, ${age.value}`;
    let newPar2 = document.createElement('p');
    newPar2.textContent = `Dish description: ${dishDesc.value}`;

    let newEditBtn = document.createElement('button');
    newEditBtn.textContent = 'Edit';
    newEditBtn.classList.add('edit-btn');
    newEditBtn.addEventListener('click', edit);

    let newCompleteBtn = document.createElement('button');
    newCompleteBtn.textContent = 'Mark as complete';
    newCompleteBtn.classList.add('complete-btn');
    newCompleteBtn.addEventListener('click', complete);

    newArt.appendChild(newH4);
    newArt.appendChild(newPar);
    newArt.appendChild(newPar2);

    newLi.appendChild(newArt);
    newLi.appendChild(newEditBtn);
    newLi.appendChild(newCompleteBtn);

    inProgress.appendChild(newLi);

    progressCounter.textContent = Number(progressCounter.textContent) + 1;

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    dishDesc.value = '';
  }

  function edit(e) {
    e.preventDefault();

    const currTarget = e.target.parentNode;

    firstName.value = currTarget.querySelector('h4').textContent.split(' ')[0];
    lastName.value = currTarget.querySelector('h4').textContent.split(' ')[1];
    gender.value = currTarget.querySelector('p').textContent.split(', ')[0];
    age.value = currTarget.querySelector('p').textContent.split(', ')[1];
    dishDesc.value = currTarget.querySelectorAll('p')[1].textContent.replace('Dish description: ', '');

    currTarget.remove();

    progressCounter.textContent = Number(progressCounter.textContent) - 1;
  }

  function complete(e) {
    e.preventDefault();

    const currTarget = e.target.parentNode;

    currTarget.removeChild(currTarget.querySelector('.edit-btn'));
    currTarget.removeChild(currTarget.querySelector('.complete-btn'));
    finished.appendChild(currTarget);

    progressCounter.textContent = Number(progressCounter.textContent) - 1;

    clearBtn.addEventListener('click', clear);
  }

  function clear(e) {
    e.preventDefault();
    finished.innerHTML = '';
  }
}