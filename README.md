# Market Place Sample

## 기술 스택

> Node.js 16 이상 사용

- Next.js
- react-query
- emotion
- react-modal-sheet
- axios

## Project 설명

### Server

클라이언트에서 필요한 API를 구현하기 위해 간단한 Node.js API Server를 구축했습니다.

### 디렉토리 구조

```
├── app.ts
├── package.json
├── src/
│ ├── routes/    # API 라우팅 관련 로직
│ └── services/  #비즈니스 로직
├── tsconfig.json
└── yarn.lock
```

### Client

Next.js로 클라이언트 어플리케이션을 구축하였습니다.

### 디렉토리 구조

```
├── README.md
├── babelrc.json
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages/
│ ├── \_app.tsx
│ ├── \_document.tsx
│ ├── cart/
│ ├── globals.css
│ ├── index.tsx
│ └── products/
├── postcss.config.js
├── public/            #정적 파일
│ ├── icons/
│ └── images/
├── src/
│ ├── api/             # API 요청과 응답 관련 로직
│ ├── components/      # Component 로직, 일반 컴포넌트, UI 컴포넌트를 분리했습니다.
│ ├── context/         # Context API 로직
│ └── utils/           # Util 함수 로직
├── tsconfig.json
└── yarn.lock
```

### 실행방법

Server, Client 모두 같은 명령어로 실행 가능합니다.

각 루트 디렉토리에서 아래 명령어로 실행할 수 있습니다.

#### Install

```shell
yarn install
```

#### Run App

```shell
yarn dev
```

## 실행화면

https://github.com/kingsjw/lotte-helth-care-interview1/assets/28668744/1a4f2c74-4b5c-4b49-bbc5-be0451941a63



