window.addEventListener("load", solve);

function solve() {

  const firstNameRef = document.querySelector('#first-name');
  const lastNameRef = document.querySelector('#last-name');
  const ageRef = document.querySelector('#age');
  const titleRef = document.querySelector('#story-title');
  const genreRef = document.querySelector('#genre');
  const storyRef = document.querySelector('#story');
  const publishBtn = document.querySelector('#form-btn');
  const previewRef = document.querySelector('#preview-list');
  const mainRef = document.querySelector('#main');

  publishBtn.addEventListener('click', validateInput);

  function validateInput(e) {
    e.preventDefault();

    isFirstNameValid = firstNameRef.value.trim() !== '';
    isLastNameValid = lastNameRef.value.trim() !== '';
    isAgeValid = ageRef.value.trim() !== '';
    isTitleValid = titleRef.value.trim() !== '';
    isStoryValid = storyRef.value.trim() !== '';

    if (!isFirstNameValid || !isLastNameValid || !isAgeValid || !isTitleValid || !isStoryValid) return;

    return publishStory();
  }

  function publishStory() {

    const newLi = document.createElement('li');
    newLi.classList.add('story-info');

    const newArt = document.createElement('article');

    const newH4 = document.createElement('h4');
    newH4.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`;
    newArt.appendChild(newH4);

    const newPar1 = document.createElement('p');
    newPar1.textContent = `Age: ${ageRef.value}`;
    newArt.appendChild(newPar1);

    const newPar2 = document.createElement('p');
    newPar2.textContent = `Title: ${titleRef.value}`;
    newArt.appendChild(newPar2);

    const newPar3 = document.createElement('p');
    newPar3.textContent = `Genre: ${genreRef.value}`;
    newArt.appendChild(newPar3);

    const newPar4 = document.createElement('p');
    newPar4.textContent = `${storyRef.value}`;
    newArt.appendChild(newPar4);

    newLi.appendChild(newArt);

    const newSaveBtn = document.createElement('button');
    newSaveBtn.classList.add('save-btn');
    newSaveBtn.textContent = 'Save Story';
    newSaveBtn.addEventListener('click', saveStory);
    newLi.appendChild(newSaveBtn);

    const newEditBtn = document.createElement('button');
    newEditBtn.classList.add('edit-btn');
    newEditBtn.textContent = 'Edit Story';
    newEditBtn.addEventListener('click', editStory);
    newLi.appendChild(newEditBtn);

    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.classList.add('delete-btn');
    newDeleteBtn.textContent = 'Delete Story';
    newDeleteBtn.addEventListener('click', deleteStory);
    newLi.appendChild(newDeleteBtn);

    previewRef.appendChild(newLi);

    firstNameRef.value = '';
    lastNameRef.value = '';
    ageRef.value = '';
    titleRef.value = '';
    storyRef.value = '';

    publishBtn.disabled = true;
  }

  function saveStory(e) {
    const newH1 = document.createElement('h1');
    newH1.textContent = 'Your scary story is saved!';

    mainRef.innerHTML = '';
    mainRef.appendChild(newH1);
  }

  function editStory(e) {
    const currTarget = e.target.parentNode;

    let firstAndLastName = currTarget.querySelector('h4').textContent.split(' ');
    firstNameRef.value = firstAndLastName[1];
    lastNameRef.value = firstAndLastName[2];
    ageRef.value = currTarget.querySelector('p').textContent.split(' ')[1];
    titleRef.value = currTarget.querySelectorAll('p')[1].textContent.replace('Title: ', '');
    storyRef.value = currTarget.querySelectorAll('p')[3].textContent;

    currTarget.remove();
    publishBtn.disabled = false;
  }

  function deleteStory(e) {
    e.target.parentNode.remove();
    publishBtn.disabled = false;
  }
}