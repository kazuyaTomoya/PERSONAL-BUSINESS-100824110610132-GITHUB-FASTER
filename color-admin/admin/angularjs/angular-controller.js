colorAdminApp.controller('appController',['$rootScope','$scope',function($rootScope,$scope){$scope.$on('$includeContentLoaded',function(){App.restartGlobalFunction();});$scope.$on('$viewContentLoaded',function(){});$scope.$on('$stateChangeStart',function(){$rootScope.setting.layout.paceTop=false;$rootScope.setting.layout.appTopMenu=false;$rootScope.setting.layout.appBoxedLayout=false;$rootScope.setting.layout.appSidebarMinified=false;$rootScope.setting.layout.appSidebarEnd=false;$rootScope.setting.layout.appSidebarTwo=false;$rootScope.setting.layout.appSidebarNone=false;$rootScope.setting.layout.appSidebarTransparent=false;$rootScope.setting.layout.appSidebarWide=false;$rootScope.setting.layout.appSidebarLight=false;$rootScope.setting.layout.appSidebarSearch=false;$rootScope.setting.layout.appSidebarHover=false;$rootScope.setting.layout.appHeaderDark=false;$rootScope.setting.layout.appHeaderMegaMenu=false;$rootScope.setting.layout.appHeaderLanguageBar=false;$rootScope.setting.layout.appHeaderNone=false;$rootScope.setting.layout.appContentFullHeight=false;$rootScope.setting.layout.appContentClass='';$rootScope.setting.layout.appFooterFixed=false;App.scrollTop();$('.pace .pace-progress').addClass('hide');$('.pace').removeClass('pace-inactive');});$scope.$on('$stateChangeSuccess',function(){Pace.restart();App.initPageLoad();$('[data-dismiss="app-sidebar-mobile"]').trigger('click');setTimeout(function(){App.initLocalStorage();App.initComponent();},0);if($('#top-menu').length!==0){$('#top-menu').removeAttr('style');}});$scope.$on('$stateNotFound',function(){Pace.stop();});$scope.$on('$stateChangeError',function(){Pace.stop();});}]);colorAdminApp.controller('sidebarController',function($scope,$rootScope,$state){angular.element(document).ready(function(){App.initSidebar();});});colorAdminApp.controller('rightSidebarController',function($scope,$rootScope,$state){angular.element(document).ready(function(){});});colorAdminApp.controller('headerController',function($scope,$rootScope,$state){angular.element(document).ready(function(){});});colorAdminApp.controller('themePanelController',function($scope,$rootScope,$state){angular.element(document).ready(function(){App.initThemePanel();});});colorAdminApp.controller('topMenuController',function($scope,$rootScope,$state){angular.element(document).ready(function(){handleUnlimitedTopMenuRender();});});colorAdminApp.controller('dashboardController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/dashboard.js');});});colorAdminApp.controller('dashboardV2Controller',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/dashboard-v2.js');});});colorAdminApp.controller('dashboardV3Controller',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/dashboard-v3.js');});});colorAdminApp.controller('emailInboxController',function($scope,$rootScope,$state){$rootScope.setting.layout.appContentClass='p-0';$rootScope.setting.layout.appContentFullHeight=true;angular.element(document).ready(function(){$.getScript('../assets/js/demo/email-inbox.demo.js');});});colorAdminApp.controller('emailComposeController',function($scope,$rootScope,$state){$rootScope.setting.layout.appContentClass='p-0';$rootScope.setting.layout.appContentFullHeight=true;angular.element(document).ready(function(){$.getScript('../assets/js/demo/email-compose.demo.js');});});colorAdminApp.controller('emailDetailController',function($scope,$rootScope,$state){$rootScope.setting.layout.appContentClass='p-0';$rootScope.setting.layout.appContentFullHeight=true;});colorAdminApp.controller('uiWidgetBoxesController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiTypographyController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiIconFontAwesomeController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiIconBootstrapIconsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiGeneralController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiButtonsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiModalNotificationController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/ui-modal-notification.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiTreeController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/ui-tree.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiLanguageBarIconController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderLanguageBar=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiUnlimitedTabsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){handleUnlimitedTabsRender();$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiTabsAccordionsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiMediaObjectController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiIconSimpleLineIconsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiSocialButtonsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiTourController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiOffcanvasToastsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiIconIoniconsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('uiIconDuotoneController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('formPluginsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/form-plugins.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('formSliderSwitcherController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/form-slider-switcher.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('formValidationController',function($scope,$rootScope,$state){$scope.submitForm=function(form){if(!form.$valid){$('form[name="'+form.$name+'"] *').tooltip('dispose');angular.forEach(form.$error,function(field){angular.forEach(field,function(errorField){errorField.$setTouched();var targetContainer='form[name="'+form.$name+'"] [name="'+errorField.$name+'"]';var targetMessage=(errorField.$error.required)?'This is required':'';targetMessage=(errorField.$error.email)?'Invalid email':targetMessage;targetMessage=(errorField.$error.url)?'Invalid website url':targetMessage;targetMessage=(errorField.$error.number)?'Only number is allowed':targetMessage;targetMessage=(errorField.$name=='alphabets')?'Only alphabets is allowed':targetMessage;targetMessage=(errorField.$error.minlength)?'You must provide at least 20 characters for this field':targetMessage;targetMessage=(errorField.$error.maxlength)?'You must not exceed the maximum of 200 characters for this field':targetMessage;$(targetContainer).first().tooltip({placement:'top',trigger:'normal',title:targetMessage,container:'body',animation:false});$(targetContainer).first().tooltip('show');});});}};angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('formElementsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('dropzoneController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});new Dropzone("#demo-upload");});});colorAdminApp.controller('formWizardsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('summernoteController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/form-summernote.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('wysiwygController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/form-wysiwyg.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('multipleFileUploadController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/form-multiple-upload.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('xEditableController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/form-editable.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableBasicController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageDefaultController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-default.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageAutofillController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-autofill.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageButtonsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-buttons.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageColReorderController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-colreorder.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageFixedColumnsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-fixed-columns.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageFixedHeaderController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-fixed-header.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageKeyTableController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-keytable.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageResponsiveController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-responsive.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageRowReorderController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-rowreorder.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageScrollerController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-scroller.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageSelectController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-select.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('tableManageCombineController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/table-manage-combine.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('chartFlotController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/chart-flot.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('chartJsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/chart-js.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('chartD3Controller',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/chart-d3.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('chartApexController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/chart-apex.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('calendarController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/calendar.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('mapVectorController',function($scope,$rootScope,$state){$rootScope.setting.layout.appContentClass='p-0 position-relative';$rootScope.setting.layout.appContentFullHeight=true;angular.element(document).ready(function(){$.getScript('../assets/js/demo/map-vector.demo.js');});});colorAdminApp.controller('mapGoogleController',function($scope,$rootScope,$state){$rootScope.setting.layout.appContentClass='p-0 position-relative';$rootScope.setting.layout.appContentFullHeight=true;angular.element(document).ready(function(){$.getScript('../assets/js/demo/map-google.demo.js');});});colorAdminApp.controller('galleryController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/gallery.demo.js');});});colorAdminApp.controller('galleryV2Controller',function($scope,$rootScope,$state){angular.element(document).ready(function(){});});colorAdminApp.controller('pageWithFooterController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithFixedFooterController',function($scope,$rootScope,$state){$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appContentClass='p-0';angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithoutSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appSidebarNone=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithRightSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appSidebarEnd=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithMinifiedSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appSidebarMinified=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithTwoSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appSidebarTwo=true;angular.element(document).ready(function(){$.getScript('../assets/js/demo/page-with-two-sidebar.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageFullHeightContentController',function($scope,$rootScope,$state){$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appContentClass='p-0';angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithWideSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appSidebarWide=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithLightSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderDark=true;$rootScope.setting.layout.appSidebarLight=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithMegaMenuController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderMegaMenu=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithTopMenuController',function($scope,$rootScope,$state){$rootScope.setting.layout.appTopMenu=true;$rootScope.setting.layout.appSidebarNone=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithBoxedLayoutController',function($scope,$rootScope,$state){$rootScope.setting.layout.appBoxedLayout=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithMixedMenuController',function($scope,$rootScope,$state){$rootScope.setting.layout.appTopMenu=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageBoxedLayoutWithMixedMenuController',function($scope,$rootScope,$state){$rootScope.setting.layout.appBoxedLayout=true;$rootScope.setting.layout.appTopMenu=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithTransparentSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appSidebarTransparent=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('pageWithSearchSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appSidebarSearch=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});App.initSidebar();});});colorAdminApp.controller('pageWithHoverSidebarController',function($scope,$rootScope,$state){$rootScope.setting.layout.appSidebarHover=true;angular.element(document).ready(function(){$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('extraTimelineController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/timeline.demo.js');});});colorAdminApp.controller('comingSoonController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appBgWhite=true;$rootScope.setting.layout.paceTop=true;angular.element(document).ready(function(){$.getScript('../assets/js/demo/coming-soon.demo.js');});});colorAdminApp.controller('profileController',function($scope,$rootScope,$state){$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentClass='p-0';angular.element(document).ready(function(){$.getScript('../assets/js/demo/profile.demo.js');});});colorAdminApp.controller('errorController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentClass='p-0';});colorAdminApp.controller('productDetailsController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/product-details.demo.js');});});colorAdminApp.controller('fileManagerController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderDark=true;$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appSidebarMinified=true;angular.element(document).ready(function(){$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');$.getScript('../assets/js/demo/file-manager.demo.js');});});colorAdminApp.controller('pricingPageController',function($scope,$rootScope,$state){$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');});colorAdminApp.controller('messengerPageController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderDark=true;$rootScope.setting.layout.appContentClass='p-0 bg-component';$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appSidebarMinified=true;$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');});colorAdminApp.controller('dataManagementController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderDark=true;$rootScope.setting.layout.appContentClass='p-0 bg-component';$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appSidebarMinified=true;$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');$.getScript('../assets/js/demo/page-data-management.demo.js');});colorAdminApp.controller('settingsPageController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');$.getScript('../assets/js/demo/sidebar-scrollspy.demo.js');});});colorAdminApp.controller('loginV1Controller',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentClass='p-0';$scope.submitForm=function(form){$state.go('app.dashboard.v3');};});colorAdminApp.controller('loginV2Controller',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentClass='p-0';$scope.submitForm=function(form){$state.go('app.dashboard.v3');};angular.element(document).ready(function(){$.getScript('../assets/js/demo/login-v2.demo.js');});});colorAdminApp.controller('loginV3Controller',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentClass='p-0';$scope.submitForm=function(form){$state.go('app.dashboard.v3');};});colorAdminApp.controller('registerV3Controller',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentClass='p-0';$scope.submitForm=function(form){$state.go('app.dashboard.v3');};});colorAdminApp.controller('widgetController',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/js/demo/widget.demo.js');$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js',function(){$.getScript('../assets/js/demo/render.highlight.js');});});});colorAdminApp.controller('posCounterCheckoutController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appContentClass='p-0';angular.element(document).ready(function(){$.getScript('../assets/js/demo/pos-header.demo.js');$.getScript('../assets/js/demo/pos-counter-checkout.demo.js');});});colorAdminApp.controller('posCustomerOrderController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appContentClass='p-0';angular.element(document).ready(function(){$.getScript('../assets/js/demo/pos-customer-order.demo.js');});});colorAdminApp.controller('posKitchenOrderController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appContentClass='p-0';angular.element(document).ready(function(){$.getScript('../assets/js/demo/pos-header.demo.js');});});colorAdminApp.controller('posMenuStockController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appContentClass='p-0';angular.element(document).ready(function(){$.getScript('../assets/js/demo/pos-header.demo.js');});});colorAdminApp.controller('posTableBookingController',function($scope,$rootScope,$state){$rootScope.setting.layout.appHeaderNone=true;$rootScope.setting.layout.appSidebarNone=true;$rootScope.setting.layout.paceTop=true;$rootScope.setting.layout.appContentFullHeight=true;$rootScope.setting.layout.appContentClass='p-0';angular.element(document).ready(function(){$.getScript('../assets/js/demo/pos-header.demo.js');});});colorAdminApp.controller('bootstrap5Controller',function($scope,$rootScope,$state){angular.element(document).ready(function(){$.getScript('../assets/plugins/masonry-layout/dist/masonry.pkgd.min.js',function(){});});});