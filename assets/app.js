/* Corner League OS landing page. Generated from the design source; edit there or here. */
(function () {
  "use strict";
  var h = preact.h;
  function L(sc, path) {
    if (path === "true") return true;
    if (path === "false") return false;
    if (path === "null") return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
    if (/^(['"]).*\1$/.test(path)) return path.slice(1, -1);
    var parts = path.split("."), v = sc[parts[0]];
    for (var i = 1; i < parts.length && v != null; i++) v = v[parts[i]];
    return v;
  }
  function S(v) { return v == null ? "" : String(v); }
  function template(sc) { return h("div",{"class":L(sc,"rootClass")}," "," ",h("header",{"class":"hdr"}," ",h("a",{"class":"logo-tab","href":"#top","aria-label":"Corner League OS home"},h("span",{"class":"logo-word"},"Corner League"),h("span",{"class":"logo-os"},"OS"))," ",h("nav",{"class":"navbar","aria-label":"Primary"}," ",h("a",{"class":"navlink","href":"#platform"},"Platform")," ",h("a",{"class":"navlink","href":"#how"},"How it works")," ",h("a",{"class":"navlink","href":"#pricing"},"Pricing")," ",h("a",{"class":"navlink","href":"#"},"Sign in")," ",h("a",{"class":"btn btn-white nav-cta","href":"#"},h("span",{},"Get started"))," ")," ",h("button",{"class":"burger","type":"button","aria-label":L(sc,"menuLabel"),"aria-expanded":L(sc,"menuOpen"),"onClick":L(sc,"toggleMenu")}," ",(L(sc,"menuOpen") ? [h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},h("path",{"d":"M6 6l12 12M18 6L6 18"}))] : null)," ",(L(sc,"menuClosed") ? [h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},h("path",{"d":"M4 7h16M4 12h16M4 17h16"}))] : null)," ")," ")," ",(L(sc,"menuOpen") ? [" ",h("nav",{"class":"mnav","aria-label":"Mobile"}," ",h("a",{"class":"ml","href":"#platform","onClick":L(sc,"closeMenu")},"Platform")," ",h("a",{"class":"ml","href":"#how","onClick":L(sc,"closeMenu")},"How it works")," ",h("a",{"class":"ml","href":"#pricing","onClick":L(sc,"closeMenu")},"Pricing")," ",h("a",{"class":"ml","href":"#"},"Sign in")," ",h("a",{"class":"btn btn-red","href":"#"},h("span",{},"Create your league"))," ")," "] : null)," "," ",h("section",{"id":"top","class":"hero"}," ",h("div",{"class":"hero-l","style":"position: relative"}," ",h("div",{}," ",h("p",{"class":"eyebrow hero-eb"},h("span",{"class":"mask"},h("span",{"class":"ln gt"},"League management software")))," ",h("h1",{"class":"h-hero"},h("span",{"class":"mask"},h("span",{"class":"ln","style":"animation-delay: 0.1s"},"Run your ",h("em",{"class":"hl"},"whole"))),h("span",{"class":"mask"},h("span",{"class":"ln","style":"animation-delay: 0.22s"},"league from")),h("span",{"class":"mask"},h("span",{"class":"ln","style":"animation-delay: 0.34s"},"one place.")))," ",h("p",{"class":"lead"},"Registration, payments, schedules, scores and stats, updates, live drafts; built for organizers who run adult or youth leagues. Replace the multiple websites, the group chats, and the payment apps.")," ",h("div",{"class":"cta-row"}," ",h("a",{"class":"btn btn-red","href":"#"},h("span",{},"Get Started"))," ",h("a",{"class":"btn btn-white","href":"#preview"},h("span",{},h("span",{},"See More")," ",h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},h("path",{"d":"M12 5v14M6 13l6 6 6-6"}))))," ")," ")," ")," ",h("div",{"class":"hero-r"}," ",(L(sc,"desktopHero") ? [" ",h("video",{"class":"hero-vid","src":"media/hero-desktop.mp4","poster":"media/hero-desktop-poster.jpg","preload":"auto","ref":L(sc,"videoRef"),"aria-label":"A montage of basketball, rugby, soccer, hockey, volleyball and baseball, with a coach drawing up a play."})," "] : null)," ",(L(sc,"stackHero") ? [" ",h("video",{"class":"hero-vid","src":"media/hero-mobile.mp4","poster":"media/hero-mobile-poster.jpg","preload":"auto","ref":L(sc,"videoRef"),"aria-label":"A montage of soccer, hockey, basketball, volleyball, rugby and track athletes in action."})," "] : null)," ")," ")," ",(L(sc,"showTicker") ? [" ",h("div",{"class":"ticker","aria-label":"What Corner League OS runs"}," ",h("div",{"class":"ticker-track"}," ",h("div",{"class":"tk-group"},(L(sc,"ticker")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["t"]=__it;sc2.$index=__i;return (function(sc){return [h("span",{"class":"tk"},S(L(sc,"t.w"))),h("span",{"class":"tk-sl","aria-hidden":"true"},"/")];})(sc2);}))," ",h("div",{"class":"tk-group","aria-hidden":"true"},(L(sc,"ticker")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["t"]=__it;sc2.$index=__i;return (function(sc){return [h("span",{"class":"tk"},S(L(sc,"t.w"))),h("span",{"class":"tk-sl"},"/")];})(sc2);}))," ")," ")," "] : null)," "," ",h("section",{"id":"how","class":"wrap","style":"padding-top: clamp(56px, 5vw, 88px)"}," ",h("div",{"class":"how"}," ",h("div",{}," ",h("p",{"class":"eyebrow"},"One connected season")," ",h("h2",{"class":"h1"},"Operate your league like the Pros")," ",h("span",{"class":"speed","aria-hidden":"true"})," ")," ",h("ol",{"class":"steps"}," ",h("li",{"class":"step slant sp sp-ink"},h("div",{"class":"sp-ghost","aria-hidden":"true"},h("div",{"class":"sp-row"},h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up")),h("div",{"class":"sp-row alt"},h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up")),h("div",{"class":"sp-row"},h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"),h("span",{},"Set up"))),h("div",{"class":"sp-ht","aria-hidden":"true"}),h("svg",{"class":"sp-art","viewBox":"0 0 140 96","aria-hidden":"true"},h("rect",{"class":"ln","x":"2","y":"2","width":"136","height":"92"}),h("path",{"class":"ln","d":"M70 2v92M2 30h18v36H2M138 30h-18v36h18"}),h("circle",{"class":"ac","cx":"70","cy":"48","r":"17"}),h("circle",{"class":"fd","cx":"70","cy":"48","r":"3.5"})),h("p",{"class":"h3 sp-txt"},"Setting up your league, seasons, and divisions has never been easier."))," ",h("li",{"class":"step slant sp sp-tan"},h("div",{"class":"sp-ghost","aria-hidden":"true"},h("div",{"class":"sp-row"},h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up")),h("div",{"class":"sp-row alt"},h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up")),h("div",{"class":"sp-row"},h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"),h("span",{},"Sign up"))),h("div",{"class":"sp-ht","aria-hidden":"true"}),h("svg",{"class":"sp-art","viewBox":"0 0 140 96","aria-hidden":"true"},h("path",{"class":"ln","d":"M12 14l14 14M26 14L12 28M98 62l14 14M112 62L98 76"}),h("circle",{"class":"ln","cx":"62","cy":"22","r":"8"}),h("circle",{"class":"ln","cx":"24","cy":"70","r":"8"}),h("path",{"class":"ac","d":"M34 66C58 60 60 40 86 36c14-2 26 4 36-10"}),h("path",{"class":"ac","d":"M110 22l13 3-4 13"})),h("p",{"class":"h3 sp-txt"},"Handle registration, fees, waivers, accounting all with a few simple clicks."))," ",h("li",{"class":"step slant sp sp-grad"},h("div",{"class":"sp-ghost","aria-hidden":"true"},h("div",{"class":"sp-row"},h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day")),h("div",{"class":"sp-row alt"},h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day")),h("div",{"class":"sp-row"},h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"),h("span",{},"Game day"))),h("div",{"class":"sp-ht","aria-hidden":"true"}),h("svg",{"class":"sp-art","viewBox":"0 0 140 96","aria-hidden":"true"},h("path",{"class":"ln","d":"M2 10h34v24H2M2 62h34v24H2M36 22h34v52H36"}),h("path",{"class":"ac","d":"M70 48h34"}),h("rect",{"class":"ac","x":"104","y":"34","width":"32","height":"28"})),h("p",{"class":"h3 sp-txt"},"Host draft rooms for team building, easily setup schedules and brackets, record scores and stats, assign officials all from one hub."))," ",h("li",{"class":"step slant sp sp-ink"},h("div",{"class":"sp-ghost","aria-hidden":"true"},h("div",{"class":"sp-row"},h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live")),h("div",{"class":"sp-row alt"},h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live")),h("div",{"class":"sp-row"},h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"),h("span",{},"Go live"))),h("div",{"class":"sp-ht","aria-hidden":"true"}),h("svg",{"class":"sp-art","viewBox":"0 0 140 96","aria-hidden":"true"},h("path",{"class":"ln","d":"M58 60a26 26 0 0 1 0-36M82 24a26 26 0 0 1 0 36M44 74a46 46 0 0 1 0-64M96 10a46 46 0 0 1 0 64"}),h("circle",{"class":"fd","cx":"70","cy":"42","r":"7"}),h("path",{"class":"ac","d":"M70 50v40M52 90h36"})),h("p",{"class":"h3 sp-txt"},"Publish content, media, league updates and results, sms/email notifications; all-in-one connected experience for everyone involved."))," ")," ")," ")," "," ",h("section",{"class":"wrap sec"}," ",h("div",{"class":"center"}," ",h("p",{"class":"eyebrow"},"THE OLD WAY OF DOING THINGS")," ",h("h2",{"class":"h1","style":"max-width: 12em"},"Stop running your league in six different places")," ",h("span",{"class":"speed","aria-hidden":"true"})," ",h("p",{"class":"body","style":"max-width: 44em; margin-top: 30px; font-size: clamp(17px, 1.3vw, 20px)"},"Registration in a form builder. Fees in a payment gateway. The schedule in a spreadsheet. The draft on a whiteboard. Scores/Stats in a group chat. Every week ends with a night spent reconciling what should have been one system.")," ",h("div",{"class":"pb","ref":L(sc,"pbRef")}," ",h("div",{"class":"pb-bar"}," ",h("div",{"class":"pb-toggle","role":"group","aria-label":"Before and after"}," ",h("button",{"class":L(sc,"pb.offCls"),"type":"button","aria-pressed":L(sc,"pb.none"),"onClick":L(sc,"pb.scatter")},h("span",{},"Six places"))," ",h("button",{"class":L(sc,"pb.onCls"),"type":"button","aria-pressed":L(sc,"pb.all"),"onClick":L(sc,"pb.merge")},h("span",{},"One place"))," ")," ",h("span",{"class":"pb-hint"},"Tap a card to move it in.")," ")," ",h("div",{"class":L(sc,"pb.stageCls")}," ",h("div",{"class":"pb-ghost","aria-hidden":"true"},h("span",{"class":"pb-num"},S(L(sc,"pb.num"))),h("span",{"class":"pb-lab"},S(L(sc,"pb.label"))))," ",h("span",{"class":"pb-note","aria-hidden":"true"},S(L(sc,"pb.note")))," ",h("svg",{"class":"pb-deco d1","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M8 2l4 6 4-6"}),h("circle",{"cx":"12","cy":"15","r":"6.5"}),h("path",{"d":"M12 12l.9 1.9 2.1.3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 14.200l2.100-.3z"})),h("svg",{"class":"pb-deco d2","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M7 4h10v5a5 5 0 0 1-10 0z"}),h("path",{"d":"M7 6H4.5a2.8 2.8 0 0 0 2.9 4M17 6h2.5a2.8 2.8 0 0 1-2.9 4M12 14v4M9.5 18h5M8 21h8"})),h("svg",{"class":"pb-deco d3","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M8 2l4 6 4-6"}),h("circle",{"cx":"12","cy":"15","r":"6.5"}),h("path",{"d":"M12 12l.9 1.9 2.1.3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 14.200l2.100-.3z"}))," ",h("svg",{"class":"pb-scribble","viewBox":"0 0 120 70","aria-hidden":"true"},h("path",{"d":"M4 52C30 60 62 50 86 28c8-7 14-13 22-18"}),h("path",{"d":"M90 8l19 1-5 19"}))," ",h("div",{"class":"pb-panel slant-r","aria-hidden":"true"},h("span",{"style":"display: flex; align-items: center; gap: 10px"},h("span",{"class":"logo-word"},"Corner League"),h("span",{"class":"logo-os"},"OS")),h("span",{"class":"mark-sub","style":"display: block; margin-top: 10px"},"One login. One season."),h("span",{"class":"pb-trophy"},h("svg",{"class":"pb-cup","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M7 4h10v5a5 5 0 0 1-10 0z"}),h("path",{"d":"M7 6H4.5a2.8 2.8 0 0 0 2.9 4M17 6h2.5a2.8 2.8 0 0 1-2.9 4M12 14v4M9.5 18h5M8 21h8"})),h("span",{"class":"pb-spark k1"}),h("span",{"class":"pb-spark k2"}),h("span",{"class":"pb-spark k3"})),h("div",{"class":"pb-slot","style":"--i: 0"}),h("div",{"class":"pb-slot","style":"--i: 1"}),h("div",{"class":"pb-slot","style":"--i: 2"}),h("div",{"class":"pb-slot","style":"--i: 3"}),h("div",{"class":"pb-slot","style":"--i: 4"}),h("div",{"class":"pb-slot","style":"--i: 5"}))," ",h("button",{"class":L(sc,"pb.c0"),"type":"button","aria-pressed":L(sc,"pb.i0"),"onClick":L(sc,"pb.t0")},h("span",{"class":"pb-float"},h("span",{"class":"pc-job"},"Registration"),h("span",{"class":"pc-tool"},"Form builder"),h("svg",{"class":"pc-check","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M8 2l4 6 4-6"}),h("circle",{"cx":"12","cy":"15","r":"6.5"}),h("path",{"d":"M9.5 15l1.8 1.8 3.4-3.6"}))))," ",h("button",{"class":L(sc,"pb.c1"),"type":"button","aria-pressed":L(sc,"pb.i1"),"onClick":L(sc,"pb.t1")},h("span",{"class":"pb-float"},h("span",{"class":"pc-job"},"Fees"),h("span",{"class":"pc-tool"},"Cash app"),h("svg",{"class":"pc-check","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M8 2l4 6 4-6"}),h("circle",{"cx":"12","cy":"15","r":"6.5"}),h("path",{"d":"M9.5 15l1.8 1.8 3.4-3.6"}))))," ",h("button",{"class":L(sc,"pb.c2"),"type":"button","aria-pressed":L(sc,"pb.i2"),"onClick":L(sc,"pb.t2")},h("span",{"class":"pb-float"},h("span",{"class":"pc-job"},"Schedule"),h("span",{"class":"pc-tool"},"Spreadsheet"),h("svg",{"class":"pc-check","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M8 2l4 6 4-6"}),h("circle",{"cx":"12","cy":"15","r":"6.5"}),h("path",{"d":"M9.5 15l1.8 1.8 3.4-3.6"}))))," ",h("button",{"class":L(sc,"pb.c3"),"type":"button","aria-pressed":L(sc,"pb.i3"),"onClick":L(sc,"pb.t3")},h("span",{"class":"pb-float"},h("span",{"class":"pc-job"},"Draft"),h("span",{"class":"pc-tool"},"Whiteboard"),h("svg",{"class":"pc-check","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M8 2l4 6 4-6"}),h("circle",{"cx":"12","cy":"15","r":"6.5"}),h("path",{"d":"M9.5 15l1.8 1.8 3.4-3.6"}))))," ",h("button",{"class":L(sc,"pb.c4"),"type":"button","aria-pressed":L(sc,"pb.i4"),"onClick":L(sc,"pb.t4")},h("span",{"class":"pb-float"},h("span",{"class":"pc-job"},"Scores/Stats"),h("span",{"class":"pc-tool"},"Group chat"),h("svg",{"class":"pc-check","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M8 2l4 6 4-6"}),h("circle",{"cx":"12","cy":"15","r":"6.5"}),h("path",{"d":"M9.5 15l1.8 1.8 3.4-3.6"}))))," ",h("button",{"class":L(sc,"pb.c5"),"type":"button","aria-pressed":L(sc,"pb.i5"),"onClick":L(sc,"pb.t5")},h("span",{"class":"pb-float"},h("span",{"class":"pc-job"},"Updates"),h("span",{"class":"pc-tool"},"Email threads"),h("svg",{"class":"pc-check","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M8 2l4 6 4-6"}),h("circle",{"cx":"12","cy":"15","r":"6.5"}),h("path",{"d":"M9.5 15l1.8 1.8 3.4-3.6"}))))," ")," ")," ",h("p",{"class":"closeline"},"Corner League OS puts the whole season in one place, so the work behind the sport makes the league operate like the pros")," ")," ")," "," ",h("section",{"id":"platform","class":"sec"}," ",h("div",{"class":"ft","ref":L(sc,"ft.root")}," ",h("span",{"class":"ft-glow g1","aria-hidden":"true"})," ",h("span",{"class":"ft-glow g2","aria-hidden":"true"})," ",h("span",{"class":"ft-ht","aria-hidden":"true"})," ",h("div",{"class":"ft-ghosts","aria-hidden":"true"},h("div",{"class":"fx-marq"},h("span",{},"Compete"),h("span",{},"Register"),h("span",{},"Game day"),h("span",{},"Grow"),h("span",{},"Compete"),h("span",{},"Register"),h("span",{},"Game day"),h("span",{},"Grow")))," ",h("div",{"class":"wrap"}," ",h("p",{"class":"eyebrow fz-eb"},"From first signup to final buzzer")," ",h("h2",{"class":"h1","style":"color: #FFFFFF; max-width: 14em"},"Every part of your season. One place to run it.")," ",h("span",{"class":"speed","aria-hidden":"true"})," ",h("div",{"class":"fx-grid"}," ",h("article",{"class":"fx"}," ",h("div",{"class":"fx-screen"}," ",h("video",{"class":"fx-vid","src":"media/feature-competition.mp4","poster":"media/feature-competition-poster.jpg","preload":"metadata","ref":L(sc,"ft.v0"),"aria-label":"Competition Management demo"})," ",h("span",{"class":"ft-sheen","aria-hidden":"true","style":"animation-delay: -0.0s"})," ",h("span",{"class":"ft-c tl","aria-hidden":"true"}),h("span",{"class":"ft-c tr","aria-hidden":"true"}),h("span",{"class":"ft-c bl","aria-hidden":"true"}),h("span",{"class":"ft-c br","aria-hidden":"true"})," ",h("span",{"class":"fx-live badge red"},h("span",{},h("span",{"class":"dot"}),"Live"))," ")," ",h("div",{"class":"fx-text"}," ",h("span",{"class":"ft-idx"},"01")," ",h("div",{},h("h3",{"class":"ft-title"},"Competition Management"),h("p",{"class":"ft-tags"},"Leagues \u00b7 Seasons \u00b7 Divisions \u00b7 Teams \u00b7 Brackets"),h("p",{"class":"ft-desc"},"Build and manage your entire competition in one place. From setting up leagues and seasons to organizing teams and brackets, we've made running your league easier than ever."))," ")," ")," ",h("article",{"class":"fx"}," ",h("div",{"class":"fx-screen"}," ",h("video",{"class":"fx-vid","src":"media/feature-registration.mp4","poster":"media/feature-registration-poster.jpg","preload":"metadata","ref":L(sc,"ft.v1"),"aria-label":"Registration & Payments demo"})," ",h("span",{"class":"ft-sheen","aria-hidden":"true","style":"animation-delay: -1.7s"})," ",h("span",{"class":"ft-c tl","aria-hidden":"true"}),h("span",{"class":"ft-c tr","aria-hidden":"true"}),h("span",{"class":"ft-c bl","aria-hidden":"true"}),h("span",{"class":"ft-c br","aria-hidden":"true"})," ",h("span",{"class":"fx-live badge red"},h("span",{},h("span",{"class":"dot"}),"Live"))," ")," ",h("div",{"class":"fx-text"}," ",h("span",{"class":"ft-idx"},"02")," ",h("div",{},h("h3",{"class":"ft-title"},"Registration & Payments"),h("p",{"class":"ft-tags"},"Registration \u00b7 Waivers \u00b7 Payments \u00b7 Documents"),h("p",{"class":"ft-desc"},"Simplify registration for everyone. Collect payments, manage player sign-ups, and organize waivers and documents, all in one seamless experience."))," ")," ")," ",h("article",{"class":"fx"}," ",h("div",{"class":"fx-screen"}," ",h("video",{"class":"fx-vid","src":"media/feature-scores-stats.mp4","poster":"media/feature-scores-stats-poster.jpg","preload":"metadata","ref":L(sc,"ft.v2"),"aria-label":"Scores, Stats & Player Profiles demo"})," ",h("span",{"class":"ft-sheen","aria-hidden":"true","style":"animation-delay: -3.4s"})," ",h("span",{"class":"ft-c tl","aria-hidden":"true"}),h("span",{"class":"ft-c tr","aria-hidden":"true"}),h("span",{"class":"ft-c bl","aria-hidden":"true"}),h("span",{"class":"ft-c br","aria-hidden":"true"})," ",h("span",{"class":"fx-live badge red"},h("span",{},h("span",{"class":"dot"}),"Live"))," ")," ",h("div",{"class":"fx-text"}," ",h("span",{"class":"ft-idx"},"03")," ",h("div",{},h("h3",{"class":"ft-title"},"Scores, Stats & Player Profiles"),h("p",{"class":"ft-tags"},"Live Scores \u00b7 Stats \u00b7 Player Profiles \u00b7 Standings \u00b7 Awards"),h("p",{"class":"ft-desc"},"Bring your league to life with live scores, player stats, standings, and awards. Give athletes recognition and fans more reasons to follow every game."))," ")," ")," ",h("article",{"class":"fx"}," ",h("div",{"class":"fx-screen"}," ",h("video",{"class":"fx-vid","src":"media/feature-business-tools.mp4","poster":"media/feature-business-tools-poster.jpg","preload":"metadata","ref":L(sc,"ft.v3"),"aria-label":"Business & Communication Tools demo"})," ",h("span",{"class":"ft-sheen","aria-hidden":"true","style":"animation-delay: -5.1s"})," ",h("span",{"class":"ft-c tl","aria-hidden":"true"}),h("span",{"class":"ft-c tr","aria-hidden":"true"}),h("span",{"class":"ft-c bl","aria-hidden":"true"}),h("span",{"class":"ft-c br","aria-hidden":"true"})," ",h("span",{"class":"fx-live badge red"},h("span",{},h("span",{"class":"dot"}),"Live"))," ")," ",h("div",{"class":"fx-text"}," ",h("span",{"class":"ft-idx"},"04")," ",h("div",{},h("h3",{"class":"ft-title"},"Business & Communication Tools"),h("p",{"class":"ft-tags"},"Dashboard \u00b7 SMS \u00b7 Email \u00b7 Website Management"),h("p",{"class":"ft-desc"},"Everything you need to run and grow your organization. Track revenue, communicate with your community, and manage your website, all from one connected platform."))," ")," ")," ")," ")," ")," ")," "," ",h("section",{"id":"preview","class":"wrap sec"}," ",h("div",{"class":"sec-head"}," ",h("div",{}," ",h("p",{"class":"eyebrow"},"BUILD LEGIT TEAMS")," ",h("h2",{"class":"h1"},"Player Draft & Team Building")," ",h("p",{"style":"margin: 16px 0 0; font: italic 600 clamp(15px, 1.2vw, 19px)/1.4 var(--display); text-transform: uppercase; letter-spacing: .06em; color: var(--focus)"},"Player Draft \u00b7 Team Selection \u00b7 Rosters \u00b7 Draft Management")," ",h("span",{"class":"speed","aria-hidden":"true"})," ")," ",h("p",{"class":"body","style":"font-size: clamp(16px, 1.25vw, 19px)"},"Make building teams fun, fair, and effortless. Draft players, create balanced teams, and take the guesswork out of roster selection with a seamless drafting experience built for your league.")," ")," ",h("div",{"class":"app"}," ",h("div",{"class":"app-top"}," ",h("span",{"class":"app-title"},"City Basketball / Winter Season")," ",h("div",{"class":"tabs","role":"tablist","aria-label":"Preview views"}," ",(L(sc,"tabs")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["t"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("button",{"class":L(sc,"t.cls"),"type":"button","role":"tab","aria-selected":L(sc,"t.selected"),"onClick":L(sc,"t.select")},S(L(sc,"t.label")))," "];})(sc2);})," ")," ",h("button",{"class":"linkbtn","type":"button","onClick":L(sc,"reset")},"Reset preview")," ")," ",h("div",{"class":"app-body","role":"tabpanel"}," ",(L(sc,"isDraft") ? [" ",h("h3",{"class":"h2"},S(L(sc,"draftHeading")))," ",h("p",{"class":"body","style":"margin-top: 8px"},S(L(sc,"draftHint")))," ",h("div",{"class":"status","aria-live":"polite"}," ",h("span",{"class":"badge red"},h("span",{},h("span",{"class":"dot"}),"Live"))," ",h("span",{"class":"st-team"},S(L(sc,"statusTeam")))," ",h("span",{"class":"st-sep","aria-hidden":"true"},"\u00b7"),h("span",{},S(L(sc,"statusRound")))," ",h("span",{"class":"st-sep","aria-hidden":"true"},"\u00b7"),h("span",{},S(L(sc,"statusPick")))," ",h("span",{"class":"st-sep","aria-hidden":"true"},"\u00b7"),h("span",{"class":"st-clock"},S(L(sc,"clockText")))," ")," ",h("div",{"class":"draft-grid"}," ",h("div",{}," ",h("p",{"class":"col-label"},"Available players")," ",h("div",{"class":"plist"}," ",(L(sc,"available")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["p"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("div",{"class":"prow"}," ",h("span",{"class":"pmono","aria-hidden":"true"},S(L(sc,"p.mono")))," ",h("div",{},h("div",{"class":"pname"},S(L(sc,"p.name"))),h("div",{"class":"pmeta"},S(L(sc,"p.meta"))))," ",(L(sc,"canDraft") ? [h("button",{"class":"btn btn-ink btn-sm","type":"button","aria-label":L(sc,"p.label"),"onClick":L(sc,"p.draft")},h("span",{},"Draft player +"))] : null)," ")," "];})(sc2);})," ")," ")," ",h("div",{}," ",h("p",{"class":"col-label"},"Draft board \u00b7 snake order")," ",h("div",{"class":"board-wrap"}," ",h("div",{"class":"board"}," ",h("span",{})," ",(L(sc,"teams")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["t"]=__it;sc2.$index=__i;return (function(sc){return [h("span",{"class":"bhead"},S(L(sc,"t.name")))];})(sc2);})," ",(L(sc,"boardRows")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["row"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("span",{"class":"rlabel"},S(L(sc,"row.label")))," ",(L(sc,"row.cells")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["c"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("div",{"class":L(sc,"c.cls")},h("span",{"class":"cell-code"},S(L(sc,"c.code"))),h("div",{},h("div",{"class":"cell-name"},S(L(sc,"c.name"))),h("div",{"class":"cell-sub"},S(L(sc,"c.sub")))))," "];})(sc2);})," "];})(sc2);})," ")," ")," ")," ")," "] : null)," ",(L(sc,"isSchedule") ? [" ",h("h3",{"class":"h2"},"Week 1")," ",h("p",{"class":"body","style":"margin-top: 8px"},"Officials are assigned and scores post the moment they're saved.")," ",h("div",{"style":"margin-top: 18px"}," ",(L(sc,"schedule")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["g"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("div",{"class":"srow"}," ",h("div",{},h("div",{"class":"when"},S(L(sc,"g.day"))),h("div",{"class":"pmeta"},S(L(sc,"g.court"))))," ",h("div",{},h("div",{"class":"pname"},S(L(sc,"g.matchup"))),h("div",{"class":"pmeta"},S(L(sc,"g.status"))))," ",h("div",{"class":"pmeta officials-col"},S(L(sc,"g.crew")))," ",h("div",{"class":"score"},S(L(sc,"g.score")))," ")," "];})(sc2);})," ")," "] : null)," ",(L(sc,"isRoster") ? [" ",h("h3",{"class":"h2"},S(L(sc,"rosterTitle")))," ",h("p",{"class":"body","style":"margin-top: 8px"},S(L(sc,"rosterCoach"))+" \u00b7 Rosters fill as the draft runs.")," ",h("div",{"class":"pills"}," ",(L(sc,"rosterPills")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["t"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("button",{"class":L(sc,"t.cls"),"type":"button","aria-pressed":L(sc,"t.on"),"onClick":L(sc,"t.select")},S(L(sc,"t.name")))," "];})(sc2);})," ")," ",h("div",{"class":"roster"}," ",(L(sc,"rosterSlots")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["r"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("div",{"class":L(sc,"r.cls")},h("div",{},h("div",{"class":"pname"},S(L(sc,"r.name"))),h("div",{"class":"pmeta"},S(L(sc,"r.meta")))),h("span",{"class":"cell-code"},S(L(sc,"r.code"))))," "];})(sc2);})," ")," "] : null)," ",(L(sc,"isOfficials") ? [" ",h("h3",{"class":"h2"},"Your assigned games")," ",h("p",{"class":"body","style":"margin-top: 8px"},"Confirm availability and see the crew you're working with.")," ",h("div",{"style":"margin-top: 18px"}," ",(L(sc,"officials")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["o"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("div",{"class":"orow"}," ",h("div",{},h("div",{"class":"pname"},S(L(sc,"o.game"))),h("div",{"class":"pmeta"},S(L(sc,"o.when"))))," ",h("div",{"class":"pmeta"},S(L(sc,"o.crew")))," ",h("div",{}," ",(L(sc,"o.confirmed") ? [h("span",{"class":"ok"},h("span",{"class":"ok-dot","aria-hidden":"true"}),"Confirmed")] : null)," ",(L(sc,"o.pending") ? [h("button",{"class":"btn btn-ink btn-sm","type":"button","onClick":L(sc,"o.confirm")},h("span",{},"Confirm availability"))] : null)," ")," ")," "];})(sc2);})," ")," "] : null)," ")," ")," ",h("p",{"class":"foot"},"Illustrative UI. Fictional teams and players. Nothing here leaves this page.")," ")," "," ",h("section",{"id":"media","class":"wrap sec"}," ",h("div",{"class":"md"}," ",h("div",{"class":"md-copy"}," ",h("h2",{"class":"h1"},"Media & Exposure")," ",h("p",{"class":"md-tags"},"Custom Branding \u00b7 Media Network \u00b7 Content \u00b7 Social Media \u00b7 SEO \u00b7 Sponsorships")," ",h("span",{"class":"speed","aria-hidden":"true"})," ",h("p",{"class":"body md-desc"},"Build your league\u2019s identity and take it beyond the game. Personalize your presence with your own branding and tap into Corner League\u2019s connected media ecosystem of websites, articles, social media, and search engines to reach more fans, engage families, grow your audience, and attract sponsorship opportunities.")," ",h("div",{"style":"padding-left: 10px"},h("a",{"class":"btn btn-ink","href":"https://www.cornerleague.com","target":"_blank","rel":"noopener"},h("span",{},"Visit cornerleague.com ",h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2.2","aria-hidden":"true"},h("path",{"d":"M7 17L17 7M9 7h8v8"})))))," ")," ",h("div",{"class":"md-stage"}," ",h("span",{"class":"md-glow","aria-hidden":"true"})," ",h("div",{"class":"md-browser"}," ",h("div",{"class":"md-bar","aria-hidden":"true"},h("span",{"class":"md-dots"},h("i",{}),h("i",{}),h("i",{})),h("span",{"class":"md-url"},"cornerleague.com"))," ",h("div",{"class":"md-view"},h("img",{"class":"md-scroll","src":"media/media-article.jpg","alt":"Sample league story on the Corner League media site: Harbor City Tides rally to reach the SVL Final","width":"1280","height":"1760"}))," ")," ",h("figure",{"class":"md-cover c1"},h("img",{"src":"media/media-cover-spike.jpg","alt":"Sample magazine cover: SPIKE, the volleyball issue","width":"840","height":"1100"}))," ",h("figure",{"class":"md-cover c2"},h("img",{"src":"media/media-cover-hardwood.jpg","alt":"Sample magazine cover: HARDWOOD, the basketball issue","width":"840","height":"1100"}))," ",h("span",{"class":"md-chip k1 badge","aria-hidden":"true"},h("span",{},"Articles"))," ",h("span",{"class":"md-chip k2 badge red","aria-hidden":"true"},h("span",{},"Social"))," ",h("span",{"class":"md-chip k3 badge","aria-hidden":"true"},h("span",{},"Search"))," ")," ")," ")," "," ",h("section",{"id":"pricing","class":"sec"}," ",h("div",{"class":"fz"}," ",h("span",{"class":"fz-beam b1","aria-hidden":"true"})," ",h("span",{"class":"fz-beam b2","aria-hidden":"true"})," ",h("div",{"class":"fz-ghost","aria-hidden":"true"}," ",h("div",{"class":"fz-row"},h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"))," ",h("div",{"class":"fz-row alt"},h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"))," ",h("div",{"class":"fz-row"},h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"),h("span",{},"Free to start"))," ")," ",h("span",{"class":"fz-ht","aria-hidden":"true"})," ",h("svg",{"class":"fz-cup","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":".7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M7 4h10v5a5 5 0 0 1-10 0z"}),h("path",{"d":"M7 6H4.5a2.8 2.8 0 0 0 2.9 4M17 6h2.5a2.8 2.8 0 0 1-2.9 4M12 14v4M9.5 18h5M8 21h8"}))," ",h("div",{"class":"wrap fz-inner"}," ",h("div",{"class":"fz-copy"}," ",h("p",{"class":"eyebrow fz-eb"},"Pricing")," ",h("h2",{"class":"fz-h"},"Free to start.")," ",h("p",{"class":"fz-sub"},"Create your league, run the season, and grow the brand from one centralized hub.")," ",h("div",{"style":"padding-left: 10px"},h("a",{"class":"btn btn-red fz-cta","href":"#"},h("span",{},"Get Started ",h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2.2","aria-hidden":"true"},h("path",{"d":"M5 12h14M13 6l6 6-6 6"})))))," ")," ",h("div",{"class":"jb","role":"region","aria-label":"Live scoreboard: sample league games"}," ",h("span",{"class":"jb-bulbs top","aria-hidden":"true"})," ",h("div",{"class":"jb-face"}," ",h("div",{"class":"jb-stage"}," ",(L(sc,"sbBoards")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["b"]=__it;sc2.$index=__i;return (function(sc){return [" ",h("div",{"class":L(sc,"b.cls"),"aria-hidden":L(sc,"b.hidden")}," ",h("div",{"class":"jb-row"},h("span",{"class":"jb-lab"},S(L(sc,"b.sport"))),h("span",{"class":"jb-live"},h("span",{"class":"dot"}),"Live"))," ",h("div",{"class":"jb-league"},S(L(sc,"b.league")))," ",h("div",{"class":"jb-team"},h("span",{"class":"jb-tn"},S(L(sc,"b.home"))),h("span",{"class":L(sc,"b.hCls")},S(L(sc,"b.hs"))))," ",h("div",{"class":"jb-team"},h("span",{"class":"jb-tn"},S(L(sc,"b.away"))),h("span",{"class":L(sc,"b.aCls")},S(L(sc,"b.as"))))," ",h("div",{"class":"jb-row jb-foot"},h("span",{},S(L(sc,"b.period"))),h("span",{"class":"jb-clock"},S(L(sc,"b.clock"))))," ")," "];})(sc2);})," ")," ",h("div",{"class":"jb-dots"}," ",(L(sc,"sbDots")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["d"]=__it;sc2.$index=__i;return (function(sc){return [h("button",{"class":L(sc,"d.cls"),"type":"button","aria-label":L(sc,"d.label"),"aria-pressed":L(sc,"d.on"),"onClick":L(sc,"d.go")})];})(sc2);})," ")," ")," ",h("span",{"class":"jb-bulbs bot","aria-hidden":"true"})," ")," ")," ")," ")," "," ",h("section",{"class":"wrap sec"}," ",h("div",{"class":"faq"}," ",h("div",{"class":"faq-card"}," ",h("div",{}," ",h("p",{"class":"eyebrow"},"Before you start")," ",h("h2",{"class":"h1"},"Questions organizers ask.")," ",h("span",{"class":"speed","aria-hidden":"true"})," ")," ")," ",h("div",{}," ",h("div",{"class":L(sc,"faq.c0")},h("button",{"class":"qbtn","type":"button","aria-expanded":L(sc,"faq.o0"),"onClick":L(sc,"faq.t0")},h("span",{"class":"jersey"},"01"),h("span",{"class":"h3"},"What sports do you support?"),h("span",{"class":"plus","aria-hidden":"true"},h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2"},h("path",{"d":"M12 5v14M5 12h14"})))),(L(sc,"faq.o0") ? [h("p",{"class":"qa body"},h("span",{"class":"tbd"},"[List the sports Corner League OS supports, for example basketball, soccer, baseball, flag football and volleyball.]"))] : null))," ",h("div",{"class":L(sc,"faq.c1")},h("button",{"class":"qbtn","type":"button","aria-expanded":L(sc,"faq.o1"),"onClick":L(sc,"faq.t1")},h("span",{"class":"jersey"},"02"),h("span",{"class":"h3"},"Can I bring in my existing roster and schedule without having to manually input it?"),h("span",{"class":"plus","aria-hidden":"true"},h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2"},h("path",{"d":"M12 5v14M5 12h14"})))),(L(sc,"faq.o1") ? [h("p",{"class":"qa body"},h("span",{"class":"tbd"},"[Yes or no, and how: for example, upload a spreadsheet or CSV of players and games.]"))] : null))," ",h("div",{"class":L(sc,"faq.c2")},h("button",{"class":"qbtn","type":"button","aria-expanded":L(sc,"faq.o2"),"onClick":L(sc,"faq.t2")},h("span",{"class":"jersey"},"03"),h("span",{"class":"h3"},"Do I need to setup payments if my league is free or if I use another platform?"),h("span",{"class":"plus","aria-hidden":"true"},h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2"},h("path",{"d":"M12 5v14M5 12h14"})))),(L(sc,"faq.o2") ? [h("p",{"class":"qa body"},h("span",{"class":"tbd"},"[Confirm whether payments are optional, for example: No. Payments are optional, so free leagues and leagues that collect fees elsewhere can skip that step.]"))] : null))," ",h("div",{"class":L(sc,"faq.c3")},h("button",{"class":"qbtn","type":"button","aria-expanded":L(sc,"faq.o3"),"onClick":L(sc,"faq.t3")},h("span",{"class":"jersey"},"04"),h("span",{"class":"h3"},"Can my coaches, officials, and staff have their own account under my league?"),h("span",{"class":"plus","aria-hidden":"true"},h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2"},h("path",{"d":"M12 5v14M5 12h14"})))),(L(sc,"faq.o3") ? [h("p",{"class":"qa body"},"Yes. They accept your invitation and sign in with their own account. Their access is tied to your league and the seasons you assign, and they never create an organization of their own.")] : null))," ",h("div",{"class":L(sc,"faq.c4")},h("button",{"class":"qbtn","type":"button","aria-expanded":L(sc,"faq.o4"),"onClick":L(sc,"faq.t4")},h("span",{"class":"jersey"},"05"),h("span",{"class":"h3"},"Do you have a mobile app?"),h("span",{"class":"plus","aria-hidden":"true"},h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2"},h("path",{"d":"M12 5v14M5 12h14"})))),(L(sc,"faq.o4") ? [h("p",{"class":"qa body"},h("span",{"class":"tbd"},"[Yes or no. If no app yet, say how it works on a phone, for example in the mobile browser.]"))] : null))," ",h("div",{"class":L(sc,"faq.c5")},h("button",{"class":"qbtn","type":"button","aria-expanded":L(sc,"faq.o5"),"onClick":L(sc,"faq.t5")},h("span",{"class":"jersey"},"06"),h("span",{"class":"h3"},"Can I connect our social media channels?"),h("span",{"class":"plus","aria-hidden":"true"},h("svg",{"class":"ico","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2"},h("path",{"d":"M12 5v14M5 12h14"})))),(L(sc,"faq.o5") ? [h("p",{"class":"qa body"},h("span",{"class":"tbd"},"[Yes or no, and which channels.]"))] : null))," ")," ")," ")," "," ",h("section",{"class":"wrap sec"}," ",h("div",{"class":"final"}," ",h("p",{"class":"eyebrow"},"IT STARTS HERE")," ",h("h2",{"class":"final-h"},"Your next season, ran like a Pro")," ",h("div",{"style":"padding-left: 10px; margin-top: 40px"},h("a",{"class":"btn btn-red","href":"#"},h("span",{},"Get Started")))," ",h("a",{"class":"slink","href":"#"},"Already part of a league? Sign in \u2192")," ")," ")," ",(L(sc,"showTicker") ? [" ",h("div",{"class":"ticker","aria-hidden":"true"}," ",h("div",{"class":"ticker-track"}," ",h("div",{"class":"tk-group"},(L(sc,"ticker")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["t"]=__it;sc2.$index=__i;return (function(sc){return [h("span",{"class":"tk"},S(L(sc,"t.w"))),h("span",{"class":"tk-sl"},"/")];})(sc2);}))," ",h("div",{"class":"tk-group"},(L(sc,"ticker")||[]).map(function(__it,__i){var sc2=Object.create(sc);sc2["t"]=__it;sc2.$index=__i;return (function(sc){return [h("span",{"class":"tk"},S(L(sc,"t.w"))),h("span",{"class":"tk-sl"},"/")];})(sc2);}))," ")," ")," "] : null)," ",h("footer",{"class":"ftr"}," ",h("div",{"class":"wrap"}," ",h("div",{"class":"ftr-top"}," ",h("div",{"class":"ftr-brand"}," ",h("a",{"class":"logo-tab","href":"#top","style":"height: 52px","aria-label":"Corner League OS, back to top"},h("span",{"class":"logo-word"},"Corner League"),h("span",{"class":"logo-os"},"OS"))," ",h("span",{"class":"h3"},"The work behind the sport.")," ")," ",h("nav",{"class":"flinks","aria-label":"Footer"}," ",h("a",{"href":"https://cornerleague.com"},"Visit cornerleague.com"),h("span",{"class":"fsep","aria-hidden":"true"},"\u00b7")," ",h("a",{"href":"#"},"Sign in")," ")," ")," ",h("p",{"class":"wm","aria-hidden":"true"},h("span",{"class":"wm-sl"},"/"),"Corner League")," ")," ")," "); }
  class DCLogic extends preact.Component {
    render() { return template(this.renderVals()); }
  }
