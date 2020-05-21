var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LanelateIndicedeHumedad_1 = new ol.format.GeoJSON();
var features_LanelateIndicedeHumedad_1 = format_LanelateIndicedeHumedad_1.readFeatures(json_LanelateIndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LanelateIndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LanelateIndicedeHumedad_1.addFeatures(features_LanelateIndicedeHumedad_1);
var lyr_LanelateIndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LanelateIndicedeHumedad_1, 
                style: style_LanelateIndicedeHumedad_1,
                interactive: false,
    title: 'Lanelate - Indice de Humedad<br />\
    <img src="styles/legend/LanelateIndicedeHumedad_1_0.png" /> -0,06 - 0,01<br />\
    <img src="styles/legend/LanelateIndicedeHumedad_1_1.png" /> 0,01 - 0,09<br />\
    <img src="styles/legend/LanelateIndicedeHumedad_1_2.png" /> 0,09 - 0,16<br />\
    <img src="styles/legend/LanelateIndicedeHumedad_1_3.png" /> 0,16 - 0,23<br />\
    <img src="styles/legend/LanelateIndicedeHumedad_1_4.png" /> 0,23 - 0,30<br />'
        });
var format_NavelinaIndicedeHumedad_2 = new ol.format.GeoJSON();
var features_NavelinaIndicedeHumedad_2 = format_NavelinaIndicedeHumedad_2.readFeatures(json_NavelinaIndicedeHumedad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavelinaIndicedeHumedad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavelinaIndicedeHumedad_2.addFeatures(features_NavelinaIndicedeHumedad_2);
var lyr_NavelinaIndicedeHumedad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NavelinaIndicedeHumedad_2, 
                style: style_NavelinaIndicedeHumedad_2,
                interactive: false,
    title: 'Navelina - Indice de Humedad<br />\
    <img src="styles/legend/NavelinaIndicedeHumedad_2_0.png" /> -0,09 - -0,03<br />\
    <img src="styles/legend/NavelinaIndicedeHumedad_2_1.png" /> -0,03 - 0,03<br />\
    <img src="styles/legend/NavelinaIndicedeHumedad_2_2.png" /> 0,03 - 0,09<br />\
    <img src="styles/legend/NavelinaIndicedeHumedad_2_3.png" /> 0,09 - 0,15<br />\
    <img src="styles/legend/NavelinaIndicedeHumedad_2_4.png" /> 0,15 - 0,21<br />'
        });
var format_ValencianaIndicedeHumedad_3 = new ol.format.GeoJSON();
var features_ValencianaIndicedeHumedad_3 = format_ValencianaIndicedeHumedad_3.readFeatures(json_ValencianaIndicedeHumedad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ValencianaIndicedeHumedad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ValencianaIndicedeHumedad_3.addFeatures(features_ValencianaIndicedeHumedad_3);
var lyr_ValencianaIndicedeHumedad_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ValencianaIndicedeHumedad_3, 
                style: style_ValencianaIndicedeHumedad_3,
                interactive: true,
    title: 'Valenciana - Indice de Humedad<br />\
    <img src="styles/legend/ValencianaIndicedeHumedad_3_0.png" /> -0,08 - -0,03<br />\
    <img src="styles/legend/ValencianaIndicedeHumedad_3_1.png" /> -0,03 - 0,03<br />\
    <img src="styles/legend/ValencianaIndicedeHumedad_3_2.png" /> 0,03 - 0,09<br />\
    <img src="styles/legend/ValencianaIndicedeHumedad_3_3.png" /> 0,09 - 0,14<br />\
    <img src="styles/legend/ValencianaIndicedeHumedad_3_4.png" /> 0,14 - 0,20<br />'
        });
var format_LanelateIndicedeVegetacion_4 = new ol.format.GeoJSON();
var features_LanelateIndicedeVegetacion_4 = format_LanelateIndicedeVegetacion_4.readFeatures(json_LanelateIndicedeVegetacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LanelateIndicedeVegetacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LanelateIndicedeVegetacion_4.addFeatures(features_LanelateIndicedeVegetacion_4);
var lyr_LanelateIndicedeVegetacion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LanelateIndicedeVegetacion_4, 
                style: style_LanelateIndicedeVegetacion_4,
                interactive: false,
    title: 'Lanelate - Indice de Vegetacion<br />\
    <img src="styles/legend/LanelateIndicedeVegetacion_4_0.png" /> 0,32 - 0,42<br />\
    <img src="styles/legend/LanelateIndicedeVegetacion_4_1.png" /> 0,42 - 0,53<br />\
    <img src="styles/legend/LanelateIndicedeVegetacion_4_2.png" /> 0,53 - 0,63<br />\
    <img src="styles/legend/LanelateIndicedeVegetacion_4_3.png" /> 0,63 - 0,73<br />\
    <img src="styles/legend/LanelateIndicedeVegetacion_4_4.png" /> 0,73 - 0,83<br />'
        });
