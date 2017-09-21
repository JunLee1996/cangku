﻿function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
var Accountants
function fullLog() {
    var reg = new RegExp("&quot;", "g"); //创建正则RegExp对象    
    var serviceArr = JSON.parse(Contract_DataJson.replace(reg, '"'));
    fillService(serviceArr)
}
function addLog() {
    var reg = new RegExp("&quot;", "g"); //创建正则RegExp对象    
     Accountants = JSON.parse(AccountantJson.replace(reg, '"'));
    for(var i=0;i<Accountants.length;i++){
        if (Accountants[i].Service == Service) {
            
            DoLog(Accountants[i]);
        }
    }
    
}
addLoadEvent(fullLog);
addLoadEvent(addLog);
function fillService(serviceArr){
	var services = document.getElementById("txt_services");
	for(var i = 0; i < serviceArr.length; i++){
		var service = document.createElement("option");
		service.innerHTML = serviceArr[i].Service;
		service.value = serviceArr[i].ID;
		services.appendChild(service);
	}
}
function DoLog(Accountant) {
    txt_affirmIncomeAmount
   
    $("#txt_services").find("option[value=" + Accountant.Service + "]").attr("selected", true);
    $("#txt_contract_Type").find("option[value=" + Accountant.AffirmIncomeGist + "]").attr("selected", true);
    $("#txt_affirmIncomeAmount").val(Accountant.SubAffirmIncomeAmount);
    $("#txt_cost").val(Accountant.SubCost);
    $("#txt_worker").val(Accountant.Subworker);
    $("#txt_material").val(Accountant.SubMaterial);
    var grossrofitMargin = (parseFloat(Accountant.SubAffirmIncomeAmount)-(parseFloat(Accountant.Subworker)+parseFloat(Accountant.SubMaterial)))/parseFloat(Accountant.SubAffirmIncomeAmount)
    grossrofitMargin= grossrofitMargin.toFixed(2)
    $("#txt_grossrofitMargin").val(grossrofitMargin);
}
$("#txt_services").change(function () {
    for (var i = 0; i < Accountants.length; i++) {
        if (Accountants[i].Service == $("#txt_services").find("option:selected").text()) {
            DoLog(Accountants[i]);
        }
    }
});
function computations() {
    var grossrofitMargin = (parseFloat($("#txt_affirmIncomeAmount").val()) - (parseFloat($("#txt_worker").val()) + parseFloat($("#txt_material").val()))) / parseFloat($("#txt_affirmIncomeAmount").val())
    grossrofitMargin = grossrofitMargin.toFixed(2)
    $("#txt_grossrofitMargin").val(grossrofitMargin);
}
