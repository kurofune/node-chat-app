const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generate message', () => {
    it('should generate the correct message object', () => {
        var from = 'Nate';
        var text = 'some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generate location message', () => {
    it('should generate the correct location message object', () => {
        var from = 'Nate';
        var lat = 15;
        var lng = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, lat, lng);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});