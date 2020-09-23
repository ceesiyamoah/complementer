document
    .querySelector(".request-complement")
    .addEventListener("click", function ()
    {
        fetch("/complement")
            .then(response => response.json())
            .then(function (data)
            {
                document.querySelector(".complement").innerText = data.complement;
            })
            .catch(function (err)
            {
                console.error(err);
            });
    });