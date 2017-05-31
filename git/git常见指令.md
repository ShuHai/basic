在本地开始一个新项目的时候  git init(若想删除则rm -rf .git)

想下载远程库开始一个新项目的时候  git clone(想删除git remote rm )

查看远程库  git remote -v

整个提交上传过程： git add  git commit git push

添加全部文件  git add -A / git add *

commit格式 git commit -m "content"

获取 git pull

创建并且切换分支 git checkout -b branch

删除分支  git branch -d branch

查看分支  git branch

合并分支 首先git checkout 到主分支，然后git merge branch

快捷键co = checkout br = branch ci = commit st = status 通过修改gitconfig的alias实现

变基操作 git rebase
回滚好帮手 git revert,git reset
查看commit git log
存储add git stash
查看stash 列表 git stash list