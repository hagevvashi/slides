<!-- classes: title -->

## Making This Test More Readable

---

### hide less important details from the user, so that more important details are most prominent

<!-- note
一般的な設計原則
「大切でない詳細はユーザから隠し、大切な詳細は目立つようにする」
-->

---

The examples below are not about what this test is doing at a high level

<br />

* setting up a `vector<ScoredDocument>`
* url, score, and docs[], which are just details about how the underlying C++ objects are set up

---

### As a first step in cleaning this up, we could create a helper function like:

```cpp
void MakeScoredDoc(ScoredDocument* sd, double score, string url) {
    sd->score = score;
    sd->url = url;
}
```

---

### Using this function, our test code becomes slightly more compact:


```cpp
void Test1() {
    vector<ScoredDocument> docs;
    docs.resize(5);
    MakeScoredDoc(&docs[0], -5.0, "http://example.com");
    MakeScoredDoc(&docs[1], 1, "http://example.com");
    MakeScoredDoc(&docs[2], 4, "http://example.com");
    MakeScoredDoc(&docs[3], -99998.7, "http://example.com");
    ...
}
```

---

### But this isn't good enough

---

there are still unimportant details in our face

---

<div class="aligncenter" style={{width: '50%'}}>

#### for instance

* the parameter "http://example.com" is just an eyesore.
  > It's always the same, and the exact URL doesn't even matter - it's just needed to fill out a valid ScoredDocument.
* docs.resize(5) and &docs[0], &docs[1], and so on

</div>

---

### Let's change our helper function to do more work for us and call it AddScoredDoc():

```cpp
void AddScoredDoc(vector<ScoredDocument>& docs, double score) {
    ScoredDocument sd;
    sd.score = score;
    sd.url = "http://example.com";
    docs.push_back(sd);
}
```

<!-- note
ヘルパーにもっと仕事させて
名前も変えちまおう
-->
---

### Using this function, our test code is even more compact:

```cpp
void Test1() {
    vector<ScoredDocument> docs;
    AddScoredDoc(docs, -5.0);
    AddScoredDoc(docs, 1);
    AddScoredDoc(docs, 4);
    AddScoredDoc(docs, -99998.7);
    ...
}
```

<!-- note
いくばくかマシにはなったかな
-->

---

### still doesn't pass the "highly readable and writable" test

<!-- note
とはいえ、まだまだ楽に読み書きできるテストとは言い難い
-->

---

If you wanted to add another test with a new set of scored docs, it would require a lot of copying and pasting.

<!-- note
別の新たなテストデータでテスト作ろうと思ったら、全部コピペするの？
-->

---

So how do we go about improving it further?

---

## Creating the Minimal Test Statement

---

To improve this test code, let's use the technique from Chapter 12, Turning Thoughts into Code.

<!-- note
12章 「コードに思いを込める」を参照
-->

---

### Let's describe what our test is trying to do in plain English:

---

> We have a list of documents whose scores are [-5, 1, 4, -99998.7, 3].
<br />
AfterSortAndFilterDocs(), the remaining documents should have scores of [4, 3, 1], in that order.

---

As you can see, nowhere in that description did we mention a `vector<ScoredDocument>`.

<!-- note
見て分かる通り、vectorについては何も言ってない
-->

---

The array of scores is what's most important here.

<!-- note
スコアの配列が一番重要だろ

次、理想
-->

---

### Ideally, our test code would look something like:

```cpp
CheckScoresBeforeAfter("-5, 1, 4, -99998.7, 3",  "4, 3, 1");
```

<!-- note
理想的にはこれだわな
-->

---

#### We were able to boil the essence of this test down to one line of code!😂

* The essence of most tests boils down to *for this input/situation, expect this behavior/output*.
* In many cases, this goal can be expressed in just one line.
* Makes it very easy to add more test cases.

<!-- note
一行にできたぜ！やった！
珍しいことじゃないけどな
This is not uncommon, though. The essence of most tests boils down to

こういう状況とインプットでこういう振る舞いするってレベルまで落とし込める
しかも一行でいける
テストケースの追加が簡単になる
-->


---

## Implementing Custom "Minilanguages"

---

> Notice that CheckScoresBeforeAfter() takes two string arguments that describe the array of scores.

> In later versions of C++, you can pass in array literals like this:

```cpp
CheckScoresBeforeAfter({-5, 1, 4, -99998.7, 3}, {4, 3, 1});
```

> Because we couldn't do this at the time, we put the scores inside a string, separated by commas.For this approach to work, CheckScoresBeforeAfter() is going to have to parse those string arguments.

> In general, defining a custom minilanguage can be a powerful way to express a lot of information in a small amount of space.Other examples include printf() and regular expression libraries.

> In this case, writing some helper functions to parse a comma-separated list of numbers shouldn't be too hard.

<!-- note
今は配列リテラルを渡せる
当時は書くことができなかっただとかなんとかうだうだ言ってる
独自のミニ言語を実装すると小さいスペースでたくさんのことが表現できるようになりますね
たとえばprintf()関数とか正規表現のライブラリとか
もし、estdio.h の include なしで実装するとしたら悪夢のようだ
カンマで区切られたリストをパースするのはそんなむずくないぜ
-->

---

<!-- classes: reference -->

In general, I thought that mini-language refers to DSL. . .🤔

<!-- note
閑話休題
ミニ言語っていうとDSLじゃね？
ここではヘルパーのこと指してるけど・・・
-->

---

#### Here's what CheckScoresBeforeAfter() would look like:

```cpp
void CheckScoresBeforeAfter(string input, string expected_output) {
    vector<ScoredDocument> docs = ScoredDocsFromString(input);
    SortAndFilterDocs(&docs);
    string output = ScoredDocsToString(docs);
    assert(output == expected_output);
}
```

---

#### And for completeness, here are the helper functions that convert between string and `vector<ScoredDocument>`:

```cpp
vector<ScoredDocument> ScoredDocsFromString(string scores) {
    vector<ScoredDocument> docs;

    replace(scores.begin(), scores.end(), ',', ' ');

    // Populate 'docs' from a string of space-separated scores.
    istringstream stream(scores);
    double score;
    while (stream >> score) {
        AddScoredDoc(docs, score);
    }

    return docs;
}

string ScoredDocsToString(vector<ScoredDocument> docs) {
    ostringstream stream;
    for (int i = 0; i < docs.size(); i++) {
        if (i > 0) stream << ", ";
        stream << docs[i].score;
    }

    return stream.str();
}
```
---

This may seem like a lot of code at first glance, but what it lets you do is incredibly powerful.

<!-- note
一見するとコード量が多いでしょうよ
しかしこいつができるようにしてくれたことは信じられないほどパワフルだと
-->

---

Because you can write an entire test with just one call to CheckScoresBeforeAfter(), you'll be inclined to add more tests (as we'll be doing later in the chapter).

<!-- note
なぜかって言うと、CheckScoresBeforeAfter呼ぶだけで全部テストできちゃうんだぜ
もっとたくさんテスト書きたくなるでしょ？
-->
