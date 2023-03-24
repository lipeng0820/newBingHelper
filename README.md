## Hi！这是我的第一个浏览器插件——newBing小助手

很荣幸的介绍，这是我跟GPT-4模型共同完成的第二个作品，也是第一个插件作品。GPT-4是幕后“写手”，我只是代码的搬运工和裁缝，掌声送给GPT👏！

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8536ddc-9629-4ef7-a49a-8c21459dd842/Untitled.png)

下载地址：[https://github.com/lipeng0820/newBingHelper/releases/download/master/newBingHelper.zip](https://github.com/lipeng0820/newBingHelper/releases/download/master/newBingHelper.zip)

### 安装方法

1、点击上面的地址下载到本地

2、解压缩 newBingHelper.zip 文件

3、打开Edge浏览器（newBing不支持 Chrome，除非你有其他插件解决这个问题）

4、点击右上角“···”选择”扩展“

![截屏2023-03-25 00.28.13.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db7ae539-6517-4675-8b61-6e327d811f8f/%E6%88%AA%E5%B1%8F2023-03-25_00.28.13.png)

5、选择“管理扩展”

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4507ebe7-ca5c-4398-88d4-e942439af9b0/Untitled.png)

6、打开左侧“扩展”中的“开发人员模式”

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6883551b-6026-4ed4-9383-7a9e1c0afc8a/Untitled.png)

7、选择“加载解压缩的扩展”

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15495f7f-2b97-4514-80cd-ec3441703529/Untitled.png)

8、选择刚刚解压缩的newBingHelper文件夹

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9e19ed3-28f1-4492-8acf-7fc09485a770/Untitled.png)

9、然后就可以在“扩展”菜单中，看到了newBing小助手了，点击后面的「小眼睛」可以把扩展放在菜单栏中。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64d23956-55d7-40c9-9449-1ddb27dd0852/Untitled.png)

### 使用方法

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6c1b27a-2bef-442e-bcf3-4b6a0e7ad6d8/Untitled.png)

插件非常简单，其实没有什么可说明的，但是讲一下这个软件都做了什么吧。

1、「Hi！newBing 小助手」按钮

点击这个按钮，会默认调用我提前配置好的原本Bing菜单中设置“国家与地区”（美国）和设置“显示语言（简体中文）”的两个URL地址，然后执行第三个地址，跳转到www.bing.com/new

2、「更新Bing设置信息」按钮

防止未来对应的地区选择和语言选择地址会变，点击这个按钮会去跟去对应的ID序列去抓新的URL地址，如果ID也会变…那就只能等失效了再来我的Github看看了。

语言默认是中文，看不懂中文可以去 newBingHelper文件夹里找到popup.js文件。末尾处我给大家留了几个常用语言选项，将5026.1改为对应的数字即可。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21dc0ef6-91e7-4ea7-a44f-abfcf9518d3d/Untitled.png)

3、「清理Cookies（非必要不使用）」

非必要不使用！非必要不使用！非必要不使用！重要的事情说八百遍！

只有反复尝试、持续几分钟、确认也开了代理，还是™无效的时候，再来试试这里。它清理的只是*.bing.com对应的Cookies

### 听我说

这个软件实测下来偶尔也有反应迟钝和小失灵的时候，一般上来可以先「更新Bing设置信息」然后去点「Hi newBing小助手」，通常使用一次能管很长一段时间，只要你不在手机和电脑端频繁切换通常用不到小助手。猜测是不是Edge移动端会把定位地址发给微软，然后自动改你的地址。

微软的求生欲👍👍👍

有问题留言我，我们一起改进。
