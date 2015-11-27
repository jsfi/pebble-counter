var Vector2 = require('vector2');
var UI = require('ui');
var w = new UI.Window();
var size = new Vector2(136, 28);

var up = 0;
var upText = new UI.Text({
    text: up,
    textAlign: 'right',
    position: new Vector2(4, 0),
    size: size
});
w.add(upText);

var select = 0;
var selectText = new UI.Text({
    text: select,
    textAlign: 'right',
    position: new Vector2(4, 62),
    size: size
});
w.add(selectText);

var down = 0;
var downText = new UI.Text({
    text: down,
    textAlign: 'right',
    position: new Vector2(4, 124),//128
    size: size
});
w.add(downText);

w.show();

w.on('click', function(e) {
    switch(e.button) {
        case 'up':
            upText.text(++up);
        break;
        case 'select':
            selectText.text(++select);
        break;
        case 'down':
            downText.text(++down);
        break;
    }
});
