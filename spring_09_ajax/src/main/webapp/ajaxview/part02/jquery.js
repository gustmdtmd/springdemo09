$(document).ready(function(){
  $('#btn').on('click', process);
});


//data:'name=' + $('#name').val() => {name:$('#name').val()}
/*
function process(){
  $.ajax({
    type:'POST',
    dataType:'text',
    //파라미터값
    data:{name:$('#name').val()},
    url:'name.do',
    success:viewMessage
  });
}
*/

/*
GET - 지정된 리소스에서 데이터를 요청합니다.
POST - 처리할 데이터를 지정된 리소스에 제출합니다.
$.get(URL,callback);
$.post(URL,data,callback);
*/

function process(){
  $.post('name.do', {name:$('#name').val()}, viewMessage);
}

function viewMessage(res){
  $('#wrap').html(res);
}