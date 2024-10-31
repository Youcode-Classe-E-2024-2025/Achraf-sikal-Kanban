let taskList= [];
let index=0;
function add(){
    let form = document.getElementById("add");
    // blurr.style.display= "block";
    form.classList.remove('hidden');
    // b.style.filter= "blur("+i+"px)";
    document.getElementById("main").classList.add('blur');
    form.addEventListener("click",function(event){
        event.preventDefault()
      });
}
// function modsubmet(){
//     let modform = document.getElementById("mod");
//     // blurr.style.display= "block";
//     modform.classList.add('hidden');
//     // b.style.filter= "blur("+i+"px)";
//     document.getElementById("main").classList.remove('blur');
//     modform.addEventListener("click",function(event){
//         event.preventDefault()
//       });
// }
function submet() {
    let form = document.getElementById("add");
    // blurr.style.display= "none";
    form.classList.add('hidden');
    // let b = document.getElementById("main");
    // b.style.filter= "none";
    
    document.getElementById("main").classList.remove('blur');
    form.addEventListener("click",function(event){
        event.preventDefault()
      });
}
// document.forms["addform"]["descpription"].value
function appendHTML(){
    const father = document.getElementById('tasks');
    father.innerHTML += `
    <div id="`+index+`" draggable="true" ondragstart="drag(event)" class="bg-purple-50 w-80 h-20 text-sm/[12px] rounded-xl align-middle p-4 mb-3 flex justify-between">
        <div class="min-w-60" onclick="modify(this.parentElement.id)">
            <dt class="mb-2">`+document.forms["addform"]["titre"].value+`&nbsp;<span class="bg-green-500 text-white rounded-lg pl-2 pr-2">low</span></dt>
            <dd><br>date d'échéance:&nbsp;<span>`+document.forms["addform"]["deadline"].value+`</span></dd>
        </div>
        <div class="grid gap-2">
            <button onclick="this.parentElement.parentElement.remove()" ><img class="w-4" src="assets/icon/trash.svg" alt=""></button>
        </div>
    </div>
    `;
    taskList.push([document.forms["addform"]["titre"].value,document.forms["addform"]["deadline"].value,document.forms["addform"]["descpription"].value]);
    index++;
}
btn.addEventListener('click', appendHTML);
function cancel() {
    let form = document.getElementById("add");
    // blurr.style.display= "none";
    form.classList.add('hidden');
    // let b = document.getElementById("main");
    // b.style.filter= "none";
    
    document.getElementById("main").classList.remove('blur');
    form.addEventListener("click",function(event){
        event.preventDefault()
      });
}
// function close() {
//     let form = document.getElementById("mod");
//     let c = document.getElementById("close");
//     // blurr.style.display= "none";
//     form.classList.add('hidden');
//     // let b = document.getElementById("main");
//     // b.style.filter= "none";
    
//     document.getElementById("main").classList.remove('blur');
//     c.addEventListener("click",function(event){
//         event.preventDefault()
//       });
// }
// function madify(id){
//     const father = document.getElementById("doc");
//     father.innerHTML += `
//     <section id="mod" class="absolute z-10 left-1/4 top-1/4">
//         <div class="bg-gray-100 w-1/2 h-1/2 rounded-xl flex justify-between p-4 font-black fixed">
//             <form name="modform" class="grid grid-cols-4">
//                 <div class="col-start-1">
//                     <p >task name:</p>
//                     <input name="titre" class="w-64 h-8 mr-3 rounded-full pl-4" type="text" value="`+taskList[id][0]+`">
//                 </div>
//                 <div class="col-start-3">
//                     <p>due date:</p>
//                     <input name="deadline" class="w-64 h-8 rounded-full pl-4" type="date" value="`+taskList[id][1]+`">
//                 </div>
//                 <div class="col-start-1">
//                     <p>Description:</p>
//                     <textarea class="w-96 h-40 rounded-lg outline-none pl-2" name="descpription" id="">`+taskList[id][2]+`</textarea>
//                 </div>
//                 <div class="flex ml-7 mt-36 col-start-4">
//                     <button id="mod_cancel" onclick="modsubmet()" class="bg-red-500 w-28 h-8 rounded-full text-white mr-2">Cancel</button>
//                     <button id="mod_btn" onclick="modsubmet()" class="bg-purple-800 w-24 h-8 rounded-full text-white">Add</button>
//                 </div>
//             </form>
//         </div>
//     </section>
//     `;
//     let modform = document.getElementById("mod");
//     // blurr.style.display= "block";
//     modform.classList.remove('hidden');
//     // b.style.filter= "blur("+i+"px)";
//     document.getElementById("main").classList.add('blur');
//     // modform.addEventListener("click",function(event){
//     //     event.preventDefault()
//     //   });
// }
////////////// Drag and Drop //////////////
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
  }
  
  function drop(ev) {
    let data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
  }
function modify(id){
    const father = document.getElementById("doc");
    father.innerHTML += `
    <section id="aff" class="absolute z-10 left-1/4 top-1/4">
        <div class="bg-gray-100 w-1/2 h-1/2 rounded-xl justify-between p-4 font-black fixed grid grid-cols-4">
            <div class="col-start-1">
                <p >task name: `+taskList[id][0]+`</p>
            </div>
            <div class="col-start-3">
                <p>due date: `+taskList[id][1]+`</p>
            </div>
            <div class="col-start-1">
                <p>Description: `+taskList[id][2]+`</p>
            </div>
            <div class="flex ml-7 mt-36 col-start-4">
            <button id="close" onclick="this.parentElement.parentElement.remove()" class="bg-red-500 w-28 h-8 rounded-full text-white mr-2">Close</button>
        </div>
    </section>
    `;
}