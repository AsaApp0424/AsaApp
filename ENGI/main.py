from pyscript import document, when

@when("click", "#send_b")
def handle_click(event):
    # month = document.getElementById("m_input").value
    day = document.getElementById("d_input").value
    # document.getElementById("comment").innerText = f" 入力したのは{month}月{day}日ですね？"

while True: #プログラム全体を繰り返す
    while True: #月エラー処理
        try: #ValueError処理
            month = int(document.getElementById("m_input").value)
            if month < 1 or 12 < month: #月存在判定
                document.getElementById("comment").innerText = f"存在しない日付です。"
                continue
            else:
                break #エラー解消でループを出る
        except ValueError: #空白または文字列を入力された場合
            continue