// fixed header
window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }

// menu toggle
var MenuItems = document.getElementById("MenuItems");
        MenuItems.style.maxHeight="0px";
        function menutoggle(){
            if(MenuItems.style.maxHeight=="0px")
                {
                    MenuItems.style.maxHeight="600px";
                    menuBtn.style.BackgroundColor ="#222";
                }
            else
                {
                    MenuItems.style.maxHeight="0px";

            }
        }  
