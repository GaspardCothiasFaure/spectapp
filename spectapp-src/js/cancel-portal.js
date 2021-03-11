/*
 *  Retreive the GET parameter in URL
 *  @param name : name of the GET parameter
 */
function getUrlParameter(name){
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)) return decodeURIComponent(name[1]);
}

// Display toaster according to GET parameter
if (getUrlParameter('error')=="notfind")    toastr["error"]("Adresse email ou code de reservation incorrect.");

// Define toaster options
toastr.options = {
    "closeButton": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}