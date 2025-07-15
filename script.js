let fragments = [];

// Fetch the fragments from the JSON file
fetch('fragments.json')
  .then(response => response.json())
  .then(data => {
    fragments = data.fragments;
  })
  .catch(error => console.error('Could not load fragments:', error));

function spinWheel() {
  if (fragments.length === 0) {
    document.getElementById("result").innerText = "Fragments are still loading...";
    return;
  }
  const randomIndex = Math.floor(Math.random() * fragments.length);
  const fragment = fragments[randomIndex];
  document.getElementById("result").innerText = fragment;
}
