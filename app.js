let el=document.querySelectorAll(".element");
let wordsformed=document.querySelector(".wordsformed");
let li=document.querySelectorAll(".wordsformed li");
let card=document.querySelectorAll(".card-body li");
let body=document.querySelector("body");
let congo=document.querySelector(".congo");
let an=document.querySelector(".congo a");
let p=document.querySelector(".timer h3");
let x=['Q', 'R', 'T', 'K', 'B', 'F', 'N', 'E', 'I', 'D', 'S', 'A', 'H', 'I', 'O', 'X', 'P', 'L', 'C', 'I', 'G', 'V', 'B', 'N', 'M', 'E', 'Y', 'U', 'R', 'T', 'R', 'A', 'E', 'E', 'F', 'W', 'E', 'D', 'S', 'A', 'C', 'J', 'G', 'U', 'A','B','E','A','U','D','E','A','T','K']

function generate(){
    let gen=Math.floor(Math.random()*4)+1;
    return gen;
}
let g=generate();
for(let i=0;i<el.length;i++){
    el[i].innerText=`${x[i]}`;
    if(g==1){
            card[0].innerText="Fastest Sorting Algorithm";
            card[1].innerText="A Type Of Non Linear Data Structure ";
            card[2].innerText="Data Structure That Follow LIFO";
    }
    else if(g==2){
            card[0].innerText="Name of DataType To Store Number Having Decimal";
            card[1].innerText="Name Of Method To Add Element To Stack ";
            card[2].innerText="Searching Algorithm Having TC O(log n)";
        }
    else if(g==3){
        card[0].innerText="Type Of Tree Having Max Two Child";
        card[1].innerText="Consists Of Nodes Where Each Node Contains Data And A Reference ";
        card[2].innerText="Algorithm To Get The Shorted Point Between Two Points";
    }
    else {
        card[0].innerText="Linear Data Structure Where All Elements Are Arranged Sequentially";
        card[1].innerText="Sorting Algorithm Repeatedly Swapping The Adjacent Element ";
        card[2].innerText="Data Structure That Stores Data in FIFO";
    }
}
function clear(){
    wrongflashbtn(body);
    for(let i=0;i<el.length;i++){
        el[i].classList.remove("off");
        el[i].style.pointerEvents="fill";
    }
    p.innerText="POINTS-0";
    li[0].innerText="";
    li[1].innerText="";
    li[2].innerText="";
    word1="";
}
let ind=0;
let point=0;
let word1="";
if(g==1){
    for(let i=0;i<el.length;i++){
        el[i].addEventListener("click",()=>{
            word1+=el[i].innerText;
            el[i].classList.add("off");
            el[i].style.pointerEvents="none";
            console.log(word1);
            li[ind].innerText=word1.toUpperCase();
            if(ind==0 && word1.length>5){
                console.log("wrong guess");
                clear();
            }
            if(ind==1 && word1.length>4){
                console.log("wrong guess");
                clear();
            }
            if(ind==2 && word1.length>5){
                console.log("wrong guess");
                clear();
            }
            if(ind==0 && li[0].innerText=="MERGE"){
                li[0].innerText="MERGE";
                card[0].setAttribute("style","color:green;");
                point++;
                p.innerText="POINTS-10";
                console.log(point);
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==1 && li[1].innerText=="TREE"){
                li[1].innerText="TREE";
                point++;
                p.innerText="POINTS-20";
                console.log(point);
                word1="";
                flashbtn(body);
                ind++;
            }
            if(ind==2 && li[2].innerText=="STACK"){
                li[2].innerText="STACK";
                point++;
                p.innerText="POINTS-30";
                console.log(point);
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==3){
                won();
                console.log("you won!!");
            }
        })
    }
}
// 1. Name of DataType To Store Number Having Decimal<br> ANS FLOAT
                // 2. Name Of Method To Add Element To Stack <BR> ANS PUSH
                // 3. Searching Algorithm Having TC O(log n)  ANS BINARY
else if(g==2){
    for(let i=0;i<el.length;i++){
        el[i].addEventListener("click",()=>{
            word1+=el[i].innerText;
            el[i].classList.add("off");
            el[i].style.pointerEvents="none";
            console.log(word1);
            li[ind].innerText=word1.toUpperCase();
            if(ind==0 && word1.length>5){
                console.log("wrong guess");
                clear();
            }
            if(ind==1 && word1.length>4){
                console.log("wrong guess");
                clear();
            }
            if(ind==2 && word1.length>6){
                console.log("wrong guess");
                clear();
            }
            if(ind==0 && li[0].innerText=="FLOAT"){
                li[0].innerText="FLOAT"
                point++;
                p.innerText="POINTS-10";
                console.log(point);
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==1 && li[1].innerText=="PUSH"){
                li[1].innerText="PUSH";
                point++;
                p.innerText="POINTS-20";
                console.log(point);
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==2 && li[2].innerText=="BINARY"){
                li[2].innerText="BINARY";
                point++;
                console.log(point);
                p.innerText="POINTS-30";
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==3){
                won();
                console.log("you won!!");
            }
        })
    }
}
//                 1. TYPE OF TREE HAVING MAX TWO CHILD<br> BINARY
//                 2. Type Of List Having Nodes Where Each Node Contains Data And A Reference <BR> LINKED
//                 3. Algorithm To Get The Shorted Point Between Two Points  Dijkstra

