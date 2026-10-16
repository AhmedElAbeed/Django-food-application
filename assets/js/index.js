


$("#add_food").submit(function(event){
    alert("Recette Bien Ajoutée!!!!");
})

$("#update_food").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/foods/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Recette Mise à Jour effectuée!!!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/foods/${id}`,
            "method" : "DELETE"
        }

        if(confirm("êtes-vous sûr de supprimer cette recette?")){
            $.ajax(request).done(function(response){
                alert("recette supprimée");
                location.reload();
            })
        }

    })
}