<h1 align="center">Welcome to My Amazon Card Slider 👋</h1>

heroku로 배포 : [heroku링크](https://cryptic-island-21227.herokuapp.com/)
Ncloud로 배포 : [Ncloud](http://106.10.38.46/)

> /admin 으로 관리자 페이지 접근 가능

![DEMO](./README/hello.gif)
![DEMO](./README/admin.gif)

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.11.3-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D10.16.0-blue.svg" />
  <a href="https://github.com/changicho/membership-amazon#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/changicho/membership-amazon/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/changicho/membership-amazon/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> 캐러셀 슬라이드 컴포넌트 Compact-Slider 제작

아마존에서 사용하는 캐러셀 (이미지 슬라이드) 와 같은 컴포넌트를 제작했어요.

제작한 슬라이드 컴포넌트 *Compact-Slider*는 재사용 가능하게 구현했습니다.

### 🏠 [Homepage](https://github.com/changicho)

## 모듈 버전

- npm >=6.11.3
- node >=10.16.0
- mysql >= 8.0.17

## 설치

```sh
npm install
```

## 사용법

```sh
npm run start
```

---

## Admin Page How to Use

mysql의 amazon 데이터 베이스가 필요합니다.

### 데이터 베이스 구조 (amazon)

```bash
+--------------------+
| Database           |
+--------------------+
| amazon             |
+--------------------+
```

```bash
mysql> show tables;
+------------------+
| Tables_in_amazon |
+------------------+
| downside_slide   |
| upside_card      |
| upside_slide     |
| user             |
+------------------+
```

```bash
mysql> DESC downside_slide;
+-----------+------+------+-----+---------+-------+
| Field     | Type | Null | Key | Default | Extra |
+-----------+------+------+-----+---------+-------+
| image_url | text | NO   |     | NULL    |       |
| color     | text | NO   |     | NULL    |       |
| link_url  | text | NO   |     | NULL    |       |
+-----------+------+------+-----+---------+-------+
```

```bash
mysql> DESC upside_card;
+------------+----------+------+-----+---------+-------+
| Field      | Type     | Null | Key | Default | Extra |
+------------+----------+------+-----+---------+-------+
| card_index | int(11)  | NO   |     | 0       |       |
| theme      | char(50) | NO   |     | NULL    |       |
| title      | char(50) | NO   |     | NULL    |       |
+------------+----------+------+-----+---------+-------+
```

```bash
mysql> DESC upside_slide;
+------------+----------+------+-----+---------+-------+
| Field      | Type     | Null | Key | Default | Extra |
+------------+----------+------+-----+---------+-------+
| card_index | int(11)  | NO   |     | NULL    |       |
| theme      | char(50) | NO   |     | NULL    |       |
| keyword    | text     | NO   |     | NULL    |       |
| image_url  | text     | NO   |     | NULL    |       |
| title      | text     | YES  |     | NULL    |       |
| content    | text     | YES  |     | NULL    |       |
| link       | text     | YES  |     | NULL    |       |
| link_text  | text     | YES  |     | NULL    |       |
+------------+----------+------+-----+---------+-------+
```

```bash
mysql> DESC user;
+----------+----------+------+-----+---------+-------+
| Field    | Type     | Null | Key | Default | Extra |
+----------+----------+------+-----+---------+-------+
| id       | char(20) | NO   |     | NULL    |       |
| password | char(20) | NO   |     | NULL    |       |
| admin    | char(5)  | NO   |     | false   |       |
+----------+----------+------+-----+---------+-------+
```

### 회원가입

![DEMO](./README/signup.gif)

회원가입 후엔 관리자 권한이 없으니 유의해주세요!

### 데이터 입력 (관리자)

![DEMO](./README/insert.gif)

### 데이터 삭제 (관리자)

![DEMO](./README/delete.gif)

### 이미지 업로드 (관리자)

![DEMO](./README/upload.gif)

파일 업로드 페이지 버튼을 누르면 업로드 창으로 이동합니다!

### 관리자 권한 부여 (관리자)

![DEMO](./README/author.gif)

---

## Compact-Silder How to Use

![DEMO](./README/compact_slider.gif)

먼저 compact-slider.js 스크립트 파일을 로드해주세요!

Compact-Slider는 다음과 같은 html 돔 구조를 따릅니다.

```html
<div class="compact-slider" id="user-compact-slider">
	<ul class="slides">
		<li class="slide">slide 1</li>
		<li class="slide">slide 2</li>
		<!-- insert your own slide -->
	</ul>
	<div class="button" id="prev"></div>
	<div class="button" id="next"></div>
</div>
```

위와 같은 돔 구조를 생성하시고 아래 스크립트를 실행해주세요!

```javascript
let my_compact_slider = new compact_slider("#user-compact-slider");
```

compact_slider 클래스는 인자로 querySelector의 인자와 같은 값을 받아요!

여러분이 설정한 tag, id, class 명으로 Compact-Slider 를 적용해봅시다!

## 일정 시간마다 회전하게 만들고 싶어요

> 3초마다 회전

```javascript
let my_compact_slider = new compact_slider("#user-compact-slider");
my_compact_slider.auto(3000);
```

Compact-Slider의 auto() 메소드를 사용하면 슬라이드가 자동으로 회전합니다!

인자로는 miliseconds 값을 넣어주면 됩니다.

## 자동 회전을 멈추고 싶어요

```javascript
my_compact_slider.stop();
```

Compact-Slider의 stop() 메소드를 이용하면 애니메이션을 멈출 수 있어요!

## 인디케이터로 이동하고싶어요

```javascript
let index = 2; // slide index start at 0
let my_compact_slider = new compact_slider("#user-compact-slider");
my_compact_slider.move_to(index);
```

Compact-Slider의 move_to 메소드를 사용하면 슬라이드가 자동으로 index 번째로 이동해요!

인자로는 index 값을 입력해주면 됩니다 (0번째 부터 시작하는걸 잊지마세요!)

## 이전, 다음 슬라이드로 이동할래요

```javascript
let my_compact_slider = new compact_slider("#user-compact-slider");
my_compact_slider.move_next(); // move to next slide
my_compact_slider.move_prev(); // move to previous slide
```

이전 혹은 다음 슬라이드로 움직이고 싶나요?

Compact-Slider의 move_next(), move_prev 메소드를 이용하시면 됩니다!

여러분이 버튼을 만드셔서 메소드를 호출해보세요!

## 슬라이드 이동 버튼을 만들고 싶어요

```html
<div class="compact-slider" id="user-compact-slider">
	<ul class="slides">
		<!-- insert your own slide -->
	</ul>
	<div class="button" id="prev"></div>
	<div class="button" id="next"></div>
</div>
```

![DEMO](./README/button.gif)

DOM 구조에서 id 값을 prev, next로 설정하시면 자동적으로 버튼이 만들어집니다!

편리하죠?

---

## 만든이

👤 **Changi Cho**

- Github: [@changicho](https://github.com/changicho)

## 🤝 문제가 생겼어요!

문제가 발생하면 이 repository에 issue 탭에 남겨주시면 되요!

[issues page](git+https://github.com/changicho/membership-amazon/issues).

## 응원해주기!

이 프로젝트가 마음에 드셨다면 ⭐️ 을 눌러주세요!

금전적인 지원도 언제나 환영합니다! : 신한은행 110-412-956254 조찬기

## 📝 License

Copyright © 2019 [Changi Cho](https://github.com/changicho).<br />
This project is [MIT](https://github.com/changicho/membership-amazon/blob/master/LICENSE) licensed.
