<template>
  <div>
    <Header></Header>
    <div style="padding: 20px;border-top: 1px solid #ccc;">
      <div class="back">
        <div style="text-align: center;font-weight:bold;font-size:30px;">
          <img alt="" width="10%" :srcset="coin.logourl"/>
          <br>{{$t(coin.cointype)}} {{$t('introduction')}}
        </div>
        <div v-if="this.$i18n.locale == languagezh">
          <div class="introtext" v-if="cointype === coins[0].cointype">
            <br>比特币介绍：根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的数字货币。点对点的传输意味着一个去中心化的支付系统。与大多数货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。P2P的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，是其总数量非常有限，具有极强的稀缺性。
            <br>纪念币人物：中本聪
            <br>人物国籍：日本可能性40,美国可能性40%，来自其他国家概率20%
            <br>人物身份：比特币创始人，区块链技术创始人
            <br>人物介绍：中本聪到底是一个人，还是一个团队，还是一个国家目前无从得知，目前有人自称自己是中本聪但还未经过详细考证，暂且把他的形象作为中本聪吧。他在全球金融危机的背景下创立了比特币试图打开一个去中心化的货币体系，同时，也把区块链技术带到了世界，让去中心化的理念深入人心，他引来的区块链技术即将爆发出新的一场科技革命，他是当之无愧的区块链祖师爷。
          </div>
          <div class="introtext" v-if="cointype === coins[1].cointype">
            <br>以太币介绍：Ethereum（以太坊）是一个平台和一种编程语言，使开发人员能够建立和发布下一代分布式应用。 Ethereum可以用来编程，分散，担保和交易任何事物：投票，域名，金融交易所，众筹，公司管理， 合同和大部分的协议，知识产权，还有得益于硬件集成的智能资产。
            <br>以太坊将使用混合型的安全协议，前期使用工作量证明机制（POW），用于分发以太币，然后会切换到权益证明机制（POS）。自上线时起，每年都将有0.26x，即每年有60102216 * 0.26 = 15626576个以太币被矿工挖出。转成POS后，每年产出的以太币将减少
            <br>纪念币人物：V神(VitalikButerin)
            <br>人物国籍：加拿大（出生地：俄罗斯）
            <br>人物身份：以太坊创始人
            <br>人物介绍：1994年出生的天才程序员神通，4岁就接触电脑，12岁就自己编程游戏，17岁时接触比特币，接触比特币后，对区块链产生了宗教般的狂热，毅然退学从事区块链事业，另起炉灶，召集近20位合作伙伴，投入自己同年获得10万美元创业奖学金缔造以太坊帝国，从此让区块链进入了2.0智能合约时代。真可谓英雄出少年。他执着，低调，讲话毫无遮掩，杜绝跟风，他告诫所有以太坊的用户成熟起来，不希望以太币沦为人们投机生财的“郁金香”。他还警告炒以太币暴富的人如果还在用炒以太币币赚来的钱炫富，他将退出以太坊。
          </div>
          <div class="introtext" v-if="cointype === coins[2].cointype">
            <br>莱特币介绍：莱特币Litecoin（简写：LTC，货币符号：Ł）是一种基于“点对点”(peer-to-peer)技术的网络货币，也是MIT/X11许可下的一个开源软件项目。它可以帮助用户即时付款给世界上任何一个人。莱特币从比特币衍生出来，最早通过采用占用内存更多的Scrypt算法以及将出块时间从10分钟改成了2.5分钟而大获成功。
            <br>莱特币受到了比特币（BTC）的启发，并且在技术上具有相同的实现原理，莱特币的创造和转让基于一种开源的加密协议，不受到任何中央机构的管理。莱特币旨在改进比特币，与其相比，莱特币具有三种显著差异。第一，莱特币网络每2.5分钟（而不是10分钟）就可以处理一个块，因此可以提供更快的交易确认。第二，莱特币网络预期产出8400万个莱特币，是比特币网络发行货币量的四倍之多。第三，莱特币在其工作量证明算法中使用了由Colin Percival首次提出的scrypt加密算法，这使得相比于比特币，在普通计算机上进行莱特币挖掘更为容易。每一个莱特币被分成100,000,000个更小的单位，通过八位小数来界定。
            <br>纪念币人物：李启威
            <br>人物国籍：美国（出生地：科特迪瓦）
            <br>人物身份：莱特币创始人，COINBASE交易所前工程总监
            <br>人物介绍：麻省理工学院高材生，最初从介绍暗网的文章中了解了比特币，感受到比特币的神奇，立志要开发出自己的数字货币。对数字货币创始人先挖出大量自己创始的币，然后再投放市场的模式极为不满，他要用一种公平的模式打造自己的数字货币。他大胆预言：“虚拟货币最终会实现流通货币的作用。”他还热衷慈善，捐赠大量莱特币给慈善事业。他的名言：“比特币是金，莱特币是银。”
          </div>
          <div class="introtext" v-if="cointype === coins[3].cointype">
            <br>币安币介绍：币安币是由币安发行的代币，简称BNB，是基于以太坊Ethereum的去中心化的区块链数字资产。BNB作为Binance生态系统和去中心化交易所燃料，已经应用到多个场景，如用BNB抵扣binance交易手续费，最高可获得50%的折扣，在Monaco Visa及APP应用中可使用BNB支付，在Uplive直播平台可以使用BNB购买虚拟礼物等。目前 BNB 排名稳居全球TOP50，最佳排名为全球TOP20，受到全球180余国家和地区区块链爱好者的支持。
            <br>纪念币人物：赵长鹏
            <br>人物国籍：加拿大（出生地：中国）
            <br>人物身份：币安交易所创始人
            <br>人物介绍：2018年福布斯数字货币领域富豪榜第三名，大胆卖房炒币并开交易所，短短六个月就曾让币安成为世界数字货币交易量第一的交易所。程序员出身，为人低调，拥有惊人财富的赵长鹏没有任何汽车、游艇或名表。他永远满仓持有比特币，银行卡里只保留几千用于日常生活开支。数国的政界大佬邀请他前往当地开展区块链合作。他的名言：“没人能够改变我的看法，我改变他们的可能性或许更多一点。”
          </div>
          <div class="introtext" v-if="cointype === coins[4].cointype">
            <br>韭菜币介绍：现实中没有以人民为代表的加密货币，所以此款游戏中会有一款以广大散户为主题的纪念币弥补现实中的缺失。加密纪念币团队希望不久未来在现实中能有一款以人民为主题的加密货币发行，没有割韭菜，没有庄家操纵。
            <br>纪念币人物：梭哈老者
            <br>人物国籍：中国
            <br>人物身份：打捞员
            <br>人物介绍：梭哈老者是一名尸体打捞员。凭啥纪念币人物里只能有大咖，我们韭菜必须也要有一席之地。梭哈老头代表了众多韭菜心声，其经典名言：“不要怂，就是干！全梭哈！赢了会所嫩模，输了下海干活”已经流传佳话。我们广大普通投资人在区块链里可谓体验了人生的酸甜苦辣和人生百态。区块链技术最终是要服务于广大投资者的。梭哈老者的经典梭哈表情和手势已经伸入人心，他当之无愧应成为广大散户的代表。
          </div>
          <div class="introtext" v-if="cointype === coins[5].cointype">
            <br>嫩模币介绍：OmiseGO 通过开发新一代支付服务来解决支付处理商、网关以及金融机构之间基本的协调问题。该支付服务支持在货币及资产类型间进行转换操作。通过 OmiseGO 网络和电子钱包，每个人都可以完全分散，高频和低成本的方式进行诸如付款、汇款、工资发放、B2B 商务、供应链融资、忠诚度计划（loyalty programs）、资产管理以及其他按需服务等金融交易。此外，世界上最大的增长经济体用户将能从使用法币转向使用类似以太币和比特币等去中心化货币。OmiseGo 网络不再区分法币还是去中心化加密货币：随着更多的人接受和使用，最好用的货币将胜出。
            <br>OmiseGO 是公开的基于以太坊的可实现主流数字钱包跨区域跨组织交易的金融科技，打破支付孤岛，完成实时的点对点价值交换和支付服务，并支持跨法币与去中心化货币的交易。该技术旨在通过打破现有的组织架构壁垒，推进金融包容性，并将在2017年第四季度启动，通过 OmiseGO 及其数字钱包网络，向所有人提供服务。
            <br>OmiseGO 通过开发新一代支付服务来解决支付处理商、网关以及金融机构之间基本的协调问题。该支付服务支持在货币及资产类型间进行转换操作。通过 OmiseGO 网络和电子钱包，终端用户可以灵活完成支付、汇款、薪水存储、B2B 商业、供应链融资、信用制度、资产管理和贸易以及各种随需应变的金融服务。具体而言，可在国内外迅速移动资金、在大型组织的各部门中获取跟踪资产的安全分类账、为品牌联盟建立信用积分系统、向可支持多个钱包供应商的网络发放数字礼品卡等。
            <br>此外，世界上最大的增长经济体用户将能从使用法币转向使用类似以太币和比特币等去中心化货币。OmiseGo 网络不再区分法币还是去中心化加密货币：随着更多的人接受和使用，最好用的货币将胜出。
            <br>纪念币人物：Jun Hasegawa
            <br>人物国籍：日本
            <br>人物身份：嫩模币（OMG）创始人
            <br>人物介绍：他的区块链项目要开创东南亚地区移动支付的先河，立志要打破银行的垄断，他们的口号简单粗暴：让你们不再需要银行！他已经成功地与两家世界500强企业合作，泰国麦当劳就已经率先接受OMISEGO的支付服务，此外，在他的努力下，OMISE还与中国企业巨头阿里集团在泰国开展支付业务。
          </div>
          <div class="introtext" v-if="cointype === coins[6].cointype">
            <br>阿姨币介绍：æternity是一个区块链3.0平台，旨在提供无与伦比的效率，透明的治理和全球可扩展性。AE区块链的核心基础之一是智能合约，提供几乎即时和完全私人的交易。它还具有无限可扩展性，并实现了具有工作量证明（PoW）和利益证明（PoS）的混合共识机制。Aeternity的技术亮点是Bitcoin-NG协议、图灵完备状态通道(State Channels)、去中心化预言机（Oracles）、命名系统，用于用户友好的地址名称。
            <br>纪念币人物：YanislavMalahov
            <br>人物国籍：瑞士（出生地：保加利亚）
            <br>人物身份：阿姨（AE）创始人，以太坊教父
            <br>人物介绍：被誉为“以太坊教父”，以太坊诞生之前，就已经和V神一起工作，在与V神的思想碰撞中，以太坊的雏形概念诞生了。没有他，以太坊或许要晚很久诞生，甚至无法诞生。他的阿姨币被称为欧洲版以太坊。他大胆预言:“5年内加密货币将角逐出胜者，大部分垫脚石将消失”。2018年良币驱逐劣币，他的预言进一步实现。他在经历过金融危机后，认为区块链技术将是人类未来的必经之路。
          </div>
          <div class="introtext" v-if="cointype === coins[7].cointype">
            <br>小蚁币介绍：NEO是基于区块链技术，将实体世界的资产进行数字化，形成数字资产，并通过点对点网络进行登记存管、转让交易、清算交收的去中心化分布式总账协议。
            <br>NEO使用电子合同（e-contract）来记录数字资产的流转。在NEO中，电子合同所产生的数字凭证（digital token）作为一种通用的底层数据，可以用于记录股权、债权、证券、金融合约、积分、票据、货币等各种权利和资产，用于股权众筹、股权交易、员工持股计划、P2P借贷、积分、基金、供应链金融等领域
            <br>纪念币人物：达鸿飞
            <br>人物国籍：中国
            <br>人物身份：小蚁（NEO）创始人
            <br>人物介绍：江湖人称达叔，真名宋欢平。他于2011年接触比特币，2013年全职从事区块链技术创新、数字货币社区工作，联合创立了“比特创业营”。创业者、投资人、消费升级爱好者三位为一体的区块链大咖。他提出了区块链1.0时代，区块链2.0时代。2014年创立小蚁。2015年起开始主持“小蚁”项目，用区块链技术让普通公司都可以进行“数字IPO”，发行股权，交易股权。他认为：首先，区块链必须结合身份认证，才能合规地对接实体世界的财产权利，才能进入主流应用；其次，区块链在保持公开透明性的同时，也必须保护使用者的隐私，才能被用户所接受。
          </div>
          <div class="introtext" v-if="cointype === coins[8].cointype">
            <br>泰达币介绍：USDT的发行和交易使用的是Omni（原Mastercoin）协议，而Omni币可以说是市面上的第一个基于比特币区块链的2.0币种。所以USDT的交易确认等参数是与比特币一致的。
            <br>根据Tether的CTO及联合创始人Craig Sellars 称，用户可以通过SWIFT电汇美元至Tether公司提供的银行帐户，或通过Bitfinex交易所换取USDT。赎回美元时，反向操作即可。用户也可在上述两个网站用比特币换取USDT。其网站宣称严格遵守1：1的准备金保证，即每发行1枚USDT代币，其银行帐户都会有1美元的资金保障。
            <br>纪念币人物：Craig Sellars
            <br>人物国籍：美国
            <br>人物身份：泰达（Tether)公司联合创始人兼CTO
            <br>人物介绍：美元作为背书，他掌门的泰达公司每一枚USDT对等一美元，把真实货币带入到数字货币世界，某种程度扮演了中心化央行的角色，币圈有时也需要一些中心化。投资者无需担心法币比特币和以太坊作为法币时的价格波动，USDT是名副其实的稳定币种，避险港湾。他是名副其实的法币数字化的鼻祖，为法币全球360度顺畅地流通打下扎实基础。
          </div>
          <div class="introtext" v-if="cointype === coins[9].cointype">
            <br>石油币介绍：石油币是第一个由主权国家发行并具有自然资源作为支撑的加密数字货币，将被用来进行国际支付，成为委内瑞拉在国际上融资的一种新方式。这一数字货币将帮助委内瑞拉渡过经济困难，打破美国的金融封锁。每个石油币都有委内瑞拉的1桶原油作为实物抵押。委内瑞拉的石油币计划一路走来，从市场到政界，吸引了国内外不少眼光。
            <br>纪念币人物：Nicolás Maduro Moros
            <br>人物国籍：委内瑞拉
            <br>人物身份：委内瑞拉总统，石油币发起人
            <br>人物介绍：委内瑞拉经济崩盘，通货膨胀，负债累累，区块链的出现让他看到了救命稻草，他力排众议促使委内瑞拉发型石油币进行融资，成为第一个发型数字货币的国家，一币对标一桶石油。石油币发行首日，委内瑞拉就融资到7.35亿美元。他的伟大实践证明了区块链有希望能拯救一个国家。同时，在他执政期间，邀请全世界人民前来挖矿，外加低廉的电费和政府补贴，成为矿工们的首选挖矿地。
          </div>
          <div class="introtext" v-if="cointype === coins[10].cointype">
            <br>门罗币介绍：门罗币（Monero，代号XMR）是一个创建于2014年4月开源加密货币，它着重于隐私、分权和可扩展性。与自比特币衍生的许多加密货币不同，Monero基于CryptoNote协议，并在区块链模糊化方面有显著的算法差异。Monero的模块化代码结构得到了比特币核心维护者的赞赏。
            <br>Monero致力于成为可代替的不可追踪的电子货币。相比比特币及其分叉，Monero具有更高程度的匿名性。 Monero于2014年4月18日发布。
            <br>纪念币人物：Riccardo Spagni
            <br>人物国籍：南非
            <br>人物身份：门罗创始人
            <br>人物介绍：Riccardo Spagni,有情报学和物流学教育背景，曾经做过软件开发和进出口贸易，2011年接触比特币，2012年开始从事区块链项目开发。兴趣广泛，多才多艺，热爱大海中划橡皮艇运动，喜欢动物，自己养了六条狗，与海豹接吻，热衷于自己制造无人机和使用无人机航拍，此外他还喜欢玩热高。他十分注重保护用户的隐私和匿名性，因此，他开发的门罗币应运而生。
          </div>
          <div class="introtext" v-if="cointype === coins[11].cointype">
            <br>量子币介绍：量子链Qtum是首个基于UTXO模型的POS智能合约平台，可以实现和比特币生态和以太坊生态的兼容性，并通过移动端的战略，促进区块链技术的产品化和提高区块链行业的易用性，旨在将真实商业社会与区块链世界连接。因此，量子链是一个区块链应用平台的集大成者。
            <br>量子链利用其学术合作伙伴、开发工具和方法论对商业智能合约的开发进行了标准化，包括将自然语言的合约准确的转译成机器可读智能合约、高容错度的细节及合约条款。第三方将在量子链的协助下开发专用的用户接口来加强智能合约生命周期管理。
            <br>量子链旨在通过与一系列合作伙伴和第三方的协作建立一个智能合约枢纽，提供安全并经过反复测试的合约模板，适用于各种行业和用例，例如供应链管理、通讯、物联网、社交媒体等。
            <br>纪念币人物：帅初
            <br>人物国籍：中国
            <br>人物身份：量子链（Qtum）创始人
            <br>人物介绍：区块链狂热信徒，博士辍学，离开阿里，开创自己区块链事业。比特币创立早期，他就在比特币和区块链论坛大量发帖，累计发帖数过万，撰写了《从0到1建立自己的区块链》开发手册。网罗世界顶级区块链大咖，创立量子链（Qtum）,被V神称为“中国乃至亚洲最好的区块链团队”，2017年进入福布斯中国30岁精英榜。他的霸气名言：“如果在历史上找一个人对标中本聪，我想那个人应该是牛顿或者香农”。
          </div>
          <div class="introtext" v-if="cointype === coins[12].cointype">
            <br>比原币介绍：比原链 (Bytom）是一种多元比特资产的交互协议，运行在比原链区块链上的不同形态的、异构的比特资产（原生的数字货币、数字资产）和原子资产（有传统物理世界对应物的权证、权益、股息、债券、情报资讯、预测信息等）可以通过该协议进行登记、交换、对赌、和基于合约的更具复杂性的交互操作。连通原子世界与比特世界，促进资产在两个世界间的交互和流转。比原链采用三层架构：应用层、合约层、数据层，应用层对移动终端等多终端友好，方便开发者便捷的开发出资产管理应用；合约层采用创世合约和控制合约进行资产的发行和管理，在底层支持扩展的UTXO模型BUTXO，对虚拟机做了优化，采用自省机制以防止图灵完备中的死搀状态；数据层使用分布式账本技术，实现资产的发行、花费、交换等操作，共识机制采用对人工智能ASIC芯片友好型POW算法，在哈希过程中引入矩阵和卷积计算，使得矿机在闲置或被淘汰后，可用于AI硬件加速服务，从而产生额外的社会效益。
            <br>纪念币人物：长铗（本名：刘志鹏）
            <br>人物国籍：中国
            <br>人物身份：比原链(Bytom)创始人、巴比特论坛创始人兼CEO、区块链理论研究者、地质工程师、科幻小说作家
            <br>人物介绍：跨领域多重身份，很难想象一个科幻作家、地质工程师能与区块链相结合。他开发的比原链币圈市值排名前50，他创立的巴比特论坛成为中国最大的区块链和数字货币论坛，内容丰富、人气十足,他写的科幻小说连续三年获中国科幻最高奖“银河奖”。区块链和科幻小说领域双重身份的他让枯燥、难懂、乏味的区块链理论变动生动活泼，区块链有时也需要科幻润色。高瞻远瞩，2011年就给大学生投资建议：“买比特币，保存好钱包文件，然后忘掉这回事。五年后再看看。”
          </div>
          <div class="introtext" v-if="cointype === coins[13].cointype">
            <br>火币积分介绍：HT（火币全球通用积分）是基于区块链发行和管理的积分系统，为火币官方发行的唯一积分。HT将支持火币全球业务、全线产品，如：VIP手续费折扣、认证商家保证金、火币积分专享活动、与热门币种交易、参与火币业务等。
            <br>纪念币人物：李林
            <br>人物国籍：中国
            <br>人物身份：火币交易所创始人
            <br>人物介绍：李林，同济大学本科，清华大学硕士，曾入职甲骨文公司。当他在2011年第一次阅读比特币白皮书时，被其中的原理吸引的如痴如醉。曾试图创办中国版脸书“友谊网”以失败告终，不气不馁，接着创办团购导航网站“人人折”，小有成就，乘胜追击，抓住商机，开设加密货币交易所火币网，大获成功。在他的努力下，火币交易所稳坐交易量前十。他的名言：“创业就是干别人不敢干的事。”
          </div>
          <div class="introtext" v-if="cointype === coins[14].cointype">
            <br>柚子币介绍：EOS (Enterprise Operation System) 是由 Block.one 公司主导开发的一种全新的基于区块链智能合约平台，旨在为高性能分布式应用提供底层区块链平台服务。EOS 项目的目标是实现一个类似操作系统的支撑分布式应用程序的区块链架构。该架构可以提供账户，身份认证，数据库，异步通信以及可在数以万计的 CPU/GPU 集群上进行程序调度和并行运算。EOS 最终可以支持每秒执行数百万个交易，同时普通用户执行智能合约无需支付使用费用。EOS 代币目前是 EOS 区块链基础设施发布的基于以太坊的代币，主要有三大应用场景：带宽和日志存储（硬盘），计算和计算储备（CPU），状态存储（RAM）。EOS主网上线后会将 ERC-20 代币 EOS 转换为其主链上的代币。
            <br>纪念币人物：BM(Dan Larimer)
            <br>人物国籍：美国
            <br>人物身份：EOS创始人，BTS创始人，Steem创始人
            <br>人物介绍：BM是区块链技术天才，链圈第一个连续开发的三个区块链项目市值都在前五十，尤其第三个项目EOS还没上线时市值就达到前五，受到信仰者的追捧。他设计出EOS21节点竞选制，堪比议会制，将人类优越的民主政治制度与区块链相结合，是一次伟大的创新。他是自由主义者，自由到极端，典型的极客型人格，对怂中本聪，对怂V神。惹来中本聪霸气十足的回复：看不懂就算了，我没时间搭理你。他给自己定下了乌托邦般的使命：我的人生目标是找到能确保大家生命、自由和财产安全的自由市场解决方案。为他的伟大理想给一个真诚的赞！
          </div>
          <div class="introtext" v-if="cointype === coins[15].cointype">
            <br>埃欧塔币介绍：IOTA是一种新型的数字加密货币，专注于解决机器与机器（M2M）之间的交易问题。通过实现机器与机器间无交易费的支付来构建未来机器经济（machine economy）的蓝图。IOTA提供高效，安全，轻便，实时的微交易，并且不产生交易费用。 它是开源的，去中心化的数字加密货币，是专门为物联网而设计的，它是实时微交易，并且能够简单方便的进行扩展。IOTA超越了blockchain技术。它是第一个用于整个生态系统的，基于非区块链技术加密货币。IOTA可能被认为又是一种山寨币，但事实是IOTA远非一种山寨币，它超越了区块链技术，是区块链技术的延展。IOTA是基于缠结（Tangle）而非区块链技术。
            <br>纪念币人物：David Sonstebo
            <br>人物国籍：挪威
            <br>人物身份：埃欧塔创始人
            <br>人物介绍：David Sonstebo满脸大胡子的形象好像带领我们回到了19世纪，然而他却是一个未来主义者。外表形象与内完全相反的一个人。他相信技术是从一种利他主义的角度来改善世界的最佳方法。他对任何能推动人类社会进步的技术都抱有极大热情，这样的热情使他成为了一个科技狂人，他的激情四射到了物联网、分布式账本、区块链、智慧城市、数字身份、政府管理电子化、硬件设计领域。
          </div>
          <div class="introtext" v-if="cointype === coins[16].cointype">
            <br>中币介绍: ZB是由ZB Blockchain基金会基于区块链发行的生态币，可以在ZB生态众多场景下使用并流通，目的是为了让用户可以在ZB生态体系中享有更多的权益，打通ZB生态全产业服务。ZB限定发行总量为21亿枚，用户持有7.47亿，4亿用于成立“ZB用户保障基金”，2.93亿用于平台运作及市场推广，6.6亿用于ZB生态基金。
            <br>纪念币人物：李大伟
            <br>人物国籍：中国
            <br>人物身份：中币交易所联合创始人，中币资本CEO
            <br>中币介绍：ZB是由ZB Blockchain基金会基于区块链发行的生态币，可以在ZB生态众多场景下使用并流通，让用户可以在ZB生态体系中享有更多的权益，打通ZB生态全产业服务。具体应用在投票、接收空投糖果、购买会员、享受手续费折扣。回购机制让ZB价值稳定。
            <br>人物介绍：外号“币圈老干部”。大学毕业后，李大伟进入世界五百强企业工作，之后又在多家五百强企业从事管理岗位，大企业的职业化训练让他积累了丰富的高新科技企业管理经验。2012年在网上偶遇比特币介绍，虽然看不懂难懂的白皮书，但隐约感觉到背后技术所带来的巨大市场。2013年毅然辞职进入币圈。与其他区块链从业者穿着随意不同，李大伟热爱始终西装革履。他不注重玩命造势地宣传中币交易所，而是选择务实路线，贴心为用户服务。他公开强调“区块链大佬站台的项目不一定就是好项目”。
          </div>
          <div class="introtext" v-if="cointype === coins[17].cointype">
            <br>恒星币简介:恒星币是基于 Ripple 代码修改创建的恒星支付网络中的基础数字货币，总量为1000亿，每年增加1%。恒星支付网络以恒星币为基础货币，用户能够通过其转账任意一种货币，包括美元、欧元、人民币、日元或者比特币，简便易行快捷，交易确认在几秒以内完成。
            <br>纪念币人物：Jed McCaleb
            <br>人物国籍：美国
            <br>人物身份：电驴创始人，瑞波币联合创始人，恒星币联合创始人，Mt.Gox交易所创始人
            <br>人物介绍：Jed从小就着迷于编程。他认为编程就像平地起高楼，从无到有，将一个想法变成一个美妙的成品。他身边堆满了神经科学和人工智能方面的书籍。对他而言，世界是美妙的，不符合很多人对“码农”们“死宅”的刻板映像。大学选择物理专业，他只花了一年就学完了相应的课程。对他来说，学习这些知识远远不需要4年时间，所以与其浪费接下来的三年时间，还不如腾出时间做更多有意义的事情，所以毅然选择退学。他创业经历丰富多彩，1998年筹备创建电驴，2010年创建游戏公司，2011年创建比特币交易所，2012年创建瑞波，因和瑞波CEO意见分歧，于2014年创建恒星。
          </div>
          <div class="introtext" v-if="cointype === coins[18].cointype">
            <br>艾达币介绍：Cardano卡尔达诺是一个分散且公开的区块链，也是一个加密货币项目，而且是完全开源的。卡尔达诺正在开发一个智能合约平台，旨在提供比以前开发的任何协议更先进的功能，它是第一个从科学哲学和以研究为首驱使向导，进而演变而来的区块链平台。
            <br>Cardano是从科学哲学领域开发出来的第一个区块链项目，也是由主导学者和工程师们组成的全球团队设计和制造的唯一项目。至关重要的是，Cardano的技术是安全、灵活和可扩展的，并可供数百万用户使用。因此，一些主导专家们已经对该项目进行过深思熟虑，并且设计决策也已成形。科学的严谨性被应用于关键任务的系统当中，比如航空航天技术和银行业已经被带入到数字货币领域当中，并且具有高度的安全保证。
            <br>纪念币人物：Charles Hoskinson
            <br>人物国籍：美国
            <br>人物身份：艾达币（ADA）创始人
            <br>人物介绍：区块链明星项目三任元老，以太坊（Ethereum），卡尔达诺（Cardano）和比特股（Bitshares）的联合开发者。他在接触比特币之后，毅然辞掉收入不菲的工作，投身区块链教育事业，当时身边人都认为他疯了。他曾和V神共同开发以太坊，因与V神意见产生分歧，独立门户，另辟蹊径，吸取了比特币和以太坊的优势，创始了卡尔达诺，集成了数字货币（如比特币，莱特币）和智能合约（如以太坊，EOS）的区块链生态系统。他坚定地认为华尔街最终会带着上万亿美元的资金进入加密货币市场，前途将一片光明。
          </div>
          <div class="introtext" v-if="cointype === coins[19].cointype">
            <br>狗币介绍：狗币自有一套策略，它并不走比特币的赚钱路线，而是很好地利用了美国的“小费文化”。这种被视作是对服务者的捐赠或跪拜的谦卑姿态，也在互联网上广泛使用。比起昂贵的比特币，狗币门槛更低，而且更“萌”，系统上线一周后，狗币已经成为美国互联网中第二受欢迎的“小费电子货币”。狗币很特别，基于网络草根文化而起，由于气质可爱搞笑而一炮而红。在日益膨胀的电子货币市场当中，狗币算是定位到一个利基市场。
            <br>纪念币人物：Jackson Palmer
            <br>人物国籍：澳大利亚
            <br>人物身份：狗币联合创始人，前ADOBE公司产品经理
            <br>人物介绍：他是一位大神级的市场营销专家，与一名素未见面的美国程序员一拍即合，创立狗币，弥补了币圈小费打赏币的空白，同时，他通过狗币开创了区块链与慈善、动物保护的完美结合，人气指数迅速爆棚。他的狗币看起来搞笑，叫起来也搞笑，给羞涩难懂的区块链技术增添了一丝幽默感。脸书网也向狗币抛出了橄榄枝，承认了狗币在脸书网上的合法地位。狗币的市值曾在最高峰达到10亿美元，他的成功再一次证明只要努力敢于创新，草根也能变大佬。
          </div>
          <div class="introtext" v-if="cointype === coins[20].cointype">
            <br>瑞波币介绍：瑞波币是Ripple网络的基础货币，它可以在整个ripple网络中流通，总数量为1000亿，并且随着交易的增多而逐渐减少，瑞波币的运营公司为Ripple Labs（其前身为OpenCoin）。
            <br>瑞波币是ripple系统中唯一的通用货币，其不同于ripple系统中的其他货币，其他货币比如CNY、USD不能跨网关提现的，换句话说，A网关发行的CNY只能在A网关提现，若想在B网关提现，必须通过ripple系统的挂单功能转化为B网关的CNY才可以到B网关提现。而瑞波币完全没有这方面的限制，它在ripple系统内是通用的。
            <br>瑞波币（XRP）和比特币一样都是基于数学和密码学的数字货币，但是与比特币没有真正的用途不同，XRP在Ripple系统中有主要桥梁货币和有保障安全的功能，其中保障安全的功能是不可或缺的，这要求参与这个协议的网关都必须持有少量XRP。
            <br>纪念币人物：Chris Larsen
            <br>人物国籍：美国
            <br>人物身份：瑞波币联合创始人兼CEO
            <br>人物介绍：他拥有斯坦福大学MBA学位，曾做过贷款公司，在2017年瑞波币价格最高时，他的个人资产曾达到570亿美元，一跃成为福布斯世界排名第九的富豪，财富增长所用的时间超过福布斯任何一位富豪，真验证了那句名言：“币圈一夜，人间一年。”其他类型的加密货币都试图打破银行的中心化垄断，而他的瑞波币确反其道而行之，企图和银行合作，促进银行转账支付，真是链圈一朵奇葩！
          </div>
          <div class="introtext" v-if="cointype === coins[21].cointype">
            <br>波场币介绍：波场 TRON 以推动互联网去中心化为己任，致力于为去中心化互联网搭建基础设施。旗下的波场 TRON 协议是全球最大的基于区块链的去中心化应用操作系统协议之一，为协议上的去中心化应用运行提供高吞吐，高扩展，高可靠性的底层公链支持。波场 TRON 公链宣称每秒交易速度（TPS）将超过数万，进而可以支持更多的应用场景，并且通过用户免费使用和强激励的方式，最大限度调动生态参与者的积极性，不仅可以满足线上去中心化娱乐等应用的高并发、低延迟和海量数据传输的苛刻要求，而且也给普通互联网用户最佳的去中心化用户体验。开发者可以使用波场 TRON 协议与虚拟机开发属于自己和社区的应用，使用智能合约进行分布式众筹，数字资产发行。波场 TRON 协议已经运行着包括陪我 APP，BitTorrent 等去中心化应用，活跃用户突破一亿，分布于全球超过100个国家地区。
            <br>纪念币人物：孙宇晨
            <br>人物国籍：中国
            <br>人物身份：波场币创始人
            <br>人物介绍：孙宇晨生于1990年，出生地是青海西宁，成长于广东惠州，高中时本沉迷文学成绩稳居全班倒数前十，后在高三奋勇直追，并凭借第九届新概念作文获奖契机，获得北大降分录取机会，得以进入北大。2011年，他选择出国，就读宾夕法尼亚大学。2012年即开始接触比特币社区，2013年加入Ripple并担任Ripple大中华区首席代表，帮助Ripple成功完成IDG/Accel A轮3000万美金融资，助力Ripple成为全球前三的虚拟货币系统，是全球区块链行业的资深元老。2014年，孙宇晨又创办了语音直播平台陪我APP，现已成为世界最大的中文声优声控社区。随后他又创立波场。凭借众多耀眼的成就，孙宇晨先后三次登上福布斯30位30岁以下创业者榜单，并当选为达沃斯论坛全球杰出青年。
          </div>
        </div>
        <div v-if="this.$i18n.locale == languageen">
          <div class="introtext" v-if="cointype === coins[0].cointype">
            <br>Introduction of Bitcoin:A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.
            <br>Crypto Commemorative TOKEN’s Character: Satoshi Nakamoto
            <br>Character Nationality: possibility for Japan is 40, for America is 40, and for other countries is 20
            <br>Character Identity: Bitcoin Founder，Block Chain tech pioneer
            <br>Character Intro: It is impossible to know whether Nakamoto is a person, a team or a country. At present, some people claim to be Satoshi Nakamoto, but no detailed research has been done. Let's take his image as Nakamoto for a moment. Under the background of the global financial crisis, he founded Bitcoin in an attempt to open up a decentralized currency system. At the same time, he also brought the block chain technology to the world and made the concept of decentralization deeply rooted in people's minds. The block chain technology he drew is about to break out into a new technological revolution, and he is the worthy ancestor of block chain.
          </div>
          <div class="introtext" v-if="cointype === coins[1].cointype">
            <br>Introduction of  Ethereum: The intent of Ethereum is to create an alternative protocol for building decentralized applications, providing a different set of tradeoffs that we believe will be very useful for a large class of decentralized applications, with particular emphasis on situations where rapid development time, security for small and rarely used applications, and the ability of different applications to very efficiently interact, are important. Ethereum does this by building what is essentially the ultimate abstract foundational layer: a blockchain with a built-in Turing-complete programming language, allowing anyone to write smart contracts and decentralized applications where they can create their own arbitrary rules for ownership, transaction formats and state transition functions. A bare-bones version of Namecoin can be written in two lines of code, and other protocols like currencies and reputation systems can be built in under twenty. Smart contracts, cryptographic "boxes" that contain value and only unlock it if certain conditions are met, can also be built on top of the platform, with vastly more power than that offered by Bitcoin scripting because of the added powers of Turing-completeness, value-awareness, blockchain-awareness and state.
            <br>Crypto Commemorative TOKEN’s Character:V god (Vitalik Buterin)
            <br>Character Nationality: Canada (Birthplace: Russia)
            <br>Character Identity: Ethereum Founder
            <br>Character Intro: Born in 1994, talented programmers avatar, access to computer at age 4, programming game in 12 years old by himself, knew the Bitcoin when he was 17, after touched the Bitcoin, he developed a religious passion for block chain. Then, he had dropped out of school, and devoted himself into block chain career. He started from scratch, and gathered nearly 20 partners. He invested US $100000 entrepreneurship scholarship he earned in the same year to establish the Ethereum empire. From now on, the block chain entered into the era of 2.0 smart contract. He's really a hero. Persistent, understated and speaking directly, wiping out the follow suit, he warned all Ethereum users to grow up and he did not want the ETH to become a “tulip” that people make money for speculation. He also warned people who had made fortunes with ETH that he would quit Ethereum if they were still making money from selling the ETH for showing off their wealth.
          </div>
          <div class="introtext" v-if="cointype === coins[2].cointype">
            <br>Introduction of Litecoin：Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities. Mathematics secures the network and empowers individuals to control their own finances. Litecoin features faster transaction confirmation times and improved storage efficiency than the leading math-based currency. With substantial industry support, trade volume and liquidity, Litecoin is a proven medium of commerce complementary to Bitcoin.
            <br>Crypto Commemorative TOKEN’s Character: Charlie Lee
            <br>Character Nationality: USA (Birthplace: Cote d 'Ivoire)
            <br>Character Identity: Litecoin Founder, and Former engineering director of COINBASE exchange
            <br>Character Intro.: A top student at MIT, he learned about Bitcoin from the article of the Dark Web at first, and felt the magic of Bitcoin and determined to develop his own digital currency. Frustrated with the way the Bitcoin founder first mines a large number of Bitcoin and then puts them on the market, Charlie Lee wants to create his own digital currency in a fair way. He boldly predicted that "the crypto currency will eventually replace the role of circulating money." He is also a big fan of philanthropy, donating large amounts of Litecoin to charity. His famous quote is that "Bitcoin is gold, and Litecoin is silver."
          </div>
          <div class="introtext" v-if="cointype === coins[3].cointype">
            <br>Introduction of BNB: Binance issued its own token called the Binance Coin, with BNB as the symbol. BNB runs natively on the Ethereum block chain and follows the ERC20 token standard. The token was established with a total supply of 200 million. As per our whitepaper, Binance plans to use 20% of our profits each Quarter to buyback and burn BNB, until 50% of the total BNB supply (100 million) is burned. The BNB token itself has multiple forms of utility, essentially being the underlying gas that powers the Binance Ecosystem. The current most prominent use cases include using BNB to: - Pay for trading fees on the exchange, obtaining the equivalent of a 50% discount on trades (during the first year). - Monaco has included support for Binance’s BNB token to its platform which includes the Monaco Visa Card and mobile app. - Uplive platform supports BNB to buy virtual gifts.
            <br>Crypto Commemorative TOKEN’s Character: Changpeng Zhao
            <br>Character Nationality: Canada (Birthplace: China)
            <br>Character Identity: BNB Exchange Founder
            <br>Character Intro.: In 2018, he ranked third on the rich list in the crypto currency field of Forbes, and he has boldly sold coins and set up exchanges. In just six months, the trading volume of Binance become the world's first exchange for crypto currencies. A low-profile programmer by training, Mr. Changpeng Zhao has incredible wealth without cars, yachts or watches. He fully invested Bitcoin forever, keeping only a few thousand in his bank account for his daily expenses. Leading politicians from several countries have invited him to collaborate on block chain there. He famously said that "No one can change my mind, and the possibility for me to change them is a little more."
          </div>
          <div class="introtext" v-if="cointype === coins[4].cointype">
            <br>Introduction of Retail Investors' Coin: There is no crypto currency represented by the people in reality, so there will be a Crypto Commemorative TOKEN themed by the vast number of retail investors to make up for the lack in reality. Our team hopes that there will be a retail investors themed crypto-currency issue in the real world in the near future, without hurting retail investors' hearts or institutional manipulation.
            <br>Crypto Commemorative TOKEN’s Character:Showhand Elder
            <br>Character Nationality: China
            <br>Character Identity: Salvage Operator
            <br>Character Intro.: Showhand elder is a body salvage operator. Why there are only master in the crypto currency characters, our retail investors must also have a place. Showhand elder represents the voice of many retail investors, its classic motto: "don't be frightened, just do it! All showhand! Go to find club young model if win, go back to work at sea if lose", which has been already a story to everyone’s lips. Most of our retail investors have experienced the ups and downs of life in the block chain. Block chain technology is ultimately meant to serve the vast majority of investors. The classic expression and gesture of the showhand elder have reached the heart of the people, and he deserves to become the representative of the broad retail investors.
          </div>
          <div class="introtext" v-if="cointype === coins[5].cointype">
            <br>Introduction of OmiseGO:OmiseGO is building a decentralized exchange, liquidity provider mechanism, clearinghouse messaging network, and asset-backed blockchain gateway. OmiseGO is not owned by any single one party. Instead, it is an open distributed network of validators which enforce behavior of all participants. It uses the mechanism of a protocol token to create a proof-of-stake blockchain to enable enforcement of market activity amongst participants. This high-performant distributed network enforces exchange across as- set classes, from fiat-backed issuers to fully decentralized block chain tokens (ERC-20 style and native crypto currencies). Unlike nearly all other decentralized exchange plat- forms, this allows for decentralized exchange of other block chains and between multiple block chains directly without a trusted gateway token. Markets may be able to signifi- cantly reduce spreads and encourage market assurance via decentralizing custody and increased transparency of market activity. This is achieved using smart contracts, proto-col tokens enforcing correct market behavior of orderbook matching, a new construction of Ethereum bonded external enforcement of clearinghouse activity, and commitments to historical exchange data for use with Ethereum smart contracts.
            <br>Crypto Commemorative TOKEN’s Character: Jun Hasegawa
            <br>Character Nationality: Japan
            <br>Character Identity: OmiseGo (OMG) Founder
            <br>Character Intro: His block chain project wants to be the pioneer of mobile payment in southeast Asia and aims to break the monopoly of Banks. Their slogan is simple and crude: to let you no longer need Banks! He has successfully partnered with two of the world's top 500 companies, and McDonald's of Thailand has taken the lead in accepting OMISEGO's payment services. OMISE has also worked with Chinese corporate giants Alibaba group to carry out payment business in Thailand.
          </div>
          <div class="introtext" v-if="cointype === coins[6].cointype">
            <br>Introduction of Aeternity:The overreaching functional goal of Aeternity smart contracts is to be able to execute code on the chain. That is, code execution that is verified by a miner and which can alter the state of the chain.
            <br>The design and implementation of the Aeternity smart contracts also have the following non-functional goals in the following order:
            <br>Goal 1: Contract execution should be safe
            <br>With safe contracts we mean that you can specify and automatically prove properties of your contract.
            <br>In order to achieve this we have designed a new functional language Sophia and a new safe virtual machine FTWVM.
            <br>Goal 2: Contract execution should be efficient and scale
            <br>In order to achieve a scalable solution Æternity provides State Channels and a new consensus algorithm.
            <br>To get efficient contract execution Æternity provides a very high level language for blindingly fast execution of simple contracts. For more advanced contract the Sophia language can be used. Sophia is compiled to a virtual machine that is tailored for the execution of Sophia contracts. This machine is also high level machine with instructions for operating on the chain and on Sophia data structures without the need to do explicit stack and memory management.
            <br>Goal 3: Contract execution should be cheap
            <br>The price of contract execution will ultimately be determined by miners and users, but by providing State channels, efficient ways to execute contracts, and a simple flat rate high level contract language prices should be kept low.
            <br>Goal 4. There should be a simple way to migrate from Ethereum smart contracts
            <br>By providing a version of the EVM it is easy to migrate EVM contracts to Aeternity.
            <br>Crypto Commemorative TOKEN’s Character: Yanislav Malahov
            <br>Character Nationality: Switzerland (Birthplace: Bulgaria)
            <br>Character Identity: Aeternity (AE) Founder, Ethereum Godfather
            <br>Character Intro.: He is known as the "Godfather of Ethereum", and he has already working with Vitalik Buterin before Ethereum’s birth. In the collision with Vitalik Buterin, the prototype concept of Ethereum was born. Without him, Ethereum might have been born much later, and it may not even be born. His Aeternity is known as the European version of Ethereum." Within five years, there will be winner among crypto currencies, and most of the stepping stones will be gone," he predicts boldly. Good coins drive out bad coins in 2018, and his prediction comes true further. After the financial crisis, he thinks block chain technology will be a necessary path for humanity in the future.
          </div>
          <div class="introtext" v-if="cointype === coins[7].cointype">
            <br>Introduction of NEO:NEO is a decentralized and distributed ledger protocol that digitalizes real-world assets into digital ones, enabling registration, depository, transfer, trading, clearing and settlement via a peer-to-peer network.
            <br>NEO uses e-contracts to keep record transfers of digital assets. In NEO, digital tokens generated by e-contracts function as a general underlying data that could be used for recording titles and assets like equities, creditor’s claims, securities, financial contracts, credit points, bills and currencies, and can be applied for equity crowdfunding, equity trading, employee stock ownership plans, peer-to-peer financing, loyalty programs, private equity funds, supply-chain financing, etc.
            <br>Crypto Commemorative TOKEN’s Character: Hongfei Da
            <br>Character Nationality: China
            <br>Character Identity: NEO Founder
            <br>Character Intro: People called him Uncle Da, but his real name is Huoping Song. He knew Bitcoin in 2011, and in 2013, he worked full-time on block chain technology innovation and the crypto currency community, co-founding the "Bitcoin startup camp." He is a block chain master of entrepreneurs, investors, and consumers upgrade as one of the three. He proposed the block chain 1.0 era and block chain 2.0 era. NEO was founded in 2014. Since 2015, he has been hosting the project of "NEO", using block chain technology to enable ordinary companies to conduct "digital IPO", issue equity and trade equity. First, block chain must be combined with identity authentication to comply with property rights in the physical world and to enter mainstream applications, he argues. Second, while maintaining public transparency, block chain must also protect the privacy of users in order to be accepted by users.
          </div>
          <div class="introtext" v-if="cointype === coins[8].cointype">
            <br>Introduction of USDT:A digital token backed by fiat currency provides individuals and organizations with a robust and decentralized method of exchanging value while using a familiar accounting unit. The innovation of block chains is an auditable and cryptographically secured global ledger. Asset backed token issuers and other market participants can take advantage of block chain technology, along with embedded consensus systems, to transact in familiar, less volatile currencies and assets. In order to maintain accountability and to ensure stability in exchange price, we propose a method to maintain a one to one reserve ratio between a crypto currency token, called tethers, and its associated real world asset, fiat currency. This method uses the Bitcoin block chain, Proof of Reserves, and other audit methods to prove that issued tokens are fully backed and reserved at all times.
            <br>Crypto Commemorative TOKEN’s Character: Craig Sellars
            <br>Character Nationality: America
            <br>Character Identity: Co-founder and CTO of Tether
            <br>Character Intro: The U.S. dollar is regarded as an endorsement. Each USDT of his Tether company is equal to one dollar, which brings real money into the crypto currency world. To some extent, it plays the role of centralized Central Bank, and the coinage sometimes needs some centralization. Investors don't have to worry about the volatility of the Bitcoin and Ethereum as legal tender. The USDT is truly a stable currency and a safe haven. He is the founder of legal tender digitalization, laying a solid foundation for the global 360-degree smooth circulation of legal tender.
          </div>
          <div class="introtext" v-if="cointype === coins[9].cointype">
            <br>Introduction of Petrocoin: Petrocoin is the first crypto currency issued by a sovereign state and supported by natural resources, and will be used for international payments, becoming a new way for Venezuela to finance internationally. The crypto currency would help Venezuela improve its economic difficulties and break the U.S. financial blockade. Each has a barrel of Venezuelan crude as collateral. Venezuela's plans for Petrocoin have drawn a lot of attention at home and abroad, from markets to politics.
            <br>Crypto Commemorative TOKEN’s Character: Nicolás Maduro Moros
            <br>Character Nationality: Venezuela
            <br>Character Identity: President of Venezuela and initiator of Petrocoin
            <br>Character Intro: Venezuela's economic collapse, inflation, debt, the advent of block chain helps him to see a lifesaver, so he pushed through the opposition to finance Venezuela via issuing petrodollar, becoming the first country to issue a crypto currency, one Petrocoin to a barrel of oil. On its first day of issuing, Venezuela raised $735 millions dollars. His great practice proves that block chain has the promise to save a country. At the same time, during his administration, he invited people from all over the world to come and coin mining, along with cheap electricity and government subsidies, which made Venezuela become the first choice for miners.
          </div>
          <div class="introtext" v-if="cointype === coins[10].cointype">
            <br>Introduction of Monroe:Monero is cash for a connected world. It’s fast, private, and secure. With Monero, you are your own bank. You can spend safely, knowing that others cannot see your balances or track your activity.
            <br>  Monero is a decentralized crypto currency, meaning it is secure digital cash operated by a network of users. Transactions are confirmed by distributed consensus and then immutably recorded on the block chain. Third-parties do not need to be trusted to keep your Monero safe.
            <br>  Monero uses ring signatures, ring confidential transactions, and stealth addresses to obfuscate the origins, amounts, and destinations of all transactions. Monero provides all the benefits of a decentralized crypto currency, without any of the typical privacy concessions.
            <br>  Monero is untraceable. Sending and receiving addresses as well as transacted amounts are obfuscated by default. Transactions on the Monero block chain cannot be linked to a particular user or real-world identity.
            <br>  Monero is fungible because it is private by default. Units of Monero cannot be blacklisted by vendors or exchanges due to their association in previous transactions.
            <br>Crypto Commemorative TOKEN’s Character: Riccardo Spagni
            <br>Character Nationality: South Africa
            <br>Character Identity: Monroe Founder
            <br>Character Intro: Riccardo Spagni, with a background of education in informatics and logistics, has been engaged in software development and import and export trade. In 2011, he touched the Bitcoin and started to engage in the development of block chain project in 2012. He has a wide range of interests, and he is versatile. He loves kayaking in the sea, and he loves animals very much, who keeps six dogs. He kisses with sea dog, and he is keen to make unmanned aerial vehicle and used unmanned aerial vehicle to take aerial photos. Besides, he also like to play hot go. He was so concerned about protecting users' privacy and anonymity that he created the Monroe.
          </div>
          <div class="introtext" v-if="cointype === coins[11].cointype">
            <br>Introduction of Qtum:Block chain enabled smart contracts that employ proof-of-stake validation for transactions, promise significant performance advantages compared to proof-of-work solutions. For broad industry adoption, other important requirements must be met in addition. For example, stable backwards compatible smart contract systems must automate cross organizational information logistics orchestration with lite mobile wallets that support simple payment verification (SPV) techniques. The currently leading smart contract solution Ethereum, uses computationally expensive proof-of-work validation, is expected to hard fork multiple times in the future and requires downloading the entire block chain. Consequently, Ethereum smart contracts have limited utility and lack formal semantics, which is a security issue. This whitepaper fills the gap in the state of the art by presenting the Qtum smart-contract framework that aims for sociotechnical application suitability, the adoption of formal semantics language expressiveness, and the provision of smart contract template libraries for rapid best-practice industry deployment. We discuss the Qtum utility advantages compared to the Ethereum alternative and present Qtum smart-contract future development plans for industry- cases applications.
            <br>Crypto Commemorative TOKEN’s Character: Chu Shuai
            <br>Character Nationality: China
            <br>Character Identity:Quantum Founder
            <br>Character Intro: He, a fervent believer of block chain, dropped out of school and left Alibaba to start his own block chain career. In the early days of the establishment of Bitcoin, he posted a lot of posts on Bitcoin and block chain BBS, with a total of more than 10,000 posts, and wrote the development manual of Establishing Own Block Chain From 0 to 1. Snagging the world's top block chain masters, creating the quantum chain (Qtum), which was called "the best block chain team in China and even Asia" by Vitalik Buterin. He entered Forbes China's elite list of 30 years old in 2017. His domineering motto is that "if you look for a person in history to be Satoshi Nakamoto, I think that person should be Newton or Shannon."
          </div>
          <div class="introtext" v-if="cointype === coins[12].cointype">
            <br>Introduction of BTM: Bytom is an interactive protocol of multiple byte assets. Heterogeneous byte-assets (indigenous digital currency, digital assets) that operate in different forms on the Bytom block chain and atomic assets (warrants, securities, dividends, bonds, intelligence information, forecasting information and other information that exist in the physical world) can be registered, exchanged, gambled and engaged in other more complicated and contract-based interoperations via Bytom.
            <br>Crypto Commemorative TOKEN’s Character: Jia Chang (Real name: Zhipeng Liu)
            <br>Character Nationality: China
            <br>Character Identity:Bytom Founder, Founder and CEO of 8BTC, Theoretical Researcher of block chain, Geological Engineer and Science Fiction Writer
            <br>Character Intro:With multiple identities across domains, it's hard to imagine a science fiction writer, geological engineer, being able to combine with block chain. The market value of BTM developed by him in the coin ranks in the top 50. His 8btc BBS has become the largest block chain and crypto currency BBS in China. It is rich in content and popular. His science fictions have won the “Galaxy Award”, the highest award of China science fiction. His dual identity in the field of block chain and science fiction makes the baldness, obscure and boring block chain theory become vivid and live, and the block chain sometimes needs science fiction polishing. In 2011, he gave college students investing advice: "buy Bitcoin, keep your wallet and file, and forget about it. Look again after five years."
          </div>
          <div class="introtext" v-if="cointype === coins[13].cointype">
            <br>Introduction of HT:HT (Huobi Token) is a block chain powered loyalty point system. It is the only token that Huobi officially launched. HT supports Huobi Global business and all products, such as VIP discount, HT exclusive events, trading against popular coins and "let your voice be heard".
            <br>Crypto Commemorative TOKEN’s Character: Lin Li
            <br>Character Nationality: China
            <br>Character Identity: Huobi Exchange Founder
            <br>Character Intro: Lin Li, got bachelor's degree from Tongji University, master's degree from Tsinghua University, and was ever worked in Oracle Corporation. When he first read the Bitcoin white paper in 2011, he was fascinated by the principles behind it. After a failed attempt to set up the Chinese version of Facebook's "friendship network", he was not angry or upset. Then he set up the group purchase navigation website "Renren Discount", and he gained some success. Following up a victory with hot pursuit, seizing a business opportunity, he set up Huobi of crypto currency exchange, which make a hit. With his efforts, the exchange sits firmly in the top 10. His famous motto is that "to start a business is to do what no one else dare do."
          </div>
          <div class="introtext" v-if="cointype === coins[14].cointype">
            <br>Introduction of EOS:The EOS.IO software introduces a new block chain architecture designed to enable vertical and horizontal scaling of decentralized applications. This is achieved by creating an operating system-like construct upon which applications can be built. The software provides accounts, authentication, databases, asynchronous communication, and the scheduling of applications across many of CPU cores or clusters. The resulting technology is a block chain architecture that may ultimately scale to millions of transactions per second, eliminates user fees, and allows for quick and easy deployment and maintenance of decentralized applications, in the context of a governed block chain.
            <br>Crypto Commemorative TOKEN’s Character: BM(Dan Larimer)
            <br>Character Nationality: America
            <br>Character Identity: EOS Founder, BTS Founder, and Steem Founder
            <br>Character Intro: BM is a genius of block chain technology. The market value of the his three block chain projects developed continuously in the block chain is in the top 50, especially the market value of the third project EOS reaches the top 5 before its launch, which is highly sought after by believers. He designed the EOS 21 block producers system, which is similar to the parliamentary system. It is a great innovation to combine human superior democratic political system with block chain. He is a liberal, who is liberal to the extreme, typical of the geek personality, and he argued with Satoshi and Vitalik Buterin. Satoshi answered domineeringly: Just forget it if you can’t understand, and I have no time to answer you. He has set himself a utopian mission: my life's goal is to find free market solutions that will ensure the safety of life, liberty and property for all. Give a sincere praise for his great ideal!
          </div>
          <div class="introtext" v-if="cointype === coins[15].cointype">
            <br>Introduction of IOTA:IOTA is a crypto currency for the Internet-of-Things (IoT) industry. The main feature of this novel crypto currency is the tangle, a directed acyclic graph (DAG) for storing transactions. The tangle naturally succeeds the block chain as its next evolutionary step, and offers features that are required to establish a machine- to-machine micropayment system. An essential contribution of this paper is a family of Markov Chain Monte Carlo (MCMC) algorithms. These algorithms select attachment sites on the tangle for a transaction that has just arrived
            <br>Crypto Commemorative TOKEN’s Character: David Sonstebo
            <br>Character Nationality: Norway
            <br>Character Identity: IOTA Founder
            <br>Character Intro: David Sonstebo, a bearded figure who seems to take us back to the 19th century, but he is a futurist. A person whose outward appearance is the complete opposite of his inner self. He believes that technology is the best way to improve the world from an altruistic perspective. He has passion for any technology that advances human society, which makes him a geek of technology. He has passion on the Internet of things, distributed ledgers, block chain, smart city, digital identity, electronic government management, hardware design.
          </div>
          <div class="introtext" v-if="cointype === coins[16].cointype">
            <br>Introduction of ZB:ZB token is based on block chain technology which launched by ZB Block chain Foundation, it can be used under many situation in ZB Ecology system. The purpose of it is letting the customers can obtain more authorities and creating a larger market and better service with ZB.
            <br>The total quantity of ZB for launching is 2.1 billion, there are 7.47 hundred million ZB for the customers can buy, 4 hundred million ZB are for the ZB customers insurance funds. 2.93 hundred million ZB will be used for currency exchange running and market promote, the rest of the ZB 6.6 hundred million will be used as the eco system funds.
            <br>Crypto Commemorative TOKEN’s Character: Dawei Li
            <br>Character Nationality: China
            <br>Character Identity: ZB Exchange Co-founder and ZB capital CEO
            <br>Character Intro: He is nicknamed the "old cadres of coinage". After graduating from university, Dawei Li entered the world's top 500 enterprises to work, and then engaged in management positions in a number of top 500 enterprises. The professional training of large enterprises has enabled him to accumulate rich experience in the management of high-tech enterprises. In 2012, he came across the introduction of Bitcoin on the Internet. Although he could not understand the complicated white paper, he could feel the huge market brought by the technology behind it. He resigned and entered the coinage in 2013. Unlike the rest of the practitioners of block chain, Dawei Li loves to wear a suit and tie. He does not pay attention to trumpeting the currency exchange with his life. Instead, he takes a pragmatic approach and serves users with care. He publicly stressed that "the project on the platform of the block chain tycoon may not be a good project".
          </div>
          <div class="introtext" v-if="cointype === coins[17].cointype">
            <br>Introduction of Stellar:Stellar is an open-source protocol for exchanging money or tokens using block chain technology. The platform's source code is hosted on Github.The Stellar network can quickly exchange tokens including government-based currencies with 2 to 5 second processing times. The platform is a distributed ledger maintained by a consensus algorithm, which allows for decentralized control, flexible trust, low latency, and asymptotic security. It contains an integrated Distributed Exchange for trading of assets called the SDEX
            <br>Crypto Commemorative TOKEN’s Character:Jed McCaleb
            <br>Character Nationality: America
            <br>Character Identity:eDonkey Founder,Stellar Co-Founder,Ripple Co-Founder, Mt.Gox Bitcoin Exchange Founder
            <br>Character Intro: Jed has obsessed with programming since he was a child. Programming, he thought, was like building from scratch, turning an idea into a finished product. He is surrounded by books of neuroscience and artificial intelligence. For him, the world is a wonderful place, and he doesn't fit the stereotype of many people who live in as a shut-in of coders. He chose physics as his major in the university, and it only took him a year to complete the course. For him, it takes far less than four years to learn the knowledge, so instead of wasting the next three years, he should make time to do more meaningful things, so he chose to quit school. His startup experience is rich and colorful. He started his own company in 1998, set up a game company in 2010, set up a Bitcoin exchange in 2011, and founded Ripple in 2012. Due to differences of opinion with the CEO of Ripple, He founded Stellar in 2014.
          </div>
          <div class="introtext" v-if="cointype === coins[18].cointype">
            <br>Introduction of ADA:ADA presents “Ouroboros”, the first block chain protocol based on proof of stake with rigorous security guarantees. ADA establishes security properties for the protocol comparable to those achieved by the bitcoin block chain protocol. As the protocol provides a “proof of stake” block chain discipline, it offers qualitative efficiency advantages over blockchains based on proof of physical resources (e.g., proof of work). ADA also presents a novel reward mechanism for incentivizing Proof of Stake protocols and we prove that, given this mechanism, honest behavior is an approximate Nash equilibrium, thus neutralizing attacks such as selfish mining. ADA also presents initial evidence of the practicality of our protocol in real world settings by providing experimental results on transaction confirmation and processing.
            <br>Crypto Commemorative TOKEN’s Character: Charles Hoskinson
            <br>Character Nationality: America
            <br>Character Identity: ADA Founder
            <br>Character Intro: He is the founding member of three block chain star projects, co-developers of Ethereum, Cardano and Bitshares. When he quit his lucrative job to join block chain education after knew bitcoin, everyone thought he was crazy. He developed Ethereum together with Vitalik Buterin. Due to differences of opinion with Vitalik Buterin, he set up his own company, which took advantage of the advantages of Bitcoin and Ethereum. He founded Cardano, which has integrated the block chain ecosystem of digital currencies (such as Bitcoin, Litecoin) and smart contracts (such as Ethereum and EOS). He is adamant that Wall Street will eventually bring trillions of dollars into the crypto currency market and the future will be bright.
          </div>
          <div class="introtext" v-if="cointype === coins[19].cointype">
            <br>Introduction of Dogecoin:The Dogecoin has a strategy. Instead of making money from Bitcoin, it makes good use of America's "tipping culture". The humble gesture, which is seen as a donation or worship of service providers, is also widely used on the Internet. Comparing with the expensive Bitcoin, the entry of Dogecoin is more lower, and more “adorable”. A week after the system went live, it has become the second most popular "tipping digital currency" on the U.S. Internet.
            <br>Dogecoin is very special, based on the Internet grassroots culture, and it become popular because of cute and funny. In the ever-expanding market for digital currency, Dogecoin is positioned as a niche market.
            <br>Crypto Commemorative TOKEN’s Character:Jackson Palmer
            <br>Character Nationality: Australia
            <br>Character Identity: Dogecoin Co-Founder and Former Product Manager at ADOBE
            <br>Character Intro: He is a great marketing expert. He hit it off with an American programmer who has never met him. He created the Dogecoin, which made up the blank of tipping and reward. At the same time, he perfectly combined block chain, charity and animal protection through Dogecoin, and its sentiment index exploded rapidly. His Dogecoin looks funny and barks funny, adding a sense of humor to the diffident block chain technology. Facebook has also offered an olive branch to Dogecoin, acknowledging their legal status on Facebook. The success of the Dogecoin, which peaked at $1 billion, is another example of how the grassroots can become the big cats if they try to innovate.
          </div>
          <div class="introtext" v-if="cointype === coins[20].cointype">
            <br>Introduction of Ripple:While several consensus algorithms exist for the Byzantine Generals Problem, specifically as it pertains to distributed payment systems, many suffer from high latency induced by the requirement that all nodes within the network communicate synchronously. In this work, Ripple presents a novel consensus algorithm that circumvents this requirement by utilizing collectively-trusted subnetworks within the larger network. Ripple shows that the “trust” required of these subnetworks is in fact minimal and can be further reduced with principled choice of the member nodes. In addition, Ripple shows that minimal connectivity is required to maintain agreement throughout the whole network. The result is a low-latency consensus algorithm which still maintains robustness in the face of Byzantine failures. We present this algorithm in its embodiment in the Ripple Protocol.
            <br>Crypto Commemorative TOKEN’s Character: Chris Larsen
            <br>Character Nationality: America
            <br>Character Identity: Co-Founder and CEO of Ripple
            <br>Character Intro: He has an MBA at Stanford, served as lenders. The price of Ripple was at its peak in 2017, and his personal assets reached $57 billion, making him rank ninth on the Forbes. The growth time of his wealth took the least time among any one Forbes, which truly verified that famous words: "one night of crypto currency area, one year in the world." While other types of crypto currencies have tried to break the centralized monopoly of Banks, his crypto currency has taken the opposite tack, attempting to work with Banks to promote bank transfer payments. He is a really freak of crypto currency area.
          </div>
          <div class="introtext" v-if="cointype === coins[21].cointype">
            <br>Introduction of TRON: Decentralize the Web TRON is dedicated to building the infrastructure for a truly decentralized Internet. The TRON Protocol, one of the largest blockchain-based operating systems in the world which offers scalability, high-availability, and high-throughput computing (HTC) support that serves as the foundation for all decentralized applications in the TRON ecosystem. It also provides better compatibility for Ethereum smart contracts through an innovative, pluggable smart contract platform. Since July 24th, 2018, TRON acquired BitTorrent Inc. which is an Internet technology company based in San Francisco. It designs distributed technologies that scale efficiently, keep intelligence at the edge, and keep creators and consumers in control of their content and data. Every month more than 170 million people use BitTorrent Inc. developed products. Its protocols move as much as 40% of the world's Internet traffic on a daily basis. Now TRON is one of the largest blockchain-based operating systems in the world with over 100M users.
            <br>Crypto Commemorative TOKEN’s Character: Yuchen Sun
            <br>Character Nationality: China
            <br>Character Identity: TRON Founder
            <br>Character Intro: Yuchen Sun was born in Xining, Qinghai province, and grew up in Huizhou, Guangdong province. In high school, he was ranked among the bottom ten students in the class for his literature addiction. And then, he studied harder in senior year, and won the chance of getting in Beijing University with special score preference by won the Ninth New Concept Composition Award. In 2011, he chose to go abroad and attend the University of Pennsylvania. He started to contact the Bitcoin community in 2012. In 2013, he joined Ripple and served as the Chief Representative of Ripple greater China. He helped Ripple successfully complete the IDG/Accel A round of $30 million in financing, and helped Ripple become the world's top three virtual currency system and a veteran of the global blockchain industry. In 2014, Yuchen Sun founded the voice-broadcast platform, the Accompanying Me APP, which has become the world's largest Chinese voice-controller community. Then he created the TRON. Thanks to his dazzling achievements, Yuchen Sun has been listed on Forbes' list of 30 entrepreneurs under 30 three times, and was elected as the world's outstanding youth in Davos BBS.
          </div>
        </div>
        <div v-if="this.$i18n.locale == languageko">
          <div class="introtext" v-if="cointype === coins[0].cointype">
            <br>1.Bitcoin (BTC)
            <br>소개: A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.
            <br>기념화폐 인물: Satoshi Nakamoto
            <br>인물국적: 일본일 가능성 40%, 미국일 가능성 40%, 기타 나라일 가능성 20%
            <br>신분: Bitcoin 창시자
            <br>인물소개: Satoshi Nakamoto는 한 사람인지, 하나의 팀인지, 아니면 하나의 국가인지 현재 알수 없다. 현재 어떤 사람은 자신이 Satoshi Nakamoto라고 하지만 디테일한 검증을 거치지 못하였고 잠시만 그의 형상을 중본충으로 하였다. 그는 전세계 금융위기의 배경하에 Bitcoin을 창립하였고 하나의 탈중심화의 화폐 시스템을 시도하였다. 동시에 또 블록체인 기술을 세계에 가져다 주어 탈중심화의 이념이 사람들의 마음속에 자리잡게 하였다. 그가 가져온 블록체인 기술은 곧 새로운 과학기술 혁명을 불러일으킬것이고 그는 의심할바 없이 블록체인 창시자가 될것이다.
          </div>
          <div class="introtext" v-if="cointype === coins[1].cointype">
            <br>2.Ethereum (ETH)
            <br>소개: The intent of Ethereum is to create an alternative protocol for building decentralized applications, providing a different set of tradeoffs that we believe will be very useful for a large class of decentralized applications, with particular emphasis on situations where rapid development time, security for small and rarely used applications, and the ability of different applications to very efficiently interact, are important. Ethereum does this by building what is essentially the ultimate abstract foundational layer: a block chain with a built-in Turing-complete programming language, allowing anyone to write smart contracts and decentralized applications where they can create their own arbitrary rules for ownership, transaction formats and state transition functions. A bare-bones version of Namecoin can be written in two lines of code, and other protocols like currencies and reputation systems can be built in under twenty. Smart contracts, cryptographic "boxes" that contain value and only unlock it if certain conditions are met, can also be built on top of the platform, with vastly more power than that offered by Bitcoin scripting because of the added powers of Turing-completeness, value-awareness, block chain-awareness and state.
            <br>기념화폐 인물: Vitalik Buterin
            <br>인물국적: 캐나다(출생지:러시아)
            <br>신분: Ethereum 창시자
            <br>인물소개: 1994년에 출생한 천재 프로그래머 신동이다. 4살에 컴퓨터를 알게 되였고 12살에 혼자 게임을 프로그래밍하였으며 17살에 Bitcoin을 알게 되였는데 그후 블록체인에 종교적으로 관심을 갖게 되였고 의연히 퇴학하여 블록체인 사업에 뛰여들었다. 20여명의 합작 파트너를 모집하고 자신의 젊음을 바쳐 10만 달러의 창업 장학급을 얻어 Ethereum 제국을 만들었고 그로부터 블록체인은 2.0 지능 계약시대로 들어섰다. 그는 꾸준하고 겸손하며 말이 거침이 없고 독특함을 추구하였다. 그는 모든 Ethereum 유저들이 성숙되도록 타이르고 Ethereum 사람들이 기회를 보며 돈을 불리는 “튤립”이 되는것을 바라지 않았다. 그는 Ethereum에 투자하여 부자가 된 사람들에게 만약 계속하여 Ethereum에 투자하여 번 돈을 자랑한다면 그는 Ethereum에서 탈퇴할것이라고 경고하였다.
          </div>
          <div class="introtext" v-if="cointype === coins[2].cointype">
            <br>3.Litecoin (LTC)
            <br>소개: Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities. Mathematics secures the network and empowers individuals to control their own finances. Litecoin features faster transaction confirmation times and improved storage efficiency than the leading math-based currency. With substantial industry support, trade volume and liquidity, Litecoin is a proven medium of commerce complementary to Bitcoin.
            <br>기념화폐 인물: Charlie Lee
            <br>인물국적: 미국(출생지: 코트디부아르)
            <br>신분:Litecoin 창시자, COINBASE거래소 전 프로젝트총괄
            <br>인물소개: 메사추세츠학원의 수재이다. 처음에는 심층 웹을 소개하는 문장에서 Bitcoin을 알게 되였고 Bitcoin의 신기함을 느꼈고 자신만의 디지털 화폐를 개발할 결심을 내렸다. 디지털 화폐 창시자들이 우선 대량의 자신이 창시한 화폐를 채굴한후 시장에 투입하는 모드에 아주 불만이였다. 그는 공평한 모드로 자신의 디지털 화폐를 만들려고 하였다. 그는 “가상화폐는 결국 유동화폐의 작용을 실현할것이다.”라고 대담히 예언하였다. 그는 자선사업을 열심히 하였고 대량의 Litecoin을 자선 사업에 기부하였다. 그의 명언은 “Bitcoin은 금이고 Litecoin은 은이다.”이다
          </div>
          <div class="introtext" v-if="cointype === coins[3].cointype">
            <br>4.Binance Coin(BNB)
            <br>소개: Binance issued its own token called the Binance Coin, with BNB as the symbol. BNB runs natively on the Ethereum block chain and follows the ERC20 token standard. The token was established with a total supply of 200 million. As per our whitepaper, Binance plans to use 20% of our profits each Quarter to buyback and burn BNB, until 50% of the total BNB supply (100 million) is burned. The BNB token itself has multiple forms of utility, essentially being the underlying gas that powers the Binance Ecosystem. The current most prominent use cases include using BNB to Pay for trading fees on the exchange, obtaining the equivalent of a 50% discount on trades (during the first year). Monaco has included support for Binance’s BNB token to its platform which includes the Monaco Visa Card and mobile app. Uplive platform supports BNB to buy virtual gifts.
            <br>기념화폐 인물: 자오창펑
            <br>인물국적: 캐나다(출생지:중국)
            <br>신분: Binance거래소가 창시자
            <br>인물소개: 2018년 포브스 디지털 화폐 영역 부자 순위 3위이다. 그는 대담하고 집을 팔아 화폐에 투자하였고 거래소를 열었으며 6개월만 Binance 거래소가 세계 디지털 화폐 거래량 1위인 거래소로 되게 하였다. 프로그래머 출신으로 사람이 겸손하다. 어마어마한 재산을 보유한 자오창펑은 차, 보트나 명품시계가 전부 없다. 그는 영원히 Bitcoin을 가득 지니고 있고 은행카드에는 일상생활을 할 몇천원만 넣어두고 있다. 아프리카주 여러 나라의 정치대가들은 당지에서 블록체인 합작을 하려고 그를 요청하였다. 그의 명언은: “그 누구도 나의 생각을 개변할수 없다. 내가 그들을 개변시킬 가능성이 조금 더 많을지도 모르겠다.”
          </div>
          <div class="introtext" v-if="cointype === coins[4].cointype">
            <br>5.Retail Investors Coin(RIC)
            <br>소개: 현실에서 인물을 대표로 하는 암호화 화폐는 없다. 그러므로 이런 게임속에서의 광범위한 개인 고객을 주제로 한 기념화폐로 현실속의 부족함을 보충한다. 암호화 기념화폐 팀은 멀지않은 미래에 현실속에서도 인물을 주제로한 암호화 화폐가 발행되기를 바란다. 주식시장에서 부추를 베듯 투자자가 투자금을 잃고 떠나고 곧바로 또다른 새로운 투자자가 나타나는 일도 없고 큰손이 조작하는 일도 없기를 바란다.
            <br>기념화폐 인물: 쇼하로인
            <br>인물국적: 중국
            <br>신분: 구조원
            <br>인물소개: 쇼하로인은 시체구조원이다. 왜 기념화폐 인물에는 대가만이 있어야 하는가. 우리의 부추도 반드시 한자리를 해야 한다. 쇼하로인은 많은 부추의 마음을 대표하였다. 그의 명언은 “쫄지 마라, 그냥 해라! 모두 손을 들라! 이기면 예쁜 소녀를 얻을것이고 지면 바다로 가서 일하면 된다.” 이미 유행어로 되였다. 우리같은 평범한 투자자들은 블록체인에서 인생의 희로애락을 모두 겪었다고 할수 있다. 블록체인 기술은 결국 광대한 투자자들에게 서비스할것이다. 쇼하노인의 전형적인 표정과 제스처는 이미 사람들의 마음속에 깊이 자리잡았다. 그는 많은 개인 고객의 대표가 되기에 부족함이 없다.
          </div>
          <div class="introtext" v-if="cointype === coins[5].cointype">
            <br>6.OMISEGO (OMG)
            <br>소개: OmiseGO is building a decentralized exchange, liquidity provider mechanism, clearinghouse messaging network, and asset-backed blockchain gateway. OmiseGO is not owned by any single one party. Instead, it is an open distributed network of validators which enforce behavior of all participants. It uses the mechanism of a protocol token to create a proof-of-stake blockchain to enable enforcement of market activity amongst participants. This high-performant distributed network enforces exchange across as- set classes, from fiat-backed issuers to fully decentralized block chain tokens (ERC-20 style and native crypto currencies). Unlike nearly all other decentralized exchange platforms, this allows for decentralized exchange of other block chains and between multiple block chains directly without a trusted gateway token. Markets may be able to significantly reduce spreads and encourage market assurance via decentralizing custody and increased transparency of market activity. This is achieved using smart contracts, protocol tokens enforcing correct market behavior of orderbook matching, a new construction of Ethereum bonded external enforcement of clearinghouse activity, and commitments to historical exchange data for use with Ethereum smart contracts.
            <br>기념화폐 인물: Jun Hasegawa
            <br>인물국적: 일본
            <br>신분: OMISEGO창시자
            <br>인물소개: 그의 블록체인 프로젝트는 동남아시아 지구 모바일 지불의 시작을 열었고 은행의 독점을 타파하기로 결심하였다. 그들의 구호는 아주 간단하고 직설적이다. 더이상 은행이 필요없게 하겠다! 그는 이미 성공적으로 2개의 세계 500강 기업과 합작하였다. 태국의 맥도날드가 이미 앞장서서 OMISEGO의 지불 서비스를 받아들었다. 그외에도 그의 노력하에 OMISE는 중국 기업의 우두머리인 알리그룸과 함께 태국에서 지불 업무를 펼치고 있다.
          </div>
          <div class="introtext" v-if="cointype === coins[6].cointype">
            <br>7.Aeternity (AE)
            <br>소개: The overreaching functional goal of Aeternity smart contracts is to be able to execute code on the chain. That is, code execution that is verified by a miner and which can alter the state of the chain.
            <br>The design and implementation of the Aeternity smart contracts also have the following non-functional goals in the following order:
            <br>Goal 1: Contract execution should be safe
            <br>With safe contracts we mean that you can specify and automatically prove properties of your contract.
            <br>In order to achieve this we have designed a new functional language Sophia and a new safe virtual machine FTWVM.
            <br>Goal 2: Contract execution should be efficient and scale
            <br>In order to achieve a scalable solution Æternity provides State Channels and a new consensus algorithm.
            <br>To get efficient contract execution Æternity provides a very high level language for blindingly fast execution of simple contracts. For more advanced contract the Sophia language can be used. Sophia is compiled to a virtual machine that is tailored for the execution of Sophia contracts. This machine is also high level machine with instructions for operating on the chain and on Sophia data structures without the need to do explicit stack and memory management.
            <br>Goal 3: Contract execution should be cheap
            <br>The price of contract execution will ultimately be determined by miners and users, but by providing State channels, efficient ways to execute contracts, and a simple flat rate high level contract language prices should be kept low.
            <br>Goal 4. There should be a simple way to migrate from Ethereum smart contracts
            <br>By providing a version of the EVM it is easy to migrate EVM contracts to Aeternity.
            <br>기념화폐 인물: Yanislav Malahov
            <br>인물국적: 스위스(출생지: 불가리아)
            <br>신분: Aeternity창시자, Ethereum 대부
            <br>인물소개: “Ethereum의 대부”라고 불리고 Ethereum 탄생하기 전에 이미 Vitalik Buterin과 함께 일하였다. Vitalik Buterin과의 사상 충돌에서 Ethereum의 초기 개념이 탄생하였다. 그가 없었으면 Ethereum은 더욱 늦게 탄생되였을수 있고 심지어 탄생되지 못했을수도 있다. 그의 aeternity는 유럽 버전의 Ethereum으로 불린다. 그는 “5년이내에 암호화 화폐는 승자가 나타날것이고 대부분의 디딤돌은 사라질것이다.”라고 대담히 예언하였다. 2018년 양화가 악화를 구축하여 그의 예언을 진일보 실현시켰다. 그는 금융위기를 겪은후 블록체인 기술은 사람들이 미래에 반드시 갈 길이라고 하였다.
          </div>
          <div class="introtext" v-if="cointype === coins[7].cointype">
            <br>8.NEO
            <br>소개: NEO is a decentralized and distributed ledger protocol that digitalizes real-world assets into digital ones, enabling registration, depository, transfer, trading, clearing and settlement via a peer-to-peer network.
            <br>NEO uses e-contracts to keep record transfers of digital assets. In NEO, digital tokens generated by e-contracts function as a general underlying data that could be used for recording titles and assets like equities, creditor’s claims, securities, financial contracts, credit points, bills and currencies, and can be applied for equity crowdfunding, equity trading, employee stock ownership plans, peer-to-peer financing, loyalty programs, private equity funds, supply-chain financing, etc.
            <br>기념화페 인물: 다홍페이
            <br>인물국적: 중국
            <br>신분: NEO창시자
            <br>인물소개: 업계 사람들은 다아저씨라고 부르고 본명은 송환평이다. 그는 2011년에 Bitcoin을 알았고 2013년에 블록체인 기술의 창의성, 디지털 화폐 지역사회 일에 뛰여들었고 공동하여 “비트 창업진영”을 창립하였다. 창업자, 투자자, 소비 업데이트 애호가가 하나인 블록체인 대가이다. 그는 블록체인 1.0시대, 블록체인 2.0시대를 제기하였다. 2014년에 네오를 창립하였다. 2015년부터“네오”프로젝트를 주관하기 시작하였고 블록체인 기술로 평범한 회사도 “디지털 IPO”, 주식 발행, 주식거래를 할수 있게 하였다. 그는 우선 블록체인은 반드시 신분인증과 결합하여야만 합법적으로 실제 세계의 재산권리와 맞물릴수 있고 주류 응용으로 될수 있다고 하였다. 또 그후 블록체인이 공개 투명성을 유지하는 동시에 반드시 유저의 프라이버시를 지켜야만 유저들에게 받아들여진다고 하였다.
          </div>
          <div class="introtext" v-if="cointype === coins[8].cointype">
            <br>9.USDT
            <br>소개: A digital token backed by fiat currency provides individuals and organizations with a robust and decentralized method of exchanging value while using a familiar accounting unit. The innovation of block chains is an auditable and cryptographically secured global ledger. Asset backed token issuers and other market participants can take advantage of block chain technology, along with embedded consensus systems, to transact in familiar, less volatile currencies and assets. In order to maintain accountability and to ensure stability in exchange price, we propose a method to maintain a one to one reserve ratio between a crypto currency token, called tethers, and its associated real world asset, fiat currency. This method uses the Bitcoin block chain, Proof of Reserves, and other audit methods to prove that issued tokens are fully backed and reserved at all times.
            <br>기념화폐 인물: Craig Sellars
            <br>인물국적: 미국
            <br>신분: Tether회사 공동 창시자 겸 CTO
            <br>인물소개: 달러를 이서로 하고 그의 테더 회사의 매 하나의 USDT는 일달러에 대응된다. 현실 화폐를 디지털 화폐의 세계에 가져오기에 어떤 정도에서는 중심화의 중앙은행의 캐릭터를 담담하고 있으며 화폐권도 가끔은 일정한 중심화가 필요하다. 투자는 법정 화폐 Bitcoin과 Ethereum을 법정화폐로 하였을때의 가격 파동을 걱정할 필요가 없고 USDT는 명실상부의 안정적인 화폐이고 피난처이다. 그는 명실상부의 법정 화폐 디지털화의 시조이고 법정화폐 전세계 360도 원할한 유통을 위하여 기초를 닦았다.
          </div>
          <div class="introtext" v-if="cointype === coins[9].cointype">
            <br>10.Petrocoin(PTR)
            <br>소개: Petrocoin is the first crypto currency issued by a sovereign state and supported by natural resources, and will be used for international payments, becoming a new way for Venezuela to finance internationally. The crypto currency would help Venezuela improve its economic difficulties and break the U.S. financial blockade. Each has a barrel of Venezuelan crude as collateral. Venezuela's plans for Petrocoin have drawn a lot of attention at home and abroad, from markets to politics.
            <br>기념화폐 인물: Nicolás Maduro Moros
            <br>인물국적: 베네수엘라
            <br>신분: 베네수엘라 대통령, 석유화폐 발기인
            <br>석유화폐 소개: 석유화폐는 처음으로 주권국가에서 발행하고 자연자원으로 지탱하하는 암호화 디지털 화폐이고 국제 지불에 사용되여 베네수엘라가 국제상의 융자로 되는 하나의 새로운 방식이다. 이 디지털 화폐는 베네수엘라를 도와 경제위기를 극복해 줄것이며 미국의 금융봉쇠를 타파할것이다. 매 석유코인에는 모두 베네수엘라의 한통의 원유를 실물로 저당한다. 베네수엘라의 석유 코인계획이 진행되면서 시장으로부터 정치계까지 국내외의 적지 않는 시선을 끌었다.
            <br>인물소개: 베네수엘라 경제폭락, 통화팽창, 부채가 많은 상황에서 블록체인의 출현은 그에게는 지푸라기로 보였다. 타력배중의는 베네수엘라가 석유화폐를 발행하고 융자한 최초의 디지털 화폐를 발행한 국가로 되였다. 하나의 화폐는 한통의 석유와 같다. 석유화폐가 발행한 첫날 베네수엘라는 7.35억달러를 융자하였다. 그의 위대한 실천은 블록체인이 하나의 국가를 구할수 있다는 희망을 증명하였다. 동시에 그의 집정 기간에 전세계 인민들을 초대하여 채굴하게 하였고 게다가 저렴한 전기료와 정부 보조금은 광부들이 우선적으로 선택하는 채굴지로 되게 하였다.
          </div>
          <div class="introtext" v-if="cointype === coins[10].cointype">
            <br>11. Monero (XMR)
            <br>소개: Monero is cash for a connected world. It’s fast, private, and secure. With Monero, you are your own bank. You can spend safely, knowing that others cannot see your balances or track your activity.
            <br>  Monero is a decentralized crypto currency, meaning it is secure digital cash operated by a network of users. Transactions are confirmed by distributed consensus and then immutably recorded on the block chain. Third-parties do not need to be trusted to keep your Monero safe.
            <br>  Monero uses ring signatures, ring confidential transactions, and stealth addresses to obfuscate the origins, amounts, and destinations of all transactions. Monero provides all the benefits of a decentralized crypto currency, without any of the typical privacy concessions.
            <br>  Monero is untraceable. Sending and receiving addresses as well as transacted amounts are obfuscated by default. Transactions on the Monero block chain cannot be linked to a particular user or real-world identity.
            <br>  Monero is fungible because it is private by default. Units of Monero cannot be blacklisted by vendors or exchanges due to their association in previous transactions.
            <br>기념화폐 인물: Riccardo Spagni
            <br>인물국적: 남아프리카 공화국
            <br>신분: Monero 창시자
            <br>인물소개: Riccardo Spagni는정보학과 물류학을 배운 배경이 있고 예전에 소프트웨어 개발과 수출입 무역을 한적이 있다. 2011년에 Bitcoin을 알게 되였고 2012년부터 블록체인 프로젝트 개발에 종사하였다. 흥취가 광범위하고 다재다능하며 바다에서 래프팅하는것을 즐기며 동물을 좋아하여 강아지 6마리를 키운다. 또 바다표범과 입맞추고 자신이 제작한 무인기와 무인기로 항공 촬영하는것을 즐기며 그외에도 열기구를 좋아한다. 그는 유저의 프라이버시와 익명성을 보호하는것을 아주 중요시 하기에 그가 개발한 모네로 코인은 자연히 생겨난것이다.
          </div>
          <div class="introtext" v-if="cointype === coins[11].cointype">
            <br>12. Qtum
            <br>소개: Block chain enabled smart contracts that employ proof-of-stake validation for transactions, promise significant performance advantages compared to proof-of-work solutions. For broad industry adoption, other important requirements must be met in addition. For example, stable backwards compatible smart contract systems must automate cross organizational information logistics orchestration with lite mobile wallets that support simple payment verification (SPV) techniques. The currently leading smart contract solution Ethereum, uses computationally expensive proof-of-work validation, is expected to hard fork multiple times in the future and requires downloading the entire block chain. Consequently, Ethereum smart contracts have limited utility and lack formal semantics, which is a security issue. This whitepaper fills the gap in the state of the art by presenting the Qtum smart-contract framework that aims for sociotechnical application suitability, the adoption of formal semantics language expressiveness, and the provision of smart contract template libraries for rapid best-practice industry deployment. We discuss the Qtum utility advantages compared to the Ethereum alternative and present Qtum smart-contract future development plans for industry- cases applications.
            <br>기념화폐 인물: 패트릭
            <br>인물국적: 중국
            <br>신분: Qtum창시자
            <br>인물소개: 블록체인의 열렬한 신도이고 박사를 중퇴하였으며 알리를 떠난후 자신만의 블록체인 사업을 창립하였다. Bitcoin 창립 초기에 그는Bitcoin과 블록체인 카페에서 대량으로 댓글을 달았고 누적 댓글수가 만을 넘었다. “0부터 1까지 자신의 블록체인을 건립하다”라는 개발 수첩을 저술하였다. 인터넷 세계의 탑 블록체인 대가는Qtum을 창립한후 Vitalik Buterin에 의해 “중국 심지어 아시아주 최고의 블록체인 팀”으라고 불렸다. 2017년에 포브스 중국 30세이하 엘리트 순위에 들었다. 그의 패기있는 명언은 “만약 역사에서 Satoshi Nakamoto와 대적할수 있는 사람을 찾는다면 아마 그사람은 뉴톤이나 섀넌일것이다.”이다.
          </div>
          <div class="introtext" v-if="cointype === coins[12].cointype">
            <br>13.Bytom (BTM)
            <br>소개: Bytom is an interactive protocol of multiple byte assets. Heterogeneous byte-assets (indigenous digital currency, digital assets) that operate in different forms on the Bytom block chain and atomic assets (warrants, securities, dividends, bonds, intelligence information, forecasting information and other information that exist in the physical world) can be registered, exchanged, gambled and engaged in other more complicated and contract-based interoperations via Bytom.
            <br>기념화폐 인물: 장검(본명: 유지봉)
            <br>인물국적: 중국
            <br>신분: Bytom창시자, 8BTC 카폐 창시자겸 CEO, 블록체인 이론 연구자, 지질 공정사, 공상과학소설 작가
            <br>인물소개: 크로스 오버 다중 신분이 있고공상과학작가, 지질 공정사가 블록체인과 결합할것을 상상하기 힘들것이다. 그가 개발한 바이텀 화폐권 시가 순위가 50위안이다. 그가 창립한 바비터 카페는 중국 최대의 블록체인과 디지털 화폐 카폐로 되였고 내용이 풍부하고 인기가 아주 많으며 그의공상과학소설은 연속 3년간 중국 공상과학최고상인 “은하상”을 얻었다. 블록체인과공상과학소설 영역의 이중신분은 그로 하여금 지루하고 어렵고 무미건조한 블록체인 이념을 생동하고 활발하게 변하게 하였고 블록체인도 가끔은공상과학가 윤색할 필요가 있다. 식견이 높아 2011년 대학생 투자자들에게 “비트코인을 사서 지갑안에 파일을 잘 보관한후 이 일을 잊어버려. 그리고 5년후에 다시 열어봐”라고 건의하였다.
          </div>
          <div class="introtext" v-if="cointype === coins[13].cointype">
            <br>14. Huobi Token (HT)
            <br>소개: HT (Huobi Token) is a block chain powered loyalty point system. It is the only token that Huobi officially launched. HT supports Huobi Global business and all products, such as VIP discount, HT exclusive events, trading against popular coins and "let your voice be heard".
            <br>기념화폐 인물: 이림
            <br>인물국적: 중국
            <br>신분: Huobi Token (HT) 거래소 창시자
            <br>인물소개: 이림,동제대학 본과, 청화대학 석사로 갑골문 회사에 다닌적이 있었다. 그는 2011년에 처음으로 Bitcoin 백서를 읽고 그중의 원리에 홀딱 반하였다. 중국버전의 페이스북 “우의넷”을 창립하려고 시도하였으나 실패하였다. 그에 굴하지 않고 가이드 웹사이트 “런런저”를 창반하여 작은 성과를 보았다. 이에 힘입어 사업기회를 잡아 암호화 화폐 거래소 Huobi넷을 개설하는데 성공하였다. 그의 노력하에 Huobi 거래소는 거래량이 안정적으로 10위안에 들고 있다. 그의 명언은 “창업은 다른 사람이 하지 못하는 일을 하는것이다.”이다.
          </div>
          <div class="introtext" v-if="cointype === coins[14].cointype">
            <br>15.EOS
            <br>소개: The EOS.IO software introduces a new block chain architecture designed to enable vertical and horizontal scaling of decentralized applications. This is achieved by creating an operating system-like construct upon which applications can be built. The software provides accounts, authentication, databases, asynchronous communication, and the scheduling of applications across many of CPU cores or clusters. The resulting technology is a block chain architecture that may ultimately scale to millions of transactions per second, eliminates user fees, and allows for quick and easy deployment and maintenance of decentralized applications, in the context of a governed block chain.
            <br>기념화폐 인물: BM(Dan Larimer)
            <br>인물국적: 미국
            <br>신분: EOS 창시자, BTS창시자, Steem창시자
            <br>인물소개: BM은 블록체인 기술 천재로 체인권에서 최초로 연속으로 개발한 3개 블록체인 프로젝트 시가가 모두 50위안에 있다. 특히 세번째 프로젝트 EOS는 출시하기 전에 이미 시가가 5이안에 들었고 팬들의 지지를 받았다. 그는 EOS21 노두 경선제를 디자인 하여 의회제와 비슷하고 인류의 우월한 민주 정치제도와 블록체인을 서로 결합한 위대한 창의이다. 그는 자유주의자로 자유가 극치에 달하고 전형적인 호객형 인격이다.  Satoshi Nakamoto의 패기어린 답변을 받았다. 즉 알아보지 못하면 말아라, 너를 상대할 시간이 없어이다. 그는 자신에게 유토피아적인 사명 즉 나의 인생목표는 여러분의 생명, 자유와 재산안전을 보장할수 있는 자유시장 해결방안을 찾는것이란 사명을 세웠다. 그의 위대한 이념에 진심으로 좋아요를 주고 싶다.
          </div>
          <div class="introtext" v-if="cointype === coins[15].cointype">
            <br>16.IOTA
            <br>소개:IOTA is a crypto currency for the Internet-of-Things (IoT) industry. The main feature of this novel crypto currency is the tangle, a directed acyclic graph (DAG) for storing transactions. The tangle naturally succeeds the block chain as its next evolutionary step, and offers features that are required to establish a machine- to-machine micropayment system. An essential contribution of this paper is a family of Markov Chain Monte Carlo (MCMC) algorithms. These algorithms select attachment sites on the tangle for a transaction that has just arrived
            <br>기념화폐 인물: David Sonstebo
            <br>인물국적: 노르웨이
            <br>신분: IOTA 창시자
            <br>인물소개: David Sonstebo의 얼굴에 수염이 많은 모습은 19세기로 돌아간듯한 느낌을 주지만 그는 오히려 미래주의자이다. 외형과 속은 완전히 반대되는 사람이다. 그는 기술은 이타주의의 각도에서 세계를 개선하는 최고의 방법이라고 믿는다. 그는 인류 사회를 진보시키는 임의의 기술에 아주 큰 열정을 갖고 있고 이런 열정이 그로 하여금 과학기술의 광핀이 되게 하였다. 그의 열정은 사물인터넷, 분포식 장부, 블록체인, 지혜도시, 디지털 신분, 정부관리 전자화, 하드웨어 디자인 영역으로 분포되여 있다.
          </div>
          <div class="introtext" v-if="cointype === coins[16].cointype">
            <br>17.ZB
            <br>소개: ZB는ZB Block Chain 기금회를 기초로 블록체인을 발행한 생태화폐로 ZB생태의 여러 장소에서 사용하고 유통할수 있고 유저는 ZB 생태 시스템에서 더욱 많은 이익을 얻을수 있으며 ZB 생태 모든 산업의 서비스를 개통하였다. 구체적인 응용은 투표, 공중 사탕을 접수, 회원 구매, 수수로 할인을 받을수 있다. 환매 체제는 ZB가치를 안정시켰다.
            <br>기념화폐 인물: 이대위
            <br>인물국적: 중국
            <br>신분: ZB 거래소 공동 창시자, ZB 자본 CEO
            <br>인물소개: “화폐권 원로 간부”라는 별칭이 있다. 대학 졸업후 이대위는 세계 500위 기업에서 일을 시작하였고 그후에도 여러 500위 기업에서 관리직을 맡았다. 대기업의 기업화 훈련은 그에게 풍부한 최첨단 기업 관리경험을 누적시켰다. 2012년에 우연히 인터넷에서 Bitcoin 소개를 보았다. 비록 알아보기 힘든 백서였지만 뒤의 기술이 가져다주는 거대한 시장을 무의식적으로 느꼈다. 2013년에 의연히 사직하여 화폐권에 들어갔다. 기타 블록체인 종사자들이 자유롭게 입는것과 달리 이대위는 슈트 가죽 구두를 좋아하였다. 그는 놀이같이 ZB 거래소를 홍보하는것을 중시하지 않았고 실속있는 도로를 선택하였고 유저 서비스에 공을 들였다. 그는 공개적으로 “블록체인 대가의 플랫폼이 좋은 프로젝트라고 보장할수 없다.”고 강조하였다.
          </div>
          <div class="introtext" v-if="cointype === coins[17].cointype">
            <br>18.Stellar
            <br>소개:Stellar is an open-source protocol for exchanging money or tokens using block chain technology. The platform's source code is hosted on Github. The Stellar network can quickly exchange tokens including government-based currencies with 2 to 5 second processing times. The platform is a distributed ledger maintained by a consensus algorithm, which allows for decentralized control, flexible trust, low latency, and asymptotic security. It contains an integrated Distributed Exchange for trading of assets called the SDEX
            <br>기념화폐 인물: Jed McCaleb
            <br>인물국적: 미국
            <br>인물소개: Jed 어려서부터 프래밍을 좋아했다. 그는 프래밍은 마치 평지에서 건물을 짓는것과 같이 아무것도 없는것에서 하나의 생각을 하나의 미묘한 완성품으로 만드는것이라고 하였다. 그의 주변에는 신경 과학과 인공지능 방면의 서적이 많았다. 그에게 세계는 미묘한것이고 많은 사람들의 “코드 농민”들이 “방에만 있는” 편견적인 모습과 많이 다르다. 대학에서 물리전업을 선택하였고 그는 1년만에 모든 수업을 다 배웠다. 그에게 이런 지식을 배우는것은 4년의 시간이 필요없었기에 나머지 3년이란 시간을 낭비하는 것보다 시간을 내어 더욱 의의있는 일에 쓰고 싶어서 퇴학을 선택하였다. 그의 창업 경험은 아주 풍부하고 대채로웠다. 1998년에 VeryCD를 창건한 준비를 하였고 2010년에 게임 회사를 창립하였으며 2011년에 Bitcoin 거래소를 창립하였고 2012년에 Ripple을 창립하였는데 Ripple CEO와 의견이 달라 2014년에 Stellar를 창립하였다.
          </div>
          <div class="introtext" v-if="cointype === coins[18].cointype">
            <br>19. Cardano (ADA)
            <br>소개: ADA presents “Ouroboros”, the first block chain protocol based on proof of stake with rigorous security guarantees. ADA establishes security properties for the protocol comparable to those achieved by the bitcoin block chain protocol. As the protocol provides a “proof of stake” block chain discipline, it offers qualitative efficiency advantages over blockchains based on proof of physical resources (e.g., proof of work). ADA also presents a novel reward mechanism for incentivizing Proof of Stake protocols and we prove that, given this mechanism, honest behavior is an approximate Nash equilibrium, thus neutralizing attacks such as selfish mining. ADA also presents initial evidence of the practicality of our protocol in real world settings by providing experimental results on transaction confirmation and processing.
            <br>기념화폐 인물: Charles Hoskinson
            <br>인물국적: 미국
            <br>신분: Cardano (ADA)창시자
            <br>인물소개:블록체인 스타 프로젝트 3임 원로, Ethereum,Cardano와Bitshares 개발자이다. 그가 Bitcoin을 안후 의연히 수입이 큰 일자리를 사직하고 블록체인 교육사업에 뛰여들었다. 당시 주변인들은 그가 미쳤다고 하였다. 그는VitalikButerin 공동으로 Ethereum을 개발한적이 있었는데VitalikButerin 의견이 맞지 않아 독립하였다. Bitcoin과 Ethereum의 우세를 흡수하여 Cardano를 창시하였고 디지털 화폐(Bitcoin, Litecoin)과 지능 계약(예로 Ethereum, EOS)의 블록체인 생태 시스템을 통합하였다. 그는 월가에서 결국 수만억 달러의 자금을 가지고 암호화 화폐 시장으로 들어갈것이고 미래가 아주 밝다는 확고한 생각을 가졌다.
          </div>
          <div class="introtext" v-if="cointype === coins[19].cointype">
            <br>20.Dogecoin
            <br>소개:Dogecoin은 자신만의 책략이 있다. 이것은 Bitcoin의 돈 버는 노선을 가지 않고 미국의 “팁 문화”을 잘 이용하였다. 이런것은 서비스 업계 종사자에 대한 기부나 숭배의 겸손한 자태로 보고 인터넷에서 광범위하게 사용되고 있다. 비싼 Bitcoin과 비할때 Dogecoin은 문턱이 낮고 더욱 귀엽다. 시스템이 출시된지 1주일후 Dogecoin은 이미 미국 인터넷중 두번째로 환영받는 “팁 전자 화폐”로 되였다.
            <br>Dogecoin은 아주 특별하다. 인터넷 풀뿌리 문화에서 귀엽고 엽기적은 모습때문에 하루밤 사이에 유명해졌다. 갈소록 팽창하는 전자 화폐 시장에서 Dogecoin은 니치마케팅으로 정의할수 있다.
            <br>기념화폐 인물: Jackson Palmer
            <br>인물국적: 오스트랄리아
            <br>신분: Dogecoin 공동 창시자, 전 ADOBE 회사 제품경리
            <br>인물소개: 그는 신선급 시장 마케팅 전문가이다. 본적도 없었던 미국 프로그래머와 합이 척척 맞아 Dogecoin을 창립하여 화폐권 팁 화폐의 공백을 채웠을 뿐만아니라 동시에 Dogecoin을 통하여 블록체인과 자선, 동물보호의 완벽한 결합시켜 인기가 순식간에 폭발하였다. 그의 Dogecoin은 보기에 웃기고 부르기에도 웃겨서 어려운 블록체인 기술에 유머감을 추가하였다. 페이스북도 Dogecoin에게 러브콜을 보내 Dogecoin이 페이스북에서의 합법적 지위를 승인받았다. Dogecoin의 시가의 최고봉은 10억 달러였고 그의 성공은 다시 한번 노력하고 창의적이면 지푸라기도 대가가 될수있다는것을 증명하였다.
          </div>
          <div class="introtext" v-if="cointype === coins[20].cointype">
            <br>21.Ripple(XPR)
            <br>소개: While several consensus algorithms exist for the Byzantine Generals Problem, specifically as it pertains to distributed payment systems, many suffer from high latency induced by the requirement that all nodes within the network communicate synchronously. In this work, Ripple presents a novel consensus algorithm that circumvents this requirement by utilizing collectively-trusted subnetworks within the larger network. Ripple shows that the “trust” required of these subnetworks is in fact minimal and can be further reduced with principled choice of the member nodes. In addition, Ripple shows that minimal connectivity is required to maintain agreement throughout the whole network. The result is a low-latency consensus algorithm which still maintains robustness in the face of Byzantine failures. We present this algorithm in its embodiment in the Ripple Protocol.
            <br>기념화폐 인물: Chris Larsen
            <br>신분: Ripple 공동 창시자 겸 CEO
            <br>인물소개: 그는 스탬퍼드 대학 MBA학위를 갖고 있고 대출 회사에서 일한적이 있다. 2017년 Ripple 가격이 제일 높을때 그의 개인 자산은 570억 달러에 도달하여 하루 아침에 포브스 세계 순위 9위의 부자로 되였다. 재부가 증가하는데 소요되는 시간은 포브스의 모든 부자들을 초과하였고 진정으로 “화폐권에서의 하루밤은 인간계에서의 1년이다”라는 명언을 검증하였다. 기타유형의 암호화 화폐는 모두 은행의 중심화 농단을 타파하기를 시도하였으나 그의 Ripple은 오히려 반대로 향했다. 즉 은행과 합작하기를 시도하였고 은행 계좌이체 지불을 촉진하엿으며 체인권의 하나의 걸작이다!
          </div>
          <div class="introtext" v-if="cointype === coins[21].cointype">
            <br>22.Tron(TRX)
            <br>소개: Decentralize the Web TRON is dedicated to building the infrastructure for a truly decentralized Internet. The TRON Protocol, one of the largest block chain-based operating systems in the world which offers scalability, high-availability, and high-throughput computing (HTC) support that serves as the foundation for all decentralized applications in the TRON ecosystem. It also provides better compatibility for Ethereum smart contracts through an innovative, pluggable smart contract platform. Since July 24th, 2018, TRON acquired BitTorrent Inc. which is an Internet technology company based in San Francisco. It designs distributed technologies that scale efficiently, keep intelligence at the edge, and keep creators and consumers in control of their content and data. Every month more than 170 million people use BitTorrent Inc. developed products. Its protocols move as much as 40% of the world's Internet traffic on a daily basis. Now TRON is one of the largest block chain-based operating systems in the world with over 100M users.
            <br>기념화폐 인물: 손우진
            <br>국적: 중국
            <br>신분: Tron 창시자
            <br>인물소개:손우진은 1990년에 청해 서녕에서 태여났고 광동 혜주에서 자랐으며 고중때 문학에 따져 마지막으로 10위안에 들었다. 후에 고삼때 용감히 추격하여 제9회 신개념 작문에서 동기를 얻어 북대 점수를 낮추어 모집하는 기회를 얻어 북대에 들어갔다. 2011년 그는 출국하여 빈석법니아 대학에서 공부하였다. 2012년 Bitcoin 사회를 알게 되였고 2013년에 Ripple에 가입하여 Ripple 대중화구역 수석대표를 맡아 Ripple을 도와 IDG/Accel A 3000만 달러 융자를 완성하였다. 또한 Ripple이 전세계 3위안의 가상화폐 시스템으로 되는것을 도왔고 전세계 블록체인 업계의 원로이다. 2014년 소우진은 또 언어 직캠 플로폼 페이워 앱을 창립하였다. 현재에는 이미 세계 최대의 중국어 성우 소리 제어 사회를 형성하였다. 그후 그는 또Tron을 창립하였다. 여러가지 눈부신 성과로 인하여 손우진은 선후로 3번 포보스 30명 30세 이하의 창립자 순위에 올랐고 다보스 카세 전세계 걸출한 청년으로 당선되였다.
          </div>
        </div>
        <div class="coinImgs">
          <div v-for="(coin, index) in cointypes[cointype].types" :key="index">
            <div class="intro_text">
              {{coin.value}}{{$t('value')}}{{$t(coin.cointype)}}{{"       "}}{{$t('amount')}}:{{coin.amount}}
            </div>
            <div class="intro_picture" v-if="coin.type == 1">
              <img :src="coin.coinurl" alt="" />
            </div>
            <div class="intro_picture_coin" v-if="coin.type == 2">
              <img :src="coin.coinurl" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
const allcoins = require("@/assets/coins.json");
const allcointypes = require("@/assets/cointypes.json");
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default {
  name: 'introduction',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      coins: allcoins,
      cointypes: allcointypes,
      coin: {},
      cointype: "BTC",
      languagezh: "zh",
      languageen: "en",
      languageko: "ko",
    }
  },
  created () {
    this.cointype = this.$route.params.cointype;
    for (const typeid in this.coins) {
      const type = this.coins[typeid];
      if (type.cointype === this.cointype) {
        this.coin = this.coins[typeid];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .back{
    color:#4a4a4a;
  }
  .intro_text{
    text-align:center;
    font-size: 18px;
  }
  .intro_picture{
    width: 100%;
  }
  .intro_picture_coin{
    width: 60%;
    margin-left: 20%;
  }
  .coinImgs {
    background-image:url("http://www.deaso40.com/jmjnb/修改图/怎么玩背景.gif");
    background-repeat:no-repeat;
    background-size: 100% 100%;
    text-shadow:1px 1px 1px #000;
    color: #fff;
  }
</style>
