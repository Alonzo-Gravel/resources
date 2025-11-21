const modal = document.querySelector(".modal");

//Login Form

function dismissModal() {
    modal.style.display = "none";
}
dismissModal();

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("uname").value.trim();
    const password = document.getElementById("pwd").value.trim();
    if (username === "Alonzo" && password === "2468") {
        window.location.href = "index.html";
    } 
    else {
        modal.style.display = "block";
    }
});

function dismissModal()
{
    modal.style.display = "none";
}




//toggleNavigation

let sidebarOpen = false;


function toggleNav()
{
    const sidebar = document.querySelector(".nav-sidebar");
    const toggleBtn = document.querySelector(".btn-toggle-nav");
    const sidebarLink = document.querySelector(".nav-sidebar");
    const sidebarLinks = document.querySelector(".nav-sidebar ul");
    

    if (sidebar.style.width === "230px") {

        sidebar.style.width = "50px";
        sidebarLinks.style.visibility = "hidden";
    } else{
        sidebar.style.width = "230px";
        sidebarLinks.style.visibility = "visible";
    }
    
}





    
  