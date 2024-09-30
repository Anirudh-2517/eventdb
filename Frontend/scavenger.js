$(function(){
    $("#scavengerregister").on("click",function()
    {
        let scusn=$("#scavengerusn").val()
        let scname=$("#scavengername").val()
        let scemail=$("#scavengeremail").val()
        let scsem=$("#scavengersem :selected").val()
        let scbranch=$("#scavengerbranch :selected").val()
        const myData=
        {
            scusn:scusn,
            scname:scname,
            scemail:scemail,
            scsem:scsem,
            scbranch:scbranch
        }

        axios.post("http://localhost:9876/api/Scavenger/scavengerregister",myData)
        .then(response=>{
            alert("YOU ARE GOOD TO GO FOR THE EVENT!!!")
        })
        .catch(err=>{
            alert(err)
        })
    })
    $("#logout").on("click",function(){
        window.location="./home.html"
    })
})