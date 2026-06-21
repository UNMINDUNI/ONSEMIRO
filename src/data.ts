import { Character, FloorData, InstagramPost } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'dongjin',
    name: '이동진 (DJ Lee)',
    role: '온세미로 프라이빗 짐 원장 (7F) / 1201호 입주민',
    age: 33,
    gender: 'M',
    height: '190cm',
    mbti: 'ESFP',
    enneagram: '8w9',
    visualBio: '압도적인 근육질 체구와 구릿빛 피부, 숱 많은 짧은 흑발에 깊은 바다 같은 특유의 심해 눈매를 가진 상남자.',
    textBio: '겉보기에는 무뚝뚝하고 차가워 보여 사람들을 주춤하게 만드나, 속은 깊고 따뜻한 순정파로 반려묘 길동이 앞에서는 눈에서 꿀이 떨어지는 반전 매력의 소유자. 1층 살롱의 지호를 친동생처럼 아끼며, 잔소리는 하면서도 그가 주는 와인은 순순히 마신다.',
    temperament: '대외적으로는 말수가 적고 단호한 존댓말 단문 직구를 구사하나, 내면은 지극히 인간적이고 정이 많다. 친한 사이에는 다소 거칠고 퉁명스러운 반말과 츤데레식 챙겨주기가 특징.',
    instagramHandle: '@DJ_Lee_Gym',
    hashtags: ['#오운완', '#온세미로짐', '#한강뷰헬스', '#제육은단백질', '#길동이집사'],
    residency: '12F 1201호 (블랙&그레이 톤, 미니멀 홈짐, 절제된 금욕주의 하우스)',
    routine: [
      'AM 05:30 - 한강변 10km 러닝 및 카오모지 전송 연습',
      'AM 07:00 - 7F 짐 오픈 및 모닝 이온음료 원샷',
      'PM 12:00 - 백반집 이모의 특제 고기반찬 제육볶음 흡입',
      'PM 11:00 - 마포 한강공원 바람 쐬기 또는 심야 샌드백 훈련'
    ],
    dialogueLines: [
      "입주민이야? 한번 와봐. 자세 완전 무너졌어.",
      "입주민이세요? 자세 봐드릴게요. 등록해보세요.",
      "제육은 고결한 단백질이자 아미노산 공급원입니다. 반박 안 받습니다.",
      "길동아, 아빠 주스 바 갔다 올게... 우쭈쭈... 🐾"
    ]
  },
  {
    id: 'jiho',
    name: '김지호 (Adrien Kim)',
    role: '살롱 드 아드리앙 원장 (1F) / 1202호 입주민',
    age: 31,
    gender: 'M',
    height: '185cm',
    mbti: 'ENTP',
    enneagram: '7w8',
    visualBio: '이국적이고 화려한 혼혈풍 외모, 부드러운 담갈색 중단발 웨이브 헤어가 어깨를 감싸는 세련된 미남.',
    textBio: '1층 프리미엄 살롱을 운영하며 예술가적 고집과 화려한 플러팅 실력을 뽐낸다. 유희와 인싸 라이프를 즐기며, 틈만 나면 동진을 끌어들여 재밌는 이벤트를 꾸민다. 프랑스식 무드와 헤어 스케치를 사랑한다.',
    temperament: '능글맞고 위트 넘치며, 불어 단어를 곳곳에 섞어 쓴다. ("C\'est magnifique!", "Mon ami!"). 누구에게나 친근하게 터치하며 말을 거는 스타일.',
    instagramHandle: '@Adrien_Jiho_Salon',
    hashtags: ['#SalonDeAdrien', '#성수동미용실', '#인생머리', '#와인과가위질', '#온세미로'],
    residency: '12F 1202호 (딥 우드 앤티크 인테리어, 프렌치 감성 와인 캐비닛)',
    routine: [
      'AM 09:00 - 크루아상과 에스프레소 브런치 (살롱 1층 커피 스탠드)',
      'AM 10:00 - 살롱 드 아드리앙 가위질 예술 시작',
      'PM 08:30 - 한강 전망 발코니에서 선셋 와인 한 잔',
      'PM 10:00 - 동진의 1201호 초인종 누르고 시비 걸기'
    ],
    dialogueLines: [
      "우리 건물 입주민이시죠? 머리끝이 상했네요, 미련도 같이 쳐 드릴까요?",
      "C'est magnifique! 당신의 정수리에 우아한 영혼을 불어넣었습니다, 내 아틀리에에 온 걸 환영해요.",
      "동진 형, 오늘 PT샵 끝나고 샤토 마고 한 병 어때? 제육만 먹지 말고 마리아주를 누려봐~",
      "어머, 길동이 묘르신 오늘도 윤기가 철철 흐르시네요? 미용실 서비스 해드릴까~"
    ]
  },
  {
    id: 'gildong',
    name: '길동이 (Gildong)',
    role: '온세미로 빌딩 명예 소장 / 1201호 서열 0위',
    age: 10,
    gender: 'Cat',
    visualBio: '하얗고 품위 어린 턱시도를 걸친 듯 가슴팍만 하얗고 등은 윤기 나는 검은 털을 가진 10살 묘르신.',
    textBio: '동진의 1201호와 7층 프라이빗 짐을 지키는 진정한 왕. 가끔 헬스장에 발걸음을 옮겨 덤벨 냄새를 킁킁 맡거나 신기한 듯 요가 매트 위에서 그루밍을 펼친다. 온세미로 전 입주민들의 힐링 캐릭터.',
    temperament: '도도하고 품위가 넘치며 헤드번팅으로 친분을 표시한다. 동진마저 길동이 눈치를 본다.',
    instagramHandle: '@Gildong_The_Cat',
    hashtags: ['#길동이', '#묘르신', '#턱시도냥', '#헬스장지킴이', '#동진이집사'],
    residency: '12F 1201호 안방 한가운데 전용 쿠션 (동진 침대 침범 가능)',
    routine: [
      'AM 07:05 - 동진 등 밟고 일어나서 아침 식사 독촉',
      'AM 10:00 - 7층 짐 트레드밀 모터 진동 관측 및 그늘 수면',
      'PM 03:00 - 1층 살롱 아드리앙 원장실 소파 원정 수면',
      'PM 09:00 - 귀가 후 동진의 지문 지문 락 소리 맞춰 마중하기'
    ],
    dialogueLines: [
      "야옹- (덤벨에 몸을 비비며 꼬리를 세운다)",
      "우르릉... 하악! (정현수가 귀엽다고 너무 격하게 만지려 하자 호통친다)",
      "골골골... (U의 따뜻한 손길에 눈을 지그시 감는다)",
      "메- 아오. (동진이 닭가슴살 캔을 땄다는 소리)"
    ]
  },
  {
    id: 'sub_npcs',
    name: '온세미로 식구들',
    role: '서브 인물들 모음',
    age: 0,
    gender: 'Other',
    visualBio: '온세미로 빌딩을 가득 채우는 개성 만점 식구들.',
    textBio: '아름, 우진, 현수, 백반집 이모 등 언제나 왁자지껄 동네 극장을 만드는 개성적인 주민들.',
    temperament: '활기차고 빌딩의 생동감을 한껏 끌어올리는 감초 캐릭터들.',
    instagramHandle: '@Onsemiro_People',
    hashtags: ['#성수동이웃', '#온세미로사람들', '#은신처', '#백반집'],
    residency: '온세미로 빌딩 곳곳',
    routine: [],
    dialogueLines: []
  }
];

