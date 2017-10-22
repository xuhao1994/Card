layui.use('form', function(){
  var form = layui.form;
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});
$(".sure.border-radius.green").on("click",function(){
	window.location.href="traderecord.html";
});