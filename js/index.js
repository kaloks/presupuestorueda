$(document).ready(function () { 
    $("#file").change(function(e){
        console.log(e.target.files);
        let reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        
        reader.onload=function(){
            $("#image").attr('src',reader.result);
        }
    })
})