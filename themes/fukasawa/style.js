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
    #announcement-content {
    display: block !important; /* 确保公告内容显示 */
    font-size: 18px; /* 你可以改大一点 */
    color: #333; /* 调整颜色让它更清晰 */
    }


    /* 隐藏公告标题，但保留公告内容 */
    #announcement-wrapper div:first-child {
    visibility: hidden; /* 让「公告」两个字不可见，但不影响布局 */
    height: 0; /* 避免占空间 */
    }
    #announcement-wrapper div:first-child i {
    display: none; /* 隐藏喇叭图标 */
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

