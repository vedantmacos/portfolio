/**
 * ==========================================================
 * JavaScript for Portfolio Website
 * Student: Vedant Pathak
 * Standing: 2nd Year B.Tech Student
 * Branch: CSIT (Computer Science & Information Technology)
 * College: GL Bajaj Institute of Technology & Management
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    // Dynamically update the current year in the footer
    var yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    console.log("Portfolio loaded successfully for Vedant Pathak.");
});
