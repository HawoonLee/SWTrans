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
'use strict';
const IS_DEBUG = !![], RTPD = 0x5d, DTPD = 0x1, HARU_MS = 0x5265c00;
let content_script_flag = ![], waitMessages = [];
console['log']('background.js\x20is\x20Loaded');
async function ret_TP() {
    const c = await chrome['storage']['local']['get'](['BAR_1918']), d = c['BAR_1918'];
    console['log']('stmp1\x20=\x20' + d);
    if (!d)
        return ![];
    const e = Date['now'](), f = e - d, g = RTPD * HARU_MS, h = new Date(d);
    let i = new Date(e);
    console['log']('Install\x20Date:\x20' + h), console['log']('Current\x20Date:\x20' + i), console['log']('givenMS:\x20' + g), console['log']('diffMS:\x20' + f);
    if (f > g)
        return ![];
    return !![];
}
chrome['runtime']['onMessage']['addListener'](async (c, d, e) => {
    console['log']('bak:\x20Received\x20message:', c['message']);
    let f = 0x0;
    if (c['message'] !== 'SWT_C2B_Req_Download') {
        let g = await chrome['tabs']['query']({
            'active': !![],
            'currentWindow': !![]
        });
        if (!g || g['length'] === 0x0)
            return console['log']('bak:\x20No\x20active\x20tab\x20found.'), !![];
        f = g[0x0]['id'];
    }
    if (c['message'] === 'SWT_C2B_Notify_Ready') {
        content_script_flag = !![];
        if (waitMessages['length'] > 0x0) {
            const h = waitMessages['pop']();
            console['log']('bak:\x20Sending\x20' + h['message'] + '\x20to\x20cnt\x20(from\x20waitMessages)');
            const i = h['message'] === 'SWT_P2B_Req_TransDisplay' ? 'SWT_B2C_Req_TransDisplay' : 'SWT_B2C_Req_TransPageOut';
            await chrome['tabs']['sendMessage'](f, {
                'message': i,
                'data': h['data']
            }), waitMessages = [], e({ 'status': 'content_script_flag\x20set\x20to\x20true\x20and\x20send\x20' + i + '\x20to\x20cnt.' });
        } else
            console['log']('bak:\x20content_script_flag\x20set\x20to\x20true,\x20but\x20no\x20waitMessages\x20at\x20now.'), e({ 'status': 'content_script_flag\x20set\x20to\x20true,\x20but\x20no\x20waitMessages\x20at\x20now.' });
    } else {
        if (c['message'] === 'SWT_P2B_Req_TransDisplay' || c['message'] === 'SWT_P2B_Req_TransPageOut') {
            console['log']('==>\x20' + c['message'] + '\x20comes\x20from\x20pop');
            if (content_script_flag) {
                const j = c['message'] === 'SWT_P2B_Req_TransDisplay' ? 'SWT_B2C_Req_TransDisplay' : 'SWT_B2C_Req_TransPageOut';
                console['log']('bak:\x20content_script_flag\x20is\x20true,\x20sending\x20' + j + '\x20to\x20cnt.'), await chrome['tabs']['sendMessage'](f, {
                    'message': j,
                    'data': c['data']
                }, k => {
                    if (chrome['runtime']['lastError'])
                        console['log']('bak:\x20onMessage:\x20Error\x20-\x20', chrome['runtime']['lastError']);
                    else
                        console['log']('bak:\x20onMessage:\x20Response\x20from\x20cnt:', k);
                });
            } else
                try {
                    await chrome['tabs']['reload'](c['data']['thisTabId']);
                } catch (k) {
                    console['log']('bak:\x20content_script_flag\x20==\x20false,\x20Pushing\x20' + c['message'] + '\x20message\x20to\x20waitMessages.'), waitMessages['push'](c), e({ 'status': 'content_script_flag\x20is\x20false.\x20message\x20waited.' });
                }
        } else {
            if (c['message'] === 'SWT_C2B_Req_Download')
                console['log']('bak:\x20Download:\x20' + c['data']['currIndex'] + ',\x20' + c['data']['fileName']), await chrome['downloads']['download']({
                    'url': 'data:text/plain;charset=utf-8,' + encodeURIComponent(c['data']['textContent']),
                    'filename': c['data']['fileName'],
                    'saveAs': ![]
                }, async l => {
                    if (chrome['runtime']['lastError'])
                        console['log']('Error:\x20Download\x20failed\x20-\x20', chrome['runtime']['lastError']);
                    else
                        return await chrome['storage']['local']['set']({ 'currIndex': c['data']['currIndex'] + 0x1 }), e({ 'status': 'download\x20OK' }), !![];
                });
            else {
                if (c['message'] === 'SWT_P2B_Req_CheckTrial') {
                    const l = await ret_TP();
                    console['log']('bak:\x20onMessage:\x20SWT_P2B_Req_CheckTrial:\x20ret_TP()\x20return\x20' + l), await chrome['tabs']['sendMessage'](f, {
                        'message': 'SWT_B2C_CheckTrial',
                        'data': { 'ret': l }
                    });
                }
            }
        }
    }
    return !![];
}), chrome['tabs']['onUpdated']['addListener'](async (c, d, e) => {
    if (d['status'] !== 'complete')
        return;
    console['log']('bak:\x20onUpdated\x20-\x20URL\x20changed\x20(tabId=' + c + ',\x20status=' + d['status'] + ')');
    if (!e || !e['id']) {
        console['error']('bak:\x20onUpdated\x20-\x20Invalid\x20tab\x20or\x20tab.id.');
        return;
    }
    const f = await chrome['storage']['local']['get']([
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
    console['log']('bak:\x20onUpdated\x20-\x20Retrieved\x20from\x20storage:', f);
    if (c !== f['thisTabId']) {
        console['log']('bak:\x20onUpdated\x20-\x20Tab\x20ID\x20mismatch\x20error\x20(tabId=' + c + ',\x20storedTabId=' + f['thisTabId'] + ')');
        return;
    }
    let g = f['transFlag'];
    !f['apiKey'] && (console['log']('bak:\x20onUpdated\x20-\x20Invalid\x20apiKey.'), g = ![]);
    f['numPages'] > 0x0 && f['currIndex'] >= f['numPages'] && (console['log']('bak:\x20onUpdated:\x20All\x20pages\x20done.\x20(currIndex\x20' + f['currIndex'] + ',\x20numPages\x20' + f['numPages'] + ')'), g = ![]);
    await chrome['storage']['local']['set']({ 'transFlag': g });
    if (g === ![])
        return;
    let h = f['numPages'] === 0x0 ? 'SWT_B2C_Req_TransDisplay' : 'SWT_B2C_Req_TransPageOut';
    chrome['tabs']['sendMessage'](c, {
        'message': h,
        'data': {
            'apiKey': f['apiKey'],
            'aiModel': f['aiModel'],
            'temper': f['temper'],
            'topP': f['topP'],
            'topK': f['topK'],
            'thisTabId': f['thisTabId'],
            'transFlag': g,
            'filePrefix': f['filePrefix'],
            'fileIndex': f['fileIndex'],
            'currIndex': f['currIndex'],
            'numPages': f['numPages']
        }
    }, i => {
        if (chrome['runtime']['lastError'])
            console['log']('bak:\x20onUpdated:\x20Error\x20-\x20', chrome['runtime']['lastError']);
        else
            console['log']('bak:\x20onUpdated:\x20Response\x20from\x20cnt:', i);
    }), console['log']('bak:\x20onUpdated:\x20message\x20sent\x20to\x20cnt');
}), chrome['runtime']['onInstalled']['addListener'](c => {
    if (c['reason'] === 'install') {
        const d = Date['now']();
        chrome['storage']['local']['set']({ 'BAR_1918': d }, () => {
            if (chrome['runtime']['lastError'])
                console['error']('Error\x20reading\x20storage:', chrome['runtime']['lastError']);
        });
    } else
        c['reason'] === 'update' && console['log']('Extension\x20updated\x20to\x20version:', chrome['runtime']['getManifest']()['version']);
});