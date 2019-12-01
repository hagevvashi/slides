<!-- classes: title -->

## What Was Wrong with That Test

---

At the beginning of the chapter, we claimed there were at least eight things wrong with this test:

```cpp
void Test1() {
    vector<ScoredDocument> docs;
    docs.resize(5);
    docs[0].url = "http://example.com";
    docs[0].score = -5.0;
    docs[1].url = "http://example.com";
    docs[1].score = 1;
    docs[2].url = "http://example.com";
    docs[2].score = 4;
    docs[3].url = "http://example.com";
    docs[3].score = -99998.7;
    docs[4].url = "http://example.com";
    docs[4].score = 3.0;

    SortAndFilterDocs(&docs);

    assert(docs.size() == 3);
    assert(docs[0].score == 4);
    assert(docs[1].score == 3.0);
    assert(docs[2].score == 1);
}
```

---

Now that we've learned some techniques for writing better tests, let's identify them:

---

### 1. The test is very long and full of unimportant details.

<br />

You can describe what this test is doing in one sentence, so the test statement shouldn't be much longer.

---

### 2. Adding another test isn't easy.

<br />

You'd be tempted to copy/paste/modify, which would make the code even longer and full of duplication.

<!-- note
思わずコピペしたくなっちゃうわって話。結果として長くて重複の多いソースになるね
-->
---

### 3. The test failure messages aren't very useful.

<br />

If this test fails, it will just say Assertion failed: `docs.size() == 3`, which doesn't give you enough information to debug it further.

<!-- note
エラーメッセージが役に立たねぇ・・・
-->

---

### 4. The test tries to test everything at once.

<br />

It's trying to test both the negative filtering and the sorting functionality. It would be more readable to break this into multiple tests.

<!-- note
一度にすべてのテストをやろうとしてるがな・・・
-->


---

### 5. The test inputs aren't simple.

<br />

In particular, the example score -99998.7 is "loud" and gets your attention even though there isn't any significance to that specific value. A simpler negative value would suffice.

<!-- note
テストの入力値がひどい・・・無意味にどでかい数字
-->


---

### 6. The test inputs don't thoroughly exercise the code.

<br />

For example, it doesn't test when thescore is 0. (Would that document be filtered or not?)

<!-- note
テストの入力値がひどい・・・しかも網羅できてねぇ
-->

---

### 7. It doesn't test other extreme inputs, such as an empty input vector, a very large vector, or one with duplicate scores.

<!-- note
テストの入力値がひどい・・・極端な入力値とかのテストしてねぇ
-->

---

### 8. The name Test1() is meaningless - the name should describe the function or situation being tested.

<!-- note
テストメソッド名（笑）
-->
