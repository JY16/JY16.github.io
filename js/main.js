// Mobile Navigation

function mobileNav() {
    let menuToggle = document.querySelector(".menu-toggle");
    let nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function() {
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        }
        else {
            nav.style.display = "flex";
        }
    });
}

mobileNav();


// Show Learning

function showLearning() {
    let learningLink = document.querySelector(".learning");
    let learningList = document.querySelector(".learning-list");

    learningLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (learningList.style.display === "block") {
            learningList.style.display = "none";
        }
        else {
            learningList.style.display = "block";
        }
    });
}

showLearning();

// Show the portfolio project

function portfolioProject() {
    let project = document.querySelectorAll(".project");
    let portfolioSlider = document.querySelector(".portfolio-slider");
    let back = document.querySelector(".back");
    let fullProject = document.querySelector(".full-project-container");

    function showProject() {
        for (let i = 0; i < project.length; i++) {
            project[i].addEventListener("click", function() {
                portfolioSlider.style.left = "-100%";
                fullProject.style.display = "block";
            });
        }

        back.addEventListener("click", function() {
            portfolioSlider.style.left = 0;
            fullProject.style.display = "none";
        });
    }

    showProject();

    function loadContent() {
        for (let i = 0; i < project.length; i++) {
            project[i].addEventListener("click", function (event) {
                event.preventDefault();

                let xhr = new XMLHttpRequest();
                let currentProject = this.href;

                xhr.open("GET", currentProject, true);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        let projectTitle = document.querySelector(".full-project-container h4");

                        projectTitle.innerHTML = document.querySelector(".full-project-container h4").innerHTML = project[i].querySelector(".project p").innerHTML;
                      
                        document.querySelector(".project-load").innerHTML = this.responseText;
                    }
                };
                xhr.send();
            });
        }
    }

    loadContent();
}

portfolioProject();
