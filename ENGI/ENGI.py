#縁起チェッカー

#外部からインポート
from matplotlib import pyplot as p #グラフ描画用、環境によっては動かない可能性があります

while True: #プログラム全体を繰り返す
    while True: #月エラー処理
        try: #ValueError処理
            month = int(input("月を入力してください。"))
            if month < 1 or 12 < month: #月存在判定
                print("存在しない日付です。")
                continue
            else:
                break #エラー解消でループを出る
        except ValueError: #空白または文字列を入力された場合
            continue

    while True: #日エラー処理
        try: #ValueError処理
            day = int(input("日を入力してください。"))
            if day < 1 or 31 < day: #日存在判定
                print("存在しない日付です。")
                continue
            elif (month == 2 and day > 29) or ((month == 4 or month == 6 or month == 9 or month == 11) and day > 30): #日存在判定
                print("存在しない日付です。")
                continue
            else:
                break #エラー解消でループを出る
        except ValueError: #空白または文字列を入力された場合
            continue

    #一度文字列に変換し、結合、リスト化した後に整数値に戻す
    if month < 10:
        month = '0' + str(month) #桁数によるバグ回避
    else:
        month = str(month)
    if day < 10:
        day = '0' + str(day) #桁数によるバグ回避
    else:
        day = str(day)
    date = list(month+day) #結合、リスト化（例：['1', '2', '3', '1']）
    for i in range(4):
        date[i] = int(date[i]) #整数値に変換（例：[1, 2, 3, 1]）
    month = int(month)
    day = int(day)

    #数字チェック
    m_s = [0*i for i in range(13)] #'m'onth 's'witch（月ごとのスイッチ）、リスト化してスイッチとして管理、０番目を空にし、１から数えてmonth番目を指定している
    if month == 6 or month == 7 or month == 8: #縁起が良い数字
        m_s[month] = 1
    elif month == 3 or month == 4 or month == 5 or month == 9: #縁起が悪い数字
        m_s[month] = -1

    d_s = [0*i for i in range(32)] #'d'ay 's'witch（日ごとのスイッチ）、リスト化してスイッチとして管理、０番目を空にし、１から数えてday番目を指定している
    if day == 6 or day == 7 or day == 8 or day == 28: #縁起が良い数字
        d_s[day] = 1
    elif day == 3 or day == 4 or day == 5 or day == 9 or day == 13 or day == 14 or day == 17 or day == 19 or day == 24 or day == 26 or day == 29: #縁起が悪い数字
        d_s[day] = -1

    #数字メッセージ
    n_m = {} #'n'umber 'm'essage（数字ごとの説明文）、各数字の縁起の良し悪しの理由を辞書で管理
    for i in range(32):
        n_m[i] = ""
    n_m[3] = "３はベトナム語で「惨」"
    n_m[4] = "４は日本語で「死」"
    n_m[5] = "５は中国語で「無」"
    n_m[6] = "６は完全数"
    n_m[7] = "７はラッキーセブン"
    n_m[8] = "８は末広がり"
    n_m[9] = "９は日本語で「苦」"
    n_m[13] = "１３はキリスト教で不吉とされる"
    n_m[14] = "４は日本語で「死」"
    n_m[17] = "１７はローマ数字がラテン語の「死」"
    n_m[19] = "９は日本語で「苦」"
    n_m[24] = "４は日本語で「死」"
    n_m[28] = "２８は完全数"
    n_m[29] = "９は日本語で「苦」"

    #素数チェック、日は1~31なので31<36=6^2から2~6まで、ただし6は偶数なので結局2、3、5のみ調べればよい
    p_s = 0 #'p'rime 'n'umber 's'witch（素数スイッチ）
    p_m = "" #'p'rime 'm'essage（素数メッセージ）
    if (day%2 != 0 and day%3 != 0 and day%5 != 0 and day != 1) or day == 2 or day == 3 or day == 5:
        p_s += 1
        p_m = "素数"
    if (month%2 != 0 and month%3 != 0 and month%5 != 0 and month != 1) or month == 2 or month == 3 or month == 5:
        p_s += 1
        p_m = "素数"

    #ゾロ目チェック
    dd_s = 0 #'d'ouble 'd'igit 's'witch（ゾロ目スイッチ）
    dd_m = "" #'d'ouble 'd'igit 'm'essage（ゾロ目メッセージ）
    if date[2] == 0: #??0?、日の十の位が0の時は無視するためここでまず場合分け
        if date[1] == date[3]: #?101など
            dd_s += 1
    else: #??1?など
        if date[2] == date[3]: #??11など
            dd_s += 1
        if date[2] == date[1]: #?11?など、上と重複の場合もあるため並列のif
            dd_s += 1
    if date[0] == date[1]: #11??など、重複を考慮して並列のif
        dd_s += 1
    if dd_s != 0:
        dd_m = "ゾロ目"

    #連番チェック
    cn_s = 0 #'c'onsecutive 'n'umber 's'witch（連番スイッチ）
    cn_m = "" #'c'onsecutive 'n'umber 'm'essage（連番メッセージ）
    if date[2] == 0: #??0?、日の十の位が0の時は無視するためここでまず場合分け
        if date[1] + 1 == date[3]: #?102など
            cn_s += 1
    else:
        if date[1] + 1 == date[2]: #?12?など
            cn_s += 1
        if date[2] + 1 == date[3]: #??12など
            cn_s += 1
    if month == 12:
        cn_s += 1
    if cn_s != 0:
        cn_m = "連番"

    #逆連番チェック
    rcn_s = 0 #'r'everse 'c'onsecutive 'n'umber 's'witch（逆連番スイッチ）
    rcn_m = "" #'r'everse 'c'onsecutive 'n'umber 'm'essage（逆連番メッセージ）
    if date[2] == 0: #??0?、日の十の位が0の時は無視するためここでまず場合分け
        if date[1] - 1 == date[3]: #?201など
            rcn_s += 1
    else:
        if date[1] - 1 == date[2]: #?21?など
            rcn_s += 1
        if date[2] - 1 == date[3]: #??21など
            rcn_s += 1
    if month == 10:
        rcn_s += 1
    if rcn_s != 0:
        rcn_m = "逆連番"

    #鏡文字チェック
    mw_s = 0 #'m'irror 'w'riting 's'witch（鏡文字スイッチ）
    mw_m = ""
    if date[0] == date[3] and date[1] == date[2]:
        mw_s = 1
        mw_m = "鏡文字"

    #ポイント計算、メッセージ表示
    point = 0
    point = m_s[month]*20 + d_s[day]*20 + p_s*30 + dd_s*20 + cn_s*20 - rcn_s*20 + mw_s*30 #各要素のポイントへの重みを調整
    print("この日付は{}点です！".format(point)) #ポイント表示
    print(n_m[month] + n_m[day] + p_m + dd_m + cn_m + rcn_m + mw_m) #各要素の説明

    #ポイントをファイルに書き込み
    with open("log.txt", "a") as f:
        f.write("{}, ".format(point))

    #累計ポイントの平均
    with open("log.txt", "r") as f:
        log = f.read()
        log_l = log.split(",") #.txtを","で分割しリスト化
        log_l.pop() #末尾の", "を削除
        sum = 0
        for i in range(len(log_l)):
            log_l[i] = int(log_l[i]) #整数値に変換
            sum += log_l[i] #和を取る
        print("ここまでの平均値は{}です！\n".format(int(sum/len(log_l)))) #要素数で割って平均を求める

    #ポイントの推移をグラフとして描画
    x =[i for i in range(len(log_l))]
    p.plot(x, log_l)
    p.title("Trend of your luck point") #日本語が文字化けしてしまうので英語で
    p.xlabel("Number of trials")
    p.ylabel("Point")
    p.show()