## Evaluate News Natural Language Processor

### Description
We require `aylien_textapi` and instantiate the `aylienApi` variable and put in it the `application_id` and `application_key` and use **_dotenv_** for security by preventing the exposure of the private `application_id` and `application_key`. Then we access **_sentiment_** in `aylienApi` with the dot operator and use `req.body.url` as the first operator and we take it from **_formhandler.js_** that fetches this `'/sentiment'` path sending the `req.body.url` to it.

The second parameter has error and response, error for error handling and response to be used to access **_polarity_**, **_subjectivity_**, and **_text_** from the **Aylien API**. They are then stored in the **projectData** object we are using as the endpoint. This object is then sent _(by post)_ to the client side, turned into json format with `.json()`, and **_polarity_**, **_subjectivity_**, and **_text_** are accessed through `res` and added to the html file **index.html** by using `innerHTML`, finally displaying the data on-screen in the browser.

Note that we have the **else** used in the **if-else** statement to handle invalid URLs with an **alert** and we have two jest tests one for **formHandler.js** and another for **validateURL.js**. Their names are **formHandler.test.js** and **validateURL.test.js** respectively. They test whether the result is defined or not with the `toBeDefined` method. I used the **.gitignore** file to ignore files that shouldn't be uploaded to github, the **node_modules** and **dist** folders, and the **.env** file as well for security.

I used **Webpack** as a build-tool in this project with both development and production environments.