export const FLOOR_DETAILS: FloorData[] = [
  {
    floor: '12F',
    title: 'LUXURY PENTHOUSE',
    subtitle: '한강의 하늘을 독점하는 최고층 펜하우스',
    description: '한강 위 하늘을 소유하는 단 두 세대만을 위한 진정한 프라이빗 하이엔드 주거 존. 1201호에는 금욕적인 다크-클래식 미니멀리스트 이동진 원장이, 1202호에는 우아하고 앤티크한 웜우드 인테리어의 김지호 원장이 마주하여 거주하고 있습니다.',
    detailMapTitle: '12F Residential Layout',
    bannerText: '현관 도어락 지문인식기: "띡-", 묵직한 푸시풀 문, 오토락 모터음: "위잉-철컥"',
    hashtags: ['#스카이뷰', '#펜트하우스', '#이웃사촌', '#1201호', '#1202호'],
    zones: [
      {
        id: '1201',
        name: '1201호 (이동진 주거)',
        englishName: 'Unit 1201 : Solid Metal Gym',
        description: '블랙 앤 그레이의 무채색 메탈 톤 공간.',
        details: '거실 한가운데 고가의 독립형 풀업 바와 딥스 테이블이 놓여 있으며 극강의 서늘한 정돈감을 느낄 수 있습니다. 정갈한 부엌 구석에는 닭가슴살 수하물 상자들과 프로틴 홀릭 쉐이커들이 칼각으로 줄지어 있습니다.',
        relatedCharacterId: 'dongjin'
      },
      {
        id: '1202',
        name: '1202호 (김지호 주거)',
        englishName: 'Unit 1202 : Classic Atelier & Cellar',
        description: '앤티크 프렌치 감성의 공간.',
        details: '이탈리아산 월넛 가구, 앤티크 패브릭 소파와 은은한 황동 스탠드 조명이 공기를 감쌉니다. 한쪽 벽면에는 아드리앙 원장이 엄선한 스페인-프랑스 빈티지 와인들이 최적의 상태로 에이징되는 와인셀러가 위용을 자랑합니다.',
        relatedCharacterId: 'jiho'
      },
      {
        id: '12_terrace',
        name: '가벽 공유 프라이빗 테라스',
        englishName: 'Shared Private Terrace',
        description: '두 세대의 거실과 직접 통하는 야외 발코니.',
        details: '중앙에 얇고 프라이빗한 슬라이딩 투명 가벽이 설치되어 있습니다. 밤이 되면 지호가 걸터앉아 와인 글라스를 매달고 동진에게 말을 걸고, 동진은 길동이를 품에 안고 덤덤하게 대답하는 은성(銀星) 아래 온세미로 명소입니다.'
      }
    ]
  },
  {
    floor: '8F-11F',
    title: 'RESIDENTIAL UNITS',
    subtitle: '감각적인 라이프스타일을 위한 오피스텔 존',
    description: '서늘한 무광 대리석 바닥이 깔린 격조 높은 한강뷰 주거공간 (U 거주지). 현관문 너머 맨발로 찰박이는 소리가 고급스럽게 나며, 거실의 최신 스마트 월패드와 아일랜드 주방이 세련미를 이룹니다.',
    detailMapTitle: 'Typical Residential Plan',
    bannerText: '4룸 구조, 프라이빗 소형 테라스 및 브론즈 슬라이딩 드레스룸 구비',
    hashtags: ['#무광대리석', '#스마트홈', '#드레스룸', '#찰박찰박', '#U_Suite'],
    zones: [
      {
        id: 'res_living',
        name: '무광 대리석 거실 & 스마트 월패드',
        englishName: 'Living Room',
        description: '고급 수입 가구와 완벽한 방음 설계.',
        details: '차가운 듯 부드러운 화이트 무광 대리석 타일은 맨발로 걸을 때마다 특유의 정갈하고 기분 좋은 마찰감("찰박-")을 선사합니다. 최첨단 스마트 월패드로 빌딩 7F 및 1F 잔여 예약 대기를 한눈에 확인 가능합니다.'
      },
      {
        id: 'res_dress',
        name: '브론즈 슬라이딩 드레스룸',
        englishName: 'Bronze Dressing Room',
        description: '센서 조명과 시스템 은신처 옷장.',
        details: '은은한 골드브론즈 계열의 슬라이딩 글라스 도어가 열리면 매립형 조명이 물 흐르듯 켜지는 격조 높은 아일랜드 형 수납공간.'
      },
      {
        id: 'res_terrace',
        name: '프라이빗 소형 테라스',
        englishName: 'My Terrace',
        description: '오직 입주민만을 위한 한강의 작은 쉼터.',
        details: '바닥에 방수 처리된 티크 나무 데크가 누워 있고, 간이 야외 티테이블이 있어 새벽이나 깊은 밤, 홀로 성수 한강공원의 물비린내와 불빛을 즐길 수 있습니다.'
      }
    ]
  },
  {
    floor: '7F',
    title: 'ONSEMIRO PRIVATE GYM',
    subtitle: '한강의 파노라마와 함께 한계를 넘는 퍼스널 짐',
    description: '"당신의 한계를 정의하지 마십시오. 나머지는 제가 책임집니다." 마포/성수 최고로 꼽히는 완벽한 한강 파노라마 뷰 피트니스. 단호하고 우직한 이동진 원장의 하드 트레이닝과 고품격 프라이빗 샤워실, 그리고 길동이의 온화한 순찰이 있는 클럽.',
    detailMapTitle: '7F Detailed Layout Map',
    businessHours: '월~금 07:00 ~ 23:00 / 토 09:00 ~ 13:00 (일요일 휴무)',
    specialNote: "⚠️ 안내: '묘르신' 길동이가 센터 매트 위를 무단 횡단하거나 트레드밀 모터 위에 졸고 있을 수 있으니 운동 시 조심하세요.",
    instagramUrl: 'https://instagram.com/DJ_Lee_Gym',
    instagramHandle: '@DJ_Lee_Gym',
    hashtags: ['#오운완', '#온세미로짐', '#한강뷰헬스', '#제육은단백질', '#길동이집사'],
    bannerText: '⭐ 100% 철저 회원제 보장, 국가대표 피트니스 에디션 기구 셋팅 완료',
    managerId: 'dongjin',
    zones: [
      {
        id: 'cardio',
        name: 'Cardio Zone (카디오 존)',
        englishName: 'Cardio Zone',
        description: '한강이 수평선처럼 펼쳐지는 최신형 러닝 트랙 가상화.',
        details: '세계적 피트니스 사 탑티어 디바이스 라인업. 천국 계단(클라임밀) 3대와 리클라이너 트레드밀이 통유리에 면해 있어, 성수대교 불빛을 보며 무아지경 유산소 레이스를 누릴 수 있습니다.',
        coordinateMark: { x: 20, y: 35 }
      },
      {
        id: 'weight',
        name: 'Weight Training Area (웨이트 존)',
        englishName: 'Weight Training',
        description: '명장들의 손을 탄 검정 덤벨과 강철 머신.',
        details: '파운드 단위를 다루기 무서울 정도의 묵직한 하이엔드 중량 구역. 이동진 원장의 날카로운 전신 스캔이 가동되는 심장부로, 잘못된 견갑골 움직임을 보이면 즉각 다가옵니다. ("자세 다 깨졌습니다. 그렇게 드시면 관절 나갑니다.")',
        coordinateMark: { x: 50, y: 30 }
      },
      {
        id: 'yoga',
        name: 'Yoga Studio (요가 스튜디오)',
        englishName: 'Yoga Studio',
        description: '통유리를 뚫고 들어오는 새벽빛과 아로마 테라피.',
        details: '천연 피톤치드 편백 데크 바닥과 잔잔한 매트들이 설치되어 있습니다. 길동이가 가장 좋아하는 안식 보금자리로 간혹 그루밍 방해 금지령이 내립니다.',
        coordinateMark: { x: 85, y: 30 }
      },
      {
        id: 'juice_bar',
        name: 'Healthy Juice Bar (주스 바)',
        englishName: 'Juice Bar',
        description: '근합성을 극대화시키는 프리미엄 보충 아지트.',
        details: '이동진 원장이 직접 해외 맥주 효모와 바나나, 청청 베리를 황금비율로 블렌딩한 시그니처 "동진 쉐이크"를 회원에게 한정 제공하는 바 테이블. 제육볶음은 포장이 안 됩니다.',
        coordinateMark: { x: 57, y: 65 }
      },
      {
        id: 'amenities',
        name: 'Premium Amenities (락커 및 샤워실)',
        englishName: 'Amenities',
        description: '지문인식 개인 비스포크 락커, 1인 1실 호텔식 정밀 샤워.',
        details: '타사 공용 샤워장과 달리 짙은 그레이 석조 벽체로 마감된 완벽한 1인 독립 공간. 다이슨 에어랩 복합 라인이 파우더룸 테이블에 기본 빌트인되어 있습니다.',
        coordinateMark: { x: 74, y: 65 }
      }
    ]
  },
  {
    floor: '3F-6F',
    title: 'OFFICE FLOORS',
    subtitle: '성수/마포의 에너지와 창의성이 도는 워킹 지구',
    description: 'IT 혁신 스타트업, 선도적인 디자인 에이전시, 하이엔드 독립 출판 브랜드들이 한데 모인 역동적인 첨단 세대 기업 존. 오픈 라운지와 방음 부스, 한강 조망 공용 브레이크 룸을 갖추었으며, 6층에는 헬스장 최약체로 불리는 김 과장(40대)이 일하는 회사도 있습니다.',
    detailMapTitle: 'Strategic Workspace Framework',
    bannerText: '디자인 에이전시 및 AI 벤처 기업 다수 입점',
    hashtags: ['#스타트업', '#크리에이티브', '#테크허브', '#김과장일터', '#코워킹'],
    zones: [
      {
        id: 'meeting',
        name: '유연한 스타트업 오피스 & 회의실',
        englishName: 'Flexible Meeting Room',
        description: '아이디어가 튀어나오는 크리에이티브 공간.',
        details: '높낮이 전동 데스크와 원격 화상회의용 돌비 서라운드 시스템 완비. 벽체 전체가 아이디어를 휘갈길 수 있는 글라스 보드로 설계되었습니다.'
      },
      {
        id: 'breaktime',
        name: '입주사 공용 쉼터 [Break Area]',
        englishName: 'Break Room',
        description: '네스프레소 타워와 수면 캡슐을 내장한 휴게 공간.',
        details: '야근하는 개발자들을 위해 특수 수면 캡슐 리클라이너 2대가 수줍게 자리합니다. 7F 짐의 쉐이크 배달도 잦습니다.'
      }
    ]
  },
  {
    floor: '2F',
    title: 'F&B PLAZA',
    subtitle: '일과 삶을 지탱하는 빌딩 주민들의 성지',
    description: '입주민들과 근처 트렌디한 피플들의 최고 성지. 성수동 최강의 브런치 살롱&포차 탭룸인 \'은신처\'와 엄격한 서열 1위 이모님이 뚝딱 차려주는 집밥의 최고봉 \'백반집\'이 상주해 있습니다.',
    detailMapTitle: '2F Food Court Map',
    bannerText: '🔥 백반집 서열 1위 이모님: "동진이는 고기 곱빼기, 지호는 기생오라비처럼 성의 있게"',
    hashtags: ['#은신처', '#백반집', '#제육최상위', '#기생오라비와가위질', '#성수맛집'],
    zones: [
      {
        id: 'eunshin',
        name: '브런치 & 펍 [은신처]',
        englishName: 'Eunshincheor Brunch & Pub',
        description: '낮에는 화창한 미라클 브런치, 밤에는 네온빛 감성 펍.',
        details: '지호 원장이 살롱 시술 후에 VIP 고객들과 샴페인 글라스를 부딪치는 최애 플레이스. 한강 테라스 브런치로 SNS에서 입소문을 탔습니다.'
      },
      {
        id: 'baekban',
        name: '엄마의 한 상 [백반집]',
        englishName: 'Baekban Restaurant',
        description: '오동통한 제육볶음과 가자미구이가 수북이 나오는 진짜 집밥.',
        details: '50대 최고의 한 손 요리 명인 이모님의 주방. 이동진의 단백질 원천인 무한 제육 리필의 아지트이자 지호를 향해 "아이고 저 이쁜 기생오라비 또 국물 남긴다"라며 등을 시원스레 쳐주시는 구수한 명소.'
      }
    ]
  },
  {
    floor: '1F',
    title: 'SALON DE ADRIEN',
    subtitle: '당신의 상상 속 최고의 예술적 비주얼을 발현하는 살롱',
    description: '"C\'est magnifique! 당신의 일상에 예술적인 터치를 더해드립니다." 화려하고 능청스러운 감각의 소유자 아드리앙(김지호) 원장과 특등 수석 디자이너 윤아름, 귀여운 보조 박우진이 머무는 100% 예약제 헤어 아트 크루 살롱.',
    detailMapTitle: '1F Salon Interior Architecture',
    businessHours: '화~일 10:00 ~ 20:00 (매주 월요일 휴무)',
    specialNote: '🚗 방문 고객 특전: 100% 정교 발렛 파킹 무료 전원 지원 (입주민 전용 카드 키 및 방문증 소지 시 초고속 우대)',
    instagramUrl: 'https://instagram.com/Adrien_Jiho_Salon',
    instagramHandle: '@Adrien_Jiho_Salon',
    hashtags: ['#SalonDeAdrien', '#성수동미용실', '#인생머리', '#와인과가위질', '#온세미로빌딩'],
    bannerText: '✂️ 최고 럭셔리 프랑스 수입 비건 스칼프 케어 앰플 라인 단독 입점',
    managerId: 'jiho',
    zones: [
      {
        id: 'reception',
        name: 'Grand Reception (리셉션)',
        englishName: 'Grand Reception',
        description: '루브르 박물관 모티브 앤티크 대리석 웰컴 데스크.',
        details: '프랑스 파리의 한 고택에서 공수해 온 대형 아치 구리 거울과 마호가니 리셉션 테이블이 있습니다. 은은한 로즈 에 플뢰르 향수가 후각을 포근하게 자극합니다.',
        coordinateMark: { x: 74, y: 70 }
      },
      {
        id: 'main_styling',
        name: 'Main Styling Area (스타일링 구역)',
        englishName: 'Main Styling Area',
        description: '프라이버시를 위해 2.5m 압도적 상호 간격을 둔 스포트라이트 존.',
        details: '지호 원장과 사자 갈기도 빗 하나로 얌전하게 제압하는 윤아름(29) 디자이너가 은빛 가위질 장관을 벌이는 무대. 바닥엔 머리카락이 떨어지는 일 없이 박우진(23) 어시스턴트가 칼같이 쓸어냅니다.',
        coordinateMark: { x: 25, y: 40 }
      },
      {
        id: 'vip_room',
        name: 'VIP Private Room (프라이빗 룸)',
        englishName: 'VIP Room',
        description: '최방음 설계 극비 하이엔드 1:1 두피 마사지 스테이션.',
        details: '안개가 은은하게 자욱해 무아지경을 느끼게 하는 고급 크레들 샴푸대 배치. 프라이빗 소셜 살롱 토크나 정교한 옴브레 시술이 비밀스럽게 오갑니다.',
        coordinateMark: { x: 90, y: 35 }
      },
      {
        id: 'coffee_stand',
        name: 'Adrien Coffee Stand (바 스탠드)',
        englishName: 'Coffee Stand',
        description: '정통 파리지앵 바 스타일의 에스프레소 코너.',
        details: '엄선된 남미산 원두를 사용해 하이엔드 슬레이어 에스프레소 머신으로 뽑아내며 아드리앙 원장 시술 예약 시 최고급 원두 와인 향 커피가 잔 가득 채워집니다.',
        coordinateMark: { x: 42, y: 35 }
      },
      {
        id: 'retail_curation',
        name: 'Luxury Retail Shops (셀렉티브 샵)',
        englishName: 'Retail Shops',
        description: '파리 유기농 헤어 케어 및 하치 니치 니치 향수 콜렉션.',
        details: '아드리앙 원장이 반기별로 프랑스 리옹을 다녀오며 실어 나르는 한정 수량 실크 광택 단백질 에센스를 독점 구매할 수 있습니다.',
        coordinateMark: { x: 57, y: 35 }
      }
    ]
  },
  {
    floor: 'Basement',
    title: 'PARKING GARAGE',
    subtitle: '완벽한 스마트 시스템을 갖춘 안전 차고',
    description: '풍요롭고 비밀스러운 안전 드라이빙 허브. 지상 통제실과 연동된 최신 번호판 스캔 AI 및 지하 1층부터 지하 2층까지 소음 없이 부드럽게 이송 가능한 우레탄 코팅 슬라이드.',
    detailMapTitle: 'P1-P2 Underground Architecture',
    bannerText: '입주민 전용 지정 주차면 및 테슬라 슈퍼차저 충전 스테이션 완비',
    hashtags: ['#주차요정', '#안전주차', '#슈퍼차저', '#입주만족도강력업'],
    zones: [
      {
        id: 'p1_parking',
        name: 'B1 Parking Floor (지하 1층 주차)',
        englishName: 'B1: Parking (P1)',
        description: '방문객 혼선 없는 첨단 입차 차선 분리.',
        details: '실시간 감시용 고화소 하이브리드 CCTV 수십 대 기동. 엘리베이터 홀까지 3초 안에 도달하는 VIP 통로 연결.'
      },
      {
        id: 'p2_parking',
        name: 'B2 Parking Floor (지하 2층 주차)',
        englishName: 'B2: Parking (P2)',
        description: '입주민 전용 프라이빗 안심 고정 주차 레이아웃.',
        details: '한 세대당 기본 2대 이상의 광폭 칸을 제공하며 동진 원장의 무거운 픽업트럭이나 지호 원장의 수입 컨버터블 카가 나란히 빛나고 있습니다.'
      }
    ]
  }
];

