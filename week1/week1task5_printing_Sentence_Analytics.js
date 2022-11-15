function countWords() 
            {
                // To find Word Count
                var text = document.getElementById("inputField").value;
                console.log(text.length);
                var numWords = 0;
                for (var i = 0; i < text.length; i++) 
                {
                    var currentCharacter = text[i];
 
                    if (currentCharacter == " ") 
                    {
                    numWords += 1;
                    }
                }
 
                numWords += 1;
                document.getElementById("show1").innerHTML = numWords;

                // To find Repeated char count

                var text_char = document.getElementById("inputField").value;
                console.log(text_char.length);
                var numChar = 0;
              
                var obj = [];
                for(x = 0, length = text_char.length; x < length; x++) {
                    var l = text_char.charAt(x)
                    console.log(l);

                    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
                }

                console.log(obj);
         
                
            }