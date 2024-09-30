$(function(){
    $("#strregister").on("click",function()
    {
        let strusn=$("#strusn").val()
        let strname=$("#strname").val()
        let stremail=$("#stremail").val()
        let strsem=$("#strsem :selected").val()
        let strbranch=$("#strbranch :selected").val()
        const myData=
        {
            strusn:strusn,
            strname:strname,
            stremail:stremail,
            strsem:strsem,
            strbranch:strbranch
        }

        axios.post("http://localhost:9876/api/Stranger/strregister",myData)
        .then(response=>{
            alert("YOU ARE GOOD TO FOR THE EVENT!!!")
        })
        .catch(err=>{
            alert(err)
        })
    })
    $("#logout").on("click",function(){
        window.location="./home.html"
    })
})