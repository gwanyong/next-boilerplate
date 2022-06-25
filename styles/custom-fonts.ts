import { css } from "styled-components";

const CustomFonts = css`
  /**
 * Copyright (c) 2015 Spoqa, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
  @font-face {
    font-family: "Cafe24Ssurround";
    font-weight: 400;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24SsurroundAir/Cafe24SsurroundAir.eot");
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24SsurroundAir/Cafe24SsurroundAir.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24SsurroundAir/Cafe24SsurroundAir.woff2") format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24SsurroundAir/Cafe24SsurroundAir.woff") format("woff"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24SsurroundAir/Cafe24SsurroundAir.ttf") format("truetype");
    font-display: swap;
    //src: url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Regular.eot");
    //src: url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Regular.eot?#iefix")
    //    format("embedded-opentype"),
    //  url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Regular.woff2") format("woff2"),
    //  url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Regular.woff") format("woff"),
    //  url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Regular.ttf") format("truetype");
    //font-display: swap;
  }
  @font-face {
    font-family: "Cafe24Ssurround";
    font-weight: 700;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Ssurround/Cafe24Ssurround.eot");
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Ssurround/Cafe24Ssurround.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Ssurround/Cafe24Ssurround.woff2") format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Ssurround/Cafe24Ssurround.woff") format("woff"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Ssurround/Cafe24Ssurround.ttf") format("truetype");
    //font-display: swap;
    //src: url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Bold.eot");
    //src: url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Bold.eot?#iefix")
    //    format("embedded-opentype"),
    //  url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Bold.woff2") format("woff2"),
    //  url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Bold.woff") format("woff"),
    //  url("https://s3.coinghost.com/cdn/fonts/Cafe24Surround/Cafe24Ssurround-Bold.ttf") format("truetype");
    //font-display: swap;
  }
  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 700;
    src: local("Spoqa Han Sans Neo Bold"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    src: local("Spoqa Han Sans Neo Medium"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    src: local("Spoqa Han Sans Neo Regular"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 300;
    src: local("Spoqa Han Sans Neo Light"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 100;
    src: local("Spoqa Han Sans Neo Thin"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.ttf")
        format("truetype");
  }
`;
export default CustomFonts;
