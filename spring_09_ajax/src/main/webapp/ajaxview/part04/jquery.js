$(document).ready(function(){
  $('#btn').click(process);
});

function process(){
  $.ajax({
      type:'GET',
      dataType:'json',
      url:'searchOpen.do?query='+$('#search').val(),
      success:viewMessage,
      error:function(xhr, textStatus, error){
        alert(xhr.status);
      }
  });
}

function viewMessage(res){
//console.log(res);
//alert(res.documents[0].title);
  $('#wrap table').empty();
  $('#wrap table').append(`<tr><th>책 제목</th><th>책 정보</th><th>가격</th></tr>`);
  $.each(res.documents, function(index, element){
    $('#wrap table').append(`<tr><td>${element.title}</td><td><a href="${element.url}"><img src="${element.thumbnail} "/></a></td><td>${element.price}</td></tr>`);
  }); 
}