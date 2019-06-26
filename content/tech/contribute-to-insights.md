---
title: "Contribute to Sigasi insights"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2016-05-30
comments: true
bannerad: true
---


The sources of the Sigasi Insights portal are hosted on Github. So if you find a typo or an error, you can fix this yourself. GitHub also makes it easy to make bigger contributes such as a guest blog.

Small fixes can be made on the website of GitHub, without installing extra tools.  
For bigger changes, it is better to build the website on your own machine first, and creating a *pull request* later.

## Fixing a typo, directly on GitHub

* Log in into [GitHub](https://github.com)
* [Fork the Sigasi Insights repository](https://github.com/sigasi/sigasi_insights#fork-destination-box)
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

## Bigger changes: clone Insights and preview your changes offline.

### Install Python and Urubu
Sigasi uses [Urubu](/opinion/urubu) as CMS system for the Insights website. Urubu is built with Python, So you need to have Python installed first.
Next, Urubu can be installed with pip:

```
pip install urubu
```
If pip is not yet available on your system, follow the [pip installation instructions](http://www.pip-installer.org/en/latest/installing.html).


### Clone the sources and create Pull Request

* Clone the Insights repository, as explained [here](#fixing-a-typo-directly-on-github). 
* Add your content (e.g. a guest blog in the `/opinion/` folder). ([Authoring information](https://github.com/sigasi/sigasi_insights/blob/master/README.markdown))  
  Your MarkDown file must have following header:  
```
---
title: "Your Sigasi guest blog contribution"
layout: page 
pager: true
author: Your Name
date: Publishing date
license: CC BY-ND 4.0
comments: true
bannerad: true
---

```  
  If you omit the license field, you give all rights to Sigasi.

* Generate the html sources:
  ```
  make build
  ```
* Run the site locally with:
  ```
  make serve
  ```  
  (run `make stop` to stop the local server)
* Preview the result at <http://localhost:8000/>
* Commit and push your changes
* [Create a pull request](https://github.com)
