var rule = {
    title: 'PG演示站',                  // 站点名称（在app中显示）
    host: 'https://pg.tp510k.top',      // 主域名，使用HTTPS
    url: '/index.php/vod/type/id/fyclass/page/fypage.html',  // 更新为正确的分类URL格式，fyclass占位分类ID，fypage占位页码（第一页也包含/page/1）
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',  // 更新为正确的搜索URL，**占位关键词，fypage占位页码
    searchable: 2,                      // 1=可搜索，2=可搜索+可筛选
    quickSearch: 1,                     // 1=快速搜索
    filterable: 1,                      // 1=支持分类筛选（如果有筛选参数）
    headers: {
        'User-Agent': 'MOBILE_UA',      // 模拟手机访问
    },
    class_name: '电影&连续剧&综艺&动漫&短剧',  // 分类名称（从首页导航复制）
    class_url: '1&2&3&4&41',                   // 对应分类ID（已验证：1电影2剧集3综艺4动漫41短剧）
    
    play_parse: true,                   // true=用app内置解析
    lazy: '',                           // 懒加载播放（如果播放链接需嗅探或解密可自定义）
    limit: 24,                          // 每页显示数量（蘑菇云通常20-30）
    double: true,                       // 双层解析（推荐开启，更稳定）
    
    // 一级列表：分类页/首页/搜索结果影片列表
    一级: '.module-item;.module-item-pic img&&alt;.module-item-pic img&&data-src;.remarks&&Text;a&&href',  // 更新备注选择器为.remarks&&Text（基于网站HTML）
    
    // 二级详情页
    二级: {
        "title": ".video-info-header h1&&Text",               // 标题
        "img": ".lazyload&&data-original",                    // 海报（常见懒加载）
        "desc": ".video-info-items:eq(3)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(0)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(4)&&Text",  // 导演/主演/类型/年份/地区等
        "content": ".sqjj_a&&Text",                            // 简介（常见类名）
        "tabs": ".module-tab-item",                           // 播放线路tab
        "lists": ".module-play-list:eq(#id)&&a"               // 集数列表：eq(#id)占位线路tab索引，a标签为集数
    },
    
    // 搜索（通常与一级相同）
    搜索: '.module-search-item;.video-serial&&Text;.lazyload&&data-original;.video-name&&Text;a&&href;.video-serial&&Text',
};