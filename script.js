const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "="];

for (let j = 0; j < 15; j++) {
  const button = document.createElement("button");
  button.className='calculator-btn';
  const a = document.getElementById("buttons");
  button.innerHTML = number[j];
    if (j % 3 === 0) {
    a.appendChild(document.createElement("br"));
  } 
  a.appendChild(button);

    if(number[j]==="="){
        button.addEventListener('click', calculate);
    }

    else
    {
        button.addEventListener('click',()=>{
            const resultTextarea=document.getElementById('result')
            resultTextarea.value +=number[j];
        });
    }
}


function calculate()
{
    const resultTextarea = document.getElementById('result');
    const expression = resultTextarea.value;
  
    let result;
   
      result = eval(expression);

  
    resultTextarea.value = result;
  }
  
  







