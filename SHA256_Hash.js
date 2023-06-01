<!DOCTYPE html>
<html lang="en">
  <head>
    <script 
        type="text/javascript" 
        src="https://unpkg.com/bsv@1.5.3/bsv.min.js">
    </script>
    
     <script 
        type="text/javascript" 
        src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js">
    </script>
  </head>
  <body>
      
      <div id="block1">
           <h1>Your SHA256 hash is:</h1> 
           <p id="privText"> </p>
      </div>
      
      
    <script> 
    var hash = CryptoJS.SHA256("Messagehello");
    

    var p = document.querySelector("#privText");
    p.innerHTML = hash.toString();
    
    </script>
  </body>
</html>
