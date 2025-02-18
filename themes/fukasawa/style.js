/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    // 底色
    body{
        background-color: #eeedee;
    }
    .dark body{
        background-color: black;
    }
    
    /* fukasawa的首页响应式分栏 */
    #theme-fukasawa .grid-item {
        height: auto;
        break-inside: avoid-column;
        margin-bottom: .5rem;
    }


    

    /* GPT帮我修改的 公告内容字体大小 */
    /* 隐藏“公告”两个字 */
    #announcement-wrapper div:first-child {
    display: none !important;
    }
    
    #announcement-content {
    display: block !important; /* 确保公告内容不会被隐藏 */
    font-size: 18px; /* 字体大小，可以调整 */
    color: #333333; /* 颜色变深一点，避免太浅看不清 */
    }


    /* GPT帮我修改的  修改引用的样式 */
    .notion-quote {
    font-size: 14px; /* 字体大小 */
    font-style: italic; /* 让字体变斜 */
    color: #666666; /* 文字颜色变浅 */
    border-left: 4px solid #ccc; /* 左侧添加灰色竖线 */
    padding-left: 12px; /* 让内容稍微内缩 */
    padding-top：26px; /* 让上面留有空行 */
    padding-bottom：14px；
    margin: 12px 12px; /* 上下增加间距 */
    line-height: 1;
    }





    
    /* 大屏幕（宽度≥1024px）下显示3列 */
    @media (min-width: 1024px) {
        #theme-fukasawa .grid-container {
        column-count: 3;
        column-gap: .5rem;
        }
    }
    
    /* 小屏幕（宽度≥640px）下显示2列 */
    @media (min-width: 640px) and (max-width: 1023px) {
        #theme-fukasawa .grid-container {
        column-count: 2;
        column-gap: .5rem;
        }
    }
    
    /* 移动端（宽度<640px）下显示1列 */
    @media (max-width: 639px) {
        #theme-fukasawa .grid-container {
        column-count: 1;
        column-gap: .5rem;
        }
    }

    .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            padding: 10px;
        }

  `}</style>
}

export { Style }

