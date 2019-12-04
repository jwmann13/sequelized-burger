$(document).ready(() => {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

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

    $('.devour').on("click", function (event) {
        event.preventDefault();

        let id = $(this).attr('data-id');
        let devoured = $(this).attr("data-devoured");

        let devourData = {
            id: id,
            devoured: devoured
        }

        console.log(devoured)
        $.ajax(`/api/burgers/`, {
            method: "PUT",
            data: devourData,
            error: function (err) {
                console.log(err);
            }
        }).then(function () {
            console.log('i eated it')
            if ($(`#customerName${id}`).val().trim() !== '') {
                console.log($(`#customerName${id}`).val().trim())

                let newCustomer = {
                    name: $(`#customerName${id}`).val().trim(),
                    BurgerId: id
                };

                $.ajax("/api/customer/", {
                    method: "POST",
                    data: newCustomer
                }).then(() => {
                    console.log('new customer');
                    location.reload();
                });
            } else {
                location.reload();
            }
        });
    });

    $('.delete-burger').on("click", function (event) {
        event.preventDefault();

        let id = $(this).data('id');

        $.ajax(`/api/burgers/${id}`, {
            method: "DELETE"
        }).then(function () {
            console.log('its gone');
            location.reload();
        })
    });

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
});