const title = document.querySelector("#title");

// 바닐라ㄴㄴ 자바스크립트 : 순수 자바스크립트로만 작업한 것
// 대개 jquery(제이쿼리) 자바스크립트 라이브러리와 함께 사용하는 경우가 많다
title.className = "on"; // 클래스를 통채로 바꿈
// classList를 사용하면 add, remove를 통해서 원하는 클래스 이름만 변경
title.classList.add("off");
