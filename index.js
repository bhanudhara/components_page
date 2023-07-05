var json = $.getJSON(
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBwIX97bVWr3-6AIUvGkcNnmFgirefZ6Sw',
    function (data) {
      $.each(data.items, function (index, font) {
        $('.combobox').append(
          $('<option></option>').attr('value', font.family).text(font.family)
        );
        $('.google-fonts').append(
          "'" + font.family + "' => array('title' => '" + font.family + "'),<br>"
        );
      });
    }
  );
  $(document).ready(function () {
    $('.combobox').change(function () {
      var selectedFont = $(this).val();
      $('body').css('font-family', selectedFont);
  
      var encodedFont = encodeURIComponent(selectedFont);
      var fontUrl =
        'https://fonts.googleapis.com/css2?family=' +
        encodedFont +
        '&display=swap';
  
      var styleTag = $('<style>').attr('data-google-font', encodedFont);
      styleTag.text('@import url("' + fontUrl + '");');
  
      $('head').append(styleTag);
    });
  });

  $(document).on("click","#buttontoggle",function(){
    console.log('koikl')
    $("#exampleModal").modal("toggle");
    
  })
  function h1() {
    var el =  document.getElementsByClassName("custom_h1");
    var x = document.getElementById('size1').value;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
      }
    } 
  }
  function h2() {
    var el =  document.getElementsByClassName("custom_h2");
    var x = document.getElementById('size2').value;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
      }
    } 
  }
  function h3() {
    var el =  document.getElementsByClassName("custom_h3");
    var x = document.getElementById('size3').value;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
      }
    } 
  }
  function h4() {
    var el =  document.getElementsByClassName("custom_h4");
    var x = document.getElementById('size4').value;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
      }
    } 
  }
  function h5() {
    var el =  document.getElementsByClassName("custom_h5");
    var x = document.getElementById('size5').value;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
      }
    } 
  }
  function h6() {
    var el =  document.getElementsByClassName("custom_h6");
    var x = document.getElementById('size6').value;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
      }
    } 
  }

  function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
  }
  
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });