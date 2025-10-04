---
layout: default
title: Bulk Prompting Script
parent: "Portfolio"
nav_order: 3
---

# Bulk Prompting for Command Line Interfaces

## GIF
![GIF of Bulk Prompting Script](/portfolio/bulk-prompting-script/assets/july31-readme-gif.gif)
*A bulk prompting script automates the process of creating a cluster with predefined settings, minimizing errors and improving efficiency for users navigating CLI workflows.*

## Problem Description

Navigating in Command Line Interfaces (CLIs) often requires users to either use a series of flags or sequential prompts to complete their configuration, which is time-consuming and inefficient. For example, when creating ROSA Classic Clusters, a user must navigate 30 or more prompts to create a cluster, even when using default and recommended settings. This cumbersome method hampers productivity and the user's experience. There is a pressing need for a more user-friendly and efficient method for executing commands in the CLI environment to streamline setup processes and reduce complexity.

## Solution

My solution not only enhances the current Red Hat ROSA CLI process, but it can also be broadly applied to other CLIs and processes. This innovation introduces a bulk prompting method for CLIs, allowing users to see and provide all required inputs at once rather than sequentially. It improves the user experience by displaying a single interface where users can fill and modify all the necessary/optional details and make changes interactively before executing the configuration. This approach ensures that users can review and adjust their inputs comprehensively, reducing the time and effort needed to complete complex configurations.

## Advantages

- **Interactive bulk input collection:** Users can input/change multiple configurations.
- **Enhanced user experience:** Single interface for input.
- **Easy adjustments:** Ability to go backwards and adjust previous inputs easily.
- **Dynamic configuration:** Implements loop to allow user to select and configure dynamically.
- **Summary review:** Provides a summary of selected options before final execution.
- **Visual feedback:** Enhanced visual feedback by using colors and symbols for better distinction and user feedback.
- **Extensible:** Script allows users to easily add other configuration options.
- **User-friendly:** Designed to cater to both new and experienced users.

## How It Compares to Current Process

- **Interactive configuration:** Allows the user to customize their cluster settings as a whole.
- **Default settings:** Reduces setup time with pre-configured options.
- **Progress indication:** Clear progress indication during creation.
- **Final review:** Review of configuration before finalizing and executing.

## How Did I Get Here?

There is a need to create a user-friendly CLI tool for cluster creation. My focus was on ROSA, aiming to provide users with the ability to see/select multiple options efficiently.

## Installation

To use this CLI tool, clone the repository and follow the setup instructions provided in the repository.

```
git clone https://github.com/JustinXHale/bulkprompting.git
cd bulkprompting
```
# Follow additional setup instructions in the repository
