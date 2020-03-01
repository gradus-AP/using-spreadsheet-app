const SpreadSheetService = require('./spreadSheetService')
// 認証情報jsonファイルを読み込む
const CREDIT = require('<認証情報jsonファイルへのパス>')
// スプレッドシートキー
const SPREADSHEET_KEY = '<spreadsheetのキー>'

const spreadSheetService = new SpreadSheetService(SPREADSHEET_KEY);
// サービスアカウントによる認証
spreadSheetService.authorize(CREDIT)

// データを追加
const insertMany = async () => {
    await spreadSheetService.insert({id:1, name:'John Doe', age:40})
    await spreadSheetService.insert({id:2, name:'Jane Doe', age:30})
    await spreadSheetService.insert({id:3, name:'山田太郎', age:20})
    await spreadSheetService.insert({id:4, name:'山田花子', age:30})
}

insertMany()

// ageが30であるユーザーの情報を取得
spreadSheetService.select(row => row.age == 30)
.then(data => console.log(data))

// id=1のユーザーのnameを「Tom Doe」に更新
spreadSheetService.updateById(1, {name: 'Tom Doe'})

// id=4のユーザーを削除
spreadSheetService.deleteById(4)
