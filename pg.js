var rule = {
    title: '纯测试分类源',
    host: 'http://127.0.0.1',
    homeUrl: '/',
    url: '/',
    searchable: 0,
    quickSearch: 0,
    filterable: 0,

    // 强制显示这些分类（最关键）
    class_name: '电影&连续剧&动漫&综艺&短剧&纪录片',
    class_url: '1&2&3&4&5&6',

    // 分类解析用最简单的伪类（不会实际请求）
    类名: '1&&Text',   // 不会用到，但必须写点东西占位
    类url: '1',

    // 一级直接返回固定假数据（最稳方式）
    一级: '.fake&&.item;img&&alt;img&&src;.remark&&Text;a&&href',
    推荐: '*',
    一级: 'js:' +
        'let d=[];' +
        'let list = ["测试电影A","假剧集第1季","虚拟动漫","综艺节目","短剧示例","纪录片占位","备用影片"];' +
        'let pics = [' +
        '"https://via.placeholder.com/300x450/FF6B6B/FFFFFF?text=电影",' +
        '"https://via.placeholder.com/300x450/4ECDC4/FFFFFF?text=剧集",' +
        '"https://via.placeholder.com/300x450/45B7D1/FFFFFF?text=动漫",' +
        '"https://via.placeholder.com/300x450/96CEB4/FFFFFF?text=综艺",' +
        '"https://via.placeholder.com/300x450/FFEEAD/FFFFFF?text=短剧",' +
        '"https://via.placeholder.com/300x450/D4A5A5/FFFFFF?text=纪录",' +
        '"https://via.placeholder.com/300x450/9B59B6/FFFFFF?text=备用"' +
        '];' +
        'let remarks = ["HD","更新至12集","全26集","2025期","完结","4K","1080P"];' +
        'for(let i=0;i<7;i++){' +
        '    d.push({' +
        '        title:list[i],' +
        '        pic_url:pics[i],' +
        '        desc:remarks[i],' +
        '        url:"http://127.0.0.1",' +
        '        content:"纯测试源"' +
        '    });' +
        '}' +
        'setResult(d);',

    二级: 'js:' +
        'VOD = {};' +
        'VOD.vod_name = "测试影片详情";' +
        'VOD.vod_pic = "https://via.placeholder.com/600x900/34495E/FFFFFF?text=无播放";' +
        'VOD.vod_remarks = "纯测试用例";' +
        'VOD.vod_content = "这是一个纯本地测试源\\n仅用于验证分类显示和界面加载\\n没有任何真实资源";' +
        'VOD.vod_play_from = "测试线路";' +
        'VOD.vod_play_url = "无播放源$http://127.0.0.1";'
};
