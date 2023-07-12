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
    var y = document.getElementById('weight1').value;
    document.getElementById('h1tag').innerHTML=`This is an h1 tag fs-${x}px & fw-${y}`;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
         el[i].style.fontWeight = y;
      }
    } 
  }
  function h2() {
    var el =  document.getElementsByClassName("custom_h2");
    var x = document.getElementById('size2').value;
    var y = document.getElementById('weight2').value;
    document.getElementById('h2tag').innerHTML=`This is an h2 tag fs-${x}px & fw-${y}`;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
         el[i].style.fontWeight = y;
      }
    } 
  }
  function h3() {
    var el =  document.getElementsByClassName("custom_h3");
    var x = document.getElementById('size3').value;
    var y = document.getElementById('weight3').value;
    document.getElementById('h3tag').innerHTML=`This is an h3 tag fs-${x}px & fw-${y}`;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
         el[i].style.fontWeight = y;
      }
    } 
  }
  function h4() {
    var el =  document.getElementsByClassName("custom_h4");
    var x = document.getElementById('size4').value;
    var y = document.getElementById('weight4').value;
    document.getElementById('h4tag').innerHTML=`This is an h4 tag fs-${x}px & fw-${y}`;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
         el[i].style.fontWeight = y;
      }
    } 
  }
  function h5() {
    var el =  document.getElementsByClassName("custom_h5");
    var x = document.getElementById('size5').value;
    var y = document.getElementById('weight5').value;
    document.getElementById('h5tag').innerHTML=`This is an h5 tag fs-${x}px & fw-${y}`;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
         el[i].style.fontWeight = y;
      }
    } 
  }
  function h6() {
    var el =  document.getElementsByClassName("custom_h6");
    var x = document.getElementById('size6').value;
    var y = document.getElementById('weight6').value;
    document.getElementById('h6tag').innerHTML=`This is an h6 tag  fs-${x}px & fw-${y}`;
    if(el){
      for(var i = 0; i < el.length; i++){
         el[i].style.fontSize = x + 'px';
         el[i].style.fontWeight = y;
      }
    } 
  }
  function changecolor(event)
  {
    document.getElementById('color_value').innerText=event.target.value;
    document.getElementById('btncolor').style.background=event.target.value+"";
    document.getElementById('btncolor2').style.border=`1px solid ${event.target.value}`;
    document.getElementById('btncolor2').style.color=`${event.target.value}`;
  }
 