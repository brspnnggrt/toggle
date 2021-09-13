(() => {
    const utils = {
        _buildPairString: (query) => {
            let keysList = Object.keys(query);
            let pairString = '';
            for (let [key, value] of Object.entries(query)) {
                if (Array.isArray(value)) {
                    for (let valuePart of value) {
                        pairString += `${key}=${encodeURIComponent(valuePart)}`;
                        if (value.lastIndexOf(valuePart) != value.length - 1)
                            pairString += '&';
                    }
                }
                else
                    pairString += `${key}=${encodeURIComponent(value)}`;
                if (keysList.lastIndexOf(key) != keysList.length - 1)
                    pairString += '&';
            }
            return pairString;
        },
        buildQueryString: (query) => {
            return '?' + utils._buildPairString(query);
        },
        buildBodyString: (body) => {
            return JSON.stringify(body);
        },
        get: async (endpoint, query) => {
            const url = endpoint + utils.buildQueryString(query);
            const response = await fetch(url);
            return await response.json();
        },
        post: async (endpoint, body) => {
            const response = await fetch(endpoint, {
                method: 'post',
                body: utils.buildBodyString(body),
                headers: {
                    'X-CSRF-Token': csrfToken,
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            });
            return await response.json();
        },
        patch: async (endpoint, body) => {
            const response = await fetch(endpoint, {
                method: 'patch',
                body: utils.buildBodyString(body),
                headers: {
                    'X-CSRF-Token': csrfToken,
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            });
            return await response.json();
        },
        delete: async (endpoint, body) => {
            const response = await fetch(endpoint, {
                method: 'delete',
                body: utils.buildBodyString(body),
                headers: {
                    'X-CSRF-Token': csrfToken,
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            });
            return await response.json();
        }
    };
    const interface = {
        api: {
            rd: {
                v1: {
                    ApprovalHistory: {
                        getApprovalHistoryModelInit: query => utils.get('/api/rd/v1/ApprovalHistory/GetApprovalHistoryModelInit', query),
                        getApprovalHistoryModelInitData: query => utils.get('/api/rd/v1/ApprovalHistory/GetApprovalHistoryModelInitData', query),
                        getApprovalHistoryModel: query => utils.get('/api/rd/v1/ApprovalHistory/GetApprovalHistoryModel', query)
                    },
                    Approvals: {
                        getApprovalModel: query => utils.get('/api/rd/v1/Approvals/GetApprovalModel', query),
                        getOneClickApprovalResponse: query => utils.get('/api/rd/v1/Approvals/GetOneClickApprovalResponse', query),
                        executeAction: body => utils.post('/api/rd/v1/Approvals/ExecuteAction', body),
                        retractApprovalProcess: body => utils.post('/api/rd/v1/Approvals/RetractApprovalProcess', body),
                        retractExpiredApprovalRules: body => utils.post('/api/rd/v1/Approvals/RetractExpiredApprovalRules', body)
                    },
                    Assets: {
                        getInitData: query => utils.get('/api/rd/v1/Assets/GetInitData', query),
                        getData: body => utils.post('/api/rd/v1/Assets/GetData', body),
                        saveFilter: body => utils.post('/api/rd/v1/Assets/SaveFilter', body),
                        renewAssets: body => utils.post('/api/rd/v1/Assets/RenewAssets', body)
                    },
                    Cart: {
                        getCustomFields: query => utils.get('/api/rd/v1/Cart/GetCustomFields', query),
                        saveCustomFields: body => utils.post('/api/rd/v1/Cart/SaveCustomFields', body),
                        getInitData: query => utils.get('/api/rd/v1/Cart/GetInitData', query),
                        getCartActionsModel: query => utils.get('/api/rd/v1/Cart/GetCartActionsModel', query),
                        getItems: query => utils.get('/api/rd/v1/Cart/GetItems', query),
                        getItemsPost: body => utils.post('/api/rd/v1/Cart/GetItemsPost', body),
                        getOrderSummaryData: query => utils.get('/api/rd/v1/Cart/GetOrderSummaryData', query),
                        calculate: body => utils.post('/api/rd/v1/Cart/Calculate', body),
                        cancelItemEdit: body => utils.post('/api/rd/v1/Cart/CancelItemEdit', body),
                        changeItemType: body => utils.post('/api/rd/v1/Cart/ChangeItemType', body),
                        changeItemsType: body => utils.post('/api/rd/v1/Cart/ChangeItemsType', body),
                        changeMarket: body => utils.post('/api/rd/v1/Cart/ChangeMarket', body),
                        getSbItemsWithoutMarketPrices: query => utils.get('/api/rd/v1/Cart/GetSbItemsWithoutMarketPrices', query),
                        changePricebook: body => utils.post('/api/rd/v1/Cart/ChangePricebook', body),
                        changeEffectiveDate: body => utils.post('/api/rd/v1/Cart/ChangeEffectiveDate', body),
                        changeShipping: body => utils.post('/api/rd/v1/Cart/ChangeShipping', body),
                        changeStatus: body => utils.post('/api/rd/v1/Cart/ChangeStatus', body),
                        saveCartComment: body => utils.post('/api/rd/v1/Cart/SaveCartComment', body),
                        crateNewAdditionalDiscount: body => utils.post('/api/rd/v1/Cart/CrateNewAdditionalDiscount', body),
                        deleteAdditionalDiscount: body => utils.post('/api/rd/v1/Cart/DeleteAdditionalDiscount', body),
                        executeAction: body => utils.post('/api/rd/v1/Cart/ExecuteAction', body),
                        executeItemAction: body => utils.post('/api/rd/v1/Cart/ExecuteItemAction', body),
                        executeUpgradeItemAction: body => utils.post('/api/rd/v1/Cart/ExecuteUpgradeItemAction', body),
                        executeItemActionById: body => utils.post('/api/rd/v1/Cart/ExecuteItemActionById', body),
                        getProductsForUpgrade: query => utils.get('/api/rd/v1/Cart/GetProductsForUpgrade', query),
                        getCartItemProductUpgradeConfirmationMessage: query => utils.get('/api/rd/v1/Cart/GetCartItemProductUpgradeConfirmationMessage', query),
                        getCartProductsUpgradeConfirmationMessage: query => utils.get('/api/rd/v1/Cart/GetCartProductsUpgradeConfirmationMessage', query),
                        moveItemDown: body => utils.post('/api/rd/v1/Cart/MoveItemDown', body),
                        moveItemUp: body => utils.post('/api/rd/v1/Cart/MoveItemUp', body),
                        moveToPosition: body => utils.post('/api/rd/v1/Cart/MoveToPosition', body),
                        redo: body => utils.post('/api/rd/v1/Cart/Redo', body),
                        setActiveEditableGroup: body => utils.post('/api/rd/v1/Cart/SetActiveEditableGroup', body),
                        undo: body => utils.post('/api/rd/v1/Cart/Undo', body),
                        upgradeAndEditProduct: body => utils.post('/api/rd/v1/Cart/UpgradeAndEditProduct', body),
                        upgradeProductsAndExecuteAction: body => utils.post('/api/rd/v1/Cart/UpgradeProductsAndExecuteAction', body),
                        addToQuote: body => utils.post('/api/rd/v1/Cart/AddToQuote', body),
                        addToQuoteWithSection: body => utils.post('/api/rd/v1/Cart/AddToQuoteWithSection', body),
                        addFavoriteToQuote: body => utils.post('/api/rd/v1/Cart/AddFavoriteToQuote', body),
                        changeApprovalProbability: body => utils.post('/api/rd/v1/Cart/ChangeApprovalProbability', body),
                        deleteItems: body => utils.post('/api/rd/v1/Cart/DeleteItems', body),
                        reorderItems: body => utils.post('/api/rd/v1/Cart/ReorderItems', body),
                        changeMarginHealth: body => utils.post('/api/rd/v1/Cart/ChangeMarginHealth', body),
                        continueActionExecution: body => utils.post('/api/rd/v1/Cart/ContinueActionExecution', body),
                        getSections: query => utils.get('/api/rd/v1/Cart/GetSections', query),
                        getPartNumberSuggestions: query => utils.get('/api/rd/v1/Cart/GetPartNumberSuggestions', query),
                        setCartItemComment: body => utils.post('/api/rd/v1/Cart/SetCartItemComment', body),
                        createNew: body => utils.post('/api/rd/v1/Cart/CreateNew', body),
                        linkToOpportunity: body => utils.post('/api/rd/v1/Cart/LinkToOpportunity', body),
                        getViewQuoteItemsModel: query => utils.get('/api/rd/v1/Cart/GetViewQuoteItemsModel', query),
                        itemActionDeleteReduced: body => utils.post('/api/rd/v1/Cart/ItemActionDeleteReduced', body),
                        getCurrentMainItemsCount: query => utils.get('/api/rd/v1/Cart/GetCurrentMainItemsCount', query),
                        getPartialOrderData: body => utils.post('/api/rd/v1/Cart/GetPartialOrderData', body),
                        createPartialOrder: body => utils.post('/api/rd/v1/Cart/CreatePartialOrder', body),
                        getPromotions: query => utils.get('/api/rd/v1/Cart/GetPromotions', query),
                        applyPromotions: body => utils.post('/api/rd/v1/Cart/ApplyPromotions', body),
                        expandItem: body => utils.post('/api/rd/v1/Cart/ExpandItem', body),
                        expandAll: body => utils.post('/api/rd/v1/Cart/ExpandAll', body),
                        collapseItem: body => utils.post('/api/rd/v1/Cart/CollapseItem', body),
                        collapseAll: body => utils.post('/api/rd/v1/Cart/CollapseAll', body),
                        searchItems: query => utils.get('/api/rd/v1/Cart/SearchItems', query),
                        copyQuoteTableRow: body => utils.post('/api/rd/v1/Cart/CopyQuoteTableRow', body),
                        deleteQuoteTableRow: body => utils.post('/api/rd/v1/Cart/DeleteQuoteTableRow', body),
                        addQuoteTableRow: body => utils.post('/api/rd/v1/Cart/AddQuoteTableRow', body),
                        changeQuoteTableCells: body => utils.post('/api/rd/v1/Cart/ChangeQuoteTableCells', body),
                        getQuoteTableRows: query => utils.get('/api/rd/v1/Cart/GetQuoteTableRows', query),
                        executeQuoteTableCustomAction: body => utils.post('/api/rd/v1/Cart/ExecuteQuoteTableCustomAction', body),
                        filterQuoteTableRows: body => utils.post('/api/rd/v1/Cart/FilterQuoteTableRows', body),
                        getAutoCompleteSourceTableValues: query => utils.get('/api/rd/v1/Cart/GetAutoCompleteSourceTableValues', query),
                        getAutoCompleteSubscriptionFields: query => utils.get('/api/rd/v1/Cart/GetAutoCompleteSubscriptionFields', query),
                        selectAutocompleteCustomField: body => utils.post('/api/rd/v1/Cart/SelectAutocompleteCustomField', body),
                        getFilterableItemColumns: query => utils.get('/api/rd/v1/Cart/GetFilterableItemColumns', query),
                        getMinAndMaxForColumn: query => utils.get('/api/rd/v1/Cart/GetMinAndMaxForColumn', query),
                        getFiltersMetadata: query => utils.get('/api/rd/v1/Cart/GetFiltersMetadata', query),
                        getCustomFieldAutocomplete: query => utils.get('/api/rd/v1/Cart/GetCustomFieldAutocomplete', query),
                        getFieldDistinctValues: query => utils.get('/api/rd/v1/Cart/GetFieldDistinctValues', query),
                        getProductTypes: query => utils.get('/api/rd/v1/Cart/GetProductTypes', query),
                        getCustomFieldAutocompleteAttribute: query => utils.get('/api/rd/v1/Cart/GetCustomFieldAutocompleteAttribute', query),
                        downloadQTDataTemplate: query => utils.get('/api/rd/v1/Cart/DownloadQTDataTemplate', query),
                        downloadQTEmptyTemplate: query => utils.get('/api/rd/v1/Cart/DownloadQTEmptyTemplate', query),
                        calculateSections: body => utils.post('/api/rd/v1/Cart/CalculateSections', body),
                        getItemsBySections: body => utils.post('/api/rd/v1/Cart/GetItemsBySections', body),
                        getActionsForItem: query => utils.get('/api/rd/v1/Cart/GetActionsForItem', query),
                        deleteQuoteTeam: body => utils.post('/api/rd/v1/Cart/DeleteQuoteTeam', body),
                        saveQuoteTeam: body => utils.post('/api/rd/v1/Cart/SaveQuoteTeam', body),
                        getQuoteTeamsTabData: query => utils.get('/api/rd/v1/Cart/GetQuoteTeamsTabData', query),
                        getQuoteTeams: query => utils.get('/api/rd/v1/Cart/GetQuoteTeams', query),
                        bulkAssign: body => utils.post('/api/rd/v1/Cart/BulkAssign', body),
                        percentageOperations: query => utils.get('/api/rd/v1/Cart/PercentageOperations', query)
                    },
                    CartDocuments: {
                        getCartDocumentsModelInit: query => utils.get('/api/rd/v1/CartDocuments/GetCartDocumentsModelInit', query),
                        getCartDocumentAttachmentModel: query => utils.get('/api/rd/v1/CartDocuments/GetCartDocumentAttachmentModel', query),
                        getCartDocumentGenDocModel: query => utils.get('/api/rd/v1/CartDocuments/GetCartDocumentGenDocModel', query),
                        prepareGeneratedDocumentForDownload: body => utils.post('/api/rd/v1/CartDocuments/PrepareGeneratedDocumentForDownload', body),
                        setSendToCustomer: body => utils.post('/api/rd/v1/CartDocuments/SetSendToCustomer', body),
                        setViewedByCustomer: body => utils.post('/api/rd/v1/CartDocuments/SetViewedByCustomer', body),
                        deleteGeneratedDocument: body => utils.post('/api/rd/v1/CartDocuments/DeleteGeneratedDocument', body),
                        deleteAttachment: body => utils.post('/api/rd/v1/CartDocuments/DeleteAttachment', body),
                        saveQuoteRevisionDescription: body => utils.post('/api/rd/v1/CartDocuments/SaveQuoteRevisionDescription', body),
                        viewCartAttachment: query => utils.get('/api/rd/v1/CartDocuments/ViewCartAttachment', query),
                        downloadCartAttachment: query => utils.get('/api/rd/v1/CartDocuments/DownloadCartAttachment', query)
                    },
                    CartList: {
                        changeStatus: body => utils.post('/api/rd/v1/CartList/ChangeStatus', body),
                        executeAction: body => utils.post('/api/rd/v1/CartList/ExecuteAction', body),
                        retractApprovalProcess: body => utils.post('/api/rd/v1/CartList/RetractApprovalProcess', body),
                        executeApprovals: body => utils.post('/api/rd/v1/CartList/ExecuteApprovals', body),
                        getData: body => utils.post('/api/rd/v1/CartList/GetData', body),
                        getDataByQuoteNumber: query => utils.get('/api/rd/v1/CartList/GetDataByQuoteNumber', query),
                        getInitData: query => utils.get('/api/rd/v1/CartList/GetInitData', query),
                        getUserTypesForReassign: body => utils.post('/api/rd/v1/CartList/GetUserTypesForReassign', body),
                        getUsersForReassign: body => utils.post('/api/rd/v1/CartList/GetUsersForReassign', body),
                        reassign: body => utils.post('/api/rd/v1/CartList/Reassign', body),
                        saveData: body => utils.post('/api/rd/v1/CartList/SaveData', body),
                        saveSettings: body => utils.post('/api/rd/v1/CartList/SaveSettings', body)
                    },
                    Catalog: {
                        getInitData: query => utils.get('/api/rd/v1/Catalog/GetInitData', query),
                        getCategoriesData: query => utils.get('/api/rd/v1/Catalog/GetCategoriesData', query),
                        getData: query => utils.get('/api/rd/v1/Catalog/GetData', query),
                        getProductsCount: query => utils.get('/api/rd/v1/Catalog/GetProductsCount', query),
                        getReplaceProductId: query => utils.get('/api/rd/v1/Catalog/GetReplaceProductId', query),
                        getQuickAdd: query => utils.get('/api/rd/v1/Catalog/GetQuickAdd', query),
                        reset: body => utils.post('/api/rd/v1/Catalog/Reset', body),
                        clearAbs: body => utils.post('/api/rd/v1/Catalog/ClearAbs', body),
                        getSearchSuggestions: query => utils.get('/api/rd/v1/Catalog/GetSearchSuggestions', query),
                        addToQuote: body => utils.post('/api/rd/v1/Catalog/AddToQuote', body),
                        quickConfig: body => utils.post('/api/rd/v1/Catalog/QuickConfig', body),
                        getCategories: query => utils.get('/api/rd/v1/Catalog/GetCategories', query),
                        getRatePlanForProductAndMarket: query => utils.get('/api/rd/v1/Catalog/GetRatePlanForProductAndMarket', query)
                    },
                    ChangeSets: {
                        getChangeSetOptions: query => utils.get('/api/rd/v1/ChangeSets/GetChangeSetOptions', query),
                        saveChangeSet: body => utils.post('/api/rd/v1/ChangeSets/SaveChangeSet', body),
                        getSelectedChangeSet: query => utils.get('/api/rd/v1/ChangeSets/GetSelectedChangeSet', query),
                        selectChangeSet: body => utils.post('/api/rd/v1/ChangeSets/SelectChangeSet', body)
                    },
                    CompareProducts: {
                        getInitData: query => utils.get('/api/rd/v1/CompareProducts/GetInitData', query),
                        addProductToCompare: body => utils.post('/api/rd/v1/CompareProducts/AddProductToCompare', body),
                        removeProductFromCompare: body => utils.post('/api/rd/v1/CompareProducts/RemoveProductFromCompare', body),
                        removeProductFromCompareAndReload: body => utils.post('/api/rd/v1/CompareProducts/RemoveProductFromCompareAndReload', body),
                        clearProductComparisonSelection: body => utils.post('/api/rd/v1/CompareProducts/ClearProductComparisonSelection', body)
                    },
                    Configurator: {
                        init: body => utils.post('/api/rd/v1/Configurator/Init', body),
                        getModel: query => utils.get('/api/rd/v1/Configurator/GetModel', query),
                        getTabModel: query => utils.get('/api/rd/v1/Configurator/GetTabModel', query),
                        shouldShowConflictsTab: query => utils.get('/api/rd/v1/Configurator/ShouldShowConflictsTab', query),
                        changeUserInput: body => utils.post('/api/rd/v1/Configurator/ChangeUserInput', body),
                        changeAttributeQuantity: body => utils.post('/api/rd/v1/Configurator/ChangeAttributeQuantity', body),
                        changeAttributeValue: body => utils.post('/api/rd/v1/Configurator/ChangeAttributeValue', body),
                        buttonAttributeAction: body => utils.post('/api/rd/v1/Configurator/ButtonAttributeAction', body),
                        changeAttributeValueQuantity: body => utils.post('/api/rd/v1/Configurator/ChangeAttributeValueQuantity', body),
                        addContainerRow: body => utils.post('/api/rd/v1/Configurator/AddContainerRow', body),
                        editConfigurationTreeRow: body => utils.post('/api/rd/v1/Configurator/EditConfigurationTreeRow', body),
                        editContainerRow: body => utils.post('/api/rd/v1/Configurator/EditContainerRow', body),
                        setContainerCurrentPage: body => utils.post('/api/rd/v1/Configurator/SetContainerCurrentPage', body),
                        setContainerPageSize: body => utils.post('/api/rd/v1/Configurator/SetContainerPageSize', body),
                        deleteContainerRow: body => utils.post('/api/rd/v1/Configurator/DeleteContainerRow', body),
                        copyContainerRow: body => utils.post('/api/rd/v1/Configurator/CopyContainerRow', body),
                        modalCopyContainerRow: body => utils.post('/api/rd/v1/Configurator/ModalCopyContainerRow', body),
                        moveUpContainerRow: body => utils.post('/api/rd/v1/Configurator/MoveUpContainerRow', body),
                        moveDownContainerRow: body => utils.post('/api/rd/v1/Configurator/MoveDownContainerRow', body),
                        changeContainerValue: body => utils.post('/api/rd/v1/Configurator/ChangeContainerValue', body),
                        containerSort: body => utils.post('/api/rd/v1/Configurator/ContainerSort', body),
                        containerClearSort: body => utils.post('/api/rd/v1/Configurator/ContainerClearSort', body),
                        changeContainerAutocompleteValue: body => utils.post('/api/rd/v1/Configurator/ChangeContainerAutocompleteValue', body),
                        alterContainerRowSelection: body => utils.post('/api/rd/v1/Configurator/AlterContainerRowSelection', body),
                        setContainerSelectedRowFilter: body => utils.post('/api/rd/v1/Configurator/SetContainerSelectedRowFilter', body),
                        changeDrillDownValue: body => utils.post('/api/rd/v1/Configurator/ChangeDrillDownValue', body),
                        reset: body => utils.post('/api/rd/v1/Configurator/Reset', body),
                        addToQuote: body => utils.post('/api/rd/v1/Configurator/AddToQuote', body),
                        unlockProduct: body => utils.post('/api/rd/v1/Configurator/UnlockProduct', body),
                        saveAndExitNestedProduct: body => utils.post('/api/rd/v1/Configurator/SaveAndExitNestedProduct', body),
                        exitNestedProduct: body => utils.post('/api/rd/v1/Configurator/ExitNestedProduct', body),
                        goToRootProduct: body => utils.post('/api/rd/v1/Configurator/GoToRootProduct', body),
                        viewABSPriceRanges: body => utils.post('/api/rd/v1/Configurator/ViewABSPriceRanges', body),
                        hideABSPriceRanges: body => utils.post('/api/rd/v1/Configurator/HideABSPriceRanges', body),
                        viewABSProducts: body => utils.post('/api/rd/v1/Configurator/ViewABSProducts', body),
                        applyConfigurationTemplate: body => utils.post('/api/rd/v1/Configurator/ApplyConfigurationTemplate', body),
                        getAutoCompleteSourceTableValues: query => utils.get('/api/rd/v1/Configurator/GetAutoCompleteSourceTableValues', query),
                        selectAutoCompleteAttribute: body => utils.post('/api/rd/v1/Configurator/SelectAutoCompleteAttribute', body),
                        getConfigurationTree: query => utils.get('/api/rd/v1/Configurator/GetConfigurationTree', query),
                        getConflictSummary: query => utils.get('/api/rd/v1/Configurator/GetConflictSummary', query)
                    },
                    Core: {
                        logError: body => utils.post('/api/rd/v1/Core/LogError', body),
                        refreshSession: query => utils.get('/api/rd/v1/Core/RefreshSession', query),
                        logIn: body => utils.post('/api/rd/v1/Core/LogIn', body),
                        logInGuestUser: body => utils.post('/api/rd/v1/Core/LogInGuestUser', body),
                        logInJWT: body => utils.post('/api/rd/v1/Core/LogInJWT', body),
                        generateJWT: body => utils.post('/api/rd/v1/Core/GenerateJWT', body),
                        loginFromSalesforce: body => utils.post('/api/rd/v1/Core/LoginFromSalesforce', body),
                        loginGeoIP: body => utils.post('/api/rd/v1/Core/LoginGeoIP', body)
                    },
                    CustomerFeedback: {
                        getData: query => utils.get('/api/rd/v1/CustomerFeedback/GetData', query),
                        getUnreadCount: query => utils.get('/api/rd/v1/CustomerFeedback/GetUnreadCount', query),
                        saveComment: body => utils.post('/api/rd/v1/CustomerFeedback/SaveComment', body),
                        deleteComment: body => utils.post('/api/rd/v1/CustomerFeedback/DeleteComment', body)
                    },
                    Customers: {
                        clearCustomerRole: body => utils.post('/api/rd/v1/Customers/ClearCustomerRole', body),
                        copyCustomer: body => utils.post('/api/rd/v1/Customers/CopyCustomer', body),
                        getAccountInfo: body => utils.post('/api/rd/v1/Customers/GetAccountInfo', body),
                        getAddressesPostCodeLookup: body => utils.post('/api/rd/v1/Customers/GetAddressesPostCodeLookup', body),
                        getContactInfo: body => utils.post('/api/rd/v1/Customers/GetContactInfo', body),
                        getCrmAccountAndContactsForImport: body => utils.post('/api/rd/v1/Customers/GetCrmAccountAndContactsForImport', body),
                        changedSelectedCountry: body => utils.post('/api/rd/v1/Customers/ChangedSelectedCountry', body),
                        getCrmLookupInfo: body => utils.post('/api/rd/v1/Customers/GetCrmLookupInfo', body),
                        getCustomer: body => utils.post('/api/rd/v1/Customers/GetCustomer', body),
                        getCustomersForCustomerRole: body => utils.post('/api/rd/v1/Customers/GetCustomersForCustomerRole', body),
                        getData: body => utils.post('/api/rd/v1/Customers/GetData', body),
                        getInitData: query => utils.get('/api/rd/v1/Customers/GetInitData', query),
                        getInitShippingInfoData: query => utils.get('/api/rd/v1/Customers/GetInitShippingInfoData', query),
                        getPostCodeLookupAddressById: body => utils.post('/api/rd/v1/Customers/GetPostCodeLookupAddressById', body),
                        getSearchSuggestions: query => utils.get('/api/rd/v1/Customers/GetSearchSuggestions', query),
                        importCustomerFromCrm: body => utils.post('/api/rd/v1/Customers/ImportCustomerFromCrm', body),
                        newCustomerShippingInfo: body => utils.post('/api/rd/v1/Customers/NewCustomerShippingInfo', body),
                        pickCustomerFromLookup: body => utils.post('/api/rd/v1/Customers/PickCustomerFromLookup', body),
                        reloadCustomerData: body => utils.post('/api/rd/v1/Customers/ReloadCustomerData', body),
                        removeCustomer: body => utils.post('/api/rd/v1/Customers/RemoveCustomer', body),
                        saveCustomer: body => utils.post('/api/rd/v1/Customers/SaveCustomer', body),
                        saveCustomerShippingInfo: body => utils.post('/api/rd/v1/Customers/SaveCustomerShippingInfo', body),
                        copyCustomerTo: body => utils.post('/api/rd/v1/Customers/CopyCustomerTo', body),
                    },
                    DealView: {
                        getDealViewInitData: query => utils.get('/api/rd/v1/DealView/GetDealViewInitData', query),
                        bulkUpdateDealStructure: body => utils.post('/api/rd/v1/DealView/BulkUpdateDealStructure', body),
                        moveItemToSection: query => utils.get('/api/rd/v1/DealView/MoveItemToSection', query),
                        getDealSectionByPath: query => utils.get('/api/rd/v1/DealView/GetDealSectionByPath', query),
                        setActiveEditableGroup: body => utils.post('/api/rd/v1/DealView/SetActiveEditableGroup', body),
                        searchSectionsByName: query => utils.get('/api/rd/v1/DealView/SearchSectionsByName', query),
                        dealStructureModelsCount: query => utils.get('/api/rd/v1/DealView/DealStructureModelsCount', query),
                        downloadSectionsTemplate: query => utils.get('/api/rd/v1/DealView/DownloadSectionsTemplate', query),
                        exportDealStructure: query => utils.get('/api/rd/v1/DealView/ExportDealStructure', query),
                        getFilterableItemColumns: query => utils.get('/api/rd/v1/DealView/GetFilterableItemColumns', query),
                        getMinAndMaxForColumn: query => utils.get('/api/rd/v1/DealView/GetMinAndMaxForColumn', query),
                        getCustomFieldAutocomplete: query => utils.get('/api/rd/v1/DealView/GetCustomFieldAutocomplete', query),
                        getFieldDistinctValues: query => utils.get('/api/rd/v1/DealView/GetFieldDistinctValues', query),
                        getSectionsDistinctPaths: query => utils.get('/api/rd/v1/DealView/GetSectionsDistinctPaths', query),
                        getCustomFieldAutocompleteAttribute: query => utils.get('/api/rd/v1/DealView/GetCustomFieldAutocompleteAttribute', query),
                        getFiltersMetadata: query => utils.get('/api/rd/v1/DealView/GetFiltersMetadata', query),
                        getSectionPaths: query => utils.get('/api/rd/v1/DealView/GetSectionPaths', query),
                        getFilteredDealStructure: query => utils.get('/api/rd/v1/DealView/GetFilteredDealStructure', query),
                        distributeSections: body => utils.post('/api/rd/v1/DealView/DistributeSections', body),
                        redistribute: query => utils.get('/api/rd/v1/DealView/Redistribute', query),
                        retractDistribution: body => utils.post('/api/rd/v1/DealView/RetractDistribution', body),
                        getSectionTotals: body => utils.post('/api/rd/v1/DealView/GetSectionTotals', body)
                    },
                    Favorites: {
                        getInitData: query => utils.get('/api/rd/v1/Favorites/GetInitData', query),
                        getData: body => utils.post('/api/rd/v1/Favorites/GetData', body),
                        deleteFavorite: body => utils.post('/api/rd/v1/Favorites/DeleteFavorite', body),
                        deleteFavoriteFromFavoritesList: body => utils.post('/api/rd/v1/Favorites/DeleteFavoriteFromFavoritesList', body),
                        updateFavoriteFromFavoritesList: body => utils.post('/api/rd/v1/Favorites/UpdateFavoriteFromFavoritesList', body),
                        saveFavoriteFromCatalog: body => utils.post('/api/rd/v1/Favorites/SaveFavoriteFromCatalog', body),
                        saveFavoriteFromConfigurator: body => utils.post('/api/rd/v1/Favorites/SaveFavoriteFromConfigurator', body),
                        saveFavoriteFromCart: body => utils.post('/api/rd/v1/Favorites/SaveFavoriteFromCart', body),
                        updateFavoriteFromConfigurator: body => utils.post('/api/rd/v1/Favorites/UpdateFavoriteFromConfigurator', body),
                        addToQuote: body => utils.post('/api/rd/v1/Favorites/AddToQuote', body),
                        getProductNameAndDescription: body => utils.post('/api/rd/v1/Favorites/GetProductNameAndDescription', body),
                        editFavorite: body => utils.post('/api/rd/v1/Favorites/EditFavorite', body),
                        getFavoritesDefaultData: query => utils.get('/api/rd/v1/Favorites/GetFavoritesDefaultData', query)
                    },
                    InvolvedParties: {
                        getInvolvedParties: query => utils.get('/api/rd/v1/InvolvedParties/GetInvolvedParties', query),
                        deleteInvolvedParty: body => utils.post('/api/rd/v1/InvolvedParties/DeleteInvolvedParty', body),
                        removeBusinessPartner: body => utils.post('/api/rd/v1/InvolvedParties/RemoveBusinessPartner', body),
                        getAllValidPartnerFunctions: query => utils.get('/api/rd/v1/InvolvedParties/GetAllValidPartnerFunctions', query),
                        addInvolvedParty: body => utils.post('/api/rd/v1/InvolvedParties/AddInvolvedParty', body),
                        assignBusinessPartner: body => utils.post('/api/rd/v1/InvolvedParties/AssignBusinessPartner', body),
                        getInvolvedPartyById: query => utils.get('/api/rd/v1/InvolvedParties/GetInvolvedPartyById', query),
                        getCountries: query => utils.get('/api/rd/v1/InvolvedParties/GetCountries', query),
                        getAllStatesForCountry: query => utils.get('/api/rd/v1/InvolvedParties/GetAllStatesForCountry', query),
                        updateBusinessPartner: body => utils.post('/api/rd/v1/InvolvedParties/UpdateBusinessPartner', body),
                        updatePartnerFunction: body => utils.post('/api/rd/v1/InvolvedParties/UpdatePartnerFunction', body),
                        searchBusinessPartners: query => utils.get('/api/rd/v1/InvolvedParties/SearchBusinessPartners', query)
                    },
                    ProductDetails: {
                        getInitData: query => utils.get('/api/rd/v1/ProductDetails/GetInitData', query)
                    },
                    QuoteList: {
                        getInitData: query => utils.get('/api/rd/v1/QuoteList/GetInitData', query),
                        getFilterSuggestions: query => utils.get('/api/rd/v1/QuoteList/GetFilterSuggestions', query),
                        getData: query => utils.get('/api/rd/v1/QuoteList/GetData', query),
                        changeStatus: body => utils.post('/api/rd/v1/QuoteList/ChangeStatus', body),
                        executeAction: body => utils.post('/api/rd/v1/QuoteList/ExecuteAction', body),
                        loadQuoteListFilters: query => utils.get('/api/rd/v1/QuoteList/LoadQuoteListFilters', query),
                        saveQuoteListFilters: body => utils.post('/api/rd/v1/QuoteList/SaveQuoteListFilters', body),
                        getMinAndMaxForColumn: query => utils.get('/api/rd/v1/QuoteList/GetMinAndMaxForColumn', query),
                        getUserTypesForReassign: body => utils.post('/api/rd/v1/QuoteList/GetUserTypesForReassign', body),
                        getUsersForReassign: body => utils.post('/api/rd/v1/QuoteList/GetUsersForReassign', body),
                        reassign: body => utils.post('/api/rd/v1/QuoteList/Reassign', body)
                    },
                    RecentlyVisitedObjects: {
                        get: query => utils.get('/api/rd/v1/RecentlyVisitedObjects/Get', query),
                        executeAction: body => utils.post('/api/rd/v1/RecentlyVisitedObjects/ExecuteAction', body)
                    },
                    Recommendations: {
                        getData: query => utils.get('/api/rd/v1/Recommendations/GetData', query),
                        decline: body => utils.post('/api/rd/v1/Recommendations/Decline', body),
                        changeDiscount: body => utils.post('/api/rd/v1/Recommendations/ChangeDiscount', body),
                        addProduct: body => utils.post('/api/rd/v1/Recommendations/AddProduct', body)
                    },
                    Revisions: {
                        getInitData: query => utils.get('/api/rd/v1/Revisions/GetInitData', query),
                        getRevisions: query => utils.get('/api/rd/v1/Revisions/GetRevisions', query),
                        executeAction: body => utils.post('/api/rd/v1/Revisions/ExecuteAction', body),
                        updateRevisions: body => utils.post('/api/rd/v1/Revisions/UpdateRevisions', body),
                        getCurrentRevision: query => utils.get('/api/rd/v1/Revisions/GetCurrentRevision', query),
                        renameRevision: query => utils.get('/api/rd/v1/Revisions/RenameRevision', query)
                    },
                    SapCRMLanding: {
                        proceedToQuote: query => utils.get('/api/rd/v1/SapCRMLanding/ProceedToQuote', query)
                    },
                    SBProviderRD: {
                        getProviderDetails: query => utils.get('/api/rd/v1/SBProviderRD/GetProviderDetails', query),
                        updateProviderDetails: body => utils.post('/api/rd/v1/SBProviderRD/UpdateProviderDetails', body),
                        testAuthenticationSettings: body => utils.post('/api/rd/v1/SBProviderRD/TestAuthenticationSettings', body),
                        testRatePlanTemplateEndpoint: body => utils.post('/api/rd/v1/SBProviderRD/TestRatePlanTemplateEndpoint', body)
                    },
                    SegregationOfDutiesRD: {
                        getSetupLinksVisibility: query => utils.get('/api/rd/v1/SegregationOfDutiesRD/GetSetupLinksVisibility', query)
                    },
                    UserPersonalization: {
                        getInitData: query => utils.get('/api/rd/v1/UserPersonalization/GetInitData', query),
                        getUsers: query => utils.get('/api/rd/v1/UserPersonalization/GetUsers', query),
                        getModifyPasswordInitData: query => utils.get('/api/rd/v1/UserPersonalization/GetModifyPasswordInitData', query),
                        getModifyPersonalInitData: query => utils.get('/api/rd/v1/UserPersonalization/GetModifyPersonalInitData', query),
                        changedDateFormat: body => utils.post('/api/rd/v1/UserPersonalization/ChangedDateFormat', body),
                        changedSelectedCountry: body => utils.post('/api/rd/v1/UserPersonalization/ChangedSelectedCountry', body),
                        saveUserPersonalization: body => utils.post('/api/rd/v1/UserPersonalization/SaveUserPersonalization', body),
                        saveChangedPassword: body => utils.post('/api/rd/v1/UserPersonalization/SaveChangedPassword', body),
                        saveDetails: body => utils.post('/api/rd/v1/UserPersonalization/SaveDetails', body),
                        toggleResponsiveDesign: body => utils.post('/api/rd/v1/UserPersonalization/ToggleResponsiveDesign', body),
                        getMarketPricebooks: query => utils.get('/api/rd/v1/UserPersonalization/GetMarketPricebooks', query)
                    }
                }
            },
            v1: {
                admin: {
                    Admin: {
                        generateSecretKey: query => utils.get('/api/v1/admin/Admin/GenerateSecretKey', query)
                    },
                    AssetDefinition: {
                        getInitData: query => utils.get('/api/v1/admin/AssetDefinition/GetInitData', query),
                        saveAssetDefinition: body => utils.post('/api/v1/admin/AssetDefinition/SaveAssetDefinition', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/AssetDefinition/GenerateSecretKey', query)
                    },
                    AttributeTranslationImportExport: {
                        getInitData: query => utils.get('/api/v1/admin/AttributeTranslationImportExport/GetInitData', query)
                    },
                    BulkImportExport: {
                        exportUsers: body => utils.post('/api/v1/admin/BulkImportExport/ExportUsers', body),
                        getUserExportInitData: query => utils.get('/api/v1/admin/BulkImportExport/GetUserExportInitData', query),
                        exportPricebook: body => utils.post('/api/v1/admin/BulkImportExport/ExportPricebook', body),
                        getData: body => utils.post('/api/v1/admin/BulkImportExport/GetData', body),
                        cancelJob: body => utils.post('/api/v1/admin/BulkImportExport/CancelJob', body),
                        changeRequestEmail: body => utils.post('/api/v1/admin/BulkImportExport/ChangeRequestEmail', body),
                        exportProducts: body => utils.post('/api/v1/admin/BulkImportExport/ExportProducts', body),
                        getCategories: query => utils.get('/api/v1/admin/BulkImportExport/GetCategories', query),
                        getPricingMechanisms: query => utils.get('/api/v1/admin/BulkImportExport/GetPricingMechanisms', query),
                        getPermissions: query => utils.get('/api/v1/admin/BulkImportExport/GetPermissions', query)
                    },
                    CLMFieldMappings: {
                        getData: query => utils.get('/api/v1/admin/CLMFieldMappings/GetData', query),
                        saveMapping: body => utils.post('/api/v1/admin/CLMFieldMappings/SaveMapping', body),
                        deleteMapping: body => utils.post('/api/v1/admin/CLMFieldMappings/DeleteMapping', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/CLMFieldMappings/GenerateSecretKey', query)
                    },
                    ClmStatusMappings: {
                        getData: query => utils.get('/api/v1/admin/ClmStatusMappings/GetData', query),
                        saveMapping: body => utils.post('/api/v1/admin/ClmStatusMappings/SaveMapping', body),
                        deleteMapping: body => utils.post('/api/v1/admin/ClmStatusMappings/DeleteMapping', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/ClmStatusMappings/GenerateSecretKey', query)
                    },
                    CompaniesImportExport: {
                        export: query => utils.get('/api/v1/admin/CompaniesImportExport/Export', query),
                        import: body => utils.post('/api/v1/admin/CompaniesImportExport/Import', body)
                    },
                    CpqQuoteItemColumnsMapping: {
                        getData: query => utils.get('/api/v1/admin/CpqQuoteItemColumnsMapping/GetData', query),
                        saveMapping: body => utils.post('/api/v1/admin/CpqQuoteItemColumnsMapping/SaveMapping', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/CpqQuoteItemColumnsMapping/GenerateSecretKey', query)
                    },
                    Pricebooks: {
                        getMarketSelectionInitData: query => utils.get('/api/v1/admin/Pricebooks/GetMarketSelectionInitData', query),
                        setMarketFilter: body => utils.post('/api/v1/admin/Pricebooks/SetMarketFilter', body),
                        getPricebookSettingsInitData: query => utils.get('/api/v1/admin/Pricebooks/GetPricebookSettingsInitData', query),
                        getPricebooksPerMarketInitData: query => utils.get('/api/v1/admin/Pricebooks/GetPricebooksPerMarketInitData', query),
                        getAllPricebooksPerMarket: query => utils.get('/api/v1/admin/Pricebooks/GetAllPricebooksPerMarket', query),
                        getFilteredPricebooksPerMarket: body => utils.post('/api/v1/admin/Pricebooks/GetFilteredPricebooksPerMarket', body),
                        deletePricebook: body => utils.post('/api/v1/admin/Pricebooks/DeletePricebook', body),
                        getPricebookEntriesInitData: query => utils.get('/api/v1/admin/Pricebooks/GetPricebookEntriesInitData', query),
                        getFilteredPricebookEntries: body => utils.post('/api/v1/admin/Pricebooks/GetFilteredPricebookEntries', body),
                        savePricebookSettings: body => utils.post('/api/v1/admin/Pricebooks/SavePricebookSettings', body),
                        getHistoryData: body => utils.post('/api/v1/admin/Pricebooks/GetHistoryData', body),
                        getHistoryInitData: query => utils.get('/api/v1/admin/Pricebooks/GetHistoryInitData', query),
                        getPricebookDefinitionInitData: query => utils.get('/api/v1/admin/Pricebooks/GetPricebookDefinitionInitData', query),
                        savePricebookDefinition: body => utils.post('/api/v1/admin/Pricebooks/SavePricebookDefinition', body),
                        savePricebookEntry: body => utils.post('/api/v1/admin/Pricebooks/SavePricebookEntry', body),
                        deletePricebookEntry: body => utils.post('/api/v1/admin/Pricebooks/DeletePricebookEntry', body),
                        getCustomFields: query => utils.get('/api/v1/admin/Pricebooks/GetCustomFields', query),
                        deleteAllEntries: body => utils.post('/api/v1/admin/Pricebooks/DeleteAllEntries', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/Pricebooks/GenerateSecretKey', query)
                    },
                    ProxyUser: {
                        getInitData: query => utils.get('/api/v1/admin/ProxyUser/GetInitData', query),
                        getUsersForTenant: body => utils.post('/api/v1/admin/ProxyUser/GetUsersForTenant', body),
                        loginAsProxyUser: body => utils.post('/api/v1/admin/ProxyUser/LoginAsProxyUser', body)
                    },
                    QuoteTabPermissions: {
                        getListInitData: query => utils.get('/api/v1/admin/QuoteTabPermissions/GetListInitData', query),
                        deletePermission: body => utils.post('/api/v1/admin/QuoteTabPermissions/DeletePermission', body),
                        getPermission: query => utils.get('/api/v1/admin/QuoteTabPermissions/GetPermission', query),
                        savePermission: body => utils.post('/api/v1/admin/QuoteTabPermissions/SavePermission', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/QuoteTabPermissions/GenerateSecretKey', query)
                    },
                    SAPProvider: {
                        getCommerceSettings: query => utils.get('/api/v1/admin/SAPProvider/GetCommerceSettings', query),
                        getUsers: query => utils.get('/api/v1/admin/SAPProvider/GetUsers', query),
                        getCommonSettings: query => utils.get('/api/v1/admin/SAPProvider/GetCommonSettings', query),
                        getC4CSettings: query => utils.get('/api/v1/admin/SAPProvider/GetC4CSettings', query),
                        getC4CObsoleteSettings: query => utils.get('/api/v1/admin/SAPProvider/GetC4CObsoleteSettings', query),
                        getS4Settings: query => utils.get('/api/v1/admin/SAPProvider/GetS4Settings', query),
                        saveCommerceSettings: body => utils.post('/api/v1/admin/SAPProvider/SaveCommerceSettings', body),
                        saveCommonSettings: body => utils.post('/api/v1/admin/SAPProvider/SaveCommonSettings', body),
                        saveC4CSettings: body => utils.post('/api/v1/admin/SAPProvider/SaveC4CSettings', body),
                        saveC4CObsoleteSettings: body => utils.post('/api/v1/admin/SAPProvider/SaveC4CObsoleteSettings', body),
                        saveS4Settings: body => utils.post('/api/v1/admin/SAPProvider/SaveS4Settings', body),
                        getInitData: query => utils.get('/api/v1/admin/SAPProvider/GetInitData', query),
                        generateSecretKey: query => utils.get('/api/v1/admin/SAPProvider/GenerateSecretKey', query)
                    },
                    Scripting: {
                        checkSyntax: body => utils.post('/api/v1/admin/Scripting/CheckSyntax', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/Scripting/GenerateSecretKey', query)
                    },
                    TablesOnQuotes: {
                        getQuoteTableInitData: query => utils.get('/api/v1/admin/TablesOnQuotes/GetQuoteTableInitData', query),
                        saveQuoteTableModelWithPermissions: body => utils.post('/api/v1/admin/TablesOnQuotes/SaveQuoteTableModelWithPermissions', body),
                        getFormatedPermsissionText: body => utils.post('/api/v1/admin/TablesOnQuotes/GetFormatedPermsissionText', body),
                        getQuoteTableColumnList: query => utils.get('/api/v1/admin/TablesOnQuotes/GetQuoteTableColumnList', query),
                        getAllPermissionsAndStatuses: query => utils.get('/api/v1/admin/TablesOnQuotes/GetAllPermissionsAndStatuses', query),
                        getQuoteTableGroups: query => utils.get('/api/v1/admin/TablesOnQuotes/GetQuoteTableGroups', query),
                        saveQuoteTableColumns: body => utils.post('/api/v1/admin/TablesOnQuotes/SaveQuoteTableColumns', body),
                        deletePermission: body => utils.post('/api/v1/admin/TablesOnQuotes/DeletePermission', body),
                        getListInitData: query => utils.get('/api/v1/admin/TablesOnQuotes/GetListInitData', query),
                        deleteQuoteTable: body => utils.post('/api/v1/admin/TablesOnQuotes/DeleteQuoteTable', body),
                        getQuoteTableTranslations: query => utils.get('/api/v1/admin/TablesOnQuotes/GetQuoteTableTranslations', query),
                        saveQuoteTableTranslations: body => utils.post('/api/v1/admin/TablesOnQuotes/SaveQuoteTableTranslations', body),
                        getInitDataForActionsTab: query => utils.get('/api/v1/admin/TablesOnQuotes/GetInitDataForActionsTab', query),
                        saveQuoteTableActions: body => utils.post('/api/v1/admin/TablesOnQuotes/SaveQuoteTableActions', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/TablesOnQuotes/GenerateSecretKey', query),
                    },
                    UsersPermissionGroups: {
                        getPermission: query => utils.get('/api/v1/admin/UsersPermissionGroups/GetPermission', query),
                        savePermission: body => utils.post('/api/v1/admin/UsersPermissionGroups/SavePermission', body),
                        getUsers: query => utils.get('/api/v1/admin/UsersPermissionGroups/GetUsers', query),
                        getUsersBelongingToGroup: query => utils.get('/api/v1/admin/UsersPermissionGroups/GetUsersBelongingToGroup', query),
                        postUsersBelongingToGroup: body => utils.post('/api/v1/admin/UsersPermissionGroups/GetUsersBelongingToGroup', body),
                        getUsersBelongingToGroupInitial: query => utils.get('/api/v1/admin/UsersPermissionGroups/GetUsersBelongingToGroupInitial', query),
                        postUsersBelongingToGroupInitial: body => utils.post('/api/v1/admin/UsersPermissionGroups/GetUsersBelongingToGroupInitial', body),
                        generateSecretKey: query => utils.get('/api/v1/admin/UsersPermissionGroups/GenerateSecretKey', query)
                    }
                },
                quotes: {
                    revisions: query => utils.get('/api/v1/quotes/{quoteId}/revisions', query),
                    documents: query => utils.get('/api/v1/quotes/{quoteId}/documents', query),
                    attachments: query => utils.get('/api/v1/quotes/{quoteId}/attachments', query),
                    '{attachmentId}': query => utils.get('/api/v1/quotes/{quoteId}/attachments/{attachmentId}', query),
                    file: query => utils.get('/api/v1/quotes/{quoteId}/documents/{documentId}/file', query),
                    invoke: body => utils.post('/api/v1/quotes/{quoteId}/quoteTables/{tableName}/actions/{actionId}/invoke', body),
                    quoteTableActions: query => utils.get('/api/v1/quotes/{quoteId}/quoteTables/{tableName}/actions', query),
                    actions: query => utils.get('/api/v1/quotes/{quoteId}/actions', query),
                    quotes: body => utils.post('/api/v1/quotes', body),
                    getComments: query => utils.get('/api/v1/quotes/{quoteId}/comments', query),
                    postComments: body => utils.post('/api/v1/quotes/{quoteId}/comments', body),
                    getItemComments: query => utils.get('/api/v1/quotes/{quoteId}/items/{itemId}/comments', query),
                    postItemComments: body => utils.post('/api/v1/quotes/{quoteId}/items/{itemId}/comments', body),
                    'get{quoteId}': query => utils.get('/api/v1/quotes/{quoteId}', query),
                    'delete{quoteId}': body => utils.delete('/api/v1/quotes/{quoteId}', body),
                    'patch{quoteId}': body => utils.patch('/api/v1/quotes/{quoteId}', body),
                    '{roleId}': body => utils.patch('/api/v1/quotes/{quoteId}/customers/{roleId}', body),
                    getItems: query => utils.get('/api/v1/quotes/{quoteId}/items', query),
                    postItems: body => utils.post('/api/v1/quotes/{quoteId}/items', body),
                    'get{itemId}': query => utils.get('/api/v1/quotes/{quoteId}/items/{itemId}', query),
                    'delete{itemId}': body => utils.delete('/api/v1/quotes/{quoteId}/items/{itemId}', body),
                    'patch{itemId}': body => utils.patch('/api/v1/quotes/{quoteId}/items/{itemId}', body),
                    productTypes: query => utils.get('/api/v1/quotes/{quoteId}/productTypes', query),
                    $count: query => utils.get('/api/v1/quotes/{quoteId}/productTypes/$count', query),
                    getRows: query => utils.get('/api/v1/quotes/{quoteId}/quoteTables/{tableName}/rows', query),
                    postRows: body => utils.post('/api/v1/quotes/{quoteId}/quoteTables/{tableName}/rows', body),
                    'delete{rowId}': body => utils.delete('/api/v1/quotes/{quoteId}/quoteTables/{tableName}/rows/{rowId}', body),
                    'patch{rowId}': body => utils.patch('/api/v1/quotes/{quoteId}/quoteTables/{tableName}/rows/{rowId}', body),
                    quoteTable$count: query => utils.get('/api/v1/quotes/{quoteId}/quoteTables/{tableName}/rows/$count', query),
                    item$count: query => utils.get('/api/v1/quotes/{quoteId}/items/$count', query),
                    selectedAttributes: query => utils.get('/api/v1/quotes/{quoteId}/items/{itemId}/selectedAttributes', query),
                    itemPricingConditions: query => utils.get('/api/v1/quotes/{quoteId}/items/{itemId}/pricingConditions', query),
                    pricingConditions: query => utils.get('/api/v1/quotes/{quoteId}/pricingConditions', query),
                    involvedParties: query => utils.get('/api/v1/quotes/{quoteId}/involvedParties', query),
                    'delete{involvedPartyId}': body => utils.delete('/api/v1/quotes/{quoteId}/involvedParties/{involvedPartyId}', body),
                    'patch{involvedPartyId}': body => utils.patch('/api/v1/quotes/{quoteId}/involvedParties/{involvedPartyId}', body),
                    'post{partnerFunctionKey}': body => utils.post('/api/v1/quotes/{quoteId}/involvedParties/{partnerFunctionKey}', body),
                    itemActions: query => utils.get('/api/v1/quotes/{quoteId}/items/{itemId}/actions', query),
                    actionInvoke: body => utils.post('/api/v1/quotes/{quoteId}/items/{itemId}/actions/{actionId}/invoke', body),
                    history: query => utils.get('/api/v1/quotes/{quoteId}/approvals/history', query),
                    approvals: query => utils.get('/api/v1/quotes/{quoteId}/approvals', query),
                },
                TenantResourceConsumption: {
                    getResourceConsumptionInfoForAllTenants: query => utils.get('/api/v1/TenantResourceConsumption/GetResourceConsumptionInfoForAllTenants', query),
                    getResourceConsumptionInfo: query => utils.get('/api/v1/TenantResourceConsumption/GetResourceConsumptionInfo', query),
                    getResourceConsumptionInfoForCurrentTenant: query => utils.get('/api/v1/TenantResourceConsumption/GetResourceConsumptionInfoForCurrentTenant', query),
                    getUserActivityData: query => utils.get('/api/v1/TenantResourceConsumption/GetUserActivityData', query),
                    getBusinessPerformance: query => utils.get('/api/v1/TenantResourceConsumption/GetBusinessPerformance', query),
                    getBusinessPerformanceFilterData: query => utils.get('/api/v1/TenantResourceConsumption/GetBusinessPerformanceFilterData', query),
                    getSystemPerformance: query => utils.get('/api/v1/TenantResourceConsumption/GetSystemPerformance', query)
                },
                markets: query => utils.get('/api/v1/markets', query),
                customers: {
                    customers: query => utils.get('/api/v1/customers', query),
                    '{crmAccountId}': body => utils.patch('/api/v1/customers/c4c/update/{crmAccountId}', body)
                }
            }
        },
        CustomAPI: {
            ExecuteScript: async (scriptName, body) => {
                const response = await fetch('/CustomAPI/ExecuteScript', {
                    method: 'post',
                    body: `scriptName=${scriptName}&param=${encodeURIComponent(JSON.stringify(body))}`,
                    headers: {
                        'X-CSRF-Token': csrfToken,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    }
                });
                return await response.json();
            }
        }
    };
    window.addEventListener("message", async (message) => {
        let request = message.data;
        request.response = await Promise.all(request.query.map(async (q) => {
            const queueApi = q.api.split('/').filter(x => x !== '');
            let selectedApi = interface;
            while (queueApi.length)
                selectedApi = selectedApi[queueApi.shift()];
            return {
                api: q.api,
                function: q.function,
                data: await selectedApi[q.function](...q.arguments)
            };
        }));
        request.status = 'response';
        let iframe = document.getElementById(request.iframe);
        iframe.contentWindow.postMessage(request, "https://brspnnggrt.github.io/");
    });
})();
