var videoElement;
// Define a variable to track whether there are ads loaded and initially set it to false
var adsLoaded = false;
var adContainer;

var adDisplayContainer;
var adsLoader;

window.addEventListener('load', function(event) {
  videoElement = document.getElementById('video-element');
  initializeIMA();
  videoElement.addEventListener('play', function(event) {
    loadAds(event);
  });
  var playButton = document.getElementById('play-button');
  playButton.addEventListener('click', function(event) {
    videoElement.play();
  });
});

window.addEventListener('resize', function(event) {
  console.log("window resized");
});

function initializeIMA() {
  console.log("initializing IMA");
}

function loadAds(event) {
  // Prevent this function from running on if there are already ads loaded
  if(adsLoaded) {
    return;
  }
  adsLoaded = true;

  // Prevent triggering immediate playback when ads are loading
  event.preventDefault();

  console.log("loading ads");
}

function initializeIMA() {
    console.log("initializing IMA");
    adContainer = document.getElementById('ad-container');
    adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoElement);
    adsLoader = new google.ima.AdsLoader(adDisplayContainer);
  
    // Let the AdsLoader know when the video has ended
    videoElement.addEventListener('ended', function() {
      adsLoader.contentComplete();
    });
  
    var adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = 'https://ad.doubleclick.net/ddm/pfadx/N6438.4787337JUSTINSDEBUGSITE/B29254434.357824229;sz=0x0;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;dcmt=text/xml;dc_sdk_apis=[APIFRAMEWORKS];dc_omid_p=[OMIDPARTNER];dc_vast=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=';
  
    // Specify the linear and nonlinear slot sizes. This helps the SDK to
    // select the correct creative if multiple are returned.
    adsRequest.linearAdSlotWidth = videoElement.clientWidth;
    adsRequest.linearAdSlotHeight = videoElement.clientHeight;
    adsRequest.nonLinearAdSlotWidth = videoElement.clientWidth;
    adsRequest.nonLinearAdSlotHeight = videoElement.clientHeight / 3;
  
    // Pass the request to the adsLoader to request ads
    adsLoader.requestAds(adsRequest);
  }