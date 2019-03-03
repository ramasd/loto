/* Kai paspaudžiama ant mygtuko parodo arba išjungia dropdown turinį: */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Uždaro dropdown menu, jei paspaudžiama už jo ribų:
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
