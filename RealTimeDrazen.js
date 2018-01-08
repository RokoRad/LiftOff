const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr');
connection.logging = true;

const proxy = connection.createHubProxy('chatHub');
//receives broadcast messages from a hub function, called "helloApp"
proxy.on('helloApp', (argOne, argTwo, argThree, argFour) => {
    console.log('message-from-server', argOne, argTwo, argThree, argFour);
    //Here I could response by calling something else on the server...
});

// atempt connection, and handle errors
connection.start().done(() => {
    console.log('Now connected, connection ID=' + connection.id);

    proxy.invoke('helloServer', 'Hello Server, how are you?')
    .done((directResponse) => {
        console.log('direct-response-from-server', directResponse);
    }).fail(() => {
        console.warn('Something went wrong when calling server, it might not be up and running?')
    });

}).fail(() => {
    console.log('Failed');
});