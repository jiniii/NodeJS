var express = require("express");
var app = express();
function repeater(string){
    var charCount = {};
    for(var i = 0; i < string.length; i++){
        if(charCount[string[i]]){
            charCount[string[i]] = 'More Than One';
        } else {
            charCount[string[i]] = 'One Time';
        }
    }    
    for(var j = 0; j < string.length; j++){
        if(charCount[string[j]] === 'One Time'){
          return string.charAt(j);      
        }
    }
    
    return 'Everything is repeated';
}
app.get("/word/:x", function (req,res) { 
    let repeat = req.params.x;
    repeat = repeat.toString();
    
    console.log(repeater(repeat));

  res.send(repeater(repeat))
});
app.listen(3001, () => {
    console.log("Server running on port 3001");
});
