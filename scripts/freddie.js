$(function() {

$(".floating-head").on("click", function () {
	$(".footer").toggleClass("show-footer");
	$(".footer").slideToggle(700);
	$(".home-title").toggleClass("show-title");
	if ($(".menu").hasClass("show-menu")) {
		$(".menu").toggleClass("show-menu");
		$(".level-one").slideUp(300);
		$(".main-menu").removeClass("active");
		setTimeout(function(){ 
			$(".new-menu").remove()
			}, 300);
	} else {
		$(".menu").toggleClass("show-menu");
		$(".main-menu").removeClass("active");
	}
});

$(".spinning").on({
	click: function () {
	$(".rotate-star").toggleClass("stop-star-rotation"),
	$(".start-stop").text("Start");
	
	if ($(".rotate-star").hasClass("stop-star-rotation")) {
		$("start-stop").text("Start")
	} else {
		$(".start-stop").text("Stop")
	}}
});

$("#projects-menu-item").on("click", function() {
	if ($(".project-menu").hasClass("active")) {
		$(".project-menu").slideUp(300);
		$(".project-menu").removeClass("active");
	} else {
		$(".project-menu").slideDown("slow");
		$(".project-menu").addClass("active");
	}
});

$(".sub-menu-item").on("click", function() {
	if ($(this).hasClass("active-menu")) {
		$(this).removeClass("active-menu");
	} else {
		$(".sub-menu-item").removeClass("active-menu");
		$(this).addClass("active-menu");
		$(this).children().find(".sub-sub-menu").slideDown("slow");
	}
});

function clearAll() {
	document.getElementById("name").value = "";
	document.getElementById("e-mail").value = "";
	document.getElementById("subject").value = "";
	document.getElementById("message").value = "";
	document.getElementById("kap-tcha").value = "";
	document.getElementById("checkmark").value = "";
}

$("#clear-button").on({
	click: function() {
		clearAll();
		$("#clear-button").addClass("pressed");
			setTimeout(function() { 
				$("#clear-button").removeClass("pressed");
			}, 1000);
	}
});

function clearCheckmark() {
	$("#checkmark").text("");
	$("#send-button").removeClass("pressed");
}

$("#send-button").on({
	click: function() {
		if (document.getElementById("kap-tcha").value === "I want to hire you!") {
			$("#checkmark").text("✅");
			$("#send-button").addClass("pressed");
			setTimeout(function() { 
				clearCheckmark()
			}, 1000);
			setTimeout(function() { 
				$("#form").submit();
				
			}, 1001);
		} else {
			$("#checkmark").text("❌");
			$("#send-button").addClass("pressed");
			setTimeout(function() { 
				clearCheckmark()
			}, 1000);
		}
	}
});

});