## Overview

In this worshop we will explore the typescript language starting from the ground up and assuming no previous knowledge of the js ecosystem.

We will talk and make practical usage of concepts from practical statically typed functional programming like ADTs and eDSLs to design and structure code that is very easy to test, easy to maintain and quick to extend.

We will on purpose ignore some of the aspects of typescript that are in the language because of the javascript interop and that can be considered harmful like the usage of exceptions or the usage of non-scope binded var, we will talk about those points but we will focus on how to ringfence our app code from library or framework code that may use those patterns.

## Program of Day 1

- Course intro, why TypeScript and what kind of TypeScript.
- Project Setup and Tools, (vscode, typescript, eslint, jest)
- Primitive Types
- Named & Arrow Functions
- Interfaces & Type Aliases
- Algebraic Types: Unions, Intersections and the special cases (Products and Sums)
- Async problem, CPS / Promise / Async - Await
- Structural vs Nominal Type Systems

## Repo Organization

The repository is divided in 3 folders, the `exercises` contains the description of each exercise to be done in the `project` folder, the `solutions` folder will be used to push the solutions for the exercises so you can easily `git pull --rebase` without conflicts and compare to your local.

## Chat and exercises share

Join at: [https://gitter.im/Michael-Arnaldi/workshop-facile](https://gitter.im/Michael-Arnaldi/workshop-facile)
