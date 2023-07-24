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
  var htmlele=document.getElementsByTagName("html");
  var basesize = document.getElementById('size4').value;
  htmlele[0].style.fontSize=basesize+"px";


  var h1tag =  document.getElementsByClassName("h1size");
  var h2tag =  document.getElementsByClassName("h2size");
  var h3tag =  document.getElementsByClassName("h3size");
  var h4tag =  document.getElementsByClassName("h4size");
  var h5tag =  document.getElementsByClassName("h5size");
  var h6tag =  document.getElementsByClassName("h6size");
  
  h1tag[0].innerHTML="h1= "+ (basesize*1.423).toFixed(2)+" px (1.42rem)"
  
  h2tag[0].innerHTML="h2= "+ (basesize*1.265).toFixed(2)+" px (1.26rem)"
  h3tag[0].innerHTML="h3= "+ (basesize*1.125).toFixed(2)+" px (1.12rem)"
  h4tag[0].innerHTML="h4= "+ (basesize*1)+" px (1rem)"
  h5tag[0].innerHTML="h5= "+ (basesize*0.88).toFixed(2)+" px (0.88rem)"
  h6tag[0].innerHTML="h6= "+ (basesize*0.79).toFixed(2)+" px (0.79rem)";
  document.getElementById('h1tag').innerHTML=`This is an h1 tag fs-${(basesize*1.423).toFixed(2)}px & fw-700`;
  document.getElementById('h2tag').innerHTML=`This is an h2 tag fs-${(basesize*1.265).toFixed(2)}px & fw-700`;
  document.getElementById('h3tag').innerHTML=`This is an h3 tag fs-${(basesize*1.125).toFixed(2)}px & fw-500`;
  document.getElementById('h4tag').innerHTML=`This is an h4 tag fs-${(basesize*1)}px & fw-400`;
  document.getElementById('h5tag').innerHTML=`This is an h5 tag fs-${(basesize*0.88).toFixed(2)}px & fw-400`;

  document.getElementById('h6tag').innerHTML=`This is an h6 tag fs-${(basesize*0.79).toFixed(2)}px & fw-400`;

  // var x = document.getElementById('size4').value;
  // var y = document.getElementById('weight4').value;
  // document.getElementById('h4tag').innerHTML=`This is an h4 tag fs-${x}px & fw-${y}`;
  // if(h1tag){
  //   for(var i = 0; i < el.length; i++){
  //      let h1style=1.423*x/100
  //      h1tag[i].style.fontSize = x + 'rem';
  //      h1tag[i].style.fontWeight = y;
  //   }
  // } 
  // if(h2tag)
  // {
  //   for(var i = 0; i < el.length; i++){
  //     h2tag[i].style.fontSize = x + 'px';
  //     h2tag[i].style.fontWeight = y;
  //  }
  // }
  // if(h3tag)
  // {
  //   for(var i = 0; i < el.length; i++){
  //     h3tag[i].style.fontSize = x + 'px';
  //     h3tag[i].style.fontWeight = y;
  //  }
  // }
  // if(h4tag)
  // {
  //   for(var i = 0; i < el.length; i++){
  //     h4tag[i].style.fontSize = x + 'px';
  //     h4tag[i].style.fontWeight = y;
  //  }
  // }
  // if(h5tag)
  // {
  //   for(var i = 0; i < el.length; i++){
  //     h5tag[i].style.fontSize = x + 'px';
  //     h5tag[i].style.fontWeight = y;
  //  }
  // }
  // if(h6tag)
  // {
  //   for(var i = 0; i < el.length; i++){
  //     h6tag[i].style.fontSize = x + 'px';
  //     h6tag[i].style.fontWeight = y;
  //  }
  // }
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