<template>
  <div class="article-container">
    <div class="content-wrapper">
      <article class="post" itemscope itemtype="http://schema.org/Article">
        <div class="post-header">
          <span class="post-title">VPS+SSR+锐速（BBR魔改版）实现超级加速</span>
          <div class="post-meta">
            <span class="publish">
              <span class="icon">
                <i class="iconfont icon-rili"></i>
              </span>
              <span class="time">发表于 2017-11-07 00:00:00</span>
            </span>
            <span class="category">
              <span class="divider">|</span>
              <span class="icon">
                <i class="iconfont icon-fenlei"></i>
              </span>
              <span>分类于</span>
              <router-link :to="'/category?='+'jishu'">技术文档</router-link>
            </span>
            <div class="tags">
              <router-link :to="'/tag/'+ item" v-for="(item,index) in tags" :key="index">{{item}}</router-link>
            </div>
          </div>
        </div>
        <div class="post-body">
          <div v-html="value"></div>
        </div>
      </article>
    </div>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import sidebar from './components/sidebar';

  export default {
    name: "articleComponent",
    data() {
      return {
        editType: "preview",
        tags: ['Vue', 'SSR', 'Java'],
        value: "<p>谷歌2016年出了一个基于Linux内核的 BBR 拥塞控制算法，虽然咱不懂咋回事，还是大概知道它也是通过优化 TCP 底层协议来实现网速加速，跟锐速的原理一样。我是通过搬瓦工的 KiwiVM 后台安装的，用了之后感觉不咋地，网上查了一下，大部分网友都说锐速的加速效果要好于BBR。锐速已经停止新用户注册和维护了，之前虽然收费，但是现在已经有破解版。BBR不好用，有大神就开始魔改了，出了一个魔改版的BBR，据说效果比锐速还好！<br/>下文对于锐速和BBR魔改版安装都有介绍，你可以尝试一下，看哪个速度更快。<br/>下文的环境基于：CentOS6 X64</p>\n" +
          "\n" +
          "<h1>1、准备 VPS</h1>\n" +
          "\n" +
          "<p><a href=\"https://bwh1.net/aff.php?aff=10505\">搬瓦工VPS</a>是我目前使用过性价比较高的 VPS，速度也比较稳定。<br/><a href=\"https://www.vultr.com/?ref=7260141\">Vultr</a> 也是一个比较不错的选择，不过没有搬瓦工稳定。当然其他海外的VPS也都是可以的，至于选哪个这个就根据个人喜好来选择吧。<br/><strong>如何购买比较稳定的 VPS 可以参考我之前写的<a href=\"https://www.gaoshilei.com/2016/05/19/VPS/\">VPS搭建高速SS服务器</a></strong>   </p>\n" +
          "\n" +
          "<p>&lt;!-- more --&gt;</p>\n" +
          "\n" +
          "<p>由于天朝的网络环境，之前的 SS 虽然营运商破解不了协议，但是通过流量监测和干扰的方式会严重影响我们的访问网络，最明显的特征就是响应慢，网络卡。所以 SS 现在已经有很大的局限性了，SSR + 加速 应该是我们最好的选择。下文会介绍如何加速，如何安装 SSR 服务。   </p>\n" +
          "\n" +
          "<p>或许有的同学会问 SS 和 SSR 有什么区别？<br/>答：SSR 只是在 SS 的基础上增加了一些新的协议和混淆功能，抗检测和干扰能力更强，简单点说如果你所在的地区没有运营商干扰你访问墙外网站，那么是没有区别的，如果你所在地区的国际出口宽带流量被检测和干扰的很严重，SSR 这个时候优势就体现出来了。不过就目前的形势来看，SS 被干扰已经是很普遍的情况了，个人建议安装 SSR，然后设置好协议和混淆，干扰不严重可以不用混淆，后面会有介绍。  </p>\n" +
          "\n" +
          "<p>你购买或者配置VPS过程中遇到什么问题，可以通过邮箱 goslei1315@gmail.com 联系我，工作日一般2个小时之内回复，询问之前请描述清楚你遇到的问题。</p>\n" +
          "\n" +
          "<p><strong>注意：购买 VPS 要选择 KVM 虚拟的，不要选择 OpenVZ 虚拟，后面你就会知道原因。</strong>  </p>\n" +
          "\n" +
          "<p>转载请注明出处：<a href=\"http://www.gaoshilei.com\">来自LeonLei的博客http://www.gaoshilei.com</a>   </p>\n" +
          "\n" +
          "<h1>2、安装锐速破解版</h1>\n" +
          "\n" +
          "<h2>1、执行脚本安装</h2>\n" +
          "\n" +
          "<p>首先介绍一下锐速是干嘛的，下面的介绍来自Google</p>\n" +
          "\n" +
          "<blockquote><p>锐速serverspeeder是一款TCP网络加速软件，能在Linux系统和Windows系统的服务器中安装，安装后能启到提高网络连接稳定性、带宽利用率、低访问失败率等作用，从而提高服务器网络访问速度。锐速并非实际增大服务器带宽，只是提高网络的稳定性和利用率而已。一个明显变化就是在同一VPS安装科学上网工具观看YouTube，没安装锐速前观看YouTube 720P视频非常不流畅，经常会出现缓冲现象；而安装锐速后能流畅观看YouTube 720P视频。  </p></blockquote>\n" +
          "\n" +
          "<p>由于锐速只支持 KVM 虚拟化的主机，OpenVZ 主机无法使用，购买时请注意分辨。   </p>\n" +
          "\n" +
          "<p>先把一键安装的脚本下载下来：  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# wget -N --no-check-certificate https://raw.githubusercontent.com/wn789/serverspeeder/master/serverspeeder.sh\n" +
          "</code></p>\n" +
          "\n" +
          "<p>如果报错 wget 命令找不到，需要安装  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# yum -y install wget\n" +
          "</code></p>\n" +
          "\n" +
          "<p>脚本下载完成之后赋权执行：  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# chmod +x serverspeeder.sh\n" +
          "[root@California_VPS ~]# bash serverspeeder.sh\n" +
          "</code></p>\n" +
          "\n" +
          "<p>如果看到下面这个，证明当前 VPS 系统内核不支持  </p>\n" +
          "\n" +
          "<blockquote><p>This kernel is not supported. Trying fuzzy matching...\n" +
          "Serverspeeder is not supported on this kernel! View all supported systems and kernels here: https://www.91yun.org/serverspeeder91yun  </p></blockquote>\n" +
          "\n" +
          "<p>需要手动修改内核，或者重新安装系统， 由于我的系统内核不支持，所以要手动修改。 如果很不幸你看到了上面的报错，请直接跳到<code>2、手动修改内核</code>，如果你没有看到上面内容，而是看到了   </p>\n" +
          "\n" +
          "<p><code></code>`\n" +
          "[Running Status]\n" +
          "ServerSpeeder is running!\n" +
          "version              3.10.61.0</p>\n" +
          "\n" +
          "<p>[License Information]\n" +
          "License              B4C10AE5B485C0CE (valid on current device)\n" +
          "MaxSession           unlimited\n" +
          "MaxTcpAccSession     unlimited\n" +
          "MaxBandwidth(kbps)   unlimited\n" +
          "ExpireDate           2034-12-31</p>\n" +
          "\n" +
          "<p>[Connection Information]\n" +
          "TotalFlow            1\n" +
          "NumOfTcpFlows        1\n" +
          "TotalAccTcpFlow      0\n" +
          "TotalActiveTcpFlow   0</p>\n" +
          "\n" +
          "<p>[Running Configuration]\n" +
          "accif                eth0     <br/>acc                  1\n" +
          "advacc               1\n" +
          "advinacc             1\n" +
          "wankbps              10000000\n" +
          "waninkbps            10000000\n" +
          "csvmode              0\n" +
          "subnetAcc            0\n" +
          "maxmode              1\n" +
          "pcapEnable           0\n" +
          "<code></code>`</p>\n" +
          "\n" +
          "<p>恭喜你，锐速已经安装完成。  </p>\n" +
          "\n" +
          "<p>锐速常用的命令  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "service serverSpeeder start #启动\n" +
          "service serverSpeeder stop #停止\n" +
          "service serverSpeeder reload #重新加载配置\n" +
          "service serverSpeeder restart #重启\n" +
          "service serverSpeeder status #状态\n" +
          "service serverSpeeder stats #统计\n" +
          "service serverSpeeder renewLic #更新许可文件\n" +
          "service serverSpeeder update #更新\n" +
          "chattr -i /serverspeeder/etc/apx* &amp;&amp; /serverspeeder/bin/serverSpeeder.sh uninstall -f #卸载\n" +
          "</code></p>\n" +
          "\n" +
          "<h2>2、手动修改内核（非必须）</h2>\n" +
          "\n" +
          "<p>注意在搬瓦工的后台面板（KiwiVM）查看你现在的系统类型，如后面带有 bbr 字样的，需要重新安装不带 bbr 的，否则你将无法成功修改内核 <br/><img alt=\"\" src=\"http://www.leonlei.top/newOSForSSR.png\"/></p>\n" +
          "\n" +
          "<p>查看当前的系统内核版本：  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# uname -r\n" +
          "2.6.32-642.el6.x86_64\n" +
          "</code></p>\n" +
          "\n" +
          "<p>锐速支持的 CentOS6 内核版本为 2.6.32-504.3.3.el6.x86_64，下面就要开始修改内核了，准备好内核文件执行安装：  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# rpm -ivh http://xz.wn789.com/CentOSkernel/kernel-firmware-2.6.32-504.3.3.el6.noarch.rpm\n" +
          "[root@California_VPS ~]# rpm -ivh http://xz.wn789.com/CentOSkernel/kernel-2.6.32-504.3.3.el6.x86_64.rpm --force\n" +
          "</code></p>\n" +
          "\n" +
          "<p>可能要等个几分钟，全部完成之后查看是否安装成功：  </p>\n" +
          "\n" +
          "<p><code></code>`\n" +
          "[root@California_VPS ~]# rpm -qa | grep kernel</p>\n" +
          "\n" +
          "<p>kernel-firmware-2.6.32-642.el6.noarch\n" +
          "dracut-kernel-004-409.el6.noarch\n" +
          "kernel-2.6.32-504.3.3.el6.x86<em>64\n" +
          "kernel-2.6.32-642.el6.x86</em>64\n" +
          "<code></code>`</p>\n" +
          "\n" +
          "<p>执行 <code>pm -qa | grep kernel</code> 命令之后可以看到锐速支持的 kernel-2.6.32-504.3.3.el6.x86_64 内核已经安装完成。最后一步，确认内核已经被替换。<br/>重启 VPS，然后查看当前的系统内核  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# uname -r\n" +
          "2.6.32-504.3.3.el6.x86_64\n" +
          "</code></p>\n" +
          "\n" +
          "<p>内核已经成功被替换成锐速支持的内核，可以继续第一步的安装工作了。  </p>\n" +
          "\n" +
          "<h1>3、安装 BBR 魔改版</h1>\n" +
          "\n" +
          "<p><strong>注意：因为内核问题 BBR 与速锐只能二选一。</strong>  </p>\n" +
          "\n" +
          "<p>安装魔改版BBR最好选择Debian/Ubuntu系统，因为这两个系统大佬制作了一键安装脚本，而且已经将库编译好了，如果用CentOS需要自己安装gcc4.9+，编译要很长时间，不建议在CentOS安装。下文的介绍主要还是在CentOS环境中操作，Debian/Ubuntu 有一键脚本非常傻瓜，下文也会有介绍。  </p>\n" +
          "\n" +
          "<p>BBR 也只支持 KVM 虚拟化的主机 ，所以选主机一定要选 KVM 虚拟化的。  </p>\n" +
          "\n" +
          "<h2>CentOS</h2>\n" +
          "\n" +
          "<h3>1、升级内核</h3>\n" +
          "\n" +
          "<p>安装魔改BBR的系统要求是4.10以上版本的kernel及对应的linux-header，gcc版本应在4.9以上，如果对应的内核版本链接失效了，可以去<code>http://elrepo.org</code>上找镜像网站，镜像网站里面有归档，可以找到对应4.12版本的内核，<code>http://www.jules.fm/elrepo/archive/</code>就是其中一个镜像网站。<strong>BBR魔改版只能支持到4.12版本的内核，之前用4.13内核失败了</strong>   </p>\n" +
          "\n" +
          "<p>依次执行下面的命令  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\n" +
          "[root@California_VPS ~]# yum install -y http://www.jules.fm/elrepo/archive/kernel/el6/x86_64/RPMS/kernel-ml-4.12.10-1.el6.elrepo.x86_64.rpm\n" +
          "[root@California_VPS ~]# yum remove -y kernel-headers\n" +
          "[root@California_VPS ~]# yum install -y http://www.jules.fm/elrepo/archive/kernel/el6/x86_64/RPMS/kernel-ml-headers-4.12.10-1.el6.elrepo.x86_64.rpm\n" +
          "[root@California_VPS ~]# yum install -y http://www.jules.fm/elrepo/archive/kernel/el6/x86_64/RPMS/kernel-ml-devel-4.12.10-1.el6.elrepo.x86_64.rpm\n" +
          "</code></p>\n" +
          "\n" +
          "<h3>2、修改启动引导</h3>\n" +
          "\n" +
          "<p>执行完成之后，修改启动引导，修改配置文件：  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# vim /etc/grub.conf\n" +
          "</code></p>\n" +
          "\n" +
          "<p>可以看到启动项的配置文件，我们刚才添加的内核在第一个，所以要修改默认的启动内核  </p>\n" +
          "\n" +
          "<p><code></code>`\n" +
          " grub.conf generated by anaconda</p>\n" +
          "\n" +
          "<h1></h1>\n" +
          "\n" +
          "<h1>Note that you do not have to rerun grub after making changes to this file</h1>\n" +
          "\n" +
          "<h1>NOTICE:  You have a /boot partition.  This means that</h1>\n" +
          "\n" +
          "<h1>all kernel and initrd paths are relative to /boot/, eg.</h1>\n" +
          "\n" +
          "<h1>root (hd0,0)</h1>\n" +
          "\n" +
          "<h1>kernel /vmlinuz-version ro root=/dev/sda2</h1>\n" +
          "\n" +
          "<h1>initrd /initrd-[generic-]version.img</h1>\n" +
          "\n" +
          "<h1>boot=/dev/sda</h1>\n" +
          "\n" +
          "<p>default=0\n" +
          "timeout=5\n" +
          "splashimage=(hd0,0)/grub/splash.xpm.gz\n" +
          "hiddenmenu\n" +
          "title CentOS (4.12.10-1.el6.elrepo.x86<em>64)\n" +
          "        root (hd0,0)\n" +
          "        kernel /vmlinuz-4.12.10-1.el6.elrepo.x86</em>64 ro root=UUID=971ffe7e-0c71-40c1-97a9-bdb6b167d4b7 rd<em>NO</em>LUKS rd<em>NO</em>LVM LANG=en<em>US.UTF-8 rd</em>NO<em>MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd</em>NO<em>DM consoleblank=0 vga=0x305\n" +
          "        initrd /initramfs-4.12.10-1.el6.elrepo.x86</em>64.img\n" +
          "title CentOS (4.13.10-1.el6.elrepo.x86<em>64)\n" +
          "        root (hd0,0)\n" +
          "        kernel /vmlinuz-4.13.10-1.el6.elrepo.x86</em>64 ro root=UUID=971ffe7e-0c71-40c1-97a9-bdb6b167d4b7 rd<em>NO</em>LUKS rd<em>NO</em>LVM LANG=en<em>US.UTF-8 rd</em>NO<em>MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd</em>NO<em>DM consoleblank=0 vga=0x305\n" +
          "        initrd /initramfs-4.13.10-1.el6.elrepo.x86</em>64.img\n" +
          "title CentOS (2.6.32-642.el6.x86<em>64)\n" +
          "        root (hd0,0)\n" +
          "        kernel /vmlinuz-2.6.32-642.el6.x86</em>64 ro root=UUID=971ffe7e-0c71-40c1-97a9-bdb6b167d4b7 rd<em>NO</em>LUKS rd<em>NO</em>LVM LANG=en<em>US.UTF-8 rd</em>NO<em>MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd</em>NO<em>DM consoleblank=0 vga=0x305\n" +
          "        initrd /initramfs-2.6.32-642.el6.x86</em>64.img\n" +
          "title CentOS 6 (2.6.32-642.el6.x86<em>64)\n" +
          "        root (hd0,0)\n" +
          "        kernel /vmlinuz-2.6.32-642.el6.x86</em>64 ro root=UUID=971ffe7e-0c71-40c1-97a9-bdb6b167d4b7 rd<em>NO</em>LUKS rd<em>NO</em>LVM LANG=en<em>US.UTF-8 rd</em>NO<em>MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd</em>NO<em>DM consoleblank=0 vga=0x305\n" +
          "        initrd /initramfs-2.6.32-642.el6.x86</em>64.img</p>\n" +
          "\n" +
          "<p><code></code>`</p>\n" +
          "\n" +
          "<p>修改 default=0 保存，重启服务器，然后查看内核是否修改成功  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# uname -r\n" +
          "4.12.10-1.el6.elrepo.x86_64\n" +
          "</code></p>\n" +
          "\n" +
          "<p>如果显示是刚才我们安装的内核证明已经修改成功，如果还是旧的内核，需要重新安装。</p>\n" +
          "\n" +
          "<h3>3、编译安装</h3>\n" +
          "\n" +
          "<p>先安装基础版本的 gcc 和 gcc++</p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# yum install gcc gcc++\n" +
          "</code></p>\n" +
          "\n" +
          "<p>Linux 默认安装的 gcc 版本是4.4.7，而编译魔改 BBR 的 gcc 版本至少要 4.9，所以要手动升级 gcc  </p>\n" +
          "\n" +
          "<h4>1、升级 gcc 版本</h4>\n" +
          "\n" +
          "<p>因为需要4.9以上的gcc版本，所以我们升级gcc版本到4.9.4，有人要问为什么不升级到最新版，我的原则是够用就行，你也可以到<code>http://ftp.gnu.org/gnu</code>查找最新版然后升级下载对应的包就可以了。  </p>\n" +
          "\n" +
          "<h5>1、 下载安装包：</h5>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# wget http://ftp.gnu.org/gnu/gcc/gcc-4.9.4/gcc-4.9.4.tar.bz2\n" +
          "</code></p>\n" +
          "\n" +
          "<p>然后解压：</p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# tar -jxvf gcc-4.9.4.tar.bz2\n" +
          "</code></p>\n" +
          "\n" +
          "<p>解压主要消耗CPU性能，搬瓦工的低配VPS都是单核的，这个包将近90MB，所以要比较久大概等个十分钟左右就好了。  </p>\n" +
          "\n" +
          "<h5>2、下载供编译需求的依赖库</h5>\n" +
          "\n" +
          "<p>下载、配置安装依赖库，解压好的文件里面有安装脚本，依次执行下面的命令   </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# cd gcc-4.9.4\n" +
          "[root@California_VPS gcc-4.9.4]# ./contrib/download_prerequisites\n" +
          "</code></p>\n" +
          "\n" +
          "<h5>3、新建目录供编译存放文件</h5>\n" +
          "\n" +
          "<p>首先新建一个文件夹用来存放编译的文件  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS gcc-4.9.4]# mkdir gcc-build-4.9.4  \n" +
          "[root@California_VPS gcc-4.9.4]# cd gcc-build-4.9.4/\n" +
          "</code></p>\n" +
          "\n" +
          "<h5>4、生成 Makefile 文件</h5>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS gcc-build-4.9.4]# ../configure -enable-checking=release -enable-languages=c,c++ -disable-multilib\n" +
          "</code></p>\n" +
          "\n" +
          "<h5>5、编译gcc</h5>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS gcc-build-4.9.4]# make\n" +
          "</code></p>\n" +
          "\n" +
          "<p>这一步时间比较长，大概需要一个多小时（取决于你的CPU性能）。不要重复编译，因为编译期间CPU的使用率基本上都是100%，因为之前装错了内核，后面又编译了一次，于是我在KiwiVM后台看到了这样的提示<br/><img alt=\"\" src=\"http://www.leonlei.top/KiwiVM_CPU_warning.jpg\"/>   <br/>CPU长时间处于满负荷状态，把我的CPU时钟限制了。  <br/><img alt=\"\" src=\"http://www.leonlei.top/CPU_clock_limit.png\"/> <br/>所以 CentOS 安装 BBR魔改还是要谨慎啊，gcc4.9 编译太费CPU了。</p>\n" +
          "\n" +
          "<h5>6、安装gcc</h5>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS gcc-build-4.9.4]# make install\n" +
          "</code></p>\n" +
          "\n" +
          "<p>安装完成之后重启服务器，然后查看gcc版本号  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# gcc -v\n" +
          "使用内建 specs。\n" +
          "COLLECT_GCC=gcc\n" +
          "COLLECT_LTO_WRAPPER=/usr/local/libexec/gcc/x86_64-unknown-linux-gnu/4.9.4/lto-wrapper\n" +
          "目标：x86_64-unknown-linux-gnu\n" +
          "配置为：../configure -enable-checking=release -enable-languages=c,c++ -disable-multilib\n" +
          "线程模型：posix\n" +
          "gcc 版本 4.9.4 (GCC)\n" +
          "</code></p>\n" +
          "\n" +
          "<p>升级成功，下面开始正式编译BBR。</p>\n" +
          "\n" +
          "<h4>2、编译安装 BBR</h4>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# wget -O ./tcp_tsunami.c https://gist.github.com/anonymous/ba338038e799eafbba173215153a7f3a/raw/55ff1e45c97b46f12261e07ca07633a9922ad55d/tcp_tsunami.c\n" +
          "[root@California_VPS ~]# echo &quot;obj-m:=tcp_tsunami.o&quot; &gt; Makefile\n" +
          "[root@California_VPS ~]# make -C /lib/modules/$(uname -r)/build M=`pwd` modules CC=/usr/bin/gcc\n" +
          "[root@California_VPS ~]# chmod +x ./tcp_tsunami.ko\n" +
          "[root@California_VPS ~]# cp -rf ./tcp_tsunami.ko /lib/modules/$(uname -r)/kernel/net/ipv4\n" +
          "[root@California_VPS ~]# insmod tcp_tsunami.ko\n" +
          "[root@California_VPS ~]# depmod -a\n" +
          "[root@California_VPS ~]# echo &quot;net.core.default_qdisc=fq&quot; &gt;&gt; /etc/sysctl.conf\n" +
          "[root@California_VPS ~]# echo &quot;net.ipv4.tcp_congestion_control=tsunami&quot; &gt;&gt; /etc/sysctl.conf\n" +
          "</code></p>\n" +
          "\n" +
          "<p>没有报错都顺利完成的话，重启服务器。然后查看：  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# lsmod | grep tsunami\n" +
          "tcp_tsunami            16384  5 \n" +
          "</code></p>\n" +
          "\n" +
          "<p>如果能看到 tcp_tsunami 证明 BBR 魔改版已安装成功。</p>\n" +
          "\n" +
          "<h2>Debian/Ubuntu</h2>\n" +
          "\n" +
          "<h3>1、开启 BBR</h3>\n" +
          "\n" +
          "<p>执行下面脚本一键开启  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "wget --no-check-certificate -qO &#39;BBR.sh&#39; &#39;https://moeclub.org/attachment/LinuxShell/BBR.sh&#39; &amp;&amp; chmod a+x BBR.sh &amp;&amp; bash BBR.sh -f\n" +
          "</code></p>\n" +
          "\n" +
          "<h3>2、安装魔改版BBR</h3>\n" +
          "\n" +
          "<p><code>\n" +
          "wget --no-check-certificate -qO &#39;BBR_POWERED.sh&#39; &#39;https://moeclub.org/attachment/LinuxShell/BBR_POWERED.sh&#39; &amp;&amp; chmod a+x BBR_POWERED.sh &amp;&amp; bash BBR_POWERED.sh\n" +
          "</code></p>\n" +
          "\n" +
          "<p>完成之后执行下面的命令检查是否安装成功  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "lsmod |grep &#39;bbr_powered&#39;\n" +
          "</code></p>\n" +
          "\n" +
          "<p>如果结果有 <code>bbr_powered</code> 则说明加载成功！</p>\n" +
          "\n" +
          "<h1>4、安装 SSR</h1>\n" +
          "\n" +
          "<p>搬瓦工的后台控制面板（KiwiVM）已经提供了一键安装的功能，不过有些协议并不支持，如果想体验完整版的 SSR 的安装，还是自己动手吧！<br/>还是通过一键式傻瓜脚本安装： </p>\n" +
          "\n" +
          "<p>先下载脚本   </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# wget –no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocksR.sh\n" +
          "</code></p>\n" +
          "\n" +
          "<p>然后赋权、安装  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "[root@California_VPS ~]# chmod +x shadowsocksR.sh \n" +
          "[root@California_VPS ~]# ./shadowsocksR.sh 2&gt;&amp;1 | tee shadowsocksR.log\n" +
          "</code></p>\n" +
          "\n" +
          "<p>执行完安装命令会看到这个：  </p>\n" +
          "\n" +
          "<p><code></code>`</p>\n" +
          "\n" +
          "<h6></h6>\n" +
          "\n" +
          "<h1>One click Install ShadowsocksR Server</h1>\n" +
          "\n" +
          "<h1>Intro: https://shadowsocks.be/9.html</h1>\n" +
          "\n" +
          "<h1>Author: Teddysun <a href=\"mailto:i@teddysun.com\">i@teddysun.com</a></h1>\n" +
          "\n" +
          "<h1>Github: https://github.com/shadowsocksr/shadowsocksr</h1>\n" +
          "\n" +
          "<h6></h6>\n" +
          "\n" +
          "<p>Please enter password for ShadowsocksR:\n" +
          "...\n" +
          "Please enter a port for ShadowsocksR [1-65535]:\n" +
          "...\n" +
          "Please select stream cipher for ShadowsocksR:\n" +
          "...\n" +
          "Please select protocol for ShadowsocksR:\n" +
          "...\n" +
          "Please select obfs for ShadowsocksR:\n" +
          "...\n" +
          "<code></code>`</p>\n" +
          "\n" +
          "<p>需要你选择相应的参数，前两个比较好理解，一个是SSR的密码，一个是端口；后面三个就比较复杂了，关于加密方法和协议介绍请看<a href=\"https://github.com/gaoshilei/shadowsocks_install/blob/master/shadowsocksR-wiki/ShadowsocksR%20协议插件文档.md\">wiki文档</a>  </p>\n" +
          "\n" +
          "<p>如果不想看文档，可以使用推荐参数配置<br/>加密：<code>chacha20</code>和<code>aes-256-cfb8</code>\n" +
          "协议：<code>auth_chain_a</code>和<code>auth_aes128_md5</code>和<code>auth_aes128_sha1</code>\n" +
          "混淆：<code>plain</code>,<code>http_simple</code>,<code>http_post</code>,<code>tls1.2_ticket_auth</code>  </p>\n" +
          "\n" +
          "<p>卸载 SSR：<code>./shadowsocksR.sh uninstall</code></p>\n" +
          "\n" +
          "<p>SSR 一些常用的命令  </p>\n" +
          "\n" +
          "<p><code>\n" +
          "启动：/etc/init.d/shadowsocks start\n" +
          "停止：/etc/init.d/shadowsocks stop\n" +
          "重启：/etc/init.d/shadowsocks restart\n" +
          "状态：/etc/init.d/shadowsocks status\n" +
          "</code></p>\n" +
          "\n" +
          "<p>日志路径</p>\n" +
          "\n" +
          "<p><code></code>`\n" +
          "配置文件路径：/etc/shadowsocks.json\n" +
          "日志文件路径：/var/log/shadowsocksr.log\n" +
          "代码安装目录：/usr/local/shadowsocks</p>\n" +
          "\n" +
          "<p><code></code>`</p>\n" +
          "\n" +
          "<p><strong>安装完成后重启VPS！安装完成后重启VPS！安装完成后重启VPS！</strong></p>\n" +
          "\n" +
          "<p>转载请注明出处：<a href=\"http://www.gaoshilei.com\">来自LeonLei的博客http://www.gaoshilei.com</a>   </p>\n" +
          "\n" +
          "<p>如果后面想修改 SSR 的一些配置可以直接修改 <code>shadowsocks.json</code> ，然后重启 SSR 即可。  </p>\n" +
          "\n" +
          "<p>最后配置 SSR 客户端就可以畅快的刷 YouTube 了，当然你也可以去 tumblr。【手动邪恶】  <br/><strong>奉上各个平台 SSR 的下载链接：</strong><br/>MAC版下载地址：<a href=\"https://github.com/gaoshilei/ShadowsocksX-NG/releases/download/1.4.3-R8-build3/ShadowsocksX-NG-R8.dmg\">ShadowsocksX-NG-R8.dmg</a>（2018.2.23更新）<br/>windows版下载地址：<a href=\"https://github.com/iMeiji/shadowsocks_install/releases/download/0.13/ssr-win.4.7.0-fix.7z\">ssr-win.4.7.0-fix.7z</a><br/>iOS版下载地址：<a href=\"https://itunes.apple.com/us/app/wingy-http-s-socks5-proxy-utility/id1178584911?mt=8\">wingy</a>（中国区已下架，换个美国账号下载）\n" +
          "安卓版下载地址：<a href=\"https://github.com/iMeiji/shadowsocks_install/releases/download/0.13/ssr-android-3.4.0.5.apk\">ssr-android-3.4.0.5.apk</a></p>\n" +
          "\n" +
          "<p>最后看看效果吧，YouTube 1080P 视频亲测截图  </p>\n" +
          "\n" +
          "<p><img alt=\"YouTube 1080P视频\" src=\"http://www.leonlei.top/SS_YouTube_1080P.png?imageMogr2/format/jpg/quality/45\"/></p>\n" +
          "\n" +
          "<p>再来一张YouTube的下载速度：  </p>\n" +
          "\n" +
          "<p><img alt=\"YouTube视频下载速度\" src=\"http://www.leonlei.top/QQ20171107-175234@2x.png?imageMogr2/format/jpg/quality/45\"/>  </p>\n" +
          "\n" +
          "<p>是不是感觉帮帮哒！</p>"
      }
    },
    components: {sidebar},
    methods: {},
    mounted() {
      console.log(this.$route.query);
    }
  }
