import { expect } from 'chai';
import * as isConstructable from '../index';

class ConstructableTest {
    constructor() {
        return 'has constructor';
    }
}

class EmptyClass { }

function ES5Class() {
    this.hi = 'no constructor';
}

function justAFunction() {
    this.hello = function () {
        return 'sup';
    }
}

describe('is-constructable', () => {
    describe('Consumer-created Classes', () => {
        it('should make a class constructable', () => {
            expect(isConstructable(ConstructableTest)).to.be.true;
        });

        it('should show an empty class as constructable', () => {
            expect(isConstructable(EmptyClass)).to.be.true;
        });

        it('should register an ES5 class', () => {
            expect(isConstructable(ES5Class)).to.be.true;
        });
    });

    describe('Native Classes', () => {
        it('should show String as constructable', () => {
            expect(isConstructable(String)).to.be.true;
        });
        it('should show Number as constructable', () => {
            expect(isConstructable(Number)).to.be.true;
        });
        it('should show Array as constructable', () => {
            expect(isConstructable(Array)).to.be.true;
        });
        it('should show Object as constructable', () => {
            expect(isConstructable(Object)).to.be.true;
        });
    })
    describe('Non-constructable Entities', () => {
        it('should show an object as non-constructable', () => {
            expect(isConstructable({})).to.be.false;
        });

        it('should show an number as non-constructable', () => {
            expect(isConstructable(3)).to.be.false;
        });

        it('should show an string as non-constructable', () => {
            expect(isConstructable('hi')).to.be.false;
        });

        it('should show an array as non-constructable', () => {
            expect(isConstructable([3])).to.be.false;
        });
    })
})
