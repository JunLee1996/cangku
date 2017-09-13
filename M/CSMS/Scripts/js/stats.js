jQuery(document).ready(function($) {
	$("#menu").mmenu({
		"navbar": {
			"title": "统计"
		},
		"extensions": [
			"pagedim-black"
		]
	});
});
$("#menu").removeClass("nav-hidden");

$("#sales").click(function(){
	$("html,body").animate({scrollTop:0}, 500);
});

$("#produciton").click(function(){
	$("html,body").animate({scrollTop:340}, 500);
});

$("#warehouse").click(function(){
	$("html,body").animate({scrollTop:650}, 500);
});

$(function(){
    initSalesChart(TotalRevenue, NoTotalRevenue);
    initProducitonChart(SumTotalProduct, SumNoTotalProduct);
    initWarehouseChart(SumShippedCount, SumNoShippedCount, SumReserves)
});

function initSalesChart(amountReceived, amountNotReceived) {
	var salesChart = echarts.init($("#salesChart")[0]);
	var option = {
		title: {
			text: '合同收款情况',
			subtext: '总金额：￥' + (amountReceived + amountNotReceived),
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} : ￥{c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['未收金额', '已收金额']
		},
		series: [{
			name: "contractIncome",
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
					value: amountNotReceived,
					name: '未收金额'
				},
				{
					value: amountReceived,
					name: '已收金额'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	salesChart.setOption(option, false, true);
}

function initProducitonChart(totalProduc, noTotalProduc) {
	var producitonChart = echarts.init($("#producitonChart")[0]);
	var option = {
		title: {
			text: '生产情况',
			subtext: '需求量：' + (totalProduc + noTotalProduc),
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['未生产量', '已生产量']
		},
		series: [{
			name: "contractIncome",
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
					value: noTotalProduc,
					name: '未生产量'
				},
				{
					value: totalProduc,
					name: '已生产量'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	producitonChart.setOption(option, false, true);
}

function initWarehouseChart(reserves, shippedCount, noShippedCount) {
	var warehouseChart = echarts.init($("#warehouseChart")[0]);
	var option = {
		title: {
			text: '发货情况',
			subtext: '库存量：' + reserves,
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['未发货数量', '已发货数量']
		},
		series: [{
			name: "contractIncome",
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
					value: noShippedCount,
					name: '未发货数量'
				},
				{
					value: shippedCount,
					name: '已发货数量'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	warehouseChart.setOption(option, false, true);
}