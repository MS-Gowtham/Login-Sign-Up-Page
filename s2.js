// <!--/Data Layer-->
    // <!-- targetPageParams(), targetPageParamsAll(), Data Providers or targetGlobalSettings() functions to enrich the visitor profile or modify the library settings-->
    
        targetPageParams = function() {
            return {
                "a": 1,
                "b": 2,
                "pageName": digitalData.page.pageInfo.pageName,
                "profile": {
                    "age": 26,
                    "country": {
                        "city": "San Francisco"
                    }
                }
            };
        };
        targetPageParams();
        window.targetGlobalSettings = {
   cookieDomain: 'MS-Gowtham.github.io' // set cookies on the subdomain
};