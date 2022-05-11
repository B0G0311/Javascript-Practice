function getBrowserName()  {
    var lsBrowser = navigator.userAgent;

    if (lsBrowser.indexOf("MSIE") >= 0)  {
        return "MSIE";
    } else if (lsBrowser.indexOf("Firefox") >= 0)  {
        return "Firefox";
    } else if (lsBrowser.indexOf("Chrome") >= 0)  {
        return "Chrome";
    } else if (lsBrowser.indexOf("Safari") >= 0)  {
        return "Safari";
    } else if (lsBrowser.indexOf("Opera") >= 0)  {
        return "Opera";
    } else {
        return "UNKNOWN";
    }
}

function getBrowserVersion()  {
    var ua = navigator.userAgent;
    var browser = getBrowserName();
    var findIndex = ua.indexOf(browser) + browser.length + 1;
    var browserVersion = parseFloat (
        ua.substring(findIndex, findIndex + 3));

    return browserVersion;
}

var browserName = getBrowserName();
var browserVersion = getBrowserVersion();
var tallboi = screen.height;
var longboi = screen.width;

document.write("You are using version " + getBrowserVersion() + " of the "
+  getBrowserName() + " browser to view this page in a browser whose inner " + 
    " window is " + longboi + " pixels wide and " + tallboi + " pixels tall.");
