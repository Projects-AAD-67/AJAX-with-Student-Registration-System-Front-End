 $(document).ready(function(){

    $("#btn-submit").click(function(){
        event.preventDefault();

        let nameF = $("#form-name").val();
        let cityF = $("#form-city").val();
        let emailF = $("#form-email").val();
        let levelF = $("#form-level").val();

        console.log(nameF);
        console.log(cityF);
        console.log(emailF);
        console.log(levelF);

        //create an object for accumilate data
        const studentData = {
          name:nameF,
          city:cityF,
          email:emailF,
          level:levelF
        };

        console.log(studentData)
       
        //create JOSN
        const studentJSON = JSON.stringify(studentData)
        console.log(studentJSON)
        // save the data with AJAX
        const http = new XMLHttpRequest();
        http.onreadystatechange = ()=>{
            if(http.readyState == 4){
                if(http.status == 200 || http.status == 201){
                    var jsonTypeResponse =  JSON.stringify(http.responseText)
                    console.log(jsonTypeResponse)
                }else{
                    console.error("Error:", http.status, http.statusText)
                }
                  
            }else{
                console.log("Processing stage: Stage=", http.readyState);
            }
        }
        http.open("POST","http://localhost:8080/Stumgmt2024/student",true)
        http.setRequestHeader("Content-Type","application/json")
        http.send(studentJSON)
    });

});