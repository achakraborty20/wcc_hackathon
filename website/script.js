document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('focus', function () {
        this.size=4;
    });
    dropdown.addEventListener('blur',function () {
        this.size=1;
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var dropdown2 = document.getElementById('dropdown2');
    dropdown2.addEventListener('focus', function () {
        this.size=5;
    });
    dropdown2.addEventListener('blur',function () {
        this.size=1;
    });
});