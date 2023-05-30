# centos
```
1.删除文件
  rm -rf folder-name
  -rf:表示强制递归删除
  folder-name:表示要删除的文件夹名称

2.安装软件包
  yum install -y <package-name>
  -y:表示安装或升级软件包时，自动回答所有询问，即默认选择是"yes"
  package-name:表示要安装软件包名称

3.在Linux系统中，可以使用SSH客户端来连接到远程服务器或者本地计算机
  远程服务器SSH的默认端口号是22==》
  ssh username@server-ip:连接远程服务器
  username:表示要登录的用户名
  server-ip:表示要连接的远程服务器IP地址

  远程服务器SSH的默认端口号不是22==》
  ssh -p 2222 username@server-ip

4.在服务器上安装 lrzsz 工具包
  yum install -y lrzsz
  rz:启动 rz 命令，并选择要上传的文件
```

