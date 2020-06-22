window.onload = function() {
    var names =  ["Satyajit", "Samuel", "Neha", "Ruchitha", "Nihash"];
    var places = ["bathroom", "kitchen", "living room", "dining room", "veranda",
                 "driveway", "study", "bedroom", "cellar", "attic"];
    var weapons = ["teddy bear", "screw", "mouse", "ironing stand", "chair", "gown", "pillow", "book", "battery",
                   "dustbin", "charger","knife", "belt","sofa", "taser","remote","mobile", "shoe", "socks", "bolt"];

    //console.log("hello");
    var item = document.getElementById("bodytag");
    console.log(item);
    runLoop(item, names, weapons, places);


    
}

function runLoop(item, names, weapons, places) {
    for( var i = 0; i < 20; i++ ){
        
        function storeVal() {
            return i;
        }
        
        createHeader(item, i, names, weapons, places);  
    }
}

function createHeader(item, num, names, weapons, places) {
    var text = document.createTextNode("Accusation " + (num + 1));
    var node = document.createElement("h3");
    node.appendChild(text);
    addListener(node, num, names, weapons, places);
    item.appendChild(node);
}

function addListener(ele, num, names, weapons, places) {
    ele.addEventListener("click", function() {
         console.log("Accusation " + (num+1) + ": I accuse " + names[num%(names.length)] + ", with the " + weapons[num%(weapons.length)]," in the ", places[num%(places.length)] + "!");
    });
}