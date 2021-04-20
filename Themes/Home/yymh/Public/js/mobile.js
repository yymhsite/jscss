! function() { var h = window,
            e = h.flex = function(e, i, t) { var n = e || 100,
                    a = i || 1,
                    o = h.document,
                    d = navigator.userAgent,
                    c = d.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
                    r = d.match(/U3\/((\d+|\.){5,})/i),
                    l = r && 80 <= parseInt(r[1].split(".").join(""), 10),
                    m = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
                    s = h.devicePixelRatio || 1;
                m || c && 534 < c[1] || l || (s = 1), t && (s = 1); var p = 1 / s,
                    u = o.querySelector('meta[name="viewport"]');
                u || ((u = o.createElement("meta")).setAttribute("name", "viewport"), o.head.appendChild(u)), u.setAttribute("content", "width=device-width,user-scalable=no,initial-scale=" + p + ",maximum-scale=" + p + ",minimum-scale=" + p), o.documentElement.style.fontSize = n / 2 * s * a + "px" },
            i = 2,
            t = -1 < h.location.search.indexOf("scale=normal");
        h !== h.top && 1 === h.devicePixelRatio ? e(100, i *= h.document.documentElement.scrollWidth / 375, !!t) : navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? e(100, i *= h.screen.availWidth / 375, !!t) : (h.document.documentElement.classList.add("device-pc"), e(100, i, !0)) }()