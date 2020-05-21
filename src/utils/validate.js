import { RegExp } from "core-js"
let nameRule = /\d/
/* 正则 */
const validate = {
    username: () => new RegExp(nameRule).test(str)
}
export default validate

