var products = [{name:"mizokami",price: 349+",99 $", img:"mizokami.jpg", like: false}, 
                {name:"ruger",price: 699+",99 $", img:"ruger.jpg", like: false},
                {name:"smith",price: 829+",99 $", img:"smith.jpg", like: false}];

for (var i=0; i<products.length; i++){
    document.getElementById("zone").insertAdjacentHTML('afterbegin','<div id = "produit'+i+'">'+'</div>');
    document.getElementById("produit"+i).innerHTML ='<header>'+products[i].name+' <b>'+products[i].price+'</b>'+'</header>'+'<img class="guns" src="'+products[i].img+'">'+'<br>'+
    '<button id="gimmeGold'+i+'" onclick ="play1()";>'+'SHOOT TO BUY !'+'</button>'+'<img id="heart'+i+'" src="heartD.png"'+'height="22px"'+'width="22px">';
    document.getElementById("heart"+i).addEventListener('click', aime.bind(i)); document.getElementById("gimmeGold"+i).addEventListener('click', buy.bind(i));
};



function buy(){
    console.log("BOOM ! You PAID !");
    document.getElementById("panier").insertAdjacentHTML('afterbegin', '<p>'+products[this].name+'</p>');
}

function aime(){
    if(products[this].like === false){products[this].like = true; document.getElementById("heart"+this).src="heartL.png"; play2()}
    else if(products[this].like === true){products[this].like = false; document.getElementById("heart"+this).src="heartD.png"; play3()}
}

function play1(){
    var audio = document.getElementById("audio1");
    audio.play();
}

function play2(){
    var audio1 = document.getElementById("audio2");
    audio1.play();
}

function play3(){
    var audio1 = document.getElementById("audio3");
    audio1.play();
}