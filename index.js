
   
      function increment(){
        
        let output = document.getElementById('counter')

        let result = Number(output.innerText) + 1 

        output.innerText = result;
    }

    function decrement(){
        let output = document.getElementById('counter')

        let result = Number(output.innerText) - 1 

        output.innerText = result
    }


    function incFive(){
        let output = document.getElementById('counter')

        let result = Number(output.innerText) + 5 

        output.innerText = result 
    }

    function decFive(){
        let output = document.getElementById('counter')

        let result = Number(output.innerText) - 5 

        output.innerText = result

    }

    function reset(){
        let output = document.getElementById('counter')

        let result = Number(output.innerText) *0

        output.innerText = result
    }

    function inc_input(){
        let output = document.getElementById('counter')
        

        let ipinc = Number(document.getElementById('increment-I/P').value)
       

        let result = Number(output.innerText) + ipinc

        output.innerText = result
    }