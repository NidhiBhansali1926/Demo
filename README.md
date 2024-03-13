## Prerequisites

- Install node 20.10.0
- Install yarn using `npm i -g yarn` (v1.22.19)

## Required version for Android studio, Xcode

- Android studio version : Iguna 2023.2.1
- Xcode version : version 15

## Instructions to run the project

- From the root project folder run `yarn install` to install dependencies
- From the root project folder run `yarn android` to run the Android app, it will create the seperate APk.
- From the root project folder run `yarn ios` to run the ios app

## HUSKY SETUP For Eslint, Prettier and Test

## step-1 (to create husky folder)

-yarn install

## step-2 (create pre commit hook file inside the .husky folder which contain all the command which we want to check before commit)

to make the pre-commit hook executable - chmod +x .husky/pre-commit
