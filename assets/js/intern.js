$(document).ready(function () {

        $("#first-table").show();
        $("#second-table").hide();
        $("#third-table").hide();
        
    $("select").on("change", function() {

        let selectVal = $("#select").val();

        switch (selectVal) {
            case "first":
                $("#second-table").hide();
                $("#third-table").hide();
                $("#first-table").fadeIn(200);
                break;
            case "second":
                $("#first-table").hide();
                $("#third-table").hide();
                $("#second-table").fadeIn(200);
                break;
            case "third":
                $("#first-table").hide();
                $("#second-table").hide();
                $("#third-table").fadeIn(200);
                break;
            default:
                $("#first-table").show();
                $("#second-table").hide();
                $("#third-table").hide();
                break;
        }
    });
});