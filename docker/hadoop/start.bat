@echo off
:: UTF-8 한글 깨짐 방지
chcp 65001 > nul

echo ==================================================
echo [HADOOP CLUSTER] 하둡 클러스터 컨테이너 시작 중...
echo ==================================================

:: docker-compose.yml 이 있는 위치로 이동하여 실행
cd /d "%~dp0"

:: 백그라운드(-d)로 컨테이너를 빌드 및 기동
docker compose up -d --build

echo ==================================================
echo [HADOOP CLUSTER] 하둡 클러스터가 성공적으로 실행되었습니다.
echo - NameNode Web UI: http://localhost:9870
echo ==================================================
pause
