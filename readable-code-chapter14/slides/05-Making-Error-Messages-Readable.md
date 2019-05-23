<!-- classes: title -->

## Making Error Messages Readable

---

The preceding code was nice, but what happens when that *assert(output == expected_output)* line fails?🤔

---

It produces an error message like this:

```cpp
Assertion failed: (output == expected_output),
    function CheckScoresBeforeAfter, file test.cc, line 37.

```
---

Obviously, if you ever saw this error, you'd wonder, *What were the values of output and expected_output?🤔*

---

## Using Better Versions of assert()

---

Fortunately, most languages and libraries have more sophisticated versions of assert() you can use. So instead of writing:

```cpp
assert(output == expected_output);
```

you could use the Boost C++ library:

```cpp
BOOST_REQUIRE_EQUAL(output, expected_output)
```

---

### Now, if the test fails, you get a more detailed message like:

<br />

```console
test.cc(37): fatal error in "CheckScoresBeforeAfter": critical check
    output == expected_output failed ["1, 3, 4" != "4, 3, 1"]
```

which is much more helpful.

---
<!-- classes: reference -->

<img src="../images/t_wada-stand.png" />

---
<!-- classes: reference -->

### power-assert

<br />

> https://github.com/power-assert-js/power-assert

```console
  $ $(npm bin)/mocha --require intelli-espower-loader path/to/test/mocha_node.js


  Array
    #indexOf()
      1) should return index when the value is present
      2) should return -1 when the value is not present

  various types
    3) demo


  0 passing (43ms)
  3 failing

  1) Array #indexOf() should return index when the value is present:

      AssertionError:   # test/example2.js:13

  assert(ary.indexOf(zero) === two)
         |   |       |     |   |
         |   |       |     |   2
         |   -1      0     false
         [1,2,3]

  [number] two
  => 2
  [number] ary.indexOf(zero)
  => -1

      + expected - actual

      -false
      +true

      at Context.it (test/example2.js:13:13)

  2) Array #indexOf() should return -1 when the value is not present:

      AssertionError: THIS IS AN ASSERTION MESSAGE   # test/example2.js:17

  assert.ok(ary.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE')
            |   |       |    |   |
            |   |       |    |   -1
            |   1       2    false
            [1,2,3]

  [number] minusOne
  => -1
  [number] ary.indexOf(two)
  => 1

      + expected - actual

      -false
      +true

      at Context.it (test/example2.js:17:20)

  3) various types demo:

      AssertionError:   # test/example2.js:43

  assert(types[index].name === bob.name)
         |    ||      |    |   |   |
         |    ||      |    |   |   "bob"
         |    ||      |    |   Person{name:"bob",age:5}
         |    ||      |    false
         |    |11     "alice"
         |    Person{name:"alice",age:3}
         ["string",98.6,true,false,null,undefined,#Array#,#Object#,NaN,Infinity,/^not/,#Person#]

  --- [string] bob.name
  +++ [string] types[index].name
  @@ -1,3 +1,5 @@
  -bob
  +alice


      + expected - actual

      -false
      +true

      at Context.it (test/example2.js:43:9)
```

---

## Hand-Crafted Error Messages

---

Using BOOST_REQUIRE_EQUAL(), we were able to get the nicer error message:

```cpp
output == expected_output failed ["1, 3, 4" != "4, 3, 1"]
```

---

However, this message could be improved further.

---

For instance, it would be useful to see the original input that triggered this failure.

---

### The ideal error message would be something like:

<br />

```console
CheckScoresBeforeAfter() failed,
  Input:           "-5, 1, 4, -99998.7, 3"
  Expected Output: "4, 3, 1"
  Actual Output:   "1, 3, 4"
```

---

### If this is what you want, go ahead and write it!

<br />

```cpp
void CheckScoresBeforeAfter(...) {
    ...
    if (output != expected_output) {
        cerr << "CheckScoresBeforeAfter() failed," << endl;
        cerr << "Input:           \"" << input << "\"" << endl;
        cerr << "Expected Output: \"" << expected_output << "\"" << endl;
        cerr << "Actual Output:   \"" << output << "\"" << endl;
        abort();
    }
```

---

The moral of the story is that error messages should be as helpful as possible.

---

Sometimes, printing your own message by building a "custom assert" is the best way to do this.

---
<!-- classes: reference -->

### Example

#### assert-exception

* https://github.com/59naga/assert-exception
* https://qiita.com/59naga/items/765e8faa64b4f0defc85
