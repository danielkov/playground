
$(function(){
      $('.close').on('click', function(e){
            e.stopPropagation();
            var that = $(this);
            that.parent().hide();
      });
});
