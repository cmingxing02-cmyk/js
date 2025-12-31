var rule = {
    title: 'PG演示站',
    host: 'https://pg.tp510k.top/',
    url: '/index.php/vod/type/id/fyclass/page/fypage.html',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    searchable: 2,
    quickSearch: 1,
    filterable: 1,
    headers: {'User-Agent': 'MOBILE_UA'},
    class_name: '电影&连续剧&综艺&动漫&短剧',
    class_url: '1&2&3&4&41',
    play_parse: true,
    lazy: '',
    limit: 24,
    double: true,

    一级: '.module-item;.module-item-cover .module-item-pic img&&alt;.module-item-cover .module-item-pic img&&data-original;.module-item-text&&Text;a&&href',  // 关键优化：图片用data-original，备注用.module-item-text

    二级: {
        "title": ".video-info-header h1&&Text",
        "img": ".module-item-pic img&&data-original || .lazyload&&data-original",
        "desc": ".video-info-items:eq(3)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(0)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(4)&&Text",
        "content": ".sqjj_a&&Text",
        "tabs": ".module-tab-item",
        "lists": ".module-play-list:eq(#id)&&a"
    },

    搜索: '.module-search-item;.video-title&&Text;.lazyload&&data-original;.video-serial&&Text;a&&href'  // 搜索也优化
};
