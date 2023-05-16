

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".title2").style.visibility = "visible";
        document.querySelector(".load-txt").style.visibility = "visible";
        document.querySelector(".coffee").style.visibility = "visible";
    } else {
      setInterval(function() {
        document.querySelector("body").style.visibility = "initial";
        document.querySelector("body").style.overflow = "initial";
        document.querySelector(".title2").style.visibility = "hidden";
        document.querySelector(".load-txt").style.visibility = "hidden";
        document.querySelector(".coffee").style.visibility = "hidden";
      }, 1000);

    }
};

