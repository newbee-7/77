function overlay(){
    var e1 = document.getElementById('modal-overlay');	
    e1.style.height = innerHeight;
    e1.style.width = innerWidth;		
    var eHeight = e1.offsetHeight;
    e1.style.top = (innerHeight - eHeight) / 2 + "px";
    e1.style.visibility =  (e1.style.visibility == "visible"  ) ? "hidden" : "visible";
}