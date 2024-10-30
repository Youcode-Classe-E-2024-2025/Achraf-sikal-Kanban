
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
    <div class="bg-purple-50 w-80 h-20 text-sm/[12px] rounded-xl align-middle p-4 mb-3">
        <dt class="mb-2">`+document.forms["addform"]["titre"].value+`&nbsp;<span class="bg-orange-500 text-white rounded-lg pl-2 pr-2">medium</span></dt>
        <dd>Participant:&nbsp;</span><span>Achraf</span><br><span>Due date:&nbsp;</span><span>`+document.forms["addform"]["deadline"].value+`</span></dd>
    </div>
    `;
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
