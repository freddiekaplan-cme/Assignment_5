Hi Freddie!

First the bad news! Nothing works!!!

The reason is that '/' at the start of a file path means 'root' - it is an absolute path starting from the root of wherever I have saved your assignment. In this case that is "users/rob" so
  <link rel="stylesheet" href="/styles/freddie.css">
looks for users/rob/freddie.css.

What you need is a relative path - ./ - for the same level.

So things like the css, the nav links <a href="/html/projects.html"> and even <img class="about-head" src="/img/floating-head.png" ..> are broken links.

Those paths are an issue on every page. On index.html the inks to fotn awesome and typograpy are also broken - <link rel="stylesheet" href="../styles/typography.css"> this is on the same level as index.html so just should use ./ - 'relative to the current file, look on thee same level for the styles directory'

Now the good news:

It's excellent, really well done! You've expressed your creativity both in the design and in the code and its a pleasure to look at!

As you can see below you've met most requirements, so you have a VG waiting for you - BUT you have to fix those links first. It's only the paths in the html files so it's a pretty quick fix - please let me know when it's done


*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible) ✅

  H1 on every page ✅ 

  Mail to Contact form ✅

  Links to specific projects opening in new windows ✅ ❌
    Not opening in a new page from the menu links

CSS
  External CSS ✅

  General style sheets for common elements ✅ ❌
    Things like .page-footer are duplicated in 3 files

  Typography style sheet ✅

  Locally installed font ✅
  
  Separate stylesheets for each page ✅

  RWD
    Desktop ✅
    Mobile ✅ ❌
      Check the keyboards on mobile

JS
  jQuery plugin (such as a carousel) ✅

  JS/jQuery multi level menu (min 2 levels) ✅
    Very nice!
  

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ✅

  CSS prefixing where required ✅ ❌
    contact.css

  jQuery effects ✅
    Looks like you had fun with these!

  Semantic element naming ✅

  Code style
   HTML: ✅
   CSS: ✅
   JS: ✅
     Indent everything inside $(function() {