# Layouts in Content Elemente
#TCEFORM.tt_content.layout.addItems {
#	10 = Container
#	#11 = Container News
#	#12 = News Hintergrund grau
#}

# Frames in Content Elements
#TCEFORM.tt_content.section_frame.addItems {
#     100 = Hintergrund grau
#     110 = Hintergrund schwarz
#     120 = Hintergrund schwarz hell
#}

##Globale Klassen aktivieren
RTE.default.buttons.textstyle.showTagFreeClasses = 1

#RTE.default.contentCSS = fileadmin/templates/css/rte.css
#RTE.default.proc.allowedClasses := addToList(reweButton,text-color-rewe)
#RTE.default.buttons.textstyle.tags.span.allowedClasses := addToList(reweButton,text-color-rewe)

#RTE.classes.reweButton {
#	name = REWE Button
#	value = background-color:#cc071e;color:white;padding:5px;
#}

#RTE.classes.text-color-rewe {
#	name = REWE-Rot Schrift
#	value = color:#cc071e;
#}

# New News
#TCEFORM.tx_news_domain_model_news.type {
#	addItems.4 = Markt
#	addItems.5 = Gewinnspiel
#	addItems.6 = Stellenangebot
#}
#TCEFORM.tx_news_domain_model_news.type.removeItems = 1,2
#
#tx_news.templateLayouts {
#	1 = ohne Vorschubild
#}