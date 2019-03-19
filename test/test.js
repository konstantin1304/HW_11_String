describe("Function getEnglishAlphabetInUpperCase", function () {

    it("should return english alphabet in upper case", function () {
        const actual = getEngAlphabetUpperCase();
        const expected = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        assert.equal(actual, expected);
    });

    it("should return first symbal that equals 'A' ", function () {
        const actual = getEngAlphabetUpperCase();
        const expected = ('A');
        assert.equal(actual[0], expected);
    });

    it("should return first symbal that equals 'M' ", function () {
        const actual = getEngAlphabetUpperCase();
        const expected = ('M');
        assert.equal(actual[actual.length / 2 - 1], expected);
    });

    it("should return first symbal that equals 'Z' ", function () {
        const actual = getEngAlphabetUpperCase();
        const expected = ('Z');
        assert.equal(actual[actual.length - 1], expected);
    });

});

describe("Function getEngAlphabetLowCaseReverse", function () {

    it("should return reversed english alphabet in low case", function () {
        const actual = getEngAlphabetLowCaseReverse();
        const expected = ('zyxwvutsrqponmlkjihgfedcba');
        assert.equal(actual, expected);
    });

    it("should return first symbal that equals 'z' ", function () {
        const actual = getEngAlphabetLowCaseReverse();
        const expected = ('z');
        assert.equal(actual[0], expected);
    });

    it("should return first symbal that equals 'm' ", function () {
        const actual = getEngAlphabetLowCaseReverse();
        const expected = ('m');
        assert.equal(actual[actual.length / 2], expected);
    });

    it("should return first symbal that equals a ", function () {
        const actual = getEngAlphabetLowCaseReverse();
        const expected = ('a');
        assert.equal(actual[actual.length - 1], expected);
    });

});

describe("Function getRusAlphabetUpperCase", function () {

    it("should return russian alphabet in low case", function () {
        const actual = getRusAlphabetUpperCase();
        const expected = ('абвгдежзийклмнопрстуфхцчшщъыьэюя');
        assert.equal(actual, expected);
    });

    it("should return first symbal that equals 'а' ", function () {
        const actual = getRusAlphabetUpperCase();
        const expected = ('а');
        assert.equal(actual[0], expected);
    });

    it("should return first symbal that equals 'п' ", function () {
        const actual = getRusAlphabetUpperCase();
        const expected = ('п');
        assert.equal(actual[actual.length / 2 - 1], expected);
    });

    it("should return first symbal that equals 'я' ", function () {
        const actual = getRusAlphabetUpperCase();
        const expected = ('я');
        assert.equal(actual[actual.length - 1], expected);
    });

});

describe("Function getASCIINmbers", function () {

    it("should return string of numbers from 0 to 9", function () {
        const actual = getASCIINmbers();
        const expected = ('0123456789');
        assert.equal(actual, expected);
    });

    it("should return first symbal that equals '0' ", function () {
        const actual = getASCIINmbers();
        const expected = ('0');
        assert.equal(actual[0], expected);
    });

    it("should return first symbal that equals '5' ", function () {
        const actual = getASCIINmbers();
        const expected = ('5');
        assert.equal(actual[actual.length / 2], expected);
    });

    it("should return first symbal that equals '9' ", function () {
        const actual = getASCIINmbers();
        const expected = ('9');
        assert.equal(actual[actual.length - 1], expected);
    });

});

describe("Function getASCIIPrintsSimbals", function () {

    it("should return string of symbals from ' '(space) to ~", function () {
        const actual = getASCIIPrintsSimbals();
        const expected = (' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~');
        assert.equal(actual, expected);
    });

    it("should return first symbal that equals ' '(sapce) ", function () {
        const actual = getASCIIPrintsSimbals();
        const expected = (' ');

        assert.equal(actual[0], expected);
    });

    it("should return first symbal that equals '5' ", function () {
        const actual = getASCIIPrintsSimbals();
        const expected = ('P');
        assert.equal(actual[Math.round(actual.length / 2)], expected);
    });

    it("should return first symbal that equals '~' ", function () {
        const actual = getASCIIPrintsSimbals();
        const expected = ('~');
        assert.equal(actual[actual.length - 1], expected);
    });

});


