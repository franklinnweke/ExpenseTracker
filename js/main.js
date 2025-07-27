// Franklin Nweke Services - main.js
// A side project by Chigozie Franklin Nweke (Student ID: 8972856)

$(document).ready(function() {
    // Highlight current page in nav
    const path = window.location.pathname.split("/").pop() || "index.html";
    $("nav a").each(function() {
        if ($(this).attr("href") === path) {
            $(this).addClass("active");
        }
    });
}); 