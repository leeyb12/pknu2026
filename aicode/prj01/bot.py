from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters

from config import TOKEN
from handlers.commands import start, help_command, echo
from handlers.chat import chat


def main():
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("echo", echo))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, chat))

    print("봇이 실행 중입니다. 종료하려면 Ctrl+C 를 누르세요.")
    app.run_polling()


if __name__ == "__main__":
    main()
