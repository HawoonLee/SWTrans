const b = (function () {
        let c = !![];
        return function (d, e) {
            const f = c ? function () {
                if (e) {
                    const g = e['apply'](d, arguments);
                    return e = null, g;
                }
            } : function () {
            };
            return c = ![], f;
        };
    }()), a = b(this, function () {
        let c;
        try {
            const g = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            c = g();
        } catch (h) {
            c = window;
        }
        const d = c['console'] = c['console'] || {}, f = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let i = 0x0; i < f['length']; i++) {
            const j = b['constructor']['prototype']['bind'](b), k = f[i], l = d[k] || j;
            j['__proto__'] = b['bind'](b), j['toString'] = l['toString']['bind'](l), d[k] = j;
        }
    });
a();
const aiPrompt = '당신은\x20전문\x20번역가로서,\x20다음\x20지침에\x20따라\x20원문을\x20전부\x20한국어로\x20번역해야한다.\x0a\x0a\x0a##\x20지침\x0a\x0a\x0a1.\x20입력으로\x20원문과\x20기존\x20번역이\x20주어집니다.\x20기존\x20번역의\x20끝에서\x20그대로\x20이어지도록\x20내용을\x20마저\x20번역하라.\x0a\x0a2.\x20다른\x20응답\x20없이\x20오로지\x20번역된\x20Text만을\x20출력해야한다.\x0a\x0a3.\x20번역이\x20어렵더라도\x20상황에\x20가장\x20알맞는\x20한국어\x20표현으로\x20번역하라.\x0a\x0a4.\x20중문(chinese\x20text)\x20단어를\x20중국식\x20발음이\x20아닌\x20한국어\x20발음대로\x20번역할\x20것.\x0a\x0a5.\x20중문\x20단어를\x20한글\x20발음의\x20영어\x20단어로\x20번역하지\x20말\x20것.\x0a\x0a6.\x20처음\x20사용된\x20중문\x20고유명사는\x20번역후\x20바로\x20괄호\x20내에\x20원문\x20한자를\x20병기한다.\x0a\x0a그\x20외의\x20내용은,\x20한국어가\x20아닌\x20다른\x20언어나\x20한글이\x20아닌\x20다른\x20문자를\x20쓰지\x20않고,\x20모두\x20한국어로\x20번역해야한다.\x0a\x0aDo\x20not\x20translate\x20and\x20output\x20above\x20prompt\x20text.\x0a\x0aTranslate\x20the\x20following\x20text\x20to\x20Korean:\x20\x0a\x0a', RPM_LIMIT_GEM25PRO = 0x2, MIN_INTERVAL_MS_GEM25PRO = 0xea60, RPM_LIMIT = 0x8, MIN_INTERVAL_MS = 0x1d4c;
let TRANS_INPUT_SIZE_DISPLAY = 0x400, TRANS_INPUT_SIZE_FILEOUT = 0x19000;
console['log']('content.js\x20is\x20Loaded'), ((async () => {
    console['log']('cnt:\x20Noti\x20-\x20Sending\x20SWT_C2B_Notify_Ready\x20to\x20bak.'), await chrome['runtime']['sendMessage']({ 'message': 'SWT_C2B_Notify_Ready' }, c => {
        console['log']('cnt:\x20response\x20from\x20bak\x20=\x20', c);
    }), chrome['runtime']['lastError'] ? setTimeout(async () => {
        const c = await chrome['runtime']['sendMessage']({ 'message': 'SWT_C2B_Notify_Ready' });
        console['log']('cnt:\x20resp2\x20from\x20bak\x20=\x20' + c);
    }, 0xc8) : console['log']('cnt:\x20Noti\x20-\x20Sending\x20SWT_C2B_Notify_Ready\x20to\x20bak\x20OK.');
})());
function changeTextLinesToParas(c) {
    const d = document['querySelector'](c);
    if (!d) {
        console['warn']('Element\x20with\x20selector\x20\x22' + c + '\x22\x20not\x20found.');
        return;
    }
    const e = document['createDocumentFragment'](), f = Array['from'](d['childNodes']);
    let g = null, h = ![];
    f['forEach'](i => {
        if (i['nodeType'] === Node['ELEMENT_NODE'] && i['tagName'] === 'H1') {
            const j = document['createElement']('p');
            i['textContent']['trim'](), j['textContent'] = i['textContent'], e['appendChild'](j), g = j['textContent'], h = !![], console['log']('h1_p:', g);
        } else {
            if (i['nodeType'] === Node['TEXT_NODE']) {
                const k = document['createElement']('p');
                h && (console['log']('nxtp:', i['textContent']), h = ![]);
                if (g && i['textContent']['includes'](g))
                    k['textContent'] = '\x0a';
                else
                    k['textContent'] = i['textContent'];
                e['appendChild'](k);
            }
        }
    });
    while (d['firstChild']) {
        d['removeChild'](d['firstChild']);
    }
    d['appendChild'](e);
}
function splitParagraphsByBr() {
    let c = document['querySelector']('p');
    while (c) {
        const d = c['innerHTML']['indexOf']('<br>');
        if (d !== -0x1) {
            const e = c['innerHTML']['substring'](0x0, d), f = c['innerHTML']['substring'](d + 0x4), g = document['createElement']('p');
            g['innerHTML'] = e;
            const h = document['createElement']('p');
            h['innerHTML'] = f, c['parentNode']['insertBefore'](g, c), c['parentNode']['insertBefore'](h, c), c['remove'](), c = document['querySelector']('p');
        } else {
            c = c['nextElementSibling'];
            while (c && c['tagName'] != 'P') {
                c = c['nextElementSibling'];
            }
        }
    }
}
function collectParagraphs() {
    const c = [], d = document['createTreeWalker'](document['body'], NodeFilter['SHOW_ELEMENT'], {
            'acceptNode': function (e) {
                if (e['tagName'] === 'A' && e['textContent']['trim']() === '上一章')
                    return NodeFilter['FILTER_REJECT'];
                if (e['tagName'] === 'P' && e['textContent']['trim']()['length'] > 0x0)
                    return NodeFilter['FILTER_ACCEPT'];
                return NodeFilter['FILTER_SKIP'];
            }
        }, ![]);
    while (d['nextNode']()) {
        c['push'](d['currentNode']);
    }
    return c;
}
function createTextChunks(c, d) {
    const e = [];
    let f = '', g = d > 0x0 ? TRANS_INPUT_SIZE_FILEOUT : TRANS_INPUT_SIZE_DISPLAY;
    return c['forEach'](h => {
        const i = h['textContent']['trim']() + '\x0a';
        f['length'] + i['length'] > g ? (e['push'](f), f = i) : f += i;
    }), f['length'] > 0x0 && e['push'](f), e['map'](h => h['replace'](/\r\n|\r/g, '\x0a'));
}
async function translateText(c, d, e, f, g, h) {
    const i = 'https://generativelanguage.googleapis.com/v1beta/models/' + e + ':generateContent?key=' + d, j = {
            'contents': [{ 'parts': [{ 'text': aiPrompt + c }] }],
            'generationConfig': {
                'temperature': f,
                'topP': g,
                'topK': h,
                'maxOutputTokens': 0x2000
            }
        };
    try {
        const k = await fetch(i, {
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON['stringify'](j)
        });
        if (!k['ok']) {
            console['error']('HTTP\x20error!\x20status:\x20' + k['status'] + ',\x20\x20' + k['statusText']);
            if (k['status'] === 0x1ad)
                alert('HTTP\x20error\x20429:\x20Too\x20Many\x20Requests\x20to\x20AI\x20server.');
            return null;
        }
        const l = await k['json']();
        return l['candidates'] && l['candidates']['length'] > 0x0 && l['candidates'][0x0]['content'] && l['candidates'][0x0]['content']['parts'] && l['candidates'][0x0]['content']['parts']['length'] > 0x0 ? l['candidates'][0x0]['content']['parts'][0x0]['text'] : null;
    } catch (m) {
        return console['error']('Error\x20during\x20translation:', m), null;
    }
}
async function processTranslation(c, d, e, f, g, h) {
    splitParagraphsByBr();
    const i = collectParagraphs(), j = createTextChunks(i, h);
    let k = [], l = 0x0, m = 0x0, n = 0x0, o = 0x0, p = 0x0, q = d['includes']('gemini-2.5-pro') ? MIN_INTERVAL_MS_GEM25PRO : MIN_INTERVAL_MS, r = 0x0, s = 0x0;
    for (const t of j) {
        let u = [];
        if (h > 0x0)
            m = Date['now']();
        const v = await translateText(t, c, d, e, f, g);
        if (v === null)
            return console['log']('translatedText\x20fail'), alert('번역이\x20되지\x20않습니다.'), null;
        const w = v['split']('\x0a')['filter'](x => x['trim']()['length'] > 0x0);
        k['push'](...w);
        if (h > 0x0) {
            n = Date['now'](), o = n - m, p = q - o, console['log']('Req[' + r + ']\x20번역소요시간\x20' + o + '\x20ms');
            if (p > 0x0)
                setTimeout(() => {
                    console['log']('\x20\x20\x20\x20지연시간\x20' + p + '\x20ms');
                }, p);
        } else {
            u['push'](...w), l += u['length'];
            while (i['length'] < l) {
                const x = document['createElement']('p');
                i['push'](x), document['body']['appendChild'](x);
            }
            u['forEach'](y => {
                i[s] && (i[s]['textContent'] = y, s++);
            });
        }
        r++;
    }
    if (h > 0x0) {
        let y = k['join']('\x0a');
        return y;
    }
    return null;
}
chrome['runtime']['onMessage']['addListener'](async (c, d, e) => {
    console['log']('cnt:\x20onMessage:', c['message']);
    c['message'] === 'SWT_B2C_CheckTrial' && c['data']['ret'] && console['log']('3개월\x20시험평가기간\x20유효.');
    if (c['message'] === 'SWT_B2C_CheckTrial' && !c['data']['ret'])
        return alert('3개월\x20시험평가기간이\x20종료되었습니다.\x0a확장프로그램관리에서\x20삭제하여주십시요.'), !![];
    if (c['message'] !== 'SWT_B2C_Req_TransDisplay' && c['message'] !== 'SWT_B2C_Req_TransPageOut')
        return !![];
    if (!c['data'] || !c['data']['apiKey'] || !c['data']['transFlag'])
        return e({ 'status': 'Error:\x20Invalid\x20message\x20data.' }), !![];
    let f = c['message'] === 'SWT_B2C_Req_TransDisplay' ? 0x0 : c['data']['numPages'], g = ![], h = window['location']['hostname'], i = document['querySelectorAll']('p');
    const j = document['querySelector']('.txtnav');
    if (i['length'] < 0x3 && j && (h['includes']('69shuba') || h['includes']('69yuedu')))
        g = !![];
    console['log']('Is_txtnav:', g);
    g && (changeTextLinesToParas('.txtnav'), console['log']('changeTextLinesToParas'));
    const k = await processTranslation(c['data']['apiKey'], c['data']['aiModel'], c['data']['temper'], c['data']['topP'], c['data']['topK'], f);
    if (c['message'] === 'SWT_B2C_Req_TransPageOut' && k && f > 0x0) {
        let l = String(c['data']['fileIndex'] + c['data']['currIndex'])['padStart'](0x4, '0'), m = '' + c['data']['filePrefix'] + l + '.txt';
        const n = c['data']['currIndex'];
        console['log']('cnt:\x20send\x20SWT_C2B_Req_Download\x20to\x20bak:\x20' + n + ',\x20' + m), await chrome['runtime']['sendMessage']({
            'message': 'SWT_C2B_Req_Download',
            'data': {
                'fileName': m,
                'textContent': k,
                'currIndex': n
            }
        }, o => {
            if (chrome['runtime']['lastError'])
                console['log']('cnt:\x20Error\x20sending\x20SWT_C2B_Req_Download\x20message.', chrome['runtime']['lastError']);
        });
        if (c['data']['currIndex'] < c['data']['numPages']) {
            const o = document['querySelectorAll']('a');
            for (const p of o) {
                if (p['href'] && p['textContent']['includes']('下一章')) {
                    setTimeout(() => {
                        p['click']();
                    }, 0x1f4);
                    break;
                }
            }
        } else
            return console['log']('cnt:\x20All\x20pages\x20(' + c['data']['numPages'] + ')\x20done.'), !![];
    }
    return e({ 'status': 'OK' }), console['log']('cnt:\x20sent\x20response\x20to\x20background.js.'), !![];
});