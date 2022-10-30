let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?",
"/"];

let numberchar =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let spechar =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?","/"];



var input = document.getElementById("toggleswitch");
var input2 = document.getElementById("toggleswitch2");




input.addEventListener("change",function(){
    if(this.checked) {
        console.log("on")
        characters=characters.concat(numberchar)
        console.log(characters)
    } else {
        console.log("off")

        for(let i=0; i<10; i++){
            let index = characters.indexOf(i.toString());
                if (index > -1) { // only splice array when item is found
                    characters.splice(index, 1); // 2nd parameter means remove one item only
                }    
        }
        console.log("withoutttttttttttt number")  
        console.log(characters)
    }
});

input2.addEventListener("change",function(){
    if(this.checked) {
        console.log("on")
        characters=characters.concat(spechar)
        console.log(characters)
    } else {
        console.log("off")

        for(let j=0; j<spechar.length; j++){
            characters.pop(spechar)
        }
        console.log("withoutttttttttttt spec")  
        console.log(characters)
    }
});






let span1=document.getElementById("span1")
let span2=document.getElementById("span2")
let spanlist=[span1,span2]



function randPassGen(){ 
    span1.textContent=""
    span2.textContent=""
    let pLength=document.getElementById("password-length")
    console.log(pLength.value)        
    let pList=[]
    if(pLength.value<=20){
        for(let j=0; j<2;j++){
            let count =""
            for(let i=0; i<pLength.value;i++){
                let r1 =characters[Math.floor(Math.random()*characters.length)] 
                count+=r1    
            }
            pList.push(count)
            console.log(count)
            console.log("**************************")
            spanlist[j].textContent+=pList[j]
        } 
    }else{
        alert("password lenght cannot be more than 20")
    }       
}




function handleClick(area) {
    /* Save value of myText to input variable */
    var input = area.textContent
   
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);
     
    alert("Copied Text: " + input);
}







// input.addEventListener("change",function(){
//     if(this.checked) {
//         console.log("on")
//         characters=characters2
//         console.log(characters)
//     } else {
//         console.log("off")

//         for(let i=0; i<10; i++){
//             let index = characters.indexOf(i.toString());
//             if (index > -1) { // only splice array when item is found
//                 characters.splice(index, 1); // 2nd parameter means remove one item only
//             }
//         }
//         console.log("withoutttttttttttt")  
//         console.log(characters)
//     }
// });



// span1.onclick = function() {
//   document.execCommand("copy");
// }

// span1.addEventListener("copy", function(event) {
//     event.preventDefault();
//     if (event.clipboardData) {
//       event.clipboardData.setData("text/plain", span1.textContent);
//       console.log(event.clipboardData.getData("text"))
//     }
//   });

// isAlive=true
// function randPassGen(){
//     if(isAlive===true){
//         let pLength=document.getElementById("password-length")
//         console.log(pLength.value)        
//         let pList=[]
//         for(let j=0; j<2;j++){
//             let count =""
//             for(let i=0; i<pLength.value;i++){
//                 let r1 =characters[Math.floor(Math.random()*characters.length)] 
//                 count+=r1    
//             }
//             pList.push(count)
//             console.log(count)
//             console.log("************************************************")
//             spanlist[j].textContent+=pList[j]
//         }
//     isAlive=false  
//     }   
     
// }





