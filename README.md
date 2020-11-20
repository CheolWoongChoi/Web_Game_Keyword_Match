
# KakaoPay - 2020 Assignment


<br/>

### 1. 프로젝트 명령어
- 'npm install' - 패키지 설치 **(필수)**
- 'npm start' - 로컬 개발 서버 실행
- 'npm run build - 배포 파일 생성
- 'npm test' - Jest 라이브러리를 이용해 테스트 실행

<br/>

### 2. firebase 테스트 서버 주소
- https://test-95f8a.web.app/
- 배포 파일들이 잘 동작하는 지 테스트 서버에서 테스트를 진행했습니다.
- firebase 서버에서는 404 처리가 되어 있지 않습니다.


<br/>

### 3. 해결 전략
- 각 화면에 필요한 기능들을 객체로 구성하고, 
화면에 적용될 이벤트와 기능을 메소드로 구현했습니다. <br>

 	- 게임 화면 (game)
  	- 완료 화면 (complete)
 
<br>

- 공통적으로 쓰이는 기능도 객체로 구성하고,
화면 렌더링, 라우팅 기능 등을 메소드로 구현했습니다. <br>
	
	- 공통 기능 (common) 

<br>

### **화면 렌더링 작업 ( common.prototype.renderView )**
- 게임 화면과 완료 화면을 텍스트(DOM text)로 저장하고,
- 라우팅이 바뀔 때, DOM Parser를 이용해서 화면을 새로운 DOM에 생성합니다. <br>
- 그리고 기존 DOM의 container 내부를 새로운 화면으로 수정합니다.


<br>

### **라우팅 ( common.renderPageView )**
- 페이지 URL의 pathname의 정보를 통해, 페이지 화면을 렌더링합니다.
- 새로 고침이 발생했을 때, DOMContentLoaded 이벤트를 통해, 
- 해당 메소드를 호출하고, 알맞는 페이지 화면으로 이동합니다. <br>
- 엉뚱한 URL로 이동할 경우, fallback 화면을 렌더링합니다.
	- 단, 서버의 설정에서 fallback 처리를 index.js로 설정해야 합니다.
	- 현 프로젝트의 webpack 로컬 서버의 설정은 fallback 처리가 index.js로 되어 있습니다.
	
