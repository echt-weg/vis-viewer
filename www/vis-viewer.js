    document.addEventListener("online", checkwlan, false);
    document.addEventListener("offline", offline, false);
    document.addEventListener("deviceready", checkwlan, true);
    document.addEventListener("resume", checkwlan, true);
    // Initalisierug
    var appversion = "2.2.0";
    var wlanmode = "undef";
    var offlinemode = "undef";
    var language;
    var theme;
    if (window.localStorage.getItem("language") != null) {
    	language = window.localStorage.getItem("language");
    } else {
    	language = "en";
    }
    if (window.localStorage.getItem("theme") != null) {
    	theme = window.localStorage.getItem("theme");
    } else {
    	theme = "blue";
    }
    if (theme == "green") {
    	var colorwarn = "#aa0000";
    	var colorbase = "#00b600";
    	document.getElementById('csstheme').href = "vis-viewer-green.css";
    }
    if (theme == "blue") {
    	var colorwarn = "#aa0000";
    	var colorbase = "#3399cc";
    	document.getElementById('csstheme').href = "vis-viewer-blue.css";
    }
    if (theme == "grey") {
    	var colorwarn = "#aa0000";
    	var colorbase = "#909090";
    	document.getElementById('csstheme').href = "vis-viewer-grey.css";
    }
    if (theme == "pink") {
    	var colorwarn = "#aa0000";
    	var colorbase = "#FF27F2";
    	document.getElementById('csstheme').href = "vis-viewer-pink.css";
    }
    if (theme == "black") {
    	var colorwarn = "#aa0000";
    	var colorbase = "#1a1a1a";
    	document.getElementById('csstheme').href = "vis-viewer-black.css";
    }
    if (language == "de") {
    	var h11 = "HINWEISE";
    	var h12 = "INTERNER ZUGRIFF";
    	var h13 = "EXTERNER ZUGRIFF";
    	var h14 = "VIEW";
    	var h15 = "Einstellungen";
    	var h16 = "Fragen zur App";
    	var h17 = "Bei Fragen zur App wenden Sie sich bitte an";
    	var h18 = "Mail";
    	var h19 = "Datenschutzhinweise";
    	var h110 = "Die App speichert und verwendet die von Ihnen definierte Einstellungen lediglich für den Zugriff auf die definierte VIS-Installation. Eine Übertragung an Dritte findet nicht statt.";
    	var h111 = "Die <b>URL</b> ist die interne Adresse ihrer VIS-Installation.";
    	var h112 = "Beispiel";
    	var h113 = " Ihre <b>WLAN-SSID</b> ist Iht Netzwerkname und dient der Erkennung ob der Zugriff lokal erfolgen kann";
    	var h114 = " Die <b>URL</b> ist die externe (öffentliche) Adresse ihrer VIS-Installation.";
    	var h115 = " <b>Name</b> beschreibt die Schaltfläche,";
    	var h116 = "der <b>Link</b> zeigt direkt auf Ihre VIS-View (bspw. #DemoView)";
    	var h117 = "SPRACHE";
    	var h118 = "Sprache";
    	var h119 = "SICHERN & WIEDERHERSTELLEN";
    	var h120 = "Sichern";
    	var h121 = "Wiederherstellen";
    	var h122 = "Sichern per Mail";
    	var h130 = "START";
    	var h131 = "Öffnet beim Starten der App direkt eine View";
    	var h132 = "Quick-Start";
    	var h30 = "Sie können die Konfiguration der App über das Textfeld ausgeben lassen und danach neu einlesen.";
    	var h31 = "Hinweis";
    	var h32 = "Zurück";
    	var h33 = "Orientierung";
    	var h34 = "Hoch";
    	var h35 = "Quer";
    	var h36 = "An";
    	var h37 = "Aus";
    	var h38 = "Zoom-Gesten";
    	var h39 = "SCHEMA";
    	var h40 = "Schema";
    	var h41 = "Browser-Leiste";
    	var h42 = "Unten";
    	var h43 = "Oben";
    	var h44 = "Aus (Warnung)";
    	var j11 = "Sie befinden sich im Offline-Modus";
    	var j12 = "Willkommen zu Hause im WLAN-Netz ";
    	var j13a = "WLAN-Netz ";
    	var j13b = " (nicht zu Hause)";
    	var j14 = "Sie sind mit keinem WLAN verbunden.";
    	var j15 = "Die Verbindung erfolgt über das Mobilfunknetz";
    	var j16 = "Sie haben noch keine Daten für den Zugriff eingetragen. Bitte ergänzen Sie diese auf der Einstellungsseite per Klick auf das Zahnrad-Symbol";
    	var j17 = "Version ";
    }
    if (language == "en") {
    	var h11 = "INFO";
    	var h12 = "INTERNAL ACCESS";
    	var h13 = "EXTERNAL ACCESS";
    	var h14 = "VIEW";
    	var h15 = "Settings";
    	var h16 = "Contact Details";
    	var h17 = "Please feel free to contact me at";
    	var h18 = "Mail";
    	var h19 = "Privacy policy";
    	var h110 = "Saved settings will only be used to access the defined VIS-Installation.";
    	var h111 = "Please insert your internal URL of your VIS-Installation";
    	var h112 = "e.g.";
    	var h113 = " <b>WLAN-SSID</b> defines the local Wifi-SSID of your home";
    	var h114 = "Please enter the external (=public)  <b>URL</b>  of your VIS-Installation.";
    	var h115 = "<b>Name</b> defines the label of the generated button.";
    	var h116 = "<b>Link</b>: Please define your View (e.g. #DemoView)";
    	var h117 = "LANGUAGE";
    	var h118 = "Language";
    	var h119 = "BACKUP & RESTORE";
    	var h120 = "Backup";
    	var h121 = "Restore";
    	var h122 = "Backup2Mail";
    	var h130 = "START";
    	var h131 = "Launches a View when starting the app";
    	var h132 = "Quick-Start";
    	var h30 = "Click the buttons to Import or Export your configuration";
    	var h31 = "Info";
    	var h32 = "Back";
    	var h33 = "Orientation";
    	var h34 = "Portrait";
    	var h35 = "Landscape";
    	var h36 = "On";
    	var h37 = "Off";
    	var h38 = "Zoom Gestures";
    	var h39 = "THEME";
    	var h40 = "Theme";
    	var h41 = "Browser-Bar";
    	var h42 = "Bottom";
    	var h43 = "Top";
    	var h44 = "Off (Warning)";
    	var j11 = "You're currently offline";
    	var j12 = "Welcome home at ";
    	var j13a = "Current network ";
    	var j13b = " (not at Home)";
    	var j14 = "You're not connected to a wifi-network.";
    	var j15 = "The access will be provided by celluar";
    	var j16 = "Some inital Setup-Steps are needed. Please open Settings-Menu by clicking the Gearicon";
    	var j17 = "Version ";
    }
    if (language == "ru") {
    	var h11 = "ИНФОРМАЦИЯ";
    	var h12 = "ВНУТРЕННИЙ ДОСТУП";
    	var h13 = "ДОСТУП ИЗВНЕ";
    	var h14 = "СТРАНИЦА";
    	var h15 = "Настройки";
    	var h16 = "Параметры соединения";
    	var h17 = "Свяжитесь со мной";
    	var h18 = "Email";
    	var h19 = "Условия пользования";
    	var h110 = "Сохренённые настройки используются только для доступа к настроенной VIS";
    	var h111 = "Введите внутренний URL для VIS";
    	var h112 = "например";
    	var h113 = " <b>WLAN-SSID</b>  домашней сети";
    	var h114 = "Введите внешний/публичный <b>URL</b> для VIS";
    	var h115 = "<b>Name</b> созданной кнопки";
    	var h116 = "<b>Link</b>: Выберите страницу (напрмер DemoView)";
    	var h117 = "ЯЗЫК";
    	var h118 = "язык";
    	var h119 = "ВОССТАНОВЛЕНИЯ РЕЗЕРВНОЙ КОПИИ";
    	var h120 = "Резервное";
    	var h121 = "Восстановить";
    	var h122 = "Резервное2почта";
    	var h130 = "НАЧАЛО";
    	var h131 = "Запускает View при запуске приложения";
    	var h132 = "Быстрый старт";
    	var h30 = "Нажмите кнопки для импорта или экспорта конфигурации";
    	var h31 = "ИНФОРМАЦИЯ";
    	var h32 = "назад";
    	var h33 = "ориентирование";
    	var h34 = "портрет";
    	var h35 = "пейзаж";
    	var h36 = "на";
    	var h37 = "от";
    	var h38 = "Увеличить жесты";
    	var h39 = "ТЕМЫ";
    	var h40 = "тема";
    	var h41 = "Браузер бар";
    	var h42 = "ниже";
    	var h43 = "выше";
    	var h44 = "от (внимание)";
    	var j11 = "Нет соединения";
    	var j12 = "Добро пожаловать в ";
    	var j13a = "Текущее соединение ";
    	var j13b = " (не дома)";
    	var j14 = "Нет подключения к WIFI сети";
    	var j15 = "Доступ через мобильное соединение";
    	var j16 = "Нужны настройки соедиения. Их можно найти нажав на шестерёнку";
    	var j17 = "Версия ";
    }

    function sendmail(config) {
    	cordova.plugins.email.open({
    		subject: 'VIS-Viewer ' + h15 + ' ' + h122,
    		body: '<b>Configuration of VIS-Viewer:</b><br><br><i> ' + config + '</i>',
    		isHtml: true,
    		attachments: 'base64:visconfig.vis//' + btoa(config)
    	});
    }

    function backupandrestore(mode) {
    	if (mode == "backup") {
    		var configexport = '{';
    		for (var a in localStorage) {
    			if (localStorage.hasOwnProperty(a)) {
    				configexport = configexport + '\"' + a + '\":\"' + localStorage[a] + '\",';
    			}
    		}
    		configexport = configexport + '\"appversion-export\":\"' + appversion + '\"}';
    		document.getElementById('config').value = configexport;
    	}
    	if (mode == "backupandmail") {
    		var configexport = '{';
    		for (var a in localStorage) {
    			if (localStorage.hasOwnProperty(a)) {
    				configexport = configexport + '\"' + a + '\":\"' + localStorage[a] + '\",';
    			}
    		}
    		configexport = configexport + '\"appversion-export\":\"' + appversion + '\"}';
    		document.getElementById('config').value = configexport;
    		sendmail(document.getElementById('config').value);
    	}
    	if (mode == "restore") {
    		var importconfig = JSON.parse(document.getElementById('config').value);
    		for (var a in importconfig) {
    			if (a != "appversion-export") {
    				window.localStorage.setItem(a, importconfig[a]);
    			}
    		}
    		location.href = 'index.html';
    	}
    }

    function displayviewcontainer(containerid) {
    	var containernameselected = "containerview" + containerid;
    	var viewbuttonselected = "viewbutton" + containerid;
    	// Setzen aller Views auf deaktiviert  
    	for (var i = 1; i <= 10; i++) {
    		document.getElementById('containerview' + i).className = "containerview";
    		document.getElementById('viewbutton' + i).className = "viewbutton";
    	}
    	//Aktieren was nötig ist
    	document.getElementById(containernameselected).className = "containerviewon";
    	document.getElementById(viewbuttonselected).className = "viewbuttonon";
    }

    function empty() {}

    function offline() {
    	document.getElementById('mainpage2').innerHTML = "<font color=\"" + colorwarn + "\"><center><br>" + j11 + "</center></font>";
    	offlinemode = "offline";
    }

    function ssidHandler(text) {
    	var wlanarray = document.getElementById('ssid').value.split(",");
    	wlanmode = text;
    	if (wlanarray.indexOf(wlanmode) > -1) {
    		document.getElementById('mainpage2').innerHTML = "<font><center><br>" + j12 + wlanmode + "</center></font>";
    	} else {
    		document.getElementById('mainpage2').innerHTML = "<font><center><br>" + j13a + wlanmode + j13b + "</center></font>";
    	}
    	offlinemode = "online";
    }

    function fail(text) {
    	wlanmode = "none";
    	offlinemode = "online";
    	document.getElementById('mainpage2').innerHTML = "<font><center><br>" + j14 + "<br>" + j15 + "</center></font>";
    }

    function checkwlan() {
    	StatusBar.backgroundColorByHexString(colorbase);
    	WifiWizard.getCurrentSSID(ssidHandler, fail);
    }

    function linkopen(id) {
    	checkwlan();
    	if (offlinemode != "offline") {
    		var linkname = "link" + id;
    		var view = "";
    		var orientationname = "orientation" + id;
    		var doubletapzoomname = "doubletapzoom" + id;
    		var toolbarname = "toolbar" + id;
    		var viewportscaleoption = "";
    		var toolbaroption = "";
    		var url = "";
    		if (wlanmode == document.getElementById('ssid').value) {
    			url = document.getElementById('urli').value;
    		} else {
    			url = document.getElementById('urle').value;
    		}
    		if (url.substring(url.length - 1, url.length) != "/") {
    			url = url + "/";
    		}
    		view = document.getElementById(linkname).value;
    		if (view.substring(1, 0) == "/") {
    			view = view.substring(1, view.length);
    		}
    		if ((document.getElementById(orientationname).options[document.getElementById(orientationname).selectedIndex].value) == "p") {
    			// navigator.notification.alert("portrait",empty(),'Hinweis');
    			//    screen.lockOrientation('portrait');
    		}
    		if ((document.getElementById(orientationname).options[document.getElementById(orientationname).selectedIndex].value) == "l") {
    			// navigator.notification.alert("landscape",empty(),'Hinweis');
    			//    screen.lockOrientation('landscape');
    		}
    		if ((document.getElementById(orientationname).options[document.getElementById(orientationname).selectedIndex].value) == "a") {
    			// navigator.notification.alert("auto",empty(),'Hinweis');
    		}
    		if ((document.getElementById(doubletapzoomname).options[document.getElementById(doubletapzoomname).selectedIndex].value) == "On") {
    			viewportscaleoption = "EnableViewPortScale=yes";
    		} else {
    			viewportscaleoption = "EnableViewPortScale=false";
    		}
    		if ((document.getElementById(toolbarname).options[document.getElementById(toolbarname).selectedIndex].value) == "Off") {
    			toolbaroption = "toolbar=no,";
    		}
    		if ((document.getElementById(toolbarname).options[document.getElementById(toolbarname).selectedIndex].value) == "Top") {
    			toolbaroption = "toolbarposition=top,";
    		}
    		cordova.InAppBrowser.open(encodeURI(url + view), '_blank', 'closebuttoncaption=' + h32 + ',location=no,' + toolbaroption + viewportscaleoption);
    	} else {
    		navigator.notification.alert(j11, empty(), 'Hinweis');
    	}
    }
    // Funktion zum Aufruf einer View im Autostart
    function autostart() {
    	if ((window.localStorage.getItem("quickstart") != "Off") && (window.localStorage.getItem("quickstart") != "")) {
    		linkopen(window.localStorage.getItem("quickstart"));
    	}
    }
    // Buttons anlegen
    function generatebuttons() {
    	document.getElementById('mainpage3').innerHTML = "<br><center><a class=\"button\" onclick=\"linkopen(1);\"  style=\"width:80%;height:3%;background:" + colorbase + ";color:white;\">" + document.getElementById('name1').value + "</a><br></center>";
    	document.getElementById('viewnamecontainer1').innerHTML = "<b>" + h14 + " " + '1' + " (" + document.getElementById('name1').value + ")</b>";
    	// Resetten der Optionen für Quickstart und neu ergänzen von erstem Eintrag
    	var select = document.getElementById("quickstart");
    	select.options.length = 0;
    	select.options[select.options.length] = new Option(h37, "Off");
    	select.options[select.options.length] = new Option(h14 + " " + "1" + " " + document.getElementById('name1').value, 1);
    	if (document.getElementById('name1').value == "") {
    		document.getElementById('viewnamecontainer1').innerHTML = "<b>" + h14 + " " + "1" + "</b>";
    		// Resetten der Optionen für Quickstart ohne Ergänzung des ersten Eintrags
    		var select = document.getElementById("quickstart");
    		select.options.length = 0;
    		select.options[select.options.length] = new Option(h37, "Off");
    	}
    	for (var i = 2; i <= 10; i++) {
    		if (document.getElementById('name' + i).value != "") {
    			document.getElementById('mainpage3').innerHTML += "<center><a class=\"button\" onclick=\"linkopen(" + i + ");\" style=\"width:80%;height:3%;background:" + colorbase + ";color:white;\">" + document.getElementById('name' + i).value + "</a><br></center>";
    			// Setzen von Namen für View
    			document.getElementById('viewnamecontainer' + i).innerHTML = "<b>" + h14 + " " + i + " (" + document.getElementById('name' + i).value + ")</b>";
    			// Setzen der Auswahl im Quickstart
    			var select = document.getElementById("quickstart");
    			select.options[select.options.length] = new Option(h14 + " " + i + " " + document.getElementById('name' + i).value, i);
    		} else {
    			document.getElementById('viewnamecontainer' + i).innerHTML = "<b>" + h14 + " " + i + "</b>";
    		}
    	}
    	// Setzen des aktiven Autostartbuttons
    	document.getElementById('quickstart').value = window.localStorage.getItem("quickstart");
    }
    // Daten auslesen und eintragen 
    function getdata(field) {
    	if (window.localStorage.getItem(field) != null) {
    		if ((field == "zoom1") || (field == "zoom2") || (field == "zoom3") || (field == "zoom4") || (field == "zoom5")) {
    			document.getElementById(field + "o").value = window.localStorage.getItem(field);
    		}
    		//Prüfen ob es allgemein um Option-Selects get
    		if ((field == "orientation1") || (field == "orientation2") || (field == "orientation3") || (field == "orientation4") || (field == "orientation5") || (field == "orientation6") || (field == "orientation7") || (field == "orientation8") || (field == "orientation9") || (field == "orientation10") || (field == "doubletapzoom1") || (field == "doubletapzoom2") || (field == "doubletapzoom3") || (field == "doubletapzoom4") || (field == "doubletapzoom5") || (field == "doubletapzoom6") || (field == "doubletapzoom7") || (field == "doubletapzoom8") || (field == "doubletapzoom9") || (field == "doubletapzoom10") || (field == "toolbar1") || (field == "toolbar2") || (field == "toolbar3") || (field == "toolbar4") || (field == "toolbar5") || (field == "toolbar6") || (field == "toolbar7") || (field == "toolbar8") || (field == "toolbar9") || (field == "toolbar10") || (field == "theme") || (field == "language")) {
    			// Geht um die Orientierung
    			if ((field == "orientation1") || (field == "orientation2") || (field == "orientation3") || (field == "orientation4") || (field == "orientation5") || (field == "orientation6") || (field == "orientation7") || (field == "orientation8") || (field == "orientation9") || (field == "orientation10")) {
    				if (window.localStorage.getItem(field) == "l") {
    					document.getElementById(field + "l").selected = "true";
    				}
    				if (window.localStorage.getItem(field) == "p") {
    					document.getElementById(field + "p").selected = "true";
    				}
    			}
    			// Geht um die Doppeltapzoom
    			if ((field == "doubletapzoom1") || (field == "doubletapzoom2") || (field == "doubletapzoom3") || (field == "doubletapzoom4") || (field == "doubletapzoom5") || (field == "doubletapzoom6") || (field == "doubletapzoom7") || (field == "doubletapzoom8") || (field == "doubletapzoom9") || (field == "doubletapzoom10")) {
    				if (window.localStorage.getItem(field) == "On") {
    					document.getElementById(field + "on").selected = "true";
    				}
    				if (window.localStorage.getItem(field) == "Off") {
    					document.getElementById(field + "off").selected = "true";
    				}
    			}
    			// Geht um die Toolbar
    			if ((field == "toolbar1") || (field == "toolbar2") || (field == "toolbar3") || (field == "toolbar4") || (field == "toolbar5") || (field == "toolbar6") || (field == "toolbar7") || (field == "toolbar8") || (field == "toolbar9") || (field == "toolbar10")) {
    				if (window.localStorage.getItem(field) == "Top") {
    					document.getElementById(field + "top").selected = "true";
    				}
    				if (window.localStorage.getItem(field) == "Bottom") {
    					document.getElementById(field + "bottom").selected = "true";
    				}
    				if (window.localStorage.getItem(field) == "Off") {
    					document.getElementById(field + "off").selected = "true";
    				}
    			}
    			// Geht um die Sprache 
    			if (field == "language") {
    				document.getElementById("lang" + window.localStorage.getItem(field)).selected = "true";
    			}
    			// Geht um das Theme 
    			if (field == "theme") {
    				document.getElementById("theme" + window.localStorage.getItem(field)).selected = "true";
    			}
    		} else {
    			document.getElementById(field).value = window.localStorage.getItem(field);
    		}
    	} else {
    		if ((field == "ssid") && (wlanmode != "none") && (wlanmode != "undef")) {
    			window.localStorage.setItem(field, wlanmode);
    			document.getElementById(field).value = wlanmode;
    		}
    	}
    }

    function savedata(field) {
    	if ((field == "orientation1") || (field == "orientation2") || (field == "orientation3") || (field == "orientation4") || (field == "orientation5") || (field == "orientation6") || (field == "orientation7") || (field == "orientation8") || (field == "orientation9") || (field == "orientation10")) {
    		window.localStorage.setItem(field, document.getElementById(field).options[document.getElementById(field).selectedIndex].value);
    	} else {
    		if ((field == "doubletapzoom1") || (field == "doubletapzoom2") || (field == "doubletapzoom3") || (field == "doubletapzoom4") || (field == "doubletapzoom5") || (field == "doubletapzoom6") || (field == "doubletapzoom7") || (field == "doubletapzoom8") || (field == "doubletapzoom9") || (field == "doubletapzoom10")) {
    			window.localStorage.setItem(field, document.getElementById(field).options[document.getElementById(field).selectedIndex].value);
    		} else {
    			if ((field == "toolbar1") || (field == "toolbar2") || (field == "toolbar3") || (field == "toolbar4") || (field == "toolbar5") || (field == "toolbar6") || (field == "toolbar7") || (field == "toolbar8") || (field == "toolbar9") || (field == "toolbar10")) {
    				window.localStorage.setItem(field, document.getElementById(field).options[document.getElementById(field).selectedIndex].value);
    			} else {
    				if (field == "language") {
    					window.localStorage.setItem("language", document.getElementById('language').options[document.getElementById('language').selectedIndex].value);
    					location.href = 'index.html';
    				}
    				if (field == "quickstart") {
    					window.localStorage.setItem("quickstart", document.getElementById('quickstart').options[document.getElementById('quickstart').selectedIndex].value);
    				}
    				if (field == "theme") {
    					window.localStorage.setItem("theme", document.getElementById('theme').options[document.getElementById('theme').selectedIndex].value);
    					location.href = 'index.html';
    				} else {
    					// Schleife zum Schreiben der eingestellten Werte
    					if ((field == "zoom1") || (field == "zoom2") || (field == "zoom3") || (field == "zoom4") || (field == "zoom5") || (field == "zoom6") || (field == "zoom7") || (field == "zoom8") || (field == "zoom9") || (field == "zoom10")) {
    						document.getElementById(field + "o").value = document.getElementById(field).value;
    					}
    					window.localStorage.setItem(field, document.getElementById(field).value);
    					generatebuttons();
    					checkwlan();
    				}
    			}
    		}
    	}
    }

    function starten() {
    	StatusBar.overlaysWebView(false);
    	//StatusBar.overlaysWebView(true);
    	StatusBar.backgroundColorByHexString("black");
    	getdata("language");
    	getdata("theme");
    	getdata("ssid");
    	checkwlan();
    	getdata("urli");
    	getdata("urle");
    	for (var i = 1; i <= 10; i++) {
    		getdata("link" + i);
    		getdata("name" + i);
    		getdata("orientation " + i);
    		getdata("doubletapzoom" + i);
    		getdata("toolbar" + i);
    		getdata("zoom" + i);
    	}
    	if (window.localStorage.getItem("urli") == null) {
    		navigator.notification.alert(j16, empty(), h31);
    	} else {
    		generatebuttons();
    		document.getElementById('backpage').title = h15;
    	}
    	document.getElementById('mainpage1').innerHTML = "<br><br><font color=\"" + colorbase + "\"><center>" + j17 + appversion + "<br></font><img src=\"images/vis-" + theme + ".png\" style=\"max-width:55%;max-height:55%;height:auto;width:auto;\"></center>";
    	document.getElementById('backpage').title = h15;
    	autostart();
    }