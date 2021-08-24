// eslint-disable-next-line semi
'use strict'

let form = document.getElementById('form')
let table = document.getElementById('table')
let buttonClear = document.getElementById('buttonClear')
buttonClear
let allArr=[]
function movieList(name,image,release){
this.name=name
this.image=image
this.release=release

allArr.push(this)




}


form.addEventListener('submit',submitMovie)
function submitMovie(e){
e.preventDefault()

let ename=e.target.name.value;
let eimage=e.target.image.value;
let erelease=e.target.release.value;

new movieList(ename,eimage,erelease);
saveData ()
table.innerHTML=""
render ()






}



function saveData (){

 localStorage.data=JSON.stringify(allArr)


}


function getData (){


allArr=localStorage.data ? JSON.parse(localStorage.data):[]

}


function render (){

getData()


for(let i=0;i<allArr.length;i++){
    
    let tr=document.createElement('tr')
    table.appendChild(tr)

    let th1=document.createElement('th')
    th1.textContent='x'
    th1.id=i
    tr.appendChild(th1)

    let imge=document.createElement('img')
   imge.src=`./img/${allArr[i].image}.png`
    tr.appendChild(imge)

    let th2=document.createElement('th')
    th2.textContent=allArr[i].name
    tr.appendChild(th2)


    let th3=document.createElement('th')
    th3.textContent=allArr[i].release
    tr.appendChild(th3)



}









}

table.addEventListener('click',removeRow)
function removeRow(e){

if(e.target.textContent==='x'){
e.target.parentElement.remove()
allArr.splice(e.target.id,1)
saveData()



}



}

buttonClear.addEventListener('click',clearLs)
function clearLs(e){
allArr=[]
table.innerHTML=""
saveData()



}

render()