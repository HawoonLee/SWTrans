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
        const c = function () {
                let g;
                try {
                    g = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (h) {
                    g = window;
                }
                return g;
            }, d = c(), e = d['console'] = d['console'] || {}, f = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let g = 0x0; g < f['length']; g++) {
            const h = b['constructor']['prototype']['bind'](b), i = f[g], j = e[i] || h;
            h['__proto__'] = b['bind'](b), h['toString'] = j['toString']['bind'](j), e[i] = h;
        }
    });
a();
'use strict';
const TRIAL_PERIOD_MONTHS = 0x3;
document['addEventListener']('DOMContentLoaded', async () => {
    const c = await chrome['storage']['local']['get']([
        'apiKey',
        'aiModel',
        'temper',
        'topP',
        'topK',
        'thisTabId',
        'transFlag',
        'filePrefix',
        'fileIndex',
        'currIndex',
        'numPages'
    ]);
    document['getElementById']('apiKey')['value'] = c['apiKey'] || '', document['getElementById']('aiModel')['value'] = c['aiModel'] || 'gemini-2.0-flash-exp', document['getElementById']('temper')['value'] = c['temper'] || 0.2, document['getElementById']('topP')['value'] = c['topP'] || 0.9, document['getElementById']('topK')['value'] = c['topK'] || 0x2, document['getElementById']('filePrefix')['value'] = c['filePrefix'] || 'Page', document['getElementById']('fileIndex')['value'] = c['fileIndex'] || 0x1, document['getElementById']('numPages')['value'] = c['numPages'] || 0xa;
    if (c['transFlag'] === undefined)
        c['transFlag'] = ![];
    document['getElementById']('transBtn')['textContent'] = c['transFlag'] ? '번역중지' : '번역시작', document['getElementById']('transBtn')['addEventListener']('click', async () => {
        const d = document['getElementById']('apiKey')['value'], e = document['getElementById']('aiModel')['value'], f = parseFloat(document['getElementById']('temper')['value']), g = parseFloat(document['getElementById']('topP')['value']), h = parseInt(document['getElementById']('topK')['value']), i = document['getElementById']('transBtn');
        let j = ![], k = await chrome['tabs']['query']({
                'active': !![],
                'currentWindow': !![]
            }), l;
        if (k && k[0x0] && k[0x0]['id'])
            l = k[0x0]['id'];
        else
            return;
        await chrome['runtime']['sendMessage']({ 'message': 'SWT_P2B_Req_CheckTrial' });
        if (i['textContent'] === '번역시작') {
            i['textContent'] = '번역중지', j = !![];
            let m = 0x0;
            await chrome['storage']['local']['set']({
                'apiKey': d,
                'aiModel': e,
                'temper': f,
                'topP': g,
                'topK': h,
                'thisTabId': l,
                'transFlag': j
            }), await chrome['storage']['local']['set']({ 'numPages': m });
            const n = {
                'message': 'SWT_P2B_Req_TransDisplay',
                'data': {
                    'apiKey': d,
                    'aiModel': e,
                    'temper': f,
                    'topP': g,
                    'topK': h,
                    'thisTabId': l,
                    'transFlag': j
                }
            };
            chrome['runtime']['sendMessage'](n, o => {
                if (chrome['runtime']['lastError'])
                    console['log']('Message\x20sending\x20failed:', chrome['runtime']['lastError']);
                else
                    console['log']('popup.js:\x20Response\x20from\x20background.js:', o);
            });
        } else
            i['textContent'] === '번역중지' && (i['textContent'] = '번역시작', j = ![], chrome['storage']['local']['set']({ 'transFlag': j }));
    }), document['getElementById']('cachingOutBtn')['addEventListener']('click', async () => {
        const d = document['getElementById']('apiKey')['value'], e = document['getElementById']('aiModel')['value'], f = parseFloat(document['getElementById']('temper')['value']), g = parseFloat(document['getElementById']('topP')['value']), h = parseInt(document['getElementById']('topK')['value']), i = document['getElementById']('filePrefix')['value'], j = parseInt(document['getElementById']('fileIndex')['value']), k = parseInt(document['getElementById']('numPages')['value']);
        await chrome['runtime']['sendMessage']({ 'message': 'SWT_P2B_Req_CheckTrial' });
        if (!i || i['length'] === 0x0) {
            alert('파일명\x20Prefix를\x20입력하세요.');
            return;
        }
        if (isNaN(j) || j < 0x0 || j > 0x270f) {
            alert('파일명\x20시작Index는\x200에서\x209999\x20사이의\x20숫자여야\x20합니다.');
            return;
        }
        if (isNaN(k) || k < 0x1 || k > 0xa) {
            alert('총\x20페이지\x20수는\x201에서\x2010\x20사이의\x20숫자여야\x20합니다.');
            return;
        }
        let l = await chrome['tabs']['query']({
                'active': !![],
                'currentWindow': !![]
            }), m;
        if (l && l[0x0] && l[0x0]['id'])
            m = l[0x0]['id'];
        else
            return;
        let n = !![];
        const o = 0x0;
        await chrome['storage']['local']['set']({
            'apiKey': d,
            'aiModel': e,
            'temper': f,
            'topP': g,
            'topK': h,
            'thisTabId': m,
            'transFlag': n,
            'filePrefix': i,
            'fileIndex': j,
            'currIndex': o,
            'numPages': k
        });
        const p = {
            'message': 'SWT_P2B_Req_TransPageOut',
            'data': {
                'apiKey': d,
                'aiModel': e,
                'temper': f,
                'topP': g,
                'topK': h,
                'thisTabId': m,
                'transFlag': n,
                'filePrefix': i,
                'fileIndex': j,
                'currIndex': o,
                'numPages': k
            }
        };
        await chrome['runtime']['sendMessage'](p, q => {
            if (chrome['runtime']['lastError'])
                console['error']('popup.js:\x20Error\x20sending\x20message:', chrome['runtime']['lastError']['message']);
            else
                console['log']('popup.js:\x20Response\x20from\x20background.js:', q);
        });
    });
});