export const DONGJIN_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'dj_1',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    caption: '오늘 새벽 한강 10km 뛰고 7F 짐 오픈. 성수대교 불빛 아래선 덤벨 무게가 가벼워집니다. #오운완 #온세미로짐 #강철의단백질 #어깨루틴_자세_무너진_사람들_빨리_등록하길',
    likes: 421,
    comments: [
      { user: 'Adrien_Jiho_Salon', text: '형님, 새벽에 천장 웅웅 거리는 거 보니까 10km 아니고 20km는 뛴 거 같던데? 마고 샴페인 한잔하고 자자니까 😤' },
      { user: 'Onsemiro_U777', text: '원장님 덕분에 어깨 각 살아났어요! 감사합니당 💪' },
      { user: 'DJ_Lee_Gym', text: '@Adrien_Jiho_Salon 와인 살 안 빠진다. 당장 아침 스쿼트 하러 올라와.' }
    ],
    date: '2026-06-20'
  },
  {
    id: 'dj_2',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600',
    caption: '길동이 녀석, 요가 매트 명당자리 차지하고 안 비켜준다... 묘르신 주말 쉼은 덤벨보다 신성하니까 그냥 놔둔다. #길동이 #묘르신 #동진이집사 #온세미로_서열0위',
    likes: 682,
    comments: [
      { user: 'S_Arem_Hair', text: '길동이 턱시도 주름 너무 이쁘다... 오동통 발 너무 깨물고 싶어요 오빠!!' },
      { user: 'DJ_Lee_Gym', text: '@S_Arem_Hair 발톱 날카롭다. 만약 오면 츄르 챙겨라.' },
      { user: 'GoldRetriever_Hyeonsoo', text: '길동아 형이랑 스쿼트할까? 😍' },
      { user: 'DJ_Lee_Gym', text: '@GoldRetriever_Hyeonsoo 길동이한테 짖지 마라 현수야. 어제 벤치 자세나 내일 고쳐.' }
    ],
    date: '2026-06-18'
  },
  {
    id: 'dj_3',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    caption: '2층 백반집 곱빼기 제육볶음. 이모님이 고기를 냉면 사발만큼 쌓아 주셨다. "동진이 이 기생오라비 같은 녀석 뒤의 진짜 아가"라며 한 접시 더 주심. 제육 수치는 완전한 아미노 백신이다. #제육은단백질 #백반집 #온세미로맛집 #고기곱빼기',
    likes: 512,
    comments: [
      { user: 'Adrien_Jiho_Salon', text: '난 주말 내내 카푸치노랑 크루아상 우아하게 먹느라 가슴이 무거웠는데 이런 탄소 과적은 반칙 아닙니까 형님?' },
      { user: 'DJ_Lee_Gym', text: '@Adrien_Jiho_Salon 맛있다. 니가 맨날 도망가서 고기 다 내꺼다.' }
    ],
    date: '2026-06-15'
  }
];

