(function() {

    var paper = Raphael("canvas", 640, 480);
    var type = null;

    function posRelativeToElement(elem, ev) {
        var $elem = $(elem),
        ePos = $elem.offset(),
        mousePos = {x: ev.pageX, y: ev.pageY};

        mousePos.x -= ePos.left + parseInt($elem.css('paddingLeft')) + parseInt($elem.css('borderLeftWidth'));
        mousePos.y -= ePos.top + parseInt($elem.css('paddingTop')) + parseInt($elem.css('borderTopWidth'));

        return mousePos;
    };

    $(function() {
       var circle = paper.circle(320, 240, 200);
        circle.attr("fill", "#00f");
        circle.attr("stroke", "#007");
    });

    $("#canvas").on("click", function(e) {
        var mousePos = posRelativeToElement(this, e);
        alert("X: " + mousePos.x + "  Y: " + mousePos.y);
        mousePos = null;
    });

    $("#clear").on("click", function() {
        paper.clear();
        type = null;
    });

    $("#circle").on("click", function() {
        type = "circle";
    });

    $("#rectangle").on("click", function() {
        type = "rectangle";
    });
}());
