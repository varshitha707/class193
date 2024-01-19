AFRAME.registerComponent("game",{
    schema:{
        gameState:{
            type:"string", default:"play"
        }
    },
    init:function(){
        var duration=300
        var timerel=document.querySelector("#timer")
        this.starttimer(duration,timerel)
    },
    starttimer:function(duration,timerel){
        var minutes
        var seconds
        setInterval(() => {
            if(duration>=0){
                this.data.gamestate="play"
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)
                if(minutes<10){
                    minutes="0"+minutes
                }
                if(seconds<10){
                    seconds="0"+seconds
                }
                timerel.setAttribute("text",{
                    value:minutes+":"+seconds
                })
                duration-=1
            }
            else{
                this.data.gameState="over"
                var camerarig=document.querySelector("#camera-rig")
                camerarig.setAttribute("velocity",{
                    x:0,y:0,z:0
                })
                 var over=document.querySelector("#over")
                 over.setAttribute("visible",true)
                 var carspeed=document.querySelector("#speed")
                 carspeed.setAttribute("text",{
                    value:"0"
                 })
            }
        }, 100);
    }
    
})