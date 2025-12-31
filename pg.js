var rule = {
    title: '修罗影视（下载源）',
    host: 'https://xl01.com.de',
    url: '/s/fyclass',
    searchUrl: '/s/search?wd=**',

    searchable: 2,
    quickSearch: 1,
    filterable: 0,

    class_name: '最新电影&最新剧集&国产剧&港台剧&动漫&欧美剧&日韩剧',
    class_url: 'all?type=0&all?type=1&guoju&gangtaiju&donghua?type=1&meiju&hanju',

    // 一级：纯文本抓取（标题从a标签，备注从日期/评分）
    一级: 'js:' +
        'let html = request(input);' +
        'let d = [];' +
        'let lists = pdfa(html, "body && .list");' +  // 假设有.list或用正则
        'pdfa(html, "a").forEach(a => {' +
        '    let title = pdfh(a, "a&&Text");' +
        '    if(title && a.attr("href").startsWith("/")) {' +
        '        d.push({' +
        '            title: title,' +
        '            pic_url: "",' +  // 无图
        '            desc: "下载资源",' +
        '            url: "https://xl01.com.de" + a.attr("href"),' +
        '            content: "磁力/迅雷下载"' +
        '        });' +
        '    }' +
        '});' +
        'setResult(d);',

    // 二级：抓简介 + 下载链接
    二级: 'js:' +
        'let html = request(input);' +
        'VOD = {};' +
        'VOD.vod_name = pdfh(html, "h1&&Text") || "未知";' +
        'VOD.vod_pic = "";  // 无图
        'VOD.vod_content = pdfh(html, ".intro&&Text") || "无简介";' +
        'VOD.vod_play_from = "磁力下载$迅雷下载";' +
        'let mags = pdfa(html, "a[href^=magnet]");' +
        'let eds = pdfa(html, "a[href^=ed2k]");' +
        'let playUrl = mags.map(a => a.attr("href")).join("#") + "$" + eds.map(a => a.attr("href")).join("#");' +
        'VOD.vod_play_url = playUrl || "无下载链接";',

    lazy: 'js:' +
        'print("下载链接：" + input);' +  // 点播放显示链接，复制用下载器
        'input = {parse:0, url: "", jx:0};'
};
