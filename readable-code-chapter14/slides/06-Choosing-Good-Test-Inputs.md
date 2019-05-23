<!-- classes: title -->

## Choosing Good Test Inputs

---

There's an art to choosing good input values for your tests.

---

The ones we have right now seem a bit haphazard:

```cpp
CheckScoresBeforeAfter("-5, 1, 4, -99998.7, 3",  "4, 3, 1");
```

---

How do we choose good input values?🤔

---

Good inputs should thoroughly test the code.

---

But they should also be simple so that they're easy to read.

---

## KEY IDEA

*In general, you should pick the simplest set of inputs that completely exercise the code.*

---

For example, suppose we had just written:

```cpp
CheckScoresBeforeAfter("1, 2, 3", "3, 2, 1");
```

---

Although this test is simple, it doesn't test the "filter negative scores" behavior of SortAndFilterDocs().

---

If there were a bug in that part of the code, this input wouldn't trigger it.

---

On the other extreme, suppose we wrote our test like this:

```cpp
CheckScoresBeforeAfter("123014, -1082342, 823423, 234205, -235235",
                       "823423, 234205, 123014");
```

These values are needlessly complex. (And they don't even test the code thoroughly.)

---

## Simplifying the Input Values

---

So what can we do to improve these input values?

```cpp
CheckScoresBeforeAfter("-5, 1, 4, -99998.7, 3",  "4, 3, 1");
```

---

### the very "loud" value

---

> -99998.7

---

That value was just meant to be "any negative number,"

---

### so a simpler value is just

---

> -1

---

(If -99998.7 was meant to be "a very negative number," a better value would have been something crisp like -1e100.)

<!-- note
10の100乗
-->

---

## KEY IDEA

*Prefer clean and simple test values that still get the job done.*

---

* The other values in our test aren't too bad, but while we're here, we can reduce them to the simplest integers possible.
* Also, only one negative value is needed to test that negative values are removed.

<!-- note
その他の値はもっと単純にできるね
マイナスをテストするのは一つだけあればいいね
-->

---

Here's a new version of our test:

```cpp
CheckScoresBeforeAfter("1, 2, -1, 3", "3, 2, 1");
```

---

We've simplified the test values without making them any less effective.

---
<!-- classes: reference -->

> thoroughly test

---
<!-- classes: reference -->

### What are the 7 principles of testing?

<br />

> 2) Exhaustive testing is impossible: Testing everything including all combinations of inputs and preconditions is not possible. So, instead of doing the exhaustive testing we can use risks and priorities to focus testing efforts. For example: In an application in one screen there are 15 input fields, each having 5 possible values, then to test all the valid combinations you would need 30  517  578  125  (515) tests. This is very unlikely that the project timescales would allow for this number of tests. So, accessing and managing risk is one of the most important activities and reason for testing in any project.


<br />

* http://tryqa.com/what-are-the-principles-of-testing/

---
<!-- classes: reference -->

### technique of Black Box testing

<br />

* Equivalence partitioning
* Boundary Value Analysis

---

## LARGE "SMASHER" TESTS

---
<!-- classes: reference -->

### Non-functional testing includes:

<br />

* Reliability testing
* Usability testing
* Efficiency testing
* Maintainability testing
* Portability testing
* Baseline testing
* Compliance testing
* Documentation testing
* Endurance testing
* Load testing
* Performance testing
* Compatibility testing
* Security testing
* Scalability testing
* Volume testing
* Stress testing
* Recovery testing
* Internationalization testing and Localization testing

---

## Multiple Tests of Functionality

---

<div style="display: flex;width: fit-content; margin: 0 auto;">
  <div>
    <h4>to construct a single "perfect" input</h4>
    <p>to thoroughly exercise your code</p>
  </div>
  <div style="display: flex;flex-direction: column;justify-content: center;margin: 0 20px;"><p><</p></div>
  <div>
    <h4>to write multiple smaller tests</h4>
    <p>it's often easier, more effective, and more readable</p>
  </div>
</div>



---

Each test should push your code in a certain direction, trying to find a particular bug.

---

For example, here are four tests for SortAndFilterDocs():

```cpp
CheckScoresBeforeAfter("2, 1, 3", "3, 2, 1");    // Basic sorting
CheckScoresBeforeAfter("0, -0.1, -10", "0");     // All values < 0 removed
CheckScoresBeforeAfter("1, -2, 1, -2", "1, 1");  // Duplicates not a problem
CheckScoresBeforeAfter("", "");                  // Empty input OK
```

---

There are even more tests you could write if you wanted to be extremely thorough.

---

Having separate test cases also makes it easier for the next person working on the code.

---

If someone accidentally introduces a bug, the test failure will pinpoint the specific test that failed.
