// Create a "close" button and append it to each list item
var myNodeList=document.getElementsByTagName("LI");
var i;
for (i=0;i<myNodeList.length;i++){
    var span=document.createElement("span");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);

}
// Click on a close button to hide the current list item
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
// Add a "checked" symbol when clicking on a list item
var list=document.querySelector("ul");
list.addEventListener('click',function(ev)
{
    if(ev.target.tagName==="LI"){
        ev.target.classList.toggle('checked');
    }

},false);

// Create a new list item when clicking on the "Add" button
function newElement(){
    var li=document.createElement("li");
    var inputValue=document.getElementById("myInput").value;
    var t=document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue===''){
        alert('Write something');
    }else{
        document.getElementById("myUl").appendChild(li)
    }
document.getElementById("myInput").value = "";
var span=document.createElement("span");
var txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
li.appendChild(span);
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}
function removeAll(){
    var l=document.getElementsByTagName("ul");
    l[0].innerHTML="";
}

(function() {
    const quotes = [
      {
        quote:
          "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
      },
      {
        quote:
          "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
      },
      {
        quote:
          "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
      },
      {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
      },
      {
        quote:
          "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
      },
      {
        quote:
          "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
      }
    ];
  const btn=document.getElementById("gnrt_quote");
  btn.addEventListener("click",function(){
      let random=Math.floor(Math.random()*quotes.length);
      document.getElementById("quotes").textContent=quotes[random].quote;
      document.querySelector(".author").textContent=quotes[random].author;
  });
})();