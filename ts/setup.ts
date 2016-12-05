## CONFIG START ###
config {
  absRefPrefix = http://typo3.p123456.webspaceconfig.de/
  #absRefPrefix = http://www.examle.com/
  index_enable = 1
  tx_realurl_enable = 1
  prefixLocalAnchors = 0
  simulateStaticDocuments = 0
  debug = 0
}

# language
config {
  language = de
  locale_all = de_DE.UTF-8
  sys_language_uid = 0
  htmlTag_setParams = lang="de"
}

# Localization:
config {
	linkVars = L
	sys_language_uid = 0
	sys_language_overlay = 1
	sys_language_mode = content_fallback
    language = de
    locale_all = de_DE.UTF-8
    htmlTag_setParams = lang="de" dir="ltr" class="no-js"
}
[globalVar = GP:L = 1]
config {
	sys_language_uid = 1
	language = en
	locale_all = en_US.UTF-8
	htmlTag_setParams = lang="en" dir="ltr" class="no-js"
}
[global]

# optimierung
config {
  sendCacheHeaders = 1
  disablePrefixComment = 1
  removeDefaultJS = 1
  inlineStyle2TempFile = 1
}
lib.stdheader {
  5.prefixComment >
  stdWrap.prefixComment >
}
tt_content.stdWrap.prefixComment >
tt_content.stdWrap.prepend >

# extensions
plugin.meta {
  language = de
}
plugin.tx_news.settings {
  displayDummyIfNoMedia = 0
  detail {
    showSocialShareButtons = 0
  }
  link.skipControllerAndAction = 1
}
plugin.tx_powermail.settings.setup.misc.addQueryString = 1

plugin.tx_indexedsearch {
  show.advancedSearchLink = 0
  show.rules = 0
  
}

## CONFIG ENDE ###

## Script'n'Style start ###
page.includeCSS {
  #slick = fileadmin/templates/libs/slick/slick.css
  #slickTheme = fileadmin/templates/libs/slick/slick-theme.css
  #sm-core = fileadmin/templates/libs/smart-menus/css/sm-core-css.css
  #sm-simple = fileadmin/templates/libs/smart-menus/css/sm-simple/sm-simple.css
  #sm-blue = fileadmin/templates/libs/smart-menus/css/sm-blue/sm-blue.css
  #fl = fileadmin/templates/libs/featherlight/featherlight.css
  #prettify = fileadmin/templates/libs/prettify/prettify.css
  main = fileadmin/templates/css/style.css
}

page.includeJS {
  #prettify = fileadmin/templates/libs/prettify/prettify.js
  #typekit = https://use.typekit.net/vfsenmkls.js
  #typekit.external = true
}

page.includeJSFooter {
  #slick = fileadmin/templates/libs/slick/slick.min.js
  #sm = fileadmin/templates/libs/smart-menus/jquery.smartmenus.js
  #fl = fileadmin/templates/libs/featherlight/featherlight.js
  #parallax = fileadmin/templates/libs/parallax.min.js
  #masonry = fileadmin/templates/libs/masonry.js
  func = fileadmin/templates/js/functions.js
  #googleMaps = https://maps.googleapis.com/maps/api/js?key=GOOGLE_API_KEY&callback=initMap
  #googleMaps {
  #async = 1
  #defer = 1
  #  external = 1
  #}
}
## Script'n'Style ende ###

## body modifications start ###
page.bodyTagCObject = TEXT
page.bodyTagCObject.field = uid
page.bodyTagCObject.wrap = <body id="pid-|">
## body modifications ende ###

# Typo3 Layout Optionen Content-Elemente
tt_content.stdWrap.wrap.cObject = CASE
tt_content.stdWrap.wrap.cObject {
  key.field = layout
  
  # Container
#  10 = TEXT
#  10.value = <div class="contentelement"><div class="container">|</div></div>
#  # Container News
#  11 = TEXT
#  11.value = <div class="csc-default container newslist">|</div>
#  # Container News Hintergrund grau
#  12 = TEXT
#  12.value = <div class="csc-default layout-grau"><div class="container newslist">|</div></div>
}

# Typo3 Frame Optionen Content-Elemente
#tt_content.stdWrap.innerWrap.cObject = CASE
#tt_content.stdWrap.innerWrap.cObject {
#  key.field = section_frame
#  100 = TEXT
#  100.value = <div class="bg-color-2">|</div>
#  110 = TEXT
#  110.value = <div class="bg-color-3">|</div>
#  120 = TEXT
#  120.value = <div class="bg-color-4">|</div>
#}

