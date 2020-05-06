// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1234')
var topic = 'vibrationDataTopic'
// var message = 'Hello World!'

client.on('connect', () => {
    console.log("connected");
    setInterval(() => {
        let randomNumber = (Math.floor((Math.random() * 250) + 1)).toString();
        client.publish(topic, randomNumber)
        console.log('Message sent!', randomNumber)
    }, 5000)
})