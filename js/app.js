

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        window.scrollTo(0, 0);
        document.querySelector(".site").style.visibility = "hidden";
        document.querySelector(".site").style.display = "none";
        document.querySelector("body").style.overflow = "hidden";

        document.querySelector(".loadingpae").style.display = "initial";



    } else {
      setInterval(function() {
        document.querySelector(".site").style.visibility = "initial";
        document.querySelector("body").style.overflow = "initial";
        document.querySelector(".title2").style.display = "none";
        document.querySelector(".load-txt").style.display = "none";
        document.querySelector(".coffee").style.display = "none";
        document.querySelector(".site").style.display = "initial";
      }, 2000);

    }
};


function inicio() {
  window.scrollTo(0, 0);

}

function Projetos() {
  window.scrollTo(720, 720);

}

function abboutt() {
  window.scrollTo(1400, 1400);

}