</script>

<style lang="scss">

  @import "markdown.scss";

  .article-container {
    margin: 0 auto;
    max-width: 800px;

    .content-wrapper {
      .post {
        .post-header {
          margin: 28px 0 60px;

          .post-title {
            text-align: center;
            word-break: break-word;
            font-size: 20px;
            font-weight: 400;
          }

          .post-meta {
            color: #999;
            font-size: 12px;

            .icon {
              margin-right: 3px;
            }

            .category {
              .divider {
                margin: 0 0.5rem;
              }

              a {
                color: #555555;
                border-bottom: 1px solid #999999;
              }
            }

            .tags {
              margin-top: 8px;
              a {
                display: inline-block;
                color: #ffffff;
                border-radius: 15px;
                font-size: 13px;
                font-weight: 600;
                margin: 0 8px 0 0;
                padding: 0 15px;
                &:before {
                  content: "#";
                  margin-right: 3px;
                }
              }
              a:nth-child(1) {
                background: #2aa198;
              }
              a:nth-child(2) {
                background: #42b983;
              }
              a:nth-child(3) {
                background: #ff9800;
              }
              a:nth-child(4) {
                background: #46c47c;
              }
              a:nth-child(5) {
                background: #268bd2;
              }
            }
          }
        }
      }
    }
  }

</style>
