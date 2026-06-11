from telegram import Update
from telegram.ext import ContextTypes


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "안녕하세요! 봇이 시작되었습니다.\n/help 를 입력하면 사용 가능한 명령어를 확인할 수 있습니다."
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = (
        "사용 가능한 명령어 목록:\n"
        "/start - 봇 시작\n"
        "/help  - 명령어 안내\n"
        "/echo <텍스트> - 입력한 텍스트를 그대로 반환"
    )
    await update.message.reply_text(text)


async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("사용법: /echo <텍스트>")
        return
    await update.message.reply_text(" ".join(context.args))
