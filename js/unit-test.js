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


class UnitTests{
    date = new Date(2100,1,1).toUTCString()

    deleteCookie(name) {
        const expiration = new Date(1970,1,1);
        window.evidon.notice._writeCookie(cookieName, '', expiration.toUTCString(), '/', domain)
    }

    static testWriteCookie(cookieName,consentData){
        const domain = null
        const isCookieWritten = window.evidon.notice._writeCookie(cookieName, JSON.stringify(consentData), this.date, '/', domain)
        console.assert(isCookieWritten === true, 'Cookie was not properly written')
    }

    static testReadCookie(cookieName,consentData){
        window.evidon.notice._writeCookie(cookieName, JSON.stringify(consentData), this.date, '/', domain)
        console.assert()
        deleteCookie(cookieName)
    }

    static testReadCookie(){

    }
}







for(let i = 0; i < 200; i++){
    UnitTests.testWriteCookie(randomString(10),getConsentObject())
}




