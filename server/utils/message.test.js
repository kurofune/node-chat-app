const expect = require('expect');

var {generateMessage} = require('./message');

describe('generate message', () => {
    it('should generate the correct message object', () => {
        var from = 'Nate';
        var text = 'some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});