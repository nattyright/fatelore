// display the image, title, and description of geo items 
// on the info panel (left)
function displayImage(name) {
    document.getElementById('info-panel-img').src = name;
}
function displayName(name) {
    document.getElementById('info-panel-name').firstChild.data = name;
}
function displayDesc(name) {
    document.getElementById('info-panel-desc').firstChild.data = name;
}
function infoPanelClick() {
    displayImage(this.getElementsByTagName('desc')[0].innerHTML.split(';')[1]);
    displayName(this.getElementsByTagName('title')[0].innerHTML);
    displayDesc(this.getElementsByTagName('desc')[0].innerHTML.split(';')[0]);

    document.getElementsByClassName('info-panel-left')[0].classList.add("show");
}


// district layer mouse actions
function districtMouseOver() {
    editSvgStyle(this, "fill:", "#2a7fff");
    editSvgStyle(this, "cursor", "pointer");
}
function districtMouseOut() {
    editSvgStyle(this, "fill:", "#aaccff");
    editSvgStyle(this, "cursor", "default");
}


// location layer mouse actions
function locationMouseOver() {
    editSvgStyle(this, "cursor", "pointer");
}
function locationMouseOut() {
    editSvgStyle(this, "cursor", "default");
}



// info panel actions
function closePanel(className) {
    document.getElementsByClassName(className)[0].classList.remove('show');
}


// map layer actions
function toggleDistrict() {
    var svgObject = document.getElementById('svg-object').contentDocument;
    var item = svgObject.getElementById('layer-district');
    item.classList.toggle('hide');
    if (item.classList.contains('hide')) {
        editSvgStyle(item, 'display:', 'none');
    } else {
        editSvgStyle(item, 'display:', 'inline');
    }
}



// helper funcs
// change a specific param in svg object style - remember param need ':'
// for ambiguous params!
function editSvgStyle(item, param, newValue) {
    var style = d3.select(item).attr('style').split(";");
    var found = 0;
    style.forEach(function (item, index) {
        if (item.startsWith(param)) {
            if (param.endsWith(":")) {
                style[index] = param + newValue;
            } else {
                style[index] = param + ":" + newValue;
            }
            found = 1;
        }
    });
    // if the param doesn't exist - add new
    if (found == 0) {
        if (param.endsWith(":")) {
                style.push(param + newValue);
            } else {
                style.push(param + ":" + newValue);
            }
    }
    d3.select(item).attr('style', style.join(";"));
    //console.log(d3.select(item).attr('style'));
}




window.addEventListener("load", function() {

    var svgObject = document.getElementById('svg-object').contentDocument;
    // resize SVG object to div
    var svgAttItem = svgObject.getElementById('svg8');
    svgAttItem.setAttribute("width", "100%");
    svgAttItem.setAttribute("height", "100%");
    //svgAttItem.setAttribute("viewBox", "0 0 800mm 800mm");
    // test mouseover
    for (let i = 1; i < 6; i++) {
        var item = svgObject.getElementById('n' + i + '-over');
        item.addEventListener("mouseover", districtMouseOver, false);
        item.addEventListener("mouseout", districtMouseOut, false);
        item.addEventListener("click", infoPanelClick, false);
        var item = svgObject.getElementById('s' + i + '-over');
        item.addEventListener("mouseover", districtMouseOver, false);
        item.addEventListener("mouseout", districtMouseOut, false);
        item.addEventListener("click", infoPanelClick, false);
    }
    for (let i = 1; i < 3; i++) {
        var item = svgObject.getElementById('c' + i + '-over');
        item.addEventListener("mouseover", districtMouseOver, false);
        item.addEventListener("mouseout", districtMouseOut, false);
        item.addEventListener("click", infoPanelClick, false);
    }
    for (let i = 1; i < 5; i++) {
        var item = svgObject.getElementById('loc' + i);
        item.addEventListener("mouseover", locationMouseOver, false);
        item.addEventListener("mouseout", locationMouseOut, false);
        item.addEventListener("click", infoPanelClick, false);
    }


    // add d3 zoom
    var svg = d3.select(svgObject).select('svg');
    //console.log(svg.select('#layer-district').selectAll('path'));
    //const handleZoom = (e) => svg.attr('transform', e.transform);
    function handleZoom(event) {
        //perform transform on all paths and images
        svg.selectAll('g').selectAll('path')
                          .attr('transform', event.transform);
        svg.selectAll('g').selectAll('image')
                          .attr('transform', event.transform);

        //do not scale icon size
        svg.select('layer-poi').selectAll('image')
                            .attr("width", 12.412697 / event.transform.k)
                            .attr("height", 12.412697 / event.transform.k);

        //do not scale stroke widths
        svg.selectAll('g').selectAll('path').each(function(d, i) {
            // the item to edit, the param to change, the new value for param
            editSvgStyle(this, "stroke-width", 0.2 / event.transform.k);
        });
    }
    const zoom = d3.zoom().scaleExtent([1, 5])
                          .on('zoom', handleZoom);
    svg.call(zoom);
});



