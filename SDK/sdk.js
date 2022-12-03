// data - how many vertical and how many horizontal
function getAdds() {
    var url = "http://www.example.com/ads/";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // JSON.parse does not evaluate the attacker's scripts.
            var resp = JSON.parse(xhr.responseText);
            var horizontalResult = resp.horizontal;
            var verticalResult = resp.vertical;
            var squareResult = resp.square;


            document.getElementById("dad-horizontal-add").innerHTML = <img src={horizontalResult.url} onclick={registerClick(horizontalResult.id)}></img>;
            document.getElementById("dad-vertical-add").innerHTML = <img src={verticalResult.url} onclick={registerClick(verticalResult.id)}></img>;
            document.getElementById("dad-square-add").innerHTML = <img src={squareResult.url} onclick={registerClick(squareResult.id)}></img>;
        }
    }
}


function registerClick(id) {
    var url = "http://www.example.com/ads/click/" + id;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send();
}
    
function testCall() {
    alert('yes you did it');
}
