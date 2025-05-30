const searchBox = document.getElementById('searchBox');
const resultsList = document.getElementById('results');
let debounceTimeout = null;

function handleSearch(query) {
  // Simulate search results (replace with real API calls)
  const fakeResults = [
    `Result for "${query}" #1`,
    `Result for "${query}" #2`,
    `Result for "${query}" #3`
  ];

  // Clear previous results
  resultsList.innerHTML = '';

  // Display new results
  fakeResults.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    resultsList.appendChild(li);
  });
}

searchBox.addEventListener('input', (e) => {
  const value = e.target.value;

  // Clear previous timer
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  // Set new debounce timer
  debounceTimeout = setTimeout(() => {
    if (value.trim() !== '') {
      handleSearch(value.trim());
    } else {
      resultsList.innerHTML = ''; // Clear results if input empty
    }
  }, 500); // 500ms debounce delay
});
