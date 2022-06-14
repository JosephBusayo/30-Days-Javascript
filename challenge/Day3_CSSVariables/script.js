const inputs = document.querySelectorAll('.controls input'); //selecting the specific (sub)class

function handleUpdate(){
    const suffix  = this.dataset.sizing || ''; //gets data-sizng in the html or empty for the base color
   //changes the value in the variable of the css
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));