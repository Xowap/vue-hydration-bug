import { createSSRApp } from "vue";

export function createApp() {
    return createSSRApp({
        template: `
<div>
    <div style="background-color: aquamarine;">
        <p>AAAAAAAAA</p>
    </div>
    <div style="background-color: yellow;">
        <p>BBBBBBBBBBB</p>
    </div>
    <!-- Comment -->
    <div style="background-color: orange;">
        <div>CCCCCCCCCC</div>
    </div>
    <div style="background-color: aquamarine;">
        <p>AAAAAAAAA</p>
    </div>
    <div style="background-color: yellow;">
        <p>BBBBBBBBBBB</p>
    </div>
    <!-- Comment 2 -->
    <div style="background-color: orange;">
        <div>CCCCCCCCCC</div>
    </div>
</div>
        `,
    });
}
