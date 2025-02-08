import { formatTime } from '../src/js/script.js';
//var script = require('../src/js/script.js');

describe("example", () => {
    it("2 + 2", () => {
        chai.expect(2 + 2).to.be.eql(4);
    });
});

describe('formatTime', function () {
    it('should return 00:10', function () {
      chai.expect(formatTime('00', '10')).to.be.eql('00:10');
    });
});

