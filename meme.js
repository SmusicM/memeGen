const form= document.querySelector("#memeinputform");
const topinput = document.querySelector("#Topmemetxt");
const bottomInput = document.querySelector("#bottommemetxt");
const memeImg = document.querySelector("#addImagememe");
const memebox = document.querySelector("#meme-container");

form.addEventListener('submit', function(e){
    e.preventDefault();
const toptxt = topinput.value;
const bottomtxt = bottomInput.value;
const urlImage = memeImg.value;

generateMeme(toptxt , bottomtxt , urlImage);

topinput.value = "";
bottomInput.value = "";
memeImg.value = "";
});


function generateMeme(toptxt , bottomtxt , urlImage){
    const newmeme = document.createElement('div');
    newmeme.classList.add('meme');

    const newimg = document.createElement('img');
     newimg.src = urlImage;
     newimg.classList.add('meme-img');

    const memetxt = document.createElement('div');

    const newtoptxt = document.createElement('p');
     newtoptxt.innerText = toptxt;
     newtoptxt.classList.add('topmemetxt');

    const newbottomtxt = document.createElement('p');
     newbottomtxt.innerText = bottomtxt;
     newbottomtxt.classList.add('bottommemetxt');

     const removeBtn = document.createElement('button');
     removeBtn.innerText = "remove";
     removeBtn.classList.add('rembutton');
     removeBtn.addEventListener('click' , function(){
        newmeme.remove();
     });

     newmeme.appendChild(newimg);
     memetxt.appendChild(newtoptxt);
     memetxt.appendChild(newbottomtxt);
     memebox.appendChild(newmeme);
     memetxt.appendChild(removeBtn);    //still have to add event listener for this
     newmeme.appendChild(memetxt);
};

memebox.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})








 
