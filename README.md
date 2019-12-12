# What?

この app は Vim の背景を擬似的に動画にするために作られたアプリです．
具体的には，geektool というアプリを用いてデスクトップに youtube 動画を再生させます．

This app displays a video on the background of vim.
Specifically, it palys a video by using geektool.

# Reaquirement

1. geektool  
   geektool は Mac 用アプリになるため，このアプリは Mac 専用になります．
   homebrew を使用している場合，以下のコマンドで geektool をインストールしてください．

   This app is for Mac only becuase geektool is a app for Mac.
   if you are using homebrew, please install geektool with homebrew.

   ```shell
   brew cask install geektool
   ```

   ```shell
   brew cask install geektool
   ```

2. playlist of youtube video  
   再生する youtube 動画の playlist ID を用意しておいてください．

   Please get playlist ID of youtube video.

# Usage

- このリポジトリを clone してください.  
  Please clone this repository.

  ```shell
  git clone https://github.com/faluna/vim-bg-youtube.git
  cd vim-bg-youtube
  ```

- モジュールをインストールしてください.  
  install modules.

  ```shell
  yarn install
  ```

- src ディレクトリ下に lists ディレクトリを作成してください．  
  Next, make the directory 'lists' under 'src' directory.

  ```shell
  mkdir src/lists
  ```

- lists ディレクトリ下に playlist.js ファイルを作り，以下のようにコードを記述してください．  
  Make playlist.js file under the lists directory, then write codes as follows

  ```javascript:/src/lists/playlist.js
  const playlist = 'playlist name';

  export default playlist;
  ```

- アプリ実行
  Runs the app.

  ```shell
  yarn start
  ```

- GeekTool の Web を選び, Properties の URL 欄に[http://localhost:3000]を記述  
  Select Web from Geeklets and write [http://localhost:3000] in URL item of Properties.

- Check the item 'Enable'.
