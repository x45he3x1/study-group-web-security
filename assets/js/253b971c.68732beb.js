"use strict";(self.webpackChunknull_sg_web=self.webpackChunknull_sg_web||[]).push([[331],{4623:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var i=a(7462),r=a(3366),n=(a(7294),a(3905)),s=["components"],o={sidebar_position:1},l="Notes",c={unversionedId:"csrf/notes",id:"csrf/notes",isDocsHomePage:!1,title:"Notes",description:"(CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they\u2019re currently authenticated. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker\u2019s choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.",source:"@site/docs/csrf/notes.md",sourceDirName:"csrf",slug:"/csrf/notes",permalink:"/study-group-web-security/docs/csrf/notes",editUrl:"https://github.com/null-open-security-community/study-group-web-security/docs/csrf/notes.md",tags:[],version:"current",lastUpdatedAt:1636173360,formattedLastUpdatedAt:"11/6/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/study-group-web-security/docs/access-control/resources"},next:{title:"Notes",permalink:"/study-group-web-security/docs/web-cache-deception-attack/notes"}},u=[{value:"Impact",id:"impact",children:[],level:2},{value:"Why Do People Carry Out CSRF Attacks?",id:"why-do-people-carry-out-csrf-attacks",children:[],level:2},{value:"Types/Patterns OF CSRF",id:"typespatterns-of-csrf",children:[{value:"SameSite Attribute : Paparazzi Attribute moment",id:"samesite-attribute--paparazzi-attribute-moment",children:[],level:3}],level:2},{value:"Steps",id:"steps",children:[],level:2},{value:"Background of the Attack",id:"background-of-the-attack",children:[{value:"CSRF with GET Request",id:"csrf-with-get-request",children:[],level:3},{value:"CSRF with POST Request",id:"csrf-with-post-request",children:[],level:3}],level:2},{value:"Pointers",id:"pointers",children:[],level:2},{value:"Add-Ons",id:"add-ons",children:[{value:"Bypasses",id:"bypasses",children:[],level:3}],level:2},{value:"Resources",id:"resources",children:[],level:2},{value:"Contributor",id:"contributor",children:[],level:2}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"notes"},"Notes"),(0,n.kt)("p",null,"(CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they\u2019re currently authenticated. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker\u2019s choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application."),(0,n.kt)("h2",{id:"impact"},"Impact"),(0,n.kt)("p",null,"In a successful CSRF attack, the attacker causes the victim user to carry out an action unintentionally. For example, this might be to change the email address on their account, to change their password, or to make a funds transfer. Depending on the nature of the action, the attacker might be able to gain full control over the user's account. If the compromised user has a privileged role within the application, then the attacker might be able to take full control of all the application's data and functionality."),(0,n.kt)("h2",{id:"why-do-people-carry-out-csrf-attacks"},"Why Do People Carry Out CSRF Attacks?"),(0,n.kt)("p",null,"The motivations of CSRF attacks are either financially fuelled or intended to change key information within a user account or within an application or website."),(0,n.kt)("p",null,"For instance, in the examples of CSRF attacks that we are aware of, they have been used to carry out the below functions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Amend a user password or force a password reset"),(0,n.kt)("li",{parentName:"ul"},"Move money from a bank account"),(0,n.kt)("li",{parentName:"ul"},"Amend the delivery address for a purchase"),(0,n.kt)("li",{parentName:"ul"},"Utilise a Content Management System (CMS) to remove or add content to a website"),(0,n.kt)("li",{parentName:"ul"},"Upvote Answers, Follow or Like Social Media Accounts"),(0,n.kt)("li",{parentName:"ul"},"Exploitation of an administrative application"),(0,n.kt)("li",{parentName:"ul"},"Amend a content number or email on a user account"),(0,n.kt)("li",{parentName:"ul"},"Amend a cart or shopping basket online"),(0,n.kt)("li",{parentName:"ul"},"Alter firewall and router configuration")),(0,n.kt)("p",null,"Categorization based on OWASP 2017 - Broken Access Control: Authorization"),(0,n.kt)("h2",{id:"typespatterns-of-csrf"},"Types/Patterns OF CSRF"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@asfiyashaikh10/cross-site-request-forgery-csrf-8ce6f9ee0379"},"https://medium.com/@asfiyashaikh10/cross-site-request-forgery-csrf-8ce6f9ee0379"))),(0,n.kt)("h3",{id:"samesite-attribute--paparazzi-attribute-moment"},"SameSite Attribute : Paparazzi Attribute moment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.kevel.co/blog/chrome-samesite/"},"https://www.kevel.co/blog/chrome-samesite/"))),(0,n.kt)("p",null,"The SameSite attribute tells browsers when and how to fire cookies in first- or third-party situations. SameSite is used by a variety of browsers to identify whether or not to allow a cookie to be accessed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://web.dev/samesite-cookies-explained/"},"https://web.dev/samesite-cookies-explained/"))),(0,n.kt)("p",null,"Sure thing! Values for the SameSite attribute include 'strict', 'lax', or 'none':"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"'lax' enables only first-party cookies to be sent/accessed"),(0,n.kt)("li",{parentName:"ul"},"'strict' is a subset of 'lax' and won\u2019t fire if the incoming link is from an external site"),(0,n.kt)("li",{parentName:"ul"},"'none' signals that the cookie data can be shared with third parties/external sites (for advertising, embedded content, etc)")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"CSRF occurs when an attacker make a target's browser send an HTTP Request to another website.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Attack relies on the target being previously authenticated on the vulnerable website = Mean victim must be sign-in on target")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"So, the action is submitted and occurs without the target's knowledge."))),(0,n.kt)("p",null,"4.If attack is successful, attacker can modify server side information and is even possible to achieve to account takeover."),(0,n.kt)("h2",{id:"background-of-the-attack"},"Background of the Attack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CSRF attack take advantage of weakness in the process website use to Authenticate Requests."),(0,n.kt)("li",{parentName:"ul"},"Authentication")),(0,n.kt)("h3",{id:"csrf-with-get-request"},"CSRF with GET Request"),(0,n.kt)("p",null,"Useful Tag - ",(0,n.kt)("inlineCode",{parentName:"p"},"<img>"),"\nExample - ",(0,n.kt)("inlineCode",{parentName:"p"},'<img src="https://www.bank.com/transfer?from=victim&to=attacker&amount=1000">')),(0,n.kt)("h3",{id:"csrf-with-post-request"},"CSRF with POST Request"),(0,n.kt)("p",null,"Attacker will depend on the content of POST request rather then ",(0,n.kt)("inlineCode",{parentName:"p"},"<img>")," tag here, ",(0,n.kt)("inlineCode",{parentName:"p"},"<iframe>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<form>")," this tag then can be beneficial."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="csrf-poc.html"',title:'"csrf-poc.html"'},"<iframe style=\"display:none\" name=\"csrf-frame\"></iframe>\n\n<form method='POST' action='http://bank.com/transfer' target=\"csrf-frame\" id=\"csrf-form\">\n\n<input type='hidden' name='from' value='Victim'>\n<input type='hidden' name='to' value='Attacker'>\n<input type='hidden' name='amount' value='500'>\n<input type='submit' value='submit'>\n\n</form>\n\n<script>document.getElementById(\"csrf-form\").submit()<\/script>\n")),(0,n.kt)("h2",{id:"pointers"},"Pointers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When looking for CSRF vulnerabilities, look for GET request that can modify server-side data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remember website API\u2019s endpoints and its web pages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fool CORS Protection by changing the content-type header to application/x-www-form-url encoded, multipart/form-data, or text/plain."))),(0,n.kt)("h2",{id:"add-ons"},"Add-Ons"),(0,n.kt)("h3",{id:"bypasses"},"Bypasses"),(0,n.kt)("p",null,"There are several ways to bypass Anti-CSRF Tokens such as: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Remove Anti-CSRF Token"),(0,n.kt)("li",{parentName:"ol"},"Spoof Anti-CSRF Token by Changing a few bits "),(0,n.kt)("li",{parentName:"ol"},"Using Same Anti-CSRF Token "),(0,n.kt)("li",{parentName:"ol"},"Weak Cryptography to generate Anti-CSRF Token "),(0,n.kt)("li",{parentName:"ol"},"Guessable Anti-CSRF Token "),(0,n.kt)("li",{parentName:"ol"},"Stealing Token with other attacks such as XSS. "),(0,n.kt)("li",{parentName:"ol"},"Converting POST Request to GET Request to bypass the CSRF Token Check.")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bugbountytips.tech/category/csrf/"},"https://www.bugbountytips.tech/category/csrf/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://portswigger.net/web-security/csrf"},"https://portswigger.net/web-security/csrf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/attacks/csrf"},"https://owasp.org/www-community/attacks/csrf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@vbharad/2-fa-bypass-via-csrf-attack-8f2f6a6e3871"},"https://medium.com/@vbharad/2-fa-bypass-via-csrf-attack-8f2f6a6e3871")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@asfiyashaikh10/cross-site-request-forgery-csrf-8ce6f9ee0379"},"https://medium.com/@asfiyashaikh10/cross-site-request-forgery-csrf-8ce6f9ee0379")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://vickieli.dev/csrf/csrf-updates/"},"https://vickieli.dev/csrf/csrf-updates/")," (Detailed)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hacktoryga.medium.com/one-click-for-victims-one-huge-leap-for-attackers-ff983eea520a"},"https://hacktoryga.medium.com/one-click-for-victims-one-huge-leap-for-attackers-ff983eea520a")," (for demo examples)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/bugbountywriteup/account-takeover-via-csrf-78add8c99526"},"https://medium.com/bugbountywriteup/account-takeover-via-csrf-78add8c99526")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://techsolutions.cc/security/complete-guide-csrf-xsrf/"},"https://techsolutions.cc/security/complete-guide-csrf-xsrf/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@swapmaurya20/csrf-to-account-takeover-8d6638289f67"},"https://medium.com/@swapmaurya20/csrf-to-account-takeover-8d6638289f67")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@armaanpathan/chain-the-vulnerabilities-and-take-your-report-impact-on-the-moon-csrf-to-html-injection-which-608fa6e74236"},"https://medium.com/@armaanpathan/chain-the-vulnerabilities-and-take-your-report-impact-on-the-moon-csrf-to-html-injection-which-608fa6e74236")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/bugbountywriteup/account-takeover-via-csrf-78add8c99526"},"https://medium.com/bugbountywriteup/account-takeover-via-csrf-78add8c99526")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/bugbountywriteup/lets-bypass-csrf-protection-password-confirmation-to-takeover-victim-accounts-d-4a21297847ff"},"https://medium.com/bugbountywriteup/lets-bypass-csrf-protection-password-confirmation-to-takeover-victim-accounts-d-4a21297847ff")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.slideshare.net/mobile/0ang3el/neat-tricks-to-bypass-csrfprotection"},"https://www.slideshare.net/mobile/0ang3el/neat-tricks-to-bypass-csrfprotection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.reconless.com/samesite-by-default/"},"https://blog.reconless.com/samesite-by-default/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/draft-west-cookie-incrementalism-00"},"https://tools.ietf.org/html/draft-west-cookie-incrementalism-00")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tipstrickshack.blogspot.com/2012/10/how-to-exploit-csfr-vulnerabilitycsrf.html"},"https://tipstrickshack.blogspot.com/2012/10/how-to-exploit-csfr-vulnerabilitycsrf.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hackerone.com/reports/127703"},"https://hackerone.com/reports/127703")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hackerone.com/reports/111216/"},"https://hackerone.com/reports/111216/"))),(0,n.kt)("h2",{id:"contributor"},"Contributor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simran Sankhala")))}m.isMDXComponent=!0}}]);