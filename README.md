# LDG 立人建筑中文网站（概念版）

这套静态网站根据用户提供的《立人介绍》PDF整理并设计，整体方向为：**白色、克制、建筑事务所感、大图优先**。首页采用全屏项目图，并通过白色斜切面形成用户要求的“/”切入下一段内容的视觉效果。

## 页面

- `index.html` — 首页
- `about.html` — 关于立人
- `projects.html` — 项目列表，可按类别筛选
- `project.html` — 项目详情模板（通过 URL 参数切换项目）
- `services.html` — 业务范畴
- `contact.html` — 联系

## 图片替换

目前 `assets/images/` 中的图片是从用户提供的PDF页面中裁切出的**临时演示图**，用于让网站下载后即可直接预览。正式上线时建议用LDG原始高清图片替换，文件名保持不变即可无缝替换：

- `hero-feiyan.jpg` — 首页主视觉 / 飞雁台
- `project-asian-games.jpg` — 杭州亚运村城市设计
- `project-ocean-university.jpg` — 深圳海洋大学
- `project-pingyao.jpg` — 平遥国际电影展电影宫
- `project-qinquan.jpg` — 琴泉村广场更新
- `project-voyah.jpg` — 新能源汽车旗舰体验中心
- `project-courtyard.jpg` — 拾叶斋
- `project-chuanshan.jpg` — 湖南船山学院
- `about-map.jpg` — 关于页区域布局视觉

建议正式项目图使用横向 JPG/WebP，尺寸至少 1800px 宽。

## 修改项目文字

项目详情数据集中在：

`assets/js/projects-data.js`

修改项目名称、类别、地点、项目参数、奖项等，只需编辑这个文件。

## 本地预览

直接双击 `index.html` 即可浏览；若需要模拟正式网站，可在此文件夹中运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 重要说明

- 企业数据、资质、发展节点、项目参数与奖项均按所附企业资料整理。
- PDF主要内容为30周年时期资料，正式发布前建议由LDG核对最新的员工数、项目数、资质、项目进度、联系方式和获奖信息。
- 所附资料未提供可核验的邮箱与电话，因此概念站没有虚构这些信息。
