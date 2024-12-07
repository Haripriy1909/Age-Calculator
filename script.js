const calbtn = document.getElementById("cal-btn");
calbtn.addEventListener("click", function () {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");
    if (dob === '') {
        result.textContent = "Plese Enter your Birth!";
        return;
    }
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDay() - dobDate.getDay();


    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    result.textContent = `you are ${age} years old.`;

});