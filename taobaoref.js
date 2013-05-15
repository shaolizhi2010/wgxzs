(function(win, doc) {
	var s = doc.createElement("script"), h = doc.getElementsByTagName("head")[0];
	if (!win.alimamatk_show) {
		s.charset = "gbk";
		s.async = true;
		s.src = "http://a.alimama.cn/tkapi.js";
		h.insertBefore(s, h.firstChild);
	}
	var o = {
		pid : "mm_41911274_4014205_13032481",
		appkey : "",
		unid : ""
	};
	win.alimamatk_onload = win.alimamatk_onload || [];
	win.alimamatk_onload.push(o);
})(window, document);
