
function map()
{
    $(window).load(function()
    {
        var map = L.map('map').setView([46.801630, -71.217933],15);
        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=SWrAtw0LafBt6EEtW0jA',
            {attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a>' +
                    ' <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',}).addTo(map)

        var scene1 = L.marker([46.796779, -71.230436]).addTo(map)
        scene1.bindPopup('<b>Scene Bell</b><br />');

        var scene2 = L.marker([46.806962, -71.214499]).addTo(map)
        scene2.bindPopup('<b>Scene Loto-Quebec</b><br />');

        var scene3 = L.marker([46.809955, -71.212131]).addTo(map)
        scene3.bindPopup('<b>Scene Famille</b><br />');

        var scene4 = L.marker([46.806346, -71.213933]).addTo(map)
        scene4.bindPopup('<b>After-FEQ</b><br />');

    });
}

function formInfo()
{

    var form = document.getElementById('formulaire');
    var text = "<table>";
    var question = ["Votre nom ","Email ","Aimez-vous le festival ? (1 à 10) ","Avez vous deja participé au FEQ ? ","Reviendrez-vous ? ","D'autre remarques pour les organisateurs ? "]
    var dialog = document.getElementById('dialogDiv');
    var $flip1 = $('.flip-1');
    var $flip2 = $('.flip-2');

    for (var i = 0; i < form.elements.length; i++)
    {
        text +=  "<tr><td>" + question[i] + " </td><td> " + form.elements[i].value + "</td></tr>";
        form.elements[i].value = "";
    }

    $flip1.val(1);
    $flip2.val(1);
    $flip1.flipswitch('refresh');
    $flip2.flipswitch('refresh');

    text +="</table>";
    dialog.innerHTML += text;

}



