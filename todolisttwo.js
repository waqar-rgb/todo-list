var record=''
document.querySelector('#push').onclick= function(){
    if(document.querySelector('#newdata input').value.length==0){
        alert('Enter some task')
    }
    else{

        document.querySelector('.tasks').innerHTML +=`
        
        <div id='task'>

            <span class='spanclass'>${document.querySelector('#newdata input').value}</span>
            <button class='delete'><i class="far fa-trash-alt"></i></button>
        
        </div>
        
        `
        //delete items
        
        let current_task= document.querySelectorAll('.delete');

        for (let i = 0; i < current_task.length; i++) {
            
            current_task[i].onclick= function(){
                this.parentNode.remove();
            }
            
        }
        // completed task highlite
        let completed = document.querySelectorAll('.spanclass');
        for (let j = 0; j < completed.length; j++) {
             
            completed[j].onclick= function(){
                this.classList.toggle('comp')
            }
            
        }

        document.querySelector('#newdata input').value='';

    }
}


   

