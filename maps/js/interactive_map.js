var strokeWidthArray={};
var strokeWidthTempArray={};
var poiResizeConstant=0.7;
var poiDefaultSize=12;
var poiResizeWindow=25000;
var poiResizeWindowControl=5;

poiDefaultSize=poiResizeWindow/window.innerWidth + poiResizeWindowControl;

// display the image, title, and description of geo items 
// on the info panel (left)
function displayImage(name) {
    document.getElementById('info-panel-img').src = name;
}
function displayName(name) {
    document.getElementById('info-panel-name').firstChild.data = name;
}
function displayDesc(name) {
    document.getElementById('info-panel-desc').innerHTML = name;
}
function infoPanelClick() {
    displayImage(this.getElementsByTagName('desc')[0].innerHTML.split(';')[1]);
    displayName(this.getElementsByTagName('title')[0].innerHTML);
    displayDesc(this.getElementsByTagName('desc')[0].innerHTML.split(';')[0]);

    document.getElementsByClassName('info-panel-left')[0].classList.add("show");

    // remove sidebar nav highlight for city info
    $(".sidebar-nav-item").removeClass("active");
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


// path layer mouse actions
function pathMouseOver() {
    strokeWidthTempArray[this.id] = getSvgStyleValue(this, "stroke-width");
    editSvgStyle(this, "stroke-width", strokeWidthTempArray[this.id] * 3);
    editSvgStyle(this, "cursor", "pointer");
}
function pathMouseOut() {
    editSvgStyle(this, "stroke-width:", strokeWidthTempArray[this.id]);
    editSvgStyle(this, "cursor", "default");
}

// location layer mouse actions
function locationMouseOver() {
    editSvgStyle(this, "cursor", "pointer");
}
function locationMouseOut() {
    editSvgStyle(this, "cursor", "default");
}
function setSvgIcon(item, iconName) {
    editSvgStyle(item, "fill:", "url(#" + iconName +")");
}


// info panel actions
function closePanelLeft(className) {
    document.getElementsByClassName(className)[0].classList.remove('show');
}
function closePanelRight(className) {
    document.getElementsByClassName(className)[0].classList.remove('show');
}
function openPanel(className) {
    document.getElementsByClassName(className)[0].classList.add('show');
}


// map layer actions
function toggleLayer(layerName) {
    var svgObject = document.getElementById('svg-object').contentDocument;
    var item = svgObject.getElementById(layerName);
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
function getSvgStyleValue(item, param) {
    var style = d3.select(item).attr('style').split(";");
    var value = "";
    style.forEach(function (item, index) {
        if (item.startsWith(param)) {
            value = style[index].split(":")[1];
        }
    });
    return value;
}
function setSvgDefaultValue(item, param) {
    var defaultValue = getSvgStyleValue(item, param);
    strokeWidthArray[d3.select(item).attr("id")] = defaultValue;
}




// set up
window.addEventListener("load", function() {



// change poi icon size


    window.addEventListener('resize', function(event) {
        poiDefaultSize=poiResizeWindow/window.innerWidth + poiResizeWindowControl;
    });


    var svgObject = document.getElementById('svg-object').contentDocument;
    // resize SVG object to div
    var svgAttItem = svgObject.getElementById('svg8');
    svgAttItem.setAttribute("width", "100%");
    svgAttItem.setAttribute("height", "100%");
    // svgAttItem.setAttribute("viewBox", "0 0 300 300");

    // test mouseover
    //districts
    var items = svgObject.querySelectorAll(`[id^="district-"]`);
    items.forEach((item, index) => {
        item.addEventListener("mouseover", districtMouseOver, false);
        item.addEventListener("mouseout", districtMouseOut, false);
        item.addEventListener("click", infoPanelClick, false);
        setSvgDefaultValue(item, "stroke-width");
    });
    // pois
    var items = svgObject.querySelectorAll(`[id^="loc-"]`);
    items.forEach((item, index) => {
        item.addEventListener("mouseover", locationMouseOver, false);
        item.addEventListener("mouseout", locationMouseOut, false);
        item.addEventListener("click", infoPanelClick, false);
        setSvgDefaultValue(item, "stroke-width");

        // set svg fill pattern for PoI icons
        iconName = item.getElementsByTagName('desc')[0].innerHTML.split(';')[2];
        d3.select(svgAttItem).select('defs').append("svg:pattern")
                 .attr("id", iconName)
                 .attr("class", "poiicon")
                 .attr("width", poiDefaultSize)
                 .attr("height", poiDefaultSize)
                 .append("svg:image")
                 .attr("xlink:href", "/maps/images/location_icons/" + iconName + ".png")
                 .attr("width", poiDefaultSize)
                 .attr("height", poiDefaultSize)
                 .attr("x", 0)
                 .attr("y", 0);
        setSvgIcon(item, iconName);
    });
    var svg = d3.select(svgObject).select('svg');
    svg.select('#layer-poi').selectAll('circle').each(function(d, i) {
            d3.select(this).attr("r", poiDefaultSize * 0.5 * poiResizeConstant);
        });
        // set default poi icon size
        svg.selectAll('.poiicon').select('image')
                             .attr('width', poiDefaultSize * poiResizeConstant)
                             .attr('height', poiDefaultSize * poiResizeConstant);
    // paths
    for (let i = 1; i < 2; i++) {
        var item = svgObject.getElementById('path' + i);
        //item.addEventListener("mouseover", pathMouseOver, false);
        //item.addEventListener("mouseout", pathMouseOut, false);
        //item.addEventListener("click", infoPanelClick, false);
        //setSvgDefaultValue(item, "stroke-width");
    }
    // hide path layer by default
    toggleLayer("layer-path");
    // texts
    var svg = d3.select(svgObject).select('svg');
    svg.selectAll('tspan').each(function(d, i) {
        setSvgDefaultValue(this, "font-size");
    });


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
        svg.selectAll('g').selectAll('circle')
                          .attr('transform', event.transform);
        svg.selectAll('g').selectAll('text')
                          .attr('transform', event.transform);

        //do not scale icon size
        svg.select('#layer-poi').selectAll('circle').each(function(d, i) {
            d3.select(this).attr("r", 0.5 * poiDefaultSize / event.transform.k * poiResizeConstant);
        });
        svg.selectAll('.poiicon').select('image')
                             .attr('width', poiDefaultSize / event.transform.k * poiResizeConstant)
                             .attr('height', poiDefaultSize / event.transform.k * poiResizeConstant);

        //do not scale stroke widths
        svg.selectAll('g').selectAll('path').each(function(d, i) {
            // the item to edit, the param to change, the new value for param
            var oldValue = strokeWidthArray[this.id];
            if (oldValue != null) {
                editSvgStyle(this, "stroke-width", oldValue / event.transform.k);
            }
            
        });
        svg.selectAll('g').selectAll('circle').each(function(d, i) {
            // the item to edit, the param to change, the new value for param
            var oldValue = strokeWidthArray[this.id];
            if (oldValue != null) {
                editSvgStyle(this, "stroke-width", oldValue / event.transform.k);
            }
            
        });

        // do not scale font sizes
        svg.selectAll('g').selectAll('tspan').each(function(d, i) {
            var oldValue = strokeWidthArray[this.id];
            if (oldValue != null) {
                editSvgStyle(this, 
                             "font-size", 
                             parseFloat(oldValue.slice(0,-2)) / event.transform.k + "px");
            }
        });

    }
    const zoom = d3.zoom().scaleExtent([1, 40])
                          .on('zoom', handleZoom);                 
    svg.call(zoom)
       .call(zoom.transform, d3.zoomIdentity.translate(-50, 0).scale(2));
});



