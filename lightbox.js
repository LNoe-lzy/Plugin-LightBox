/**
 * Created by lizongyuan on 16/6/5.
 */
;(function($){
    var LightBox = function () {
        //保存this
        var self = this;
        this.bodyNode = $('body');
        // 创建遮罩层节点
        this.mask = '<div id="lb-mask"></div>';
        //创建图片显示区域节点
        this.popup = '<div id="lb-popup"></div>';
        this.img = $('.lb-img img');
        this.img.click(function(){
            var imgObj = $(this);
            self.showMaskAndPop(imgObj);
            $('#lb-mask').click(function(){
                self.hideMaskAndPop();
            })
        });
    };

    LightBox.prototype = {
        showMaskAndPop: function (imgObj) {
            //获取可视区域的宽高
            var imgNode = '<img id="lb-popimg" src="' + imgObj.attr('src') + '">';
            var winHeight = $(window).height();
            var winWidth = $(window).width();
            this.bodyNode.append(this.mask);
            this.bodyNode.append(this.popup);
            //初始化遮罩层
            $('#lb-mask').css({
                'display': 'none',
                'position': 'fixed',
                'left': 0,
                'top': 0,
                'right': 0,
                'bottom': 0,
                'background': '#000000',
                'opacity': '0.6',
                'z-index': '1000'
            }).fadeIn();
            var popup = $('#lb-popup');
            popup.append(imgNode);
            var popimg = $('#lb-popimg');
            popimg.css({
                'height': (popimg.height() > winHeight) ? winHeight : popimg.height()
            });
            popup.css({
                'display': 'none',
                'position': 'fixed',
                'height': popimg.height(),
                'width': popimg.width(),
                'top': (winHeight - popimg.height()) / 2,
                'left': (winWidth - popimg.width()) / 2,
                'background': '#ffffff',
                'z-index': '1001'
            }).fadeIn();
        },
        hideMaskAndPop: function () {
            var popup = $('#lb-popup');
            var mask = $('#lb-mask');
            popup.fadeOut();
            mask.fadeOut();
            popup.remove();
            mask.remove();
        }

    };

    window['LightBox'] = LightBox;
})(jQuery);