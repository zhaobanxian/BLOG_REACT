
var imgmoveModel = {
    stl: 0,
    maxmovebilv: 0.8
}

//触摸移动
function tcmove() {
    var event = window.event;
    if (!imgmoveModel.stl)
        imgmoveModel.stl = event.changedTouches[0].clientX;
    setAnimation();
}

//触摸结束
function tcend(event) {
    imgmoveModel.stl = 0;
    endAnimation();
}

function setAnimation() {
    var event = window.event;
    var tagment = event.changedTouches[0].target;
    tagment.style.transitionDuration = "0s";
    var x = event.changedTouches[0].clientX - imgmoveModel.stl;

    if (Math.abs(x) > tagment.width * imgmoveModel.maxmovebilv) {
        x = x > 0 ? tagment.width * imgmoveModel.maxmovebilv : -1 * tagment.width * imgmoveModel.maxmovebilv;
    }
    var tagmentcss = "translateX(" + x + "px)";
    tagment.style.transform = tagmentcss;
}

function endAnimation() {
    var event = window.event;
    var tagment = event.changedTouches[0].target;
    var tagmentcss = "translateX(0px)";
    tagment.style.transitionDuration = "0.5s";
    tagment.style.transform = tagmentcss;
}