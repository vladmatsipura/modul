$("sqr_1_external").mouseenter( function () {
	$("sqr_3_fly").css("visibility", "visible");
	console.log("success");

}
	);
$("sqr_2_internal").mouseenter( function () {
	$("sqr_3_fly").addClass("loader");
	console.log("success");
}
);
$("sqr_3_flay").mouseenter( function () {
	$("sqr_3_fly").css("visibility", "hidden");
	console.log("success");