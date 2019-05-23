<!-- classes: title -->

## Test Friendly Development

---

Some code is easier to test than other code.

<!-- note
テストしやすいコードもしにくいコードもあるね
-->

---

Ideal code to test

* has a well-defined interface,
* doesn't have much state or other "setup,"
* doesn’t have much hidden data to inspec.

<!-- note
良いインターフェース
状態やセットアップがねぇ(良いこと)
検査が必要な隠されたデータがねぇ(良いこと)
-->

---

If you write your code knowing you'll be writing a test for it later, a funny thing happens:

<!-- note
後でコード書くんだ！って思っておくとおもろいこと起きるで
-->

---

***you start designing your code so that it's easy to test!***

---

Fortunately, coding this way also means that you create better code in general.

<!-- note
一般的には良いコード生むって言われてるよね
-->

---

Test-friendly designs often lead naturally to well-organized code, with separate parts to do separate things.

<!-- note
関心の分離までできちまうってことや
-->

---

### TEST-DRIVEN DEVELOPMENT

---
<!-- classes: reference -->

<img src="../images/t_wada-stand.png" />

---
<!-- classes: reference -->

<img src="../images/tdd.jpg">

---

<!-- classes: reference -->

#### An Introduction to "test-driven development"

* I strongly recomend you to read just chapter 1
  * key idea and essence are contained
* "test-driven development" is not about "Testing method"
* I thought it is about "design"
  * "work" and "beutiful" code

---

<!-- classes: reference -->

#### by using TDD, awful codes below will never be created

* The test is very long and full of unimportant details.
* Adding another test isn't easy.

---

<!-- classes: reference -->

because you define the behaviour before you write the code

---

Of all the ways to break up a program into classes and methods, the most decoupled ones are usually the easiest to test.

<!-- note
疎結合だとテストしやすいよ
-->

---

On the other hand, let's say your program is very interconnected, with many method calls between your classes and lots of parameters for all the methods.

<!-- note
たくさんのクラスでメソッド呼び出しがあって密結合でめっちゃ引数必要だったらどうよ？
-->

---

Not only would that program have hard-to-understand code, but the test code would be just as ugly, and hard to read and write.

<!-- note
プロダクトコードが読みにくいだけでなくてテストコードもひどいだろうね
読むのがきついだけでなくて書くのもきついぜ・・・
-->

---

Having lots of "external" components (global variables that need to be initialized, libraries or config files that need to be loaded, etc.) also makes it more annoying to write tests.

---

<!-- classes: reference -->

### Software Structure Metrics Based on Information Flow

https://www.academia.edu/26311925/Software_Structure_Metrics_Based_on_Information_Flow

---

<!-- classes: reference -->

* First researchers of "fan-out" and "fan-in"
  * Sallie Henry, Dennis Kafura
* (fan-in*fan-out)^2 is larger, the method or module contains more bugs

---

<!-- classes: reference -->

It is said that a high "fan in" and a low "fan out" are good, but it is very dangerous if both numbers are high.

---

<!-- classes: reference -->

#### fan-out

* fan-out of procedure A is an addition of the number of local flow from A and data structures modified by A
  * local flow
    1. A calls B
    2. A returns a value by the call of B and B uses that value
    3. C calles B with the value A returns
  * adds the number of these flow and the number of the data structure modified by A

---

<!-- classes: reference -->

#### fan-in

* fan in of procedure A is an addition of the number of local flow against A and data structures from which A gets information
  * fan-in is a good indicator of reusability

---

Generally, if you're designing your code and realize, Hmm, this is going to be a nightmare to test, that's a good reason to stop and rethink the design.

<!-- note
これテストすんのはしんどそうだ・・・って思ったら設計し直すタイミングっすね
-->

---

Table 14-1 shows some typical testing and design problems.

---

### TABLE 14-1. Characteristics of less testable code, and how this leads to problems with design

| Characteristic | Testability problem | Design problem |
| --- | --- | --- |
| Use of global variables | All the global state needs to reset for every test (otherwise, different tests can interfere with each other). | Hard to understand which functions have what side effects. Can't think about each function in isolation; need to consider the whole program to understand if everything works. |
| Code depends on a lot of external components | <span style="color: var(--color-js)">It's harder to write any tests because there's so much scaffolding to set up first. Tests are less fun to write, so people avoid writing tests.</span> | System is more likely to fail when one of the dependencies fails. It's harder to understand what impact any given change might make. It's harder to refactor classes. System has more failure modes and recovery paths to think about. |
| Code has nondeterministic behavior | Tests are flaky and unreliable. Tests that occasionally fail end up being ignored. | The program is more likely to have race conditions or other nonreproducible bugs. The program is harder to reason about. Bugs in production are very difficult to track down and fix. |

<!-- note
グローバルって言ってるけど、状態を持っている事自体が結構危険で、value object というパターンがあるくらい
たくさんスパイやスタブを用意しなければならなくなったらやばい兆候
-->

---

On the other hand, if you have a design that's easy to write tests for, that's a good sign.

---

Table 14-2 lists some beneficial testing and design characteristics.

---

### TABLE 14-2. Characteristics of more testable code, and how this leads to good design

| Characteristic | Testability benefit | Design benefit |
| --- | --- | --- |
| <span style="color: var(--color-js);">Classes have little or no internal state</span> | Tests are easier to write because there is less setup needed to test a method and less hidden state to inspect. | Classes with less state are simpler and easier to understand. |
| Classes/functions only do one thing | Fewer test cases are required to fully test it. | Smaller/simpler components are more modular, and the system is generally more decoupled. |
| Classes depend on few other classes;high decoupling | Each class can be tested independently(much easier than testing multiple classes at once). | System can be developed in parallel. Classes can be easily modified or removed without disrupting the rest of the system. |
| Functions have simple, well-defined interfaces | There are well-defined behaviors to test for. Simple interfaces take less work to test. | Interfaces are easier for coders to learn and are more likely to be reused. |
