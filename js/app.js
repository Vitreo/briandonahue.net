(function($){  
  $(function(){
    
    $(document).foundationAlerts();
    $(document).foundationAccordion();
    $(document).tooltips();
    $('input, textarea').placeholder();
    
    
    
    $(document).foundationButtons();
    
    
    
    $(document).foundationNavigation();
    
    
    
    $(document).foundationCustomForms();
    
    
    
      
      $(document).foundationTabs({callback:$.foundation.customForms.appendCustomMarkup});
      
    
    
    // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
    // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
    // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
    // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
    // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});
  });


  $('#bio, #tracks').css({'backgroundSize': 'cover'});

  

    $('.arrow').click(function(){
        var direction = $(this).attr('data-direction');
        var CF = ContentFlowGlobal.Flows[0];
        if(direction === "left"){
            CF.moveTo('pre')
        }
        else if (direction === "right") {
            CF.moveTo('next');
        }
        
    });


            $('header a').click(function(e){
                e.preventDefault();
                var el = $(this).attr('href').toString();
                 $('html, body').animate({
                  scrollTop: $(el).offset().top
                }, 500);
            });    

})(jQuery);
