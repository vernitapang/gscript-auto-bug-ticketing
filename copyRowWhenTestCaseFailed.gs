function onEdit(e) {
  var sheet = e.range.getSheet();
  var range = e.range;
  var bugsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bugs");
  var lastRow =  bugsSheet.getLastRow();

  if (sheet.getName() == "Test Cases" && range.getColumn() == 7 && e.value == "FAIL") {
    var bugsNextRow = lastRow+1;

    bugsSheet.getRange(bugsNextRow, 1).setValue("=ROW()-1");

    bugsSheet.getRange(bugsNextRow, 3).setValue("='Test Cases'!B"+range.getRow());

    bugsSheet.getRange(bugsNextRow, 4).setValue("='Test Cases'!C"+range.getRow());

    bugsSheet.getRange(bugsNextRow, 5).setValue("='Test Cases'!D"+range.getRow());

    bugsSheet.getRange(bugsNextRow, 7).setValue("='Test Cases'!E"+range.getRow());

    bugsSheet.getRange(bugsNextRow, 8).setValue("='Test Cases'!F"+range.getRow());

    bugsSheet.getRange(bugsNextRow, 9).setValue("REPORTED");

    bugsSheet.getRange(bugsNextRow, 10).setValue("='Test Cases'!H"+range.getRow());
  }
}