var format_NavelinaIndicedeVegetacion_5 = new ol.format.GeoJSON();
var features_NavelinaIndicedeVegetacion_5 = format_NavelinaIndicedeVegetacion_5.readFeatures(json_NavelinaIndicedeVegetacion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavelinaIndicedeVegetacion_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavelinaIndicedeVegetacion_5.addFeatures(features_NavelinaIndicedeVegetacion_5);
var lyr_NavelinaIndicedeVegetacion_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NavelinaIndicedeVegetacion_5, 
                style: style_NavelinaIndicedeVegetacion_5,
                interactive: false,
    title: 'Navelina - Indice de Vegetacion <br />\
    <img src="styles/legend/NavelinaIndicedeVegetacion_5_0.png" /> 0,30 - 0,40<br />\
    <img src="styles/legend/NavelinaIndicedeVegetacion_5_1.png" /> 0,40 - 0,50<br />\
    <img src="styles/legend/NavelinaIndicedeVegetacion_5_2.png" /> 0,50 - 0,59<br />\
    <img src="styles/legend/NavelinaIndicedeVegetacion_5_3.png" /> 0,59 - 0,69<br />\
    <img src="styles/legend/NavelinaIndicedeVegetacion_5_4.png" /> 0,69 - 0,79<br />'
        });
var format_ValencianaIndicedeVegetacion_6 = new ol.format.GeoJSON();
var features_ValencianaIndicedeVegetacion_6 = format_ValencianaIndicedeVegetacion_6.readFeatures(json_ValencianaIndicedeVegetacion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ValencianaIndicedeVegetacion_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ValencianaIndicedeVegetacion_6.addFeatures(features_ValencianaIndicedeVegetacion_6);
var lyr_ValencianaIndicedeVegetacion_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ValencianaIndicedeVegetacion_6, 
                style: style_ValencianaIndicedeVegetacion_6,
                interactive: false,
    title: 'Valenciana - Indice de Vegetacion <br />\
    <img src="styles/legend/ValencianaIndicedeVegetacion_6_0.png" /> 0,42 - 0,49<br />\
    <img src="styles/legend/ValencianaIndicedeVegetacion_6_1.png" /> 0,49 - 0,56<br />\
    <img src="styles/legend/ValencianaIndicedeVegetacion_6_2.png" /> 0,56 - 0,63<br />\
    <img src="styles/legend/ValencianaIndicedeVegetacion_6_3.png" /> 0,63 - 0,71<br />\
    <img src="styles/legend/ValencianaIndicedeVegetacion_6_4.png" /> 0,71 - 0,78<br />'
        });
var format_SectoresdeRiego_7 = new ol.format.GeoJSON();
var features_SectoresdeRiego_7 = format_SectoresdeRiego_7.readFeatures(json_SectoresdeRiego_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectoresdeRiego_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectoresdeRiego_7.addFeatures(features_SectoresdeRiego_7);
var lyr_SectoresdeRiego_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SectoresdeRiego_7, 
                style: style_SectoresdeRiego_7,
                interactive: false,
                title: '<img src="styles/legend/SectoresdeRiego_7.png" /> Sectores de Riego'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_LanelateIndicedeHumedad_1.setVisible(true);lyr_NavelinaIndicedeHumedad_2.setVisible(true);lyr_ValencianaIndicedeHumedad_3.setVisible(true);lyr_LanelateIndicedeVegetacion_4.setVisible(true);lyr_NavelinaIndicedeVegetacion_5.setVisible(true);lyr_ValencianaIndicedeVegetacion_6.setVisible(true);lyr_SectoresdeRiego_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_LanelateIndicedeHumedad_1,lyr_NavelinaIndicedeHumedad_2,lyr_ValencianaIndicedeHumedad_3,lyr_LanelateIndicedeVegetacion_4,lyr_NavelinaIndicedeVegetacion_5,lyr_ValencianaIndicedeVegetacion_6,lyr_SectoresdeRiego_7];
lyr_LanelateIndicedeHumedad_1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'NDMI': 'NDMI', });
lyr_NavelinaIndicedeHumedad_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'NDMI': 'NDMI', });
lyr_ValencianaIndicedeHumedad_3.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'NDMI': 'NDMI', });
lyr_LanelateIndicedeVegetacion_4.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'NDVI': 'NDVI', });
lyr_NavelinaIndicedeVegetacion_5.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'NDVI': 'NDVI', });
lyr_ValencianaIndicedeVegetacion_6.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'NDVI': 'NDVI', });
lyr_SectoresdeRiego_7.set('fieldAliases', {'id': 'id', });
lyr_LanelateIndicedeHumedad_1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NDMI': 'TextEdit', });
lyr_NavelinaIndicedeHumedad_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NDMI': 'TextEdit', });
lyr_ValencianaIndicedeHumedad_3.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NDMI': 'TextEdit', });
lyr_LanelateIndicedeVegetacion_4.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NDVI': 'TextEdit', });
lyr_NavelinaIndicedeVegetacion_5.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NDVI': 'TextEdit', });
lyr_ValencianaIndicedeVegetacion_6.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NDVI': 'TextEdit', });
lyr_SectoresdeRiego_7.set('fieldImages', {'id': 'TextEdit', });
lyr_LanelateIndicedeHumedad_1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'NDMI': 'no label', });
lyr_NavelinaIndicedeHumedad_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'NDMI': 'no label', });
lyr_ValencianaIndicedeHumedad_3.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'NDMI': 'no label', });
lyr_LanelateIndicedeVegetacion_4.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'NDVI': 'no label', });
lyr_NavelinaIndicedeVegetacion_5.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'NDVI': 'no label', });
lyr_ValencianaIndicedeVegetacion_6.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'NDVI': 'no label', });
lyr_SectoresdeRiego_7.set('fieldLabels', {'id': 'no label', });
lyr_SectoresdeRiego_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});