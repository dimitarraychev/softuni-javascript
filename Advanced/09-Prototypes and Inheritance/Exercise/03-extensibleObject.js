function extensibleObject() {

    let parentObj = {};
    let childObj = Object.create(parentObj);

    childObj.extend = function (obj) {
        objAsArr = Object.entries(obj);

        for (const [key, value] of objAsArr) {
            if (typeof (value) === 'function') {
                parentObj[key] = value;
            } else {
                childObj[key] = value;
            }
        }
    }

    return childObj;
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);