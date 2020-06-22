window.onload = function() {
    var names =  ["Satyajit", "Samuel", "Neha", "Ruchitha", "Nihash"];
    var places = ["bathroom", "kitchen", "living room", "dining room", "veranda",
                 "driveway", "study", "bedroom", "cellar", "attic"];
    var weapons = ["teddy bear", "screw", "mouse", "ironing stand", "chair", "gown", "pillow", "book", "battery",
                   "dustbin", "charger","knife", "belt","sofa", "taser","remote","mobile", "shoe", "socks", "bolt"];

    //console.log("hello");
    var item = document.getElementById("bodytag");
    console.log(item);
    runLoop(item, names)


    
}

function runLoop(item, names) {
    for( var i = 0; i < 5; i++ ){
        
        function storeVal() {
            return i;
        }
        
        createHeader(item, i, storeVal, names);  
    }
}

function createHeader(item, num, getI, names) {
    var text = document.createTextNode("Accusation " + (num + 1));
    var node = document.createElement("h3");
    node.appendChild(text);
    addListener(node, num, names);
    item.appendChild(node);
}

function addListener(ele, num, names) {
    ele.addEventListener("click", function() {
         console.log(names[num])
    });

}