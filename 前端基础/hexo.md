$ hexo server 开服务器
$ hexo generate 编译
$ hexo deploy 发布

next主题tag页404
$ hexo new page tags之后在生成的tags/index.md中加入一行type: "tags"
eg
---
title: tags
type: "tags"
date: 2017-01-13 19:50:48
---
然后执行以下步骤
1.删除 db.json
2.hexo clean
3.hexo g
