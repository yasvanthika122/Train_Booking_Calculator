function gradeCalc(grade, unit) {
    switch (grade) {
        case 'First AC (1AC)':
            return 1900 * unit;
        case 'Second AC (2A)':
            return 1150 * unit;
        case 'First Class (FC)':
            return 950 * unit;
        case 'Third AC (3A)':
            return 815 * unit;
        case 'Sleeper':
            return 315 * unit;
        default:
            return 0;
    }
}

function addCourse() {
    const form = document.querySelector('.ticket-form').cloneNode(true);
    document.getElementById('course-wrapper').appendChild(form);
}

function removeCourse() {
    const forms = document.querySelectorAll('.ticket-form');
    if (forms.length > 1) {
        forms[forms.length - 1].remove();
    }
}

function calcTotal() {
    const classes = document.querySelectorAll('#class');
    const counts = document.querySelectorAll('#count');

    let totalPrice = 0;
    classes.forEach((select, index) => {
        const grade = select.options[select.selectedIndex].text;
        const unit = parseInt(counts[index].value) || 0;
        totalPrice += gradeCalc(grade, unit);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
