// Establish a WebSocket connection to the echo server
const ws = new WebSocket('wss://echo.websocket.org');
// Add a listener that will be triggered when the WebSocket is ready to use
ws.addEventListener('open', () => {
    const message = 'Hello!';
    console.log('Sending:', message);
    // Send the message to the WebSocket server
    ws.send(message);
});
// Add a listener in order to process WebSocket messages received from the server
ws.addEventListener('message', event => {
    // The `event` object is a typical DOM event object, and the message data sent
    // by the server is stored in the `data` property
    console.log('Received:', event.data);
});