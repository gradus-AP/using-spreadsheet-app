const SpreadSheetService = require('./spreadSheetService')
// 認証情報jsonファイルを読み込む
const CREDIT = require('<認証情報jsonファイルへのパス>')
// スプレッドシートキー
const SPREADSHEET_KEY = '<spreadsheetのキー>'

const setHeaderToSpreadsheet = async (spreasheetKey, sheetIndex, headerValues) => {
    // 一般ユーザーに公開していないスプレッドシートへアクセスしたい場合, 作成したサービスアカウントに対し
    // 閲覧権限を与えておく.
    const doc = new GoogleSpreadsheet(spreasheetKey);
    
    // サービスアカウントによる認証
    await doc.useServiceAccountAuth({
        client_email: CREDIT.client_email,
        private_key: CREDIT.private_key,
    });

    // スプレッドシートの情報を読み込みを行い, タイトルを取得
    await doc.loadInfo(); 
    const sheet = doc.sheetsByIndex[sheetIndex]

    // ヘッダー行を作成する
    await sheet.setHeaderRow(headerValues)

}

setHeaderToSpreadsheet(SPREADSHEET_KEY, 0, ['id', 'name', 'age'])