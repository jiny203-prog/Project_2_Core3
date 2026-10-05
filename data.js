/* 每一个色块对应一条数据，顺序 = 弧形里从左到右的顺序
   color : 色块颜色（详情页右侧 + 主页卡片）
   photo : 详情页左侧的照片
   lat/lng : 拍摄地点坐标（南纬、西经用负数）；还没填就留 null
   place : 地点名称（可留空） */
const ITEMS = [
  { color:'#7C8F3B', photo:'image/IMG_01.JPG', lat:null, lng:null, place:'' },
  { color:'#53C24D', photo:'image/IMG_02.JPG', lat:null, lng:null, place:'' },
  { color:'#02F364', photo:'image/IMG_03.JPG', lat:null, lng:null, place:'' },
  { color:'#716833', photo:'image/IMG_04.JPG', lat:null, lng:null, place:'' },
  { color:'#818C52', photo:'image/IMG_05.JPG', lat:null, lng:null, place:'' },
  { color:'#39756E', photo:'image/IMG_06.JPG', lat:null, lng:null, place:'' },
  { color:'#848C70', photo:'image/IMG_07.JPG', lat:40.73522, lng:-73.99530, place:'Greenwich Village, New York' },
  { color:'#92AE94', photo:'image/IMG_08.JPG', lat:null, lng:null, place:'' },
  { color:'#76714E', photo:'image/IMG_09.JPG', lat:null, lng:null, place:'' },
  { color:'#3B562C', photo:'image/IMG_10.JPG', lat:null, lng:null, place:'' },
  { color:'#34443C', photo:'image/IMG_11.JPG', lat:null, lng:null, place:'' },
  { color:'#385C52', photo:'image/IMG_12.JPG', lat:null, lng:null, place:'' },
  { color:'#4CAF8D', photo:'image/IMG_13.JPG', lat:null, lng:null, place:'' },
];