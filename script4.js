

$(".abt").hover(
  function(){
      $(".activatedbar").toggleClass("aboutactivate");
  }
);

$(".abt").click(
  function(){
      window.location.href='summary.html';
  }
);

$(".mtr").hover(
  function(){
      $(".activatedbar").toggleClass("meteractivate");
  }
);

$(".mtr").click(
  function(){
      window.location.href='index.html';
  }
);

$(".calc").hover(
  function(){
      $(".activatedbar").toggleClass("calcactivate");
  }
);

$(".calc").click(
  function(){
      window.location.href='hexcode.html';
  }
);


$(".hex").hover(
  function(){
      $(".activatedbar").toggleClass("hexactivate");
  }
);

$(".hex").click(
  function(){
      window.location.href='colorpage.html';
  }
);

$(".per").hover(
  function(){
      $(".activatedbar").toggleClass("peractivate");
  }
);

$(".per").click(
  function(){
      window.location.href='custom.html';
  }
);

$(".art").hover(
  function(){
      $(".activatedbar").toggleClass("artactivate");
  }
);

$(".art").click(
  function(){
      window.location.href='gallery.html';
  }
);

const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];

// Display saved entries
function displayEntries() {
  const entriesContainer = document.getElementById('entries');
  entriesContainer.innerHTML = '';

  savedEntries.forEach(entry => {
    const entryDiv = document.createElement('div');
    entryDiv.textContent = entry;
    entriesContainer.appendChild(entryDiv);
  });
}

// Save a new entry
function saveEntry() {
  const entryInput = document.getElementById('entry-input');
  const entryText = entryInput.value.trim();

  if (entryText !== '') {
    savedEntries.push(entryText);
    localStorage.setItem('entries', JSON.stringify(savedEntries));
    entryInput.value = '';
    displayEntries();
  }
}

// Display of entries
displayEntries();

// Delete an entry
function deleteEntry(index) {
  savedEntries.splice(index, 1);
  localStorage.setItem('entries', JSON.stringify(savedEntries));
  displayEntries();
}

function displayEntries() {
  const entriesContainer = document.getElementById('entries');
  entriesContainer.innerHTML = '';

  savedEntries.forEach((entry, index) => {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');

    /* this adds a background color to our entry if the input 
    was a hex color code */
    entryDiv.setAttribute("style", "background:" + entry + ";");

    entryDiv.textContent = entry;

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', () => deleteEntry(index));

    entryDiv.appendChild(deleteButton);
    entriesContainer.appendChild(entryDiv);
  });
}

function saveEntry() {
  const entryInput = document.getElementById('entry-input');
  const entryText = entryInput.value.trim();

  if (entryText !== '') {
    /* consts for including date in the output */
    const currentDate = new Date();
    const entryWithTimestamp = `${currentDate.toLocaleString()}: ${entryText}`;

    const entryWithoutTimestamp = `${entryText}`;

    savedEntries.push(entryWithoutTimestamp);
    localStorage.setItem('entries', JSON.stringify(savedEntries));
    entryInput.value = '';
    displayEntries();
  }
}


