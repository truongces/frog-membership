var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();

describe('Something', () => {
	describe('Some Scenario', () => {
		it('Here you go', () => {
			var testString = "I'm a string";

			assert.ok(true);
			testString.should.be.a("string");
			expect(10).to.lessThan(11);
		});
	});
});