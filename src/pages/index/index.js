export const categoriesList = [
  { name: '国庆新款', selected: true, _id: 'u2cmc5dd', dir: 'new' },
  { name: '渐变国旗', selected: false, _id: 'akpxbnde', dir: 'gradual' },
  { name: '质朴国旗', selected: false, _id: 'ab2flncf', dir: 'simple' },
  { name: '其他', selected: false, _id: 'o50mypkj', dir: 'other' }
];

// const baseUrl = getApp().globalData.baseUrl;
const baseUrl = 'https://gitee.com/rookie_iblogger/up_Img/raw/master';

export const imageCat = {
  new: Array.from({ length: 11 }, (x, i) => {
    return {
      image_url: `${baseUrl}/new/` + (i + 1) + '.png',
      parse_url: `${baseUrl}/new/` + (i + 1) + '.png',
      _id: '47s0sm0lnew' + (i + 1)
    };
  }),
  gradual: Array.from({ length: 6 }, (x, i) => {
    return {
      image_url: `${baseUrl}/gradual/` + (i + 1) + '.png',
      parse_url: `${baseUrl}/gradual/` + (i + 1) + '.png',
      _id: '47s0sm0lgradual' + (i + 1)
    };
  }),
  simple: Array.from({ length: 7 }, (x, i) => {
    return {
      image_url: `${baseUrl}/simple/` + (i + 2) + '.png',
      parse_url: `${baseUrl}/simple/` + (i + 2) + '.png',
      _id: '47s0sm0lsimple' + (i + 2)
    };
  }),
  other: Array.from({ length: 2 }, (x, i) => {
    return {
      image_url: `${baseUrl}/other/` + (i + 1) + '.png',
      parse_url: `${baseUrl}/other/` + (i + 1) + '.png',
      _id: '47s0sm0lother' + (i + 1)
    };
  })
};

export const shareInfo = {
  title: '我刚刚换上了国庆头像，你也来领取一个吧',
  desc: '领取你的国庆头像，为祖国加油',
  imageUrl: `${baseUrl}/share.jpg`,
  path: '/pages/photo/index',
  success: function (e) {
    console.log(e);
  }
};
