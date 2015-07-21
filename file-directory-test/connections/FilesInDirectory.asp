<!--#include file="JSON_2.0.4.asp"-->
<%

  ' Find Files in Directory - Classic ASP.NET
  ' Copyright ©2014 - Jim Richards - JOMBI designs
  ' Thanks goes to:
  ' -https://code.google.com/p/aspjson/
  
  directory = Request.Form("dir")
  
  If len(directory) = 0 Then directory = "/"

  path = Server.MapPath(directory)

  Set data = jsArray()

  Set fs = Server.CreateObject("Scripting.FileSystemObject")

  If (fs.FolderExists(path)) Then
  
    Set folder = fs.GetFolder(path)

    For Each f In folder.Files
      data(Null) = f.Name
    Next
        
  End If

  data.Flush

  set fs=nothing
%>