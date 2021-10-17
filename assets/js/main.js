function escope(){
    const timerElement = document.querySelector('.timer');
   

    let miliseconds = 0;
    let start;

    function getHour(miliseconds){
        const date = new Date(miliseconds);

        const hour = date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'      
        });

        return hour;

    }

    document.addEventListener('click', (e)=>{
        clearInterval(start);
        if(e.target.classList.contains('start')){
            start = setInterval(()=>{
                miliseconds += 1000;
                const timer = getHour(miliseconds);
                timerElement.innerHTML = `${timer}`
    
            }, 1000);
        }
        if(e.target.classList.contains('pause')){
            clearInterval(start);
        }
        if(e.target.classList.contains('reset')){
            clearInterval(start);
            miliseconds = 0;
            timerElement.innerHTML=`00:00:00`;
        }
      
    })
}

escope();