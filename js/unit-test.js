const path = '/';
const domain = null;
const date = new Date(1970,1,1)





function getConsentObject(date){

    const jsonDate = date.toISOString()
    const consentDataObject = {
        consent_date:jsonDate,
        gpc:0,
        consent_type:1
    }
    
    return JSON.stringify(consentDataObject)
}


window.evidon.notice._writeCookie('evidonConsentCookie_test',getConsentObject(date),  date.toUTCString(), path, domain )