(function(){
	$.ajax({
		url:"data.json",
		type:"GET",
		// dataType:"json",
		success:function(data){
			// console.log(data.data[0]);
			// console.log(data.data.length);
			setData(data,'article');
		},
		error:function(){
			console.log('error');
		}
	})
	function setData(data,id){
		var str='';
		for (var i = 0; i < data.data.length; i++) {
			str+='<div class="my-artical">';
				str+='<div class="articals">';
					str+='<div class="dotts"></div>';
					str+='<a class="my-date" href="javascript:;">';
						str+='<span class="trig"></span>';
						str+='<span class="dates">'+data.data[i].date+'</span>';
					str+='</a>';
					str+='<div class="ar-container">';
						str+='<div class="my-line"></div>';
							str+='<div class="ar-content">';
							str+='<p class="art-title"><a href="javascript:;">'+data.data[i].title+'</a></p>';
							
								if(data.data[i].image!='none'){
									str+='<div class="col-md-4 col-xs-9 art-img">';
										str+='<img src="'+data.data[i].image+'" alt="文章配图">';
									str+='</div>';
								}
							str+='<div class="col-md-6 col-xs-10 art-detail">';
								str+='<p>'+data.data[i].details+'</p>';
							str+='</div>';
						str+='</div>';
					str+='</div>';
				str+='</div>';
			str+='</div>';
			
		}
		// console.log(str);
		$('#'+id).html(str);
	}
})();