/*!
* DevExtreme (dx.messages.es.js)
<<<<<<< HEAD
* Version: 18.2.6
* Build date: Tue Feb 05 2019
=======
* Version: 18.2.8
* Build date: Tue Apr 23 2019
>>>>>>> master
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        es: {
            Yes: "S\xed",
            No: "No",
            Cancel: "Cancelar",
            Clear: "Limpiar",
            Done: "Hecho",
            Loading: "Cargando...",
            Select: "Seleccionar...",
            Search: "Buscar",
            Back: "Volver",
            OK: "Aceptar",
            "dxCollectionWidget-noDataText": "Sin datos para mostrar",
            "validation-required": "Obligatorio",
            "validation-required-formatted": "{0} es obligatorio",
            "validation-numeric": "Valor debe ser un n\xfamero",
            "validation-numeric-formatted": "{0} debe ser un n\xfamero",
            "validation-range": "Valor fuera de rango",
            "validation-range-formatted": "{0} fuera de rango",
            "validation-stringLength": "El tama\xf1o del valor es incorrecto",
            "validation-stringLength-formatted": "El tama\xf1o de {0} es incorrecto",
            "validation-custom": "Valor inv\xe1lido",
            "validation-custom-formatted": "{0} inv\xe1lido",
            "validation-compare": "Valores no coinciden",
            "validation-compare-formatted": "{0} no coinciden",
            "validation-pattern": "Valor no coincide con el patr\xf3n",
            "validation-pattern-formatted": "{0} no coincide con el patr\xf3n",
            "validation-email": "Email inv\xe1lido",
            "validation-email-formatted": "{0} inv\xe1lido",
            "validation-mask": "Valor inv\xe1lido",
            "dxLookup-searchPlaceholder": "Cantidad m\xednima de caracteres: {0}",
            "dxList-pullingDownText": "Desliza hacia abajo para actualizar...",
            "dxList-pulledDownText": "Suelta para actualizar...",
            "dxList-refreshingText": "Actualizando...",
            "dxList-pageLoadingText": "Cargando...",
            "dxList-nextButtonText": "M\xe1s",
            "dxList-selectAll": "Seleccionar Todo",
            "dxListEditDecorator-delete": "Eliminar",
            "dxListEditDecorator-more": "M\xe1s",
            "dxScrollView-pullingDownText": "Desliza hacia abajo para actualizar...",
            "dxScrollView-pulledDownText": "Suelta para actualizar...",
            "dxScrollView-refreshingText": "Actualizando...",
            "dxScrollView-reachBottomText": "Cargando...",
            "dxDateBox-simulatedDataPickerTitleTime": "Seleccione hora",
            "dxDateBox-simulatedDataPickerTitleDate": "Seleccione fecha",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Seleccione fecha y hora",
            "dxDateBox-validation-datetime": "Valor debe ser una fecha u hora",
            "dxFileUploader-selectFile": "Seleccionar archivo",
            "dxFileUploader-dropFile": "o arrastre un archivo aqu\xed",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Subir",
            "dxFileUploader-uploaded": "Subido",
            "dxFileUploader-readyToUpload": "Listo para subir",
            "dxFileUploader-uploadFailedMessage": "Falla ao subir",
            "dxFileUploader-invalidFileExtension": "Tipo de archivo no est\xe1 permitido",
            "dxFileUploader-invalidMaxFileSize": "Archivo es muy grande",
            "dxFileUploader-invalidMinFileSize": "Archivo es muy peque\xf1o",
            "dxRangeSlider-ariaFrom": "Desde",
            "dxRangeSlider-ariaTill": "Hasta",
            "dxSwitch-switchedOnText": "ENCENDIDO",
            "dxSwitch-switchedOffText": "APAGADO",
            "dxForm-optionalMark": "opcional",
            "dxForm-requiredMessage": "{0} es obligatorio",
            "dxNumberBox-invalidValueMessage": "Valor debe ser un n\xfamero",
            "dxDataGrid-columnChooserTitle": "Selector de Columnas",
            "dxDataGrid-columnChooserEmptyText": "Arrastra una columna aqu\xed para ocultarla",
            "dxDataGrid-groupContinuesMessage": "Contin\xfaa en la p\xe1gina siguiente",
            "dxDataGrid-groupContinuedMessage": "Continuaci\xf3n de la p\xe1gina anterior",
            "dxDataGrid-groupHeaderText": "Agrupar por esta columna",
            "dxDataGrid-ungroupHeaderText": "Desagrupar",
            "dxDataGrid-ungroupAllText": "Desagrupar Todo",
            "dxDataGrid-editingEditRow": "Modificar",
            "dxDataGrid-editingSaveRowChanges": "Guardar",
            "dxDataGrid-editingCancelRowChanges": "Cancelar",
            "dxDataGrid-editingDeleteRow": "Eliminar",
            "dxDataGrid-editingUndeleteRow": "Recuperar",
            "dxDataGrid-editingConfirmDeleteMessage": "\xbfEst\xe1 seguro que desea eliminar este registro?",
            "dxDataGrid-validationCancelChanges": "Cancelar cambios",
            "dxDataGrid-groupPanelEmptyText": "Arrastra una columna aqu\xed para agrupar por ella",
            "dxDataGrid-noDataText": "Sin datos",
            "dxDataGrid-searchPanelPlaceholder": "Buscar...",
            "dxDataGrid-filterRowShowAllText": "(Todos)",
            "dxDataGrid-filterRowResetOperationText": "Reestablecer",
            "dxDataGrid-filterRowOperationEquals": "Igual",
            "dxDataGrid-filterRowOperationNotEquals": "No es igual",
            "dxDataGrid-filterRowOperationLess": "Menor que",
            "dxDataGrid-filterRowOperationLessOrEquals": "Menor o igual a",
            "dxDataGrid-filterRowOperationGreater": "Mayor que",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Mayor o igual a",
            "dxDataGrid-filterRowOperationStartsWith": "Empieza con",
            "dxDataGrid-filterRowOperationContains": "Contiene",
            "dxDataGrid-filterRowOperationNotContains": "No contiene",
            "dxDataGrid-filterRowOperationEndsWith": "Termina con",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "Inicio",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fin",
            "dxDataGrid-applyFilterText": "Filtrar",
            "dxDataGrid-trueText": "verdadero",
            "dxDataGrid-falseText": "falso",
            "dxDataGrid-sortingAscendingText": "Orden Ascendente",
            "dxDataGrid-sortingDescendingText": "Orden Descendente",
            "dxDataGrid-sortingClearText": "Limpiar Ordenamiento",
            "dxDataGrid-editingSaveAllChanges": "Guardar cambios",
            "dxDataGrid-editingCancelAllChanges": "Descartar cambios",
            "dxDataGrid-editingAddRow": "Agregar una fila",
            "dxDataGrid-summaryMin": "M\xedn: {0}",
            "dxDataGrid-summaryMinOtherColumn": "M\xedn de {1} es {0}",
            "dxDataGrid-summaryMax": "M\xe1x: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "M\xe1x de {1} es {0}",
            "dxDataGrid-summaryAvg": "Prom: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Prom de {1} es {0}",
            "dxDataGrid-summarySum": "Suma: {0}",
            "dxDataGrid-summarySumOtherColumn": "Suma de {1} es {0}",
            "dxDataGrid-summaryCount": "Cantidad: {0}",
            "dxDataGrid-columnFixingFix": "Anclar",
            "dxDataGrid-columnFixingUnfix": "Desanclar",
            "dxDataGrid-columnFixingLeftPosition": "A la izquierda",
            "dxDataGrid-columnFixingRightPosition": "A la derecha",
            "dxDataGrid-exportTo": "Exportar",
            "dxDataGrid-exportToExcel": "Exportar a archivo Excel",
            "dxDataGrid-excelFormat": "Archivo Excel",
            "dxDataGrid-selectedRows": "Filas seleccionadas",
            "dxDataGrid-exportSelectedRows": "Exportar filas seleccionadas",
            "dxDataGrid-exportAll": "Exportar todo",
            "dxDataGrid-headerFilterEmptyValue": "(Vacio)",
            "dxDataGrid-headerFilterOK": "Aceptar",
            "dxDataGrid-headerFilterCancel": "Cancelar",
            "dxDataGrid-ariaColumn": "Columna",
            "dxDataGrid-ariaValue": "Valor",
            "dxDataGrid-ariaFilterCell": "Celda de filtro",
            "dxDataGrid-ariaCollapse": "Colapsar",
            "dxDataGrid-ariaExpand": "Expandir",
            "dxDataGrid-ariaDataGrid": "Tabla de datos",
            "dxDataGrid-ariaSearchInGrid": "Buscar en la tabla de datos",
            "dxDataGrid-ariaSelectAll": "Seleccionar todo",
            "dxDataGrid-ariaSelectRow": "Seleccionar fila",
            "dxDataGrid-filterBuilderPopupTitle": "Constructor de filtro",
            "dxDataGrid-filterPanelCreateFilter": "Crear filtro",
            "dxDataGrid-filterPanelClearFilter": "Limpiar filtro",
            "dxDataGrid-filterPanelFilterEnabledHint": "Habilitar filtro",
            "dxTreeList-ariaTreeList": "Lista de \xe1rbol",
            "dxTreeList-editingAddRowToNode": "A\xf1adir",
            "dxPager-infoText": "P\xe1gina {0} de {1} ({2} \xedtems)",
            "dxPager-pagesCountText": "de",
            "dxPivotGrid-grandTotal": "Gran Total",
            "dxPivotGrid-total": "{0} Total",
            "dxPivotGrid-fieldChooserTitle": "Selector de Campos",
            "dxPivotGrid-showFieldChooser": "Mostrar Selector de Campos",
            "dxPivotGrid-expandAll": "Expandir Todo",
            "dxPivotGrid-collapseAll": "Colapsar Todo",
            "dxPivotGrid-sortColumnBySummary": 'Ordenar "{0}" por esta columna',
            "dxPivotGrid-sortRowBySummary": 'Ordenar "{0}" por esta fila',
            "dxPivotGrid-removeAllSorting": "Remover ordenamiento",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Campos de fila",
            "dxPivotGrid-columnFields": "Campos de columna",
            "dxPivotGrid-dataFields": "Campos de dato",
            "dxPivotGrid-filterFields": "Campos de filtro",
            "dxPivotGrid-allFields": "Todos los campos",
            "dxPivotGrid-columnFieldArea": "Arrastra campos de columna aqu\xed",
            "dxPivotGrid-dataFieldArea": "Arrastra campos de dato aqu\xed",
            "dxPivotGrid-rowFieldArea": "Arrastra campos de fila aqu\xed",
            "dxPivotGrid-filterFieldArea": "Arrastra campos de filtro aqu\xed",
            "dxScheduler-editorLabelTitle": "Asunto",
            "dxScheduler-editorLabelStartDate": "Fecha inicial",
            "dxScheduler-editorLabelEndDate": "Fecha final",
            "dxScheduler-editorLabelDescription": "Descripci\xf3n",
            "dxScheduler-editorLabelRecurrence": "Repetir",
            "dxScheduler-openAppointment": "Abrir cita",
            "dxScheduler-recurrenceNever": "Nunca",
            "dxScheduler-recurrenceDaily": "Diario",
            "dxScheduler-recurrenceWeekly": "Semanal",
            "dxScheduler-recurrenceMonthly": "Mensual",
            "dxScheduler-recurrenceYearly": "Anual",
            "dxScheduler-recurrenceEvery": "Cada",
            "dxScheduler-recurrenceEnd": "Terminar repetici\xf3n",
            "dxScheduler-recurrenceAfter": "Despu\xe9s",
            "dxScheduler-recurrenceOn": "En",
            "dxScheduler-recurrenceRepeatDaily": "d\xeda(s)",
            "dxScheduler-recurrenceRepeatWeekly": "semana(s)",
            "dxScheduler-recurrenceRepeatMonthly": "mes(es)",
            "dxScheduler-recurrenceRepeatYearly": "a\xf1o(s)",
            "dxScheduler-switcherDay": "D\xeda",
            "dxScheduler-switcherWeek": "Semana",
            "dxScheduler-switcherWorkWeek": "Semana Laboral",
            "dxScheduler-switcherMonth": "Mes",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "L\xednea de tiempo D\xeda",
            "dxScheduler-switcherTimelineWeek": "L\xednea de tiempo Semana",
            "dxScheduler-switcherTimelineWorkWeek": "L\xednea de tiempo Semana Laboral",
            "dxScheduler-switcherTimelineMonth": "L\xednea de tiempo Mes",
            "dxScheduler-recurrenceRepeatOnDate": "en la fecha",
            "dxScheduler-recurrenceRepeatCount": "ocurrencia(s)",
            "dxScheduler-allDay": "Todo el d\xeda",
            "dxScheduler-confirmRecurrenceEditMessage": "\xbfQuiere modificar solo esta cita o toda la serie?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\xbfQuiere eliminar solo esta cita o toda la serie?",
            "dxScheduler-confirmRecurrenceEditSeries": "Modificar serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Eliminar serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Modificar cita",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Eliminar cita",
            "dxScheduler-noTimezoneTitle": "Sin zona horaria",
            "dxScheduler-moreAppointments": "{0} m\xe1s",
            "dxCalendar-todayButtonText": "Hoy",
            "dxCalendar-ariaWidgetName": "Calendario",
            "dxColorView-ariaRed": "Rojo",
            "dxColorView-ariaGreen": "Verde",
            "dxColorView-ariaBlue": "Azul",
            "dxColorView-ariaAlpha": "Transparencia",
            "dxColorView-ariaHex": "C\xf3digo del color",
            "dxTagBox-selected": "{0} seleccionado",
            "dxTagBox-allSelected": "Todos seleccionados ({0})",
            "dxTagBox-moreSelected": "{0} m\xe1s",
            "vizExport-printingButtonText": "Imprimir",
            "vizExport-titleMenuText": "Exportar/Imprimir",
            "vizExport-exportButtonText": "Archivo {0}",
            "dxFilterBuilder-and": "E",
            "dxFilterBuilder-or": "O",
            "dxFilterBuilder-notAnd": "NO E",
            "dxFilterBuilder-notOr": "NO O",
            "dxFilterBuilder-addCondition": "A\xf1adir condici\xf3n",
            "dxFilterBuilder-addGroup": "A\xf1adir Grupo",
            "dxFilterBuilder-enterValueText": "<rellene con un valor>",
            "dxFilterBuilder-filterOperationEquals": "Igual",
            "dxFilterBuilder-filterOperationNotEquals": "Diferente",
            "dxFilterBuilder-filterOperationLess": "Menos que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Menor o igual que",
            "dxFilterBuilder-filterOperationGreater": "M\xe1s grande que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Mayor o igual que",
            "dxFilterBuilder-filterOperationStartsWith": "Comienza con",
            "dxFilterBuilder-filterOperationContains": "Contiene",
            "dxFilterBuilder-filterOperationNotContains": "No contiene",
            "dxFilterBuilder-filterOperationEndsWith": "Termina con",
            "dxFilterBuilder-filterOperationIsBlank": "Vac\xedo",
            "dxFilterBuilder-filterOperationIsNotBlank": "No vac\xedo",
            "dxFilterBuilder-filterOperationBetween": "Entre",
            "dxFilterBuilder-filterOperationAnyOf": "Alguno de",
            "dxFilterBuilder-filterOperationNoneOf": "Ning\xfan de",
            "dxHtmlEditor-dialogColorCaption": "Cambiar el color de la fuente",
            "dxHtmlEditor-dialogBackgroundCaption": "Cambiar el color de fondo",
            "dxHtmlEditor-dialogLinkCaption": "A\xf1adir enlace",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Texto",
            "dxHtmlEditor-dialogLinkTargetField": "Abrir enlace en nueva ventana",
            "dxHtmlEditor-dialogImageCaption": "A\xf1adir imagen",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Texto alternativo",
            "dxHtmlEditor-dialogImageWidthField": "Anchura (px)",
            "dxHtmlEditor-dialogImageHeightField": "Altura (px)",
            "dxHtmlEditor-heading": "Encabezamiento",
            "dxHtmlEditor-normalText": "Texto normal"
        }
    })
});
