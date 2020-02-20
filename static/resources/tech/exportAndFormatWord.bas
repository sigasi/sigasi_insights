Attribute VB_Name = "exportAndFormatWord"

Sub exportWord(fileFolder As String, fileName As String)
    
    'log file
    Const ForAppending = 8
    logFileLocation = fileFolder & "\log.txt"
    Set objFSO = CreateObject("Scripting.FileSystemObject")
    If objFSO.FileExists(logFileLocation) Then
      Set out = objFSO.GetFile(logFileLocation)
      Set logFile = out.OpenAsTextStream(ForAppending, TristateUseDefault)
    Else
      Set logFile = objFSO.CreateTextFile(logFileLocation)
    End If

    'Open the temporary html file generated from Sigasi.
    logFile.WriteLine ("Converting to .docx format.")
    ChangeFileOpenDirectory _
        fileFolder
    Documents.Open fileName:=fileName, ConfirmConversions:=False, _
        ReadOnly:=False, AddToRecentFiles:=False, PasswordDocument:="", _
        PasswordTemplate:="", Revert:=False, WritePasswordDocument:="", _
        WritePasswordTemplate:="", Format:=wdOpenFormatAuto, XMLTransform:=""
    
    Set current_doc = Documents(fileName)
    
    'Save the .html file as .docx
    current_doc.SaveAs2 fileName:="documentation.docx", FileFormat:= _
        wdFormatXMLDocument, LockComments:=False, Password:="", AddToRecentFiles _
        :=True, WritePassword:="", ReadOnlyRecommended:=False, EmbedTrueTypeFonts _
        :=False, SaveNativePictureFormat:=False, SaveFormsData:=False, _
        SaveAsAOCELetter:=False, CompatibilityMode:=15

    logFile.WriteLine ("Creating the cover page.")
    'Go to the top of the document and set the title.
    Selection.HomeKey Unit:=wdStory
    Selection.Style = current_doc.Styles("Title")
   
   'Set the subtitle.
    Selection.MoveDown Unit:=wdParagraph, Count:=1
    Selection.Style = current_doc.Styles("Subtitle")
   
    'Break away the cover page.
    Selection.MoveDown Unit:=wdParagraph, Count:=1
    Selection.InsertBreak Type:=wdPageBreak
    
    logFile.WriteLine ("Adding styling to the document.")
    'Apply a quickstyle to the complete document from MS Word 2016.
    current_doc.ApplyQuickStyleSet2 ("Shaded")
    
    logFile.WriteLine ("Writing table of content.")
    'Insert Table Of Contents
    Selection.InsertBreak Type:=wdPageBreak
    Selection.HomeKey Unit:=wdStory
    Selection.GoTo What:=wdGoToPage, Which:=2
    With current_doc
        .TablesOfContents.Add Range:=Selection.Range, RightAlignPageNumbers:= _
            True, UseHeadingStyles:=True, UpperHeadingLevel:=1, _
            LowerHeadingLevel:=3, IncludePageNumbers:=True, AddedStyles:="", _
            UseHyperlinks:=True, HidePageNumbersInWeb:=True, UseOutlineLevels:= _
            True
        .TablesOfContents(1).TabLeader = wdTabLeaderDots
        .TablesOfContents.Format = wdIndexIndent
    End With
    
    'Create a new word document for size manipulation of large images.
    Set new_doc = Documents.Add(DocumentType:=wdNewBlankDocument)
    page_width = current_doc.PageSetup.TextColumns.Width
    page_height = current_doc.PageSetup.PageHeight - current_doc.PageSetup.TopMargin - current_doc.PageSetup.BottomMargin

    'Size manipulation of large images.
    current_doc.Activate
    Dim total As Integer
    Dim curr As Integer
    total = 0
    curr = 0
    For Each ishape In current_doc.InlineShapes
        total = total + 1
    Next
    For Each ishape In current_doc.InlineShapes
        curr = curr + 1
        logFile.WriteLine ("Resizing Image " & curr & " of " & total)
        ishape.Select ' <work-around>
        Selection.Copy ' </work-around>
        new_doc.Content.PasteAndFormat (wdPasteDefault)
        Set new_ishape = new_doc.InlineShapes(1)
        new_ishape.LockAspectRatio = msoFalse
        new_ishape.ScaleWidth = 100
        new_ishape.ScaleHeight = 100
        ishape.LockAspectRatio = msoFalse
        If (new_ishape.Width > page_width) Then
            If ((page_width / new_ishape.Width) * new_ishape.Height > page_height) Then
                ishape.Width = page_height / new_ishape.Height * page_width
                ishape.Height = page_height
            Else
                ishape.Width = page_width
                ishape.Height = (page_width / new_ishape.Width) * new_ishape.Height
            End If
        ElseIf (new_ishape.Height > page_height) Then ' going to be shrinking both height and width, and width is okay already, so it'll be even okayer
            ishape.Width = page_height / new_ishape.Height * new_ishape.Width
            ishape.Height = page_height
        Else
            ishape.Width = new_ishape.Width
            ishape.Height = new_ishape.Height
        End If
        new_ishape.Delete
        ishape.LockAspectRatio = msoTrue
    Next
    
    'Allign all images to center.
    logFile.WriteLine ("Alligning Images")
    For Each oILShp In current_doc.InlineShapes
        oILShp.Select
        Selection.ParagraphFormat.Alignment = wdAlignParagraphCenter
    Next
    
    'Adding borders and alignment to table.
    logFile.WriteLine ("Styling tables")
    Dim tbl As Table
    For Each tbl In current_doc.Tables
        tbl.Style = "Table Grid"
        tbl.Rows.Alignment = wdAlignRowCenter
    Next tbl
    
    logFile.WriteLine ("Saving the document")
    'Save documentation.docx.
    current_doc.Save
    
    'False positive to discard the new document created without prompt.
    new_doc.Saved = True

End Sub

Public Sub callMacro()
    
    'Test function to run the invisible parameterised macro.
    Dim fileFolder As String, fileName As String
    fileFolder = "C:\Path\To\Project\sigasi-doc\"
    fileName = "documentation.html"
    
    exportWord fileFolder, fileName

End Sub
