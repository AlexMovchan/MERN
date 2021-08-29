const fetchRequest = require("./fetchRequest")
// @ponicode
describe("fetchRequest.GET", () => {
    test("0", () => {
        let callFunction = () => {
            fetchRequest.GET("Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fetchRequest.GET("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fetchRequest.GET("www.google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fetchRequest.GET("https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fetchRequest.GET("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fetchRequest.GET(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
