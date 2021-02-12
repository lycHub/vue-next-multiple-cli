### 自定义vue3多页脚手架，课程源码

#### usage
```text
npm i vue-next-multiple-cli -g
在任意目录下：
vmc create myProject // 创建一个项目
```

#### 命令参数

##### create
```text
// 基本用法
vmc create myProject

// 选择构建工具： webpack(默认) or gulp
-t, --tool [webpack|gulp]

// 是否自动安装依赖，默认 false
-i, --install

// 如果自动安装依赖，选择包管理工具，npm(默认) or yarn
-pt, --pkg-tool [npm|yarn]
```

##### add

###### add c
新增一个组件
```text
// 基本用法
vmc add c compA // 将生成 src/components/compA.vue

// 也可指定tsx
vmc add c compA --tsx // 将生成 src/components/compA.tsx

// 指定目录
vmc add c a/b/c/compA // 将生成 src/a/b/c/compA.vue

```


###### add d
新增一个指令
```text
// 基本用法
vmc add d direA // 将生成 src/directives/direA.ts

// 指定目录
vmc add d a/b/c/direA // 将生成 src/a/b/c/direA.ts

```


###### add p
新增一个页面
```text
// 基本用法
vmc add p pageA
假设构建工具是webpack，将生成
src/pages/pageA/index.ts
src/pages/pageA/main.tsx
src/pages/pageA/index.html
src/pages/pageA/index.scss
```

##### 其它命令
```text
// 查看版本
vmc -V

// 查看帮助信息
vmc -h

vmc add -h

vmc add c -h
...

```
