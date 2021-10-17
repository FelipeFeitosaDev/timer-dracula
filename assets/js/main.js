function escope(){
    const timerElement = document.querySelector('.timer');
    const startButton = document.querySelector('.start');
    const pauseButton = document.querySelector('.pause');
    const resteButton = document.querySelector('.reset');

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
        
        if(e.target.classList.contains('start')){
            start = setInterval(()=>{
                miliseconds += 1000;
                const timer = getHour(miliseconds);
                timerElement.innerHTML = `${timer}`
    
            }, 1000);
        }
        
      
    })
}

escope();