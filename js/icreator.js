const {H5P} = H5PStandalone;
const AnalyticsUrl = 'TEST';
async function initLib() {
    for (let i = 0; i < window.iCreatorItems.length; i++) {
        const id = window.iCreatorItems[i].id;
        const path = window.iCreatorItems[i].path;
        const el = document.getElementById(id);
        if (el && path) {
            await new H5P(el,{
                h5pJsonPath: path,
                frameJs: '/therapy-areas/ulcerative-colitis/assets/icreator/frame.bundle.js',
                frameCss: '/therapy-areas/ulcerative-colitis/assets/icreator/css/h5p.css',
                customJs: [AnalyticsUrl, '/therapy-areas/ulcerative-colitis/assets/icreator/icreator-adobe-analytics.js', ],
            })
        }
    }
    window.wcCheckRunning = !1
}
window.initLib = initLib;
initLib()
