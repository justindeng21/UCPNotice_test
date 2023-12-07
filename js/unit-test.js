function getRandomDate(){
    return new Date(new Date() - Math.random()*(1e+12))
}

function getRandomExpirationDate(){
    return new Date(new Date() + Math.random()*(1e+12))
}

function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function getConsentObject(){
    const date = getRandomDate()
    const consentDataObject = {
        consent_date: date.toISOString(),
        gpc:0,
        consent_type:1
    }
    
    return consentDataObject
}



function testWriteCooke(cookieName,consentData,expirationDate){
     return window.evidon.notice._writeCookie(cookieName, consentData, expirationDate.toUTCString(), ',', null)
}


console.assert(testWriteCooke(randomString(5),JSON.stringify(getConsentObject()),getRandomExpirationDate())=== true)


window.evidon.notice._writeCookie(cookieName, consentData, expireDate.toUTCString(), path, domain)
const parsedName = window.evidon.notice._readCookies()[0].name
const pasredVale = window.evidon.notice._readCookies()[0].consent_date
console.assert(parsedName = cookieName, 'Cookie Name was not parsed correctly')
console.assert(parsedData = cookieName, 'Cookie data was not parsed correctly.')



