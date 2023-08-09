Can GitHub Copilot be my AI pair programmer?

## What is it

I have heard a lot of noise recently about [GitHub Copilot](https://github.com/features/copilot) being `your AI  pair programmer`. Being a programmer who loves pairing, I was curious to test this out to see if the fuss was correct.

Following [this course on Udemy](https://www.udemy.com/course/github-copilot/), I managed to use GitHub Copilot to create a simple web app that allows users to input income and expenses for each month, plot it to a bar chart, then download that chart as an image. It took me around 3 hours in total to create this web app.

This repository has all the code and prompts that I used to create the web app.

## How to view the web app

1. Clone this repository
1. Open the [index.html](./index.html) in a browser

## How to setup GitHub Copilot in VS Code

1. Install [VS Code](https://code.visualstudio.com/download). This is an IDE (integrated development environment) which allows you to write code.
1. After installing VS Code, open `Extensions` tab and add [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot). This extension provides autocomplete-style suggestions as you code.
1. Also add [GitHub Copilot Labs](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-labs). This extension is a companion extension to GitHub Copilot that provides more advanced and experimental features in the sidebar of VS Code.

> **_NOTE:_** You need to either create or login to a **GitHub account**. You also need to have a **subscription to GitHub Copilot** in order to use it. In my case, I subscribed to the free trial which, at the time of writing this ReadMe, was for 30 days. Within this period you can cancel any time to avoid charges.

## How to use GitHub Copilot in VS Code

GitHub Copilot is an AI powered coding assistant that offers autocomplete-style suggestions as you code. There are two ways to trigger suggestions:

- By starting to **write the code** you want to use, or
- By **writing a comment** (**_a prompt_**) describing what you want the code to do.

GitHub Copilot analyses the context and comments in the file you are editing, as well as related files, and provides suggestions in the form of a single line of code or even a block of code.
