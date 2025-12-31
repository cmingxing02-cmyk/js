var rule = {
    title: 'PG影视',
    host: 'https://pg.tp510k.top',
    hostJs: '',
    headers: {'User-Agent': 'MOBILE_UA'},

    url: '/index.php/vod/type/id/fyclass/page/fypage.html',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',

    searchable: 2,
    quickSearch: 1,
    filterable: 1,

    class_name: '电影&连续剧&综艺&动漫&短剧',
    class_url: '1&2&3&4&41',

    limit: 24,
    double: true,
    推荐: '*',

    // 一级列表：标题、海报、备注、链接
    一级: '.module-item;.module-item-cover .module-item-pic img&&alt;.module-item-cover .module-item-pic img&&data-original;.module-item-text&&Text;a&&href',

    // 二级详情页
    二级: {
        "title": ".video-info-header h1&&Text;.tag-link:eq(0)&&Text",  // 标题 + 年份
        "img": ".module-item-pic img&&data-original",
        "desc": ".video-info-items:eq(0)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text;.video-info-items:eq(4)&&Text",
        "content": ".sqjj_a&&Text",
        "tabs": ".module-tab-item",
        "lists": ".module-play-list:eq(#id)&&a"
    },

    // 搜索列表
    搜索: '.module-search-item;.video-title&&Text;.module-item-pic img&&data-original;.video-serial&&Text;a&&href'
};
