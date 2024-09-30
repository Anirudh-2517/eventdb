$(function(){
    $("#register").on("click",function(){
        let usn=$("#usn").val()
        let name=$("#name").val()
        let sem=$("#sem :selected").val()
        let branch=$("#branch :selected").val()
        let event=$("#event :selected").val()
        $("#allRegistrations").append("<li class='list-group-item w-75 m-2'><span style='display:inline-block;width:70px'>"
        +usn+"</span><span style='display:inline-block;width:70px'> "+name+"</span> <span style='display:inline-block;width:70px'>"
        +sem+"</span> <span style='display:inline-block;width:70px'>"+branch+"</span> <span style='display:inline-block;width:125px'>"
        +event+"</span></li>")
    })
    $("#logout").on("click",function(){
        window.location="../components/home.html"
    })
})
