 let fio = document.getElementById('fio');
 let skills = document.getElementById('skills');
 let hobby = document.getElementById('hobby');
 let photo = document.getElementById('photo');
 let text = document.getElementById('text');

 let myPhoto = document.getElementById('myPhoto');

 let skillsTxt = 'Язык программирования C# и web-разработка (HTML, CSS, JS)';

 myPhoto.style.display = "none";

fio.onmouseover = function(e){ 
    text.textContent = 'Павел Бирюков';
}

skills.onmouseover = function(e){ 
    text.textContent = 'Язык программирования C# и web-разработка (HTML, CSS, JS)';
}

hobby.onmouseover = function(e){ 
    text.textContent = 'Нигде не тусуюсь, ничем не интересуюсь';
}

photo.onmouseover = function(e){ 
    text.textContent = 'Мое фото';
    myPhoto.src = 'myy.jpg';
    myPhoto.style.display = "block";
    
}

photo.onmouseout = function(e){ 
    myPhoto.src = '';
}

