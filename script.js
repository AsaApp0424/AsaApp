function engi_dis(){
    const month = document.getElementById("m_input").value;
    const day = document.getElementById("d_input").value;
    // const month = 3
    // const day = 4
    if(month < 1 || 12 < month){
        comment1.innerText = "存在しない日付です。";
    }else{
        if(day < 1 || 31 < day){
            comment1.innerText = "存在しない日付です。";
        }else{
            if((month == 2 && day > 29) || ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)){
                comment1.innerText = "存在しない日付です。";
            }else{
                // comment1.innerText = "入力した月は" + month + "月" + day + "日ですね？";
                const date = genList(month, day);
                engi_cal(month, day, date);
            }
        }
    }
}

function genList(month_s, day_s){
    if(month_s < 10){
        month_s = '0' + String(month_s);
    }else{
        month_s = String(month_s);
    }
    if(day_s < 10){
        day_s = '0' + String(day_s);
    }else{
        day_s = String(day_s);
    }
    const date = Array.from(month_s + day_s);
    for (let i=0; i<4; i++){
        date[i] = parseInt(date[i]);
    }
    return date;
}

function engi_cal(month, day, date){
    // 数字チェック
    const m_s = [];
    for(let i=0; i<13; i++){
        m_s[i] = 0;
    }
    if(month == 6 || month == 7 || month == 8){
        m_s[month] = 1;
    }else if(month == 3 || month == 4 || month == 5 || month == 9){
        m_s[month] = -1;
    }
    const d_s = [];
    for(let i=0; i<32; i++){
        d_s[i] = 0;
    }
    if(day == 6 || day == 7 || day == 8 || day == 28){
        d_s[day] = 1;
    }else if(day == 3 || day == 4 || day == 5 || day == 9 || day == 13 || day == 14){
        d_s[day] = -1;
    }

    // 数字メッセージ
    const n_m = [];
    for(let i=0; i<32; i++){
        n_m[i] = "";
    }
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

    // 素数チェック
    let p_s = 0;
    let p_m = "";
    if((day%2 != 0 && day%3 != 0 && day%5 != 0 && day != 1) || day == 2 || day == 3 || day == 5){
        p_s += 1;
        p_m = "素数";
    }
    if((month%2 != 0 && month%3 != 0 && month%5 != 0 && month != 1) || month == 2 || month == 3 || month == 5){
        p_s += 1;
        p_m = "素数";
    }

    // ゾロ目チェック
    let dd_s = 0;
    let dd_m = "";
    if(date[2] == 0){
        if(date[1] == date[3]){
            dd_s += 1;
        }
    }else{
        if(date[2] == date[3]){
            dd_s += 1;
        }
        if(date[2] == date[1]){
            dd_s += 1;
        }
    }
    if(date[0] == date[1]){
        dd_s += 1;
    }
    if(dd_s != 0){
        dd_m = "ゾロ目";
    }

    // 連番チェック
    let cn_s = 0;
    let cn_m = "";
    if(date[2] == 0){
        if(date[1] + 1 == date[3]){
            cn_s += 1;
        }
    }else{
        if(date[1] + 1 == date[2]){
            cn_s += 1;
        }
        if(date[2] + 1 == date[3]){
            cn_s += 1;
        }
    }
    if(month == 12){
        cn_s += 1;
    }
    if(cn_s != 0){
        cn_m = "連番";
    }

    // 逆連番チェック
    let rcn_s = 0;
    let rcn_m = "";
    if(date[2] == 0){
        if(date[1] - 1 == date[3]){
            rcn_s += 1;
        }
    }else{
        if(date[1] - 1 == date[2]){
            rcn_s += 1;
        }
        if(date[2] - 1 == date[3]){
            rcn_s += 1;
        }
    }
    if(month == 10){
        rcn_s += 1;
    }
    if(rcn_s != 0){
        rcn_m = "逆連番";
    }

    // 鏡文字チェック
    let mw_s = 0;
    let mw_m = "";
    if(date[0] == date[3] && date[1] == date[2]){
        mw_s = 1;
        mw_m = "鏡文字";
    }

    // ポイント計算、メッセージ表示
    let point = m_s[month]*20 + d_s[day]*20 + p_s*30 + dd_s*20 + cn_s*20 - rcn_s*20 + mw_s*30;
    comment1.innerText = `この日付は${point}点です！`;
    comment2.innerText = n_m[month] + n_m[day] + p_m + dd_m + cn_m + rcn_m + mw_m
}

send_b.addEventListener("click", engi_dis);