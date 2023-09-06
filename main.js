//if this page is opened on Android or IOS, it will direct to a desired route. 
var isMobile = {
    
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false; 
    },

    iOS: function() {
        return navigator.userAgent.match(/iPhone/i) ? true : false; 
    },

    any: function () {
        return (isMobile.Android() || isMobile.iOS());
    }

}; 

if (isMobile.any()) {
    window.location = ''; //Routing, can add timeout() for animations
}
