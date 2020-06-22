/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : meme

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2020-06-05 15:13:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `meme_info`
-- ----------------------------
DROP TABLE IF EXISTS `meme_info`;
CREATE TABLE `meme_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memename` varchar(50) NOT NULL,
  `memetag` enum('Character','Film','Anime','Game','Novel','Entertainment','Other') DEFAULT NULL,
  `memetext` text NOT NULL,
  `memeimgurl` varchar(100) DEFAULT 'images/None.gif',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of meme_info
-- ----------------------------
INSERT INTO `meme_info` VALUES ('1', '不明觉厉', 'Film', '来自周星驰的电影《食神》中的对白：＂虽然不明白（楼主）在说什么，但好像很厉害的样子。＂的缩略说法，周星驰给李兆基和莫文蔚讲解濑尿牛丸开分店到上市，李兆基说虽然不知道你在说什么，但感觉好厉害。', '');
INSERT INTO `meme_info` VALUES ('2', '查水表', 'Film', '出自电视剧《派出所的故事》中警察办案时为使人开门而谎称查水表。用法：（1）有人在网络上发表了不合乎相关法律法规或者破坏社会稳定和谐等消息而被警方抓捕称为“查水表”；（2）在贴吧或论坛里拥有删帖权限的大小吧主，检查贴吧里是否存在灌水的帖子或跟帖，遇到就进行删除的行为。', '');
INSERT INTO `meme_info` VALUES ('3', '我裤子都脱了你就让我看这个', 'Other', '用于表示一种不满的成句。来自日本2CH,现多用于在视频分享网站上，被华丽带有一点颜色的视频封面吸引，结果点进去以后发现视频内容和封面有出入或者根本就算瞎眼物,此时就有人感叹到：我裤子都脱了，你叫我看这个？ 也可以理解为打开的姿势不对。', '');
INSERT INTO `meme_info` VALUES ('4', '注定孤独一生', 'Other', '出自暴走漫画,形容某人不解风情，不懂女孩子心思。现在也引申为女孩子太自立，调侃完全不需要男人。', '');
INSERT INTO `meme_info` VALUES ('5', '闹太套', 'Entertainment', '英文“not at all”的中文音译。歌手黄晓明在演唱《One World One Dream》时，由于对not at all的美式发音酷似“闹太套”而遭网友调侃，此词也因此成为网络流行语之一。以此嘲笑许多明星为了显示自己的与众不同却弄巧成拙。', '');
INSERT INTO `meme_info` VALUES ('6', '前方高能', 'Anime', '一般认为最早出自《机动战士高达》系列。该台词后来在《EVA》、《超时空要塞》、《宇宙战舰大和号》等科幻类作品均有出现。在各ACG弹幕网的视频弹幕中经常会出现“前方高能”之类的弹幕，预示接下来视频一般会出现激烈的内容或画面。最早的的格式是“前方高能反应，非战斗人员迅速撤退”之后经过简化变为前方高能反应，最后演化为言简意赅的前方高能。也有前方核能等变化格式。', '');
INSERT INTO `meme_info` VALUES ('7', '腿玩年', 'Anime', '出自动漫《FATE》里慎二抓走远坂凛那集摸腿所说，腿玩年即“这腿够我玩一年了”，表达对男人对美女美腿的一种近乎失去理性的渴求与喜爱。', '');
INSERT INTO `meme_info` VALUES ('8', '真是HIGH到不行', 'Anime', '《JOJO的奇妙冒险》第三部星尘斗士，最终战中DIO在吸收了乔瑟夫的血后恢复了作为吸血鬼的全部能力，用替身“世界”停止时间的长度从5秒提升到了9秒，在停止的时间中对无法行动的承太郎以用手指插入大脑的奇妙姿势说出了这句话，令人印象深刻。', 'images/2020053101.png');
INSERT INTO `meme_info` VALUES ('9', '所累哇多卡纳', 'Anime', '遊☆戲☆王DUEL MONSTERS）中的角色暗游戏的经典逆转台词之一。是日语“それはどうかな～”的翻译“这可说不定呐”的中文谐音。其杀伤力及对后世的影响程度不亚于“没有人能在我的BGM里打败我”之类的装逼梗。', '');
INSERT INTO `meme_info` VALUES ('10', '快用你无敌的白金之星想想办法啊！', 'Anime', '本句出自漫画《JOJO的奇妙冒险：不灭钻石》的第11卷，当时仗助与承太郎一起去吉良吉影的大宅中了解情况，却意外地遭到了吉良已经死去的父亲吉良吉广的替身攻击（替身名为“原子心之父”或译“破碎慈父心”）。在危急的情况下，仗助向承太郎喊出了这句话。原句为：“承太郎先生，快用你无敌的白金之星想想办法啊！”', '');
INSERT INTO `meme_info` VALUES ('11', '莱纳，你坐啊！', 'Anime', '出自谏山创创作的漫画《进击的巨人》中男主角艾伦·耶格尔的一句经典台词。《进击的巨人》漫画第99话《内疚的身影》中，潜入敌国马莱的艾伦·耶格尔利用法尔科将莱纳·布朗请到一栋居民楼的地下室中谈话。艾伦向莱纳展示自己手上流血的伤口，无声地威胁莱纳自己随时可以巨人化。届时巨人化的身躯会撑坏他们所在的建筑，令上方的居民产生死伤。艾伦请莱纳坐到椅子上，而莱纳此时因为见到艾伦的惊愕、以及意识到艾伦来者不善的恐惧而一时没有做出反应。于是艾伦又用了威胁语气更重的“莱纳，你坐啊！”，这次莱纳反应过来，顺从地坐到了椅子上。', '');
INSERT INTO `meme_info` VALUES ('12', '我真是日了狗了', 'Game', '最先是由LOL玩家阿倪蛋糕店在斗鱼TV直播（斗鱼ID机智的蛋糕）时，有一次玩船长被对面AD妖姬压于是说了一句：我真是日了狗了。然后出了一把贪婪之刃最后成功翻盘，于是斗鱼上这句话流行了起来然后又传到其他网站。', '');
INSERT INTO `meme_info` VALUES ('13', '残念', 'Anime', '日语ざんねん（zannen）所化用的中文新词，原义为可惜、遗憾。因为日本acg的影响在中国日渐流行。', '');
INSERT INTO `meme_info` VALUES ('14', '鸡你太美', 'Entertainment', '是当红流量明星蔡徐坤打篮球跳舞时唱歌歌词“只因你太美”的谐音，网友用来调侃蔡徐坤打球打得差、唱歌唱得差，常见于B站鬼畜视频及弹幕。', '');
INSERT INTO `meme_info` VALUES ('15', 'emmmm', 'Other', 'e同“额”，常用聊天词汇，词意同于好、恩、啊，表示回应，知道的意思，m则表示无限拖长的尾音，emmmm……就是额嗯……，思考+无语的意思，和欲言又止相似。', '');
INSERT INTO `meme_info` VALUES ('16', '律师函警告', 'Character', '出处不明，最有名的则是迪士尼的维权律师函。这句话通常都是纠纷外的第三人吃瓜群众说的，表示某种言行或某人可能会收到律师函，毕竟这句话暗含一种“空有口头威慑，没有什么实际后果[1]”的意思，带有一定的讽刺意味，因此当事人自己是不会说的。当事人如果确实有相关的需求，一般会直接寄出或公开发表律师函。', '');
INSERT INTO `meme_info` VALUES ('17', '乌鸦坐飞机', 'Anime', '是美国动画《成龙历险记》里反派人物阿福的一个招式名称，英语名称为“Angry Crow Takes Flight!”，中文翻译变成乌鸦坐飞机，是其登场后使用的第一个的招式，也是使用次数最多的招式。只是搞笑好玩而已，没有什么特殊意思。', '');
INSERT INTO `meme_info` VALUES ('18', 'yjjc', 'Entertainment', '“一骑绝尘”的缩写，饭圈加密通话', '');
INSERT INTO `meme_info` VALUES ('19', 'bhys', 'Entertainment', '“不好意思”的缩写，饭圈加密通话', '');
INSERT INTO `meme_info` VALUES ('20', 'nbcs', 'Entertainment', '“nobody cares”的英文缩写，饭圈加密通话', '');
INSERT INTO `meme_info` VALUES ('21', '可盐可甜', 'Entertainment', '指的是可以很可爱很甜，也可以很霸气，风格可以在甜咸之间一秒转换。多是粉丝们用来形容自己爱豆（偶像idol）的常用词汇。毕竟人总是有多面性的，因此该词可以说是适用于任何一位爱豆，爱豆的任何一面在粉丝们的心中都是完美惹人爱的。', '');
INSERT INTO `meme_info` VALUES ('36', 'zqsg', 'Entertainment', '真情实感的缩写', '');

-- ----------------------------
-- Table structure for `user_meme`
-- ----------------------------
DROP TABLE IF EXISTS `user_meme`;
CREATE TABLE `user_meme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memename` varchar(50) NOT NULL,
  `memetag` enum('Character','Film','Anime','Game','Novel','Entertainment','Other') DEFAULT NULL,
  `memetext` text NOT NULL,
  `memeimgurl` varchar(100) DEFAULT 'public/images/None.gif',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_meme
-- ----------------------------
