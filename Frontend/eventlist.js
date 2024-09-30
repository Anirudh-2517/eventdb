$(function(){
    $("#eventname").on("change",function(){
        let eventname=$("#eventname :selected").text()
        axios.get("http://localhost:9876/api/Event/getparticipants/"+eventname)
        .then(resp=>{
            $("#participants").empty()
            let participants=resp.data
            switch(eventname)
            {
                case "scavenger":
                    for(let i=0;i<participants.length;i++)
                        $("#participants").append("<li>"+participants[i].scusn+" "+participants[i].scname+"</li>")
                    break;
                case "stranger":
                    for(let i=0;i<participants.length;i++)
                        $("#participants").append("<li>"+participants[i].strusn+" "+participants[i].strname+"</li>")
                    break;
                case "comedy":
                    for(let i=0;i<participants.length;i++)
                        $("#participants").append("<li>"+participants[i].comusn+" "+participants[i].comname+"</li>")
                    break;
            }
        })
    })
    $("#delete").on("click",function(){
        let usn=$("#usn").val()
        let eventname=$("#eventname :selected").text()

        let payload=
        {
            usn:usn,
            eventname:eventname
        }
        axios.post("http://localhost:9876/api/event/deleteevent",payload)
        .then(resp=>{
            alert(resp.data.affectedRows+"  YOUR GIVEN DATA HAS BEEN DELETED...")
        })
    })
    $("#update").on("click",function(){
        let usn=$("#myusn").val()
        let newname=$("#newname").val()
        let eventname=$("#eventname :selected").text()

        let payload=
        {
            usn:usn,
            newname:newname,
            eventname:eventname
        }
        axios.post("http://localhost:9876/api/event/updateevent",payload)
        .then(resp=>{
            alert(resp.data.affectedRows+"  YOUR GIVEN DATA HAS BEEN UPDATED...")
        })
    })
})