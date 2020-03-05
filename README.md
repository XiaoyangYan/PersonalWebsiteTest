Personal Website
        想三年前，金戈铁马，气吞万里如虎。雄赳赳，气昂昂，零丁洋里望南洋。 
        如今欲归，元嘉草草，赢得仓皇北顾。心沉沉，意消消，不思量自当绝望。
        后世小子，莫要学我，人生若如初见。天苍苍，野茫茫，柳暗花明终归乡。

        https://xiaoyangyan.github.io/PersonalWebsiteTest/
        总结我两月以来面试的经验: 
        如果各位喜欢点个star
        前端概念篇
        1。 http系列
        （1）浏览器缓存
                                        强缓存：根据expires time来判断内存 max-age （相对缓存时间）
                                        协商缓存：根据last-modified/if-modified-since 或 Etag/if-none-match 浏览器第一次请求资源，服务器返回这个资源同时，在response header
                                        加上ETAG的header，这个header时根据当前请求的资源生成唯一一个表示。只要这个资源有变化和最后修改时间无关
                                        浏览器第一次请求资源，服务器返回这个资源同时，在response header加上ETAG的header，这个header时根据当前请求的资源生成唯一一个表示。ETag: shotcat-66666只要资源有变化这个串就不同，跟最后修改时间没有关系，所以能很好的补充Last-Modified的问题.
                                浏览器再次请求之歌资源时，在request的header加上if-none-match的header，这个header的值就是上一次请求时返回Etag的值
                                服务器再次受到资源请求时，根据浏览器传过来If-None-Match和再根据资源生成一个新的Etag。如果这两个值相同就说明资源没有变化，否则就是有变化。
                                ETag与If-None-Match > Last-Modified与If-Modified-Since, 同时存在时, 前者覆盖后者.
                                Cache-Control > Expires > ETag > Last-Modified
                                其他所有教程都是告诉你浏览器肯定是先检查强缓存,再检查协商缓存!但实际它们都忽略了一点.其实浏览器是先检查Cache-Control,如果为no-store.则浏览器 所有内容都不会缓存，强制缓存，协商缓存统统都不会触发!!!
                                （2）http请求头
                                        request header： 
                                        response header：
                                 （3）解释cookie，localStorage和sessionStorage
                                        都在浏览器端保存，都有大小限制，都受同源限制。
                                        cookie 是纯文本字段，没有可执行代码。存储数据，当用户访问了某个网站，我们可以通过cookie来向访问者的电脑上储存数据，或者某些网站为了辨别用户身份，
                                        进行session跟踪而储存在用户本地终端上的数据。可以存不同的domain和path在不同的cookie里面。
                                        cookie主要应用于三个方面：会话状态管理（用户登录状态，购物车，游戏分数) , 个性化设置 （用户自定义设置，主题等）  浏览器行为跟踪。
                                        set-cookie: value[; expires=date][; domain=domain][; path=path][; secure]httpOnlye]...
                                        一个set cookie只能设置一个cookie，如果想设置多个cookie，需要同样多的set-cookie字段
                                        浏览器不能保存超过30个cookie，服务器不能超过20个，每个cookie只有4KB储存能力。
                                        cookie在设置的有效期有效， sessionStorage在窗口关闭前有效，localStorage永久有效。
                                        cookie是字段，localStorage和sessionStorage可以用js方法进行存储 (setItem,getItem,removeItem)
                                        sessionStorage不能共享，localStorage只能在同源文档之间共享，cookie在同源且符合path规则的文档之间分享。
                                        localStorage的修改会促发其他文档窗口的update事件
                                        httpOnly：
                                         这个选项用来设置cookie是否能通过 js 去访问。默认情况下，cookie不会带httpOnly选项(即为空)，所以默认情况下，客户端是可以通过js代码去          访问（包括读取、修改、删除等）这个cookie的。当cookie带httpOnly选项时，客户端则无法通过js代码去访问（包括读取、修改、删除等）这个cookie。
                                 （4）同源， cors是什么， cors怎么实现？
                                            同源是为了保证用户信息的安全，防止恶意的网站窃取。浏览器的同源策略，限制了不同的document或脚本对当前的document的读取或设置某些属性。
                                            CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出XMLHttpRequest请求，
                                            从而克服了AJAX只能同源使用的限制
                                            CORS 分为两种请求，简单请求和非简单请求
                    withCredentials CORS请求默认不发送Cookie和Http认证信息。如果要把Cookie发到服务器，一方面要服务器同意，指定Access-Control-Allow-Credentials
                    字段。 Access-Control-Allow-Credentials: true.
                    var xhr = new XMLHttpRequest(); xhr.withCredentials = true;
            
            CORS的请求方法 简单请求 和 非简单请求
            简单请求：
             浏览器请求头中会默认增加origin字段，表示来自哪个源，服务器接受请求后，根据指定的源作出回应。
             响应头中：Access-Control-Allow-Origin:* || domain     Access-Control-Expose-Headers: xxx  指定浏览器获得自定义响应头
             Origin: http://api.bob.com
             
              请求是三种方法之一： HEAD， GET， POST 
            HTTP的头部信息不超过以下几种字段： ACCEPT， ACCEPT-LANGUAGE，CONTENT-LANGUAGE，LAST-Event-ID, Content-Type
            Access-Control-Allow-Origin(接受任意域名的请求)， 
            Access-Control-Allow-Credentials(改字段可选，它的值是一个布尔值。默认情况下，Cookie不包括在CORS请求之中), 
            Access-Control-Expose-Headers(该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段),
            Content-Type： 文件数据格式
            
            凡是不满足就是复杂请求
             
             非简单请求：
             出现条件：请求方法是PUT 或 DELETE，
             CONTENT-TYPE 字段的类型是application/json  增加额外的header字段；
             非简单请求的CORS请求，会在正式通信之前，增加一次HTTP 查询请求， 称为"预检"options 请求
             浏览器发出options请求头：
                origin: 源       
                Access-Control-Request-Method 用来列出浏览器的CORS请求会用哪些HTTP方法 
                Access-Control-Request-Headers 浏览器CORS请求会额外发送的头信息字段
            服务器返回options 响应头:
            
            jsonp: JSONP的原理很简单，就是利用<script>标签没有跨域限制的漏洞。通过<script>标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。JSONP使用简单且兼容性不错，但是只限于get请求。在开发中可能遇到多个JSONP 请求的回调函数名是相同的，这时候需要自己个封装一个JSONP，以下是简单实现。
            CORS：CORS跨域资源共享，定义了必须在访问跨域资源时，浏览器与服务器应该如何沟通。
                            CORS背后的基本思想就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。
                            整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。
    （5）xss与csrf 对比
                什么是 XSS
                    Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。
                    所以,网页上哪些部分会引起XSS攻击?简单来说,任何可以输入的地方都有可能引起,包括URL!
                    XSS 常见的注入方法：

                    在 HTML 中内嵌的文本中，恶意内容以 script 标签形成注入。
                    在内联的 JavaScript 中，拼接的数据突破了原本的限制（字符串，变量，方法名等）。
                    在标签属性中，恶意内容包含引号，从而突破属性值的限制，注入其他属性或者标签。
                    在标签的 href、src 等属性中，包含 javascript: (伪协议)等可执行代码。
                    在 onload、onerror、onclick 等事件中，注入不受控制代码。
                    在 style 属性和标签中，包含类似 background-image:url("javascript:..."); 的代码（新版本浏览器已经可以防范）。
                    在 style 属性和标签中，包含类似 expression(...) 的 CSS 表达式代码（新版本浏览器已经可以防范）。

                    XSS 攻击的分类
                    根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。
                    存储型 XSS
                        存储型 XSS 的攻击步骤：

                        攻击者将恶意代码提交到目标网站的数据库中。
                        用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。
                        用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
                        恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

                        存储型 XSS(又被称为持久性XSS)攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。
                        它是最危险的一种跨站脚本，相比反射型XSS和DOM型XSS具有更高的隐蔽性，所以危害更大，因为它不需要用户手动触发。任何允许用户存储数据的web程序都可能存在存储型XSS漏洞，当攻击者提交一段XSS代码后，被服务器端接收并存储，当所有浏览者访问某个页面时都会被XSS。
                        反射型 XSS
                        反射型 XSS 的攻击步骤：

                        攻击者构造出特殊的 URL，其中包含恶意代码。
                        用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。
                        用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
                        恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

                        反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。
                        反射型 XSS (也被称为非持久性XSS)漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。
                        由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
                        POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。
                        DOM 型 XSS
                        DOM 型 XSS 的攻击步骤：

                        攻击者构造出特殊的 URL，其中包含恶意代码。
                        用户打开带有恶意代码的 URL。
                        用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。
                        恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

                        DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。
                      防御XSS
                            只要有输入数据的地方，就可能存在 XSS 危险。
                            常用防范方法


                            httpOnly: 在 cookie 中设置 HttpOnly 属性后，js脚本将无法读取到 cookie 信息。


                            输入过滤: 一般是用于对于输入格式的检查，例如：邮箱，电话号码，用户名，密码……等，按照规定的格式输入。不仅仅是前端负责，后端也要做相同的过滤检查。因为攻击者完全可以绕过正常的输入流程，直接利用相关接口向服务器发送设置。


                            转义 HTML: 如果拼接 HTML 是必要的，就需要对于引号，尖括号，斜杠进行转义,但这还不是很完善.想对 HTML 模板各处插入点进行充分的转义,就需要采用合适的转义库.(可以看下这个库,还是中文的)。
     
                              什么是 CSRF
                        跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。如:攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。
                        CSRF与 XSS 区别
                  通常来说 CSRF 是由 XSS 实现的，CSRF 时常也被称为 XSRF（CSRF 实现的方式还可以是直接通过命令行发起请求等）。
                     本质上讲，XSS 是代码注入问题，CSRF 是 HTTP 问题。 XSS 是内容没有过滤导致浏览器将攻击者的输入当代码执行。CSRF 则是因为浏览器在发送 HTTP 请求时候自动带上 cookie，而一般网站的 session 都存在 cookie里面(Token验证可以避免)。

                          防御


                          验证码；强制用户必须与应用进行交互，才能完成最终请求。此种方式能很好的遏制 csrf，但是用户体验比较差。


                          Referer check；请求来源限制，此种方法成本最低，但是并不能保证 100% 有效，因为服务器并不是什么时候都能取到 Referer，而且低版本的浏览器存在伪造 Referer 的风险。


                          token；token 验证的 CSRF 防御机制是公认最合适的方案。(具体可以查看本系列前端鉴权中对token有详细描述)若网站同时存在 XSS 漏洞的时候，这个方法也是空谈。
    （6）内存泄露
                不再用到的内存（一个不用到的值）没有及时释放，就叫做内存泄漏（memory leak）。

                垃圾回收机制：引用计数
                最常使用的方法叫做"引用计数"（reference counting）：语言引擎有一张"引用表"，
                保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就
                表示这个值不再用到了，因此可以将这块内存释放

                JavaScript的解释器可以检测到何时程序不再使用一个对象了，当他确定了一个对象是无用的时候，
                他就知道不再需要这个对象，可以把它所占用的内存释放掉了
                
                js中最常用的垃圾回收方式就是标记清除。
                当变量进入环境时，例如，在一个函数中声明一个变量，就将这个变量标记为"进入环境"，
                从逻辑上讲，永远不能释放进入环境变量所占用的内存，因为只要执行流进入相应的环境，
                就可能会用到它们。而当变量离开环境时，则将其标记为"离开环境"
       
    （7）浏览器输入url，之后一些列过程
                    在浏览器地址栏输入URL
                    浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤
                    如果资源未缓存，发起新请求
                    如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
                    检验新鲜通常有两个HTTP头进行控制Expires和Cache-Control：
                    HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期
                    HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间
                    浏览器解析URL获取协议，主机，端口，path
                    浏览器组装一个HTTP（GET）请求报文
                    浏览器获取主机ip地址，过程如下：
                    浏览器缓存
                    本机缓存
                    hosts文件
                    路由器缓存
                    ISP DNS缓存
                    DNS递归查询（可能存在负载均衡导致每次IP不一样）
                    打开一个socket与目标IP地址，端口建立TCP链接，三次握手如下：
                    客户端发送一个TCP的SYN=1，Seq=X的包到服务器端口
                    服务器发回SYN=1， ACK=X+1， Seq=Y的响应包
                    客户端发送ACK=Y+1， Seq=Z
                    TCP链接建立后发送HTTP请求
                    服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
                    服务器检查HTTP请求头是否包含缓存验证信息如果验证缓存新鲜，返回304等对应状态码
                    处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
                    服务器将响应报文通过TCP连接发送回浏览器
                    浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下：
                    主动方发送Fin=1， Ack=Z， Seq= X报文
                    被动方发送ACK=X+1， Seq=Z报文
                    被动方发送Fin=1， ACK=X， Seq=Y报文
                    主动方发送ACK=Y， Seq=X报文
                    浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
                    如果资源可缓存，进行缓存
                    对响应进行解码（例如gzip压缩）
                    根据资源类型决定如何处理（假设资源为HTML文档）
                    解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本，这些操作没有严格的先后顺序，以下分别解释
                    构建DOM树：
                    Tokenizing：根据HTML规范将字符流解析为标记
                    Lexing：词法分析将标记转换为对象并定义属性和规则
                    DOM construction：根据HTML标记关系将对象组成DOM树
                    解析过程中遇到图片、样式表、js文件，启动下载
                    构建CSSOM树：
                    Tokenizing：字符流转换为标记流
                    Node：根据标记创建节点
                    CSSOM：节点创建CSSOM树
                    根据DOM树和CSSOM树构建渲染树:
                    从DOM树的根节点遍历所有可见节点，不可见节点包括：1）script,meta这样本身不可见的标签。2)被css隐藏的节点，如display: none
                    对每一个可见节点，找到恰当的CSSOM规则并应用
                    发布可视节点的内容和计算样式
                    js解析如下：
                    HTML解析器遇到没有async和defer的script时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容
                    当解析器遇到设置了async属性的script时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用document.write()，它们可以访问自己script和之前的文档元素
                    当文档完成解析，document.readState变成interactive
                    所有defer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用document.write()
                    浏览器在Document对象上触发DOMContentLoaded事件
                    此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，document.readState变为complete,window触发load事件。显示页面（HTML解析过程中会逐步显示页面）
  （8）什么是web语义化，有什么好处
                    web语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。 HTML标签的语义化是指：
                    通过使用包含语义的标签（如h1-h6）恰当地表示文档结构 css命名的语义化是指：为html标签添加有意义的class，id补充未表达的语义，
                    如Microformat通过添加符合规则的class描述信息 为什么需要语义化：
                    去掉样式后页面呈现清晰的结构，盲人使用读屏器更好地阅读，搜索引擎更好地理解页面，有利于收录，便团队项目的可持续运作及维护  
  （9）http 1.0, http1.1 和 http 2.0
            HTTP/1.0一次只允许在一个TCP连接上发起一个请求，HTTP/1.1使用的流水线技术也只能部分处理请求并发，仍然会存在队列头阻塞问题，因此
                                客户端在需要发起多次请求时，通常会采用建立多连接来减少延迟。
                    单向请求，只能由客户端发起。
                    请求报文与响应报文首部信息冗余量大。
                    数据未压缩，导致数据的传输量大。
                    HTTP2.0特点
                    通过以上内容，你应该已经对HTTP2.0有了初步认识，并且了解了HTTP1.x的缺点。那么下面我们就来了解一下HTTP2.0的特点。

                    1、二进制传输
                    文本的表现形式有多样性，健壮性考虑
                    HTTP2.0中所有加强性能的核心是二进制传输，在HTTP1.x中，我们是通过文本的方式传输数据。基于文本的方式传输数据存在很多缺陷，文本的表现形式有多样性，因此要做到健壮性考虑的场景必然有很多，但是二进制则不同，只有0和1的组合，因此选择了二进制传输，实现方便且健壮。 在HTTP2.0中引入了新的编码机制，所有传输的数据都会被分割，并采用二进制格式编码。 为了保证HTTP不受影响，那就需要在应用层（HTTP2.0）和传输层（TCP or UDP）之间增加一个二进制分帧层。在二进制分帧层上，HTTP2.0会将所有传输的信息分为更小的消息和帧，并采用二进制格式编码，其中HTTP1.x的首部信息会被封装到Headers帧，而Request Body则封装到Data帧。

                    2、多路复用
                    即在一个TCP连接，即可以同时发送多个请求
                    在HTTP1.0中，我们经常会使用到雪碧图、使用多个域名等方式来进行优化，都是因为浏览器限制了同一个域名下的请求数量，当页面需要请求很多资源的时候，队头阻塞（Head of line blocking）会导致在达到最大请求时，资源需要等待其他资源请求完成后才能继续发送。 HTTP2.0中，有两个概念非常重要：帧（frame）和流（stream）。 帧是最小的数据单位，每个帧会标识出该帧属于哪个流，流是多个帧组成的数据流。 所谓多路复用，即在一个TCP连接中存在多个流，即可以同时发送多个请求，对端可以通过帧中的表示知道该帧属于哪个请求。在客户端，这些帧乱序发送，到对端后再根据每个帧首部的流标识符重新组装。通过该技术，可以避免HTTP旧版本的队头阻塞问题，极大提高传输性能。

                    3、Header压缩
                    使用文本的形式传输header，在header中携带cookie的话，开销大
                    在HTTP1.0中，我们使用文本的形式传输header，在header中携带cookie的话，每次都需要重复传输几百到几千的字节，这着实是一笔不小的开销。 在HTTP2.0中，我们使用了HPACK（HTTP2头部压缩算法）压缩格式对传输的header进行编码，减少了header的大小。并在两端维护了索引表，用于记录出现过的header，后面在传输过程中就可以传输已经记录过的header的键名，对端收到数据后就可以通过键名找到对应的值。

                    4、服务器Push
                    在HTTP2.0中，服务端可以在客户端某个请求后，主动推送其他资源。
                    可以想象一下，某些资源客户端是一定会请求的，这时就可以采取服务端push的技术，提前给客户端推送必要的资源，就可以相对减少一点延迟时间。在浏览器兼容的情况下也可以使用prefetch。

                    5、更安全
                    HTTP2.0使用了tls的拓展ALPN做为协议升级，除此之外，HTTP2.0对tls的安全性做了近一步加强，通过黑名单机制禁用了几百种不再安全的加密算法。
                    
        (10)浏览器渲染
           1. 浏览器将获取的HTML文档并解析成DOM树。
                  DOM树在构建的过程中可能会被CSS和JS的加载而执行阻塞。display：none的元素也会在DOM树中。注释也会在DOM树中。script标签会在DOM树中。
            2. 处理CSS标记，构成层叠样式表模型CSSOM（CSS Object Model)
                  CSS解析可以与DOM 解析同进行。CSS解析与script的执行互斥。 在webkit内核中进行了script执行优化，只有在JS访问CSS时才会互斥。
            3. 将DOM和CSSOM合并为渲染数(rendering tree）将会被创建，代表一系列将会渲染的对象。
                  Render Tree和 DOM Tree不完全对应。 display：none的元素不在Render Tree中。 visibility: hidden的元素在Render Tree中
            4. 渲染树的每个元素包含的内容都是计算过，它被称之为布局layout。浏览器使用一种流式处理，只需要一次pass绘制操作就可以布局所有的元素。
                布局阶段会从渲染树的更节点开始遍历，由于渲染树的每个结点都是一个Render Object对象，包含宽高，位置，背景色等样式信息。所以浏览器就可以
                通过这些样式信息来确定每个节点对象在页面上的确切大小和位置，布局阶段的输出就是我们常说的盒子模型，它会精确的捕获每个元素在屏幕内的确切位置
                和大小。需要注意的是： float元素，absolute元素， fixed元素会发生位置偏移 。 我们常说的脱离文档流，其实就是Render Tree。
            5. 将渲染树的各个节点绘制到屏幕上，这一步被称为绘制painting。
                在绘制阶段，浏览器会遍历渲染树，调用渲染器的paint（）方法在屏幕上显示其内容。渲染树的绘制工作是由浏览器的UI后端组件完成的。
                
             阻塞渲染
                     浏览器会延迟 JavaScript 的执行和 DOM 构建：
                       CSS 被默认被视为阻塞渲染的资源，因此浏览器将在 CSSOM 构建完毕前不会渲染任何已处理的内容。
                      JavaScript 不仅可以读取和修改 DOM 属性，还可以读取和修改 CSSOM 属性，因此CSS解析与script的执行互斥。
                      正是由于以上这些原因，script标签的位置很重要我们在实际开发中应该尽量坚持以下两个原则：
                      在引入顺序上，CSS 资源先于 JavaScript 资源。
                      JavaScript 应尽量少的去影响 DOM 的构建。
     （11）回流和重绘
                    我们都知道HTML默认是流式布局的，但CSS和JS会打破这种布局，改变DOM的外观样式及大小和位置。因此我们就需要知道两个概念：
                     1。  reflow（回流）：当浏览器发现某个部分发生了变化从而影响了布局，这个时候就需要倒回去重新渲染，大家称这个回退的过程叫reflow。
                     常见的reflow是一些会影响页面布局的操作，诸如Tab，隐藏等。reflow会从html这个root frame开始递归往下，依次计算所有的结点几何尺寸
                     和位置，以确认是渲染树的一部分发生变化还是整个渲染树。 reflow几乎是无法避免的，因为只要用户进行交互操作，就势必会发生页面的一部分
                     的渲染，且通常我们也无法预估浏览器到底会reflow哪一部分的代码，因为他们会相互影响。
                      2。 repaint（重绘）：repaint则是当我们改变某个元素的背景色，文字颜色，边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要
                      重画，但是元素的几何尺寸和位置没有发生改变。
                      
                      我们不能避免reflow，但还是能通过一些操作来减少回流：

                      用transform做形变和位移.

                      通过绝对位移来脱离当前层叠上下文，形成新的Render Layer。

                      另外有些情况下，比如修改了元素的样式，浏览器并不会立刻reflow 或 repaint 一次，而是会把这样的操作积攒一批，然后做一次 reflow，这又叫异步 reflow 或增量异步 reflow。但是在有些情况下，比如resize 窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行 reflow。
      (12)    为什么css放在头部，js放在尾部
                   在面试的过程中，经常会有人在回答页面的优化中提到将js放到body标签底部，原因是因为浏览器生成Dom树的时候是一行一行读HTML代
                码的，script标签放在最后面就不会影响前面的页面的渲染。那么问题来了，既然Dom树完全生成好后页面才能渲染出来，浏览器又必须读
                完全部HTML才能生成完整的Dom树，script标签不放在body底部是不是也一样，因为dom树的生成需要整个文档解析完毕。

                我们再来看一下chrome在页面渲染过程中的，绿色标志线是First Paint的时间。纳尼，为什么会出现firstpaint，页面的paint
                不是在渲染树生成之后吗？其实现代浏览器为了更好的用户体验,渲染引擎将尝试尽快在屏幕上显示的内容。它不会等到所有HTML解析之前
                开始构建和布局渲染树。部分的内容将被解析并显示。也就是说浏览器能够渲染不完整的dom树和cssom，尽快的减少白屏的时间。
                假如我们将js放在header，js将阻塞解析dom，dom的内容会影响到First Paint，导致First Paint延后。所以说我们会将js放在
                后面，以减少First Paint的时间，但是不会减少DOMContentLoaded被触发的时间。
    （13）前端性能优化
                安全问题：
                    a。xss攻击，就是攻击者想尽一切办法将可以执行的代码注入到网页中。评论功能，写入脚本内容，入库了。get参数后面拼接了key=脚本；这种
                            很容易被写进页面。
                            防御： 
                            转义字符：对于用户的输入应该是永远不信任的。最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义
                            csp：建立白名单，配置规则，高速浏览器哪些外部资源可以加载
                            设置Http Header 中的Content-Security-Policy
                            设置 meta 标签的方式<meta http-equiv="Content-Secuity-Policy">
                            只允许加载本站资源 Content-Security-Policy: default-src 'self'
                            允许加载任何来源框架  Content-Security-Policy: img-src https://*
                      b。CSRF 攻击
                            原理时攻击者构造一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求，如果用户是在登录状态下的。
                            后端就以外是在用户在操作，从而进行相应的逻辑。
                            防御： 请求时Post附带验证信息，比如验证码或者Token；get请求不对数据进行修改 服务器端验证referer
                      c。点击劫持
                              攻击的网站通过iframe嵌套方式嵌入自己的网页中，并将iframe设置为透明，在页面中透出一个按钮诱导用户攻击
                              防御： 当通过iframe的方式加在页面时，攻击者的网页直接不显示所有内容了
                       前端代码性能优化
                       前端代码的压缩 合并 减少http请求 和文件大小
                       图片处理设置最大边界，base64；雪碧图；
                       少操作dom减少dom回流，或者创建文档碎片 document.createFragment()；
                       简化并优化CSS选择器，尽量将嵌套层减少到最小。尽量减少在Javascript中进行DOM操作
                       修改元素样式时，更改其class属性是性能最高的方法。尽量使用transform来做形变和位移
                       缓存dom节点，减少查找次数；
                       应用节流和防抖处理函数；比如滚动发出请求；
                       preload 资源预加载属性；图片懒加载；
                       静态资源放到CDN上；
                       离线存储：配置manifest配置应用程序缓存： CACHE MANIFEST， NETWORK， FALLBACK，（serviceWorker）
                                      优点：离线浏览 用户可在应用离线时使用它们； 速度 已缓存资源加载的更快；减少服务器负载  浏览器将只从服务器下载更新郭或更改过的资源
                    2。代码优化
                        1。前端代码的压缩，合并，减少http请求，和文件大小
                        2。图片处理设置最大边界， base64; 雪碧图
                        3。少操作DOM 减少DOM回流，或者创建文档碎片
                        4。preload 资源预加载属性
                        5。图片懒加载
                        6。静态资源放在CDN上
                        7。离线存储 配置manifest配置应用程序缓存 ： CACHE MANIFEST， NETWORK， FALLBACK
          （14）HTTP与HTTPS
                        HTTP是客户端浏览器或其他程序与Web服务器之间的应用层通信协议。浏览器通过超文本传输协议(HTTP)，将Web服务器上站点的网页代码提取出来，并翻译成漂亮的网页。
                        GET: 获取URL指定的资源；
                        POST：传输实体信息
                        PUT：上传文件
                        DELETE：删除文件
                        HEAD：获取报文首部，与GET相比，不返回报文主体部分
                        OPTIONS：询问支持的方法
                        TRACE：追踪请求的路径；
                        CONNECT：要求在与代理服务器通信时建立隧道，使用隧道进行TCP通信。主要使用SSL和TLS将数据加密后通过网络隧道进行传输。
                        
                        
                        超文本传输安全协议（英语：Hypertext Transfer Protocol Secure，缩写：HTTPS，常称为HTTP over TLS，HTTP over SSL或HTTP Secure）是一种通过计算机网络进行安全通信的传输协议。
                        
                        HTTP 与 HTTPS 的区别

                        HTTP 是明文传输，HTTPS 通过 SSL\TLS 进行了加密
                        HTTP 的端口号是 80，HTTPS 是 443
                        HTTPS 需要到 CA 申请证书，一般免费证书很少，需要交费
                        HTTP 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全。

                        HTTPS主要作用是：

                        对数据进行加密，并建立一个信息安全通道，来保证传输过程中的数据安全
                        对网站服务器进行真实身份认证
                        
                        HTTPS缺点

                        HTTPS协议握手阶段比较费时，会使页面的加载时间延长近50%，增加10%到20%的耗电；
                        https连接缓存不如http高效，如果是大流量网站,则会造成流量成本太高。
                        https连接服务器端资源占用高很多，支持访客稍多的网站需要投入更大的成本，如果全部采用https，基于大部分计算资源闲置的假设的VPS的平均成本会上去。
                        SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。
                        SSL证书通常需要绑定IP，不能再同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗(SSL有扩展可以部分解决这个问题，但是比较麻烦，而且要求浏览器、操作系统支持，Windows XP就不支持这个扩展，考虑到XP的装机量，这个特性几乎没用)。
         （14）前端需要注意哪些SEO
	合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；keywords列举出重要关键词即可
	语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
	重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
	重要内容不要用js输出：爬虫不会执行js获取内容
	少用iframe：搜索引擎不会抓取iframe中的内容
	非装饰性图片必须加alt
	提高网站速度：网站速度是搜索引擎排序的一个重要指标            
        JS复习
        （1） 闭包理解：
                闭包就是能够读取其他函数内部变量的函数，或者子函数在外部调用，子函数所在父函数的作用域不会被释放，一个闭包就是当一个函数返回时，一个没有释放资源的栈区。 自由变量的查找，是在定义函数的地方，向上级作用域查找。
        （2）this指针 及作用域
                 普通函数this指针指向调用它的地方，如果用new生成的函数，this指针指向自己。箭头函数this的指向由作用域的上下文决定。箭头函数的this被绑定后不可更改。全局变量的this指向window，全局变量中的具名函数，匿名函数，闭包函数，箭头函数都指向window。
       （3）call，apply，bind 显示绑定
                1.call、apply与bind都用于改变this绑定，但call、apply在改变this指向的同时还会执行函数，而bind在改变this后是返回一个全新的boundFcuntion绑定函数，这也是为什么上方例子中bind后还加了一对括号 ()的原因。
                2.bind属于硬绑定，返回的 boundFunction 的 this 指向无法再次通过bind、apply或 call 修改；call与apply的绑定只适用当前调用，调用完就没了，下次要用还得再次绑。
                3.call与apply功能完全相同，唯一不同的是call方法传递函数调用形参是以散列形式，而apply方法的形参是一个数组。在传参的情况下，call的性能要高于apply，因为apply在执行时还要多一步解析数组。
         （4）new绑定
                  1。以构造器prototype属性为原型，创建新对象。2。将this（可以理解为上句创造的对象）和新调用参数传给构造器，执行。3. 如果构造器没有手动返回对象，则返回第一部创建的对象。
        （5） 隐式绑定
                  什么是隐式绑定？如果函数调用时，前面存在调用它的对象，那么this就会隐式绑定到这个对象上。
       （6）ES6 
                1。let, const, var 
                
                2。箭头函数
                3。class constructor继承等
                4。Promise
                5。Spread
                6。Destructor
                7。Map, Set
                8。Proxy
                9。Reflect
                10。Generator
                11。async，await （ES7）
                12。Array.from, Array.fill, Array.of
         (7)懒加载，预加载
         (8)事件冒泡       事件委托
      （9）遍历方法 (for in/of)  /  for (let (index = ....) /Array.every / Array.some 
       (10）函数curry化
      （11）Eentloop运行机制    MicroTask/MacroTask    同步 =》 nextTick() => 目前所有微任务 =》 一个异步timer =》 check （下一轮）
      （12）Ajax   （withCredentials)
        (13) DOM 操作
        （14） DOMContentLoaded 和 window.onloead
        (15)BOM
       (16) WebPack
                  有哪些方式可以减少 Webpack 的打包时间？
                        1.优化loader，通过exclude和include，优化loader的文件搜索范围；
                      module.exports = {
                        module: {
                          rules: [
                            {
                              // js 文件才使用 babel
                              test: /\.js$/,
                              loader: 'babel-loader',
                              // 只在 src 文件夹下查找
                              include: [resolve('src')],
                              // 不会去查找的路径
                              exclude: /node_modules/
                            }
                          ]
                        }
                      }
                      有哪些方式可以让 Webpack 打出来的包更小？
      1.按需加载，
      原理：当使用时候再去下载对应文件，返回一个promise；
      2.代码压缩；uglifyJS-webpack-plugin    webpack-parallel-uglify-plyugin 并行压缩js
  （17）instanceof  和 Object.prototype.toString.call()
     (18)prototype 原型链
   （19）new 实例化的过程 
             1. 创建空对象           2.与这个新对象连接      3.属性方法被添加到this引用的对象中   4. 如果构造函数没有return其他对象，则返回this，即创建这个新对象。否则返回构造函数中返回的对象。
  （20） ES5 继承方法
                1。原型链继承： 原型链继承的基本思想是利用原型让一个引用类型继承另外一个引用类型的属性和方法
                        function SubType(){}  SubType.prototype = new SuperType();
                        缺点 1。没有办法给父类传递参数  2。 原型的所有引用类型会被所有实例共享
                2。 借用构造函数： 在子类型的构造函数中调用超类型构造函数
                        function SubType(name) {SuperType.call(this, name)}
                        优点： 可以向父类传参数 解决了原型中包含引用类型值被所有实例共享的问题
                        缺点：方法都在构造函数中定义，函数复用无从谈起。父类元素原型定义方法子类不可见
                 3。 组合继承
                        上述两种都有
                        优点： 1。父类传参数 2。每个实例都有自己的属性 3。 实现了函数复用
                        缺点： 无论什么情况下，都会调用两次父类型构造函数： 一次是在创建子类型原型的时候， 另一次是在子类型构造函数内部。
                   4。 Object.create() 等同于原型继承   缺点 所有的实例都会共享。
                   5。原型式继承/ 寄生式继承 （类似工厂模式）   function object(o) {
                        function F(){}
                        F.prototype = o;
                        return new F();
                   }
                   缺点 寄生继承为对象添加函数，会由于不能做到函数复用而效率低下。
                   同原型链实现继承一样，包含引用类型值的属性会被所有实例共享。
                   6。 寄生组合继承
                   所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法，基本思路：
                   不必为了指定子类型的原型而调用超类型的构造函数，我们需要的仅是超类型原型的一个副本，本质上就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。寄生组合式继承的基本模式如下所示：
                   第一步：创建超类型原型的一个副本
                第二步：为创建的副本添加 constructor 属性
                第三步：将新创建的对象赋值给子类型的原型
                优点 ： 只调用了一次超类构造函数，效率更高。避免在SuberType.prototype上面创建不必要的、多余的属性，与其同时，原型链还能保持不变。
因此寄生组合继承是引用类型最理性的继承范式。
                （19）Promise
                （20） IE 不兼容ES6箭头函数的方法：
                        页面中引用pollyfill和browser.min.js  script 标签加上 type=text/babel
