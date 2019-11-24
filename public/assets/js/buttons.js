$(document).ready(() => {
    $('.make-burger').on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#burger-text').val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(() => {
            console.log('added a borger')
            location.reload();
        });
    });

    $('.devour').on("click", function(event){
        // event.preventDefault();

        let id = $(this).attr('data-id');
        let devoured = $(this).attr("data-devoured");

        let devourData = {
            id: id,
            devoured: devoured
        }

        console.log(devoured)
        debugger;
        $.ajax(`/api/burgers/${id}`, {
            method: "PUT",
            data: devourData,
            error: function(err) {
                debugger;
                console.log(err);
            }
        }).then(function() {
            console.log('i eated it')
            location.reload();
        });
    });

    $('.delete-burger').on("click", function(event) {
        // event.preventDefault();

        let id = $(this).data('id');

        $.ajax(`/api/burgers/${id}`, {
            method: "DELETE"
        }).then(function() {
            console.log('its gone');
            location.reload();
        })
    });
});