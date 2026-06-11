# Telegram Bot 프로젝트 계획

## 프로젝트 구조

```
prj01/
├── PLAN.md          # 이 파일 (계획서)
├── .env             # API 키 설정 (직접 입력 필요)
├── .env.example     # API 키 예시 템플릿
├── requirements.txt # 필요 패키지 목록
├── bot.py           # 봇 메인 실행 파일
├── config.py        # 설정 로드 모듈
└── handlers/
    ├── __init__.py
    └── commands.py  # 명령어 핸들러 모음
```

---

## 사용 기술

| 항목 | 내용 |
|------|------|
| 언어 | Python 3.10+ |
| 봇 라이브러리 | `python-telegram-bot` v21 (async) |
| 환경변수 관리 | `python-dotenv` |

---

## 설치 방법

```bash
pip install -r requirements.txt
```

---

## API 키 설정 방법

1. `.env.example` 파일을 복사해서 `.env` 파일 생성
2. `.env` 파일 안에 아래 항목 입력

```
TELEGRAM_BOT_TOKEN=여기에_BotFather에서_발급받은_토큰_입력
```

> **토큰 발급**: Telegram에서 `@BotFather` 검색 → `/newbot` 명령어 → 이름 설정 → 토큰 발급

---

## 구현할 기능 (기본)

| 명령어 | 설명 |
|--------|------|
| `/start` | 봇 시작 인사 메시지 |
| `/help` | 사용 가능한 명령어 안내 |
| `/echo <텍스트>` | 입력한 텍스트를 그대로 반환 |

---

## 실행 방법

```bash
python bot.py
```

---

## 구현 순서

1. [ ] `requirements.txt` 작성
2. [ ] `.env.example` 템플릿 작성
3. [ ] `config.py` — `.env` 로드 및 토큰 검증
4. [ ] `handlers/commands.py` — `/start`, `/help`, `/echo` 핸들러 구현
5. [ ] `bot.py` — Application 생성 및 핸들러 등록, polling 시작
6. [ ] 동작 테스트

---

## 확장 아이디어 (추후)

- 메시지 로깅
- 사용자별 상태 관리 (ConversationHandler)
- 외부 API 연동 (날씨, 번역 등)
- 웹훅(Webhook) 방식으로 전환
