import container from './container';
import td from 'testdouble';
import model from '../model/model';
import { expect } from 'chai';

describe("Container", () => {
    const containerName = "foo_container";
    const modelDescription = {
        a: new model("test_field"),
        b: new model("test_abc")
    };
    
    let testContainer;

    beforeEach(() => {
        testContainer = new container(containerName, modelDescription);
    })

    describe("Reducer", () => {
        it("Returns a map of (state, action) functions", () => {            
            let reducer = testContainer.reducer();
        })

        it("uses reducerKey as its root")
    })
    describe("Map Dispatch to Props from model", () => {

    })
    describe("Map State to Props", () => {
        it("has the same key returned from the reducer", () => {

        })

    })
})