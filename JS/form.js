class Form{
    constructor(){
        
    }
       display(){
         var title=createElement("h1");
         title.html("Car Racing Game");
         title.position(130,10);
         var input=createInput("Name");
         input.position(130,160);
         var button=createButton("PLAY");
         button.position(250,200);
         
         button.mousePressed(function(){
             input.hide();
             button.hide();
             var name=input.value();
             playerCount=playerCount+1;
             player.updateCount(playerCount);
             player.update(name);
             var greeting=createElement("h2");
             greeting.html("HELLO "+name);
             greeting.position(130,160);
         });
       }
}