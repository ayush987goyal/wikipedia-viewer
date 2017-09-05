$(document).ready(function () {

    $("#searchBtn").on("click", function () {

        var query = $("input:text").val();

        var uri = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + query + "&srlimit=10&callback=?";

        $.getJSON(uri, function (json) {

            $("#searchResult").empty();

            for (var i = 0; i < json[1].length; i++) {

                var temp = '<a href="' + json[3][i] + '" target="_blank">' + '<div class="well resultDiv">' + json[1][i] + '<br><br>' + json[2][i] + '</div></a>';
                $("#searchResult").append(temp);

            }

        });

    });

    $("input:text").on("input", function () {

        var query = $("input:text").val();

        var uri = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + query + "&srlimit=10&callback=?";

        $.getJSON(uri, function (json) {

            $("#searchResult").empty();

            for (var i = 0; i < json[1].length; i++) {

                var temp = '<a href="' + json[3][i] + '" target="_blank">' + '<div class="well resultDiv">' + json[1][i] + '<br><br>' + json[2][i] + '</div></a>';
                $("#searchResult").append(temp);

            }

        });

    });

    $("#randomBtn").on("click", function () {

        window.open("https://en.wikipedia.org/wiki/Special:Random");

    });

});