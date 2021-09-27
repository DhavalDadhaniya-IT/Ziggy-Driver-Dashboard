function upload_photo()
{
  $('.btn-new-avatar').off('click').on('click', function() {
  $('.emulator').toggleClass('collapse');
  setTimeout(function() {
    $('.emulator').toggleClass('collapse');
    $('.remove-image').toggleClass('hidden');
    setTimeout(function() {
    $('.current-avatar').toggleClass('small tiny');
    $('.arrow').toggleClass('collapsed');
    $('.new-avatar').toggleClass('teeny small');
    $('.btn-new-avatar').toggleClass('btn-primary btn-success btn-new-avatar btn-update-avatar').html('Save New Image <i class="glyphicon glyphicon-ok"></i>');
    //$(this).unbind('click');
     
      
     $('.btn-update-avatar').off('click').on('click', function(e) {
      $('.arrow').toggleClass('collapsed');
      $('.current-avatar').toggleClass('tiny teeny');
      $('.new-avatar').toggleClass('translate');
      $(this).toggleClass('btn-success btn-primary btn-new-avatar btn-update-avatar').html('New Avatar');
      $('.remove-image').toggleClass('hidden');
    });
    }, 500);
  }, 1500);
  
  

});
}    
    