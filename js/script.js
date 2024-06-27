// const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&limit=50&term=YOASOBI`;

// $.getJSON(requestUrl, function (data) {
//     //送り返されたデータを使ってこの部分で色々やる
//     console.log(data)
// });

// const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&limit=50&term=YOASOBI`;

// $.getJSON(requestUrl, function (data) {
//         console.log(data)
// });



$("#btn").on("click", function () {

//APIキーを指定
const API_KEY = '5f4c8f89c6b92faa';// HOTPEPPER APIキー
const KEYWORD = $("#keyword").val();// 追加
const URL = 'https://webservice.recruit.co.jp/hotpepper/shop/v1/?key=' + API_KEY + '&keyword=' + encodeURIComponent(KEYWORD) ;
// '&format=json'

$.getJSON(URL, function (data) {
        console.log(data);
        $('#result').empty(); // 結果をクリア


        const storesFromAPI = data.results
        storesFromAPI.forEach(function(store){
            const name = store.results.shop.name; //店名
            const address = store.results.shop.address; //住所
            const dinner = `
                <div>
                    <p class="track-name">${name}</p>
                    <p class="artist-name">${address}</p>
                </div>`;
            $("#result").append(dinner);
            //ここに繰り返したい処理の内容を書く
        });

    });
});
