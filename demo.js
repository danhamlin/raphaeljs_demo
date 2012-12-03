(function() {

    // initialize the canvas
    var paper = Raphael("canvas", 640, 480);
    
    // we'll need this later when drawing figures
    var figure = null;

    // find out where someone clicked inside of elem (relative to top left)
    // found this here: http://stackoverflow.com/a/5776140/354261
    function posRelativeToElement(elem, ev) {
        var $elem = $(elem),
        ePos = $elem.offset(),
        mousePos = {x: ev.pageX, y: ev.pageY};

        mousePos.x -= ePos.left + parseInt($elem.css('paddingLeft')) + parseInt($elem.css('borderLeftWidth'));
        mousePos.y -= ePos.top + parseInt($elem.css('paddingTop')) + parseInt($elem.css('borderTopWidth'));

        return mousePos;
    };

    // find the distance between a and b
    function distance(a, b) {
        var x = b.x - a.x;
        var y = b.y - a.y;

        return Math.sqrt(x*x + y*y);
    }

    // event listeners
    // canvas clicks
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

    // clear button clicks
    $("#clear").on("click", function() {
        paper.clear();
        figure = null;
    });

    // circle button clicks
    $("#circle").on("click", function() {
        figure = { type: "circle" };
    });

    // rectangle button clicks
    $("#rectangle").on("click", function() {
        figure = { type: "rect" };
    });

}());
