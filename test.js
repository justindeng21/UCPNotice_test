var ac = function() {
    var aN = null
      , aM = false
      , aQ = this;
    function aO() {

        var aT = document
          , aW = window.evidon.notice.isMobile()
          , aX = aT.createElement("a");
        aX.href = "#";
        aX.className = ad;
        aX.tabIndex = 0;
        var aY = aT.createElement("span");
        aY.id = ak;
        aY.className = aj;
        if (aW && aN.mobileShowIcon && aN.mobileLinkIcon) {
            var aV = aT.createElement("img");
            aV.src = aN.mobileLinkIcon;
            aV.style.cssText = "vertical-align:bottom;";
            aV.className = ai;
            aV.alt = "AdChoices Icon";
            aX.appendChild(aV);
            aY.style.cssText = "margin-left: 6px;"
        } else {
            if (!aW && aN.showIcon && aN.linkIcon) {
                var aV = aT.createElement("img");
                aV.src = aN.linkIcon;
                aV.className = ai;
                aV.style.cssText = "vertical-align:bottom;";
                aV.alt = "AdChoices Icon";
                aX.appendChild(aV);
                aY.style.cssText = "margin-left: 6px;"
            }
        }
        aX.appendChild(aY);
        if (aW) {
            aX.style.cssText = aN.mobileLinkStyle
        } else {
            aX.style.cssText = aN.linkStyle
        }
        var aS = [];
        if (aT.getElementsByClassName !== undefined) {
            aS = aT.getElementsByClassName(ag)
        } else {
            aS = aT.querySelectorAll("." + ag)
        }
        if (aS.length === 0) {
            console.log("Evidon -- " + ag + " not found on page, cant display the consent link.")
        }
        for (var aU = 0; aU < aS.length; aU++) {
            var aR = aX.cloneNode(true);
            aR.onclick = aP;
            aS[aU].appendChild(aR)
        }
        aM = true;
        var aZ = window.evidon.notice.getTranslations();
        if (aZ) {
            aQ.setLinkText(aZ)
        }
    }
    function aP(aR) {
        if (aR.stopPropagation) {
            aR.stopPropagation()
        }
        window.evidon.notice.dropPixel(ae);
        window.evidon.notice.showOptions(null)
    }
    this.setLinkText = function(aX) {
        if (!aM || !aX) {
            return
        }
        var aW = window.evidon.notice;
        aW.dropPixel(af);
        var aT = window.evidon.notice.isMobile();
        var aU = null
          , aR = document
          , aV = aW.isUSOptOutRegulation() ? (aT ? aX.mobileDoNotSell : aX.doNotSell) : (aT ? aX.mobileLinkText : aX.linkText);
        if (aR.getElementsByClassName !== undefined) {
            aU = aR.getElementsByClassName(aj)
        } else {
            aU = aR.querySelectorAll("." + aj)
        }
        if (aV) {
            for (var aS = 0; aS < aU.length; aS++) {
                aU[aS].innerText = aV
            }
        }
    }
    ;
    this.createLink = function(aR) {
        if (aR) {
            aN = aR
        } else {
            aN = window.evidon.notice.getLinkStyle()
        }
        if (!aN) {
            return
        }
        aO()
    }
};



var k = new ac()
k.createLink()
