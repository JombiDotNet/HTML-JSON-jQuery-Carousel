<%@ Page Language="VB" %>

<%

  ' Find Files in Directory - ASP.NET
  ' Copyright ©2014 - Jim Richards - JOMBI designs
  ' Thanks goes to: http://james.newtonking.com/json
  
  Dim directory = Request.Form("dir")
  If String.IsNullOrEmpty(directory) Then directory = "/"

  Dim path = Server.MapPath(directory)

  If System.IO.Directory.Exists(path) Then
    Dim filenames = From file In System.IO.Directory.EnumerateFiles(path) Select System.IO.Path.GetFileName(file)
    Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(filenames))
  End If
%>