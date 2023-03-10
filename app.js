function loaded() {
    $('#circle').width("500px");
    $('#circle').height("500px");
    $('#circle').css("font-size", "2rem");
    $('#circletext').css("opacity", "1");
    $('#buttons').css("opacity", "1");
   


}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            // Add the animate class to the element
            entry.target.classList.add('equip');
        } else {
            // Remove the animate class from the element
            entry.target.classList.remove('equip');
        }
    });
});

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            // Add the animate class to the element
            entry.target.classList.add('equip2');
        } else {
            // Remove the animate class from the element
            entry.target.classList.remove('equip2');
        }
    });
});

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            // Add the animate class to the element
            entry.target.classList.add('equip3');
        } else {
            // Remove the animate class from the element
            entry.target.classList.remove('equip3');
        }
    });
});

const spawned = document.querySelectorAll('.spawn');
const contxt = document.querySelectorAll('.spawn2');
const spawnz = document.querySelectorAll('.text > *');
spawned.forEach((el) => observer.observe(el));
contxt.forEach((el) => observer2.observe(el));
spawnz.forEach((el) => observer3.observe(el));