import td from "testdouble";
import model from './model';

describe('Base Model', () => {
    const key = "state_key";
    let dispatch,
        instance;

    beforeEach(() => {
        dispatch = td.function();
        instance = new model()
            .withDispatch(dispatch)
            .withKey(key);
    })

    describe("validate", () => {
        it("returns &nbsp by default", () => {
            let validation = instance.validate("");

            expect(validation.errorMessage).toContain("&nbsp");
        });
    })
    
})