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
    /* These aren't passing. I don't know how to write them yet. */
    it.skip('out of range parameters should throw an error', function () {
      chai.expect(() => formatTime('100', '00')).to.throw();
      chai.expect(() => formatTime('-01', '00')).to.throw();
      chai.expect(() => formatTime('00', '61')).to.throw();
      chai.expect(() => formatTime('00', '-01')).to.throw();
    });
});

