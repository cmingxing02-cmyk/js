var rule = {
    title: '测试分类源（无真实资源）',
    host: 'http://localhost',  // 随便填，无效也行
    url: '/fake',              // 无实际意义
    searchUrl: '/fake',
    searchable: 0,             // 关闭搜索，避免无意义请求
    quickSearch: 0,
    filterable: 0,
    headers: {'User-Agent': 'MOBILE_UA'},

    // 自定义分类（显示在首页顶部）
    class_name: '电影&剧集&动漫&综艺&短剧&纪录片',
    class_url: 'dy&tv&dm&zy&dj&jl',

    // 一级列表：直接返回写死的假数据（不请求网络）
    一级: 'js:' +
        'let d = [];' +
        'let fakeList = [' +
        '    {title: "测试影片1", pic: "https://via.placeholder.com/300x450/FF6B6B/FFFFFF?text=测试1", remark: "HD"},' +
        '    {title: "假电影2025", pic: "https://via.placeholder.com/300x450/4ECDC4/FFFFFF?text=电影", remark: "1080P"},' +
        '    {title: "虚构剧集第1季", pic: "https://via.placeholder.com/300x450/45B7D1/FFFFFF?text=剧集", remark: "更新至10集"},' +
        '    {title: "动画测试片", pic: "https://via.placeholder.com/300x450/96CEB4/FFFFFF?text=动漫", remark: "全26集"},' +
        '    {title: "综艺模拟节目", pic: "https://via.placeholder.com/300x450/FFEEAD/FFFFFF?text=综艺", remark: "2025-12-31"},' +
        '    {title: "短剧示例", pic: "https://via.placeholder.com/300x450/D4A5A5/FFFFFF?text=短剧", remark: "完结"},' +
        '    {title: "纪录片占位", pic: "https://via.placeholder.com/300x450/9B59B6/FFFFFF?text=纪录", remark: "4K"}' +
        '];' +
        'fakeList.forEach(item => {' +
        '    d.push({' +
        '        title: item.title,' +
        '        pic_url: item.pic,' +
        '        desc: item.remark,' +
        '        url: "fake://no-play",' +  // 点进去不会播放
        '        content: "这是一个测试源，无真实资源"' +
        '    });' +
        '});' +
        'setResult(d);',

    // 二级页面：点进去显示提示，无播放源
    二级: 'js:' +
        'let d = {};' +
        'd.title = input;' +
        'd.img = "https://via.placeholder.com/600x900/2C3E50/FFFFFF?text=无资源";' +
        'd.desc = "更新时间：永不更新\\n状态：纯测试用\\n年份：2025";' +
        'd.content = "这是一个纯测试源，仅用于显示分类和列表界面。\\n无任何真实影视资源，无法播放。\\n可用于测试OK影视Pro界面、切换站点、调试配置等。";' +
        'd.tabs = ["提示"];' +
        'd.lists = [["本源无播放线路，仅供测试"]];' +
        'setResult(d);',

    // 搜索直接返回空或提示
    搜索: 'js:' +
        'let d = [];' +
        'd.push({' +
        '    title: "搜索已关闭",' +
        '    pic_url: "https://via.placeholder.com/300x450/34495E/FFFFFF?text=无搜索",' +
        '    desc: "测试源",' +
        '    url: "fake://",' +
        '    content: "此源不支持搜索"' +
        '});' +
        'setResult(d);'
};
