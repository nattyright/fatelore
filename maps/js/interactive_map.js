function displayImage(name) {
    document.getElementById('district-img').src = name;
}
function displayName(name) {
    document.getElementById('district-name').firstChild.data = name;
}
function displayDesc(name) {
    document.getElementById('district-desc').firstChild.data = name;
}


function districtMouseOver() {
    this.setAttribute("style", "fill:blue;");
    displayImage(this.getElementsByTagName('desc')[0].innerHTML.split(';')[1]);
    displayName(this.getElementsByTagName('title')[0].innerHTML);
    displayDesc(this.getElementsByTagName('desc')[0].innerHTML.split(';')[0]);
    this.classList.add('bar-highlight');
}
function districtMouseOut() {
    this.setAttribute("style", "fill:#ac8fd3;fill-opacity:1;stroke:#ffffff;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1");
    this.classList.remove('bar-highlight');
}



function locationMouseOver() {
    this.setAttribute("style", "cursor:pointer;fill:red;fill-rule:evenodd;stroke:none;stroke-width:0.264583");
}
function locationMouseOut() {
    this.setAttribute("style", "cursor:default;fill:#00ff66;fill-rule:evenodd;stroke:none;stroke-width:0.264583");
}

function displayLocImage(name) {
    document.getElementById('loc-img').src = name;
}
function displayLocName(name) {
    document.getElementById('loc-name').firstChild.data = name;
}
function displayLocDesc(name) {
    document.getElementById('loc-desc').firstChild.data = name;
}

function locationClick() {
    this.classList.add('popup');
    this.classList.toggle("show");
    displayLocImage(this.getElementsByTagName('desc')[0].innerHTML.split(';')[1]);
    displayLocName(this.getElementsByTagName('title')[0].innerHTML);
    displayLocDesc(this.getElementsByTagName('desc')[0].innerHTML.split(';')[0]);

}




function toggleDistrict() {
    var svgObject = document.getElementById('svg-object').contentDocument;
    var item = svgObject.getElementById('district-over');
    item.getAttribute("style") === "display:none" ? item.setAttribute("style", "display:inline") : item.setAttribute("style", "display:none");
}





window.addEventListener("load", function() {

    var svgObject = document.getElementById('svg-object').contentDocument;
    // resize SVG object to div
    var svgAttItem = svgObject.getElementById('svg8');
    //svgAttItem.setAttribute("width", "400mm");
    //svgAttItem.setAttribute("height", "400mm");
    //svgAttItem.setAttribute("viewBox", "0 0 800mm 800mm");
    // test mouseover
    var item = svgObject.getElementById('n1-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('n2-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('n3-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('n4-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('n5-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('s1-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('s2-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('s3-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('s4-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('s5-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('c1-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);
    var item = svgObject.getElementById('c2-over');
    item.addEventListener("mouseover", districtMouseOver, false);
    item.addEventListener("mouseout", districtMouseOut, false);


    var item = svgObject.getElementById('loc1');
    item.addEventListener("mouseover", locationMouseOver, false);
    item.addEventListener("mouseout", locationMouseOut, false);
    item.addEventListener("click", locationClick, false);
    var item = svgObject.getElementById('loc2');
    item.addEventListener("mouseover", locationMouseOver, false);
    item.addEventListener("mouseout", locationMouseOut, false);
    item.addEventListener("click", locationClick, false);
    var item = svgObject.getElementById('loc3');
    item.addEventListener("mouseover", locationMouseOver, false);
    item.addEventListener("mouseout", locationMouseOut, false);
    item.addEventListener("click", locationClick, false);


    var svg = d3.select(svgObject).select('svg');
    //console.log(svg.select('#district-over').selectAll('path'));
    //const handleZoom = (e) => svg.attr('transform', e.transform);
    function handleZoom(event) {
        //svg.attr('transform', event.transform);
        svg.selectAll('g').selectAll('path').attr('transform', event.transform);
    }
    const zoom = d3.zoom().scaleExtent([1, 5]).on('zoom', handleZoom);
    svg.call(zoom);
});



