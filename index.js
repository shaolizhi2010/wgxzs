/** 
 * 鼠标移上去显示层 
 * @param divId 显示的层ID 
 * @returns 
 */  
$.fn.myHoverTip = function(divId) {  
    //var div = $("#" + divId); //要浮动在这个元素旁边的层   
    //div.css("position", "absolute");//让这个层可以绝对定位   
    var self = $(this); //当前对象   
    self.hover(function() {  
	        //div.css("display", "block");  
	        var p = self.position(); //获取这个元素的left和top   
	        alert("left : "+p.left-10);
	        alert(" top : "+p.top);
	        
	        //var x = p.left + self.width();//获取这个浮动层的left   
	        
//	        alert("x : "+ x);
//	        var docWidth = $(document).width();//获取网页的宽   
//	        if (x > docWidth - div.width() - 20) {  
//	            x = p.left - div.width();  
//	        }  
//	        div.css("left", x);  
//	        div.css("top", p.top);  
//	        div.show();  
    	},  
	    function() {  
	        //div.css("display", "none");  
	    }  
    );  
    return this;  
};
