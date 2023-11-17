(function() {
    /*US-CO USA COLORADO*/
    var country = {
        'code': 'us',
        'id': 1,
        'defaultLanguage': 'en-us',
        'stateId': 3,
        'stateCode': 'co'
    };
    if (!window.evidon)
        window.evidon = {};
    if (window.evidon.notice) {
        window.evidon.notice.setLocation(country);
    }
    window.evidon.location = country;
}
)();
