import type { OralStoryParagraph } from "@/types";

export const oralStories: OralStoryParagraph[] = [
  {
    id: "story-001",
    speakerName: "王德顺（已故，时年81岁受访）",
    speakerRole: "井下采煤工 / 1954年入矿",
    era: "1950年代",
    text: "我下井那年才17岁，父亲托了远房亲戚才说上的工。领的第一个东西就是这电石灯——黄铜壳子，比我手掌还沉。老师傅跟我说，电石这东西遇水就炸，跟瓦斯更是碰不得。有一回我水仓盖没拧紧，滴了两滴水进去，噗的一下灯顶蹿出半尺火苗子，眉毛都燎没了。那会儿谁不怕？可一家老小六张嘴等着吃饭，怕也得下。",
    linkedEquipmentIds: ["eq-001"],
    thumbnail:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20miner%20carbide%20lamp%20brass%20aging%20patina%20rust%20dark%20industrial%20background%20black%20and%20white%20photography%20archive&image_size=square",
  },
  {
    id: "story-002",
    speakerName: "李桂兰（78岁受访）",
    speakerRole: "矿灯房充电工 / 1962年入矿",
    era: "1960年代",
    text: "矿灯房是全矿唯一全是女工的地方，24小时三班倒。每盏灯都有号，跟矿工的工牌对得上。谁要是下井前忘了领灯，全矿的喇叭都会喊他名字。电池是铅酸的，又沉又容易漏液，我手上的疤全是硫酸烧的。有一回一个采煤班长来退灯，眼圈红着说他徒弟瓦斯超限没跑出来，那盏灯我擦了三遍，最后锁进了封存柜——再也没人领过。",
    linkedEquipmentIds: ["eq-002", "eq-006"],
    thumbnail:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20rechargeable%20miner%20safety%20lamp%20battery%20operated%20steel%20casing%20rubber%20cracked%20worn%20industrial%20dark%20moody%20photography&image_size=square",
  },
  {
    id: "story-003",
    speakerName: "赵大山（83岁受访）",
    speakerRole: "放炮员 / 1958年入矿",
    era: "1960-70年代",
    text: "放炮这活儿，胆大的干不了，胆小的也干不了，得是心细如针的人。摇炮机我摇了二十多年，手摇那一下之前，得在脑子里过三遍：人撤干净了吗？警戒设了吗？雷管对号了吗？有一回我清点雷管，发现少了两发——吓得浑身冷汗。查了整整一夜，原来是个小青年想拿回去吓唬他家弟弟。那小子被我扇了一耳光，这辈子我头回动手打人——那雷管响了，半条街都没了。",
    linkedEquipmentIds: ["eq-003"],
    thumbnail:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20mining%20blasting%20machine%20detonator%20plunger%20rusty%20metal%20box%20industrial%20dark%20background%20dramatic%20lighting&image_size=square",
  },
  {
    id: "story-004",
    speakerName: "刘长河（74岁受访）",
    speakerRole: "掘进工 / 1969年入矿",
    era: "1970年代",
    text: "风镐那玩意儿，17斤，我举了八年。一开始一个班下来，胳膊肿得跟馒头似的，吃饭拿筷子都哆嗦。干久了就麻木了——不光胳膊，耳朵也麻。我们掘进队十个人，有八个耳朵背，说话全靠喊。到后来机器一停，脑壳里还嗡嗡响。1985年评职业病，我们队七个矽肺一期，我也是其中一个。大夫说肺里全是煤灰结节，洗不掉了。",
    linkedEquipmentIds: ["eq-004"],
    thumbnail:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pneumatic%20jackhammer%20mining%20rock%20drill%20steel%20rusted%20heavy%20machinery%20dark%20industrial%20warehouse%20lighting&image_size=square",
  },
  {
    id: "story-005",
    speakerName: "孙保国（79岁受访）",
    speakerRole: "电机车司机 / 1960年入矿",
    era: "1960-80年代",
    text: "窄轨上跑的小矿车，1.2吨的翻斗，我开过整整25年。那轨道是真颠，钢轨接缝处咯噔咯噔，一天跑下来，五脏六腑都挪了位。最险的一次是1974年冬，铁轨结了薄冰，我拉着12车煤下坡，刹车打滑——眼睁睁看着车往尽头冲。最后我跳了车，腿撞在道岔上断了，住了半年院。矿里给我评了二等功，可这条腿到现在阴雨天还疼。",
    linkedEquipmentIds: ["eq-005"],
    thumbnail:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=small%20rail%20mine%20cart%20tipper%20wagon%20rusty%20iron%20weathered%20old%20mining%20equipment%20dark%20dramatic%20moody&image_size=square",
  },
  {
    id: "story-006",
    speakerName: "陈建国（71岁受访）",
    speakerRole: "瓦斯检查员 / 1972年入矿",
    era: "1970-90年代",
    text: "瓦检员号称\"井下哨兵\"，可这哨兵不好当。每天背个瓦斯检定器，一个工作面一个工作面走，一路走一路抽气读数。1979年有天我在西翼工作面测出来瓦斯2.4%——规定上限是1%啊。我当即下令撤人，跟采煤队长大吵一架，他说我耽误生产。我把检定器往他面前一拍：要么停工，要么你签字，人死了我找你偿命。那天工作面停了三个小时通风。后来有人跟我说，前一天另一个矿就因为瓦斯超限炸了，死了二十多个。",
    linkedEquipmentIds: ["eq-006", "eq-002"],
    thumbnail:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20gas%20detector%20interferometer%20methane%20tester%20brass%20glass%20tube%20mining%20safety%20equipment%20dark%20background&image_size=square",
  },
];