class Component extends DCLogic {
  constructor(props) {
    super(props);
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.state = { tab: 'draft', picks: [], clock: 45, menuOpen: false, faqOpen: 0, rosterTeam: 0, confirmed: {}, videoPaused: !!reduceMotion, pbIn: [false, false, false, false, false, false], pbSeen: false, ftIdx: 0, sbIdx: 0, sbSec: 0, sb: this.sbInit(), wideHero: typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(min-width: 1440px)').matches : true, stackHero: typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(max-width: 991px)').matches : false };
    this.ftV = []; this.ftF = [];
    this.ftVR = [0, 1, 2, 3].map((i) => (el) => this.ftAttachV(i, el));
    this.ftRootR = (el) => this.ftAttachRoot(el);
    this.videoRef = (el) => {
      if (!el || el === this.vid) return;
      this.vid = el;
      el.muted = true;
      el.defaultMuted = true;
      el.loop = true;
      el.playsInline = true;
      el.setAttribute('muted', '');
      el.setAttribute('playsinline', '');
      if (!this.state.videoPaused) {
        const p = el.play();
        if (p && p.catch) p.catch(() => { this.setState({ videoPaused: true }); });
      }
    };

  }
  teams() {
    return [
      { name: 'Raptors', coach: 'Coach D. Ellis', need: 'PG' },
      { name: 'Comets', coach: 'Coach R. Ito', need: 'C' },
      { name: 'Ironworks', coach: 'Coach M. Ruiz', need: 'SF' },
      { name: 'Night Owls', coach: 'Coach T. Banks', need: 'SG' }
    ];
  }
  players() {
    return [
      { id: 'p1', name: 'Dre Lawson', pos: 'PG', ppg: '18.4' },
      { id: 'p2', name: 'Marcus Hale', pos: 'C', ppg: '16.9' },
      { id: 'p3', name: 'Tomás Rivera', pos: 'SF', ppg: '15.7' },
      { id: 'p4', name: 'Jalen Brooks', pos: 'SG', ppg: '15.1' },
      { id: 'p5', name: 'Kofi Mensah', pos: 'PF', ppg: '14.6' },
      { id: 'p6', name: 'Evan Cho', pos: 'PG', ppg: '13.8' },
      { id: 'p7', name: 'Sam Okafor', pos: 'C', ppg: '13.2' },
      { id: 'p8', name: 'Luis Ortega', pos: 'SG', ppg: '12.5' },
      { id: 'p9', name: 'Nate Pruitt', pos: 'SF', ppg: '11.9' },
      { id: 'p10', name: 'Ray Delgado', pos: 'PF', ppg: '11.4' },
      { id: 'p11', name: 'Theo Grant', pos: 'PG', ppg: '10.8' },
      { id: 'p12', name: 'Ari Walsh', pos: 'SF', ppg: '10.2' },
      { id: 'p13', name: 'Malik Reyes', pos: 'PF', ppg: '9.9' },
      { id: 'p14', name: 'Owen Park', pos: 'SG', ppg: '9.4' },
      { id: 'p15', name: 'Cal Bennett', pos: 'C', ppg: '8.8' },
      { id: 'p16', name: 'Jonah Fisk', pos: 'PG', ppg: '8.1' }
    ];
  }
  teamFor(n) {
    const r = Math.floor(n / 4), i = n % 4;
    return r % 2 === 0 ? i : 3 - i;
  }
  pbRun(target) {
    (this.pbTimers || []).forEach((t) => clearTimeout(t));
    this.pbTimers = [];
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { this.setState({ pbIn: [0, 1, 2, 3, 4, 5].map(() => target) }); return; }
    let step = 0;
    this.state.pbIn.forEach((v, i) => {
      if (v === target) return;
      this.pbTimers.push(setTimeout(() => {
        const next = this.state.pbIn.slice();
        next[i] = target;
        this.setState({ pbIn: next });
      }, step * 190));
      step += 1;
    });
  }
  sbInit() {
    return [
      { sport: 'Basketball', league: 'Westside Rec Basketball', home: 'Harbor Hawks', away: 'Eastview Comets', h: 48, a: 45, period: '3rd Quarter', t: 252, dir: -1, rate: 0.3, inc: [2, 2, 3, 1] },
      { sport: 'Soccer', league: 'Metro Youth Soccer · U14', home: 'River City FC', away: 'Northgate United', h: 2, a: 1, period: '2nd Half', t: 4020, dir: 1, rate: 0.03, inc: [1] },
      { sport: 'Baseball', league: 'Sunday Slow-Pitch League', home: 'Bombers', away: 'Riverdogs', h: 5, a: 4, period: 'Top 6th', clockTxt: '1 Out · 2 On', dir: 0, rate: 0.06, inc: [1, 1, 2] },
      { sport: 'Flag Football', league: 'Friday Night Flag', home: 'Blitz', away: 'Gridlock', h: 21, a: 14, period: '2nd Quarter', t: 400, dir: -1, rate: 0.05, inc: [6, 7, 7] },
      { sport: 'Volleyball', league: 'Coastal Co-ed Volleyball', home: 'Spikers', away: 'Net Gains', h: 18, a: 16, period: 'Set 3', clockTxt: 'Sets 1–1', dir: 0, rate: 0.45, inc: [1] },
      { sport: 'Hockey', league: 'Lakeside Adult Hockey', home: 'Ice Kings', away: 'Puck Dynasty', h: 3, a: 2, period: '3rd Period', t: 558, dir: -1, rate: 0.03, inc: [1] }
    ];
  }
  sbTick() {
    const s = this.state;
    if (!s.sb) return;
    const i = s.sbIdx;
    const sb = s.sb.map((b) => Object.assign({}, b, { hb: false, ab: false }));
    const b = sb[i];
    if (b.dir === -1) b.t = b.t > 1 ? b.t - 1 : (b.dir === -1 ? 720 : 0);
    else if (b.dir === 1) b.t += 1;
    if (Math.random() < b.rate) {
      const pts = b.inc[Math.floor(Math.random() * b.inc.length)];
      if (Math.random() < 0.5) { b.h += pts; b.hb = true; } else { b.a += pts; b.ab = true; }
    }
    let sec = s.sbSec + 1;
    let idx = i;
    if (sec >= 6) { sec = 0; idx = (i + 1) % sb.length; }
    this.setState({ sb: sb, sbSec: sec, sbIdx: idx });
  }
  ftReduce() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
  ftAttachV(i, el) {
    if (!el || this.ftV[i] === el) return;
    this.ftV[i] = el;
    el.muted = true; el.defaultMuted = true; el.playsInline = true; el.loop = true;
    el.setAttribute('muted', ''); el.setAttribute('playsinline', '');
    if (this.ftReduce()) el.controls = true;
    this.ftSync();
  }
  ftAttachRoot(el) {
    if (!el || el === this.ftEl) return;
    this.ftEl = el;
    if (typeof IntersectionObserver === 'undefined') { this.ftVisible = true; this.ftSync(); return; }
    this.ftObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { this.ftVisible = e.isIntersecting; this.ftSync(); });
    }, { threshold: 0.1 });
    this.ftObs.observe(el);
  }
  ftSync() {
    const reduce = this.ftReduce();
    this.ftV.forEach((el) => {
      if (!el) return;
      if (this.ftVisible && !reduce) {
        if (el.paused) { const p = el.play(); if (p && p.catch) p.catch(() => {}); }
      } else if (!el.paused) {
        el.pause();
      }
    });
  }
  pbTick() {
    if (!this.pbAutoRan || !this.pbNextAt || Date.now() < this.pbNextAt) return;
    const count = this.state.pbIn.filter(Boolean).length;
    const target = count < 6;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { if (target) this.pbRun(true); this.pbNextAt = 0; return; }
    this.pbRun(target);
    this.pbNextAt = Date.now() + (target ? 6500 : 3600);
  }
  pbAttach(el) {
    if (!el || el === this.pbEl) return;
    this.pbEl = el;
    if (typeof IntersectionObserver === 'undefined') { this.setState({ pbSeen: true }); return; }
    this.pbObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || this.pbAutoRan) return;
        this.pbAutoRan = true;
        this.setState({ pbSeen: true });
        this.pbNextAt = Date.now() + 1500;
      });
    }, { threshold: 0.45 });
    this.pbObs.observe(el);
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
    if (window.matchMedia) {
      this.wideMq = window.matchMedia('(min-width: 1440px)');
      this.onWide = (e) => this.setState({ wideHero: e.matches });
      if (this.wideMq.addEventListener) this.wideMq.addEventListener('change', this.onWide);
      else if (this.wideMq.addListener) this.wideMq.addListener(this.onWide);
      if (this.wideMq.matches !== this.state.wideHero) this.setState({ wideHero: this.wideMq.matches });
      this.stackMq = window.matchMedia('(max-width: 991px)');
      this.onStack = (e) => this.setState({ stackHero: e.matches });
      if (this.stackMq.addEventListener) this.stackMq.addEventListener('change', this.onStack);
      else if (this.stackMq.addListener) this.stackMq.addListener(this.onStack);
      if (this.stackMq.matches !== this.state.stackHero) this.setState({ stackHero: this.stackMq.matches });
    }
  }
  componentWillUnmount() {
    if (this.ftObs) this.ftObs.disconnect();
    (this.pbTimers || []).forEach((t) => clearTimeout(t));
    if (this.pbObs) this.pbObs.disconnect();
    clearInterval(this.timer);
    if (this.wideMq) {
      if (this.wideMq.removeEventListener) this.wideMq.removeEventListener('change', this.onWide);
      else if (this.wideMq.removeListener) this.wideMq.removeListener(this.onWide);
    }
    if (this.stackMq) {
      if (this.stackMq.removeEventListener) this.stackMq.removeEventListener('change', this.onStack);
      else if (this.stackMq.removeListener) this.stackMq.removeListener(this.onStack);
    }
  }
  tick() {
    this.pbTick();
    this.sbTick();
    const s = this.state;
    if (s.picks.length >= 12) return;
    if (s.clock <= 1) { this.autoPick(); return; }
    this.setState({ clock: s.clock - 1 });
  }
  availableFor(picks) {
    const taken = {};
    picks.forEach((p) => { taken[p.pid] = true; });
    return this.players().filter((p) => !taken[p.id]);
  }
  draft(pid) {
    const s = this.state;
    if (s.picks.length >= 12) return;
    if (s.picks.some((p) => p.pid === pid)) return;
    const t = this.teamFor(s.picks.length);
    this.setState({ picks: s.picks.concat([{ pid: pid, t: t }]), clock: 45 });
  }
  autoPick() {
    const s = this.state;
    const need = this.teams()[this.teamFor(s.picks.length)].need;
    const av = this.availableFor(s.picks);
    if (!av.length) return;
    const pick = av.find((p) => p.pos === need) || av[0];
    this.draft(pick.id);
  }
  renderVals() {
    const s = this.state;
    const teams = this.teams();
    const players = this.players();
    const byId = {};
    players.forEach((p) => { byId[p.id] = p; });
    const pad = (v) => (v < 10 ? '0' : '') + v;
    const initials = (name) => name.split(' ').map((w) => w[0]).join('');
    const n = s.picks.length;
    const done = n >= 12;
    const round = done ? 3 : Math.floor(n / 4) + 1;
    const pickInRound = done ? 4 : (n % 4) + 1;
    const cur = teams[this.teamFor(Math.min(n, 11))];
    const clockText = done ? '00:00' : '00:' + pad(s.clock);

    const available = this.availableFor(s.picks).map((p) => ({
      id: p.id, name: p.name, pos: p.pos, ppg: p.ppg,
      meta: p.pos + ' · ' + p.ppg + ' PPG last season',
      mono: initials(p.name),
      label: 'Draft ' + p.name,
      draft: () => this.draft(p.id)
    }));

    const boardRows = [];
    for (let r = 0; r < 3; r++) {
      const cells = [];
      for (let t = 0; t < 4; t++) {
        const slot = r % 2 === 0 ? t : 3 - t;
        const idx = r * 4 + slot;
        const pk = s.picks[idx];
        let cls = 'cell', name = '—', sub = '';
        if (pk) { const pl = byId[pk.pid]; cls = 'cell filled'; name = pl.name; sub = pl.pos; }
        else if (idx === n && !done) { cls = 'cell now'; name = 'On the clock'; sub = clockText; }
        cells.push({ cls: cls, code: (r + 1) + '.' + pad(slot + 1), name: name, sub: sub });
      }
      boardRows.push({ label: 'R' + (r + 1), cells: cells });
    }

    let lastPick = 'No picks yet. Draft a player to start the board.';
    if (n > 0) {
      const lp = s.picks[n - 1];
      const pl = byId[lp.pid];
      lastPick = teams[lp.t].name + ' took ' + pl.name + ', ' + pl.pos + '.';
    }
    const upNext = [];
    for (let k = 1; k <= 3; k++) {
      const idx = n + k;
      if (idx < 12) upNext.push({ code: (Math.floor(idx / 4) + 1) + '.' + pad((idx % 4) + 1), team: teams[this.teamFor(idx)].name });
    }

    const tabDefs = [['draft', 'Live draft'], ['schedule', 'Season schedule'], ['roster', 'Team roster'], ['officials', 'Officials']];
    const tabs = tabDefs.map((d) => ({
      label: d[1], selected: s.tab === d[0], cls: s.tab === d[0] ? 'tab on' : 'tab',
      select: () => this.setState({ tab: d[0] })
    }));

    const rt = s.rosterTeam;
    const rosterPills = teams.map((t, i) => ({ name: t.name, on: i === rt, cls: i === rt ? 'pill on' : 'pill', select: () => this.setState({ rosterTeam: i }) }));
    const teamPicks = [];
    s.picks.forEach((p, idx) => { if (p.t === rt) teamPicks.push({ p: p, idx: idx }); });
    const rosterSlots = [];
    for (let r = 0; r < 3; r++) {
      const tp = teamPicks[r];
      if (tp) {
        const pl = byId[tp.p.pid];
        rosterSlots.push({ cls: 'rslot', name: pl.name, meta: pl.pos + ' · ' + pl.ppg + ' PPG', code: 'R' + (Math.floor(tp.idx / 4) + 1) });
      } else {
        rosterSlots.push({ cls: 'rslot open', name: 'Open slot', meta: 'Fills in round ' + (r + 1), code: 'R' + (r + 1) });
      }
    }

    const schedule = [
      { day: 'Sat 9:00 AM', court: 'Court 1', matchup: 'Raptors vs Comets', status: 'Final', crew: 'J. Moreno, K. Patel', score: '54–49' },
      { day: 'Sat 10:30 AM', court: 'Court 2', matchup: 'Ironworks vs Night Owls', status: 'Live · Q3', crew: 'A. Brandt, L. Osei', score: '38–41' },
      { day: 'Sun 1:00 PM', court: 'Court 1', matchup: 'Comets vs Ironworks', status: 'Scheduled', crew: 'J. Moreno, L. Osei', score: '—' },
      { day: 'Sun 2:30 PM', court: 'Court 2', matchup: 'Night Owls vs Raptors', status: 'Scheduled', crew: 'K. Patel, A. Brandt', score: '—' }
    ];
    const offDefs = [
      { id: 'g3', game: 'Comets vs Ironworks', when: 'Sun 1:00 PM · Court 1', crew: 'Crew: J. Moreno (R), L. Osei (U1)' },
      { id: 'g4', game: 'Night Owls vs Raptors', when: 'Sun 2:30 PM · Court 2', crew: 'Crew: K. Patel (R), A. Brandt (U1)' },
      { id: 'g5', game: 'Raptors vs Ironworks', when: 'Sat 9:00 AM · Court 1', crew: 'Crew: L. Osei (R), J. Moreno (U1)' }
    ];
    const officials = offDefs.map((o) => ({
      game: o.game, when: o.when, crew: o.crew,
      confirmed: !!s.confirmed[o.id], pending: !s.confirmed[o.id],
      confirm: () => { const c = Object.assign({}, this.state.confirmed); c[o.id] = true; this.setState({ confirmed: c }); }
    }));

    const faq = {};
    for (let i = 0; i < 6; i++) {
      const open = s.faqOpen === i;
      faq['o' + i] = open;
      faq['c' + i] = open ? 'qrow slant-l open' : 'qrow slant-l';
      faq['t' + i] = () => this.setState({ faqOpen: this.state.faqOpen === i ? -1 : i });
    }

    const words = ['Registration', 'Payments', 'Live drafts', 'Schedules', 'Officials', 'Scores', 'Stats', 'Email/SMS Updates', 'Media/Content', 'Documents'];
    const theme = this.props.theme ?? 'Light';
    const hl = this.props.highlightPlaceholders ?? true;
    let rootClass = 'cl';
    if (theme === 'Stadium dark') rootClass += ' dark';
    if (hl) rootClass += ' show-tbd';

    return {
      rootClass: rootClass,
      ft: { root: this.ftRootR, v0: this.ftVR[0], v1: this.ftVR[1], v2: this.ftVR[2], v3: this.ftVR[3] },
      sbBoards: (s.sb || []).map((b, idx) => {
        const pad2 = (v) => (v < 10 ? '0' : '') + v;
        let clock = b.clockTxt || '';
        if (b.dir === -1) clock = Math.floor(b.t / 60) + ':' + pad2(b.t % 60);
        if (b.dir === 1) clock = Math.floor(b.t / 60) + "'";
        return {
          cls: 'jb-board' + (idx === s.sbIdx ? ' on' : ''),
          hidden: idx !== s.sbIdx,
          sport: b.sport, league: b.league, home: b.home, away: b.away,
          hs: String(b.h), as: String(b.a),
          hCls: 'jb-sc' + (b.h >= b.a ? ' lead' : '') + (b.hb ? ' bump' : ''),
          aCls: 'jb-sc' + (b.a >= b.h ? ' lead' : '') + (b.ab ? ' bump' : ''),
          period: b.period, clock: clock
        };
      }),
      sbDots: (s.sb || []).map((b, idx) => ({
        cls: 'jb-dot' + (idx === s.sbIdx ? ' on' : ''),
        on: idx === s.sbIdx,
        label: 'Show ' + b.sport + ' scoreboard',
        go: () => this.setState({ sbIdx: idx, sbSec: -6 })
      })),
      pbRef: this.pbRefFn || (this.pbRefFn = (el) => this.pbAttach(el)),
      pb: (() => {
        const ins = s.pbIn || [];
        const count = ins.filter(Boolean).length;
        const left = 6 - count;
        const o = {
          all: count === 6, none: count === 0,
          stageCls: 'pb-stage' + (s.pbSeen ? ' seen' : '') + (count === 6 ? ' all' : ''),
          offCls: 'pb-seg' + (count === 6 ? '' : ' on'),
          onCls: 'pb-seg' + (count === 6 ? ' on' : ''),
          num: left === 0 ? '1' : String(left),
          label: left <= 1 ? 'place' : 'places',
          note: left === 0 ? '1 login' : left + (left === 1 ? ' login' : ' logins'),
          scatter: () => { this.pbNextAt = Date.now() + 9000; this.pbRun(false); },
          merge: () => { this.pbNextAt = Date.now() + 9000; this.pbRun(true); }
        };
        for (let i = 0; i < 6; i++) {
          o['i' + i] = !!ins[i];
          o['c' + i] = 'pc c' + (i + 1) + (ins[i] ? ' in' : '');
          o['t' + i] = () => {
            this.pbNextAt = Date.now() + 9000;
            (this.pbTimers || []).forEach((t) => clearTimeout(t));
            const next = this.state.pbIn.slice();
            next[i] = !next[i];
            this.setState({ pbIn: next, pbSeen: true });
          };
        }
        return o;
      })(),
      videoRef: this.videoRef,
      wideHero: !!s.wideHero,
      desktopHero: !s.stackHero,
      stackHero: !!s.stackHero,

      showTicker: this.props.showTicker ?? true,
      ticker: words.map((w) => ({ w: w })),
      menuOpen: s.menuOpen,
      menuClosed: !s.menuOpen,
      menuLabel: s.menuOpen ? 'Close menu' : 'Open menu',
      toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      done: done,
      hasPlayers: !done,
      canDraft: !done,
      heroTeam: done ? 'Draft done' : cur.name,
      heroSub: done ? 'All 12 picks are in' : 'On the clock · Round ' + round + ' · Pick ' + pickInRound + ' of 4',
      heroPlayers: available.slice(0, 3),
      clockText: clockText,
      lastPick: lastPick,
      upNext: upNext,
      tabs: tabs,
      isDraft: s.tab === 'draft',
      isSchedule: s.tab === 'schedule',
      isRoster: s.tab === 'roster',
      isOfficials: s.tab === 'officials',
      draftHeading: done ? 'Draft complete.' : 'Round ' + round + ' is on the clock.',
      draftHint: done ? 'Every roster is set. Reset the preview to run it again.' : 'Pick a player to see the board update.',
      statusTeam: done ? 'Draft complete' : cur.name + ' are on the clock',
      statusRound: 'Round ' + round,
      statusPick: 'Pick ' + pickInRound + ' of 4',
      available: available,
      teams: teams,
      boardRows: boardRows,
      schedule: schedule,
      rosterTitle: teams[rt].name,
      rosterCoach: teams[rt].coach,
      rosterPills: rosterPills,
      rosterSlots: rosterSlots,
      officials: officials,
      faq: faq,
      reset: () => this.setState({ picks: [], clock: 45, confirmed: {}, rosterTeam: 0, tab: 'draft' })
    };
  }
}
  preact.render(h(Component, {"theme": "Light", "highlightPlaceholders": true, "showTicker": true}), document.getElementById("app"));
})();
