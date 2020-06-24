# 트레바리 과제: 클럽 신청 리스트 만들기

이 프로젝트는 트레바리 과제입니다.

![image](https://user-images.githubusercontent.com/13481627/85589722-c1b1a200-b67e-11ea-8940-6bd5fbc8e9c2.png)

## 기술 스택

이 프로젝트에 사용된 기술은 다음과 같습니다.

- Language: TypeScript
- Library: react
- Styling: styled-components
- Project Setup: Webpack, Babel, tslint

## 프로젝트 시연

**Development**

- <span style="background:#F2F2F2">npm install</span>: 사용되는 패키지 설치
- <span style="background:#F2F2F2">npm start</span>: 프로젝트 실행
- 브라우저에서 http://localhost:8000 접속

## 요구사항

### 디자인

현 트레바리 서비스의 클럽 신청 리스트 페이지와 동일한 웹 PC 화면 구현

### 백로그

- 클럽 리스트
  - 다음 클럽 오브젝트 데이터를 이용하여 클럽 리스트 정보를 보여주도록 구현

```
Cards: [
       {
         id: 1,
         title:
           "이동진의 부메랑 인터뷰 그 영화의 비밀, 여자는 남자의 미래다, 옥희의 영화",
         hostGroup: "북씨-블랙",
         address: "강남 아지트",
         imageSrc: "../../resource/pic4.png",
         Date: "2019년 07월 15일 월요일 오후 07시 40분",
         hostName: "그룹장 워니님",
       },
       {
         id: 2,
         title: "긴축 : 그 위험한 생각의 역사",
         hostGroup: "이콘-임당",
         address: "강남 아지트",
         imageSrc: "../../resource/pic1.png",
         Date: "2019년 07월 17일 수요일 오후 07시 40분",
         hostName: "그룹장 이뇽님",
       },
       ... 계속
     ]
```

- 클럽 검색 기능

  - 클럽 검색 창에 검색어 입력 시, 해당 검색어에 맞는 클럽만 리스트에 나타나도록 구현.
  - <span style="background:#F2F2F2">Debounce</span> 방식의 실시간 검색 기능 구현.

- FAQ 질문 리스트
  - 다음 FAQ 오브젝트 데이터를 이용하여 FAQ 리스트 정보를 보여주도록 구현

```
  {
    Category: "북클럽",
    Question: "한 달에 한 번만 모이나요?",
    Answer: () => (
      <div>
        아지트에서 열리는 정규 독서모임은 월 1회입니다.
        <br />
        하지만 매달 정기적으로 번개 모임이 열리기 때문에 멤버분들과 함께 할 수
        있는 시간은 월 2회라고 생각해주셔도 무방할 것 같아요. :)
        <br />
        이외에도 강연, 체험 등 다양한 형태의 ‘이벤트’, 편하게 놀러 올 수 있는
        ‘트레바리 압구정 아지트 지하 바 b1’ 등 다양한 혜택이 준비되어 있습니다!
      </div>
    ),
  },
  {
    Category: "신청/환불",
    Question: "어떤 결제수단이 있나요? (결제수단 유의사항)",
    Answer: () => (
      <div>
        <Bold>[카드결제]</Bold>-결제 완료 즉시 실시간 결제 확인 및 신청 완료!
        <br />
        <Bold>[Toss결제]</Bold>-결제 완료 즉시 실시간 결제 확인 및 신청 완료!
        <br />
        -본인 명의의 계좌와 휴대전화만 있으면 Toss앱 없이도 손쉽게 결제할 수
        있습니다.<Bold>[가상계좌]</Bold>-신청 단계에서 '가상계좌'를 선택하신 후
        안내사항을 꼭 확인해주세요.
        <br />
        -계좌이체 입금확인 시점 이전에 클럽이 마감되는 경우, 이미 이체하신
        금액은 최대 3영업일 이내로 환불해드립니다.
      </div>
    ),
  }
```

- 각 질문 보여주기 기능
  - 질문 리스트의 질문 클릭 시, 해당 질문의 답변이 나타나고 숨겨지는 방식으로 구현.
  
### 진행 문서
https://www.notion.so/helloinyong/TREVARI-e40d87a47f9149fc91605e6cab6f7151
