class Player{
    constructor(){
        
    }
     getCount() {
        var countRef=database.ref("playerCount");
        countRef.on("value",function(data) {
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(name1){
      var index="player"+playerCount
      database.ref(index).set({
          name:name1
      })                                                                       
    }
}