# complete_web_development


// To create a branch with having any code related to master

``` git

syntax : git checkout --orphan new-branch-name

example : git checkout --orphan javascript



```

// To push the orphan branch to main

``` git

git checkout main


syntax : git merge orphan-branch-name --allow-unrelated-histories

example : git merge javascript --allow-unrelated-histories

```