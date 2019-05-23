<!-- classes: title -->

## Summary

---

In test code, readability is still very important.

<!-- note
テストコードでも読みやすさは大事だね
-->
---

If your tests are very readable,

they will in turn be very writable,

so people will add more of them.😎

<!-- note
テストが読みやすい=テストが書きやすい=みんな書く
-->
---

Also, if you design your real code to be easy to test, your code will have a better design overall.

<!-- note
プロダクトコードがテストしやすい設計だとしたら、全体的に良い設計でしょうね
-->
---

Here are specific points on how to improve your tests:

---

* The top level of each test should be as concise as possible; ideally, each test input/output can be described in one line of code.
* If your test fails, it should emit an error message that makes the bug easy to track down and fix.
* Use the simplest test inputs that completely exercise your code.
* Give your test functions a fully descriptive name so it's clear what each is testing. Instead of Test1(), use a name like Test_<FunctionName>_<Situation>.

<!-- note
テストのトップレベルはできるだけ簡潔に、できれば入出力はコード一行で
テストが失敗したらバグの発見や修正しやすいエラーメッセージ出せ
テストに有効な最も単純な値つかえ
説明的な名前つけましょうね
-->

---

And above all, make it easy to modify and add new tests.
