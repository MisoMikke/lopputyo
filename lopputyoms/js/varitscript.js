//navi erisivuille
document.getElementById("navi1").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Etusivu</a></li>" +
"<li><a href='palvelut.html'>Palvelut</a></li>" +
"<li><a href='varit.html'>Värien testaus</a></li>" +
"<li><a href='galleria.html'>Galleria</a></li>" +
"<li><a href='yhteystiedot.html'>Yhteystiedot</a></li>" +
"</ul>";
//taustan väri vaihto vasemmalla
function fiesta()
{
document.getElementById("tausta1").style="fill:#DD4132"
}
function jester()
{
document.getElementById("tausta1").style="fill:#9E1030"
}
function turmeric()
{
document.getElementById("tausta1").style="fill:#FE840E"
}
function livcor()
{
document.getElementById("tausta1").style="fill:#FF6F61"
}
function pinkpea()
{
document.getElementById("tausta1").style="fill:#C62168"
}
function peppers()
{
document.getElementById("tausta1").style="fill:#8D9440"
}
function aspeng()
{
document.getElementById("tausta1").style="fill:#FFD662"
}
function princessb()
{
document.getElementById("tausta1").style="fill:#00539C"
}
function toffee()
{
document.getElementById("tausta1").style="fill:#755139"
}
function mangom()
{
document.getElementById("tausta1").style="fill:#D69C2F"
}
function tmoss()
{
document.getElementById("tausta1").style="fill:#616247"
}
function sweetl()
{
document.getElementById("tausta1").style="fill:#E8B5CE"
}
function soybean()
{
document.getElementById("tausta1").style="fill:#D2C29D"
}
function eclipse()
{
document.getElementById("tausta1").style="fill:#343148"
}
function scorn()
{
document.getElementById("tausta1").style="fill:#F0EAD6"
}
function bgranite()
{
document.getElementById("tausta1").style="fill:#615550"
}
//värit oikealla
function fiesta2()
{
document.getElementById("tausta2").style="fill:#DD4132"
}
function jester2()
{
document.getElementById("tausta2").style="fill:#9E1030"
}
function turmeric2()
{
document.getElementById("tausta2").style="fill:#FE840E"
}
function livcor2()
{
document.getElementById("tausta2").style="fill:#FF6F61"
}
function pinkpea2()
{
document.getElementById("tausta2").style="fill:#C62168"
}
function peppers2()
{
document.getElementById("tausta2").style="fill:#8D9440"
}
function aspeng2()
{
document.getElementById("tausta2").style="fill:#FFD662"
}
function princessb2()
{
document.getElementById("tausta2").style="fill:#00539C"
}
function toffee2()
{
document.getElementById("tausta2").style="fill:#755139"
}
function mangom2()
{
document.getElementById("tausta2").style="fill:#D69C2F"
}
function tmoss2()
{
document.getElementById("tausta2").style="fill:#616247"
}
function sweetl2()
{
document.getElementById("tausta2").style="fill:#E8B5CE"
}
function soybean2()
{
document.getElementById("tausta2").style="fill:#D2C29D"
}
function eclipse2()
{
document.getElementById("tausta2").style="fill:#343148"
}
function scorn2()
{
document.getElementById("tausta2").style="fill:#F0EAD6"
}
function bgranite2()
{
document.getElementById("tausta2").style="fill:#615550"
}
//näytä väri nimi kentässä
function showName(element)
{
    const maalinimi1 = element.id;
    $('#maalikentta1').val(maalinimi1);
}
function showName2(element)
{
    const maalinimi2 = element.id;
    $('#maalikentta2').val(maalinimi2);
}