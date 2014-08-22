var _ = require('../'),
    expect = require('expect.js');


describe('underscore', function () {
    it('should get correct type', function () {
        expect(_.getType(1)).to.eql('number');
        expect(_.getType(1.1)).to.eql('number');
        expect(_.getType(/foo/)).to.eql('regexp');
        expect(_.getType(new Date())).to.eql('date');
        expect(_.getType(true)).to.eql('boolean');
        expect(_.getType([])).to.eql('array');
        expect(_.getType({})).to.eql('object');
        expect(_.getType(function(){})).to.eql('function');
        expect(_.getType('s'/2)).to.eql('nan');
        expect(_.getType(null)).to.eql('null');
        expect(_.getType(undefined)).to.eql('undefined');
    });

    it('should be defined', function(){
        expect(_.isDefined(false)).to.eql(true);
        expect(_.isDefined("test")).to.eql(true);
        expect(_.isDefined(1)).to.eql(true);
        expect(_.isDefined(new Date())).to.eql(true);
    });

    it('should be not be defined', function(){
        expect(_.isDefined(null)).to.eql(false);
        expect(_.isDefined(undefined)).to.eql(false);
    });
});
