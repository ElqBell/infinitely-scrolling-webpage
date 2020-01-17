window.onscroll = () => {
    if ((window.innerHeight + window.scrollY - 1) >= document.body.offsetHeight) {
        window.location.href = "#first";
    }
}

document.onwheel = () => {
    if(window.scrollY == 0) {
        window.location.href = "#second";
    }
}