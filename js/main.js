document.querySelector('button').addEventListener('click', function () {
    
    let inName = document.getElementById('input-name').value;
    document.getElementById('name').innerText = document.getElementById('input-name').value;
    
    let inSurname = document.getElementById('input-surname').value
    document.getElementById('surname').innerText = document.getElementById('input-surname').value;
    
    let inTel = document.getElementById('input-tel').value;
    document.getElementById('phone').innerText = document.getElementById('input-tel').value;

});
