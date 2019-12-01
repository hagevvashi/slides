<!-- classes: title -->

## Going Too Far

---

It's also possible to focus too much on testing.

---

Here are some examples:

---

### Sacrificing the readability of your real code, for the sake of enabling tests.

---

Designing your real code to be testable should be a win-win situation:

---

* your real code becomes simpler and more decoupled
* your tests are easy to write

---

But if you have to insert lots of ugly plumbing into your real code just so you can test it, something's wrong.

---

### Being obsessive about 100% test coverage.

---

Testing the first 90% of your code is often less work than testing that last 10%.

<!-- note
最後の10%のテストまじきちい
-->

---

That last 10% might involve user interface, or dumb error cases, where the cost of the bug isn't really that high and the effort to test it just isn't worth it.

<!-- note
割に合わないよ・・・
-->
---

The truth is that you'll never get 100% coverage anyhow.

---

If it's not a missed bug, it might be a missed feature or you might not realize that the spec should be changed.

<!-- note
バグの見逃しか、機能実装漏れか、仕様の変更に気づいていないかどれかでしょうね
-->
---

Depending on how costly your bugs are, there's a sweet spot of how much development time it's worth spending on test code.

<!-- note
ケースバイケースよってこと
テストコードにどれだけ時間かけるかは、バグがどれだけやばくなるかってところから判断しろよ
-->

---

If you’re building a website prototype, it might no tbe worth writing any test code at all.

<!-- note
たとえばウェブページのプロトタイプ作ってるならまぁね・・・
-->

---

On the other hand, if you're writing a controller for a spaceship or medical device, testing is probably your main focus.

<!-- note
宇宙船とか医療機器作ってるならバグったら人死ぬぞ
-->

---

### Letting testing get in the way of product development.

<!-- note
テストがプロダクト開発のじゃまになる
-->
---

We've seen situations where testing, which should be just one aspect of a project, dominates the whole project.

<!-- note
テストがプロジェクト全体を支配している状況を目にしたことあるらしい
-->
---

Testing becomes some sort of god to be appeased, and coders just go through the rituals and motions without realizing that their precious engineering time might be better spent elsewhere.

<!-- note
テストが儀式になってるよ・・・
-->
