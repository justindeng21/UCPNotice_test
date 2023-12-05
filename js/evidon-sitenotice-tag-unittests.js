function _readCookies() {
    var aN = "";
    if (window.evidon.uriEncodeCookie) {
        var aP = decodeURI(document.cookie);
        aN = aP.split(";")
    } else if(window.evidon.uriEncodeComponentCookie){
        var aP = decodeURIComponent(document.cookie);
        aN = aP.split(";")            
    } else {
        aN = document.cookie.split(";")
    }
    var aO = [];
    for (var aR = 0; aR < aN.length; aR++) {
        var aT = aN[aR];
        var aS = aT.slice(0, aT.indexOf("=")).replace(/^\s+|\s+$/g, "");
        var aU = aT.slice(aT.indexOf("=") + 1);
        var aM = {
            name: aS
        };
        try {
            aM.value = JSON.parse(aU)
        } catch (aQ) {
            aM.value = aU
        }
        aO.push(aM)
    }
    return aO
}
;