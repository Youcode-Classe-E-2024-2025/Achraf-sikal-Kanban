let p1=`<span class="bg-red-500 text-white rounded-lg pl-2 pr-2">High</span>`;
let p2=`<span class="bg-orange-500 text-white rounded-lg pl-2 pr-2">Medium</span>`;
let p3=`<span class="bg-green-500 text-white rounded-lg pl-2 pr-2">low</span>`;
let s;
let p;
let index=0;
let taskList= [];
function add(){
    let form = document.getElementById("add");
    // blurr.style.display= "block";
    form.classList.remove('hidden');
    // b.style.filter= "blur("+i+"px)";
    document.getElementById("main").classList.add('blur');
    // form.addEventListener("click",function(event){
    //     event.preventDefault()
    //   });
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
function submet(event) {
    event.preventDefault();
    let form = document.getElementById("add");
    // blurr.style.display= "none";
    form.classList.add('hidden');
    // let b = document.getElementById("main");
    // b.style.filter= "none";
    document.getElementById("main").classList.remove('blur');
}
// document.forms["addform"]["descpription"].value
function appendHTML(){
    const sta = document.getElementById("statu").value;
    const pre = document.getElementById("priority").value;
    let taskid;
    // priorety selector
    if (pre==1){
        p=p1;
        taskid="high"
    }else if (pre==2){
        p=p2;
        taskid="medium"
    }else{
        p=p3;
        taskid="low"
    }
    // statut selector
    if (sta==1){
        s= document.getElementById('tasks0');
    }else if (sta==2){
        s= document.getElementById('tasks1');
    }else{
        s= document.getElementById('tasks2');
    }
    s.innerHTML += `
    <div id="`+index+`" draggable="true" ondragstart="drag(event)" class="bg-white bg-opacity-80 w-80 h-20 text-sm/[12px] rounded-xl align-middle p-4 mb-3 flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-white duration-300">
        <div class="min-w-60" onclick="view(this.parentElement.id)">
            <dt class="mb-2">`+document.forms["addform"]["titre"].value+`&nbsp;`+p+`</dt>
            <dd><br>date d'échéance:&nbsp;<span>`+document.forms["addform"]["deadline"].value+`</span></dd>
        </div>
        <div class="grid gap-2">
            <button onclick="this.parentElement.parentElement.remove(),taskCounter()" ><img draggable="false" class="w-4" src="assets/icon/trash.svg" alt=""></button>
            <button onclick="change_stat(this.parentElement.parentElement.id,this.parentElement.parentElement.parentElement.id),taskCounter()" ><img draggable="false" class="w-4" src="assets/icon/right.svg" alt=""></button>
        </div>
    </div>
    `;
    index++;
    taskList.push([document.forms["addform"]["titre"].value,document.forms["addform"]["deadline"].value,document.forms["addform"]["descpription"].value]);
    taskCounter()
}
// btn.addEventListener('click', appendHTML);
function cancel() {
    let form = document.getElementById("add");
    // blurr.style.display= "none";
    form.classList.add('hidden');
    // let b = document.getElementById("main");
    // b.style.filter= "none";
    // console.log(document.getElementById("deadline").value);
    
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
    taskCounter()
    ev.preventDefault();
  }
function view(id){
    document.getElementById("main").classList.add('blur');
    const father = document.getElementById("doc");
    father.innerHTML += `
    <section id="aff" class="absolute z-10 left-1/4 top-1/4">
        <div class="bg-purple-100 w-1/2 h-1/2 rounded-xl justify-between p-4 font-black fixed grid grid-cols-4 gap-9">
            <div class="col-start-1 col-end-3">
                <p>task name:</p>
                <p class="bg-white">`+taskList[id][0]+`</p>
            </div>
            <div class="col-start-3 col-end-4">
                <p>due date:</p>
                <p class="bg-white">`+taskList[id][1]+`</p>
            </div>
            <div class="col-start-1 col-end-3">
                <p>Description:</p>
                <p class="bg-white">`+taskList[id][2]+`</p>
            </div>
            <!-- <form>
                <div class="col-start-4 row-start-6">
                    <label for="ch_statu">statut:</label>
                    <select class="bg-purple-600 text-white rounded h-6" id="ch_statu" name="statu">
                        <option value="1">To do</option>
                        <option value="2">Doing</option>
                        <option value="3">Done</option>
                    </select>
                </div>
            </form> -->
            <div class="flex ml-7 mt-36 col-start-4">
            <button id="close" onclick="this.parentElement.parentElement.classList.add('hidden'),remblur()" class="bg-red-500 w-28 h-8 rounded-full text-white mr-2">Close</button>
            </div>
        </div>
    </section>
    `;
}
function remblur(){
    document.getElementById("main").classList.remove('blur');
}
///////////////////// change statut /////////////////////
function change_stat(elid,parentid) {
    const element = document.getElementById(elid);
    parentid = parentid[parentid.length-1];
    if (parentid<2){
        parentid++;
        document.getElementById("tasks"+(parentid)).appendChild(element);
    };
}
function taskCounter(){
    let numbTodo = document.getElementById("tasks0").children.length;
    let numbDoing = document.getElementById("tasks1").children.length;
    let numbDone = document.getElementById("tasks2").children.length;
    document.getElementById("todo_numb").innerHTML = numbTodo;
    document.getElementById("doing_numb").innerHTML = numbDoing;
    document.getElementById("done_numb").innerHTML = numbDone;
    document.getElementById("total").innerHTML = numbTodo+numbDoing+numbDone;
}
// function validForm() {
//     const title = document.forms["addform"]["titre"].value.trim();
//     const deadline = document.forms["addform"]["deadline"].value;
//     const description = document.forms["addform"]["descpription"].value.trim();
//     if (!title) {
//         alert("task title cannot be empty");
//         return false;
//     }
//     const currentDate = new Date();
//     const inputDate = new Date(deadline);
//     if (inputDate < currentDate) {
//         alert("deadline is not valid future date");
//         return false;
//     }
//     if (description.length > 200) {
//         alert("description is more then 200 characters");
//         return false;
//     }
//     return true;
// }

// function change_stat_list(id) {
//     const element = document.getElementById(id);
//     const sta = document.getElementById("ch_statu").value;
//     let s;
//     if (sta==1){
//         s= document.getElementById('tasks0');
//         s.appendChild(element);
//     }else if (sta==2){
//         s= document.getElementById('tasks1');
//         s.appendChild(element);
//     }else{
//         s= document.getElementById('tasks2');
//         s.appendChild(element);
//     }
// };