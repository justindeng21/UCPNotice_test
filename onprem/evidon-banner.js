(function() {
    if (!String.prototype.includes) {
        String.prototype.includes = function(G, H) {
            if (G instanceof RegExp) {
                throw TypeError("first argument must not be a RegExp")
            }
            if (H === undefined) {
                H = 0
            }
            return this.indexOf(G, H) !== -1
        }
    }
    var n = "_evidon_banner"
      , v = "_evh-ric-c"
      , y = "_evh-learn"
      , z = "_evh-ric-l"
      , b = "_evidon-background"
      , F = "_evidon-title"
      , A = "_evidon-message"
      , w = "_evidon-collapse-message"
      , x = "_evidon-decline-button"
      , a = "_evidon-accept-button"
      , C = "_evidon-option-button"
      , B = 800;
    var l = 4
      , h = 8
      , u = 10
      , e = 11
      , s = 13
      , k = 31
      , q = 49;
    var D = 1
      , E = 2;
    var f = "evidon-background"
      , g = "evidon-banner"
      , t = "evidon-banner-title"
      , p = "evidon-banner-message"
      , i = "evidon-banner-collapse-message"
      , o = "evidon-banner-image"
      , m = "evidon-banner-icon"
      , j = "evidon-banner-declinebutton"
      , d = "evidon-banner-acceptbutton"
      , r = "evidon-banner-optionbutton";
    var c = function() {
        var K = this
          , V = window.evidon.notice
          , R = document
          , L = null
          , I = false
          , J = false
          , H = null;
        function U() {
            if (R.documentMode === undefined) {
                return 0
            } else {
                return R.documentMode
            }
        }
        function G(Z) {
            var Y = window.evidon.notice._parseCss(Z);
            if (!Y.hasOwnProperty("cursor")) {
                Y.cursor = "pointer"
            }
            return window.evidon.notice._joinCss(Y)
        }
        function N(Y) {
            var Z = Y.style.cssText;
            if (Z) {} else {
                Y.onMouseOver = "";
                Y.onMouseOut = ""
            }
        }
        function O(Y) {
            V.consentGiven(true, true, true, true)
        }
        function Q(Y) {
            if (H) {
                clearTimeout(H)
            }
            (V.regulationConsentTypeId === E) ? window.evidon.notice.dropPixel(e) : window.evidon.notice.dropPixel(k);
            window.evidon.notice.declineGiven();
            if (V.regulationConsentTypeId === E) {
                window.evidon.notice.postVendorChoices(e)
            } else {
                window.evidon.notice.postVendorChoices(k)
            }
        }
        function M(Y) {
            if (H) {
                clearTimeout(H)
            }
            O(Y);
            window.evidon.notice.dropPixel(e);
            window.evidon.notice.postVendorChoices(e)
        }
        function T() {
            if (H) {
                clearTimeout(H)
            }
            K.closeConsentBanner();
            window.evidon.events.subscribe("l2closed", function(Y) {
                if (window.evidon.notice._shouldShowConsentUI()) {
                    K.showConsentBanner();
                    X()
                } else {
                    K.destroyNotice();
                    window.evidon.notice.showNotice()
                }
            }, 1)
        }
        function W(Y) {
            if (H) {
                clearTimeout(H)
            }
            V.dropPixel(s);
            V.showOptions();
            T()
        }
        function P(Y) {
            if (H) {
                clearTimeout(H)
            }
            if (V.regulationConsentTypeId !== 2 && (V.closeConsentEnabled || !V.consentRequired)) {
                V.dropPixel(u);
                V.consentGiven(true, true, true, true)
            } else {
                V.closeGiven()
            }
        }
        function X() {
            if (typeof V.displaytimeout !== "undefined" && V.displaytimeout > 0) {
                var Y = V.displaytimeout * 1000;
                H = setTimeout(function() {
                    V.closeGiven()
                }, Y)
            }
        }
        function S(Y, Z) {
            return Y.indexOf(Z, Y.length - Z.length) !== -1
        }
        this.hideForOptions = function() {
            T()
        }
        ;
        this.isOnBanner = function(Y) {
            if (!Y) {
                return false
            } else {
                if (Y.id && Y.id == n) {
                    return true
                } else {
                    if (Y.localName.toLowerCase() == "html") {
                        return false
                    } else {
                        if (!Y.parentElement) {
                            return false
                        } else {
                            return K.isOnBanner(Y.parentElement)
                        }
                    }
                }
            }
        }
        ;
        this.closeConsentBanner = function() {
            var Y = R.getElementById(n)
              , aa = 100;
            if (!Y) {
                return
            }
            Y.style.cssText = Y.style.cssText.replace(/opacity.*!important;/, "");
            var Z = setInterval(function() {
                aa -= 10;
                Y.style.opacity = (aa / 100);
                Y.style.filter = "alpha(opacity=" + aa + ")";
                if (aa <= 0) {
                    clearInterval(Z);
                    Y.style.display = "none"
                }
            }, 50)
        }
        ;
        this.showConsentBanner = function() {
            var Y = R.getElementById(n)
              , ab = 0;
            if (!Y) {
                return
            }
            var Z = this.getBannerStyle();
            Y.style.cssText = Z.replace(/opacity.*!important;/, "opacity: 0 !important;");
            var ac = window.evidon.notice._parseCss(Z);
            if (ac.hasOwnProperty("display") && ac.display) {
                Y.style.display = ac.display
            } else {
                Y.style.display = "block"
            }
            var aa = setInterval(function() {
                ab += 10;
                Y.style.opacity = (ab / 100);
                Y.style.filter = "alpha(opacity=" + ab + ")";
                if (ab >= 100) {
                    clearInterval(aa)
                }
            }, 50)
        }
        ;
        this.getBannerStyle = function() {
            var Y = (I) ? L.mobileBannerStyle : L.bannerStyle;
            if (!S(Y, ";")) {
                Y += ";"
            }
            if (Y.indexOf("position:") === -1) {
                Y += "position:fixed;"
            }
            if (Y.indexOf("z-index") === -1) {
                Y += "z-index:2147483647;"
            }
            if (U() == "9") {
                Y = Y.replace("position:fixed", "position:absolute")
            } else {
                Y = Y.replace("position:absolute", "position:fixed")
            }
            return Y
        }
        ;
        this.createDeclineButton = function() {
            var Y = R.createElement("button");
            Y.id = x;
            Y.className = j;
            Y.style.cssText = (I) ? G(L.mobileDeclineButtonStyle) : G(L.declineButtonStyle);
            Y.onclick = Q;
            return Y
        }
        ;
        this.createAcceptButton = function() {
            var Y = R.createElement("BUTTON");
            Y.id = a;
            Y.className = d;
            Y.style.cssText = (I) ? G(L.mobileAcceptButtonStyle) : G(L.acceptButtonStyle);
            Y.onclick = M;
            Y.setAttribute("aria-label", "Accept");
            return Y
        }
        ;
        this.createOptionButton = function() {
            var Y = R.createElement("BUTTON");
            Y.id = C;
            Y.className = r;
            Y.style.cssText = (I) ? G(L.mobileOptionButtonStyle) : G(L.optionButtonStyle);
            Y.onclick = W;
            Y.setAttribute("role", "button");
            Y.setAttribute("aria-label", "options");
            Y.tabIndex = 0;
            return Y
        }
        ;
        this.createCloseIcon = function() {
            var Z = (I) ? G(L.mobileCloseIconStyle) : G(L.closeIconStyle);
            var aa = (I) ? L.mobileCloseIconStroke : L.closeIconStroke;
            var ab = (I) ? L.mobileCloseIconWidth : L.closeIconWidth;
            var Y = window.evidon.notice._createCloseIcon(Z, v, m, aa, ab);
            Y.onclick = P;
            return Y
        }
        ;
        this.createBanner = function() {
            var Z = R.createElement("div");
            Z.id = n;
            Z.className = g;
            Z.tabIndex - 0;
            Z.setAttribute("role", "dialog");
            Z.setAttribute("aria-label", "Cookie notice banner");
            R.getElementsByTagName("body")[0].appendChild(Z);
            Z.style.cssText = K.getBannerStyle();
            var an = (I ? L.mobileShowTitle : L.showTitle);
            var ap = null;
            if (an) {
                ap = R.createElement("div");
                ap.id = F;
                ap.className = t;
                ap.style.cssText = (I) ? L.mobileTitleStyle : L.titleStyle;
                Z.appendChild(ap)
            }
            var ah = R.createElement("div");
            ah.id = A;
            ah.className = p;
            ah.style.cssText = (I) ? L.mobileMessageStyle : L.messageStyle;
            Z.appendChild(ah);
            if (I && L.mobileShowCollapseMessage) {
                if (ap) {
                    ap.style.display = "none"
                }
                ah.style.display = "none";
                var ab = R.createElement("div");
                ab.id = w;
                ab.className = i;
                ab.style.cssText = L.mobileCollapseMessageStyle;
                ab.onclick = function() {
                    ab.style.display = "none";
                    ah.style.display = "";
                    if (ap) {
                        ap.style.display = ""
                    }
                }
                ;
                Z.appendChild(ab)
            }
            if (I) {
                var al = (window.evidon.notice.enableDeclineButton !== null) ? window.evidon.notice.enableDeclineButton : L.mobileShowDeclineButton;
                var am = (window.evidon.notice.enableOptionsButton !== null) ? window.evidon.notice.enableOptionsButton : (typeof L.mobileShowOptionButton !== "undefined" && L.mobileShowOptionButton);
                var aj = (window.evidon.notice.enableAcceptButton !== null) ? window.evidon.notice.enableAcceptButton : L.mobileShowAcceptButton;
                if (al) {
                    Z.appendChild(K.createDeclineButton())
                }
                if (aj) {
                    Z.appendChild(K.createAcceptButton())
                }
                if (L.mobileShowCloseIcon) {
                    Z.appendChild(this.createCloseIcon())
                }
                if (am) {
                    Z.appendChild(this.createOptionButton())
                }
                if (L.mobileShowIcon && L.mobileBannerIcon) {
                    var af = R.createElement("img");
                    af.className = o;
                    af.alt = "Logo Evidon";
                    af.style.cssText = L.mobileIconStyle;
                    af.src = L.mobileBannerIcon;
                    Z.appendChild(af)
                }
            } else {
                var al = (window.evidon.notice.enableDeclineButton !== null) ? window.evidon.notice.enableDeclineButton : L.showDeclineButton;
                var am = (window.evidon.notice.enableOptionsButton !== null) ? window.evidon.notice.enableOptionsButton : (typeof L.showOptionButton !== "undefined" && L.showOptionButton);
                var aj = (window.evidon.notice.enableAcceptButton !== null) ? window.evidon.notice.enableAcceptButton : L.showAcceptButton;
                if (al) {
                    Z.appendChild(this.createDeclineButton())
                }
                if (aj) {
                    Z.appendChild(this.createAcceptButton())
                }
                if (am) {
                    Z.appendChild(this.createOptionButton())
                }
                if (L.showCloseIcon) {
                    Z.appendChild(this.createCloseIcon())
                }
                if (L.showIcon && L.bannerIcon) {
                    var af = R.createElement("img");
                    af.className = o;
                    af.alt = "Logo Evidon";
                    af.style.cssText = L.iconStyle;
                    af.src = L.bannerIcon;
                    Z.appendChild(af)
                }
            }
            if (V.iabEnabled && V.getPreferencesDialogV2Enabled()) {
                Z.style.paddingBottom = "14px";
                Z.style.paddingTop = "14px";
                var ag = R.createElement("div");
                ag.style.cssText = "position:absolute; bottom:0; left:0; width:100%; padding:2px; text-align:center;";
                Z.appendChild(ag);
                var ad = R.createElement("button");
                ad.id = "iabpurposebutton";
                ad.style.cssText = "background-color:transparent; border:0; font-size: .9em; margin:2px 6px; cursor:pointer;";
                ad.onclick = function() {
                    V.showPreferencesDialog(V.PREFDIAG_TABS.IAB, V.PREFDIAG_TABS.PURPOSES);
                    T()
                }
                ;
                ag.appendChild(ad);
                var ae = R.createElement("button");
                ae.id = "iabvendorbutton";
                ae.style.cssText = "background-color:transparent; border:0; font-size: .9em; margin:2px 6px; cursor:pointer;";
                ae.onclick = function() {
                    V.showPreferencesDialog(V.PREFDIAG_TABS.IAB, V.PREFDIAG_TABS.VENDORS);
                    T()
                }
                ;
                ag.appendChild(ae)
            }
            var ak = I ? L.mobileShowBackground : L.showBackground;
            if (ak) {
                var Y = R.createElement("DIV");
                Y.id = b;
                Y.className = f;
                Y.style.cssText = I ? L.mobileBackgroundStyle : L.backgroundStyle;
                R.getElementsByTagName("body")[0].appendChild(Y);
                var aa = Z.style.cssText;
                var ai = aa.indexOf("z-index");
                if (ai === -1) {
                    Z.style.cssText += "z-index:2147483647;"
                } else {
                    var ao = aa.split(";");
                    for (var ac = 0; ac < ao.length; ac++) {
                        ai = ao[ac].indexOf("z-index");
                        if (ai > -1) {
                            ao[ac] = "z-index:2147483647";
                            break
                        }
                    }
                    Z.style.cssText = ao.join(";")
                }
            }
            X()
        }
        ;
        this.setTextValues = function(ar) {
            if (!ar) {
                return
            }
            if (!J) {
                return
            }
            var ad = window.evidon.notice;
            ad.dropPixel(l);
            var aa = document.getElementById(x);
            var Y = document.getElementById(a);
            var ae = document.getElementById(C);
            var ap = (I) ? ar.mobileBannerTitle : ar.bannerTitle;
            var ac = (I) ? ar.mobileBannerMessage : ar.bannerMessage;
            if (ad.iabEnabled === 1 && ad.iabVersion === 2) {
                if (ad.iabEnabled === 1 && ad.iabVersion === 2) {
                    if (I) {
                        if (ar.mobileIabBannerText) {
                            ac = ar.mobileIabBannerText
                        } else {
                            ac = ar.mobileBannerMessage
                        }
                    } else {
                        if (ar.iabBannerText) {
                            ac = ar.iabBannerText
                        } else {
                            ac = ar.bannerMessage
                        }
                    }
                }
            }
            if (ad.isUSOptOutRegulation() && ar.hasOwnProperty("bannerCCPAMessage")) {
                ac = (I) ? ar.mobileBannerCCPAMessage : ar.bannerCCPAMessage
            }
            if (ad.cnilupdatesenabled) {
                if (ar.hasOwnProperty("cnilBannerText")) {
                    ac = ad.formatTranslation((I) ? ar.mobilecnilBannerText : ar.cnilBannerText)
                } else {
                    console.log("Updated CNIL functionality is enabled, but the translations are not available for this")
                }
            }
            var al = (I) ? L.mobileShowCollapseMessage : false;
            var ab = (I) ? ar.mobileDeclineButtonText : ar.declineButtonText;
            if (ad.cnilupdatesenabled) {
                if (ar.hasOwnProperty("rejectButtonText")) {
                    ab = (I) ? ar.mobilerejectButtonText : ar.rejectButtonText
                }
            }
            var ah = ab;
            if (ar.hasOwnProperty("optoutBannerDismissText")) {
                ah = (I) ? ar.mobileOptoutBannerDismissText : ar.optoutBannerDismissText
            }
            var Z = (I) ? ar.mobileAcceptButtonText : ar.acceptButtonText;
            if (ad.cnilupdatesenabled) {
                if (ar.hasOwnProperty("cnilAcceptAllText")) {
                    Z = (I) ? ar.mobilecnilAcceptAllText : ar.cnilAcceptAllText
                }
            }
            var ag = (I) ? (ar.mobileOptionButtonText) ? ar.mobileOptionButtonText : ar.mobileOptionButton : ar.optionButtonText;
            if (ad.cnilupdatesenabled) {
                if (ar.hasOwnProperty("manageSettingsButtonText")) {
                    ag = (I) ? ar.mobilemanageSettingsButtonText : ar.manageSettingsButtonText
                }
            }
            var ai = ag;
            if (ar.hasOwnProperty("optoutOptionButtonText")) {
                ai = (I) ? ar.mobileOptoutOptionButtonText : ar.optoutOptionButtonText
            }
            var am = (ad.enableDeclineButton !== null) ? ad.enableDeclineButton : (I) ? L.mobileShowDeclineButton : L.showDeclineButton;
            var ak = (ad.enableAcceptButton !== null) ? ad.enableAcceptButton : (I) ? L.mobileShowAcceptButton : L.showAcceptButton;
            if (ad.regulationConsentTypeId === 2) {
                ak = false
            }
            var an = (ad.enableOptionsButton !== null) ? ad.enableOptionsButton : (I) ? L.mobileShowOptionButton : L.showOptionButton;
            var ao = document.getElementById(F);
            if (ao) {
                ao.innerHTML = ad.formatTranslation(ap)
            }
            document.getElementById(A).innerHTML = ad.formatTranslation(ac);
            if (al) {
                document.getElementById(w).innerHTML = ad.formatTranslation(ap)
            }
            if (am && aa && ab) {
                if (ad.regulationConsentTypeId === 2) {
                    aa.innerHTML = ah;
                    aa.setAttribute("aria-label", ah)
                } else {
                    aa.innerHTML = ab
                }
            } else {
                if (aa && !ab) {
                    aa.style.display = "none"
                }
            }
            if (ak && Y && Z) {
                Y.innerHTML = Z
            } else {
                if (Y && (!ak || !Z)) {
                    Y.style.display = "none"
                }
            }
            var af = "This button opens a pop-up";
            if (ae && an && ag) {
                if (ad.regulationConsentTypeId === 2) {
                    ae.innerHTML = ai
                } else {
                    ae.innerHTML = ag
                }
            } else {
                if (ae) {
                    ae.style.display = "none"
                }
            }
            if (document.getElementById("iabpurposebutton")) {
                var aq = (I) ? "mobilesnL2L3ShowPurposes" : "snL2L3ShowPurposes";
                var aj = (ar.hasOwnProperty(aq)) ? ar[aq] : "Show Purposes";
                document.getElementById("iabpurposebutton").innerHTML = aj
            }
            if (document.getElementById("iabvendorbutton")) {
                var aq = (I) ? "mobilesnL2L3ShowVendors" : "snL2L3ShowVendors";
                var at = (ar.hasOwnProperty(aq)) ? ar[aq] : "Show Vendors";
                document.getElementById("iabvendorbutton").innerHTML = at
            }
        }
        ;
        this.createNotice = function() {
            if (J) {
                return
            }
            L = window.evidon.notice.getBannerStyle();
            if (!L) {
                return
            }
            I = window.evidon.notice.isMobile();
            K.createBanner();
            J = true;
            var Y = window.evidon.notice.getTranslations();
            if (null != Y) {
                K.setTextValues(Y)
            }
        }
        ;
        this.destroyNotice = function() {
            var Z = document.getElementById(n);
            if (Z) {
                Z.style.display = "none";
                try {
                    Z.parentElement.removeChild(Z)
                } catch (aa) {}
            }
            var Y = document.getElementById(b);
            if (Y) {
                Y.style.display = "none";
                try {
                    Y.parentElement.removeChild(Y)
                } catch (aa) {}
            }
            J = false
        }
        ;
        this.scaleForMobile = function() {
            if (window.innerHeight < B && window.innerWidth < B) {
                return
            }
            var Y = R.getElementById(n)
              , Z = Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height);
            if (Y && (Y.style.zoom !== undefined)) {
                Y.style.display = "";
                Y.style.cssText += "zoom: " + (Z <= 2 ? Z : 2) + "!important;"
            }
        }
        ;
        this.isVisible = function() {
            var Y = document.getElementById(n);
            if (!Y || Y.style.display === "none") {
                return false
            } else {
                return true
            }
        }
    };
    window.evidon.banner = new c();
    window.evidon.banner.createNotice()
}
)();
