(function() {
    var ab = {
        en: {
            monthvar: "months",
            partnervar: "partners"
        },
        fr: {
            monthvar: "mois",
            partnervar: "partenaires"
        },
        it: {
            monthvar: "mesi",
            partnervar: "partner"
        },
        de: {
            monthvar: "Monate",
            partnervar: "Partnern"
        }
    };
    if (!Object.keys) {
        Object.keys = (function() {
            var aP = Object.prototype.hasOwnProperty
              , aO = !({
                toString: null
            }).propertyIsEnumerable("toString")
              , aM = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , aN = aM.length;
            return function(aR) {
                if (typeof aR !== "function" && (typeof aR !== "object" || aR === null)) {
                    throw new TypeError("Object.keys called on non-object")
                }
                var aT = [], aS, aQ;
                for (aS in aR) {
                    if (aP.call(aR, aS)) {
                        aT.push(aS)
                    }
                }
                if (aO) {
                    for (aQ = 0; aQ < aN; aQ++) {
                        if (aP.call(aR, aM[aQ])) {
                            aT.push(aM[aQ])
                        }
                    }
                }
                return aT
            }
        }())
    }
    if (typeof Object.assign != "function") {
        Object.assign = function(aP, aR) {
            if (aP == null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            var aQ = Object(aP);
            for (var aM = 1; aM < arguments.length; aM++) {
                var aO = arguments[aM];
                if (aO != null && aO != undefined) {
                    for (var aN in aO) {
                        if (Object.prototype.hasOwnProperty.call(aO, aN)) {
                            aQ[aN] = aO[aN]
                        }
                    }
                }
            }
            return aQ
        }
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = (function(aP, aN, aO) {
            return function aM(aT, aQ) {
                if (this === null || this === undefined) {
                    throw TypeError("Array.prototype.indexOf called on null or undefined")
                }
                var aU = aP(this)
                  , aS = aU.length >>> 0
                  , aR = aO(aQ | 0, aS);
                if (aR < 0) {
                    aR = aN(0, aS + aR)
                } else {
                    if (aR >= aS) {
                        return -1
                    }
                }
                if (aT === void 0) {
                    for (; aR !== aS; ++aR) {
                        if (aU[aR] === void 0 && aR in aU) {
                            return aR
                        }
                    }
                } else {
                    if (aT !== aT) {
                        for (; aR !== aS; ++aR) {
                            if (aU[aR] !== aU[aR]) {
                                return aR
                            }
                        }
                    } else {
                        for (; aR !== aS; ++aR) {
                            if (aU[aR] === aT) {
                                return aR
                            }
                        }
                    }
                }
                return -1
            }
        }
        )(Object, Math.max, Math.min)
    }
    if (!Array.isArray) {
        Array.isArray = function(aM) {
            return Object.prototype.toString.call(aM) === "[object Array]"
        }
    }
    if (!Array.prototype.find) {
        Array.prototype.find = function(aM) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }
            var aQ = Object(this);
            var aP = aQ.length >>> 0;
            if (typeof aM !== "function") {
                throw new TypeError("callback must be a function")
            }
            var aR = arguments[1];
            var aN = 0;
            while (aN < aP) {
                var aO = aQ[aN];
                if (aM.call(aR, aO, aN, aQ)) {
                    return aO
                }
                aN++
            }
            return undefined
        }
    }
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(aN, aT) {
            if (!((typeof aN === "Function" || typeof aN === "function") && this)) {
                throw new TypeError()
            }
            var aQ = this.length >>> 0
              , aR = new Array(aQ)
              , aS = this
              , aM = 0
              , aO = -1;
            var aP;
            if (aT === undefined) {
                while (++aO !== aQ) {
                    if (aO in this) {
                        aP = aS[aO];
                        if (aN(aS[aO], aO, aS)) {
                            aR[aM++] = aP
                        }
                    }
                }
            } else {
                while (++aO !== aQ) {
                    if (aO in this) {
                        aP = aS[aO];
                        if (aN.call(aT, aS[aO], aO, aS)) {
                            aR[aM++] = aP
                        }
                    }
                }
            }
            aR.length = aM;
            return aR
        }
    }
    if (window.Prototype && parseFloat(window.Prototype.Version) < 1.7 && Array.prototype.reduce) {
        Array.prototype.mVendorObjectReduce = function(aM, aO) {
            if (!aM || typeof aM !== "function") {
                throw TypeError()
            }
            var aP = this.length;
            var aN = 0;
            if (typeof aO === "undefined" || aO === null) {
                aO = this[0];
                ++aN
            }
            for (; aN < aP; aN++) {
                aO = aM.apply(this, [aO, this[aN], aN, this])
            }
            return aO
        }
    }
    if (!Object.isEmpty) {
        Object.isEmpty = function(aN) {
            if (!aN) {
                return true
            } else {
                for (var aM in aN) {
                    if (aN.hasOwnProperty(aM)) {
                        return false
                    }
                }
                return true
            }
        }
    }
    var y = "//c.evidon.com"
      , aG = y + "/sitenotice/"
      , B = aG + window.evidon.id
      , a = {
        LINK: 1,
        BUTTON: 2
    }
      , H = 1
      , F = 2
      , G = 3
      , aC = {
        CCPA: 1,
        GDPR: 2,
        NevadaLaw: 3,
        CPRA: 7,
        VCDPA: 8,
        CTDPA: 9,
        CPA: 10,
        UCPA: 11
    }
      , aA = 1
      , aB = 2
      , W = 1
      , V = 2
      , X = 3
      , C = "_evidon_consent_cookie"
      , D = "_evidon_consent_ls_"
      , aI = "_evidon_suppress_notification_cookie"
      , au = "//l.evidon.com/site/v3/"
      , ax = "https://l.evidon.com/site/v3/userPref/"
      , ap = "https://optoutapi.evidon.com/site/"
      , aa = "https://l3.evidon.com/site/"
      , K = "https://l3.evidon.com/dataRequest/"
      , aL = "vendorlist.js"
      , k = "evidon-banner.js"
      , l = "evidon-barrier.js"
      , U = "evidon-gdpr-overlay.js"
      , aw = "evidon-preferences-dialog.js"
      , A = {
        1: "evidon-cmp.js",
        2: "evidon-cmpv2.js"
    }
      , z = "https://iabmap.evidon.com/iabevidonmapping.js"
      , s = 1
      , R = 2
      , O = 3
      , S = 4
      , aq = "_evidon-overlay"
      , Z = "_evidon-l3"
      , aE = 30
      , aJ = "evidonConsentGiven"
      , q = "_evh-button"
      , ah = "_evh-link"
      , ao = "_evh-newvendor-indicator"
      , u = "_evidon-button-text"
      , ak = "_evidon-link-text"
      , ag = "evidon-notice-link"
      , al = 800;
    var ad = "evidon-consent-link"
      , aj = "evidon-consent-link-text"
      , ai = "evidon-consent-link-image"
      , n = "evidon-consent-button"
      , t = "evidon-consent-button-text"
      , r = "evidon-consent-button-image";
    var aD = 1
      , ay = 17
      , aF = 20
      , ar = 21
      , an = 22
      , j = 26
      , Y = 6
      , T = 7
      , I = 23;
    var af = 2
      , p = 3
      , ae = 15
      , o = 16;
    var L = "{company}"
      , E = "{consentToolUrl}"
      , az = "{privacyPolicy}"
      , J = "{cookiePolicy}"
      , M = "{duration}"
      , aK = "{vendorcount}"
      , w = "{categorycsv}"
      , x = "{categorylist}"
      , av = "{policybuttonmarker}"
      , am = "{monthvar}"
      , at = "{partnervar}";
    var d = "adobe-marketing-cloud-audience-manager"
      , c = "adobe-marketing-cloud-analytics"
      , f = "adobe-experience-platform"
      , h = "adobe-marketing-cloud-target"
      , i = "adobe-video-analytics"
      , b = "adobe-marketing-cloud-media-optimizer-formerly-adlens"
      , g = "livefyre"
      , e = "adobe-marketing-cloud-campaign";
    var Q = {
        BANNER_SCRIPT: "fallback-banner.js",
        BARRIER_SCRIPT: "fallback-barrier.js",
        L2_SCRIPT: "fallback-gdpr-overlay.js"
    };
    var P = [3247];
    var v = {
        1: "ad exchange",
        2: "advertiser",
        3: "ad network",
        5: "analytics provider",
        7: "optimizer",
        8: "research provider",
        9: "other",
        10: "publisher",
        11: "agency",
        12: "retargeter",
        13: "ad server",
        14: "demand side platform",
        15: "supply side platform",
        16: "ad verification",
        17: "online privacy platform",
        20: "creative/ad format technology",
        21: "data aggregator/supplier",
        22: "data management platform",
        23: "mobile",
        24: "tag manager",
        25: "social media",
        26: "business intelligence",
        27: "content management/saas",
        28: "marketing solutions",
        29: "video",
        30: "website optimization"
    };
    var m = function() {
        var aO = null
          , aM = false
          , aP = false
          , aN = false
          , aS = this;
        function aQ(aT) {
            window.evidon.notice.dropPixel(o);
            if (aT.target.innerText === "Do Not Sell My Personal Information") {
                window.evidon.notice.showOptions(null, window.evidon.notice.PREFDIAG_TABS.DONOTSELL)
            } else {
                window.evidon.notice.showOptions(null)
            }
            if (aN) {
                window.evidon.notice._updateConsentedVendors();
                aS.hideNewVendorIndicator()
            }
        }
        function aR() {
            if (aM || !aO) {
                return
            }
            var aU = document
              , a1 = window.evidon.notice.isMobile()
              , aT = aU.createElement("div");
            aT.id = q;
            aT.className = n;
            aT.innerHTML = "<style> @media print {#_evh-ric,#_evh-link { display:none !important; } } </style>";
            aT.setAttribute("role", "button");
            var a4 = (a1) ? aO.mobileButtonStyle : aO.buttonStyle;
            var a2 = aU.createElement("a");
            a2.id = ah;
            a2.style.cssText = a4;
            var a5 = (a1) ? aO.mobileShowIcon : aO.showIcon;
            if (a5) {
                var aY = aU.createElement("img");
                aY.src = aO.buttonIcon;
                aY.className = r;
                aY.alt = "AdChoices Icon";
                var a7 = "border:0;display:inline;vertical-align:middle;margin-right:10px;";
                var aW = window.evidon.notice._getStyleValue(aO.buttonStyle, "height");
                if (aW) {
                    var aV = parseFloat(aW);
                    var ba = aW.replace(aV, "");
                    aV = parseInt(aV * 0.6, 10);
                    a7 += "height:" + aV + ba + ";"
                }
                aY.style.cssText = a7;
                a2.appendChild(aY)
            }
            var a6 = (a1) ? aO.mobileShowText : aO.showText;
            if (a6) {
                var a8 = aU.createElement("span");
                a8.id = u;
                a8.className = t;
                a8.style.cssText = "vertical-align:middle !important;";
                a2.appendChild(a8)
            }
            a2.onclick = function(bc) {
                aQ(bc)
            }
            ;
            a2.onkeyup = function(bc) {
                if (bc.keyCode === 13) {
                    a2.onclick()
                }
            }
            ;
            a2.tabIndex = 0;
            var a3 = window.evidon.notice._parseCss(a4);
            var aX = a3.left === undefined ? "left" : "right";
            var bb = a3.top === undefined ? "top" : "bottom";
            var a0 = "display: none; position: absolute;" + aX + ":-10px;" + bb + ":-10px;width: 23px; height: 23px;";
            var aZ = document.createElement("img");
            aZ.id = ao;
            aZ.src = "//c.evidon.com/sitenotice/images/evidon-change-alert.png";
            aZ.alt = "New vendors have been added to this site";
            aZ.style.cssText = a0;
            a2.appendChild(aZ);
            aT.appendChild(a2);
            document.body.appendChild(aT);
            var a9 = window.evidon.notice.getTranslations();
            if (a9) {
                aS.setButtonText(a9)
            }
            if (a1) {
                aS.scaleForMobile()
            }
            aM = true
        }
        window.onbeforeprint = function() {
            var aT = document.getElementById(q);
            if (aT) {
                aT.style.display = "none"
            }
        }
        ;
        window.onafterprint = function() {
            var aT = document.getElementById(q);
            if (aT) {
                aT.style.display = ""
            }
        }
        ;
        this.scaleForMobile = function() {
            if (window.innerHeight < al && window.innerWidth < al) {
                return
            }
            var aT = document.getElementById(q)
              , aU = Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height);
            if (aT && (aT.style.zoom !== undefined)) {
                aT.style.cssText += "zoom: " + (aU <= 2 ? aU : 2) + "!important;"
            }
        }
        ;
        this.setButtonText = function(aX) {
            if (!aX) {
                return
            }
            var aW = window.evidon.notice;
            aW.dropPixel(p);
            var aU = window.evidon.notice.isMobile();
            if (aM) {
                var aT = document.getElementById(u);
                var aV = aW.isUSOptOutRegulation() ? (aU ? aX.mobileDoNotSell : aX.doNotSell) : (aU ? aX.mobileButtonText : aX.buttonText);
                if (aT) {
                    aT.innerHTML = aV;
                    aP = true
                }
            }
        }
        ;
        this.createButton = function(aT) {
            if (!aT) {
                aO = window.evidon.notice.getButtonStyle()
            } else {
                aO = aT
            }
            if (aO) {
                aR()
            }
        }
        ;
        this.showNewVendorIndicator = function() {
            var aT = document.getElementById(ao);
            if (!aT) {
                return
            }
            aT.style.display = "";
            aN = true
        }
        ;
        this.hideNewVendorIndicator = function() {
            var aT = document.getElementById(ao);
            if (!aT) {
                return
            }
            aT.style.display = "none";
            aN = false
        }
        ;
        this.iscreated = function() {
            return aM
        }
        ;
        this.show = function() {
            var aT = document.getElementById(q);
            if (aT) {
                aT.style.display = "block"
            }
        }
        ;
        this.hide = function() {
            var aT = document.getElementById(q);
            if (aT) {
                aT.style.display = "none"
            }
        }
    };
    var ac = function() {
        var aN = null
          , aM = false
          , aQ = this;
        function aO() {
            if (aM || !aN) {
                return
            }
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
    var aH = function() {
        this.translations = {};
        this.country = null;
        this.themes = null;
        this.languageCode = null;
        this.languageRoot = null;
        this.companyId = window.evidon.id;
        this.activeTranslations = null;
        this.activeTranslationId = 0;
        this.settings = null;
        this.domain = null;
        this.path = null;
        this.activeSettings = null,
        this.regulationId = 0,
        this.regulationRightsId = 0,
        this.regulationConsentTypeId = 0,
        this.consentTypeId = 0,
        this.privacyAccessTypeId = 0,
        this.consentRequired = false,
        this.consentDuration = 13,
        this.consentIsGiven = false,
        this.L2Enabled = false,
        this.gdprEnabled = false,
        this.dataRightsType = 0,
        this.rightsLink = "",
        this.closeConsentEnabled = false,
        this.scrollConsentEnabled = false,
        this.pageclickConsentEnabled = false,
        this.navigationConsentEnabled = false;
        this.activeVendorId = -1;
        this.activeDomain = null;
        this.pixelsDropped = [];
        this.scriptsLoaded = [];
        this.tagManagerEventFired = false;
        this.consentCallbackExecuted = false;
        this.consentChangedCallbackExecuted = false;
        this.closeCallbackExecuted = false;
        this.declineCallbackExecuted = false;
        this.navigationStack = [];
        this.blockDomainCheck = false;
        this.shouldSupportAmp = false;
        this.customerUserId = (typeof window.evidon.userid !== "undefined") ? window.evidon.userid : null;
        this.vendorList = null;
        this.activecategorySet = null;
        this.shouldCallCMP = true;
        this.optOutDetails = null;
        this.companydetails = [];
        this.cnilupdatesenabled = false,
        this.displaytimeout = 0;
        this.activeCategorySetId = -1;
        this.activeCategoriesWithVendor = null;
        this.noticeGpcEnabled = 0;
        this.userGpcEnabled = (navigator.globalPrivacyControl === true || navigator.globalPrivacyControl === 1 ? 1 : 0);
        this.gpcConflict = 0;
        this.PREFDIAG_TABS = {
            IAB: "iab",
            PURPOSES: "purposes",
            VENDORS: "vendors",
            DONOTSELL: "do-not-sell",
            CONSENT: "prior-consent"
        };
        var aQ = this;
        this._getAttributeValue = function(aW, aY) {
            var aV = aW.attributes
              , aZ = null;
            for (var aX = 0; aX < aV.length; aX++) {
                if (aV[aX].localName == aY) {
                    aZ = aV[aX].value;
                    break
                }
            }
            return aZ
        }
        ;
        this._trackScrolling = function() {
            if (!aQ.scrollConsentEnabled) {
                return
            } else {
                var aV = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (aV === 0 || aV > aE) {
                    aQ.consentGiven(true, true, true, true);
                    aQ.dropPixel(aF)
                }
            }
        }
        ;
        this._trackClicking = function(aV) {
            if (!aQ.pageclickConsentEnabled) {
                return
            }
            if (!aV || !aV.target) {
                return
            }
            if (!window.evidon.banner) {
                return
            }
            if (window.evidon.banner.isOnBanner(aV.target)) {
                return
            }
            if (window.evidon.gdprL2 && window.evidon.gdprL2.isOnBanner(aV.target)) {
                return
            }
            aQ.consentGiven(true, true, true, true);
            aQ.dropPixel(ar)
        }
        ;
        this._hookConsentEvents = function() {
            if (document.readyState == "complete") {
                if (aQ.regulationConsentTypeId === aA) {
                    setTimeout(function() {
                        if (window.addEventListener) {
                            window.addEventListener("scroll", aQ._trackScrolling, false);
                            window.addEventListener("click", aQ._trackClicking, false)
                        } else {
                            window.attachEvent("onscroll", aQ._trackScrolling);
                            window.attachEvent("onclick", aQ._trackClicking)
                        }
                    }, 500)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("load", aQ._hookConsentEvents, false)
                } else {
                    window.attachEvent("onload", aQ._hookConsentEvents)
                }
            }
        }
        ;
        this._detachEventTracking = function() {
            aQ.pageclickConsentEnabled = false;
            aQ.scrollConsentEnabled = false;
            try {
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("click", aQ._trackClicking, false)
                } else {
                    window.detachEvent("onclick", aQ._trackClicking, false)
                }
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("scroll", aQ._trackScrolling, false)
                } else {
                    window.detachEvent("onscroll", aQ._trackScrolling, false)
                }
            } catch (aV) {}
        }
        ;
        if (!this.isMobile()) {
            if (window.addEventListener) {
                window.addEventListener("resize", function() {
                    aQ.showNotice()
                })
            } else {
                window.attachEvent("onresize", function() {
                    aQ.showNotice()
                })
            }
        }
        this._isDomReady = function() {
            if (document.readyState == "loading") {
                console.log("dom not ready, setting event");
                document.addEventListener("DOMContentLoaded", function() {
                    console.log("dom ready, triggering load");
                    try {
                        document.removeEventListener("DOMContentLoaded")
                    } catch (aV) {}
                    aQ.showNotice()
                }, false);
                return false
            } else {
                return true
            }
        }
        ;
        var aT = document.getElementById("evidon-notice");
        if (aT) {
            var aU = aT.src;
            var aS = aU.indexOf(".com");
            if (aS !== -1) {
                aU = aU.substr(0, aS + 4);
                y = aU;
                aG = y + "/sitenotice/";
                B = aG + window.evidon.id
            }
            var aM = this._getAttributeValue(aT, "data-options");
            if (aM) {
                if (aM.indexOf("block-domain-check") > -1) {
                    this.blockDomainCheck = true
                }
                if (aM.indexOf("amp-support") > -1) {
                    this.shouldSupportAmp = true
                }
            }
        }
        var aP = (window.navigator.languages && window.navigator.languages.length > 0) ? window.navigator.languages[0] : (window.navigator.userLanguage || window.navigator.language);
        if (aP) {
            if (aP.toLowerCase() === "nb") {
                aP = "no"
            }
            this.activateTranslations(aP.toLowerCase())
        }
        if (!this.blockDomainCheck) {
            this.setDomain(null, true)
        }
        if (this._isConsentGiven() && this.activeSettings && this.vendorList) {
            if (!this.consentRequired) {
                this._runNoConsentFlow()
            } else {
                if (this.regulationConsentTypeId === aA) {
                    this._runOptInFlow()
                } else {
                    if (this.regulationConsentTypeId === aB) {
                        this._runOptOutFlow()
                    }
                }
            }
        }
        var aO = window.addEventListener ? "addEventListener" : "attachEvent";
        var aN = window[aO];
        var aR = aO == "attachEvent" ? "onmessage" : "message";
        aN(aR, function(aW) {
            var aX = aW.message ? "message" : "data";
            var aV = aW[aX];
            if (aV == "acceptclicked") {
                aQ._closeL3()
            }
        }, false)
    };
    aH.prototype._parseCss = function(aQ) {
        var aO = aQ.split(";");
        var aR = {};
        for (var aM = 0; aM < aO.length; aM++) {
            var aN = aO[aM].split(":");
            if (aN.length !== 2) {
                continue
            }
            var aP = aN[0].trim();
            var aS = aN[1].trim();
            aR[aP] = aS
        }
        return aR
    }
    ;
    aH.prototype._joinCss = function(aO) {
        var aM = [];
        for (var aN in aO) {
            aM.push(aN + ":" + aO[aN])
        }
        return aM.join(";") + ";"
    }
    ;
    aH.prototype._getStyleValue = function(aO, aM) {
        var aN = this._parseCss(aO);
        if (aN && aN.hasOwnProperty(aM)) {
            return aN[aM]
        }
        return null
    }
    ;
    aH.prototype._fixurl = function(aM) {
        if (typeof aM === "undefined" || !aM) {
            return aM
        }
        if (aM.indexOf("http") === 0) {
            return aM
        } else {
            if (aM.indexOf("//") === 0) {
                return aM
            } else {
                return "//" + aM
            }
        }
    }
    ;
    aH.prototype._isScriptLoaded = function(aN) {
        for (var aM = 0; aM < this.scriptsLoaded.length; aM++) {
            if (this.scriptsLoaded[aM] == aN) {
                return true
            }
        }
        return false
    }
    ;
    aH.prototype._getRootDomain = function(aM) {
        var aP = aM;
        var aO = aP.split(".");
        if (aO.length === 2) {
            aP = aO[0]
        } else {
            if (aO.length >= 3) {
                var aN = aO[aO.length - 2];
                if (this._isTwoPartTLD(aN)) {
                    aP = aO[aO.length - 3]
                } else {
                    aP = aN
                }
            }
        }
        return aP
    }
    ;
    aH.prototype._isConsentRequired = function(aM) {
        if (aM.hasOwnProperty("regulationConsentTypeId")) {
            return (aM.regulationConsentTypeId !== 0)
        } else {
            if (aM.hasOwnProperty("consentRequired")) {
                return aM.consentRequired
            } else {
                return aM.duration > 0
            }
        }
    }
    ;
    aH.prototype._loadSettings = function(aO) {
        this.iabEnabled = (typeof aO.iabEnabled === "undefined") ? true : aO.iabEnabled;
        if (window.__cmp) {
            this.iabVersion = 1
        } else {
            if (window.__tcfapi) {
                this.iabVersion = 2
            } else {
                this.iabVersion = 2
            }
        }
        this.consentTypeId = aO.consentid;
        this.privacyAccessTypeId = aO.accessid;
        this.consentRequired = this._isConsentRequired(aO);
        this.consentDuration = aO.duration;
        this.L2Enabled = (typeof aO.l2enabled === "undefined") ? false : aO.l2enabled;
        this.gdprEnabled = (typeof aO.gdprEnabled === "undefined") ? false : aO.gdprEnabled;
        this.displayDsarInFrame = (typeof aO.displayDsarInFrame === "undefined") ? false : aO.displayDsarInFrame;
        this.adChoicesEnabled = (typeof aO.adChoicesEnabled === "undefined") ? true : aO.adChoicesEnabled == 1;
        this.closeConsentEnabled = (typeof aO.closeConsentEnabled === "undefined") ? true : aO.closeConsentEnabled;
        this.regulationId = (typeof aO.regulationId === "undefined") ? (this.gdprEnabled ? aC.GDPR : 0) : aO.regulationId;
        this.regulationConsentTypeId = (typeof aO.regulationConsentTypeId === "undefined" ? aA : aO.regulationConsentTypeId);
        this.regulationRightsId = (typeof aO.regulationRightsId === "undefined") ? (this.regulationId == 0 ? aC.GDPR : aO.regulationId) : aO.regulationRightsId;
        this.scrollConsentEnabled = false;
        this.navigationConsentEnabled = false;
        this.pageclickConsentEnabled = false;
        var aM = (typeof aO.consentactions === "undefined") ? "" : aO.consentactions;
        if (aM && this.consentRequired) {
            this.scrollConsentEnabled = (aM.indexOf("s") !== -1);
            this.navigationConsentEnabled = (aM.indexOf("n") !== -1);
            this.pageclickConsentEnabled = (aM.indexOf("p") !== -1)
        }
        var aN = (typeof aO.consentDetailLevel === "undefined") ? "cv" : aO.consentDetailLevel;
        this.consentDetailCategories = aN.indexOf("c") > -1;
        this.consentDetailVendors = aN.indexOf("v") > -1;
        this.privacypolicylink = this.getPrivacyPolicyLink();
        this.privacyPolicyEnabled = (typeof aO.privacyPolicyEnabled === "undefined") ? (this.privacypolicylink !== "#") : aO.privacyPolicyEnabled;
        this.venodrDisplayEnabled = (typeof aO.vendorDisplayEnabled === "undefined") ? true : aO.vendorDisplayEnabled;
        this.dnsEnabled = (typeof aO.dnsEnabled === "undefined") ? (this.isUSOptOutRegulation()) : aO.dnsEnabled;
        this.displayDnsInFrame = (typeof aO.displayDnsInFrame === "undefined") ? false : aO.displayDnsInFrame;
        this.enableAcceptButton = (typeof aO.enableAcceptButton === "undefined") ? null : aO.enableAcceptButton;
        this.enableDeclineButton = (typeof aO.enableDeclineButton === "undefined") ? null : aO.enableDeclineButton;
        this.enableOptionsButton = (typeof aO.enableOptionsButton === "undefined") ? null : aO.enableOptionsButton;
        this.cookiePolicyEnabled = (typeof aO.cookiePolicyEnabled === "undefined") ? false : aO.cookiePolicyEnabled;
        this.cookiepolicylink = this.getCookiePolicyLink();
        this.cnilupdatesenabled = (typeof aO.cnilUpdatesEnabled === "undefined") ? false : aO.cnilUpdatesEnabled;
        this.displaytimeout = (typeof aO.displaytimeout === "undefined") ? 0 : aO.displaytimeout
    }
    ;
    aH.prototype._isTwoPartTLD = function(aO) {
        var aN = ["co", "com", "info", "web", "info", "gov", "edu", "biz", "net", "org"];
        var aM = ["uk", "us", "fr", "es", "de", "at", "au", "ae", "be", "br", "ca", "ch", "cn", "co", "cz", "dk", "eg", "eu", "fi", "gb", "gr", "hk", "hr", "hu", "ie", "in", "jp", "mx", "nl", "no", "nz", "pl", "ro", "ru", "se"];
        return (aN.indexOf(aO) !== -1 || aM.indexOf(aO) !== -1)
    }
    ;
    aH.prototype._getTLD = function(aM) {
        var aO = aM.split(".")
          , aP = "";
        if (aO && aO.length > 1) {
            aP = aO[aO.length - 1];
            if (aO.length >= 3) {
                var aN = aO[aO.length - 2];
                if (this._isTwoPartTLD(aN)) {
                    aP = aN + "." + aP
                }
            }
        }
        return aP
    }
    ;
    aH.prototype._createCloseIcon = function(a3, aV, aP, a0, a1, aM, a5) {
        var aQ = null
          , aR = document;
        var a2 = this._parseCss(a3)
          , aO = []
          , a4 = ["stroke", "stroke-width"];
        if (!a2.hasOwnProperty("z-index")) {
            a2["z-index"] = 100
        }
        for (var aW in a2) {
            if (a4.indexOf(aW) === -1) {
                aO.push(aW + ":" + a2[aW])
            }
        }
        if (typeof a0 === "undefined") {
            a0 = "#333333"
        }
        a0 = a2.hasOwnProperty("stroke") ? a2.stroke : a0;
        if (typeof a1 === "undefined") {
            a1 = 2
        }
        a1 = a2.hasOwnProperty("stroke-width") ? a2["stroke-width"] : a1;
        aO.push("border:0");
        aO.push("padding:0");
        aO.push("background:transparent");
        if (typeof SVGRect !== "undefined") {
            var aX = "http://www.w3.org/2000/svg";
            aQ = aR.createElementNS(aX, "svg");
            aQ.setAttribute("viewBox", "0 0 14 12");
            aQ.setAttribute("version", "1.1");
            aQ.setAttribute("xmlns", aX);
            aQ.setAttribute("class", aP);
            aQ.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            aQ.setAttribute("style", "position:absolute; top:0; left:0;");
            aQ.setAttribute("aria-label", aM ? aM + " icon" : "close dialog icon");
            var aS = aR.createElementNS(aX, "g");
            aS.id = a5 ? "__ghostery-close-icon-svg-" + a5 : "__ghostery-close-icon-svg";
            aS.setAttribute("stroke", "none");
            aS.setAttribute("fill", "none");
            aS.setAttribute("fill-rule", "evenodd");
            aS.setAttribute("stroke-linecap", "square");
            var aT = aR.createElementNS(aX, "g");
            aT.setAttribute("transform", "translate(-1410.000000, -643.000000)");
            aT.setAttribute("stroke", a0);
            aT.setAttribute("stroke-width", a1);
            var aU = aR.createElementNS(aX, "g");
            aU.setAttribute("transform", "translate(1411.000000, 643.000000)");
            var aY = aR.createElementNS(aX, "path");
            aY.setAttribute("d", "M0.5,0.5 L11.5679722,11.5679722");
            aY.setAttribute("stroke", a0);
            var aZ = aR.createElementNS(aX, "path");
            aZ.setAttribute("d", "M0.5,0.5 L11.5679722,11.5679722");
            aZ.setAttribute("transform", "translate(6.000000, 6.000000) scale(-1, 1) translate(-6.000000, -6.000000) ");
            aZ.setAttribute("stroke", a0);
            aU.appendChild(aY);
            aU.appendChild(aZ);
            aT.appendChild(aU);
            aS.appendChild(aT);
            aQ.appendChild(aS)
        } else {
            aQ = aR.createElement("img");
            aQ.style.cssText = a3;
            aQ.src = "//c.evidon.com/pub/ric-close.png";
            aQ.alt = "close";
            aQ.tabIndex = 0
        }
        var aN = aR.createElement("button");
        aN.id = aV;
        aN.setAttribute("aria-label", aM ? aM + " button" : "close dialog button");
        aN.style.cssText = aO.join(";");
        aN.appendChild(aQ);
        aN.onmouseover = function() {
            this.style.border = "1px solid " + a0
        }
        ;
        aN.onmouseout = function() {
            this.style.border = 0
        }
        ;
        return aN
    }
    ;
    aH.prototype.appendScript = function(aU, aM, aO) {
        var aQ, aT = document.createElement("script"), aS = aP();
        function aP() {
            return document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0]
        }
        function aR() {
            aT.onload = aT.onreadystatechange = null;
            aM()
        }
        if (this._isScriptLoaded(aU)) {
            if (aM) {
                aM()
            }
        } else {
            aT.async = true;
            aT.src = aU;
            aT.charset = "utf-8";
            if (typeof aO === "function") {
                aT.onerror = aO
            }
            if (aM) {
                aT.onreadystatechange = function() {
                    if (!aQ && (this.readyState == "loaded" || this.readyState == "complete")) {
                        aQ = true;
                        aR()
                    }
                }
                ;
                aT.onload = aR
            }
            try {
                aS.parentElement.insertBefore(aT, aS);
                this.scriptsLoaded.push(aU)
            } catch (aN) {
                console.log(aN)
            }
        }
    }
    ;
    aH.prototype._getSettings = function() {
        var aW = this;
        if (!this.domain) {
            return null
        }
        function aO(a8, a9) {
            if (!a8 || !a9) {
                return false
            } else {
                return a8.substr(a8.length - a9.length) === a9
            }
        }
        function aQ(a8) {
            var bc = [];
            for (var a9 in aW.settings) {
                a9 = a9.toLowerCase();
                var ba = a9.split("|")[0];
                if (!aO(ba, "/")) {
                    ba += "/"
                }
                var bb = a8.toLowerCase();
                if (!aO(bb, "/")) {
                    bb += "/"
                }
                if (ba.indexOf(bb) === 0) {
                    bc.push(a9)
                }
            }
            return bc
        }
        var aU = aQ(this.domain)
          , a1 = aW._getRootDomain(aW.domain)
          , a7 = aW._getTLD(this.domain);
        var a5 = aW.domain.substr(0, aW.domain.indexOf(a1)) + a1 + ".*";
        aU = aU.concat(aQ(a5));
        aU = aU.concat(aQ(a1 + "." + a7));
        aU = aU.concat(aQ(a1 + ".*"));
        if (aU.length === 1) {
            aW.activeDomain = aU[0].split("|")[0];
            return this.settings[aU[0]]
        } else {
            if (aU.length > 1) {
                aU.sort(function(a8, a9) {
                    return (a9.length - a8.length)
                });
                var aS = aW.domain + this.path
                  , a3 = a1 + "." + a7 + this.path
                  , aZ = [];
                for (var aR = 0; aR < aU.length; aR++) {
                    var aT = aU[aR];
                    if (aT.indexOf("|") !== -1) {
                        aT = aT.substr(0, aT.indexOf("|"))
                    }
                    if (aT.indexOf("*") !== -1) {
                        aT = aT.replace("*", a7)
                    }
                    if (aS.indexOf(aT) !== -1) {
                        aZ.push(aU[aR])
                    }
                }
                if (aZ.length === 0) {
                    return null
                } else {
                    if (aZ.length === 1) {
                        aW.activeDomain = aZ[0].split("|")[0];
                        return aW.settings[aZ[0]]
                    } else {
                        var aM = aW.country.id
                          , a6 = null;
                        var aP = []
                          , a4 = []
                          , aV = 0
                          , a2 = 0;
                        if (!aO(aS, "/")) {
                            aS += "/"
                        }
                        if (!aO(a3, "/")) {
                            a3 += "/"
                        }
                        for (var aR = 0; aR < aZ.length; aR++) {
                            var aX = aZ[aR];
                            var aY = aX.split("|")[0];
                            if (aY.indexOf("*") !== -1) {
                                aY = aY.replace("*", a7)
                            }
                            if (!aO(aY, "/")) {
                                aY += "/"
                            }
                            if (aS.indexOf(aY) === 0 && aY.length >= aV) {
                                aP.push(aX);
                                if (aV === 0) {
                                    aV = aY.length
                                }
                            } else {
                                if (a3.indexOf(aY) !== -1 && aY.length >= a2) {
                                    a4.push(aX);
                                    a2 = aY.length
                                }
                            }
                        }
                        if (aP.length === 0 && a4.length >= 0) {
                            if (a4.length === 1) {
                                a6 = aW.settings[a4[0]];
                                aW.activeDomain = a4[0].split("|")[0]
                            } else {
                                aZ = a4
                            }
                        } else {
                            if (aP.length === 1) {
                                a6 = aW.settings[aP[0]];
                                aW.activeDomain = aP[0].split("|")[0]
                            } else {
                                if (aP.length > 1) {
                                    aZ = aP
                                }
                            }
                        }
                        if (!a6) {
                            for (var aR = 0; aR < aZ.length; aR++) {
                                if (aW.settings[aZ[aR]].countries.hasOwnProperty(aM)) {
                                    a6 = aW.settings[aZ[aR]];
                                    aW.activeDomain = aZ[aR].split("|")[0];
                                    break
                                }
                            }
                        }
                        if (!a6) {
                            var aN = 0;
                            for (var aR = 0; aR < aZ.length; aR++) {
                                var a0 = aW.settings[aZ[aR]];
                                if (a0.hasOwnProperty("defaultCountry")) {
                                    if (a0.defaultCountry != 0) {
                                        aN = a0.defaultCountry;
                                        break
                                    }
                                }
                            }
                            if (aN !== 0) {
                                for (var aR = 0; aR < aZ.length; aR++) {
                                    var a0 = aW.settings[aZ[aR]];
                                    if (a0.countries.hasOwnProperty(aN)) {
                                        a6 = a0;
                                        aW.activeDomain = aZ[aR].split("|")[0]
                                    }
                                }
                            }
                        }
                        if (!a6) {
                            a6 = aW.settings[aZ[0]];
                            aW.activeDomain = aZ[0].split("|")[0]
                        }
                        return a6
                    }
                }
            }
        }
        return null
    }
    ;
    aH.prototype._getDefaultConsentCookieData = function(aM, aW, aT) {
        var aU = this.activeSettings
          , aN = {}
          , aX = {}
          , aS = {};
        if (typeof aM === "object" && aM !== null) {
            aN[this.activeCountryId] = aM
        } else {
            if (this.activecategorySet !== null) {
                var aR = {};
                for (var aP in this.activecategorySet) {
                    var aO = this.activecategorySet[aP];
                    var aQ = (aO.cEss === 1 || this._is50PercentVendorsTrue(aO.vendors)) ? true : (aM === true);
                    if (this.regulationConsentTypeId === aB) {
                        aR[aP] = (this.isGPCApply() && aO.dataSharing == 1) ? false : aQ
                    } else {
                        aR[aP] = (this.isGPCApply() && aO.dataSharing == 1) ? (aM === true) : aQ
                    }
                }
                aN[this.activeCountryId] = aR
            } else {
                aN[this.activeCountryId] = (aM === true)
            }
        }
        if (typeof aW === "object" && aW !== null) {
            aX[this.activeCountryId] = aW
        } else {
            if (this.activecategorySet !== null) {
                var aZ = {};
                for (var aP in this.activecategorySet) {
                    var aO = this.activecategorySet[aP];
                    for (var aV in aO.vendors) {
                        var aY = aO.vendors[aV].vEss === 1 ? true : (aW === true);
                        aY = aO.cEss === 1 ? true : aY;
                        if (this.regulationConsentTypeId === aB) {
                            aZ[aV] = (this.isGPCApply() && aO.dataSharing == 1) ? false : aY
                        } else {
                            aZ[aV] = (this.isGPCApply() && aO.dataSharing == 1) ? (aW === true) : aY
                        }
                    }
                }
                aX[this.activeCountryId] = aZ
            } else {
                aX[this.activeCountryId] = (aW === true)
            }
        }
        if (aT) {
            aS[this.activeCountryId] = aT
        } else {
            if (aT === true) {
                aS[this.activeCountryId] = true
            } else {
                aS[this.activeCountryId] = false
            }
        }
        return {
            consent_date: new Date().toISOString(),
            categories: aN,
            vendors: aX,
            cookies: aS,
            gpc: this.isGPCApply()
        }
    }
    ;
    aH.prototype._getConsentCookieExpDate = function(aN) {
        var aM = aN ? new Date(aN) : new Date();
        var aO = (this.consentDuration > 0) ? this.consentDuration : 12;
        aM.setMonth(aM.getMonth() + aO);
        return aM
    }
    ;
    aH.prototype._getConsentCookieDomainPath = function() {
        var aN = "/";
        var aP = this.activeSettings;
        var aM = aP.hasOwnProperty("includeSubdomains") ? aP.includeSubdomains : 0;
        if (aM === 2) {
            aN = this.activeDomain;
            if (!aN) {
                console.error("Attempted to set a cookie without a valid settings object");
                return
            }
            var aO = aN.indexOf("/");
            if (aO !== -1) {
                aN = aN.substring(aO)
            }
            aN = window.location.pathname.substr(0, aN.length)
        }
        return aN
    }
    ;
    aH.prototype._getConsentCookieDomain = function() {
        var aN = this.activeSettings;
        var aM = aN.hasOwnProperty("includeSubdomains") ? aN.includeSubdomains : 0;
        if (aM === 1) {
            return "." + this._getRootDomain(this.domain) + "." + this._getTLD(this.domain)
        }
        return null
    }
    ;
    aH.prototype._isConsentGiven = function() {
        var aM = this._getConsentCookie();
        return (null !== aM)
    }
    ;
    aH.prototype._deleteConsentCookie = function() {
        var aM = this._getConsentCookieDomain();
        var aO = this._getConsentCookieDomainPath();
        var aN = new Date(1970,1,1);
        this._removeLocalStorageItem(D + this.activeSettings.id);
        this._writeCookie(C, "", aN.toUTCString(), aO, aM)
    }
    ;
    aH.prototype.getConsentData = function() {
        var aN = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        var aM;
        if (aN == 1) {
            aM = this._getConsentCookie()
        }
        if (!aM) {
            aM = this._getConsentLocalStorage()
        }
        if (!aM) {
            aM = {
                name: null,
                value: null
            }
        }
        return aM
    }
    ;
    aH.prototype._getConsentLocalStorage = function() {
        var aO = D + this.activeSettings.id;
        var aM = this._readLocalStorage(aO);
        if (aM) {
            try {
                aM = JSON.parse(aM)
            } catch (aN) {}
            return {
                name: aO,
                value: aM
            }
        } else {
            return aM
        }
    }
    ;
    aH.prototype._getConsentCookie = function() {
        return this._getCookie(C)
    }
    ;
    aH.prototype._setConsentCookie = function(aV, aM, aW, aS, aN, aO) {
        if (typeof aN === "undefined" || aN === null) {
            aN = this.regulationConsentTypeId
        }
        if (aN === 0) {
            aN = aA
        }
        var aP = this._getDefaultConsentCookieData(aM, aW, aS);
        var aR = this._getConsentCookieExpDate(aV);
        var aU = this._getConsentCookieDomainPath();
        var aQ = this._getConsentCookieDomain();
        if (aV) {
            aP.consent_date = aV.toISOString()
        }
        aP.consent_type = aN;
        if (!aP.hasOwnProperty("consent_date")) {
            aP.consent_date = new Date()
        }
        var aT = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aP))) {
            if (aT != 1) {
                delete (aP.categories);
                delete (aP.vendors);
                delete (aP.cookies)
            }
        }
        if (this._getSuppressionCookie()) {
            this.dropSuppressionCookie(-1)
        }
        if (aO !== false) {
            if (!this._writeCookie(C, JSON.stringify(aP), aR.toUTCString(), aU, aQ)) {
                return false
            }
        }
        return aP
    }
    ;
    aH.prototype._isAllVendorsRequired = function(aO) {
        var aN = true;
        for (var aM = 0; aM < aO.length; aM++) {
            if (aO[aM].Required == 0) {
                aN = false
            }
        }
        return aN
    }
    ;
    aH.prototype._is50PercentVendorsTrue = function(aQ) {
        var aM = 0;
        var aO = 0;
        var aN = 50;
        for (var aP in aQ) {
            aO = aO + 1;
            if (aQ[aP].vEss === 1) {
                aM = aM + 1
            }
        }
        if (aM / aO * 100 > aN) {
            return true
        }
        return false
    }
    ;
    aH.prototype._updateConsentData = function(a2, aW) {
        this.gpcConflict = 0;
        var aR = this.getConsentData().value;
        var aO = (aR && aR.consent_date) ? new Date(aR.consent_date) : new Date();
        var aQ = (aR && aR.consent_type) ? aR.consent_type : aA;
        var aY = 50;
        var aT = this._getConsentCookieExpDate(aO);
        var aX = this._getConsentCookieDomainPath();
        var aS = this._getConsentCookieDomain();
        if (!aR) {
            aR = {}
        }
        if (!aR.hasOwnProperty(a2)) {
            aR[a2] = {}
        }
        aR[a2][this.activeCountryId] = aW;
        if (!aR.hasOwnProperty("consent_date")) {
            aR.consent_date = aO
        }
        if (!aR.hasOwnProperty("consent_type")) {
            aR.consent_type = aQ
        }
        if (a2 == "vendors" && this.optOutDetails.categories) {
            var aN = JSON.parse(JSON.stringify(this.optOutDetails.categories));
            var aM = aR.categories[this.activeCountryId];
            for (var aV in aM) {
                var aZ = 0;
                var aP = 0;
                if (aN[aV].required === 1 && !this.isGPCApply()) {
                    aM[aV] = true
                } else {
                    if (aN.hasOwnProperty(aV)) {
                        var a0 = aN[aV]["vendors"];
                        var a1 = this.activeSettings.vendorLinks;
                        if (this.consentDetailCategories && this.isGPCApply() && aN[aV]["dataSharing"] == 1) {
                            a0.forEach(function(a3) {
                                for (var a4 in a1) {
                                    if (a1[a4] == a3.CompanyIdentifier) {
                                        aW[a4] = aM[aV]
                                    }
                                }
                            })
                        } else {
                            a0.forEach(function(a3) {
                                for (var a4 in a1) {
                                    if (a1[a4] == a3.CompanyIdentifier) {
                                        aZ = aZ + 1;
                                        if (aW[a4] == true) {
                                            aP = aP + 1
                                        }
                                    }
                                }
                            });
                            aM[aV] = false;
                            if (aP / aZ * 100 > aY) {
                                aM[aV] = true
                            }
                        }
                    }
                }
            }
            aR.categories[this.activeCountryId] = aM
        }
        aR.gpc = this.isGPCApply();
        var aU = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aR))) {
            if (aU != 1) {
                delete (aR.categories);
                delete (aR.vendors);
                delete (aR.cookies)
            }
        }
        if (this._getSuppressionCookie()) {
            this.dropSuppressionCookie(-1)
        }
        this._writeCookie(C, JSON.stringify(aR), aT.toUTCString(), aX, aS)
    }
    ;
    aH.prototype._updateConsentedCategories = function(aM) {
        this._updateConsentData("categories", aM)
    }
    ;
    aH.prototype._updateConsentedCookies = function(aM) {
        this._updateConsentData("cookies", aM)
    }
    ;
    aH.prototype._updateConsentedVendors = function(aQ) {
        var aO = this.getConsentData().value;
        if (!aO.hasOwnProperty("vendors")) {
            aO.vendors = {}
        }
        var aM = aO.vendors[this.activeCountryId];
        if (!aQ) {
            var aN = this.getActiveVendors();
            aQ = this._getNewVendors(aN, aM)
        }
        var aR = {};
        if (Array.isArray(aM)) {
            for (var aP = 0; aP < aM.length; aP++) {
                aR[aM[aP]] = true
            }
        } else {
            if (typeof aM === "object") {
                for (var aS in aM) {
                    aR[aS] = aM[aS]
                }
            }
        }
        if (Array.isArray(aQ)) {
            for (var aP = 0; aP < aQ.length; aP++) {
                aR[aQ[aP]] = true
            }
        } else {
            if (typeof aQ === "object") {
                for (var aS in aQ) {
                    aR[aS] = aQ[aS]
                }
            }
        }
        this._updateConsentData("vendors", aR)
    }
    ;
    aH.prototype._getSuppressionCookie = function() {
        return this._getCookie(aI)
    }
    ;
    aH.prototype._createListFromItem = function(aN) {
        var aP = [];
        try {
            for (var aO in aN) {
                if (aN[aO] === true) {
                    aP.push(aO.toLowerCase())
                }
            }
        } catch (aM) {}
        return aP.join()
    }
    ;
    aH.prototype._runAdobeOptIn = function(aN, aQ) {
        if (window.adobe && window.adobe.optIn) {
            if (aN && aN.hasOwnProperty("all")) {
                adobe.optIn.approveAll()
            } else {
                var aM = []
                  , aO = [];
                for (var aP in aQ) {
                    switch (aP) {
                    case b:
                        if (aQ[aP] === true) {
                            aM.push(adobe.OptInCategories.ADCLOUD)
                        } else {
                            aO.push(adobe.OptInCategories.ADCLOUD)
                        }
                        break;
                    case c:
                        if (aQ[aP] === true) {
                            aM.push(adobe.OptInCategories.ANALYTICS)
                        } else {
                            aO.push(adobe.OptInCategories.ANALYTICS)
                        }
                        break;
                    case d:
                        if (aQ[aP] === true) {
                            aM.push(adobe.OptInCategories.AAM)
                        } else {
                            aO.push(adobe.OptInCategories.AAM)
                        }
                        break;
                    case e:
                        if (aQ[aP] === true) {
                            aM.push(adobe.OptInCategories.CAMPAIGN)
                        } else {
                            aO.push(adobe.OptInCategories.CAMPAIGN)
                        }
                        break;
                    case f:
                        if (aQ[aP] === true) {
                            aM.push(adobe.OptInCategories.ECID)
                        } else {
                            aO.push(adobe.OptInCategories.ECID)
                        }
                        break;
                    case g:
                        if (aQ[aP] === true) {
                            aM.push(adobe.OptInCategories.LIVEFYRE)
                        } else {
                            aO.push(adobe.OptInCategories.LIVEFYRE)
                        }
                        break;
                    case h:
                        if (aQ[aP] === true) {
                            aM.push(adobe.OptInCategories.TARGET)
                        } else {
                            aO.push(adobe.OptInCategories.TARGET)
                        }
                        break;
                    case i:
                        if (aQ[aP] === true) {
                            aM.push(adobe.OptInCategories.VIDEO_ANALYTICS)
                        } else {
                            aO.push(adobe.OptInCategories.VIDEO_ANALYTICS)
                        }
                        break
                    }
                }
                if (aM.length > 0) {
                    adobe.optIn.approve(aM)
                }
                if (aO.length > 0) {
                    adobe.optIn.deny(aO)
                }
            }
        }
    }
    ;
    aH.prototype._triggerTagManagerEvent = function(aM, aZ, aO) {
        if (this.tagManagerEventFired) {
            return
        }
        var aY = (aZ) ? this._createListFromItem(aZ) : "";
        var aN = (aM) ? this._createListFromItem(aM) : "";
        try {
            var aP = window.dataLayer || [];
            aP.push({
                event: aJ,
                consentCategories: aN,
                consentVendors: aY
            })
        } catch (aQ) {}
        if (typeof window.evidon.enableGoogleConsentSupport === "undefined" || window.evidon.enableGoogleConsentSupport) {
            try {
                var aT = ["google-adsense", "doubleclick", "doubleclick-bid-manager-formerly-invite-media", "admeld", "google-adwords", "google-display-network", "admob-google", "adometry", "google-ad-services", "google-mobile-ads", "googleima"];
                var aU = ["google-analytics"];
                var aS = "denied"
                  , aR = "denied";
                if (aY == "all") {
                    aS = "granted";
                    aR = "granted"
                } else {
                    if (aY) {
                        var aX = aY.split(",");
                        for (var aW = 0; aW < aU.length; aW++) {
                            if (aX.indexOf(aU[aW]) !== -1) {
                                aS = "granted"
                            }
                        }
                        for (var aW = 0; aW < aT.length; aW++) {
                            if (aX.indexOf(aT[aW]) !== -1) {
                                aR = "granted"
                            }
                        }
                    }
                }
                if (this.companyId != 1782) {
                    window.dataLayer = window.dataLayer || [];
                    function aV() {
                        dataLayer.push(arguments)
                    }
                    aV("consent", "update", {
                        ad_storage: aR,
                        analytics_storage: aS
                    })
                }
            } catch (aQ) {}
        }
        try {
            if (window.utag) {
                window.utag.link({
                    event_name: aJ,
                    consent_categories: aN,
                    consent_vendors: aY
                })
            }
        } catch (aQ) {}
        try {
            if (window.tC) {
                tC.event[aJ](this, {
                    consent_categories: aN,
                    consent_vendors: aY
                })
            }
        } catch (aQ) {}
        this.tagManagerEventFired = true
    }
    ;
    aH.prototype._getCategoriesReturnObject = function(aM) {
        var aN = {};
        if (typeof aM === "undefined") {
            aM = (this._getConsentedCategories() || {})
        }
        if (!aM) {
            aM = {}
        }
        if (aM === true || this.consentDetailCategories === false) {
            aN = {
                all: true
            }
        } else {
            aN = aM
        }
        return aN
    }
    ;
    aH.prototype._getVendorsReturnObject = function(aO) {
        if (typeof aO === "undefined") {
            aO = (this._getConsentedVendors() || {})
        }
        if (aO === true) {
            return {
                all: true
            }
        } else {
            var aP = {};
            if (Array.isArray(aO)) {
                for (var aM = 0; aM < aO.length; aM++) {
                    var aN = aO[aM];
                    if (this.vendorList.hasOwnProperty(aN) === false) {
                        console.error("Vendor " + aN + " not found in vendorList");
                        continue
                    }
                    aP[this.vendorList[aN]] = true
                }
            } else {
                if (typeof aO === "object") {
                    if (Object.isEmpty(aO)) {
                        aP = {
                            all: true
                        }
                    } else {
                        if (aO.hasOwnProperty("all") && aO.all) {
                            aP = aO
                        } else {
                            for (var aN in aO) {
                                if (this.vendorList.hasOwnProperty(aN) === false) {
                                    console.error("Vendor " + aN + " not found in vendorList");
                                    continue
                                }
                                aP[this.vendorList[aN]] = aO[aN]
                            }
                        }
                    }
                } else {
                    console.error("vendors object not recognized", aO)
                }
            }
            return aP
        }
    }
    ;
    aH.prototype._getCookiesReturnObject = function(aM) {
        var aN = {};
        if (typeof aM === "undefined") {
            aM = (this._getConsentedCookies() || {})
        }
        if (aM === true) {
            aN = {
                all: true
            }
        } else {
            if (aM && typeof aM === "object") {
                if (Object.isEmpty(aM)) {
                    aM.all = true
                }
                aN = aM
            }
        }
        return aN
    }
    ;
    aH.prototype._runConsentCallback = function(aM, aR, aN) {
        if (this.regulationConsentTypeId == aB && (aM !== undefined || aR !== undefined)) {
            var aO = 0;
            if (typeof aM === "object" && aM !== null) {
                for (var aQ in aM) {
                    if (aM[aQ] === true) {
                        aO = 1;
                        break
                    }
                }
            }
            if (typeof aR === "object" && aR !== null) {
                for (var aP in aR) {
                    if (aR[aP] === true) {
                        aO = 1;
                        break
                    }
                }
            }
            this.consentIsGiven = (aO !== 0)
        } else {
            this.consentIsGiven = true
        }
        if (this.consentCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        aM = this._getCategoriesReturnObject(aM);
        if (Object.isEmpty(aM)) {
            aM.all = true
        }
        aR = this._getVendorsReturnObject(aR);
        aN = this._getCookiesReturnObject(aN);
        if (window.evidon && window.evidon.priorConsentCallback) {
            window.evidon.priorConsentCallback(aM, aR, aN)
        }
        if (this.iabEnabled && this.shouldCallCMP) {
            if (this.iabVersion === 1 && window.__cmp) {
                __cmp("consentGiven");
                __cmp("saveConsent")
            } else {
                if (this.iabVersion === 2 && window.__tcfapi) {
                    __tcfapi("consentGiven");
                    __tcfapi("saveConsent")
                }
            }
        }
        this.consentCallbackExecuted = true;
        this._triggerTagManagerEvent(aM, aR, aN);
        this._runAdobeOptIn(aM, aR)
    }
    ;
    aH.prototype._runCloseCallback = function() {
        this.consentIsGiven = false;
        if (this.closeCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        if (window.evidon && window.evidon.closeCallback) {
            window.evidon.closeCallback()
        }
        if (this.iabEnabled && this.iabVersion === 1 && window.evidon.cmp) {
            window.evidon.cmp.consentClosed()
        }
        if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
            window.evidon.cmpv2.consentClosed()
        }
        this._showConsentAccess();
        this.closeCallbackExecuted = true
    }
    ;
    aH.prototype._runDeclineCallback = function() {
        if (this.declineCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        this.consentIsGiven = false;
        if (this.regulationConsentTypeId === aB) {
            this.consentIsGiven = true;
            this.dropSuppressionCookie(365);
            this._showConsentAccess()
        }
        if (this.regulationConsentTypeId === aA) {
            this._setConsentCookie(null, false, false, false, this.regulationConsentTypeId, false);
            try {
                gtag("consent", "update", {
                    ad_storage: "denied",
                    analytics_storage: "denied"
                })
            } catch (aM) {}
        }
        if (window.evidon && window.evidon.consentDeclinedCallback) {
            window.evidon.consentDeclinedCallback()
        }
        if (this.iabEnabled && this.iabVersion === 1 && window.evidon.cmp) {
            window.evidon.cmp.consentDeclined()
        }
        if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
            window.evidon.cmpv2.consentDeclined()
        }
        this.declineCallbackExecuted = true
    }
    ;
    aH.prototype._getLegacyNoticeType = function() {
        if (this.consentTypeId == H) {
            if (this.privacyAccessTypeId == a.LINK) {
                return 0
            } else {
                if (this.privacyAccessTypeId == a.BUTTON) {
                    return s
                }
            }
        } else {
            if (this.consentTypeId == F) {
                if (this.privacyAccessTypeId == a.LINK) {
                    return S
                } else {
                    if (this.privacyAccessTypeId == a.BUTTON) {
                        return R
                    }
                }
            } else {
                if (this.consentTypeId == G) {
                    return O
                }
            }
        }
        return 0
    }
    ;
    aH.prototype._closeL3 = function() {
        var aM = document.getElementById(aq);
        var aN = document.getElementById(Z);
        if (aM) {
            aM.style.display = "none";
            aM.style.opacity = "0";
            setTimeout(function() {
                try {
                    aM.parentElement.removeChild(aM)
                } catch (aO) {
                    console.log(aO)
                }
            }, 200)
        }
        if (aN) {
            aN.style.display = "none";
            aN.style.opacity = 0;
            setTimeout(function() {
                try {
                    aN.parentElement.removeChild(aN)
                } catch (aO) {
                    console.log(aO)
                }
            }, 200)
        }
    }
    ;
    aH.prototype._navigationConsentGiven = function() {
        if (!this.navigationConsentEnabled) {
            return false
        }
        var aN = document.referrer;
        var aM = this.activeDomain;
        if (aM.substr(aM.length - 1) === "/") {
            aM = aM.substr(0, aM.length - 1)
        }
        if (aN && aN != document.URL && aN.indexOf(aM) > -1) {
            this.dropPixel(an);
            return true
        } else {
            return false
        }
    }
    ;
    aH.prototype._setTranslationValues = function(aP, aQ) {
        for (var aO in aP) {
            var aM = aP[aO];
            if (aM && typeof aM === "object") {
                var aN = aM.id;
                aP[aO] = aQ[aN]
            }
        }
        return aP
    }
    ;
    aH.prototype._getTranslationId = function() {
        var aP = this.activeSettings;
        if (!aP) {
            return null
        }
        if (aP.translations.hasOwnProperty(this.languageRoot)) {
            var aQ = aP.translations[this.languageRoot];
            var aN = 0;
            if (aQ.hasOwnProperty(this.languageCode)) {
                aN = aQ[this.languageCode]
            } else {
                if (aQ.hasOwnProperty(this.languageRoot)) {
                    aN = aQ[this.languageRoot]
                } else {
                    if (this.languageRoot == "en" && aQ.hasOwnProperty("en-us")) {
                        aN = aQ["en-us"]
                    } else {
                        function aM(aS) {
                            for (var aR in aS) {
                                return aR
                            }
                        }
                        var aO = aM(aQ);
                        if (aO) {
                            aN = aQ[aO]
                        }
                    }
                }
            }
            return aN
        } else {
            return null
        }
    }
    ;
    aH.prototype._setActiveTranslations = function() {
        if (!this.languageRoot || !this.translations) {
            return
        }
        if (!this.activeSettings) {
            if (!this.translations.hasOwnProperty(this.languageRoot)) {
                this.activateTranslations(this.languageCode || this.languageRoot)
            }
        } else {
            var aS = this.activeSettings;
            if (window.evidon && window.evidon.usegranulartranslations !== false) {
                window.evidon.usegranulartranslations = true
            }
            var aO = (typeof window.evidon.usegranulartranslations === "undefined") ? false : window.evidon.usegranulartranslations;
            if (aO) {
                this.loadTranslations()
            } else {
                if (aS.translations.hasOwnProperty(this.languageRoot)) {
                    if (this.translations.hasOwnProperty(this.languageRoot)) {
                        var aP = this._getTranslationId();
                        this.activeTranslationId = aP;
                        if (this.activeTranslationId) {
                            var aT = this.translations[this.languageRoot];
                            if (aT.hasOwnProperty("items")) {
                                this.activeTranslations = this._setTranslationValues(aT[aP], aT.items);
                                if (aT.hasOwnProperty("categories")) {
                                    var aM = null;
                                    if (aT.categories.hasOwnProperty(this.categorySetId)) {
                                        aM = aT.categories[this.categorySetId]
                                    } else {
                                        aM = aT.categories["0"]
                                    }
                                    var aN = this.activeTranslations.languageCode;
                                    if (aM.hasOwnProperty(aN)) {
                                        this.activeTranslations.categories = aM[aN]
                                    } else {
                                        var aR = Object.keys(aM);
                                        var aQ = aR[0];
                                        this.activeTranslations.categories = aM[aQ]
                                    }
                                }
                            } else {
                                this.activeTranslations = aT[aP]
                            }
                        }
                    } else {
                        this.activateTranslations(this.languageCode || this.languageRoot)
                    }
                } else {
                    this.activateTranslations(aS.defaultTranslation.code)
                }
            }
        }
    }
    ;
    aH.prototype._shouldShowConsentUI = function() {
        var aM = this._isConsentGiven();
        var aN = this._getSuppressionCookie();
        if (this.consentTypeId === H) {
            return false
        } else {
            if (aN) {
                return false
            } else {
                if (!this.consentRequired && !aM) {
                    return true
                } else {
                    return !aM
                }
            }
        }
    }
    ;
    aH.prototype._showConsentUI = function() {
        var aM = this._getSuppressionCookie();
        if (this.consentTypeId === H || aM) {
            return
        } else {
            if (this.consentTypeId === F) {
                if (P.indexOf(this.companyId) > -1) {
                    this.appendScript(aG + Q.BANNER_SCRIPT)
                } else {
                    this.appendScript(aG + k)
                }
                if (this.activeTranslations && window.evidon.banner) {
                    if (!document.getElementById("_evidon_banner")) {
                        window.evidon.banner.createNotice()
                    } else {
                        window.evidon.banner.setTextValues(this.activeTranslations)
                    }
                }
            } else {
                if (this.consentTypeId === G) {
                    if (P.indexOf(this.companyId) > -1) {
                        this.appendScript(aG + Q.BARRIER_SCRIPT)
                    } else {
                        this.appendScript(aG + l)
                    }
                    if (this.activeTranslations && window.evidon.barrier) {
                        if (!document.getElementById("_evidon-barrier-wrapper")) {
                            window.evidon.barrier.createBarrierNotice()
                        } else {
                            window.evidon.barrier.setTextValues(this.activeTranslations)
                        }
                    }
                }
            }
        }
    }
    ;
    aH.prototype._showConsentAccess = function() {
        var aN = ""
          , aM = this;
        if (this.privacyAccessTypeId === a.LINK) {
            aN = this.getLinkStyle();
            if (aN && window.evidon.link) {
                window.evidon.link.createLink(aN);
                if (this.activeTranslations) {
                    window.evidon.link.setLinkText(this.activeTranslations)
                }
            }
        } else {
            setTimeout(function() {
                var aO = ((typeof window.evidon.banner !== "undefined" && window.evidon.banner.isVisible()) || (typeof window.evidon.barrier !== "undefined" && window.evidon.barrier.isVisible()));
                if (!aO) {
                    aN = aM.getButtonStyle();
                    if (aN && window.evidon.button) {
                        window.evidon.button.createButton(aN);
                        if (aM.activeTranslations) {
                            window.evidon.button.setButtonText(aM.activeTranslations)
                        }
                        aM.checkConsentedVendors();
                        window.evidon.button.show()
                    }
                } else {
                    window.evidon.button.hide()
                }
            }, 500)
        }
    }
    ;
    aH.prototype._runNoConsentFlow = function() {
        if (this.consentRequired) {
            return
        }
        this._runConsentCallback();
        if (!this._isConsentGiven()) {
            this._showConsentUI()
        }
        this._showConsentAccess()
    }
    ;
    aH.prototype._runOptInFlow = function() {
        var aN = this._getSuppressionCookie();
        if (!aN) {
            if (this._isConsentGiven()) {
                this._isGPCConflict();
                this._runConsentCallback()
            } else {
                var aM = this._getConsentLocalStorage();
                if (aM) {
                    this._removeLocalStorageItem(D + this.activeSettings.id)
                }
                this._setConsentCookie(null, false, false, false, this.regulationConsentTypeId, false);
                if (this.consentTypeId === F) {
                    this._hookConsentEvents()
                }
                this._showConsentUI()
            }
        }
        this._showConsentAccess()
    }
    ;
    aH.prototype._isGPCConflict = function() {
        var aN = this.getConsentData();
        if (aN.name !== null) {
            var aM = aN.value.hasOwnProperty("gpc") ? aN.value.gpc : null;
            if (aM === 0 && this.isGPCApply() === 1) {
                this.gpcConflict = 1;
                this.showPreferencesDialog();
                return
            }
        }
    }
    ;
    aH.prototype._runOptOutFlow = function() {
        var aN = this._getSuppressionCookie();
        this._isGPCConflict();
        if (this._isConsentGiven()) {
            if (this.consentDetailCategories) {
                var aM = this._getConsentedCategories();
                if (aM && !aM.hasOwnProperty("all")) {
                    this._runConsentCallback(aM, null, null)
                }
            } else {
                if (this.consentDetailVendors) {
                    var aO = this._getConsentedVendors();
                    if (aO) {
                        this._runConsentCallback(null, aO, null)
                    }
                }
            }
        } else {
            if (!aN) {
                this._setConsentCookie(null, true, true, true, this.regulationConsentTypeId, false)
            }
            this._runConsentCallback();
            if (!aN) {
                this._showConsentUI()
            }
        }
        this._showConsentAccess()
    }
    ;
    aH.prototype._getActiveCountryObject = function() {
        if (this.country && this.activeSettings) {
            var aM = this.country.id;
            if (this.activeStateId && this.activeSettings.hasOwnProperty("states") && this.activeSettings.states.hasOwnProperty(this.activeStateId)) {
                return this.activeSettings.states[this.activeStateId]
            } else {
                if (this.activeSettings.countries.hasOwnProperty(aM)) {
                    this.activeCountryId = aM;
                    return this.activeSettings.countries[aM]
                } else {
                    this.activeCountryId = this.activeSettings.defaultCountry;
                    return this.activeSettings.countries[this.activeSettings.defaultCountry]
                }
            }
        }
        return null
    }
    ;
    aH.prototype.dropPixel = function(aM, aP) {
        var aO = window.evidon.id;
        var aR = this.activeSettings.id;
        var aN = this.activeCountryId;
        var aT = au;
        if (aT.substr(aT.length - 1) !== "/") {
            aT += "/"
        }
        aT += aO + "/" + aR + "/" + aN + "/" + aM + "/" + this.consentTypeId + "/" + this.privacyAccessTypeId;
        if (this.activeTranslationId != 0) {
            aT += "/" + this.activeTranslationId
        }
        if (this.pixelsDropped.indexOf(aT) === -1 || aP) {
            this.pixelsDropped.push(aT);
            var aS = [];
            aS.push("consent=" + ((this.consentIsGiven) ? "1" : "0"));
            if (this.customerUserId) {
                aS.push("u=" + encodeURI(this.customerUserId))
            }
            if (typeof this.regulationId !== "undefined" && this.regulationId !== null) {
                aS.push("regulationid=" + this.regulationId)
            }
            if (typeof this.regulationConsentTypeId !== "undefined" && this.regulationConsentTypeId !== null) {
                aS.push("regulationconsenttypeid=" + this.regulationConsentTypeId)
            }
            if (typeof this.activeStateId !== "undefined" && this.activeStateId !== null) {
                aS.push("stid=" + this.activeStateId)
            }
            var aU = this.getParentOrigin();
            if (aU) {
                aS.push("d=" + aU)
            }
            aT += "?" + aS.join("&");
            aT = aT.substring(0, 2048);
            var aQ = new Image(0,0);
            aQ.style.display = "none";
            aQ.src = aT
        }
    }
    ;
    aH.prototype.consentGiven = function(aN, aM, aR, aQ, aO) {
        var aP = false;
        if (typeof aO === "undefined" || aO === null) {
            aO = aA
        }
        if (!this._isConsentGiven() && !this.shouldSupportAmp) {
            aP = this._setConsentCookie(null, aM, aR, aQ, aO)
        } else {
            aP = this._isConsentGiven()
        }
        this._runConsentCallback(aM, aR, aQ);
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
        if (aP) {
            if (typeof aN === "undefined" || aN === false) {
                this.dropPixel(j)
            }
            this.navigationStack = [];
            this.showNotice()
        } else {
            if (this.shouldSupportAmp) {} else {
                console.error("Unable to set ConsentCookie")
            }
        }
    }
    ;
    aH.prototype.consentChanged = function(aM, aO, aN) {
        if (window.evidon.consentChangedCallback !== undefined && this.consentChangedCallbackExecuted) {
            window.evidon.consentChangedCallback(aM, aO, aN)
        }
        this.consentChangedCallbackExecuted = false;
        this.tagManagerEventFired = false;
        aO = this._getVendorsReturnObject(aO);
        aN = this._getCookiesReturnObject(aN);
        this._triggerTagManagerEvent(aM, aO, aN);
        this._runAdobeOptIn(aM, aO)
    }
    ;
    aH.prototype.closeGiven = function() {
        this._runCloseCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
    }
    ;
    aH.prototype.declineGiven = function() {
        this._runDeclineCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
        this._showConsentAccess()
    }
    ;
    aH.prototype.getConsentUrl = function() {
        var aM = window.evidon.id;
        var aP = this.activeSettings.id;
        var aN = this.activeCountryId;
        var aO = this.languageCode;
        return aa + aM + "/" + aP + "/" + aN + "?lang=" + aO
    }
    ;
    aH.prototype.getDataRequestUrl = function(aP) {
        var aM = window.evidon.id;
        var aQ = this.activeSettings.id;
        var aN = this.activeCountryId;
        var aS = this.activeStateId ? this.activeStateId : 0;
        var aR = this.regulationRightsId;
        var aO = aP ? "embed=1" : "";
        return K + aM + "/" + aQ + "/" + aN + "/" + aR + "/" + aS + "?" + aO
    }
    ;
    aH.prototype.getDoNotSellRequestUrl = function(aP) {
        var aM = window.evidon.id;
        var aQ = this.activeSettings.id;
        var aN = this.activeCountryId;
        var aS = this.activeStateId ? this.activeStateId : 0;
        var aR = this.regulationId;
        var aO = aP ? "embed=1" : "";
        return K + aM + "/" + aQ + "/" + aN + "/" + aR + "/" + aS + "?doNotSell=1&" + aO
    }
    ;
    aH.prototype.getPrivacyPolicyLink = function() {
        if (!this.activeCountryId) {
            return "#"
        }
        var aN = this.activeSettings;
        var aM = this._getActiveCountryObject();
        if (aM && aN.privacyLinks && aN.privacyLinks.hasOwnProperty(aM.privacyLinkId)) {
            return this._fixurl(this.activeSettings.privacyLinks[aM.privacyLinkId])
        }
        return "#"
    }
    ;
    aH.prototype.getCookiePolicyLink = function() {
        if (!this.activeCountryId) {
            return "#"
        }
        var aN = this.activeSettings;
        var aM = this._getActiveCountryObject();
        if (aM && aN.cookieLinks && aN.cookieLinks.hasOwnProperty(aM.cookieLinkId)) {
            return this._fixurl(this.activeSettings.cookieLinks[aM.cookieLinkId])
        }
        return "#"
    }
    ;
    aH.prototype.showPreferencesDialog = function(aN, aO) {
        var aM = this;
        if (!window.evidon.preferencesDialog) {
            this.appendScript(aG + aw, function() {
                aM.showPreferencesDialog(aN, aO)
            });
            window.evidon.events.subscribe("l2closed", function() {
                aM._showConsentAccess()
            }, 1)
        } else {
            if (window.evidon.preferencesDialog.isDisplayed && window.evidon.preferencesDialog.isDisplayed()) {
                return
            }
            if (aN === undefined) {
                window.evidon.preferencesDialog.TAB_ID = aN;
                window.evidon.preferencesDialog.TAB_SECONDARY_ID = aO;
                if (this.isUSOptOutRegulation() && !this._isConsentGiven() && this.dnsRightsType !== 0) {
                    if (this.dnsEnabled) {
                        aN = this.PREFDIAG_TABS.DONOTSELL
                    }
                }
                if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
                    window.evidon.cmpv2.consentUIShown()
                }
            }
            if (aN) {
                window.evidon.preferencesDialog.TAB_ID = aN
            }
            if (aO) {
                window.evidon.preferencesDialog.TAB_SECONDARY_ID = aO
            }
            window.evidon.preferencesDialog.init();
            this.dropPixel(T);
            if (typeof window.evidon.banner !== "undefined" && window.evidon.banner) {
                window.evidon.banner.hideForOptions()
            }
            if (typeof window.evidon.barrier !== "undefined" && window.evidon.barrier) {
                window.evidon.barrier.hideForOptions()
            }
        }
    }
    ;
    aH.prototype.showOptionPanel = function(aN) {
        var aM = this;
        if (!window.evidon.gdprL2) {
            if (P.indexOf(this.companyId) > -1) {
                this.appendScript(aG + Q.L2_SCRIPT, function() {
                    aM.showOptionPanel(aN)
                })
            } else {
                this.appendScript(aG + U, function() {
                    aM.showOptionPanel(aN)
                })
            }
            this.dropPixel(T)
        } else {
            window.evidon.gdprL2.showOverlay(aN)
        }
    }
    ;
    aH.prototype.showOptions = function(aM, aN, aO) {
        if (this.L2Enabled) {
            if (this.getPreferencesDialogV2Enabled()) {
                this.showPreferencesDialog(aN, aO)
            } else {
                this.showOptionPanel(aM)
            }
        } else {
            this.showConsentTool(aM)
        }
    }
    ;
    aH.prototype.showConsentTool = function(aR) {
        var aO = (this.activeSettings.consentDisplayType === undefined) ? 1 : (this.activeSettings.consentDisplayType || 1);
        var aS = (aO == W || (aO == X && window.location.protocol.indexOf("https") === -1));
        if (aS) {
            var aM = document.createElement("div");
            aM.style.cssText = "background-color: #000000; opacity:.7; position:fixed;top:0;left:0;bottom:0;right:0; z-index:2147483640;";
            aM.id = aq;
            document.body.appendChild(aM);
            var aP = document.createElement("div");
            aP.id = Z;
            if (this.isMobile()) {
                aP.style.cssText = "position:absolute; top:0;left:0; bottom:0; right:0;;z-index:2147483647; padding: 28px 0 0 0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-y:scroll;"
            } else {
                aP.style.cssText = "position:fixed; top: 10%;left:20%; width:60%;height:80%;z-index:2147483647; padding: 28px 0 0 0;"
            }
            var aN = document.createElement("button");
            aN.style.cssText = "position:absolute; top:4px;right:8px;color:white; background:transparent;font-size:12px;border:0; psdding:4px;cursor:pointer;padding:0;";
            aN.innerHTML = this.activeTranslations.gdprl2Close + "&nbsp; &#x2716;";
            aN.onclick = this._closeL3;
            aP.appendChild(aN);
            var aQ = document.createElement("iframe");
            aQ.id = "_evidon-consent-frame";
            aQ.scrolling = "yes";
            aQ.seamless = "seamless";
            aQ.frameBorder = "0";
            aQ.src = this.getConsentUrl();
            aQ.style.cssText = "width:100%; height:100%;";
            aQ.onload = function() {
                document.getElementById(Z).style.position = "fixed"
            }
            ;
            aP.appendChild(aQ);
            document.body.appendChild(aP)
        } else {
            window.open(this.getConsentUrl(), "L3")
        }
        this.dropPixel(Y)
    }
    ;
    aH.prototype.isMobile = function() {
        var aM = navigator.userAgent;
        return (/ip(hone|od)|(android).+mobile|opera m(ob|in)i/i).test(aM) || (/Android/).test(aM) || (/iPhone/).test(aM) || (/iPad/).test(aM)
    }
    ;
    aH.prototype.showNotice = function() {
        if (!this.settings) {
            if (window.evidon.settings !== undefined && window.evidon.settings) {
                this.settings = window.evidon.settings
            } else {
                return
            }
        }
        if (!this.country) {
            if (window.evidon.location) {
                this.country = window.evidon.location
            }
        }
        if (!this.country) {
            return
        }
        this.activeSettings = this._getSettings();
        if (!this.activeSettings) {
            return
        }
        this.activeCountryId = this.country.id;
        this.activeStateId = (this.country.hasOwnProperty("stateId")) ? this.country.stateId : null;
        var aQ = this._getActiveCountryObject();
        var aU = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (aU == 1) {
            var aR = this._getConsentCookie();
            if (aR) {
                this._removeLocalStorageItem(D + this.activeSettings.id);
                this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aR.value))
            }
        }
        if (!aQ) {
            console.log("No consent settings found for the country: " + this.activeCountryId);
            return
        }
        if (!this._isDomReady()) {
            return
        }
        if (!this.themes) {
            this.themes = (window.evidon.themes || null)
        }
        if (!this.themes) {
            return
        }
        if (!this.vendorList) {
            if (this.activeSettings.vendorLinks) {
                this.vendorList = this.activeSettings.vendorLinks
            } else {
                this.getVendorList();
                return
            }
        }
        if (!this.activecategorySet) {
            if (this.activeSettings.vendorCategory && window.evidon.activeCategory) {
                var aN = {};
                var a0 = window.Prototype;
                var aM = window.evidon.activeCategory;
                this.activecategorySet = this.activeSettings.vendorCategory[aQ.vendorCategory] !== undefined ? this.activeSettings.vendorCategory[aQ.vendorCategory] : null;
                if (this.activecategorySet !== null) {
                    for (var aV in aM) {
                        var aW = aM[aV];
                        if (typeof aW.cName === "string") {
                            bucketid = aW.cName.toLowerCase()
                        }
                        if (bucketid === null) {
                            continue
                        }
                        var aX = {};
                        for (var aT = 0; aT < aW.catId.length; aT++) {
                            var aY = this.activecategorySet.find(function(a6) {
                                if (a6.catid === aW.catId[aT]) {
                                    return a6
                                }
                            });
                            if (aY !== undefined) {
                                function a5(a7, a6) {
                                    return function(a8, a9) {
                                        a8[a9] = {
                                            vEss: a7,
                                            catid: a6
                                        };
                                        return a8
                                    }
                                }
                                if (a0 && parseFloat(a0.Version) < 1.7 && Array.prototype.reduce) {
                                    var a3 = aY.rqdVndr.mVendorObjectReduce(a5(1, aW.catId[aT]), {});
                                    var aZ = aY.optnlVndr.mVendorObjectReduce(a5(0, aW.catId[aT]), {})
                                } else {
                                    var a3 = aY.rqdVndr.reduce(a5(1, aW.catId[aT]), {});
                                    var aZ = aY.optnlVndr.reduce(a5(0, aW.catId[aT]), {})
                                }
                                aX = Object.assign({}, a3, aZ, aX)
                            }
                        }
                        if (Object.keys(aX).length !== 0) {
                            aN[bucketid] = {
                                CategoryBucketId: aV,
                                name: aW.cName,
                                defaultCategoryId: aW.catId,
                                cEss: (aW.cEstnl === true ? 1 : 0),
                                vendors: aX,
                                dataSharing: (aW.dataSharing === true ? 1 : 0)
                            }
                        }
                    }
                }
                this.activecategorySet = aN
            }
        }
        if (aQ.hasOwnProperty("consentTemplate") && window.evidon.consentTemplates) {
            var aO = aQ.consentTemplate;
            var aP = window.evidon.consentTemplates[aO];
            this._loadSettings(aP)
        } else {
            this._loadSettings(aQ)
        }
        this.dataRightsType = aQ.dataRightsType === undefined ? 0 : aQ.dataRightsType;
        var a2 = (aQ.rightslinkId === undefined) ? 0 : aQ.rightslinkId;
        if (a2 === 0) {
            this.rightsLink = ""
        } else {
            if (this.activeSettings.hasOwnProperty("rightsLinks")) {
                if (this.activeSettings.rightsLinks.hasOwnProperty(a2)) {
                    this.rightsLink = this._fixurl(this.activeSettings.rightsLinks[a2])
                } else {
                    this.rightsLink = ""
                }
            } else {
                this.rightsLink = ""
            }
        }
        this.dnsRightsType = (aQ.hasOwnProperty("dnsRightsType")) ? aQ.dnsRightsType : 1;
        if (this.dnsRightsType == 0) {
            var aS = (aQ.dnslinkId === undefined) ? 0 : aQ.dnslinkId;
            if (aS === 0) {
                this.dnsLink = ""
            } else {
                if (this.activeSettings.hasOwnProperty("dnsLinks")) {
                    if (this.activeSettings.dnsLinks.hasOwnProperty(aS)) {
                        this.dnsLink = this._fixurl(this.activeSettings.dnsLinks[aS])
                    } else {
                        this.dnsLink = ""
                    }
                } else {
                    this.dnsLink = ""
                }
            }
        } else {
            this.dnsLink = ""
        }
        var a1 = (aQ.pubvendorsLinkId === undefined) ? 0 : aQ.pubvendorsLinkId;
        if (a1 === 0) {
            this.pubvendorsLink = null
        } else {
            this.pubvendorsLink = this.activeSettings.pubvendorsLinks[a1]
        }
        this.activeVendorId = aQ.vendor;
        this.categorySetId = (aQ.hasOwnProperty("categorySetId") && aQ.categorySetId != 0) ? aQ.categorySetId : 0;
        this.activeCategorySetId = aQ.category;
        this.noticeGpcEnabled = aQ.gpcEnabled;
        this.regulationRightsId = aQ.regulationRightsId;
        this._setActiveTranslations();
        if (!this._isConsentGiven() && this._navigationConsentGiven()) {
            this.consentGiven(true)
        }
        if (!this.consentRequired) {
            this._runNoConsentFlow()
        } else {
            if (this.regulationConsentTypeId === aA) {
                this._runOptInFlow()
            } else {
                if (this.regulationConsentTypeId === aB) {
                    this._runOptOutFlow()
                }
            }
        }
        this.dropPixel(aD);
        if (this.iabEnabled) {
            if (this.iabVersion === 1) {
                this.appendScript(z)
            } else {
                if (this.iabVersion === 2) {
                    this.appendScript("https://iabmap.evidon.com/tcfv2/iabevidonmapping.js");
                    this.appendScript("https://c.evidon.com/iab/vendor-list-script.json")
                }
            }
            this.appendScript(aG + A[this.iabVersion]);
            var a4 = this._getSuppressionCookie();
            switch (this.iabVersion) {
            case 1:
                if (window.__cmp) {
                    window.__cmp("setSuppression", a4 !== null)
                } else {
                    console.error("unable to find __cmp stub")
                }
                break;
            case 2:
                if (window.__tcfapi) {
                    window.__tcfapi("setSuppression", a4 !== null)
                } else {
                    console.error("unable to find __tcfapi stub")
                }
                break
            }
        }
        window.evidon.events._fireEvent("loaded", null)
    }
    ;
    aH.prototype.checkConsentedVendors = function() {
        var aN = this.getActiveVendors();
        var aM = this._getConsentedVendors();
        if (aM && aM.hasOwnProperty("all")) {
            if (aM.all) {
                return
            }
        }
        var aO = this._getNewVendors(aN, aM);
        if (aO.length > 0 && typeof this.newVendorCallback === "function") {
            this.newVendorCallback(aO)
        }
    }
    ;
    aH.prototype.getActiveVendors = function() {
        if (!this.activeSettings || !this.activeSettings.hasOwnProperty("vendors")) {
            return
        }
        var aM = this.activeVendorId;
        if (aM === -1 || !this.activeSettings.vendors.hasOwnProperty(aM)) {
            return null
        }
        return this.activeSettings.vendors[aM]
    }
    ;
    aH.prototype._getConsentedCategories = function() {
        return this._getConsentDataSpecific("categories")
    }
    ;
    aH.prototype._getConsentedCookies = function() {
        return this._getConsentDataSpecific("cookies")
    }
    ;
    aH.prototype._getConsentedVendors = function() {
        return this._getConsentDataSpecific("vendors")
    }
    ;
    aH.prototype._getConsentDataSpecific = function(aO) {
        var aP = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (aP == 1) {
            var aM = this._getConsentCookie();
            var aN = this._getConsentDataFromCookie(aO);
            if (aN) {
                this._removeLocalStorageItem(D + this.activeSettings.id);
                aM.value[aO][this.activeCountryId] = aN;
                this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aM))
            }
        }
        if (!aN) {
            aN = this._getConsentDataFromLocalStorage(aO)
        }
        if (!aN) {
            aN = this._getConsentDataFromCookie(aO)
        }
        if (!aN && this.regulationConsentTypeId === aB && !this.isOptedOut()) {
            aN = {
                all: true
            }
        }
        return aN
    }
    ;
    aH.prototype._getConsentDataFromLocalStorage = function(aN) {
        var aM = this._readLocalStorage(D + this.activeSettings.id);
        if (!aM) {
            return null
        }
        aM = JSON.parse(aM);
        if (aM.hasOwnProperty(aN) && aM[aN].hasOwnProperty(this.activeCountryId)) {
            return aM[aN][this.activeCountryId]
        }
        return null
    }
    ;
    aH.prototype._getConsentDataFromCookie = function(aQ) {
        var aM = this._getConsentCookie();
        if (!aM || !aM.value) {
            return null
        }
        var aP = aM.value;
        if (typeof aP === "string") {
            var aN = new Date(unescape(aP));
            aP = this._setConsentCookie(aN)
        } else {
            if (typeof aP === "object") {
                var aR = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
                if (aP.hasOwnProperty(aQ) && aR != 1) {
                    var aO = (aP.hasOwnProperty("consent_type")) ? aP.consent_type : aA;
                    this._setConsentCookie(new Date(aP.consent_date), null, null, null, aO)
                }
            }
        }
        if (aP.hasOwnProperty(aQ) && aP[aQ].hasOwnProperty(this.activeCountryId)) {
            return aP[aQ][this.activeCountryId]
        }
        return null
    }
    ;
    aH.prototype._getNewVendors = function(aO, aM) {
        if (!aO || !aM) {
            return []
        }
        var aN = [];
        if (Array.isArray(aM)) {
            aN = aM
        } else {
            for (var aR in aM) {
                aN.push(parseInt(aR))
            }
        }
        var aQ = [];
        for (var aP = 0; aP < aO.length; aP++) {
            var aR = aO[aP];
            if (aN.indexOf(aR) === -1) {
                aQ.push(aR)
            }
        }
        return aQ
    }
    ;
    aH.prototype.setLocation = function(aM) {
        this.country = aM;
        if (!this.langaugeRoot) {
            this.activateTranslations(aM.defaultLanguage)
        }
        this.showNotice()
    }
    ;
    aH.prototype.setThemes = function(aM) {
        this.themes = aM;
        this.showNotice()
    }
    ;
    aH.prototype.getVendorList = function() {
        this.appendScript(aG + aL)
    }
    ;
    aH.prototype.setVendorList = function(aM) {
        this.vendorList = aM;
        this.showNotice()
    }
    ;
    aH.prototype.activateTranslations = function(aM) {
        if (aM === undefined || !aM) {
            return
        }
        this.languageCode = aM;
        this.languageRoot = aM;
        var aO = this.languageCode.indexOf("-");
        if (aO !== -1) {
            this.languageRoot = this.languageCode.substr(0, aO)
        }
        if (this.languageRoot === "nb") {
            this.languageRoot = "no"
        }
        if (this.translations.hasOwnProperty(this.languageRoot)) {
            this._setActiveTranslations();
            this.showNotice()
        } else {
            if (window.evidon && window.evidon.usegranulartranslations !== false) {
                window.evidon.usegranulartranslations = true
            }
            var aN = (typeof window.evidon.usegranulartranslations === "undefined") ? false : window.evidon.usegranulartranslations;
            if (!aN) {
                var aP = B + "/translations/" + this.languageRoot + ".js";
                this.appendScript(aP);
                this.activeTranslations = null
            } else {
                this.loadTranslations()
            }
        }
    }
    ;
    aH.prototype.loadTranslations = function() {
        if (!this.activeTranslationId) {
            this.activeTranslationId = this._getTranslationId()
        }
        if (!this.activeTranslationId) {
            if (this.activeSettings && this.activeSettings.defaultTranslation) {
                this.activateTranslations(this.activeSettings.defaultTranslation.code)
            } else {
                return
            }
        }
        var aN = B + "/translations/" + this.languageRoot + "-" + this.activeTranslationId + ".js"
          , aM = this;
        this.appendScript(aN, function() {
            var aS = aM.translations[aM.languageRoot];
            if (aS && aS.hasOwnProperty("items")) {
                aM.activeTranslations = aM._setTranslationValues(aS[aM.activeTranslationId], aS.items);
                if (aS.hasOwnProperty("categories")) {
                    var aO = null;
                    if (aS.categories.hasOwnProperty(aM.categorySetId)) {
                        aO = aS.categories[aM.categorySetId]
                    } else {
                        aO = aS.categories["0"]
                    }
                    var aP = aM.activeTranslations.languageCode;
                    if (aO.hasOwnProperty(aP)) {
                        aM.activeTranslations.categories = aO[aP]
                    } else {
                        var aR = Object.keys(aO);
                        var aQ = aR[0];
                        aM.activeTranslations.categories = aO[aQ]
                    }
                }
            } else {
                if (aS) {
                    aM.activeTranslations = aS[aM.activeTranslationId]
                }
            }
        }, function() {
            console.log("Unable to load the granular translation file: " + aN);
            window.evidon.usegranulartranslations = false;
            aM.activateTranslations(aM.languageCode)
        })
    }
    ;
    aH.prototype.setDomain = function(aM, aQ) {
        if (!aM) {
            this.domain = window.location.hostname.toLowerCase();
            this.path = window.location.pathname.toLowerCase();
            var aN = this.path.lastIndexOf("/");
            if (aN > -1) {
                var aO = this.path.indexOf(".", aN);
                if (aO > -1) {
                    this.path = this.path.substr(0, aN)
                }
            }
        } else {
            aM = aM.toLowerCase();
            var aO = aM.indexOf("://");
            if (aO !== -1) {
                aM = aM.substr(aO + 3)
            }
            aO = aM.indexOf("/");
            if (aO === -1) {
                this.domain = aM;
                this.path = "/"
            } else {
                this.domain = aM.substr(0, aO);
                aM = aM.substr(aO);
                aO = aM.indexOf("?");
                if (aO !== -1) {
                    aM = aM.substr(0, aO)
                }
                this.path = aM
            }
        }
        if (aQ === undefined || !aQ) {
            var aP = this._getRootDomain(this.domain);
            aP = aP.replace(".", "");
            var aR = (window.evidon.test !== undefined) ? window.evidon.test : false;
            var aS = B + "/" + aP + ((aR) ? "/test" : "") + "/settingsV2.js";
            this.appendScript(aS)
        }
        this.showNotice()
    }
    ;
    aH.prototype.addTranslation = function(aM, aN) {
        this.translations[aM] = aN;
        this.showNotice()
    }
    ;
    aH.prototype.loadSettings = function(aM) {
        this.settings = aM;
        this.showNotice()
    }
    ;
    aH.prototype.getBannerStyle = function() {
        if (this.consentTypeId !== F) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].banner
        } else {
            return null
        }
    }
    ;
    aH.prototype.getConsentTypeStyle = function() {
        var aM = this.getBarrierStyle();
        if (!aM) {
            aM = this.getBannerStyle()
        }
        return aM
    }
    ;
    aH.prototype.getBarrierStyle = function() {
        if (this.consentTypeId !== G) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].barrier
        } else {
            return null
        }
    }
    ;
    aH.prototype.getButtonStyle = function() {
        if (this.privacyAccessTypeId !== a.BUTTON) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].button
        } else {
            return null
        }
    }
    ;
    aH.prototype.getLinkStyle = function() {
        if (this.privacyAccessTypeId !== a.LINK) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].link
        } else {
            return null
        }
    }
    ;
    aH.prototype.getL2Style = function() {
        if (!this.L2Enabled) {
            return
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].l2
        } else {
            return null
        }
    }
    ;
    aH.prototype.getPreferencesDialogV2Enabled = function() {
        var aM = this.getL2Style();
        if (!aM) {
            return false
        }
        return this.isMobile() ? aM.mobileEnablePreferencesDialogV2 : aM.enablePreferencesDialogV2
    }
    ;
    aH.prototype.isGDPR = function() {
        return this.gdprEnabled || this.regulationId === aC.GDPR
    }
    ;
    aH.prototype.isCCPA = function() {
        return this.regulationId === aC.CCPA
    }
    ;
    aH.prototype.isCPRA = function() {
        return this.regulationId === aC.CPRA
    }
    ;
    aH.prototype.isVCDPA = function() {
        return this.regulationId === aC.VCDPA
    }
    ;
    aH.prototype.isCTDPA = function() {
        return this.regulationId === aC.CTDPA
    }
    ;
    aH.prototype.isCPA = function() {
        return this.regulationId === aC.CPA
    }
    ;
    aH.prototype.isUCPA = function() {
        return this.regulationId === aC.UCPA
    }
    ;
    aH.prototype.isNevadaLaw = function() {
        return this.regulationId === aC.NevadaLaw
    }
    ;
    aH.prototype.isUSOptOutRegulation = function() {
        return this.isCCPA() || this.isCPRA() || this.isVCDPA() || this.isCTDPA() || this.isCPA() || this.isUCPA() || this.isNevadaLaw()
    }
    ;
    aH.prototype.isOptedOut = function() {
        var aM = this._getConsentCookie();
        if (!aM || !aM.value) {
            return false
        }
        if (!aM.value.hasOwnProperty("consent_type")) {
            return false
        }
        return (aM.value.consent_type === aB)
    }
    ;
    aH.prototype.getTranslations = function() {
        return this.activeTranslations
    }
    ;
    aH.prototype.formatTranslation = function(bh) {
        var ba = new RegExp(L,"g")
          , a8 = new RegExp(E,"g")
          , bf = new RegExp(az,"g")
          , a9 = new RegExp(J,"g")
          , bb = new RegExp(M,"gi")
          , bg = new RegExp(aK,"gi")
          , a6 = new RegExp(w,"gi")
          , a7 = new RegExp(x,"gi")
          , be = new RegExp(av,"gi")
          , bc = new RegExp(am,"g")
          , bd = new RegExp(at,"g")
          , aW = this.getConsentUrl()
          , a5 = this.getPrivacyPolicyLink()
          , aX = this.getCookiePolicyLink()
          , aY = this.activeSettings.division || ""
          , aZ = this.consentDuration
          , a1 = window.evidon.notice.isMobile();
        if (bh) {
            var bi = this.getActiveVendors();
            if (bi === null) {
                bi = []
            }
            if (this.activeTranslations.hasOwnProperty("categories")) {
                var aO = {};
                for (var a2 in this.activeTranslations.categories) {
                    var aP = this.activeTranslations.categories[a2];
                    if (typeof aP === "object" && aP.hasOwnProperty("vendors")) {
                        var aV = aP.vendors;
                        for (var a0 = 0; a0 < bi.length; a0++) {
                            if (aV.indexOf(bi[a0]) !== -1) {
                                aO[a2] = aP.text;
                                break
                            }
                        }
                    } else {
                        aO[a2] = aP
                    }
                }
                var aU = {};
                if (!this.activeSettings.companyCategoryIds && this.activecategorySet) {
                    this.activeSettings.companyCategoryIds = Object.keys(this.activecategorySet)
                }
                if (this.activeSettings.companyCategoryIds) {
                    var aM = this.activeTranslations.categories;
                    this.activeSettings.companyCategoryIds.forEach(function(bk) {
                        var bj = aM[bk.toLowerCase()] ? aM[bk.toLowerCase()].text : null;
                        if (bj && !aU[bj]) {
                            aU[bk] = bj
                        }
                    })
                }
                if (bh.indexOf(w) > -1) {
                    var aS = [];
                    for (var a2 in aU) {
                        var aR = '<a class="evidon-category-link" href="#" onclick="window.evidon.notice.showPreferencesDialog(\'' + this.PREFDIAG_TABS.CONSENT + "', '" + a2 + "'); return false;\">" + aU[a2] + "</a>";
                        aS.push(aR)
                    }
                    var aQ = aS.join(", ");
                    bh = bh.replace(a6, aQ)
                } else {
                    if (bh.indexOf(x) > -1) {
                        var aT = "";
                        for (var a2 in aU) {
                            aT += "<li>" + aU[a2] + "</li>"
                        }
                        bh = bh.replace(a7, aT)
                    }
                }
            }
            bh = bh.replace(ba, aY).replace(a8, aW).replace(bf, a5).replace(a9, aX);
            bh = bh.replace(bb, "<b>" + aZ + "</b>").replace(bg, "<b>" + bi.length + "</b>");
            if (Object.keys(ab).indexOf(this.languageRoot) != -1) {
                bh = bh.replace(bc, "<b>" + ab[this.languageRoot]["monthvar"] + "</b>").replace(bd, "<b>" + ab[this.languageRoot]["partnervar"] + "</b>")
            }
            if (bh.indexOf(av) > -1) {
                var a4 = (((a1) ? this.activeTranslations.mobilepolicyButtonText : this.activeTranslations.policyButtonText) || null);
                var a3 = (aX && aX !== "#") ? aX : (a5 && a5 !== "#") ? a5 : null;
                if (a4 && a3) {
                    var aN = '<br /><br /><a href="' + a3 + '" target="_blank" class="evidon-policybutton">' + a4 + "</a>";
                    bh = bh.replace(be, aN)
                } else {
                    bh = bh.replace(be, "")
                }
            }
        }
        return bh
    }
    ;
    aH.prototype.dropSuppressionCookie = function(aQ, aS) {
        var aM = {
            date: new Date()
        };
        var aP = null;
        if (typeof aQ !== "undefined" && aQ > 0) {
            var aO = new Date();
            aO.setDate(aO.getDate() + aQ);
            aP = aO.toUTCString();
            var aR = this._getConsentCookieDomainPath();
            var aN = this._getConsentCookieDomain();
            this._writeCookie(aI, JSON.stringify(aM), aP, aR, aN)
        } else {
            var aR = this._getConsentCookieDomainPath();
            var aN = this._getConsentCookieDomain();
            this._delete_cookie(aI, aR, aN)
        }
        return aM
    }
    ;
    aH.prototype._delete_cookie = function(aN, aO, aM) {
        if (this._getCookie(aN)) {
            document.cookie = aN + "=" + ((aO) ? ";path=" + aO : "") + ((aM) ? ";domain=" + aM : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
        }
    }
    ;
    aH.prototype._getCookie = function(aP) {
        var aN = this._readCookies();
        for (var aO = 0; aO < aN.length; aO++) {
            var aM = aN[aO];
            if (aM.name === aP) {
                return aM
            }
        }
        return null
    }
    ;
    aH.prototype._readCookies = function() {
        var aN = "";
        if (window.evidon.uriEncodeCookie) {
            var aP = decodeURI(document.cookie);
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
    aH.prototype._writeCookie = function(aQ, aS, aP, aR, aO) {
        if (window.evidon.uriEncodeCookie) {
            aS = encodeURI(aS)
        }
        var aN = [aQ + "=" + aS];
        if (typeof aP === "string") {
            aN.push("expires=" + aP)
        }
        aN.push("path=" + aR);
        aN.push("SameSite=Lax");
        if (typeof aO === "string") {
            aN.push("domain=" + aO)
        }
        var aM = aN.join("; ");
        document.cookie = aM;
        return (document.cookie.indexOf(aQ) > -1)
    }
    ;
    aH.prototype._readLocalStorage = function(aN) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (aM) {
            return false
        }
        return window.localStorage.getItem(aN)
    }
    ;
    aH.prototype._writeLocalStorage = function(aN, aO) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (aM) {
            return false
        }
        window.localStorage.setItem(aN, aO);
        return window.localStorage.getItem(aN) !== null
    }
    ;
    aH.prototype._removeLocalStorageItem = function(aM) {
        if (!window.localStorage) {
            return
        }
        window.localStorage.removeItem(aM)
    }
    ;
    aH.prototype.withdrawConsent = function() {
        this._deleteConsentCookie();
        if (this.regulationConsentTypeId == aB) {
            this.consentIsGiven = true;
            this._setConsentCookie(null, true, true, true, this.regulationConsentTypeId, false);
            this.dropSuppressionCookie(365)
        } else {
            this.consentIsGiven = false;
            this._setConsentCookie(null, false, false, false, this.regulationConsentTypeId, false);
            this.postVendorChoices(I)
        }
        this.dropPixel(I);
        if (window.evidon.consentWithdrawnCallback) {
            window.evidon.consentWithdrawnCallback()
        }
    }
    ;
    aH.prototype.newVendorCallback = function(aM) {
        if (window.evidon.button) {
            window.evidon.button.showNewVendorIndicator()
        }
        if (window.evidon.cmp && window.evidon.cmp.consentString) {
            window.evidon.cmp.newVendorCallback(aM)
        }
        if (window.evidon.cmpv2 && window.evidon.cmpv2.consentString) {
            window.evidon.cmpv2.newVendorCallback(aM)
        }
    }
    ;
    aH.prototype._pullOptOutDetails = function(aN) {
        var aO = window.evidon.id
          , aQ = this.activeSettings.id
          , aM = this.activeCountryId
          , aP = this;
        var aR = ap;
        if (aR.substr(aR.length - 1) !== "/") {
            aR += "/"
        }
        aR += "vendor/" + aO + "/" + aQ + "/" + aM;
        if (this.categorySetId && this.categorySetId !== 0) {
            aR += "/" + this.categorySetId
        }
        aR += "?lang=" + this.languageCode;
        var aS = new XMLHttpRequest();
        aS.onerror = function() {
            Toast.show(TOAST_ERROR, getTranslation(aP.isMobile() ? "mobilesnL2L3FetchVendorsError" : "snL2L3FetchVendorsError"), 7)
        }
        ;
        aS.onreadystatechange = function() {
            if (aS.readyState !== 4) {
                return
            }
            if (aS.status === 200) {
                var aX = JSON.parse(aS.responseText);
                aP.optOutDetails = {};
                aP.optOutDetails.categories = {};
                aP.optOutDetails.cookies = {};
                var aY = (aX.hasOwnProperty("thirdparty")) ? aX.thirdparty : [];
                for (var aW = 0; aW < aY.length; aW++) {
                    var aZ = aY[aW];
                    var aT = null;
                    if ((aZ.hasOwnProperty("CategoryBucketId") && aZ.CategoryBucketId !== null) || (aZ.hasOwnProperty("CategoryBucket") && aZ.CategoryBucket !== null)) {
                        aT = (aZ.hasOwnProperty("CategoryBucketId")) ? aZ.CategoryBucketId.toLowerCase() : aZ.CategoryBucket.toLowerCase()
                    }
                    if (!aP.optOutDetails.categories.hasOwnProperty(aT)) {
                        aP.optOutDetails.categories[aT] = {
                            id: aT,
                            name: aZ.CategoryBucket,
                            description: aZ.CategoryDescription,
                            required: aZ.CategoryRequired,
                            vendors: []
                        }
                    }
                    aP.optOutDetails.categories[aT].vendors.push(aZ)
                }
                var aV = (aX.hasOwnProperty("firstparty")) ? aX.firstparty : [];
                for (var aW = 0; aW < aV.length; aW++) {
                    var aU = aV[aW];
                    aP.optOutDetails.cookies[aU.CountryCookieId] = {
                        id: aU.CountryCookieId,
                        name: aU.Name,
                        description: aU.Description,
                        required: aU.Required,
                        optout: aU.OptOut,
                        host: aU.Host,
                        duration: aU.Duration,
                        category: aU.Category
                    }
                }
                aN()
            } else {
                if (aS.status === 500) {
                    aN({
                        message: "Unable to load the opt-out vendor list"
                    }, null)
                }
            }
        }
        ;
        aS.open("GET", aR, true);
        aS.send(null)
    }
    ;
    aH.prototype.getOptOutCategories = function(aM) {
        var aN = this;
        if (!this.optOutDetails) {
            this._pullOptOutDetails(function(aO) {
                if (aO) {
                    aM(aO, null)
                } else {
                    aM(null, aN.optOutDetails.categories)
                }
            })
        } else {
            aM(null, aN.optOutDetails.categories)
        }
    }
    ;
    aH.prototype.getOptOutCategory = function(aM) {
        if (this.optOutDetails) {
            if (this.optOutDetails.categories.hasOwnProperty(aM)) {
                return this.optOutDetails.categories[aM]
            }
        }
        return null
    }
    ;
    aH.prototype.getOptOutCookies = function(aM) {
        var aN = this;
        if (!this.optOutDetails) {
            this._pullOptOutDetails(function(aO) {
                if (aO) {
                    aM(aO, null)
                } else {
                    aM(null, aN.optOutDetails.cookies)
                }
            })
        } else {
            aM(null, aN.optOutDetails.cookies)
        }
    }
    ;
    aH.prototype.findVendorDetails = function(aM) {
        for (var aN = 0; aN < this.companydetails.length; aN++) {
            if (this.companydetails[aN].permalink === aM) {
                return this.companydetails[aN]
            }
        }
        return null
    }
    ;
    aH.prototype.pullVendorDetails = function(aO, aM) {
        var aQ = ap
          , aP = this;
        var aN = this.findVendorDetails(aO);
        if (aN) {
            aM(null, aN)
        } else {
            aQ = aQ.replace("/site", "");
            if (aQ.substr(aQ.length - 1) !== "/") {
                aQ += "/"
            }
            aQ += "company/" + aO + "/" + this.activeTranslationId;
            var aR = new XMLHttpRequest();
            aR.onerror = function() {}
            ;
            aR.onreadystatechange = function() {
                if (aR.readyState !== 4) {
                    return
                }
                if (aR.status === 200) {
                    aN = JSON.parse(aR.responseText);
                    aP.companydetails.push(aN);
                    aM(null, aN)
                } else {
                    if (aR.status === 500) {
                        aM({
                            message: "Unable to load the vendor details"
                        }, null)
                    }
                }
            }
            ;
            aR.open("GET", aQ, true);
            aR.send(null)
        }
    }
    ;
    aH.prototype.getParentOrigin = function() {
        var aO = (window.location !== window.parent.location);
        var aN = aO ? document.referrer : document.location.href;
        if (aN) {
            return aN.split("?")[0]
        }
        var aM = document.location;
        if (aM.ancestorOrigins && aM.ancestorOrigins.length) {
            return aM.ancestorOrigins[0]
        }
        return ""
    }
    ;
    aH.prototype.stringify = function(aN) {
        var aM = window.Prototype;
        if (aM && parseFloat(aM.Version) < 1.7 && Array.prototype.toJSON && Object.toJSON && aN) {
            return Object.toJSON(aN)
        }
        return JSON.stringify(aN)
    }
    ;
    aH.prototype.postVendorChoices = function(aM) {
        var aW = {};
        aW.noticeId = this.activeSettings.id;
        aW.companyId = window.evidon.id;
        aW.actionId = aM;
        aW.regulationId = this.regulationId;
        aW.regulationType = this.regulationConsentTypeId;
        aW.consentGiven = ((this.consentIsGiven) ? 1 : 0);
        aW.consentRequired = ((this.consentRequired) ? 1 : 0);
        aW.consentDate = new Date().toISOString();
        aW.activeCountryId = this.activeCountryId;
        aW.akObservedCountryId = this.country.id;
        aW.defaultCountryId = this.activeSettings.defaultCountry;
        aW.includeSubdomains = this.activeSettings.includeSubdomains;
        aW.activeTranslationId = this.activeTranslationId;
        aW.domainConsented = this.getParentOrigin();
        aW.akObservedStateId = (typeof this.activeStateId !== "undefined" && this.activeStateId !== null) ? this.activeStateId : "";
        aW.vendors = [];
        aW.categories = [];
        var aO = this.activecategorySet;
        var aX = this._getConsentedVendors();
        var aN = this._getConsentedCategories();
        var aT = this.isGPCApply();
        if (aX !== null || aN !== null) {
            for (var aQ in aO) {
                var aV = aO[aQ];
                var aP = {
                    def_CId: aV.defaultCategoryId,
                    cBucketId: aV.CategoryBucketId,
                    customCName: aV.name,
                    isEssential: (aT && aV.dataSharing) ? 0 : aV.cEss,
                    isAccepted: (aT && aV.dataSharing) ? 0 : (aN === true) ? 1 : (aV.cEss === 1) ? 1 : 0
                };
                if (typeof aN === "object" && aN !== null) {
                    aP.isAccepted = aN[aQ] === true ? 1 : 0
                }
                aW.categories.push(aP);
                for (var aU in aV.vendors) {
                    var aY = {
                        id: aU,
                        categoryId: aV.vendors[aU].catid,
                        isEssential: (aT && aV.dataSharing) ? 0 : aV.vendors[aU].vEss,
                        isAccepted: (aT && aV.dataSharing) ? 0 : (aX[aU] === true) ? 1 : 0
                    };
                    if (aV.vendors[aU].vEss === 1) {
                        aY.isAccepted = 1
                    }
                    if (aP.isEssential === 1) {
                        aY.isAccepted = 1
                    }
                    if (typeof aX[aU] === "undefined" || aX[aU] === null) {
                        aY.isAccepted = null
                    }
                    aW.vendors.push(aY)
                }
            }
        }
        aW.lso = this.getConsentData().value;
        var aR = {};
        aR.d = aW;
        aR.c = window.evidon.id;
        var aS = this.stringify(aR);
        var aZ = new XMLHttpRequest();
        aZ.open("POST", ax, true);
        aZ.setRequestHeader("Content-Type", "application/json");
        aZ.send(aS);
        aZ.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                if (this.status === 200 || this.status === 204) {} else {
                    if (this.status === 401) {
                        console.log("invalid request")
                    }
                }
            }
        });
        aZ.addEventListener("error", function(a0) {
            console.log("vendor post error")
        })
    }
    ;
    aH.prototype.pushNavigationScreen = function(aM) {
        this.navigationStack.push(aM)
    }
    ;
    aH.prototype.popNavigationScreen = function() {
        if (this.navigationStack.length < 1) {
            return null
        }
        var aM = this.navigationStack.pop();
        return aM
    }
    ;
    aH.prototype.getNavigationScreenStackCount = function() {
        return this.navigationStack.length
    }
    ;
    aH.prototype.setUserIdentifier = function(aM) {
        this.customerUserId = aM
    }
    ;
    aH.prototype.getOptOutApiUrl = function() {
        return ap
    }
    ;
    aH.prototype.isGPCApply = function() {
        return this.userGpcEnabled && this.noticeGpcEnabled ? 1 : 0
    }
    ;
    var N = function() {
        this.subscriptions = {};
        this.subscribe = function(aN, aM, aO) {
            if (!this.subscriptions.hasOwnProperty(aN)) {
                this.subscriptions[aN] = []
            }
            if (!aO) {
                aO = -1
            }
            this.subscriptions[aN].push({
                callback: aM,
                limit: aO
            })
        }
        ;
        this._fireEvent = function(aN, aM) {
            if (!this.subscriptions.hasOwnProperty(aN)) {
                return
            }
            var aQ = this.subscriptions[aN];
            for (var aO = 0; aO < aQ.length; aO++) {
                var aP = aQ[aO];
                if (aP.callback && typeof aP.callback === "function") {
                    aP.callback.call(null, aM);
                    if (aP.limit === -1) {
                        continue
                    }
                    aP.limit--;
                    if (aP.limit === 0) {
                        aQ.splice(aO, 1);
                        aO--
                    }
                }
            }
        }
    };
    if (!window.evidon.events) {
        window.evidon.events = new N()
    }
    if (!window.evidon.notice) {
        window.evidon.notice = new aH()
    }
    if (!window.evidon.button) {
        window.evidon.button = new m()
    }
    if (!window.evidon.link) {
        window.evidon.link = new ac()
    }
    window.evidon.events._fireEvent("apiReady", null)
}
)();
