function escope(){
    const startButton = document.querySelector('.start');
    const pauseButton = document.querySelector('.pause');
    const resteButton = document.querySelector('.reset');

    let miliseconds = 0;

    function getHour(miliseconds){
        const date = new Date(miliseconds);

        const hour = date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'      
        });

        return hour;

    }

}

escope();