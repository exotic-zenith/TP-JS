var nod1 = document.getElementById('colorPicker');
nod1.addEventListener('input', function() {
    updateStyle('color', this.value);
});

var nod2 = document.getElementById('fontSize');
nod2.addEventListener('input', function() {
    updateStyle('fontSize', this.value + 'px');
});

var nod3 = document.getElementById('fontFamily');
nod3.addEventListener('change', function() {
    updateStyle('fontFamily', this.value);
});

function updateStyle(property, value) {
    document.getElementById('text').style[property] = value;
}
