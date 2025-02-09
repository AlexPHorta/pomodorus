import { formatTime } from '../src/js/timer.js';


describe('formatTime', function () {
    it('should return 00:01', function () {
      chai.expect(formatTime('00', '01')).to.be.eql('00:01');
    });
    it('should return 01:01', function () {
      chai.expect(formatTime('01', '01')).to.be.eql('01:01');
    });
    it('should return 10:10', function () {
      chai.expect(formatTime('10', '10')).to.be.eql('10:10');
    });
    it('should return 99:00 and give a warn', function () {
      chai.expect(formatTime('100', '00')).to.be.eql('99:00');
    });
});

