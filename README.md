## Simple Recoding Program with JS (다소 미흡)

## 목표

자바스크립트를 이용해 녹화기능과 녹음기능이 있는 웹캠과 비슷한 프로그램을 만들어보자

## 기능

- 녹화 기능
- 녹음 기능
- 다운로드 기능 (.webm)

## 주의사항

- 노트북 내장 표준 카메라를 사용하지 않고 다른 카메라를 사용할 경우 (Window Ver.) \
  - 표준 카메라로 사용하고 싶을 때 제어판 -> 장치 관리자 -> 이미징장치 -> 디바이스 사용안함으로 변경
    - previewPlayer.srcObject를 정상적으로 불러옴

* Blob의 두번째 매개변수의 type으로 webm은 웹에서 돌아가는 동영상 확장자이다. (mp4로 변환하고 싶다면 특정 프로그램 활용)

- 소리가 안난다면 (Window Ver.)
  - 윈도우 -> 설정 -> 시스템 -> 소리 -> 입력장치 확인

## 개선사항

- 녹화 -> 중지 -> 녹화버튼에 마우스 올렸을 때, hover가 먹히는 현상

- 녹화 시간초 추가(진행상황을 돕기 위해)

- tensorflow.js 기반으로 만들어진 face-api.js를 적용시켜 보기

- 다운로드 후 영상 실행시 소리가 먹히는 현상

## 도움받은 사이트 (ref)

mediaDevices

https://developer.mozilla.org/ko/docs/Web/API/Navigator/mediaDevices

favicon.io

https://doolyit.tistory.com/153

Blob

https://heropy.blog/2019/02/28/blob/

face-api.js

https://justadudewhohacks.github.io/face-api.js/docs/index.html
