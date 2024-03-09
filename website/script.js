document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('focus', function () {
        this.size=5;
    });
    dropdown.addEventListener('blur',function () {
        this.size=1;
    });
});