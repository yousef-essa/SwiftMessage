import StringUtil from "../src/StringUtil";

test("the username safety variation", () => {
    expect(StringUtil.isUsernameSafe("Josh ")).toBeFalsy()
    expect(StringUtil.isUsernameSafe("Josh @")).toBeFalsy()
    expect(StringUtil.isUsernameSafe("Josh_@")).toBeFalsy()
    expect(StringUtil.isUsernameSafe("Josh-@")).toBeFalsy()

    expect(StringUtil.isUsernameSafe("Josh_2")).toBeTruthy()
    expect(StringUtil.isUsernameSafe("Josh-2")).toBeTruthy()
})

test("the equal comparison", () => {
    expect(StringUtil.equals("josh", "Josh")).toBeTruthy()
    expect(StringUtil.equals("josh", "jOsH")).toBeTruthy()
    expect(StringUtil.equals("josh", "JOOSH")).toBeFalsy()
})