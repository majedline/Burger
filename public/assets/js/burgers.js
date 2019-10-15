$(function () {

    // function call to devour a burger based on this.id
    $(".undevoured-burger-item").on("click", function (event) {
        console.log(this);
        const id = parseInt($(this).attr("id"));

        var newBurgerDevouredStat = {
            "id": id,
            "devoured": 1
        };

        console.log(newBurgerDevouredStat);

        $.ajax("/api/eat-burger", {
            type: "POST",
            data: newBurgerDevouredStat
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    // function call to create a burger
    $("#create-burger-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#new-burger-name").val().trim()
        };

        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});
