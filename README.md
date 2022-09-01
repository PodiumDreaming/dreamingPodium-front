# Wright App _ front  

Mobile App 'Wright' Frontend using ReactNative

Training diary services for athletes 🏃🏻‍♀️

2021 '경희대학교 Startup the dream' 대상을 수상하였습니다 🏆


***

Abstract
------------
빠르고 간편하게 작성하는 훈련일지.    
체계적이고 효과적으로 훈련 내용, 부상, 컨디셔닝을 관리할 수 있도록 도와주는 모바일 어플리케이션입니다.   
이 레포지토리에는 프론트엔드 코드가 담겨있습니다.
프론트엔드는 정지현이 담당하였고 관리하고 있습니다.   
#### 백엔드에 관련된 내용은 여기서 확인할 수 있습니다: [Click Here][back_link]

[back_link]: https://github.com/PodiumDreaming/Dreaming_Podium_Backend "백엔드 깃허브"

Quick and easy way to write trainging report.   
Wright is a mobile application that helps manage training, injury, conditioning records in a systematic and effeective manner.   
This repository contains all information about frontend code.   
Frontend part is made and managed by Jihyoun Jeong.   
#### You can check backend here: [Click Here][back_link]

***

Team Member
-----------
#### 경희대학교 컴퓨터공학과
2017104024 정민혁 jeongmh09@naver.com   
2018103062 정지현 jihyoun0602@gmail.com   


***

Composition
-----------
프로젝트의 주요 구성 요소는 다음과 같습니다:      
Major composition of this project are as followed:   
> * App
>   + assets
>     - fonts
>     - images
>     - svg
>   + components
>     + conditioning
>       - AppSelectPane.js
>       - AppSlider.js
>       - AppXBar.js
>       - ConditionCard.js
>       - ConditionSelect.js
>       - EmptyCard.js
>       - FullCondition.js
>       - FullInjury.js
>       - InjurySelect.js
>     + training
>       - AppCollasibleContent.js
>       - AppCollapsibleTitle.js
>       - CollapsibleCard.js
>       - HeaderProfile.js
>       - ImageDelete.js
>       - RoutineItem.js
>     - AppCalender.js
>     - AppModal.js
>     - AppPicker.js
>     - AppSwiper.js
>     - CheckButton.js
>     - Footer.js
>     - HomePareCard.js
>     - InjurySVG.js
>     - ObjectCard.js
>     - ObjectItems.js
>     - ProfileInputLine.js
>     - SocialButton.js
>   + config
>   + navigation
>     - BottomTab.js
>     - DepthStack.js
>     - DreamStack.js
>     - HomeStack.js
>     - MainStack.js
>     - ProfileStack.js
>   + reducer
>     - modalSlice.js
>     - postingSlice.js
>     - userSlice.js
>   +screens
>     + Auth
>       - LoginScreen.js
>       - loginApple.js
>       - loginKakao.js
>     + Depth
>       - ConditioningNoteScreen.js
>       - ProfileEditScreen.js
>       - TrainingNoteScreen.js
>       - WritingScreen.js
>     + Home
>       - DreamScreen.js
>       - HomeScreen.js
>       - ProfileScreen.js
>   +utils
>     - api.js
>     - auth.js
>     - note.js
>     - profile.js
>   - index.js
>   - store.js
> * ios 
> * android 
> * package.json 
> * pakage-lock.json

### Description
#### android
android 폴더에는 android project 파일이 담겨있습니다. android app을 build 할 때 사용합니다.  
android folder contains android project files. It is used when building an android app.
#### ios
ios 폴더에는 ios project 파일이 담겨있습니다. ios app을 build 할 때 사용합니다.  
ios folder contains ios project files. It is used when building an ios app.
#### index.js
application의 코드가 bundling 됩니다.
Bundle this application.
#### store.js
Redux sotre 전체 전역 변수를 모아서 관리합니다.
Manages all global variables of Redux store.
#### utils
axios 인스턴스를 생성한 api.js이 있습니다. 로그인,기록 ,프로필 파트에 필요한 통신을 모듈화 하여 관리합니다.
Base url 은 보안을 위해 환경 변수로 관리합니다.
api.js that created an axios instance. Defines  login, record, and profile axios operations to axios communicate.
Base url is managed as an environment variable for security.
#### screens
스크린을 모아둔 파일입니다. 각 스크린들은 컴포넌트들로 이루어져 있습니다.
Containing screens. Each screen is made up of components.
#### reducer
Redux 관련 함수들을 모아놓은 파일입니다. Createasyncthunk를 사용하여 비동기 처리를 하였고 긴 코드를 간단하게 작성할 수 있었습니다.
File that collects functions related to Redux. Createasyncthunk for asynchronous processing, and for write long code simply.
#### navigation
앱의 화면 전환 및 탐색 기록을 위한 navagator를 관리하는 파일입니다.
Manages the navagator for app's screen transitions and navigation history.
#### config
글로벌스타일 및 질환 리스트 등을 모아놓은 파일입니다.
Defines globalStyle and manages information for picker list.
#### components
각 스크린에 쓰이는 컴포넌트를 보관한 파일입니다. 컨디셔닝, 트레이닝, 공통 컴포넌트로 성격이 나뉘어져 있으며 각 컴포넌트들은 재사용 가능합니다.
Contains the components used for each screen. It is divided into conditioning, training, and common components, and each component is reusable.
#### assets
이미지와 폰트를 보관하는 파일입니다.
Stores images and fonts.

***



## Initial Screen
<img src="https://user-images.githubusercontent.com/55846598/145140612-9f199952-5ee2-4c14-abba-5e210f44484c.PNG"  width="200" height="400"/>


## Installation    

######  1. Install NPM packages
```
npm install
```
######  2. Install pod
```
cd ios && pod install 
```
######  3. Start
```
npm run start
```
######  4. Run simulator
```
npx react-native run-ios / npx react-native run-android
```


---


### License
Distributed under the DreamingPodium and Jihyoun Jung.

### Contact
Jihyoun Jung - jihyoun0602@gmail.com
