document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Collect food choices
    let foodChoices = [];
    document.querySelectorAll('input[name="food"]:checked').forEach((checkbox) => {
        foodChoices.push(checkbox.value);
    });

    // Ensure at least two food choices are selected
    if (foodChoices.length < 2) {
        alert('Please select at least two food choices.');
        return;
    }
    
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Append data to the table
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = firstName;
    newRow.insertCell(1).textContent = lastName;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(3).textContent = address;
    newRow.insertCell(4).textContent = pincode;
    newRow.insertCell(5).textContent = gender;
    newRow.insertCell(6).textContent = foodChoices.join(', ');
    newRow.insertCell(7).textContent = state;
    newRow.insertCell(8).textContent = country;

    // Clear the form
    document.getElementById('form').reset();
});



