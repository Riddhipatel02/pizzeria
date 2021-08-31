array_menu=["Cheese Pizza","Vegetable Pizza", "Chicken Pizza", "Mushroom Pizza"];

function view(){
    document.getElementById("display_name").innerHTML=array_menu;
    document.getElementById("view_button").style.display = "none";
    document.getElementById("add_button").style.display = "inline-block";
}
function add(){
    var new_item=document.getElementById("item_name").value;
    array_menu.push(new_item);
    console.log(array_menu);
    document.getElementById("display_name").innerHTML=array_menu;
}