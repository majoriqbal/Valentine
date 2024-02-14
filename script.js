const answerButton = document.getElementById('answer');
let sure = false;

answerButton.addEventListener('click', () => {
  if (!sure) {
    if (confirm('Are you sure?')) {
      sure = true;
      answerButton.innerText = 'Yes';
    }
  } else {
    window.location.href = 'valentine.html';
  }
});