function getConsentObject(date){

    const jsonDate = date.toISOString()
    const consentDataObject = {
        consent_date:jsonDate,
        gpc:0,
        consent_type:1
    }
    
    return consentDataObject
}




const cookieName = 'evidonConsentCookie_test'
const date = new Date(1970,1,1)
const value = getConsentObject(date)
const path = '/';
const domain = 'dg-ucp.herokuapp.com';


window.evidon.notice._writeCookie(cookieName, JSON.stringify(getConsentObject(date)),  date.toUTCString(), path, domain )
const parsedCookie = window.evidon.notice._readCookies()
const trueValue = [{name:cookieName,value:getConsentObject(date)}]
console.assert(parsedCookie === trueValue,'Failed')