$(function(){
    $("#login").on("click",function(){
        let username=$("#username").val()
        let password=$("#password").val()
        if(username=="user" && password=="user123")
            window.location="./components/home.html"
        else if(username=="admin" && password=="admin123")
            window.location="./components/eventlist.html"
        else
            alert("Invalid username or password!!!")
    })
})