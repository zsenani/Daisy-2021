let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('othTheme');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}
function setTheme(theme) {
  if (theme == 'orngTheme') {
    document.getElementById('switcher-id').href = "theme/orngTheme.css";
  } else if (theme == 'othTheme') {
    document.getElementById('switcher-id').href = 'theme/othTheme.css';
    }
    localStorage.setItem('style', theme);
}