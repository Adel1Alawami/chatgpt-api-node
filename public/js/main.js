function onSubmit(e) {
    e.preventDefault();
  
    document.querySelector('.msg').textContent = '';
    document.querySelector('#answer').textContent = '';
    const prompt = document.querySelector('#prompt').value;
   

    if (prompt === '') {
        alert('Please add some text');
        return;
      }


      generateanswerRequest(prompt);

    }
    
    async function generateanswerRequest(prompt) {
        try{
            showSpinner();

            const response = await fetch('/openai/generateanswer' , {
                method: 'POST' ,
                headers: {
                  'Content-Type': 'application/json',
            
                },
                body: JSON.stringify({ prompt }) , 
            
              });

              if(!response.ok) {
                removeSpinner();
                throw new Error('That Answer Could Not Be Generated')
              }

              const data = await response.json();
              console.log(data);

              const answer = data.data;

              document.querySelector('#answer').textContent = answer;

              
              removeSpinner();
            } catch (error) {
              document.querySelector('.msg').textContent = error;
            }
              
        }

        function showSpinner() {
            document.querySelector('.spinner').classList.add('show');
          }
          
          function removeSpinner() {
            document.querySelector('.spinner').classList.remove('show');
          }
        
          document.querySelector('#text-form').addEventListener('submit', onSubmit);


    









