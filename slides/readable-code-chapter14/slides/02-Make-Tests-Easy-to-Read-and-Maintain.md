<!-- classes: title -->

## Make Tests Easy to Read and Maintain

---

## KEY IDEA

> Test code should be readable so that other coders are comfortable changing or adding tests.

---

> Other coders will often look at the test code as unofficial documentation of how the real code works and should be used.
<br />
テストコードというのは「本物のコードの動作と使い方を示した非公式的な文書」だと考えるプログラマもいるほどである

---

### When test code is big and scary, here's what happens:

---

* Coders are afraid to modify the real code.

Oh, we don't want to mess with that code-updating all the tests would be a nightmare!

<!-- note
訳がおかしい気がする
プロダクトコードをいじりたくないってことでは？
すべてのテストコードが悪夢のようになってしまうから
-->

---

* Coders don't add new tests when they add new code.

Over time, less and less of your module is tested, and you are no longer confident that it all works.

<!-- note
テストのあるモジュールが減っていって、動いていることに自信が持てなくなる
-->
