(function() {

    var paper = Raphael("canvas", 640, 480);
    var figure = null;

    function posRelativeToElement(elem, ev) {
        var $elem = $(elem),
        ePos = $elem.offset(),
        mousePos = {x: ev.pageX, y: ev.pageY};

        mousePos.x -= ePos.left + parseInt($elem.css('paddingLeft')) + parseInt($elem.css('borderLeftWidth'));
        mousePos.y -= ePos.top + parseInt($elem.css('paddingTop')) + parseInt($elem.css('borderTopWidth'));

        return mousePos;
    };

    function distance(a, b) {
        var x = b.x - a.x;
        var y = b.y - a.y;

        return Math.sqrt(x*x + y*y);
    }

    $("#canvas").on("click", function(e) {
        var mousePos = posRelativeToElement(this, e);
        if (figure) {
            if (!figure.a) {
                figure.a = mousePos;
            } else if (!figure.b) {
                figure.b = mousePos;
                paper[figure.type](figure.a.x, figure.a.y, distance(figure.a, figure.b));
                figure = null;
            }
        }
        mousePos = null;
    });

    $("#clear").on("click", function() {
        paper.clear();
        figure = null;
    });

    $("#circle").on("click", function() {
        figure = { type: "circle" };
    });

    $("#rectangle").on("click", function() {
        figure = { type: "rectangle" };
    });
}());