## LIBS START ###

lib.main-content < styles.content.get

#lib.slider < styles.content.get
#lib.slider {
#  select {
#  where = colPos=1
#  languageField=sys_language_uid
#  }
#  slide = -1
#}

#lib.slidernav = CONTENT
#lib.slidernav {
#  table=tt_content
#  select {
#  where = colPos=1
#  languageField=sys_language_uid
#  selectFields = header
#  }
#  slide = -1
#  renderObj = COA
#  renderObj{
#    10 = TEXT  
#    10{
#      required = 1
#      wrap = <div class="navitem">|</div>
#      field = header
#    }
#  # Folgendes TEXT Element gibt alle verfügbaren Felder aus, d.h. wenn man selectFields nicht setzt sieht man hier alle Felder die in der Datenbank vorhanden sind.
#  #20=TEXT
#  #20.data = debug:data
#  }
#}

lib.math = TEXT
lib.math {
  current = 1
  prioriCalc = 1
}

### Set default class for ul from rte
#lib.parseFunc_RTE {
#  externalBlocks := addToList(ul)
#  externalBlocks {
#    ul.stripNL = 1
#    ul.callRecursive = 1
#    ul.callRecursive.tagStdWrap.HTMLparser = 1
#    ul.callRecursive.tagStdWrap.HTMLparser.tags.ul {
#      fixAttrib.class.default = scroll-animation contentList
#    }
#  }
#}

###  News-Detailseiten
#[globalVar = GP:tx_news_pi1|news > 0]
#config.noPageTitle = 2

#page.headerData.1 = CONTENT
#page.headerData.1 {
#  table = tx_news_domain_model_news
#  select {
#    # pid des Newsstorage-Folders setzen
#    pidInList = 31,32,33,34
#    uidInList.data = GP:tx_news_pi1|news
#    #languageField = sys_language_uid
#  }
#  renderObj = TEXT
#  renderObj.field = title
#  #renderObj.data = GP:tx_news_pi1|news
#  renderObj.wrap = <title>REWE PETZ:&nbsp;|</title>
#}
#[global]

# JSFooterLibs to JSLibs

page {
#  includeJSLibs {
#    jquery < page.includeJSFooterlibs.jquery
#    flexslider2 < page.includeJSFooterlibs.flexslider2
#  }
#  includeJSFooterlibs {
#    jquery >
#    includeJSFooterlibs.flexslider2 >
#    powermailJQuery >
#  }
  headerData.1901 = TEXT
  headerData.1901.value (
	<link rel="apple-touch-icon" sizes="57x57" href="/fileadmin/templates/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/fileadmin/templates/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/fileadmin/templates/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/fileadmin/templates/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/fileadmin/templates/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/fileadmin/templates/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/fileadmin/templates/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/fileadmin/templates/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/fileadmin/templates/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="/fileadmin/templates/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/fileadmin/templates/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/fileadmin/templates/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/fileadmin/templates/favicon/favicon-16x16.png">
	<link rel="manifest" href="/fileadmin/templates/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/fileadmin/templates/favicon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
  )
}

page.meta.viewport = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0

## LIBS ENDE ###

# Default PAGE object:
page = PAGE
page.shortcutIcon = fileadmin/templates/favicon/favicon.ico
#page.1 = TEXT
#page.1.value (
#  <div class="loader">
#    <img src="fileadmin/templates/images/rewe-petz-logo.svg" class="logo" width="200" height="86" />
#    <img src="fileadmin/templates/images/loader.gif" width="35" height="35" />
#    <noscript>
#      Diese Webseite benötigt JavaScript.<br/>
#      Bitte aktivieren Sie JavaScript und laden Sie die Seite neu.
#    </noscript>
#  </div>
#)
page.10 < styles.content.get
page.10 = FLUIDTEMPLATE
page.10 {
  file = fileadmin/templates/fluid/start.html
  partialRootPath = fileadmin/templates/fluid/partials/
  layoutRootPath = fileadmin/templates/fluid/layouts/
}

# Aussagekräftige Fehlermeldungen
#page.config.contentObjectExceptionHandler = 0

# internetexplorer > scheiße^2
[browser = msie]

[global]
