
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
var Accountant = new Array();
var Project = new Array();
var Invoicing = new Array();
addLoadEvent(function () { fillServiceZZ() });
function fillServiceZZ() {
    var reg = new RegExp("&quot;", "g"); //创建正则RegExp对象   
    var Productioner = JSON.parse(ProductionerJson.replace(reg, '"'));
    fullData2(Productioner[0].TotalProduct, Productioner[0].NoTotalProduct);
    var reg = new RegExp("&quot;", "g"); //创建正则RegExp对象    
    Accountant = JSON.parse(AccountantJson.replace(reg, '"'));
    fullData(Accountant[0].AffirmIncomeGist, Accountant[0].SubAffirmIncomeAmount, Accountant[0].SubInvoiceCount, Accountant[0].SubInvoiceAmount, Accountant[0].SubCost, Accountant[0].Subworker, Accountant[0].SubMaterial, Accountant[0].Subtotal, Accountant[0].AvgGrossrofitMargin,Accountant[0].SubInvoiceCount);
    fillService(Accountant);
  
    var reg = new RegExp("&quot;", "g"); //创建正则RegExp对象   
    var Warehouse = JSON.parse(WarehouseJson.replace(reg, '"'));
    fullData3(Warehouse[0].Reserves, Warehouse[0].ShippedCount, Warehouse[0].NoShippedCount);
    var reg = new RegExp("&quot;", "g"); //创建正则RegExp对象   
    var Sales = JSON.parse(SalesJson.replace(reg, '"'));
    fullData1(Sales[0].SubAffirmIncomeAmount, Sales[0].NoAmountCollection);
    var reg = new RegExp("&quot;", "g"); //创建正则RegExp对象   
     Project = JSON.parse(ProjectJson.replace(reg, '"'));
    fullData4(Project[0].ProjectStart, Project[0].DompletedDate, Project[0].DompletedAcceptanceDate);
    var reg = new RegExp("&quot;", "g"); //创建正则RegExp对象   
    var ContractNameT = JSON.parse(ContractNameTJson.replace(reg, '"'));
    fullData5(ContractNameT[0].ContractName, ContractNameT[0].Customer, ContractNameT[0].Contract_Type, ContractNameT[0].Contract_Amount, ContractNameT[0].Count, ContractNameT[0].Contract_Number, Contract_Dat);
    

}
function fullData( affirmIncomeGist, AffirmIncomeAmount, subInvoiceCount, subInvoiceAmount, subCost, subworker, subMaterial, subtotal, avgGrossrofitMargin,SubInvoiceCount) {
  
   
   
    document.getElementById("lbl_affirmIncomeGist").innerHTML = "确认收入依据：" + affirmIncomeGist;
    document.getElementById("lbl_AffirmIncomeAmount").innerHTML = "确认收入金额（不含税）：" + AffirmIncomeAmount;
    document.getElementById("lbl_subInvoiceAmount").innerHTML = "已开票金额（含税）：" + subInvoiceAmount;
    document.getElementById("lbl_subInvoiceCount").innerHTML = "已开票数量：" + SubInvoiceCount;
    document.getElementById("lbl_subCost").innerHTML = "已结转成本数量：" + subCost;
    document.getElementById("lbl_subworker").innerHTML = "直接人工：" + subworker;
    document.getElementById("lbl_subMaterial").innerHTML = "直接材料：" + subMaterial;
    document.getElementById("lbl_subtotal").innerHTML = "小计：" + subtotal;
    document.getElementById("lbl_avgGrossrofitMargin").innerHTML = "2017年1-12月毛利率：" + avgGrossrofitMargin;
}
function fullData1( amountReceived, amountNotReceived) {
    
    document.getElementById("lbl_amountReceived").innerHTML = "已收金额：" + amountReceived;
    document.getElementById("lbl_amountNotReceived").innerHTML = "未收金额：" + amountNotReceived;
}
function fullData2( totalProduc, noTotalProduc) {
   
    document.getElementById("lbl_totalProduc").innerHTML = "已生产量：" + totalProduc;
    document.getElementById("lbl_noTotalProduc").innerHTML = "未生产量：" + noTotalProduc;
}
function fullData3( reserves, shippedCount, noShippedCount) {
   

    document.getElementById("lbl_reserves").innerHTML = "库存量：" + reserves;
    document.getElementById("lbl_shippedCount").innerHTML = "已发货数量：" + shippedCount;
    document.getElementById("lbl_noShippedCount").innerHTML = "未发货数量：" + noShippedCount;
}
//施工
function fullData4(reserves, shippedCount, noShippedCount) {
  
 
    document.getElementById("lbl_projectStart").innerHTML = "施工日期：" + reserves;
    document.getElementById("lbl_pompletedDate").innerHTML = "竣工日期：" + shippedCount;
    document.getElementById("lbl_pompletedAcceptanceDate").innerHTML = "取得竣工验收单日期：" + noShippedCount;
}
function fullData5(contractName, costumerName, contractType, contractAmount, count, contractNumber, signatureDate) {
    document.getElementById("lbl_contractName").innerHTML = "合同名称：" + contractName;
    document.getElementById("lbl_costumerName").innerHTML = "合同方客户名称：" + costumerName;
    document.getElementById("lbl_contractType").innerHTML = "合同类别：" + contractType;
    document.getElementById("lbl_contractAmount").innerHTML = "合同金额（人民币元）：" + contractAmount;
    document.getElementById("lbl_count").innerHTML = "数量（套/个）：" + count;
    document.getElementById("lbl_contractNumber").innerHTML = "合同编号：" + contractNumber;
    document.getElementById("lbl_signatureDate").innerHTML = "合同签署日期：" + signatureDate;
}

function fillService(Accountant) {
    var services = document.getElementById("txt_services");
    for (var i = 0; i < Accountant.length; i++) {
        var service = document.createElement("option");
        service.innerHTML = Accountant[i].Service;
        service.value = Accountant[i].Service;
        services.appendChild(service);
    }
}
function serviceChanged(service) {
    for (var i = 0; i < Accountant.length; i++) {
        if (Accountant[i].Service == service) {
            fullData4(Project[i].ProjectStart, Project[i].DompletedDate, Project[i].DompletedAcceptanceDate);
           
            fullData( Accountant[i].AffirmIncomeGist, Accountant[i].SubAffirmIncomeAmount, Accountant[i].SubInvoiceCount, Accountant[i].SubInvoiceAmount, Accountant[i].SubCost, Accountant[i].Subworker, Accountant[i].SubMaterial, Accountant[i].Subtotal, Accountant[i].AvgGrossrofitMargin, Accountant[i].SubInvoiceCount);
        }
    }
}
