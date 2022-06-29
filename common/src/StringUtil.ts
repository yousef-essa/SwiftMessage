export default class StringUtil {
    private static readonly UNSAFE_USERNAME_REGEX = new RegExp('[^\\w]')

    /**
     * Checks if the given username is safe to be used.
     *
     * @param username the username to check against.
     * @return true if it's safe to use, otherwise false.
     */
    public static isUsernameSafe(username: string): boolean {
        return !this.UNSAFE_USERNAME_REGEX.test(username)
    }

    /**
     * Checks if both strings are a match, or not.
     *
     * @param a the first string to compare to b.
     * @param b the second string to compare to a.
     * @return true if they're a match, otherwise false.
     */
    public static equals(a: string, b: string): boolean {
        return a.localeCompare(b, undefined, { sensitivity: 'accent' }) == 0
    }
}