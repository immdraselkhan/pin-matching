document.getElementById('pin-generate').addEventListener('click', function(){
    document.getElementById('pin-generate').previousElementSibling.value = Math.round((Math.random()*1000)+1000);
});

document.getElementById('enter-pin').addEventListener('click', function(event){
    if (isNaN(event.target.innerText)) {
        if (event.target.innerText == 'C') {
            document.getElementById('typed-pin').value = '';
        }
        else if (event.target.innerText == '<') {
            const splitNow = document.getElementById('typed-pin').value.split('');
            splitNow.pop();
            document.getElementById('typed-pin').value = splitNow.join('');
        }
    }
    else {
        document.getElementById('typed-pin').value = document.getElementById('typed-pin').value + event.target.innerText;
    }
});

document.getElementById('pin-submit').addEventListener('click', function(){
    if (document.getElementById('pin-generate').previousElementSibling.value == document.getElementById('typed-pin').value) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('pin-generate').previousElementSibling.value = '';
        document.getElementById('typed-pin').value = '';
    }
    else {
        document.getElementById('success').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('pin-generate').previousElementSibling.value = '';
        document.getElementById('typed-pin').value = '';
    }
})