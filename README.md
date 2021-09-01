# Mor-lint
Mor 代码风格检查

## eslint
```bash
-命令行

eslint . --ext .js,.ts,.vue --fix
```

`.` 当前目录  
`--ext` 检查的文件扩展名  
`--fix` 自动修改并保存  

官方文档 [Eslint](https://cn.eslint.org/docs/user-guide/command-line-interface)

## stylelint
```bash
-命令行
stylelint . --syntax less --fix --ignore-path ./.stylelintignore | stylelint . --custom-syntax postcss-html --fix
```

