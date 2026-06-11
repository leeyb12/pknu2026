import httpx
from telegram import Update
from telegram.ext import ContextTypes

from config import OLLAMA_BASE_URL, OLLAMA_MODEL


async def chat(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_text = update.message.text

    await update.message.reply_text("생각 중...")

    try:
        async with httpx.AsyncClient(timeout=60) as client:
            response = await client.post(
                f"{OLLAMA_BASE_URL}/api/chat",
                json={
                    "model": OLLAMA_MODEL,
                    "messages": [{"role": "user", "content": user_text}],
                    "stream": False,
                },
            )
            response.raise_for_status()
            result = response.json()
            reply = result["message"]["content"]
    except httpx.ConnectError:
        reply = "Ollama 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해 주세요."
    except Exception as e:
        reply = f"오류가 발생했습니다: {e}"

    await update.message.reply_text(reply)