else if(g==3){
    for(let i=0;i<el.length;i++){
        el[i].addEventListener("click",()=>{
            word1+=el[i].innerText;
            el[i].classList.add("off");
            el[i].style.pointerEvents="none";
            console.log(word1);
            li[ind].innerText=word1.toUpperCase();
            if(ind==0 && word1.length>6){
                console.log("wrong guess");
                clear();
                word1="";
            }
            if(ind==1 && word1.length>6){
                console.log("wrong guess");
                clear();
                word1="";
            }
            if(ind==2 && word1.length>8){
                console.log("wrong guess");
                clear();
                word1="";
            }
            if(ind==0 && li[0].innerText=="BINARY"){
                li[0].innerText="BINARY"
                point++;
                p.innerText="POINTS-10";
                console.log(point);
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==1 && li[1].innerText=="LINKED"){
                li[1].innerText="LINKED";
                point++;
                p.innerText="POINTS-20";
                console.log(point);
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==2 && li[2].innerText=="DIJKSTRA"){
                li[2].innerText="DIJKSTRA";
                point++;
                p.innerText="POINTS-30";
                console.log(point);
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==3){
                console.log("you won!!");
                won();
            }
        })
    }
}

//                 1. Linear Data Structure Where All Elements Are Arranged Sequentially<br> ARRAY
//                 2. Sorting Algorithm Repeatedly Swapping The Adjacent Element<BR> BUBBLE
//                 3. Data Structure That Stores Data in FIFO QUEUE

else{
    for(let i=0;i<el.length;i++){
        el[i].addEventListener("click",()=>{
            word1+=el[i].innerText;
            el[i].classList.add("off");
            el[i].style.pointerEvents="none";
            console.log(word1);
            li[ind].innerText=word1.toUpperCase();
            if(ind==0 && word1.length>5){
                console.log("wrong guess");
                clear();
            }
            if(ind==1 && word1.length>6){
                console.log("wrong guess");
                clear();
            }
            if(ind==2 && word1.length>5){
                console.log("wrong guess");
                clear();
                
            }
            if(ind==0 && li[0].innerText=="ARRAY"){
                li[0].innerText="ARRAY";
                p.innerText="POINTS-10";
                point++;
                flashbtn(body);
                console.log(point);
                word1="";
                ind++;
            }
            if(ind==1 && li[1].innerText=="BUBBLE"){
                li[1].innerText="BUBBLE";
                p.innerText="POINTS-20";
                point++;
                console.log(point);
                flashbtn(body);
                word1="";
                ind++;
            }
            if(ind==2 && li[2].innerText=="QUEUE"){
                li[2].innerText="QUEUE";
                point++;
                p.innerText="POINTS-30";
                flashbtn(body);
                console.log(point);
                word1="";
                ind++;
            }
            if(ind==3){
                console.log("you won!!");
                won();
            }
        })
    }
}

function won(){
    if(g==1){
        an.setAttribute("href","code1.html");
    }
    else if(g==2){
        an.setAttribute("href","code2.html");
    }
    else if(g==3){
        an.setAttribute("href","code3.html");
    }
    else{
        an.setAttribute("href","code4.html");
    }
    congo.classList.remove("hide");
    flashbtn(body);
}
function flashbtn(c){
    c.classList.add("flash");
    setTimeout(function(){
        c.classList.remove("flash");
    },300);
}
function wrongflashbtn(c){
    c.classList.add("wrong");
    setTimeout(function(){
        c.classList.remove("wrong");
    },300);
}
                // 1. Fastest Sorting Algorithm<br>
                // 2. A Type Of Non Linear Data Structure <BR>
                // 3. Data Structure That Follow LIFO


                // 1. Name of DataType To Store Number Having Decimal<br>
                // 2. Name Of Method To Add Element To Stack <BR>
                // 3. Searching Algorithm Having TC O(log n)

//                 1. TYPE OF TREE HAVING MAX TWO CHILD<br>
//                 2. Consists Of Nodes Where Each Node Contains Data And A Reference <BR>
//                 3. Algorithm To Get The Sorted Point Between Two Points

//                 1. Linear Data Structure Where All Elements Are Arranged Sequentially<br>
//                 2. Sorting Algorithm Repeatedly Swapping The Adjacent Element<BR>
//                 3. Data Structure That Stores Data in FIFO
