let dropdownBtn = document.querySelector('.toggle-icon');
        let menuContent = document.querySelector('.nav-links');
        dropdownBtn.addEventListener('click',()=>{
           if(menuContent.style.display===""){
              menuContent.style.display="block";
           } else {
              menuContent.style.display="";
           }
        })