describe("Function parseIntNumberToString", function () {

    it("should return '0' type string, when entered number equals 0", function () {
        const actual = parseIntNumberToString(0);
        const expected = ('0');
        assert.equal(actual, expected);
    });

    it("should return '0' type string, when entered number equals 0.1", function () {
        const actual = parseIntNumberToString(0.1);
        const expected = ('0');
        assert.equal(actual, expected);
    });

    it("should return '1' type string, when entered number equals 1", function () {
        const actual = parseIntNumberToString(1);
        const expected = ('1');
        assert.equal(actual, expected);
    });

    it("should return '-1' type string, when entered number equals -1", function () {
        const actual = parseIntNumberToString(-1);
        const expected = ('-1');
        assert.equal(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'undefined'", function () {
        const actual = parseIntNumberToString(undefined);
        const expected = ('NaN');
        assert.equal(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'Infinity'", function () {
        const actual = parseIntNumberToString(Infinity);
        const expected = ('NaN');
        assert.equal(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'Null'", function () {
        const actual = parseIntNumberToString(null);
        const expected = ('NaN');
        assert.equal(actual, expected);
    });

});

describe("Function parseFloatNumberToString", function () {

    it("should return '0' type string, when entered number equals 0", function () {
        const actual = parseFloatNumberToString(0);
        const expected = ('0');
        assert.equal(actual, expected);
    });

    it("should return '0.1' type string, when entered number equals 0.1", function () {
        const actual = parseFloatNumberToString(0.1);
        const expected = ('0.1');
        assert.equal(actual, expected);
    });

    it("should return '1' type string, when entered number equals 1", function () {
        const actual = parseFloatNumberToString(1);
        const expected = ('1');
        assert.equal(actual, expected);
    });

    it("should return '-1' type string, when entered number equals -1", function () {
        const actual = parseFloatNumberToString(-1);
        const expected = ('-1');
        assert.equal(actual, expected);
    });

    it("should return '1.1' type string, when entered number equals 1.1", function () {
        const actual = parseFloatNumberToString(1.1);
        const expected = ('1.1');
        assert.equal(actual, expected);
    });

    it("should return '-1.1' type string, when entered number equals -1.1", function () {
        const actual = parseFloatNumberToString(-1.1);
        const expected = ('-1.1');
        assert.equal(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'undefined'", function () {
        const actual = parseFloatNumberToString(undefined);
        const expected = ('NaN');
        assert.equal(actual, expected);
    });

    it("should return Infinity type number, when entered string equals 'Infinity'", function () {
        const actual = parseFloatNumberToString(Infinity);
        const expected = ('Infinity');
        assert.equal(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'null'", function () {
        const actual = parseFloatNumberToString(null);
        const expected = ('NaN');
        assert.equal(actual, expected);
    });

});

describe("Function parseStringToIntNumber", function () {

    it("should return 0 type number, when entered string equals '0'", function () {
        const actual = parseStringToIntNumber('0');
        const expected = (0);
        assert.equal(actual, expected);
    });

    it("should return 0 type number, when entered string equals '0.1'", function () {
        const actual = parseStringToIntNumber('0.1');
        const expected = (0);
        assert.equal(actual, expected);
    });

    it("should return 1 type number, when entered string equals '1'", function () {
        const actual = parseStringToIntNumber('1');
        const expected = (1);
        assert.equal(actual, expected);
    });

    it("should return -1 type string, when entered number equals '-1'", function () {
        const actual = parseStringToIntNumber('-1');
        const expected = (-1);
        assert.equal(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'undefined'", function () {
        const actual = parseStringToIntNumber('undefined');
        const expected = (NaN);
        assert.deepEqual(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'Infinity'", function () {
        const actual = parseStringToIntNumber('Infinity');
        const expected = (NaN);
        assert.deepEqual(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'Null'", function () {
        const actual = parseStringToIntNumber('null');
        const expected = (NaN);
        assert.deepEqual(actual, expected);
    });

});

describe("Function parseStringToFloatNumber", function () {

    it("should return 0 type string, when entered number equals '0'", function () {
        const actual = parseStringToFloatNumber('0');
        const expected = (0);
        assert.equal(actual, expected);
    });

    it("should return 0.1 type string, when entered number equals '0.1'", function () {
        const actual = parseStringToFloatNumber('0.1');
        const expected = (0.1);
        assert.equal(actual, expected);
    });

    it("should return 1 type string, when entered number equals '1'", function () {
        const actual = parseStringToFloatNumber('1');
        const expected = (1);
        assert.equal(actual, expected);
    });

    it("should return -1 type string, when entered number equals '-1'", function () {
        const actual = parseStringToFloatNumber('-1');
        const expected = (-1);
        assert.equal(actual, expected);
    });

    it("should return 1.1 type string, when entered number equals '1.1'", function () {
        const actual = parseStringToFloatNumber('1.1');
        const expected = (1.1);
        assert.equal(actual, expected);
    });

    it("should return -1.1 type string, when entered number equals '-1.1'", function () {
        const actual = parseStringToFloatNumber('-1.1');
        const expected = (-1.1);
        assert.equal(actual, expected);
    });


    it("should return NaN type number, when entered string equals 'undefined'", function () {
        const actual = parseStringToFloatNumber('undefined');
        const expected = (NaN);
        assert.deepEqual(actual, expected);
    });

    it("should return Infinity type number, when entered string equals 'Infinity'", function () {
        const actual = parseStringToFloatNumber('Infinity');
        const expected = (Infinity);
        assert.deepEqual(actual, expected);
    });

    it("should return NaN type number, when entered string equals 'null'", function () {
        const actual = parseStringToFloatNumber('null');
        const expected = (NaN);
        assert.deepEqual(actual, expected);
    });

});



describe("Function getWordsArray", function() {
    const testData = [{
        str: " ",
        expected: [""]
    },
        {
            str: "aa",
            expected: ["aa"]
        },
        {
            str: "aa bb",
            expected: ["aa", "bb"]
        },
        {
            str: "aa bb cc",
            expected: ["aa", "bb", "cc"]
        },
        {
            str: "aa,bb.cc?dd! ee;ff:gg.",
            expected: ["aa", "bb", "cc", "dd", "ee", "ff", "gg"]
        },
        {
            str: "aa,.?!;:aa",
            expected: ["aa", "aa"]
        },

    ];

    testData.forEach(function (params) {
        const {
            str,
            expected,
        } = params;

        it(`should return array = ${expected} when entered array equals ${str}`, function () {
            const actual = getWordsArray(str);

            assert.deepEqual(actual, expected);
        });
    });
});

describe("Function checkLengthOfLessElement", function () {
        it("should return 0, if string is empty", function () {
        const actual = checkLengthOfLessElement('');
        const expected = (0);
        assert.equal(actual, expected);
    });

    it("should return 1, if string includs one element 'a'", function () {
        const actual = checkLengthOfLessElement('a');
        const expected = (1);
        assert.equal(actual, expected);
    });

    it("should return 1, if string includs 'a aa aaa'", function () {
        const actual = checkLengthOfLessElement('a aa aaa');
        const expected = (1);
        assert.equal(actual, expected);
    });

    it("should return 1, if string includs 'aa a aaa'", function () {
        const actual = checkLengthOfLessElement('aa a aaa');
        const expected = (1);
        assert.equal(actual, expected);
    });

    it("should return 1, if string includs 'aa aaa a'", function () {
        const actual = checkLengthOfLessElement('aa a aaa');
        const expected = (1);
        assert.equal(actual, expected);
    });
    //TODO: поправить, валится с пробелами вначале
    it("should return 2, if string includs ' aa aaa'", function () {
        const actual = checkLengthOfLessElement(' aa aaa');
        const expected = (2);
        assert.equal(actual, expected);
    });
    //TODO: поправить, валится с пробелами вначале
    it("should return 2, if string includs ' aaa aa'", function () {
        const actual = checkLengthOfLessElement(' aaa aa');
        const expected = (2);
        assert.equal(actual, expected);
    });
    //TODO: поправить, валится с пробелами после
    it("should return 2, if string includs 'aa aaa '", function () {
        const actual = checkLengthOfLessElement(' aa aaa');
        const expected = (2);
        assert.equal(actual, expected);
    });
    //TODO: поправить, валится с пробелами после
    it("should return 2, if string includs 'aaa aa '", function () {
        const actual = checkLengthOfLessElement(' aaa aa');
        const expected = (2);
        assert.equal(actual, expected);
    });

    it("should return 2, if string includs 'aa aaa aaa'", function () {
        const actual = checkLengthOfLessElement('aa aaa aaa');
        const expected = (2);
        assert.equal(actual, expected);
    });

    it("should return 2, if string includs 'aaa aaa aa'", function () {
        const actual = checkLengthOfLessElement('aaa aaa aa');
        const expected = (2);
        assert.equal(actual, expected);
    });

    it("should return 2, if string includs 'aa,.?!;:a", function () {
        const actual = checkLengthOfLessElement('aa,.?!;:a');
        const expected = (1);
        assert.equal(actual, expected);
    });

    it("should return 2, if string includs 'aa,.?!;:aa'", function () {
        const actual = checkLengthOfLessElement('aa,.?!;:aa');
        const expected = (2);
        assert.equal(actual, expected);
    });



});

describe("Function replaceLastThreeSymbols", function () {
    const testData = [{
            arr: [''],
            wordLength: 3,
            expected: ['']
        },
        {
            arr: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
            wordLength: 3,
            expected: ['a', 'aa', '$', 'aaaa', 'aaaaa']
        },
        {
            arr: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
            wordLength: 4,
            expected: ['a', 'aa', 'aaa', 'a$', 'aaaaa']
        },
        {
            arr: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
            wordLength: 5,
            expected: ['a', 'aa', 'aaa', 'aaaa', 'aa$'],
        },
        {
            arr: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
            wordLength: 6,
            expected: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaa$'],
        },

    ];

    testData.forEach(function (params) {
        const {
            arr,
            wordLength,
            expected,
        } = params;

        it(`should return array = ${expected} when entered array equals ${arr}`, function () {
            const actual = replaceLastThreeSymbols(arr, wordLength);

            assert.deepEqual(actual, expected);
        });
    });
});

describe("Function enterSpaces", function () {
    const testData = [{
        str: "aa,bb.cc?dd!ee;ff:gg.",
        expected: "aa, bb. cc? dd! ee; ff: gg."
    },
        {
            str: "aa,bb. cc? dd! ee; ff: gg.",
            expected:"aa, bb. cc? dd! ee; ff: gg."
        },
        {
            str: "aa,bb. cc?dd!ee;ff:gg.",
            expected: "aa, bb. cc? dd! ee; ff: gg."
        },
        {
            str: "aa,bb.cc? dd!ee;ff:gg.",
            expected: "aa, bb. cc? dd! ee; ff: gg."
        },
        {
            str: "aa,bb.cc?dd! ee;ff:gg.",
            expected: "aa, bb. cc? dd! ee; ff: gg."
        },
        {
            str: "aa,bb.cc?dd!ee; ff:gg.",
            expected: "aa, bb. cc? dd! ee; ff: gg."
        },
        {
            str: "aa,bb.cc?dd!ee;ff: gg.",
            expected: "aa, bb. cc? dd! ee; ff: gg."
        },

    ];

    testData.forEach(function (params) {
        const {
            str,
            expected,
        } = params;

        it(`should return array = ${expected} when entered array equals ${str}`, function () {
            const actual = enterSpaces(str);

            assert.deepEqual(actual, expected);
        });
    });
});

describe("Function removeRepeatedSymbols", function () {
    const testData = [{
        str: "",
        expected: ""
    },
        {
            str: "a",
            expected:"a"
        },
        {
            str: "aa",
            expected: "a"
        },
        {
            str: "ab",
            expected: "ab"
        },
        {
            str: "aba",
            expected: "ab"
        },
        {
            str: "abba",
            expected: "ab"
        },
        {
            str: "aab",
            expected: "ab"
        },
        {
            str: "abb",
            expected: "ab"
        },
        {
            str: "bba",
            expected: "ba"
        },

    ];

    testData.forEach(function (params) {
        const {
            str,
            expected,
        } = params;

        it(`should return array = ${expected} when entered array equals ${str}`, function () {
            const actual = removeRepeatedSymbols(str);

            assert.deepEqual(actual, expected);
        });
    });
});

describe("Function getWordsQuantity", function () {
    it("should return 0, if string is empty", function () {
        const actual = getWordsQuantity('');
        const expected = (0);
        assert.equal(actual, expected);
    });

    it("should return 1, if string includs one element 'a'", function () {
        const actual = getWordsQuantity('a');
        const expected = (1);
        assert.equal(actual, expected);
    });

    it("should return 3, if string includs 'a aa aaa'", function () {
        const actual = getWordsQuantity('a aa aaa');
        const expected = (3);
        assert.equal(actual, expected);
    });

    it("should return 3, if string includs 'aa a aaa'", function () {
        const actual = getWordsQuantity('aa a aaa');
        const expected = (3);
        assert.equal(actual, expected);
    });

    it("should return 3, if string includs 'aa aaa a'", function () {
        const actual = getWordsQuantity('aa a aaa');
        const expected = (3);
        assert.equal(actual, expected);
    });
    //TODO: поправить, валится с пробелами вначале
    it("should return 2, if string includs ' aa aaa'", function () {
        const actual = getWordsQuantity(' aa aaa');
        const expected = (2);
        assert.equal(actual, expected);
    });
    //TODO: поправить, валится с пробелами вначале
    it("should return 2, if string includs ' aaa aa'", function () {
        const actual = getWordsQuantity(' aaa aa');
        const expected = (2);
        assert.equal(actual, expected);
    });
    //TODO: поправить, валится с пробелами после
    it("should return 2, if string includs 'aa aaa '", function () {
        const actual = getWordsQuantity(' aa aaa');
        const expected = (2);
        assert.equal(actual, expected);
    });
    //TODO: поправить, валится с пробелами после
    it("should return 2, if string includs 'aaa aa '", function () {
        const actual = getWordsQuantity(' aaa aa');
        const expected = (2);
        assert.equal(actual, expected);
    });

    it("should return 3, if string includs 'aa aaa aaa'", function () {
        const actual = getWordsQuantity('aa aaa aaa');
        const expected = (3);
        assert.equal(actual, expected);
    });

    it("should return 3, if string includs 'aaa aaa aa'", function () {
        const actual = getWordsQuantity('aaa aaa aa');
        const expected = (3);
        assert.equal(actual, expected);
    });

    it("should return 2, if string includs 'a,.?!;:aa'", function () {
        const actual = getWordsQuantity('a,.?!;:aa');
        const expected = (2);
        assert.equal(actual, expected);
    });

    it("should return 2, if string includs 'aa,.?!;:aa'", function () {
        const actual = getWordsQuantity('aa,.?!;:aa');
        const expected = (2);
        assert.equal(actual, expected);
    });

});

describe('Function remove', () => {

    it(`should returns 'existeialism' if string equals 'existentialism'`, () => {
        let str = 'existentialism'; //14
        const actual = remove('existentialism', 6, 2);
        const expected = 'existeialism';

        assert.equal(actual, expected);
    });

    it(`should returns 'xistentialism' if string equals 'existentialism'`, () => {
        let str = 'existentialism'; //14
        const actual =remove('existentialism', 0, 1);
        const expected = 'xistentialism';

        assert.equal(actual, expected);
    });

    it(`should returns 'existentialis' if string equals 'existentialism'`, () => {
        let str = 'existentialism'; //14
        const actual = remove('existentialism', 13, 1);
        const expected = 'existentialis';

        assert.equal(actual, expected);
    });

});

describe('Function reverse', () => {

    it(`should returns '' if string is empty`, () => {
        let str = ''; //14
        const actual = reverse(str);
        const expected = '';
        assert.equal(actual, expected);
    });

    it(`should returns 'e' if string equals 'e'`, () => {
        let str = 'e'; //14
        const actual = reverse(str);
        const expected = 'e';
        assert.equal(actual, expected);
    });

    it(`should returns 'xe' if string equals 'ex'`, () => {
        let str = 'ex'; //14
        const actual = reverse(str);
        const expected = 'xe';
        assert.equal(actual, expected);
    });

    it(`should returns 'exe' if string equals 'exe'`, () => {
        let str = 'exe'; //14
        const actual = reverse(str);
        const expected = 'exe';
        assert.equal(actual, expected);
    });

    it(`should returns 'msilaitnetsixe' if string equals 'existentialism'`, () => {
        let str = 'existentialism'; //14
        const actual = reverse(str);
        const expected = 'msilaitnetsixe';
        assert.equal(actual, expected);
    });

});

describe("Function deleteLastWord", function () {
    const testData = [
        {
            str: "",
            expected: ""
        },
        {
            str: "hello",
            expected:""
        },
        {
            str: "hello word",
            expected: "hello "
        },
        {
            str: "hello,.?!;:word,?",
            expected: "hello,.?!;:,?"
        },
    ];

    testData.forEach(function (params) {
        const {
            str,
            expected,
        } = params;

        it(`should return ${expected} when entered string equals ${str}`, function () {
            const actual = deleteLastWord(str);

            assert.deepEqual(actual, expected);
        });
    });
});







