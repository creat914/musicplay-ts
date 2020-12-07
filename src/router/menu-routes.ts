import {IchildMenu} from '@/utils/interface'
export const menuRoutes: Array<IchildMenu> = [{
  path: '/MusicManger',
  name: "音乐管理",
  children: [{
    path: '/SingerManger',
    name: "歌手管理"
  },{
    path: '/SongManger',
    name: "歌曲管理"
  }]
}];
