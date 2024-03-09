// fetch('/get_data', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         occupation: selectedOccupation,
//         gender: selectedGender,
//         race: selectedRace
//     })
// })
// .then(response => response.json())
// .then(data => {
//     // Update your HTML to display the data returned from Flask
//     document.getElementById('results').innerHTML = `
//         <p>Salary: ${data.salary}</p>
//         <p>Percentage: ${data.percentage}</p>
//     `;
// })
// .catch(error => {
//     console.error('Error:', error);
// });


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchDataButton').addEventListener('click', function() {
        fetch('/get_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                occupation: selectedOccupation,
                gender: selectedGender,
                race: selectedRace
                
                // Add any data you want to send to the Python function here
            })
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('results').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
