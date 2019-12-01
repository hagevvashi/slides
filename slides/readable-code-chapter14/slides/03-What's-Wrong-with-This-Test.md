<!-- classes: title -->

## What's Wrong wiht This Test

---

### function declaration:

```cpp
// Sort 'docs' by score (highest first) and remove negative-scored documents.
void SortAndFilterDocs(vector<ScoredDocument>* docs);
```

---

### The test for this function originally looked something like:

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

## 😇

<!-- note
こいつはひどい・・・
-->

---

### There are at least eight different problems with this test code
