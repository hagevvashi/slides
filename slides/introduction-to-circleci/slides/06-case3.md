<!-- classes: title -->

## CASE3: Api spec document deployment and checking on the PR

---

### What is OpenAPI?

> OpenAPI Specification (formerly Swagger Specification) is an API description format for REST APIs.

---

### What problems does OpenAPI solve?

* Writing document manually
  * It's hard to write a table by hand
  * It's hard to write sample json by hand
* Inconsistent document format
* Duplicate description

---

### The same idea as storybook deployment

* Merge to master branch triggers story book deployment job to AWS S3
* Push on branch associated with pull request triggers deployment job to artifacts

---

<!-- classes: openapi-deploy -->

### How to visualize document?

Using [Swagger UI](https://swagger.io/tools/swagger-ui/)

<iframe src="https://petstore.swagger.io/?_ga=2.93052829.1075228615.1575361129-2002843474.1575361129"></iframe>

---

### Preparing Swagger UI distribution files

```yml
version: 2.1
executors:
  swagger_ui:
    docker:
      - image: swaggerapi/swagger-ui
jobs:
  prepare_docs:
    steps:
      - run:
          name: prepare openapi docs
          command: |
            sed -i "s|https://petstore.swagger.io/v2/swagger.json|openapi.yml|g" /usr/share/nginx/html/index.html
            mv /usr/share/nginx/html docs
            cp openapi.yml docs
```

---

### &#x26a0; Point to be noted &#x26a0;

If the "Only build pull requests" setting is not enabled,

when the pull request creation timing is late,

the process of commenting on the pull request fails.

---

### If you really want to turn that setting off

<p>You can refer to this article</p>

* [CircleCIのOnly build pull requestsをoffにしてもプルリクエストを作ったらJobを実行したい](https://qiita.com/yasuhiroki/items/bddb3f51bf3439652c0c)
