// data - how many vertical and how many horizontal
function getUserPersonaAndFillAds() {
    // thrift API call
    var thrift = false;
    var luxe = false;
    var frequent = false;
    var bulk = false;
    var userPersona = "";
    // fetch for thrift
    fetch('https://reqbin.com/echo/post/json', { // to be changed
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userAddress})
    })
    .then(response => {
        thrift = response;
    });
    
    // fetch for luxe
    fetch('https://reqbin.com/echo/post/json', { // to be changed
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'  
    },
    body: JSON.stringify({ userAddress})
    })
    .then(response => {
        luxe = response;
    });

    // fetch for frequent
    fetch('https://reqbin.com/echo/post/json', { // to be changed
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userAddress})
    })
    .then(response => {
        frequent = response;
    });

    //fetch for bulk
    fetch('https://reqbin.com/echo/post/json', { // to be changed
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userAddress})
    })
    .then(response => {
        bulk = response;
    });

    if (thrift === false && luxe === false && frequent === false && bulk === false) {
        userPersona =  "thrift";
    } else {
        if (thrift === true) {
            userPersona = "thrift";
        } else if (luxe === true) {
            userPersona = "luxe";
        } else if (frequent === true) {
            userPersona = "frequent";
        } else if (bulk === true) {
            userPersona = "bulk";
        }
    }

    // Call API to get ad data for user persona
    fetch('https://reqbin.com/echo/post/json', { // to be changed
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userPersona})
    })
    .then(response => {
        // display ads
            document.getElementById("dad-vertical-add").innerHTML = `<img src={${response.url}} onclick={registerClick(${response.id})}></img>`;
    });
}
 
function testCall() {
    alert('yes you did it');
}

// for add click data
function onAddClick(data) {
    // API CALL TO REGISTER CLICK
    fetch('https://reqbin.com/echo/post/json', { // to be changed
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "publisher_id": data.publisherId, ad_name: data.adName, impressions:0, clicks: 1, ad_id: data.addId, userId: data.userId, dappId: data.dappId })
    })
    .then(response => window.open(data.cta));
}
// for add impression data
function onAddView(data) {
    // API CALL TO REGISTER CLICK
    fetch('https://reqbin.com/echo/post/json', { // to be changed
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "publisher_id": data.publisherId, ad_name: data.adName, impressions:1, clicks: 0, ad_id: data.addId, userId: data.userId, dappId: data.dappId })
    })
    .then(response => console.log(response));
}