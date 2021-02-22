$(function(){
function news(country,cat,publisher){
    //$("#list").html("Loading...");
    if(cat!=null){
        cat='&category='+cat
    }else{cat=""}
  var url='https://newsapi.org/v2/top-headlines?country='+country+cat+'&apiKey=f1f74c922b344c268af95738220fbe63';
$.ajax({
        url:url,
        "timeout":0
        
}).done( function(data){
    $("#list").html(`<h2><u style='color:#7CB342'>Top headlines - ${country}</u></h2>`);
        
        for(var i=0;i<data["articles"].length;i++){
           // console.log(data["articles"][i]['title'])
       $("#list").append("<img class='thmb' src="+data['articles'][i]['urlToImage']+"><br><b><a href="+data['articles'][i]['url']+">"+data['articles'][i]['title']+"</a></b><br><small>by "+data['articles'][i]['author']+"<br>"+data['articles'][i]['publishedAt']+"<br></small><div class='less' onclick=h(this)><div class='content'>"+data['articles'][i]['content']+"<br></div><small>Read more..</small></div><hr>")
    }}).catch(e =>{console.log(e.message)})}


    $("#country").on("change",function(){
       news($("#country").val(),$("#cat").val(),"") 
    })
    $("#cat").on("change",function(){
       news($("#country").val(),$("#cat").val(),"") 
    })
    $(".less").click(function(){
        $(this).children().toggle(200);
    })
    news("za","","")
})
function h(a){
    $(a).children().toggle(200);
}
