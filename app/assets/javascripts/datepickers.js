function load_datepicker() {
  $('.date_start').datetimepicker({
    // altField: '#date_start_alt',
    // altFormat: 'yy-mm-dd hh:mm',
    // timeInput: true,
    // timeFormat: "hh:mm",
    dateFormat: 'yy-mm-dd',
    timeFormat: "hh:mm:ss",
    minDate: 0,
    onClose: function(dateText, inst) {
      var start_date = $('.date_start').datetimepicker("getDate");
      var end_date = $('.date_end').datetimepicker("getDate");
      if (start_date > end_date){
        var new_date = new Date(start_date.getTime()+86400000);
        $('.date_end').datetimepicker("setDate", new_date);
      }
      $('.date_end').datetimepicker( "option" , "minDate" , start_date);
    }
  });

  $('.date_end').datetimepicker({
    // altField: '#date_end_alt',
    // altFormat: 'yy-mm-dd hh:mm',
    dateFormat: 'yy-mm-dd',
    timeFormat: "hh:mm:ss",
    minDate: 0
  });

  $('.date_start_no_min').datepicker({
    altField: '#date_start_alt',
    altFormat: 'yy-mm-dd',
    onClose: function(dateText, inst) {
      var start_date = $('.date_start_no_min').datepicker("getDate");
      var end_date = $('.date_end_no_min').datepicker("getDate");
      if (start_date > end_date){
        var new_date = new Date(start_date.getTime()+86400000);
        $('.date_end_no_min').datepicker("setDate", new_date);
      }
      $('.date_end_no_min').datepicker( "option" , "minDate" , start_date);
    }
  });

  $('.date_end_no_min').datepicker({
    altField: '#date_end_alt',
    altFormat: 'yy-mm-dd',
    onClose: function(dateText, inst) {
      var start_date = $('.date_start_no_min').datepicker("getDate");
      var end_date = $('.date_end_no_min').datepicker("getDate");
      if (start_date > end_date) {
        var new_date = new Date(start_date.getTime()+86400000);
        $('.date_end_no_min').datepicker("setDate", new_date);
      }
      $('.date_end_no_min').datepicker( "option" , "minDate" , start_date);
    }
  });
};


