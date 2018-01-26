import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("Our first test", () => {
    it("should pass", () => {
        expect(2 + 2).to.equal(4);
    });
});

describe("index.html", () => {
    it("should say hello", () => {
        //put up a reference to index.html, so that jsdom will keep that in the memory, which will be useful to run the test
        const index = fs.readFileSync('./index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            //virtual DOM is created in the memory by jsdom
        })
    })
});