const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr');
connection.logging = true;

const proxy = connection.createHubProxy('weatherHub');

proxy.on('broadcastWeather', (weatherRating) => {
    //radi sta triba sa weatherRatingon
});

connection.start().done(() => {
        proxy.invoke('InitiateConnection', timeLocation, units);
    }).fail(() => {
        console.log('Failed');
}   );