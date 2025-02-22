var token = "___TOKEN____";
  var telegramUrl = "https://api.telegram.org/bot"+ token;
  var webAppUrl = "______URL SCRIPT_____";


function setWebhook() {
var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
var response = UrlFetchApp.fetch(url);
//Logger.log(response.getContentText())
}

function sendMessage(id, text, keyBoard) {
var data = {
  method: "post",
  payload: {
    method: "sendMessage",
    chat_id: String(id),
    text: text,
    parse_mode: "HTML",
    reply_markup: JSON.stringify(keyBoard)
    }
   };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/',data);
}  

function doPost(e) {
var contents = JSON.parse(e.postData.contents);
var ssId = "_____HOJA_SPREADSHEET_____";
var sheet = SpreadsheetApp.openById(ssId).getSheetByName("___Hoja1___");
  
 if (contents.callback_query){
   var id = contents.callback_query.from.id;
   var data = contents.callback_query.data;
   
   if(data == "dato1"){
    var dato1 = sheet.getDataRange().getCell(2, 9).getValue();
    return sendMessage(id, dato1);
    } else if (data == "dato2"){
    var dato2 = sheet.getDataRange().getCell(3, 9).getValue();
    return sendMessage(id, dato2);
    } else if (data == "dato3"){
    var dato3 = sheet.getDataRange().getCell(4, 9).getValue();
    return sendMessage(id, dato3);
    } else if (data == "dato4"){
    var dato4 = sheet.getDataRange().getCell(5, 9).getValue();
    return sendMessage(id, dato4);
    }
   
   } 
  
     else if (contents.message){
     var id = contents.message.from.id;
     var text = contents.message.text;
     
     if(text.indexOf("-") !== -1){
       
        var dateNow = new Date;
        var reformateDate = dateNow.getMonth() + 1 + "/" + dateNow.getDate();
        var item = text.split("-");
        sheet.appendRow([ reformateDate, "Ingresado por Telegram", item[0], item[1], item[2], item[3], item[4]]);
        return sendMessage(id, "Agregado a su planilla '____EJEMPLO YOUTUBE___'");
        } 
       
     else {
          var keyBoard = {
            "inline_keyboard":[
              [{
                "text": "dato1",
                "callback_data": "dato1"
               }],
              
              [{
                "text": "dato2",
                "callback_data": "dato2"
               }],
              [{
                "text": "dato3",
                "callback_data": "dato3"
               }],
              
              [{
                "text": "dato4",
                "callback_data": "dato4"
               }],
             
              ] 
              
            };
              
          return sendMessage(id, "Por favor ingrese el formato [nro1]-[nro2]-[nro3]-[nro4]", keyBoard);
      }
     
   }
  } 
