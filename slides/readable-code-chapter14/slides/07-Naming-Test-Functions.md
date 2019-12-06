<!-- classes: title -->

## Naming Test Functions

---

Test code is typically organized into functions-one for each method and/or situation you're testing.

<!-- note
テストする関数や状況に応じてひとまとめにするよ
-->
---

For instance, the code testing `SortAndFilterDocs()` was inside a function named `Test1()`:


```cpp
void Test1() {
    ...
}
```

---

Picking a good name for a test function can seem tedious and irrelevant, but don't resort to meaningless names like Test1(), Test2(), and the like.

<!-- note
手抜くなよ
-->

---

Instead, you should use the name to describe details about the test.

<!-- note
テストの内容を表した名前をつけなはれ
-->

---

In particular, it's handy if the person reading the test code can quickly figure out:

* The class being tested (if any)
* The function being tested
* The situation or bug being tested

<!-- note
これらがあると助かるよきっと
-->

---

A simple approach to construct a good test function name is to just concatenate that information together, possibly with a "Test_" prefix.

<!-- note
Test_プレフィックスつけるっていうやつ
-->

---

For instance, instead of naming it `Test1()`, we can use the `Test_<FunctionName>()` format:

```cpp
void Test_SortAndFilterDocs() {
    ...
}
```

---

Depending on how sophisticated this test is, you might consider a separate test function for each situation being tested.

<!-- note
状況に応じて分割しろ
-->

---

You could use the `Test_<FunctionName>_<Situation>()` format:

```cpp
void Test_SortAndFilterDocs_BasicSorting() {
    ...
}

void Test_SortAndFilterDocs_NegativeValues() {
    ...
}

...
```

---

#### Don't be afraid of having a long or clunky name here.

---

* not called throughout your codebase
* effectively acting like a comment
<li style={{color: "var(--color-js)"}}>
most testing frameworks will print out the name of the function where the assertion failed
  <ul><li>so a descriptive name is especially helpful</li></ul>
</li>

<!-- note
実際に呼ばれるわけじゃないし、コメントのように振る舞うし、大抵のテスティングフレームワークはメソッド名表示してくれるし
-->

---

Note that if you're using a testing framework, there might already be rules or conventions on how methods are named.

---

For instance, the Python unit test module expects test method names to start with "test."

---

When it comes to naming helper functions in your test code,

<!-- note
テスト用のヘルパーなのかもっと一般的なヘルパーなのか分かるようにしておけよ
-->

---

it's useful to highlight whether the function does any assertions itself or is just an ordinary "test-unaware" helper.

---

For instance, in this chapter, any helper function that calls assert() is named Check...().

---

But the function AddScoredDoc() was named just like an ordinary helper function.

---

<!-- classes: reference -->

Isn't it easier to define in sentences if the method name is so descriptive?

---

<!-- classes: reference -->

「日本語テストメソッドについてどう思いますか？」

https://www.slideshare.net/kenjikumaie/ss-25876730

---

<!-- classes: reference -->

「TDD／BDDの思想とテスティングフレームワークの関係を整理しよう」

https://www.atmarkit.co.jp/ait/articles/1403/25/news033.html

---

<!-- classes: reference -->

「RSpecしぐさ 〜歴史から学ぶRSpec〜」

https://www.slideshare.net/takafumionaka/rspec-83693226

---

<!-- classes: reference -->

<img src="../images/t_wada-stand.png" />

---

<!-- classes: reference -->

<img src="../images/tdd.jpg" />

---

<!-- classes: reference -->

I recommend you to read appendix c of translated "test-driven development".

---

<!-- classes: reference -->

### Summary

---

<!-- classes: reference -->

* "TDD" is misleading. What is the "Test"?
 * The word "Test" does not refer to "automated", "implitated" or "clear" so-called "test activities" such as "automated test"
* As a result, "Test" was changed to "Behaviour" again
* Emergence of "RSpec"
* Emergence of "Cucumber"
  * More suitable for acceptance test
  * In Japan, QA Engineer often use this format in a context "automated test".
