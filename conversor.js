

var cuisines = ["AR", "BR", "PY", "CH", "BL","UY"];     

var sel = document.getElementById('CuisineList');
for(var i = 0; i < cuisines.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = cuisines[i];
    opt.value = cuisines[i];
    sel.appendChild(opt);
}

