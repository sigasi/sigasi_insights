---
title: "Contribute to Sigasi insights"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2016-05-30
lastmod: 2019-07-17
comments: true
bannerad: true
---


The sources of the Sigasi Insights portal are hosted on Github. So if you find a typo or an error, you can fix this yourself. GitHub also makes it easy to make bigger contributes such as a guest blog.

Small fixes can be made on the website of GitHub, without installing extra tools.  
For bigger changes, it is better to build the website on your own machine first, and creating a *pull request* later.

# Fixing a typo, directly on GitHub

* Log in into [GitHub](https://github.com)
* Fork the [Sigasi Insights repository](https://github.com/sigasi/sigasi_insights)
* Browse to the file you want to edit and click the edit button
  ![](/img/tech/insights_github_edit.png)
* At the bottom of the screen:
    * Add a commit message
    * Select the *"Create a new branch for this commit and start a pull request" option*.
    * Click the **Commit Changes** button.
      ![](/img/tech/insights_github_patch.png)
* Next add a message to your pull request and click **Create pull request**  
  ![](/img/tech/insights_github_patch_1.png)  
  By sending a pull request, you give all rights of your change to Sigasi ([Copyright info](/license))

<!--  ![](/img/tech/insights_github_patch_2.png) -->

# Bigger changes: clone Insights and preview your changes offline.

## Install Hugo
Sigasi Insights uses [Hugo](https://gohugo.io/) which is a static site generator that can be installed om most systems following [these instructions](https://gohugo.io/getting-started/installing/).


## Clone the sources and create Pull Request

* Clone the Insights repository, as explained [here](#fixing-a-typo-directly-on-github). 
* Add your content (e.g. a guest blog in the `/opinion/` folder). ([Authoring information](https://github.com/sigasi/sigasi_insights/blob/master/README.markdown))  
  With Hugo, you can easly create a new content page by typing `hugo new opinion/my-contribution.md`.  
  Your MarkDown file must have following header, most of which will be generated for you by the `hugo new` command.  
```
---
title: "Your Sigasi guest blog contribution"
pager: true
author: Your Name
date: Publishing date
license: CC BY-ND 4.0
comments: true
bannerad: true
---
```  
  If you omit the license field, you give all rights to Sigasi.

* Run the site locally with:
  ```
  hugo server
  ```  
* Preview the result at <http://localhost:1313/>
* Commit and push your changes
* [Create a pull request](https://github.com)
