# 교육용 AI 에이전트 개발 — 강의 노트

2026학년도 2학기 대학원 수업(8주)의 웹 강의 노트입니다.

**공개 주소**: https://ldgit99.github.io/classic/

각자 하나의 교육문제를 골라, 그것을 해결하는 AI 에이전트를 설계·구현하고
전문가와 사용자에게 검증받습니다. 매주 쌓이는 산출물이 마지막에 하나의 연구가 됩니다.

## 주차 구성

| 주차 | 주제 | 산출물 |
|---|---|---|
| [1주](https://ldgit99.github.io/classic/week01.html) | 요구 분석 | 요구분석 보고서 |
| [2주](https://ldgit99.github.io/classic/week02.html) | 문헌 분석 | 문헌분석표 · 사례분석표 |
| [3주](https://ldgit99.github.io/classic/week03.html) | 설계원리 도출 | 설계원리 및 설계지침 |
| [4주](https://ldgit99.github.io/classic/week04.html) | 에이전트 명세서 작성 | `agent-design.md` |
| [5주](https://ldgit99.github.io/classic/week05.html) | AI 에이전트 구현 | Prototype v1 |
| [6주](https://ldgit99.github.io/classic/week06.html) | 전문가 타당화 | 타당화 결과 · Prototype v2 |
| [7주](https://ldgit99.github.io/classic/week07.html) | 사용성 평가 | 평가 결과 · 최종 Prototype |
| [8주](https://ldgit99.github.io/classic/week08.html) | 연구 결과 발표 | 연구보고서 · 발표 · GitHub |

각 주차는 앞뒤가 물린 일곱 개의 질문으로 구성되어 있습니다. 왼쪽 사슬을 따라
위에서 아래로 읽으면 그 주의 산출물이 완성됩니다.

## 학생 배포용 템플릿

[`templates/`](templates/) 폴더에 15종이 있습니다. 사이트의
[템플릿 모음](https://ldgit99.github.io/classic/#templates)에서도 바로 열 수 있습니다.

## 준비물

- Claude · Codex 유료 구독 (5주차 실습)
- GitHub 계정
- 개발 경험은 필요하지 않습니다. 설치 안내는 [5주차 부록](https://ldgit99.github.io/classic/week05.html#setup)에 있습니다.

## 파일 구조

```
.
├─ index.html          허브 — 전체 주차 안내 + 템플릿 모음
├─ week01.html …       주차별 강의 노트 (8개)
├─ assets/
│  ├─ style.css        공통 디자인 시스템 (색·타이포·컴포넌트)
│  └─ notes.js         템플릿 복사, 좌측 사슬 현재 위치 표시
└─ templates/          학생 배포용 템플릿 15종
```

## 수정 방법

주차 노트는 서로 독립된 HTML 파일이고, 디자인은 `assets/style.css` 한 곳에서
관리합니다. 새 주차를 추가하려면 기존 파일을 복사해 본문만 바꾸고 모든 파일의
`.weeknav`에 링크를 추가하세요.

CSS나 JS를 고친 뒤에는 각 HTML의 `?v=` 뒤 숫자를 올려 주세요. 학생 브라우저의
캐시 때문에 바뀐 스타일이 적용되지 않는 것을 막습니다.

## 로컬에서 보기

```bash
python -m http.server 8000
# http://localhost:8000
```
