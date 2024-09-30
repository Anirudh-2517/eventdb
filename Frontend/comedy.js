$(function(){
    $("#comregister").on("click",function()
    {
        let comusn=$("#comusn").val()
        let comname=$("#comname").val()
        let comemail=$("#comemail").val()
        let comsem=$("#comsem :selected").val()
        let combranch=$("#combranch :selected").val()
        const myData=
        {
            comusn:comusn,
            comname:comname,
            comemail:comemail,
            comsem:comsem,
            combranch:combranch
        }

        axios.post("http://localhost:9876/api/Comedy/comregister",myData)
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