<%@ Page Language="C#"%>

<%

  // Find Files in Directory - ASP.NET - C#
  // Copyright ©2014 - Jim Richards - JOMBI designs
  // Thanks goes to: http://james.newtonking.com/json
  
  var directory = Request.Form["dir"] ?? "/";

  var path = Server.MapPath(directory);

  if (System.IO.Directory.Exists(path)) {
    var filenames = from file in System.IO.Directory.EnumerateFiles(path) select System.IO.Path.GetFileName(file);
    Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(filenames));
  }
%>