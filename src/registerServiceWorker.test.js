const rewire = require("rewire")
const registerServiceWorker = rewire("./registerServiceWorker")
const registerValidSW = registerServiceWorker.__get__("registerValidSW")
// @ponicode
describe("registerValidSW", () => {
    test("0", () => {
        let callFunction = () => {
            registerValidSW("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            registerValidSW("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            registerValidSW("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            registerValidSW("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            registerValidSW("http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            registerValidSW(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("registerServiceWorker.unregister", () => {
    test("0", () => {
        let callFunction = () => {
            registerServiceWorker.unregister()
        }
    
        expect(callFunction).not.toThrow()
    })
})
