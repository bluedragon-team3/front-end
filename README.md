# 프로젝트 설정 및 실행 가이드

## 1. 환경 및 기술 스택

- **React + Vite**
- **JavaScript + SWC**
- **Node.js v22.13.11 (LTS)**
- **npm**
- **styled-components** (CSS 스타일링)
- **axios** (API 통신)
- **Spring Boot** (백엔드 API)

---

## 2. 프로젝트 클론 및 설치

```sh
cd <PROJECT_NAME>
# 레포지토리 클론
git clone <REPOSITORY_URL>

# 패키지 설치
npm install
npm i styled-components
```

---

## 3. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 필요한 환경 변수를 설정하세요.

```
VITE_API_BASE_URL=http://localhost:8080
```

`VITE_API_BASE_URL` 값은 백엔드(Spring Boot) 서버 주소에 맞게 변경하세요.

---

## 4. 개발 서버 실행

```sh
npm run dev
```

Vite 개발 서버가 실행되며, 기본적으로 `http://localhost:5173` 에서 확인할 수 있습니다.

---

## 5. 빌드 및 배포

```sh
npm run build
```

생성된 `dist/` 폴더를 배포 서버에 업로드하여 배포합니다.

---

## 6. API 연동

Spring Boot와의 API 통신을 위해 `axios`를 사용하고 있으며, `VITE_API_BASE_URL`을 통해 백엔드 주소를 설정합니다.

예제 코드:

```js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;
```

---

## 7. 추가 설정

### SWC 설정
Vite는 기본적으로 SWC를 사용하여 빠른 빌드를 제공합니다. 추가적인 설정이 필요한 경우 `vite.config.js` 파일을 수정하세요.

### Styled-components 사용법
`styled-components`를 활용하여 컴포넌트 단위로 스타일을 적용할 수 있습니다.

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

const App = () => {
  return <Button>Click me</Button>;
};

export default App;
```

---

## 8. Node.js 및 npm 버전 확인

아래 명령어로 프로젝트에 맞는 Node.js 및 npm 버전을 확인하세요.

```sh
node -v  # v22.13.11 확인
npm -v
```

버전이 다르면 `nvm`을 사용하여 Node.js 버전을 변경할 수 있습니다.

```sh
nvm use 22.13.11
```

---


