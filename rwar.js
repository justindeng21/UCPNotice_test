NoticeOperations.getAllDomains()
.then((response) => response.text())
.then((body) => {
var notices = JSON.parse(body);
for (var i in notices) {
    fetch(`https://privacy.evidon.com/v3/sitenotice/api/v3/sitenotice/${notices[i].id}/delete`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const delay = 1000;
}
})
