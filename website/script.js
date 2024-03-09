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


function handleRaceSelection() {
    var selectedRace = document.getElementById("dropdown").value;
    
    var jsonData = JSON.stringify({"race": selectedRace});
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "dataPreprocessing", true);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(jsonData);
}