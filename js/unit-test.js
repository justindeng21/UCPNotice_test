function getRandomDate(){
    return new Date(new Date() - Math.random()*(1e+12)).toISOString()
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
    const consentDataObject = {
        consent_date: getRandomDate(),
        gpc:0,
        consent_type:1
    }
    return consentDataObject
}

function deleteCookie(cookieName) {
    const expiration = new Date(1970,1,1);
    window.evidon.notice._writeCookie(cookieName, '', expiration.toUTCString(), '/', null)
}

class UnitTests{
    
    
    constructor(){
        console.log('Begining Unit Testing')
    }



    testWriteCookie(cookieName,consentData){
        let expires = new Date()
        expires.setDate(expires.getDate()+1)
        const isCookieWritten = window.evidon.notice._writeCookie(cookieName, JSON.stringify(consentData), expires.toUTCString(), '/', null)
        console.assert(isCookieWritten === true, 'Cookie was not properly written')
        deleteCookie(cookieName)
    }

    testReadCookie(cookieName,consentData){
        let expires = new Date()
        expires.setDate(expires.getDate()+1)
        window.evidon.notice._writeCookie(cookieName, JSON.stringify(consentData), expires.toUTCString(), '/', null)

        console.assert(window.evidon.notice._readCookies()[0].value.consent_date === consentData.consent_date,'Consent Date does not match')
        console.assert(window.evidon.notice._readCookies()[0].value.gpc === consentData.gpc,'GPC flag does not match')
        console.assert(window.evidon.notice._readCookies()[0].value.consent_type === consentData.consent_type,'Consent Type does not match')

        deleteCookie(cookieName)

    }

}



test = new UnitTests()



for(let i = 0; i <= 100; i++){
    test.testWriteCookie(randomString(10),getConsentObject())
}



for(let i = 0; i <= 100; i++){
    test.testReadCookie(randomString(10),getConsentObject())
}


