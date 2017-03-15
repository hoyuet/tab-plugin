;(function($){
    $.fn.tab=function(inpH){
        inpH=inpH||20;
        this.css({
            overflow:'hidden',
            zoom:'1'
        });
        this.each(function(index,element){
            var _this=this;
            var aBtn=$(_this).find('input');
            var aDiv=$(_this).find('div');
            aBtn.css({
                height:inpH+'px',
                width:$(_this).innerWidth()/aBtn.length+'px',
                float:'left'
            });
            aDiv.css({
                height:$(_this).height()-aBtn.eq(0).height()+'px',
                width:'100%',
                float:'left'
            });
            aBtn.click(function(){
                aBtn.removeClass('on');
                $(this).addClass('on');
                aDiv.hide();
                aDiv.eq($(this).index()).show();
            });
        });
    };
})($)
