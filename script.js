const padding = document.getElementById("padding-box")
const margin = document.getElementById("margin-box")
const container = document.getElementById("container-box")
const border= document.getElementById("border-box")
const paddingText = document.getElementById("padding-text")
const marginText = document.getElementById("margin-text")
const containerText = document.getElementById("container-text")
const borderText= document.getElementById("border-text")
const borderRadiusText= document.getElementById("border-radius-text")

function changeC () {
    var w = document.getElementById("width").value
    var h = document.getElementById("height").value
    console.log("w",w,"h",h);
    container.style.height = h+"px"
    container.style.width = w+"px"
    containerText.innerText = "Container height:"+h+"px; width:"+w+"px;"
};
container.style.height = "50px"
container.style.width  = "50px"

function changeM() {
    var m1 = document.getElementById("margin-top").value
    var m2 = document.getElementById("margin-right").value
    var m3 = document.getElementById("margin-bottom").value
    var m4 = document.getElementById("margin-left").value
    console.log(m1,m2,m3,m4,"margin");
    margin.style.padding = " "+m1+"px"+" "+m2+"px"+" "+m3+"px"+" "+m4+"px";
    marginText.innerText = "margin:(T)"+m1+"px (L)"+m2+"px (B)"+m3+"px (R)"+m4+"px;";
}

function changeB () {
    var b1 = document.getElementById("border-top").value
    var b2 = document.getElementById("border-right").value
    var b3 = document.getElementById("border-bottom").value
    var b4 = document.getElementById("border-left").value
    console.log(b1,b2,b3,b4,"border")
    border.style.padding = " "+b1+"px"+" "+b2+"px"+" "+b3+"px"+" "+b4+"px";
    borderText.innerText = "border:(T)"+b1+"px (L)"+b2+"px (B)"+b3+"px (R)"+b4+"px;";
   
}
function changeBR () {
    var br1 = document.getElementById("border-radius-top").value
    var br2 = document.getElementById("border-radius-right").value
    var br3 = document.getElementById("border-radius-bottom").value
    var br4 = document.getElementById("border-radius-left").value
    console.log(br1,br2,br3,br4,"border-raduis")
    border.style.borderRadius = " "+br1+"%"+" "+br2+"%"+" "+br3+"%"+" "+br4+"%";
    borderRadiusText.innerText = "border radius:(T)"+br1+"% (L)"+br2+"% (B)"+br3+"% (R)"+br4+"%;";
}
function changeP() {
    var p1 = document.getElementById("padding-top").value
    var p2 = document.getElementById("padding-right").value
    var p3 = document.getElementById("padding-bottom").value
    var p4 = document.getElementById("padding-left").value
    console.log(p1,p2,p3,p4,"padding")
    padding.style.padding = " "+p1+"px"+" "+p2+"px"+" "+p3+"px"+" "+p4+"px";
    paddingText.innerText = "padding :(T)"+p1+"px (L)"+p2+"px (B)"+p3+"px (R)"+p4+"px;";
}
const OP = 0
margin.addEventListener("mouseover",showMargin);
margin.addEventListener("click",showMargin);
margin.addEventListener("mouseout",hideMargin);
document.getElementById("box").addEventListener("dblclick",hideMargin);
function showMargin() {
    margin.style.backgroundColor   = "rgba(146, 1, 98,1)";
    padding.style.backgroundColor="rgba(255,0, 0,"+OP+")";
    border.style.backgroundColor="rgba(0, 0, 255,"+OP+")";
    container.style.backgroundColor="rgba(0, 255, 0,"+OP+")";
}
function hideMargin() {
    padding.style.backgroundColor="rgba(255,0, 0,1)"
    border.style.backgroundColor="rgba(0, 0, 255,1)"
    container.style.backgroundColor="rgba(0, 255, 0,1)"
    margin.style.backgroundColor   = "rgba(146, 1, 98,1)"
}

border.addEventListener("mouseover",showBorder);
border.addEventListener("click",showBorder);
function showBorder() {
    setTimeout(()=>{ 
        border.style.backgroundColor="rgba(0, 0, 255,1)";
    margin.style.backgroundColor   = "rgba(146, 1, 98,"+OP+")"
  },1)
}

padding.addEventListener("mouseover",showPadding);
padding.addEventListener("click",showPadding);
function showPadding() {
    setTimeout(()=>{
        padding.style.backgroundColor   = "rgba(255,0, 0,1)";
        border.style.backgroundColor   = "rgba(0, 0, 255,"+OP+")"
    },5)
}

container.addEventListener("mouseover",showContainer);
container.addEventListener("click",showContainer);
function showContainer() {
    setTimeout(()=>{
        padding.style.backgroundColor   = "rgba(255,0, 0,"+OP+")";
        container.style.backgroundColor   = "rgba(0, 255, 0,1)"
    },10)
}