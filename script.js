var random = Math.floor(Math.random()*11+1)

document.getElementById('posts').innerHTML = random

document.getElementById('followers').innerHTML = Math.floor(Math.random()*10000);
document.getElementById('following').innerHTML = Math.floor(Math.random()*100);

fetch('https://randomuser.me/api/').then(response =>{
    response.json().then(data =>{
        let user = data.results[0];
        document.getElementById('name').innerHTML= user.name.first
        document.getElementById('fulname').innerHTML= user.name.first+''+user.name.last
        document.getElementById('profilepic').src = user.picture.medium

        for(i=0;i<random;i++)
        {
        let img = document.createElement('img')
        img.src = "https://picsum.photos/91" + i
        document.getElementById('footer').append(img)
        }
    })
})
