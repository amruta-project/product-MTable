sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator",
	"sap/ui/model/Filter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterType"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,FilterOperator,Filter,JSONModel,FilterType) {
        "use strict";

        return Controller.extend("productmtable.controller.Product_M_Table", {
            onInit: function () {
                this.onReadProductData();
               
            },


            onReadProductData: function(){

                var oModel = this.getOwnerComponent().getModel();
               var oJSONModel = new sap.ui.model.json.JSONModel();
               var that=this;
                oModel.read("/ProductSet",{
                            success: function(response)
                            {
                                debugger;
                              //  oJSONModel.setData(oresponse);
                                oJSONModel.setData(response.results);
                                that.getView().setModel(oJSONModel,"ProductModelData");
                                //that.getView().setModel(oJSONModel);
                            }.bind(that),
                            error: function(error){
                                debugger;
                            }

                })

        },
        onLiveSearchTableData: function(oEvent){
            debugger;
          
            var sValue = oEvent.getParameter("query");
           
            var oBinding = this.byId('idTable').getBinding("items");
            if(sValue)
            {
           
            var oFilters = [new Filter({
                filters: [
                  
                    new Filter("ProductID", FilterOperator.Contains, sValue),            
                    new Filter("TypeCode", FilterOperator.Contains, sValue),
                    new Filter("Category", FilterOperator.Contains, sValue),
                    new Filter("Name", FilterOperator.Contains, sValue),            
                    new Filter("Description", FilterOperator.Contains, sValue),
                    new Filter("SupplierID", FilterOperator.Contains, sValue),
                    new Filter("SupplierName", FilterOperator.Contains, sValue),            
                  //  new Filter("TaxTarifCode", FilterOperator.Contains, sValue)
                ],
                and: false // or
            })];
            }
            else{
                oFilters=[];
            }
            oBinding.filter(oFilters);               
               
        },
        onUpdateFinish: function(evt){
            debugger;
            //var title = this.byId('ProductCount').getText();
           // var title = this.getOwnerComponent().getModel('i18n').getText('title');
           var title =  this.getOwnerComponent().getModel('i18n').getResourceBundle().getText('title');
            //const reason = event.getParameter("reason");
           var count = evt.getParameter("total");
           this.byId('ProductCount').setText(title+"("+count+")");
          
        },
        onliveChange: function(oEvent)
        {
            debugger;
            var sValue = oEvent.getParameter("newValue");
           
            var oBinding = this.byId('idTable').getBinding("items");
            if(sValue)
            {
           
            var oFilters = [new Filter({
                filters: [
                  
                    new Filter("ProductID", FilterOperator.Contains, sValue),            
                    new Filter("TypeCode", FilterOperator.Contains, sValue),
                    new Filter("Category", FilterOperator.Contains, sValue),
                    new Filter("Name", FilterOperator.Contains, sValue),            
                    new Filter("Description", FilterOperator.Contains, sValue),
                    new Filter("SupplierID", FilterOperator.Contains, sValue),
                    new Filter("SupplierName", FilterOperator.Contains, sValue),            
                  //  new Filter("TaxTarifCode", FilterOperator.Contains, sValue)
                ],
                and: false // or
            })];
            }
            else{
                oFilters=[];
            }
            oBinding.filter(oFilters);  

        },
         onRefreshPress: function(){
          debugger;   
                 this.onReadProductData();
          }

        
        });
    });
            
    
