#pragma checksum "C:\Users\Jonathan\code\repos\practice\c#\library\Views\Home\Coffee.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "799ca40aa01a064d4af659f2c2fe3c0d81692924"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Coffee), @"mvc.1.0.view", @"/Views/Home/Coffee.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Coffee.cshtml", typeof(AspNetCore.Views_Home_Coffee))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Jonathan\code\repos\practice\c#\library\Views\_ViewImports.cshtml"
using library;

#line default
#line hidden
#line 2 "C:\Users\Jonathan\code\repos\practice\c#\library\Views\_ViewImports.cshtml"
using library.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"799ca40aa01a064d4af659f2c2fe3c0d81692924", @"/Views/Home/Coffee.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1ad4fb5953ac06db4b80c68adc72445bab9ced09", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Coffee : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "C:\Users\Jonathan\code\repos\practice\c#\library\Views\Home\Coffee.cshtml"
  
    ViewData["Title"] = "Coffee Page";

#line default
#line hidden
            BeginContext(47, 4, true);
            WriteLiteral("<h1>");
            EndContext();
            BeginContext(52, 17, false);
#line 4 "C:\Users\Jonathan\code\repos\practice\c#\library\Views\Home\Coffee.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(69, 29, true);
            WriteLiteral("</h1>\r\n\r\n<p>Coffee Page</p>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
