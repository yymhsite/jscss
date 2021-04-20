$(function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
       //这个是安卓操作系统
        var html = '<!--div class="notification reader-download-notification" style="display: block;"><div class="notification-header"><div class="notification-icon icon reader-app-icon"></div><div class="notification-title text-color-primary">歪歪漫画<br>海量高品质漫画抢先看</div><a class="button button-round button-fill button-small down-app" href="#">下載APP</a><span class="notification-close-button"></span></div></div-->';
       $('.framework7-root').prepend(html);
    }
    if (isIOS) {
　　　　//这个是ios操作系统
        var html = '<div class="notification reader-download-notification" style="display: block;"><div class="notification-header"><div class="notification-icon icon reader-app-icon"></div><div class="notification-title text-color-primary">歪歪漫画<br>海量高品质漫画抢先看</div><a class="button button-round button-fill button-small button-tan" href="#">添加到主屏幕</a><span class="notification-close-button"></span></div></div>';
        $('.framework7-root').prepend(html);
    }
    $(document).on('click','.notification-close-button',function (){
        $(this).parents('.notification').remove();
    });
    // 下载
    $(document).on('click','.down-app',function (){
        window.open('http://kpmanhua.com/kpmh.apk');
    });
    // 添加
    $(document).on('click','.button-tan',function (){
        var html = '<div class="popover-backdrop backdrop-in"></div>';
        $('.framework7-root').append(html);
        var html = `<div class="popover reader-save2screen-popover ios modal-in popover-on-bottom" style="display: block;">
            <div class="popover-angle on-bottom"></div>
            <div class="popover-inner">
            <div class="icon reader-app-icon"></div>
            <div>请轻点 <i class="f7-icons">share</i>，然后轻点“添加到主屏幕”。</div>
            </div>
        </div>`;
        $('.framework7-root').append(html);
    });
    // 消失
    $(document).on('click','.backdrop-in',function (){
        $('.backdrop-in').remove();
        $('.popover-on-bottom').remove();
    });
});