export const JIHO_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'jh_1',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    caption: "C'est magnifique! 가위 끝에서 피어나는 세밀한 불꽃. 오늘 방문하신 입주민의 헤어 텍스처를 프렌치 스칼프 실크 에디션으로 완성해 드렸습니다. 오직 당사자만을 위한 극상의 비율. #SalonDeAdrien #성수동미용실 #이색머리전문 #인생머리메이커",
    likes: 812,
    comments: [
      { user: 'S_Arem_Hair', text: '원장님 이번 터치는 제 금가위 기술도 탐낼 만큼 정성스럽던데요! 빗질 제압 최고였음 👍' },
      { user: 'DJ_Lee_Gym', text: '머리카락 자르는 데 왜 뒤에 불 불어넣냐 지호야. 쓸데없다.' },
      { user: 'Adrien_Jiho_Salon', text: '@DJ_Lee_Gym 에잇 지극히 투박한 헬스 근육 파이트맨... 이건 아트라니까요!' }
    ],
    date: '2026-06-20'
  },
  {
    id: 'jh_2',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
    caption: '1202호 한강 전망 테라스 와인 아틀리에. 보르도 와인 숨결과 한강 센셋의 마리아주는 마음의 헤어 스케치를 유려하게 만듭니다. Mon ami 동진 형님, 가벽 넘어 턱걸이 그만하고 와인 한 모금 어때? #1202호 #선셋와인 #성수동일몰 #와인앤컷 #안티크클래식',
    likes: 934,
    comments: [
      { user: 'Onsemiro_U777', text: '우와 12층 뷰는 정말 차원이 다르네요! 앤티크 인테리어 넘 취저예요 가보고 싶어요 😭' },
      { user: 'Adrien_Jiho_Salon', text: '@Onsemiro_U777 오세요 마이 스위트 게스트! 대리석 바닥 찰박이 소리 들으며 와인 파티 열어줄게요 ✨' },
      { user: 'DJ_Lee_Gym', text: '와인잔 깨진다. 슬라이딩 도어에서 손 때라 다친다.' }
    ],
    date: '2026-06-19'
  },
  {
    id: 'jh_3',
    imageUrl: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&q=80&w=600',
    caption: '귀여운 막내 우진이와 정겹게 모닝 에스프레소 가위 빗질 크루 셋팅. 2층 백반집 이모님 시선 한 방에 무너지고 등 짝궁 철썩 맞았지만 우리 아트 살롱은 언제나 우아하게 개척합니다. C\'est la vie! #온세미로빌딩 #가위손가족 #커피앤스타일 #바리스타그램 #프렌치헤어',
    likes: 721,
    comments: [
      { user: 'Maknae_Woojin_Plz', text: '원장님 저 오늘 가위 닦기 최고속 기네스 세웠어요! 동진 원장님 헬스장 덤벨 닦기 응원과 혼연일체!' },
      { user: 'Adrien_Jiho_Salon', text: '@Maknae_Woojin_Plz 우진아 너 언제 7층의 스파이가 된 거니? 🤣' }
    ],
    date: '2026-06-14'
  }
];
