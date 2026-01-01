var rule = {
    title: '剧梦屋',
    host: 'https://www.jumengwu.com',
    // homeUrl: '/',
    url: '/index.php/vod/type/id/fyclass.html?page=fypage',
    searchUrl: '/index.php/vod/search.html?wd=**&page=fypage',
    searchable: 2,
    quickSearch: 1,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    class_name: '电影&电视剧&动漫&综艺&纪录片&短剧',
    class_url: '1&2&3&4&5&6',
    cate_exclude: '',
    play_parse: true,
    lazy: '',
    limit: 20,
    推荐: '*',
    double: false,
    一级: 'a[href^="/index.php/vod/detail/id/"]:lt(30);a&&Text;a&&href;img&&data-original||src;.update-time&&Text',  // 首页/分类列表提取（标题;链接;图片;备注）
    二级: {
        "title": "h1&&Text;.data--span:eq(0)&&Text",  // 标题 + 年份/地区等
        "img": ".picture img&&src",
        "desc": ".data--span:eq(1)&&Text;;.data--span:eq(2)&&Text;.data--span:eq(3)&&Text;.data--span:eq(4)&&Text",
        "content": ".desc p&&Text",
        "tabs": ".play-source-tabs a",
        "lists": ".playlist li:eq(#id) a:eq(1);30"
    },
    搜索: '#search-list .video-item;a&&Text;a&&href;img&&data-original||src;.update-time&&Text',
}
